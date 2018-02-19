Dash.report_explorer = {};

(function(_this) {

	_this.LOGGER_NAME = `Dash.report_explorer`;
    Tapingo.utils.set_logger(_this, _this.LOGGER_NAME);

	var report_shops_modal_template = Template('report_shops_modal_template', '/static/templates/dashboard/report_shops_modal.html'),
		report_explorer_template = Template('report_explorer_template', '/static/templates/dashboard/report_explorer.html');

	var ReportExplorer, ReportChartBuilder, ReportTableBuilder, FinanceReportExplorer;

	// Change a UIKit tooltip string
	var changeTooltip = function (control, new_text) {
		control.removeData("tooltip");
		control.removeData("cached-title")
		control.attr("title", new_text);
		control.attr("data-cached-title", new_text);
    };

	_this.interval_options = [
		{'value': "15",
		 'label': '15 Min'},
		{'value': "hour",
		 'label': 'Hour'},
		{'value': "day",
		 'label': 'Day',
		 'date': true},
		{'value': "week",
		 'label': 'Week',
		 'date': true},
		{'value': "month",
		 'label': 'Month',
		 'date': true},
	];

	ReportExplorer = function(options) {
		var This = this;

		this.settings = this.get_explorer_config(options);

		this.settings.wrapper = $(this.settings.wrapper);
		this.wrapper = this.settings.wrapper;


		this.date_intertval_ops = _this.interval_options
									   .filter(function(opt) { return opt.date })
									   .map(function(opt) { return opt.value });

		this.system_data = {
			'reports': {},
			'groups': {},
			'yesterday': Date.create('yesterday').format('{yyyy}-{MM}-{dd}'),
			'today': Date.create('today').format('{yyyy}-{MM}-{dd}')
		};

		this.controls = {
			'group': null,
			'report': null,
			'interval': null,
			'dates': null,
			'end_time': null,
			'shops': null,
			'month_date_year': null,
			'month_date_month': null,

			'export': null,
			'length': null,
			'goto_page': null,
			'prev_page': null,
			'next_page': null
		};

		this.selected = {
			'group': null,
			'report': null,
			'interval': null,
			'dates': {
				'start_time': null,
				'end_time': null,
			},
			'end_time': null,
			'shops': null
		};

		this.submit_data = null;
		this.stop_query = null;
		this.chart_obj = null;
		this.datatable_obj = null;

		this.available_datetime_range = this.build_month_range();

		this.load_defaults(function() {
			This.build();

			This.chart = new ReportChartBuilder(This);
			This.table = new ReportTableBuilder(This);

			This.chart.init();
			This.table.init();
			
			This.hook_events();

			This.init_form();
		});
	};

	ReportExplorer.prototype.find = function(a, b, c, d) {
		return this.wrapper.find(a, b, c, d);
	};

	ReportExplorer.prototype.get_explorer_config = function(options) {
		var defaults = {
				'wrapper': $(),
				'allow_groups': null,
				'init_controls': null,
				'allow_shop_selector': false,
				'finance': false,
				'allow_end_time_selector': false,
				'controls_saving_key': null,
				'permission_path': 'dashboard:dashboard:reports',
				'mindate': Date.create('January 1 2012'),
				'maxdate': Date.create('tomorrow'),
			};

		return $.extend(defaults, options);
	};

	ReportExplorer.prototype.get_saved_value = function(control_key, value) {
		var saving_key = this.settings.controls_saving_key;

		if(!saving_key){
			return null;
		}

		return locache.session.get('dashboard.report.' + saving_key + '.' + control_key);
	};

	ReportExplorer.prototype.set_saved_value = function(control_key, value) {
		var saving_key = this.settings.controls_saving_key;

		if(!saving_key){
			return false;
		}

		return locache.session.set('dashboard.report.' + saving_key + '.' + control_key, value);
	};

	ReportExplorer.prototype.load_defaults = function(callback) {
		var This = this;

		_http.ajax({'finance': this.settings.finance}, '/dashboard/reports/explorer/').done(function(data) {
			This.system_data = data.context;
			window.JSON_DATA = data.context;
			This.use_redash_reports = data.context.use_redash_reports;

			// PSOL-77 retrieve and then merge reports defined via reporting API and any corresponding new report tab groups (such as CUSTOM)
			Tapingo.ReportService.actions.get_api_reports_and_groups()
			.then(result => {
				const { api_reports, api_groups } = result;
				Object.assign(This.system_data.reports, api_reports);
				Object.assign(This.system_data.groups, api_groups);
			})
			.then ( () => {
				const hasReports = Object.keys(This.system_data.reports).length > 0;
				const suppressGroups = 'init_controls' in This.settings && 'group_id' in This.settings.init_controls && !This.system_data.groups[This.settings.init_controls.group_id];
				if (hasReports && !suppressGroups) {
					callback();
				} else {
					_alert('Could not load any reports', 'Please contact support for assistance');
				}
			});
		});
	};

	ReportExplorer.prototype.build = function() {
		var This = this,
			settings = this.settings,
			use_redash_reports=this.use_redash_reports
			html = report_explorer_template.render({
				'rx': this
			});

		this.wrapper.html(html);
		this.wrapper.removeClass('loading');

		_clear_forbidden_links(this.wrapper);

		this.wrapper.find('*[data-control]').each(function() {
			This.controls[this.dataset.control] = $(this);
		});

		This.controls.report.chosen();
		This.controls.month_date_month.chosen({disable_search: true});
		This.controls.month_date_year.chosen({disable_search: true});

		This.controls.report.data('chosen').single_set_selected_text = function(text) {
			var item = this.selected_item;
			if (text == null) {
				text = this.default_text;
			}
			if (text === this.default_text) {
				item.addClass("chosen-default");
			} else {
				this.single_deselect_control_build();
				item.removeClass("chosen-default");
			}

			$.doTimeout(100, function() {
				var icon = This.selected.report && This.selected.report.description && This.selected.report.description.length? '<i data-uk-tooltip title="'+ This.selected.report.description+'" id="description_tooltip" title=""></i>' : '';
				item.find("span").html(text + icon);
			});

			return item.find("span").html(text);
		};

		if(this.controls.shops){
			var all_shops = This.get_all_shops().map(function(shop) { return shop.name });

			This.controls.shops.attr('data-value', '').find('.text').html('<b>'+all_shops.length+' Shops Selected:</b> ' + all_shops.join(', '));
		}

		// Calculate this week and last week according to business week in settings.
		var business_week = __tapingo_settings.business_week || 1;
		var cur_day = new Date().getDay();
		var last_week_begin_modifier = "last";
		var last_week_end_modifier = "this";
		if (cur_day < business_week){
			last_week_begin_modifier = "2 weeks before";
			last_week_end_modifier = "last";
		}
        var weekday = {
            0: "sunday",
            1: "monday",
            2: "tuesday",
            3: "wednesday",
            4: "thursday",
            5: "friday",
            6: "saturday"
        };

		var last_week_begin = last_week_begin_modifier + " " + weekday[business_week];
		var this_week_begin = last_week_end_modifier + " " + weekday[business_week];
		var day_before_business_week = business_week != 0 ? business_week - 1 : 6;
		var last_week_end = last_week_end_modifier + " " + weekday[day_before_business_week];


		This.date_picker = new Dash.date_picker.DatePickerControl({
			date_range: true,
			anchor: This.controls.dates,
			weekstart: 1,
			mindate: settings.mindate.clone(),
			maxdate: settings.maxdate.clone(),
			double_months: true,
			presets: [
				{
					'start': 'today',
					'end':   'today',
					'label': 'Today'
				}, {
					'start': 'yesterday',
					'end':   'yesterday',
					'label': 'Yesterday'
				}, {
					'start': this_week_begin,
					'end':   'today',
					'label': 'This Week'
				}, {
					'start': last_week_begin,
					'end':   last_week_end,
					'label': 'Last Week'
				}, {
					'start': 'the beginning of this month',
					'end':   'today',
					'label': 'This Month'
				}, {
					'start': 'the beginning of last month',
					'end':   'the end of last month',
					'label': 'Last Month'
				}
			]
		});
	};

	ReportExplorer.prototype.build_month_range = function() {
		var mindate = this.settings.mindate.clone(),
			maxdate = this.settings.maxdate,
			lastdate = mindate,
			year_to_month = {};

		for (var i = 0; i < 200; i++) {
			if(lastdate.isAfter(maxdate)){
				break;
			}

			if(!lastdate.isBefore('first day of this month') && lastdate.isBefore('last day of this month')){
				break;
			}

			year_to_month[lastdate.getFullYear()] = year_to_month[lastdate.getFullYear()] || [];
			year_to_month[lastdate.getFullYear()].push(lastdate.getMonth());
			lastdate.addMonths(1);
		}

		return year_to_month;
	};

	ReportExplorer.prototype.update_months = function(start, end) {
		if(!this.selected.report || !this.selected.report.render_options.month_long_selector){
			return false;
		}

		var This = this,
			year = Number(This.controls.month_date_year.val()),
			set = false;

		if(!this.available_datetime_range[year] || !this.available_datetime_range[year].length){
			year = Number(Object.keys(this.available_datetime_range).last());

			This.controls.month_date_year.val(year);
			This.controls.month_date_year.data('chosen').results_update_field();
			This.controls.month_date_year.fitChosen();
		}

		var month_range = this.available_datetime_range[year],
			month_end = month_range.last(),
			options = '',
			first_date_safe = Date.create(year, month_end, 1),
			selected = function(idx) { return idx == 0? 'selected' : '' };

		if(start){
			if(start.isThisYear() && start.getMonth() > month_end){
				This.set_dates(first_date_safe, first_date_safe.clone().addMonths(1).addDays(-1));
			} else {
				selected = function(idx) {
					return idx == start.getMonth()? 'selected' : ''
				};
				set = true;
			}
		}

		month_range.forEach(function(month) {
			options += '<option value="' + (month + 1) + '" ' + selected(month) + '>' + String(month + 1).padLeft(2, 0) + '</option>';
		});

		This.controls.month_date_month.html( options );
		This.controls.month_date_month.data('chosen').results_update_field();
		This.controls.month_date_month.fitChosen();

		if(set){
			var year = This.controls.month_date_year.val(),
				month = This.controls.month_date_month.val(),
				start_date = Date.create(Number(year), Number(month)-1, 1);

			This.set_dates(start_date, start_date.clone().addMonths(1).addDays(-1));
		}
	};

	ReportExplorer.prototype.hook_events = function() {
		var This = this;

		if(this.controls.group){
			this.controls.group.children().click(function() {
				if($(this).hasClass('selected')) return false;

				$(this).addClass('selected').siblings().removeClass('selected');

				_this.debug(This.system_data.groups);
				_this.debug(this.dataset.group);
				This.selected.group = This.system_data.groups[this.dataset.group];

				This.build_report_list();
				This.set_report(This.selected.group.reports[0]);

				This.submit();
			});
		}

		this.controls.report.change(function() {
			This.set_report(this.value);
			This.submit();
		});

		this.controls.interval.on('click', 'ul > li', function() {
			var val = this.dataset.value;

			This.controls.interval.removeClass('on');
			This.controls.interval.children('a').attr('data-value', val);
			This.controls.interval.children('a').html($(this).children().html());

			This.selected.interval = val;

			This.submit();
		});

		this.controls.dates.click(function() {
			var val = $(this).html().split('-');

			This.date_picker.open(function(dates) {
				This.set_dates(Date.create(dates.start_date), Date.create(dates.end_date), false);

				This.submit();
			}, Date.create(val[0]), Date.create(val[1]));

		});

		function on_month_dates_change(is_year_change) {
			var month = This.controls.month_date_month.val(),
				year  = This.controls.month_date_year.val(),
				start = Date.create(Number(year), Number(month)-1, 1),
				end   = start.clone();

			if(is_year_change){
				This.update_months();
			}

			start.beginningOfMonth();
			end.endOfMonth();

			This.set_dates(start, end, false);
			This.submit();
		};

		this.controls.month_date_month.change(function() { on_month_dates_change(false) });
		this.controls.month_date_year.change(function() { on_month_dates_change(true) });

		/**/

		this.settings.ui_state.on('shops_change', function(ui_state_obj, e) {
			This.on_navigation_change();
		});

		if(!this.settings.use_navigator_shops && this.controls.shops){
			this.controls.shops.find('.edit').click(function() {
				This.select_shops();
			});
		}

		/**/

		this.controls.length.find('ul > li').click(function() {
			var val = this.dataset.value;

			This.controls.length.removeClass('on');
			This.controls.length.children('a').attr('data-value', val);
			This.controls.length.children('a').html($(this).children().html());

			This.table.datatable_obj.page.len(Number(val)).draw();
			This.table.update_page_info();
		});

		this.controls.export.find('ul > li').click(function() {
			var val = this.dataset.value;

			This.controls.export.removeClass('on');

			This.table.export_table(val);

		});

		this.controls.prev_page.click(function() {
			This.table.datatable_obj.page( 'previous' ).draw( false );
			This.table.update_page_info();
		});

		this.controls.next_page.click(function() {
			This.table.datatable_obj.page( 'next' ).draw( false );
			This.table.update_page_info();
		});

		this.controls.goto_page.keyup(function() {
			var val = this.value;
			$.doTimeout('page_number_change');
			$.doTimeout('page_number_change', 250, function() {
				if(val.match(/^\d+$/)){
					This.table.datatable_obj.page( Number(val) ).draw( false );
					This.table.update_page_info();
				}
			});
		});

		$('body').click(function() {
			$('._dropdown1').removeClass('on');
		});
	};

	ReportExplorer.prototype.on_navigation_change = function() {
		this.selected.shops = this.settings.ui_state.load_shops_state();
		this.submit();
	};

	ReportExplorer.prototype.init_form = function() {
		var This = this,
			init_data = this.get_init_selected(),
			report;
		
		if(init_data.report_id){
			report = This.system_data.reports[init_data.report_id];
			this.selected.group = This.system_data.groups[report.group_id];
			this.selected.report = report;
		} else if(init_data.group_id){
			this.selected.group = This.system_data.groups[init_data.group_id];
		} else {
			this.selected.group = Object.values(This.system_data.groups)[0];
		}

		if(!this.selected.report){
			this.selected.report = This.system_data.reports[Object.values(this.selected.group.reports)[0]];
		}

		this.selected.interval = init_data.interval || 'day';

		if(init_data.start_time){
			this.selected.dates.start_time = Date.create(init_data.start_time);
		} else {
			this.selected.dates.start_time = Date.create(This.system_data.today);
		}

		if(init_data.end_time){
			this.selected.dates.end_time = Date.create(init_data.end_time);
		} else {
			this.selected.dates.end_time = Date.create(This.system_data.today);
		}

		this.selected.shops = init_data.shops || null;
		this.selected.all_shops = init_data.all_shops == true;

		if(this.selected.all_shops){
			this.selected.shops = this.get_all_shops().map(function(shop) { return shop.id });
		}

		if(this.settings.use_navigator_shops && this.selected.shops && this.selected.shops.length){
			var list_idx = this.settings.ui_state.locate_list_with_shop_ids(this.selected.shops),
				saved_shops = this.selected.shops;

			// Copied this.selected.shops end_time saved_shops because chainging
			// list triggers a change in this.selected.shops

			if(list_idx == -1){
				this.selected.shops = null;
			} else {
				this.settings.ui_state.save_selected_list(list_idx);
				this.settings.ui_state.save_shops_state(list_idx, saved_shops);
				this.settings.ui_state.update_dom();
			}
		}

		this.assign_selected();

		this.submit();
	};

	ReportExplorer.prototype.build_report_list = function(){
		var This = this,
			html = '';

		_this.debug(this.selected);
		this.selected.group.reports.forEach(function(report_id) {
			var report = This.system_data.reports[report_id];

			html += '<option ' + (This.selected.report && report.id == This.selected.report.id? 'selected' : '') + ' value="' + report.id + '">' + report.name + '</option>';
		});

		this.controls.report.html(html);

		if(this.controls.report.data('chosen')){
			this.controls.report.fitChosen().data('chosen').results_update_field();
		}
	};

	ReportExplorer.prototype.build_interval_html = function() {
		var This = this,
			report = this.selected.report,
			html = '',
			avail_obj = {},
			selected_a;

		if(!report.params.any('interval')){
			This.controls.interval.toggleClass('disabled', true);

			return false;
		}

		This.controls.interval.toggleClass('disabled', false);

		report.render_options.available_intervals.forEach(function(int_val) {
			avail_obj[int_val] = true;
		});

		_this.interval_options.forEach(function(opt) {
			if(!avail_obj[opt.value]) return true;

			html += '<li data-value="' + opt.value + '"><a>' + opt.label + '</a></li>';
		});

		This.controls.interval.find('ul.dropdown').html(html);

		if(!This.controls.interval.find('li[data-value]').length){
			This.controls.interval.toggleClass('disabled', true);
		} else {
			selected_a = This.controls.interval.find('a[data-value]');

			if(!avail_obj[selected_a[0].dataset.value]){
				This.controls.interval.find('li[data-value]').first().click();
			}
		}
	};

	ReportExplorer.prototype.set_report = function(report_id) {
		var This = this,
			report = this.system_data.reports[report_id];

		this.selected.report = report;
		this._selected_report_settings = null;

		This.build_interval_html();

		this.controls.export.toggleClass('disabled', false);
		changeTooltip(this.controls.export, 'Export to file');

		This.controls.dates.toggleClass('disabled', !(report.params.any('start_time') && report.params.any('end_time')));

		if(This.controls.shops){
			This.controls.shops.toggleClass('disabled', !(report.params.any('shops') || report.params.any('where_selector')));
		}

		if(report.render_options.month_long_selector){
			This.controls.dates.hide();
			This.controls.month_date_month.data('chosen').container.show();
			This.controls.month_date_month.fitChosen();

			This.controls.month_date_year.data('chosen').container.show();
			This.controls.month_date_year.fitChosen();

			This.update_months(this.selected.dates.start_time);
		} else {
			This.controls.dates.show();
			This.controls.month_date_month.data('chosen').container.hide();
			This.controls.month_date_month.hide();

			This.controls.month_date_year.data('chosen').container.hide();
			This.controls.month_date_year.hide();
		}
	};

	ReportExplorer.prototype.set_dates = function(start, end) {
		console.log('set_dates called...', start, end);

		var This = this;

		This.controls.dates.html(start.format('{Mon} {d}, {yyyy}') + ' - ' + end.format('{Mon} {d}, {yyyy}'));
		this.controls.month_date_month.val(start.getMonth()+1).data('chosen').results_update_field();
		this.controls.month_date_year.val(start.getFullYear()).data('chosen').results_update_field();

		This.selected.dates.start_time = start;
		This.selected.dates.end_time = end;

		This.set_saved_value('dates_start_time', start.format('{yyyy}-{MM}-{dd}'));
		This.set_saved_value('dates_end_time', end.format('{yyyy}-{MM}-{dd}'));
	};

	ReportExplorer.prototype.get_init_selected = function() {
		var This = this,
			hash = window.location.hash.substr(1),
			hash_init_data = hash.length > 3? JSON.parse(decodeURIComponent(hash)) : null,
			default_selected = {};

		if(hash_init_data && This.system_data.reports[hash_init_data.report_id]){
			return hash_init_data;
		}

		if(this.settings.init_controls) {
			default_selected = $.extend(true, default_selected, this.settings.init_controls);
		}

		default_selected.start_time = This.get_saved_value('dates_start_time') || default_selected.start_time;
		default_selected.end_time = This.get_saved_value('dates_end_time') || default_selected.end_time;

		return default_selected;
	};

	ReportExplorer.prototype.assign_selected = function() {
		var This = this,
			start, end, shops,
			new_shop_set, new_shop_txt;

		if(this.selected.group && this.controls.group){
			this.controls.group.find('li[data-group="' + this.selected.group.id + '"]').addClass('selected').siblings().removeClass('selected');
			this.build_report_list();
		}

		if(this.selected.report){
			this.controls.report.val(this.selected.report.id).data('chosen').results_update_field();

			this.set_report(this.selected.report.id);
		}

		if(this.selected.interval){
			this.controls.interval.find('li[data-value="' + this.selected.interval + '"]').click();
		}

		if(this.selected.dates){
			var start = Date.create(this.selected.dates.start_time || 'today'),
				end = Date.create(this.selected.dates.end_time || 'today');

			this.set_dates(start, end);

			This.update_months(start, end);
		}

		if((this.selected.all_shops || this.selected.shops) && this.controls.shops && this.settings.allow_shop_selector){
			shops = this.get_all_shops();

			new_shop_set = shops.filter(function(shop) { return This.selected.all_shops || This.selected.shops.any(shop.id); });
			new_shop_txt = new_shop_set.map(function(shop) { return shop.name }).join(', ');

			this.controls.shops.attr('data-value', this.selected.all_shops? '' : this.selected.shops.join(','));
			this.controls.shops.find('.text').html('<b>'+new_shop_set.length+' Shops Selected:</b> ' + new_shop_txt);
		}
	};

	ReportExplorer.prototype.get_all_shops = function() {
		return Dash.controller.global.nav.dashboard_ui_state_obj.get_shops_data();
	};

	ReportExplorer.prototype.get_submit_data = function() {
		var This = this,
			form_data = {},
			url_data = {},
			report = this.selected.report,
			split_dates,
			url_data_all_shops = false;

		if(!report){
			return false;
		}

		form_data.report_id = String(report.id);
		//PSOL-77 enrich report data to differentiate execution of legacy and API reports
		form_data.source = report.source;

		if(report.params.find('start_time') && report.params.find('end_time')){
			if(this.selected.dates.start_time && this.selected.dates.end_time){
				if(this.selected.dates.start_time.isValid() && this.selected.dates.end_time.isValid()){

					form_data.start_time = this.selected.dates.start_time.format('{yyyy}-{MM}-{dd}');
					form_data.end_time   = this.selected.dates.end_time.format('{yyyy}-{MM}-{dd}');

				} else {
					_alert('Reports - Dates invalid', 'Please select correct end and start dates.');
					return false;
				}
			} else {
				_alert('Reports - Dates missing', 'Please select correct end and start dates.');
				return false;
			}
		}

		if(report.params.find('interval')){
			form_data.interval = this.selected.interval;
		}

		if(report.params.find('shops') || report.params.find('where_selector')){
			form_data.shops = this.selected.shops;
			if(!form_data.shops || form_data.shops.length == this.get_all_shops().length){
				form_data.shops = this.get_all_shops().map(function(shop) { return shop.id });
				url_data_all_shops = true;
			}
		}

		url_data = $.extend(true, url_data, form_data);

		// if(url_data_all_shops){
		// 	url_data.all_shops = true;
		// 	url_data.shops = [];
		// }

		window.location.hash = encodeURIComponent(JSON.stringify(url_data));

		return form_data;
	};

	ReportExplorer.prototype.show_error = function(txt) {
		this.find('#error_state').show().html(txt);
		this.find('#loading_stage').hide();
		$('#content').data('gridMatchHeight').match();
	};

	ReportExplorer.prototype.submit = function() {
		var This = this,
			settings = this.settings,
			submit_data = this.get_submit_data(),
			time = String(__tapingo_settings.business_day||0).padLeft(2, '0'),
			end_time = this.selected.end_time || time,
			dte_start_time = Date.create(submit_data.start_time),
			dte_end_time = Date.create(submit_data.end_time),
			request;

		if(!submit_data || !this.settings.ui_state.is_ready()){
			return false;
		}

		this.stop_query && this.stop_query();

		this._selected_report_settings = null;

		submit_data.end_time = Date.create(submit_data.end_time).addDays(1).format('{yyyy}-{MM}-{dd}');

		if (submit_data.start_time != undefined) {
		    submit_data.start_time += ' ' + time + ':00';
		}

		submit_data.end_time   += ' ' + end_time + ':00';
		submit_data.time_interval = Number(time);
		submit_data.finance = this.settings.finance;

		if(dte_start_time.isBefore(settings.mindate)){
			this.show_error('You cannot select a date before ' + settings.mindate.format('{Mon} {ord}, {yyyy}'));
			return false;
		}

		if(dte_end_time.isAfter(settings.maxdate)){
			this.show_error('You cannot select a date after ' + settings.maxdate.format('{Mon} {ord}, {yyyy}'));
			return false;
		}

		This.chart.wrap && This.chart.wrap.hide();
		This.table.wrap && This.table.wrap.hide();

		var iFrame = this.find('#redash_iframe');
		iFrame.attr('src', 'about:blank');
		iFrame.hide();

		This.find('#error_state').hide();
		This.find('#loading_stage').show();

		This.cleanup();

		$('#content').data('gridMatchHeight').match();

		if (Dash.controller.global.nav.check_permission("dashboard:finance") &&
			Dash.controller.global.nav.finance_ui_state_obj.lists_data.length > 0) {
            submit_data.account_id = Dash.controller.global.nav.finance_ui_state_obj.get_selected_account_ids()[0];
        }
        else {
			submit_data.account_id = "None"
		}

		this.submit_data = submit_data;
		const run_params = submit_data;
		const report_name = This.selected.report.name;

		const click_stream_data = Object.assign(run_params, { report_name });

		if (submit_data.source === Tapingo.ReportService.API_NAME) {
			Tapingo.ReportService.actions.run_report(run_params)
			.then (report => {
				this.parse_report_run(report);
			})
			.catch(error => {
				_this.error(error);				
				This.show_error('Report could not be shown');
				This.stop_query = null;
			});
		} else {
			this.run_legacy_report(run_params, click_stream_data);
		}
	};

	ReportExplorer.prototype.run_legacy_report = function(run_params, click_stream_data) {
		const This = this;
		const { report_id } = run_params;
		Tapingo.ReportService.info(`Requesting run of legacy report ${report_id}`);
		request = _http.ajax({
			report_id: report_id,
			params: run_params
		}, '/dashboard/reports/');

		this.stop_query = request.abort;
		this.currency_map = {};

		console.log('Report query sent', run_params);

		request.done(function(report) {
			This.controls.export.toggleClass('disabled', false);
			changeTooltip(This.controls.export, 'Export to file');
			This.parse_report_run(report.data, click_stream_data);
		});

		request.fail(function(error_msg, jqXHR) {
			if(error_msg != 'abort'){
				if(jqXHR.status > 200){
					error_msg = 'Report could not be shown';
				}

				This.show_error(error_msg);
			}

			This.stop_query = null;
		});
	};

	ReportExplorer.prototype.parse_report_run = function(report, click_stream_data) {
        console.log('Report fetched request ID: ' + report.report_request_id);

        if (report.redash_url) {
        	changeTooltip(this.controls.export, 'To export, scroll down and click "Download Dataset"');
        	this.controls.export.toggleClass('disabled', true);
        	if (report.url_valid) {
                $('#redash_iframe').attr('src', report.redash_url);
                this.find('#redash_iframe').show();
            }
            else{
        		this.show_error('Cannot access reports, please try again later.');
			}
        }
		else if(report.data.length){
			this.currency_map = report.currency_cols_snapshot;
			this.chart.build(report);
			this.table.build(report);
			console.log('Report fetched rows length: ' + report.data.length);
		} else {
			this.show_error('No Results Found');
		}

		this.find('#loading_stage').hide();

		$('#content').data('gridMatchHeight').match();

		this.stop_query = null;
    };

	ReportExplorer.prototype.cleanup = function() {
		this.chart.cleanup();
		this.table.cleanup();
	};

	ReportExplorer.prototype.get_selected_names = function() {
		var This = this,
			shop_data = Dash.controller.global.nav.get_selected_shops_data()

		if(shop_data.length == 1){
			return shop_data[0].name;
		}

		return shop_data.map(function(s) { return s.name; }).join(', ');
	};

	ReportExplorer.prototype.select_shops = function() {
		if(this.controls.shops.hasClass('disabled')){
			return false;
		}

		var This    = this,
			wrap    = this.controls.shops,
			shops   = this.get_all_shops(),
			checked = wrap.attr('data-value').split(',').filter(function(x){ return x && x.length}).map(Number),
			html    = report_shops_modal_template.render({shops: shops, checked: checked}),
			modal   = Dash.utils.modal.create(html),
			win     = modal.find('.window');

		modal.open();
		modal.repos();

		modal.find('.window > .close').click(function() {
			modal.close();
		});

		var lastChecked = null;
		
		win.on('click', 'a.all', function(e) {
			modal.find('input[type="checkbox"]').prop('checked', true);
			lastChecked = null;
		});

		win.on('click', 'a.none', function(e) {
			modal.find('input[type="checkbox"]').prop('checked', false);
			lastChecked = null;
		});

		win.on('click', 'li.single', function(e) {
			var input = $(this).find('input')[0],
				$chkboxes = modal.find('input[type="checkbox"]:visible');

			input.checked = !input.checked;

			if(!lastChecked) {
                lastChecked = input;
                return;
            }

            if(e.shiftKey) {
                var start = $chkboxes.index(input);
                var end = $chkboxes.index(lastChecked);

                $chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', lastChecked.checked);
            }

            lastChecked = input;
		});

		win.on('click', 'input[type="checkbox"]', function(e) {
			e.stopPropagation();
			var $chkboxes = modal.find('input[type="checkbox"]:visible');

			if(!lastChecked) {
                lastChecked = this;
                return;
            }

            if(e.shiftKey) {
                var start = $chkboxes.index(this);
                var end = $chkboxes.index(lastChecked);

                $chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', lastChecked.checked);
            }

            lastChecked = this;
		});

		modal.find('.search').keyup(function() {
			var val = this.value.toLowerCase();
			$.doTimeout('filter_shops');
			$.doTimeout('filter_shops', 250, function() {
				var all = modal.find('li.single');

				all.removeClass('hidden');

				if(val.length){
					all.each(function() {
						var el = $(this);
						if(el.text().toLowerCase().indexOf(val) == -1){
							el.addClass('hidden');
						}
					});
				}
			});
		});

		modal.find('.save').click(function(e) {
			e.preventDefault();

			var ids = modal.find('input[type="checkbox"]:checked').mapAttr('value'),
				all = modal.find('input').length;

			wrap.attr('data-value', ids.join(','));
			wrap.find('.text').html('<b>'+ids.length+' Shops Selected:</b> ' + modal.find('input:checked').mapAttr('data-name').join(', '));

			modal.close();

			This.selected.shops = null;

			if(ids.length != shops.length){
				This.selected.shops = ids.map(Number);
			}

			This.submit();
		});
	};

	ReportExplorer.prototype.get_report_settings = function() {
		if(this._selected_report_settings){
			return this._selected_report_settings;
		}

		var This = this,
			report = this.selected.report,
			submitted_data = this.submit_data,
			opts = report.render_options,
			currency_flat_map = {},
			settings = {
				'add_time':              submitted_data.interval == '15' || submitted_data.interval == 'hour',
				'hours':                 opts.datetime_is_time || (submitted_data.interval && !this.date_intertval_ops.find(submitted_data.interval)),
				'is_datetime':           opts.datetime_col_pos && opts.datetime_col_pos.length && Number(opts.datetime_col_pos) == 0,
				'is_chart_datetime':     opts.chart_datetime_col_pos && opts.chart_datetime_col_pos.length && Number(opts.chart_datetime_col_pos) == 0,
				'is_yearweek':           submitted_data.interval == 'week',
				'two_dim':               opts.non_linear_chart == '2dim',
				'grouped_chart':         opts.non_linear_chart == 'grouped',
				'show_legend':           opts.non_linear_chart != '2dim',
				'datetime_col':          opts.datetime_col_pos && opts.datetime_col_pos.length? Number(opts.datetime_col_pos) : null,
				'pivot':                 opts.pivot_chart,
				'tooltips':              opts.tooltips,
				'month_long_selector':   opts.month_long_selector,
				'sorting': 				 opts.sorting || [],

				'money': false,
				'currency_cells_col': {},
				'numberize': {},
				'grandtotal_mode': false,
				'grandtotal': {},
				'subtotal_mode': false,
				'subtotal_change_col': null,
				'subtotal_cols': null
			};

		Object.keys(This.currency_map).forEach(function(row_key) {
			Object.keys(This.currency_map[row_key]).forEach(function(col_key) {
				currency_flat_map[col_key] = This.currency_map[row_key][col_key];
			});
		});

		var produce_cols_settings = function(value, type) {
			var settings = {
				'all': value == 'all',
				'dta': value == 'data',
				'cols': null,
			};

			if(isNaN(value.trim().first())){
				return settings;
			}

			if(value.trim().endsWith('...')){
				if(value.split(',').length == 2){
					settings.cols = [];

					for (var i = Number(value.split(',')[0]); i < 100; i++) {
						settings.cols.push(i);
					}
				}
			} else {
				settings.cols = value.split(',').map(function(d) { return Number(d) }).filter(function(d) { return !isNaN(d) });
			}

			return settings;
		};

		settings.get_currency = function(row_idx, col_idx) {
			return currency_flat_map[col_idx] || '$';

			if(row_idx != null)
				return (This.currency_map[row_idx] || {})[col_idx] || '$';

		};

		if(opts.subtotals_columns){
			if(!isNaN(opts.subtotals_columns.trim().first())){
				settings.subtotal_cols = produce_cols_settings(opts.subtotals_columns, 'subtotal').cols;
			}

			settings.subtotal_mode       = settings.subtotal_cols && opts.subtotals_change_column.trim().match(/^\d+$/) != null;
			settings.subtotal_change_col = settings.subtotal_mode? Number(opts.subtotals_change_column.trim()) : null;
		}

		if(opts.add_currency_col){
			settings.numberize = produce_cols_settings(opts.add_currency_col, 'numberize');
			settings.money = settings.numberize.all || settings.numberize.dta;
		}

		if(opts.currency_cells_col){
			settings.currency_cells_col = produce_cols_settings(opts.currency_cells_col, 'currency_cells_col');
		}

		if(!settings.subtotal_mode && opts.add_total_col){
			settings.grandtotal_mode = true;
			settings.grandtotal = produce_cols_settings(opts.add_total_col, 'grandtotal');
		}

		if(settings.is_datetime) settings.is_chart_datetime = true;

		this._selected_report_settings = settings;

		return this._selected_report_settings;
	};

	/**************************************************************/

	ReportChartBuilder = function(explorer) {
		this.explorer = explorer;
		this.data = null;
		this.chart_obj = null;
	};

	ReportChartBuilder.prototype.init = function() {
		this.wrap = this.explorer.find('#chart_wrap');
		this.chart_element = this.explorer.find('#chart_wrap > .chart');
		this.chart_legend = this.explorer.find('#chart_wrap > .legend');
	};

	ReportChartBuilder.prototype.build = function(result_data) {
		var This = this,
			report = this.explorer.selected.report,
			settings = this.explorer.get_report_settings();

		if(!report.render_options.chart_type){
			return false;
		}

		this.data = $.extend(true, {}, result_data);

		var config = this.create_chart_config();

		this.wrap.show();

		this.chart_element.highcharts(config, function(chart) {	
			This.chart_obj = chart;

			if(!settings.show_legend) {
				This.chart_legend.hide();
			} else {
				This.fill_legend(chart, settings);
			}

		});

		$('#reports_tab').addClass('chart_enabled');
	};

	ReportChartBuilder.prototype.cleanup = function() {
		this.chart_obj && this.chart_obj.destroy();
		this.chart_obj = null;
		this.wrap.hide();
		$('#reports_tab').removeClass('chart_enabled');
	};

	ReportChartBuilder.prototype.fill_legend = function() {
		var data_labels = this.explorer.selected.report.render_options.chart_type == 'pie',
			data        = data_labels? this.chart_obj.series[0].data : this.chart_obj.series,
			c_length    = data_labels? data.length : data.length,
			ul          = $('<ul/>'),
			series, li;

		for (var i = 0; i < c_length; i++) {
			metric = data[i];

			if(metric.name.toLowerCase().trim() == 'total'){
				metric.setVisible(false);
				continue;
			}

			li = $('<li>                                                                       \
						<input type="checkbox" checked data-idx="' + i + '" />                 \
						<span class="color" style="border-color: ' + metric.color + '"></span> \
						' + _this.render.humanize(metric.name) + '                             \
				    </li>');

			li.find('input').change(function() {
				data[Number(this.dataset.idx)].setVisible(this.checked);
			});

			ul.append(li);
		};
		
		this.chart_legend.show().html(ul);
	};

	ReportChartBuilder.prototype.create_chart_config = function() {
		var report = this.explorer.selected.report,
			settings = this.explorer.get_report_settings(),
			chart_data = this.get_chart_data(),
			config;

		config = {
			'chart': {
				'type': report.render_options.chart_type
			},
			'title': {
				'text': null
			},
			'yAxis': {
				'title': {
					'text': null
				}
			},
			'credits': {
				'enabled': false
			},
			'xAxis': {
	            'type': settings.is_chart_datetime? 'datetime' : undefined,
	            'dateTimeLabelFormats': {
	                day: (settings.add_time? '%b %e %I:%M%P' : (settings.hours? '%I:%M%P' : '%b %e') ),
	                hour: '%I:%M%P'
	            }
	        },
			'tooltip': {
			    'formatter': function() {
			    	var sign = settings.get_currency(null, this.series.index + 1),
			    		ylabel = (settings.money? sign : '') + this.y.toFixed(sign != 'M'? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
			    		time_frmt = settings.add_time? '{{Mon}} {{d}} - {{h}}:{{mm}}{{tt}}' : (settings.hours? '{{h}}:{{mm}}{{tt}}' : '{{Mon}} {{d}}'),
			    		xlabel = (settings.is_chart_datetime? (Date.utc.create(this.x).format(time_frmt)) : '');

		            return '<div class="hc_tooltip_inner"> \
		            			<span style="font-weight: bold; font-size: 11pt;">'+ ylabel + '</span> \
		            			<br/>' + xlabel + ' \
		            		</div>';
		        }
			},
			'legend': {
				'enabled': false
			},
			'series': chart_data.series_data
		};

		if(settings.two_dim){
			config.xAxis.type = 'category';
		}

		if(settings.grouped_chart){
			config.xAxis.categories = chart_data.categories;
		}

		if(settings.is_yearweek){
			config.xAxis['tickInterval'] = 7 * 24 * 3600 * 1000;
		}

		if(this.data.data.length > 100){
			config.chart.zoomType = 'x';
		}

		return config;
	};

	ReportChartBuilder.prototype.get_chart_data = function() {
		var report = this.explorer.selected.report,
			settings = this.explorer.get_report_settings(),
			final_obj = {
				'categories':  [],
				'series_data': []
			};

		if(report.render_options.chart_type == 'pie'){
			final_obj.series_data = [{
				'type': report.render_options.chart_type,
				'name': 'name',
				'data': this.data
			}];

			return final_obj;
		}

		if(settings.two_dim) {
			final_obj.series_data = [{
				'name': 'Labels',
				'data': this.data,
				colorByPoint: true
			}];

			return final_obj;
		}

		if(settings.grouped_chart){
			return this.get_grouped_chart_data();
		}

		if(settings.pivot){
			final_obj.series_data = this.get_pivot_chart_data();
			return final_obj;
		}

		final_obj.series_data = this.get_std_chart_data();

		return final_obj;
	};

	ReportChartBuilder.prototype.get_std_chart_data = function() {
		var result_data = this.data,
			i_len       = result_data.data.length,
			desc        = result_data.desc.removeAt(0),
			settings    = this.explorer.get_report_settings(),
			grouped     = {},
		    series_data,
		    k_len, k, i, x_axis_value, row;

		for (i = 0; i < i_len; i++) {
		    row = result_data.data[i];
		    x_axis_value = row[0];
		    if(settings.is_chart_datetime){
		    	x_axis_value = Number(Date.utc.create(x_axis_value));
		    }
		    row = row.removeAt(0);
		    k_len = row.length;
		    for (k = 0; k < k_len; k++) {
		        grouped[desc[k]] = grouped[desc[k]] || [];
		        grouped[desc[k]].push([x_axis_value, row[k]])
		    }
		};

		series_data = desc.map(function(name) {
		    return {
		        'data': grouped[name],
		        'name': name
		    };
		});

		return series_data;
	};

	ReportChartBuilder.prototype.get_pivot_chart_data = function() {
		var result_data = this.data,
			settings    = this.explorer.get_report_settings(),
			new_data = {},
			row,
			series_data = [],
			new_row;

		for (var i = result_data.data.length - 1; i >= 0; i--) {
			row = result_data.data[i];
			new_row = row.from(1);
			
			if(settings.is_chart_datetime){
		    	new_row[0] = Number(Date.utc.create(new_row[0]));
		    }

			new_data[row[0]] = (new_data[row[0]] || [])
			new_data[row[0]].push(new_row);
		};

		Object.keys(new_data, function(k, v) {
			series_data.push({
				'data': v,
				'name': k
			})
		});

		return series_data;
	};

	ReportChartBuilder.prototype.get_grouped_chart_data = function() {
		var result_data = this.data,
			settings = this.explorer.get_report_settings(),
			categories = [],
			data = [],
			mapped = {},
			series_data = [],
			i_len = result_data.data.length,
			i, k_len, k;

		for(i = 0; i < i_len; i++){
			k_len = result_data.data[i].length;

			for(k = 0; k < k_len; k++){
				if(k == 0){
					categories.push(result_data.data[i][k])
				} else {
					mapped[result_data.desc[k]] = mapped[result_data.desc[k]]||[];

					mapped[result_data.desc[k]].push(result_data.data[i][k])
				}
			}
		}

		Object.keys(mapped, function(k, v) {
			series_data.push({
				name: k,
				data: v
			});
		});

		return {series_data: series_data,
			    categories: categories.unique()}
	};

	/**************************************************************/

	ReportTableBuilder = function(explorer) {
		this.explorer = explorer;
		this.data = null;
	};

	ReportTableBuilder.prototype.init = function() {
		this.wrap = this.explorer.find('#table_wrap');
		this.table_element = this.explorer.find('#table_wrap table');
	};

	ReportTableBuilder.prototype.build = function(result_data) {
		this.data = $.extend(true, {}, result_data);

		var report = this.explorer.selected.report,
			config = this.get_table_config();

		this.wrap.hide();

		this.table_element.append('<tfoot><tr></tr></tfoot>');

		this.table_element.dataTable(config);
		this.datatable_obj = this.table_element.DataTable();

		this.update_page_info();

		this.wrap.show();

		this.wrap.find('.chosen').fitChosen();
		this.wrap.find('table.dataTable').toggleClass('oflow', (this.wrap.find('table.dataTable').width() - this.wrap.find('table.dataTable').parent().width()) > 3);
	};

	ReportTableBuilder.prototype.update_page_info = function() {
		var info = this.datatable_obj.page.info(),
			txt = '';

		txt += 'Viewing ';
		txt += info.start + 1;
		txt += ' - ';
		txt += info.end;
		txt += ' of ';
		txt += info.recordsTotal;

		this.explorer.find('#page_info_text').html(txt);
		this.explorer.find('#goto_page').val(info.page+1).prop('disabled', info.pages == 1);
		this.explorer.find('#table_wrap').toggleClass('one_page', info.pages == 1);
		this.explorer.find('#table_wrap').toggleClass('less_than_20', info.recordsTotal < 20);
		this.explorer.find('#length_selector').toggleClass('disabled', info.recordsTotal < 20);
	};

	ReportTableBuilder.prototype.get_table_config = function() {
		var This = this,
			report = this.explorer.selected.report,
			settings = this.explorer.get_report_settings(),
			table_data = this.get_table_data(),
			config, grandrows;

		grandrows = table_data.filter(function(r){ return r.is_grand_total });

		config = {
			'columns': [],
			'dom': 'Tt',
			'pageLength': 20,
			'data': table_data.filter(function(r){ return !r.is_grand_total }),
			'order': settings.sorting,
			rowCallback: function(row, data) {
				if(data.is_total){
					$(row).addClass('subtotal_row');
				}
			},
			headerCallback: function(thead) {
				$(thead).find('th').each(function() {
					var key = $(this).html();

					$(this).html( _this.render.humanize(key) )
						   .attr('title', settings.tooltips[key]);

					settings.tooltips[key] && $(this).attr('data-uk-tooltip', '').addClass('ttip');
				});
			},
			footerCallback: function(row, data) {
				var api = this.api(),
					cols = api.settings()[0].aoColumns,
					cells = '';

				if(!grandrows || !grandrows.length) return false;

				grandrows[0].forEach(function(cell, col_idx) {
					var render = cols[col_idx].render;
					if(render && typeof(cell) == 'number'){
						cell = render(cell, 'insert', grandrows[0], {
							'row': 0,
							'col': col_idx
						});
					}

					cells += '<td>' + cell + '</td>';
				});

				$(row).html(cells);
			}
		};

		this.data.desc.forEach(function(name, idx) {
			var obj = {
				'title': name,
				'render': _this.render.format_cell(idx, settings),
			};

			if(idx == 0 && settings.is_datetime){
				obj.type = 'numeric';
			}

			config.columns.push(obj)
		});

		var page_length = This.explorer.controls.length.children('a').attr('data-value');

		if(page_length){
			config.pageLength = Number(page_length);
		}

		return config;
	};

	ReportTableBuilder.prototype.get_table_data = function() {
		var report = this.explorer.selected.report,
			settings = this.explorer.get_report_settings();

		if(this.data.data && this.data.data.length){
			if(settings.subtotal_mode){
				return this.get_data_with_subtotals();
			}

			if(settings.grandtotal_mode){
				return this.get_data_with_grandtotals();
			}
		}

		return this.data.data;
	};

	ReportTableBuilder.prototype.cleanup = function() {
		this.datatable_obj && this.datatable_obj.destroy();
		this.datatable_obj = null;
		this.table_element.empty();
	};

	ReportTableBuilder.prototype.get_data_with_grandtotals = function() {
		var result_data_rows = this.data.data,
			settings = this.explorer.get_report_settings(),
			new_data = [],
			grandtotal_row = [],
			sum_cols = [],
			i_len = result_data_rows.length,
			i, k, k_len, sum_up, row;

		for(i = 0; i < i_len; i++){
			row = result_data_rows[i];
			k_len = row.length;

			for(k = 0; k < k_len; k++){

				if(settings.grandtotal.all || (k != 0 && settings.grandtotal.dta) || (settings.grandtotal.cols && settings.grandtotal.cols.any(k))){
					sum_cols[k] = (sum_cols[k] || 0) + Number(row[k]);
				} else {
					sum_cols[k] = null;
				}

			}

			new_data.push(row);
		}

		result_data_rows[0].forEach(function(cell, idx) {
			value = '';

			if (typeof(sum_cols[idx]) == 'number' && !isNaN(sum_cols[idx])) {
				value = Number(sum_cols[idx].toFixed(2));
			} else if (idx == 0){
				value = 'Total';
			}

			grandtotal_row.push(value);
		});

		grandtotal_row.is_grand_total = true;
		new_data.push(grandtotal_row);

		return new_data;
	};

	ReportTableBuilder.prototype.get_data_with_subtotals = function() {
		var result_data_rows = this.data.data,
			settings = this.explorer.get_report_settings(),
			new_data = [],
			last_val = null,
			all_acc_values = {},
			acc_values = {},
			last_row,
			grandtotal_row = [],
			rows_length = result_data_rows.length -1;

		settings.subtotal_cols.forEach(function(col_idx) {
			all_acc_values[col_idx] = 0;
		});

		result_data_rows.forEach(function(row, idx) {
			var changed_val = row[settings.subtotal_change_col],
				subtotal_row = [];

			if(!last_val || last_val != changed_val){
				if(last_val){
					row.forEach(function(cell, idx) {
						if(idx == settings.subtotal_change_col){
							subtotal_row.push(last_val);
						} else if (typeof(acc_values[idx]) == 'number') {
							subtotal_row.push(Number(acc_values[idx].toFixed(2)));
						} else {
							subtotal_row.push('');
						}
					});
					subtotal_row.is_total = true;
					new_data.push(subtotal_row);
				}

				last_val = changed_val;

				settings.subtotal_cols.forEach(function(col_idx) {
					acc_values[col_idx] = 0;
				});
			}

			settings.subtotal_cols.forEach(function(col_idx) {
				if(typeof(row[col_idx]) == 'number'){
					acc_values[col_idx] += row[col_idx];
					all_acc_values[col_idx] += row[col_idx];
				}
			});

			new_data.push(row);

			last_row = row;

			if(rows_length == idx){
				subtotal_row = [];

				row.forEach(function(cell, idx) {
					if(idx == settings.subtotal_change_col){
						subtotal_row.push(last_val);
					} else if (typeof(acc_values[idx]) == 'number') {
						subtotal_row.push(Number(acc_values[idx].toFixed(2)));
					} else {
						subtotal_row.push('');
					}
				});
				subtotal_row.is_total = true;
				new_data.push(subtotal_row);
			}

		});


		last_row.forEach(function(cell, idx) {
			if(idx == settings.subtotal_change_col){
				grandtotal_row.push('Total');
			} else if (typeof(acc_values[idx]) == 'number') {
				grandtotal_row.push(Number(all_acc_values[idx].toFixed(2)));
			} else {
				grandtotal_row.push('');
			}
		});

		grandtotal_row.is_grand_total = true;
		new_data.push(grandtotal_row);

		return new_data;
	};

	ReportTableBuilder.prototype.export_table = function(format){
		if(!this.data || !this.data.data) return false;

		var data = {
			'report_id': this.explorer.submit_data.report_id,
			'params': this.explorer.submit_data
		}

		$('<form/>')
			.attr({target: '_self', action: '/dashboard/reports/' + format + '/', method: 'POST'})
			.html($('<input/>').attr({type: 'hidden', name: 'json'}).val(JSON.stringify(data)))
			.appendTo($('body'))
			.submit().remove();
	};
	console.log('!!!!!','/dashboard/reports/' + format + '/',JSON.stringify(data))

    _this.render = {};

    _this.render.humanize = function(str) {
		return str.replace(/avg/ig, 'Average')
				  .titleize()
				  .replace(/&Amp;/, '&amp;')
				  .replace(/\bId\b/, 'ID');
    };

    _this.render.datetime_format = function(format) {
    	return function(data, type, row) {
    		if(row.is_grand_total) return data;
    		if(!data) return '';

	    	var date = Date.create(data);

	    	if(type == 'sort')
	    		return Number(date);

	    	return date.format(format);
    	};
    };

    _this.stored_week_nums = (function() {
    	var days = Math.ceil((Date.create('tomorrow') - Date.create('2010-01-04')) / 1000 / 60 / 60 / 24) + 100,
			base_date = Date.create('2010-01-04'),
			stored_week = {},
			selected_date, onejan,
			week, key;

		for (var i = 0; i < days; i++) {
			selected_date = base_date.clone().addDays(i);
			onejan = new Date(selected_date.getFullYear(),0,1);
		    week = Math.ceil((((selected_date - onejan) / 86400000) + onejan.getDay()+1)/7);
			key = selected_date.getFullYear() + '-' + week;


			if(stored_week[key]) continue;

			stored_week[key] = selected_date;
		};

		return stored_week;
    }());

    _this.render.yearweek_format = function(data, type, row) {
    	if(type == 'sort' || row.is_grand_total)
    		return data;

    	var data = String(data),
    		year = data.to(4),
    		week = Number(data.from(4));

    	return _this.stored_week_nums[year + '-' + week].format('{Mon} {ord}, {yyyy}');
    };

    _this.render.dollar_format = function(settings) {
    	return function(data, reason, row, metadata) {
	    	var sign = settings.get_currency(row.is_grand_total || row.is_total? null : metadata.row, metadata.col);
	    	return reason == 'sort'? data : sign + Number(data).format(sign == 'M'? 0 : 2);
	    }
    };

    _this.render.format_cell = function(idx, settings) {
		if(settings.numberize.all || (settings.numberize.cols && settings.numberize.cols.any(idx)))
			return _this.render.dollar_format(settings);

    	var date_format = '{Mon} {ord}, {yyyy}',
			time_format = '{{h}}:{{mm}}{{tt}}',
			format;

		format = date_format;

		if(settings.hours){
			format = time_format;
		}

		if(settings.add_time){
    		format = date_format + ' ' + time_format;
		}

		if(settings.datetime_col == idx){
			return _this.render.datetime_format(format);
		}

    	if(idx != 0){

			if(settings.numberize.dta)
				return _this.render.dollar_format(settings);

    	}

    	return function(n) {
    		return (Number(n)===n && n%1!==0)? n.toFixed(2) : n;
    	};
    };

	/**************************************************************/

    FinanceReportExplorer = function(options) {
	    return ReportExplorer.call(this, options);
	};

    FinanceReportExplorer.prototype = Object.create(ReportExplorer.prototype);

    FinanceReportExplorer.prototype.get_explorer_config = function(options) {
		var defaults = {
				'allow_groups': false,
				'init_controls': {
					'group_id': 3
				},
				'finance': true,
				'allow_shop_selector': false,
				'dont_send_shops_to_server': false,
				'permission_path': 'dashboard:finance',
				'mindate': Date.create('January 1 2012'),
				'maxdate': Date.create('tomorrow'),
			};

		return $.extend(defaults, options);
	};

	FinanceReportExplorer.prototype.get_all_shops = function() {
		return Dash.controller.global.nav.finance_ui_state_obj.get_shops_data();
	};

	// FinanceReportExplorer.prototype.on_navigation_change = function() {
	// 	this.selected.shops = null;
	// 	this.selected.all_shops = true;
	// 	this.assign_selected();
	// 	this.submit();
	// };

	/**************************************************************/

    _this.ReportExplorer = ReportExplorer;
    _this.FinanceReportExplorer = FinanceReportExplorer;




})(Dash.report_explorer);
