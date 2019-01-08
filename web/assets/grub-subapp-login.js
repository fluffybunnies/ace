(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    1599: function(e, t, r) {
        (function(e) {
            var r, n, a, s;
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            window,
            s = function() {
                return function(e) {
                    var t = {};
                    function r(n) {
                        if (t[n])
                            return t[n].exports;
                        var a = t[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(a.exports, a, a.exports, r),
                        a.l = !0,
                        a.exports
                    }
                    return r.m = e,
                    r.c = t,
                    r.d = function(e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }
                    ,
                    r.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ,
                    r.t = function(e, t) {
                        if (1 & t && (e = r(e)),
                        8 & t)
                            return e;
                        if (4 & t && "object" === o(e) && e && e.__esModule)
                            return e;
                        var n = Object.create(null);
                        if (r.r(n),
                        Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                            for (var a in e)
                                r.d(n, a, function(t) {
                                    return e[t]
                                }
                                .bind(null, a));
                        return n
                    }
                    ,
                    r.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                        ;
                        return r.d(t, "a", t),
                        t
                    }
                    ,
                    r.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    r.p = "",
                    r(r.s = 0)
                }([function(e, t, r) {
                    "use strict";
                    r.r(t);
                    r(1)
                }
                , function(e, t, r) {}
                ])
            }
            ,
            "object" === o(t) && "object" === o(e) ? e.exports = s() : (n = [],
            void 0 === (a = "function" == typeof (r = s) ? r.apply(t, n) : r) || (e.exports = a))
        }
        ).call(this, r(86)(e))
    },
    1769: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(5)
          , a = r(4)
          , s = r(6)
          , o = r(3)
          , i = r(0)
          , u = r.n(i)
          , c = r(1)
          , l = r.n(c)
          , d = r(11)
          , m = r(31)
          , p = r(1185)
          , h = r(1189)
          , g = r(1188)
          , f = r(1190)
          , w = r(179);
        r(1599);
        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function y(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function v(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function E(e, t, r) {
            return t && v(e.prototype, t),
            r && v(e, r),
            e
        }
        function P(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function S(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && k(e, t)
        }
        function _(e) {
            return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function k(e, t) {
            return (k = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function O(e, t) {
            if (null == e)
                return {};
            var r, n, a = function(e, t) {
                if (null == e)
                    return {};
                var r, n, a = {}, s = Object.keys(e);
                for (n = 0; n < s.length; n++)
                    r = s[n],
                    t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++)
                    r = s[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
            }
            return a
        }
        function C(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function R(e, t) {
            return !t || "object" !== b(t) && "function" != typeof t ? C(e) : t
        }
        var I = {
            init: "INIT_RESET_PASSWORD",
            resetPassword: "RESET_PASSWORD",
            resetPasswordSuccess: "RESET_PASSWORD_SUCCESS",
            resetPasswordFailed: "RESET_PASSWORD_FAILED",
            clear: "CLEAR_RESET_PASSWORD"
        };
        function N() {
            return {
                type: I.resetPasswordSuccess
            }
        }
        function j() {
            return {
                type: I.resetPasswordFailed
            }
        }
        var T = {
            resetSuccess: function() {
                return {
                    header: "Great! Password reset",
                    message: "Use your new password to sign in."
                }
            },
            badRequest: function(e) {
                return {
                    header: "Couldn't reset password",
                    message: "Try again, then please contact Restaurant Care at " + e + " for help.",
                    isError: !0
                }
            },
            tokenExpired: function() {
                return {
                    header: "Password reset expired",
                    message: "Request another password reset to try again.",
                    isError: !0
                }
            },
            internalServerError: function() {
                return {
                    header: "Couldn't reset password",
                    message: "Sorry about that. Try again.",
                    isError: !0
                }
            }
        };
        function A(e, t, r, s, o) {
            return function(e, t, r) {
                return n.X.makeRequest("auth", {
                    method: "POST",
                    body: {
                        authToken: e,
                        clientId: Object(n.kb)()
                    }
                }, t(), r).then(function(e) {
                    return {
                        udid: e.data.claims.find(function(e) {
                            return "change_password" === e.claim
                        }).udId,
                        token: e.data.sessionHandle.accessToken
                    }
                })
            }(t, s, o).then(function(t) {
                return n.X.makeRequest("credentials/".concat(t.udid, "/change_password"), {
                    method: "PUT",
                    headers: {
                        Authorization: "Bearer ".concat(t.token)
                    },
                    body: {
                        newPassword: e,
                        clientId: Object(n.kb)()
                    }
                }, s(), o).then(function(e) {
                    return a.a.sendAlert(T.resetSuccess()),
                    e
                })
            }).catch(function(e) {
                throw function(e, t) {
                    400 !== e ? 403 !== e ? a.a.sendAlert(T.internalServerError()) : a.a.sendAlert(T.tokenExpired()) : a.a.sendAlert(T.badRequest(t))
                }(e && e.status, r),
                e
            })
        }
        var F = Object(s.fromJS)({
            passwordReset: !1,
            running: !1
        });
        var U = "PASSWORD_RECOVERY_"
          , D = {
            usernameFetched: U + "USERNAME_FETCHED",
            forgotPasswordSuccess: U + "FORGOT_PASSWORD_SUCCESS",
            forgotPasswordFailure: U + "FORGOT_PASSWORD_FAILURE",
            resetPassword: U + "RESET_PASSWORD"
        };
        function L(e) {
            var t = e.username;
            return {
                type: D.usernameFetched,
                username: t
            }
        }
        function M(e) {
            return {
                type: D.forgotPasswordSuccess,
                permissionGroup: e
            }
        }
        function x() {
            return {
                type: D.forgotPasswordFailure
            }
        }
        function G(e, t, r) {
            return n.X.anonymousAuth(t, r).then(function(a) {
                return n.X.makeRequest("merchant/user/username/".concat(e, "/forgot_password"), {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer ".concat(a)
                    }
                }, t(), r)
            }).then(function(e) {
                return e.data
            })
        }
        function W() {
            return {
                username: Object(n.Bb)().getItem("Authentication.username")
            }
        }
        var q = Object(s.fromJS)({
            loaded: !1,
            username: "",
            permissionGroup: null
        });
        function B(e, t) {
            var r = e.merge({
                username: t
            });
            return Object(o.f)(r, o.a.run(G, {
                successActionCreator: M,
                failureActionCreator: x,
                args: [r.get("username"), o.a.getState, o.a.dispatch]
            }))
        }
        var H = "Authentication.encoded.username"
          , z = "Authentication.encoded.password";
        var J = function(e) {
            var t = e.children;
            return u.a.createElement("section", {
                className: "authentication-view gfr-container"
            }, u.a.createElement("header", {
                className: "authentication-view__header"
            }, u.a.createElement(n.u, {
                className: "authentication-view__header__image",
                alt: "GH Restaurant"
            })), u.a.createElement("div", {
                className: "authentication-view__main"
            }, t))
        };
        J.propTypes = {
            children: l.a.node.isRequired
        };
        var V = function(e) {
            return u.a.createElement("div", {
                className: "authentication-username"
            }, u.a.createElement(a.rb, {
                label: "Username or email address",
                value: e.value,
                onKeyUp: function(t) {
                    13 === t && e.onReturn()
                },
                onChange: function(t) {
                    return e.onChange(t)
                }
            }), e.messages ? 0 === (t = e.messages).length ? null : u.a.createElement("div", null, t.map(function(e) {
                return u.a.createElement("div", {
                    className: "authentication-username__message",
                    key: e.toString()
                }, u.a.createElement("span", null, e))
            })) : null);
            var t
        };
        V.propTypes = {
            value: l.a.string,
            onChange: l.a.func.isRequired,
            messages: l.a.array,
            onReturn: l.a.func
        };
        var X = function(e) {
            return u.a.createElement("div", {
                className: "authentication-password"
            }, u.a.createElement(a.S, {
                label: "Password",
                value: e.value,
                onKeyUp: function(t) {
                    13 === t && e.onReturn()
                },
                onChange: e.onChange
            }), (t = e.message) ? u.a.createElement("div", {
                className: "authentication-password__message",
                key: t.toString()
            }, u.a.createElement("span", null, t)) : null);
            var t
        };
        X.propTypes = {
            value: l.a.string,
            onChange: l.a.func.isRequired,
            message: l.a.string,
            onReturn: l.a.func
        };
        var $ = function(e) {
            function t(e) {
                var r, n, a;
                return y(this, t),
                (r = R(this, _(t).call(this, e))).state = {
                    usernameInput: (a = window.localStorage.getItem(H),
                    a ? atob(a) : ""),
                    passwordInput: (n = window.localStorage.getItem(z),
                    n ? atob(n) : ""),
                    rememberMe: !1
                },
                r.goToPasswordRecovery = r.goToPasswordRecovery.bind(C(C(r))),
                r.onUsernameInputChanged = r.onUsernameInputChanged.bind(C(C(r))),
                r.onPasswordInputChanged = r.onPasswordInputChanged.bind(C(C(r))),
                r.toggleRememberMe = r.toggleRememberMe.bind(C(C(r))),
                r.onSubmit = r.onSubmit.bind(C(C(r))),
                r
            }
            return S(t, u.a.Component),
            E(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.pageLoaded()
                }
            }, {
                key: "onSubmit",
                value: function() {
                    var e, t;
                    this.props.isAuthenticating || (this.state.rememberMe && (e = this.state.usernameInput,
                    t = this.state.passwordInput,
                    window.localStorage.setItem(H, btoa(e)),
                    window.localStorage.setItem(z, btoa(t))),
                    this.props.startSignIn(this.state.usernameInput, this.state.passwordInput))
                }
            }, {
                key: "goToPasswordRecovery",
                value: function() {
                    var e;
                    e = this.state.usernameInput,
                    Object(n.Bb)().setItem("Authentication.username", e || ""),
                    this.props.goToPasswordRecovery()
                }
            }, {
                key: "toggleRememberMe",
                value: function() {
                    this.setState({
                        rememberMe: !this.state.rememberMe
                    })
                }
            }, {
                key: "onUsernameInputChanged",
                value: function(e) {
                    this.setState({
                        usernameInput: e
                    })
                }
            }, {
                key: "onPasswordInputChanged",
                value: function(e) {
                    this.setState({
                        passwordInput: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return u.a.createElement(J, null, u.a.createElement("div", {
                        className: "login__form"
                    }, u.a.createElement(V, {
                        value: this.state.usernameInput,
                        onChange: this.onUsernameInputChanged,
                        onReturn: this.onSubmit
                    }), u.a.createElement(X, {
                        value: this.state.passwordInput,
                        onChange: this.onPasswordInputChanged,
                        message: this.props.getAuthError || this.props.hydrateError ? this.errorMessage : "",
                        onReturn: this.onSubmit
                    }), u.a.createElement("div", {
                        className: "login__actions"
                    }, u.a.createElement(a.j, {
                        name: "Remember me",
                        onClickHandler: this.toggleRememberMe,
                        checked: this.state.rememberMe
                    })), u.a.createElement(a.e, {
                        onClick: this.onSubmit,
                        isLoading: this.props.isAuthenticating,
                        isSuccess: !!this.props.getCurrentUser,
                        className: "large block"
                    }, "Sign in")), u.a.createElement("div", {
                        className: "login__link"
                    }, u.a.createElement("a", {
                        onClick: this.props.goToUsernameRecovery,
                        title: "Forgot your username or email address?"
                    }, u.a.createElement("h4", null, "Forgot username"))), u.a.createElement("div", {
                        className: "login__link"
                    }, u.a.createElement("a", {
                        onClick: this.goToPasswordRecovery,
                        title: "Back to login"
                    }, u.a.createElement("h4", null, "Forgot password"))))
                }
            }, {
                key: "errorMessage",
                get: function() {
                    return 401 === this.props.getAuthError ? "The username and password you entered did not match our records. Please double-check and try again." : "Could not connect to the server. Please check your internet connection and try again."
                }
            }]),
            t
        }();
        var K = Object(d.connect)(function(e) {
            return {
                getCurrentUser: Object(n.mb)(e),
                isAuthenticating: Object(n.Eb)(e),
                getAuthError: Object(n.ib)(e),
                hydrateError: Object(n.qb)(e)
            }
        }, function(e) {
            return {
                pageLoaded: function() {
                    e(Object(n.Pb)("login"))
                },
                startSignIn: function(t, r) {
                    e(Object(n.Wb)(t, r))
                },
                goToUsernameRecovery: function() {
                    return e(Object(m.push)("/login/username-recovery"))
                },
                goToPasswordRecovery: function() {
                    return e(Object(m.push)("/login/password-recovery"))
                }
            }
        })($)
          , Y = function(e) {
            var t = e.children
              , r = e.careNumber
              , a = void 0 === r ? "" : r;
            return u.a.createElement("div", {
                className: "authentication-information"
            }, u.a.createElement("p", {
                className: "authentication-information__message"
            }, t), u.a.createElement("p", {
                className: "authentication-information__number"
            }, Object(n.V)(a.replace(/-/g, ""))))
        };
        Y.propTypes = {
            children: l.a.node.isRequired
        };
        var Q = Object(d.connect)(function(e) {
            return {
                careNumber: Object(n.wb)(e)
            }
        })(Y);
        var Z = Object(d.connect)(null, function(e) {
            return {
                returnToLogin: function() {
                    return e(Object(m.push)("/login"))
                }
            }
        })(function(e) {
            var t = e.returnToLogin;
            return u.a.createElement(J, null, u.a.createElement("div", {
                className: "username-recovery"
            }, u.a.createElement("h2", {
                className: "username-recovery__title"
            }, u.a.createElement("span", {
                className: "username-recovery__title--center"
            }, "Forgot your username"), u.a.createElement("span", {
                className: "username-recovery__title--center"
            }, "or email address?")), u.a.createElement("p", {
                className: "username-recovery__description"
            }, "Contact your manager and ask them to give you your login information."), u.a.createElement(Q, null, "If you are unable to contact your manager or anyone else who can edit your account, contact GrubHub Restaurant Care at:"), u.a.createElement(a.e, {
                onClick: t,
                className: "large block"
            }, u.a.createElement("span", {
                className: "username-recovery__button"
            }, u.a.createElement(a.w, {
                size: "small",
                value: "arrow-left",
                className: "username-recovery__button__icon"
            }), "Go back to login"))))
        })
          , ee = function(e) {
            function t(e) {
                var r;
                return y(this, t),
                (r = R(this, _(t).call(this, e))).state = {
                    userInput: "",
                    messages: []
                },
                r.onResetPassword = r.onResetPassword.bind(C(C(r))),
                r.onUserInputChanged = r.onUserInputChanged.bind(C(C(r))),
                r
            }
            return S(t, u.a.Component),
            E(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.pageLoaded()
                }
            }, {
                key: "getIsEmailInFlight",
                value: function() {
                    return /^(admin|cust_care(_basic)?)_group$/.test(this.props.permissionGroup)
                }
            }, {
                key: "getIsEmailAccountAvailable",
                value: function() {
                    return /@\w+\.\w+$/.test(this.props.username)
                }
            }, {
                key: "onUserInputChanged",
                value: function(e) {
                    this.setState({
                        userInput: e
                    })
                }
            }, {
                key: "onResetPassword",
                value: function() {
                    this.state.userInput ? this.props.resetPassword({
                        username: this.state.userInput
                    }) : this.setState({
                        messages: ["Looks like that's not the right username or email address. Try again."]
                    })
                }
            }, {
                key: "getUserInputNeededDisplay",
                value: function() {
                    return u.a.createElement("div", null, u.a.createElement("div", {
                        className: "password-recovery__form"
                    }, u.a.createElement(V, {
                        value: this.state.userInput,
                        messages: this.state.messages,
                        onChange: this.onUserInputChanged
                    }), u.a.createElement(a.e, {
                        onClick: this.onResetPassword,
                        className: "large block"
                    }, "Reset password")), u.a.createElement("div", {
                        className: "password-recovery__actions"
                    }, u.a.createElement("a", {
                        onClick: this.props.goToUsernameRecovery,
                        title: "Forgot your username or email address?",
                        className: "password-recovery__link"
                    }, u.a.createElement("h4", null, "Forgot your username or email address?"))), u.a.createElement("div", {
                        className: "password-recovery__actions"
                    }, u.a.createElement("a", {
                        onClick: this.props.returnToLogin,
                        title: "Back to login",
                        className: "password-recovery__link"
                    }, u.a.createElement("h4", null, "Back to login"))))
                }
            }, {
                key: "getUserInputNotNeededDisplay",
                value: function() {
                    return this.props.permissionGroup ? this.getIsEmailInFlight() ? u.a.createElement("div", null, u.a.createElement("div", {
                        className: "password-recovery__email-confirmation"
                    }, this.getSentEmailMessage(), u.a.createElement(Q, null, "If you didn't get this email, contact GrubHub Restaurant Care at:"), u.a.createElement(a.e, {
                        onClick: this.props.returnToLogin,
                        className: "large block"
                    }, "Back to login"))) : u.a.createElement("div", null, u.a.createElement("p", {
                        className: "password-recovery__description"
                    }, "Contact your manager and ask them to reset your password for you.")) : u.a.createElement("div", {
                        className: "password-recovery__message-loader"
                    }, u.a.createElement(a.fb, {
                        size: "large"
                    }))
                }
            }, {
                key: "getSentEmailMessage",
                value: function() {
                    return this.getIsEmailAccountAvailable() ? u.a.createElement("div", null, u.a.createElement("p", {
                        className: "password-recovery__description"
                    }, "We've sent an email with instructions to reset your password to:"), u.a.createElement("div", {
                        className: "password-recovery__username"
                    }, u.a.createElement(a.T, {
                        text: this.props.username
                    }))) : u.a.createElement("p", {
                        className: "password-recovery__description"
                    }, "We've sent an email with instructions to reset your password.")
                }
            }, {
                key: "getPasswordRecoveryView",
                value: function() {
                    return this.props.loaded ? u.a.createElement("div", {
                        className: "password-recovery"
                    }, u.a.createElement("h2", {
                        className: "password-recovery__title password-recovery__title--center"
                    }, "Forgot your password?"), this.props.username ? this.getUserInputNotNeededDisplay() : this.getUserInputNeededDisplay()) : u.a.createElement("div", {
                        className: "password-recovery__loader"
                    }, u.a.createElement(a.fb, {
                        size: "xx-large"
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    return u.a.createElement(J, null, this.getPasswordRecoveryView())
                }
            }]),
            t
        }();
        var te = Object(d.connect)(function(e) {
            var t = "login/password-recovery" === e.getIn(["page", "location"]) && e.getIn(["page", "data"]);
            return {
                loaded: t && t.get("loaded"),
                username: t && t.get("username"),
                permissionGroup: t && t.get("permissionGroup")
            }
        }, function(e) {
            return {
                pageLoaded: function() {
                    e(Object(n.Pb)("login/password-recovery"))
                },
                resetPassword: function(t) {
                    e(function(e) {
                        var t = e.username;
                        return {
                            type: D.resetPassword,
                            username: t
                        }
                    }(t))
                },
                goToUsernameRecovery: function() {
                    return e(Object(m.push)("/login/username-recovery"))
                },
                returnToLogin: function() {
                    return e(Object(m.push)("/login"))
                }
            }
        })(ee)
          , re = /^(?!\d+$)/;
        function ne(e) {
            return function(e) {
                if (e.length < 8)
                    return "Password must contain 8 characters or more.";
                return !1
            }(e) || function(e) {
                if ("password" === e.toLowerCase())
                    return 'Password cannot be "password"';
                return !1
            }(e) || function(e) {
                if (!re.test(e))
                    return "Password must contain at least 1 letter.";
                return !1
            }(e)
        }
        function ae(e, t) {
            return t && "" !== t ? e !== t && "Your password doesn’t match. Try typing it again." : "Please repeat your new password."
        }
        function se(e) {
            return e.getIn(["page", "data", "passwordReset"])
        }
        function oe(e) {
            return e.getIn(["page", "data", "running"])
        }
        var ie = function(e) {
            function t(e) {
                var r;
                return y(this, t),
                (r = R(this, _(t).call(this, e))).state = {
                    newPasswordInput: "",
                    confirmPasswordInput: "",
                    newPasswordError: !1,
                    confirmPasswordError: !1,
                    resetFailed: !1
                },
                r.onNewPasswordChange = r.onNewPasswordChange.bind(C(C(r))),
                r.onConfirmPasswordChange = r.onConfirmPasswordChange.bind(C(C(r))),
                r.isSubmitDisabled = r.isSubmitDisabled.bind(C(C(r))),
                r.onSubmitClick = r.onSubmitClick.bind(C(C(r))),
                r
            }
            return S(t, u.a.Component),
            E(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = Object(w.parse)(this.props.location.hash)
                      , t = e.authToken
                      , r = O(e, ["authToken"]);
                    this.authToken = t,
                    this.props.pageLoaded(),
                    this.props.updateHash(Object(w.stringify)(r))
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this;
                    !e.passwordReset && this.props.running && (this.setState({
                        resetFailed: !0
                    }),
                    setTimeout(function() {
                        t.setState({
                            resetFailed: !1
                        })
                    }, 2e3)),
                    e.passwordReset && this.props.running && (this.setState({
                        resetFailed: !1
                    }),
                    setTimeout(function() {
                        t.props.goToLogin()
                    }, 2e3))
                }
            }, {
                key: "onNewPasswordChange",
                value: function(e) {
                    this.setState({
                        newPasswordInput: e,
                        newPasswordError: ne(e),
                        confirmPasswordError: ae(e, this.state.confirmPasswordInput)
                    })
                }
            }, {
                key: "onConfirmPasswordChange",
                value: function(e) {
                    this.setState({
                        confirmPasswordInput: e,
                        confirmPasswordError: ae(this.state.newPasswordInput, e)
                    })
                }
            }, {
                key: "isSubmitDisabled",
                value: function() {
                    var e = "" === this.state.newPasswordInput || "" === this.state.confirmPasswordInput;
                    return !!this.state.newPasswordError || !!this.state.confirmPasswordError || e
                }
            }, {
                key: "onSubmitClick",
                value: function() {
                    this.props.running || this.props.passwordReset || this.state.resetFailed || this.props.onSubmit(this.state.newPasswordInput, this.authToken)
                }
            }, {
                key: "render",
                value: function() {
                    return u.a.createElement(J, null, u.a.createElement("div", null, u.a.createElement("h3", {
                        className: "reset-password-section"
                    }, "Create New Password"), u.a.createElement("p", {
                        className: "reset-password-section"
                    }, "Please enter a new password below to access Grubhub for Restaurants."), u.a.createElement("div", {
                        className: "reset-password-section__fields"
                    }, u.a.createElement("div", {
                        className: "reset-password-section"
                    }, u.a.createElement(a.S, {
                        id: "new-password",
                        label: "New password",
                        value: this.state.newPasswordInput,
                        onChange: this.onNewPasswordChange
                    }), this.state.newPasswordError ? u.a.createElement("span", {
                        className: "reset-password-section--error"
                    }, this.state.newPasswordError) : null), u.a.createElement("div", {
                        className: "reset-password-section"
                    }, u.a.createElement(a.S, {
                        id: "confirm-password",
                        label: "Confirm new password",
                        value: this.state.confirmPasswordInput,
                        onChange: this.onConfirmPasswordChange
                    }), this.state.confirmPasswordError ? u.a.createElement("span", {
                        className: "reset-password-section--error"
                    }, this.state.confirmPasswordError) : null), u.a.createElement(a.e, {
                        onClick: this.onSubmitClick,
                        disabled: this.isSubmitDisabled(),
                        isLoading: this.props.running,
                        isSuccess: this.props.passwordReset,
                        isFail: this.state.resetFailed,
                        className: "large block"
                    }, "Submit"))))
                }
            }]),
            t
        }();
        var ue = Object(d.connect)(function(e) {
            return {
                passwordReset: se(e),
                running: oe(e)
            }
        }, function(e) {
            return {
                pageLoaded: function() {
                    return e(Object(n.Pb)("login/reset-password"))
                },
                updateHash: function(t) {
                    return e(Object(m.push)({
                        hash: t
                    }))
                },
                onSubmit: function(t, r) {
                    return e(function(e, t) {
                        var r;
                        return P(r = {
                            type: I.resetPassword,
                            newPassword: e,
                            authToken: t
                        }, n.r, !0),
                        P(r, n.y, ["newPassword", "authToken"]),
                        r
                    }(t, r))
                },
                goToLogin: function() {
                    return e(Object(m.push)("/login"))
                }
            }
        })(ie)
          , ce = Object(p.a)(ue);
        var le = Object(d.connect)(function(e) {
            return {
                isLoggedIn: Object(n.Jb)(e)
            }
        })(function(e) {
            return e.isLoggedIn ? u.a.createElement(n.A, {
                defaultPath: "/"
            }) : u.a.createElement(h.a, null, u.a.createElement(g.a, {
                exact: !0,
                key: "login",
                path: "/login",
                component: K
            }), u.a.createElement(g.a, {
                exact: !0,
                key: "reset-password",
                path: "/login/reset-password",
                component: ce
            }), u.a.createElement(g.a, {
                exact: !0,
                key: "username-recovery",
                path: "/login/username-recovery",
                component: Z
            }), u.a.createElement(g.a, {
                exact: !0,
                key: "password-recovery",
                path: "/login/password-recovery",
                component: te
            }), u.a.createElement(f.a, {
                to: {
                    pathname: "/login",
                    search: e.location.search
                }
            }))
        })
          , de = {
            root: Object(p.a)(le),
            pageReducers: {
                "login/reset-password": function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case n.Ob.loaded:
                        return F;
                    case I.resetPassword:
                        return function(e, t) {
                            var r = e.merge({
                                running: !0
                            });
                            return Object(o.f)(r, o.a.run(A, {
                                successActionCreator: N,
                                failActionCreator: j,
                                args: [t.newPassword, t.authToken, t.restaurantCareNumber, o.a.getState, o.a.dispatch]
                            }))
                        }(e, t);
                    case I.resetPasswordSuccess:
                        return e.merge({
                            passwordReset: !0,
                            running: !1
                        });
                    case I.resetPasswordFailed:
                        return e.merge({
                            passwordReset: !1,
                            running: !1
                        });
                    case I.clear:
                        return null;
                    default:
                        return e
                    }
                },
                "login/password-recovery": function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case n.Ob.loaded:
                        return function(e) {
                            return Object(o.f)(e, o.a.run(W, {
                                successActionCreator: L
                            }))
                        }(q);
                    case D.usernameFetched:
                        return t.username ? B(e, t.username) : e.merge({
                            loaded: !0
                        });
                    case D.forgotPasswordSuccess:
                        return function(e, t) {
                            return e.merge({
                                permissionGroup: t,
                                loaded: !0
                            })
                        }(e, t.permissionGroup);
                    case D.forgotPasswordFailure:
                        return e.merge({
                            loaded: !0
                        });
                    case D.resetPassword:
                        return B(e, t.username);
                    default:
                        return e
                    }
                }
            }
        };
        t.default = de
    }
}]);
//# sourceMappingURL=https://s3.amazonaws.com/gfr-sourcemaps/subapp-login-1af14c5dbcadcf1bf66f.js.map
