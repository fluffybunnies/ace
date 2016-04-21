
if [ "`which realpath`" == "" ]; then
	realpath()(
		if [ ! -f "$1" ] && [ ! -d "$1" ]; then
			>&2 echo 'path does not exist'
		else
			dir=$1
			if [ -f "$1" ]; then
				dir=`dirname "$1"`
			fi
			path=`cd "${dir}";pwd`
			if [ -f "$1" ]; then
				path=$path/`basename "$1"`
			fi
			echo $path
		fi
	)
fi

if [ -d "$1" ]; then
	# configure
	export __dirname=`dirname "$0"`
	export APP_PATH=`realpath "$__dirname/$1"`
	cd "$APP_PATH"
	if [ -f ./config.sh ]; then
		. ./config.sh
	fi
	#echo "APP_PATH: $APP_PATH"
fi

if [ ! -d "$sireDir" ] && [ -d /root/sire ]; then
	export sireDir=/root/sire
fi

crontab_add()(
  search=$1
  line=$2
  if [ ! "$line" ]; then
    line=$search
  fi

  tmp=`mktemp`
  crontab -l | grep -v "$search" > $tmp
  echo "$line" >> $tmp
  crontab < $tmp 
  rm $tmp
)

crontab_remove()(
  search=$1
  tmp=`mktemp`
  crontab -l | grep -v "$search" > $tmp
  crontab < $tmp
  rm $tmp
)

set_proclock()(
	key=$1
	if [ ! "$key" ]; then key=`basename "$0"`; fi
	lockFile=`get_proclock_file "$key"`
	date >> "$lockFile"
)

get_proclock()(
	lockFile=`get_proclock_file "$1"`
	if [ -f "$lockFile" ]; then echo 1; fi
)

unset_proclock()(
	key=$1
	if [ ! "$key" ]; then key=`basename "$0"`; fi
	lockFile=`get_proclock_file "$key"`
	rm "$lockFile"
)

get_proclock_file()(
	#key=`echo "$1" | sed -n 's/[^a-zA-Z0-9_-]/_/gp'`
	key=`echo "$1" | sed 's/[^a-zA-Z0-9_-]/_/g'`
	echo "/tmp/proclock.$key.lock"
)

log_start()(
	echo '---------- START '`date`' ----------'
	for m in "$@"; do echo "$m"; done
)
log_end()(
	for m in "$@"; do echo "$m"; done
	echo '---------- '`date`' ----------'
	echo $'\n\n\n'
)

escape_bash_val()(
	# echo '$wef="w\$ef"' | sed 's/\(["$\]\)/\\\1/g'
	echo "$1" | sed 's/\(["$\]\)/\\\1/g'
)



