(window.webpackJsonp = window.webpackJsonp || []).push([[7], {
    1197: function(e, t, r) {
        "use strict";
        var n = r(338);
        t.a = function(e, t, r) {
            var a = e.length;
            return r = void 0 === r ? a : r,
            !t && r >= a ? e : Object(n.a)(e, t, r)
        }
    },
    1198: function(e, t, r) {
        "use strict";
        var n = function(e) {
            return e.split("")
        }
          , a = r(1199)
          , i = "[\\ud800-\\udfff]"
          , s = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]"
          , o = "\\ud83c[\\udffb-\\udfff]"
          , c = "[^\\ud800-\\udfff]"
          , l = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , u = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , d = "(?:" + s + "|" + o + ")" + "?"
          , m = "[\\ufe0e\\ufe0f]?" + d + ("(?:\\u200d(?:" + [c, l, u].join("|") + ")[\\ufe0e\\ufe0f]?" + d + ")*")
          , g = "(?:" + [c + s + "?", s, l, u, i].join("|") + ")"
          , p = RegExp(o + "(?=" + o + ")|" + g + m, "g");
        var f = function(e) {
            return e.match(p) || []
        };
        t.a = function(e) {
            return Object(a.a)(e) ? f(e) : n(e)
        }
    },
    1199: function(e, t, r) {
        "use strict";
        var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.a = function(e) {
            return n.test(e)
        }
    },
    1225: function(e, t, r) {
        "use strict";
        var n = r(1229)
          , a = Object(n.a)("toUpperCase");
        t.a = a
    },
    1229: function(e, t, r) {
        "use strict";
        var n = r(1197)
          , a = r(1199)
          , i = r(1198)
          , s = r(333);
        t.a = function(e) {
            return function(t) {
                t = Object(s.a)(t);
                var r = Object(a.a)(t) ? Object(i.a)(t) : void 0
                  , o = r ? r[0] : t.charAt(0)
                  , c = r ? Object(n.a)(r, 1).join("") : t.slice(1);
                return o[e]() + c
            }
        }
    },
    1241: function(e, t, r) {
        "use strict";
        var n = r(333)
          , a = r(1225);
        t.a = function(e) {
            return Object(a.a)(Object(n.a)(e).toLowerCase())
        }
    },
    1310: function(e, t, r) {
        "use strict";
        var n = r(348)
          , a = r(190)
          , i = r(161)
          , s = Object(a.a)(function(e, t) {
            return Object(i.a)(e) ? Object(n.a)(e, t) : []
        });
        t.a = s
    },
    1600: function(e, t, r) {
        e.exports = r.p + "img/logo_grubhub_white_background_nJMDi-f0cb51be.png"
    },
    1601: function(e, t, r) {
        e.exports = r.p + "img/ordered-via-grubhub_cWCouv-f073b7ab.png"
    },
    1602: function(e, t, r) {
        e.exports = r.p + "img/ordered-via-seamless_gOfIvs-2c52ad09.png"
    },
    1603: function(e, t, r) {
        e.exports = r.p + "img/ordered-via-eat24_lcEThw-41ee630c.png"
    },
    1604: function(e, t, r) {
        e.exports = r.p + "img/logo_gfr_receipt_black_dQiWjt-227d0784.png"
    },
    1605: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF8SURBVEiJxdW/S1tRGAbgJ2p1cGqRTuKg4lKkU3XrJNVJKMVVdHPQP6BbcehU2qFj3R2cOzrpZEEXnYQupUVBFPxVKmo63HtDCFHvveckvvAOIeQ8Ocm536FY+vEROzjFBfbwBSMF1yqUJVyiekevsIyO2PCHe9DGrsSEJ3FbAK9iPha+UxCu4je6Q+EXJeCsbx5a/KHD8arst8ZYKP4sAO8LxY8D8KNQfDsAD/lsLbuKH7ZD9MTAp0vgCzHgLJ8KwKuoxMQreC+Z33ehN/iMrphwfYbxFT9xLRm7v/ANL1uFNksnnoQsEHL9daYtnTwHow8TGJeMzAE8RW/6/l+cSC6TrbTr6evSmcAa/in+qF3jO97m3GAt/Sla9jZr7AZG88BTOI8IZ73C7H3wjHI/cd7eYrEZPIizFsL1g+h1I77ZBjjrvrpLZ6yNcNZ3JENmrtn/0OLUzB/av/MDkgFwiOet22TTVNFbkTwCUe/fnBnoeCQYKl0YeiT8z3/cG0fZJCSqTAAAAABJRU5ErkJggg=="
    },
    1606: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF3SURBVEiJvdUxT1NRFAfwH2AiiBpZWGAxQjDuRB10JMGQQJj4CC4uDHUwcWFgJkysmjAYYhwcGfgEmibowEJwgQEURtBahvYmtba9t69975+c6fWe30nPzXtDiskgdjCMckHmP1lHtV5buFEkvoS/DQNUsYfxIvCHuGjCQ/3AbJ74PRy0wUPt5oUP4nMEP8ZEXgOsRfArPMsLX/T/pWuul3nhMziP4O/ywu/gWwT/gpE88AG1N10n/ASTKY3uZhjgbQS/wvOURiUc4WkX+AIqkQFepTR6jMv6gd94rfaPdMo0fkXw9yn4GA5bHP5Uf9Yqt7Efwb/iVgwfqEPtmhzhSYszHyL4Ke7HcGp779So1UreRH7/B3MpOGwmDBBqByvil241FQ9ZFr9MqbXdLR4yrXZpesHLGM06ANzERkb8DA96wRvT7UoqmO8XHtLNSkr9xkNSVvJR/I3Zc9qt5LtsH69MaV7JT0wVhYeElVTwomi8MY/61ega3ssP9IBMgJ8AAAAASUVORK5CYII="
    },
    1607: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVEiJtZbBasJAEIY/JI9gjqGHeOm5lL5AX7voKygIlgoFe/AiVQjtVQ9mYTWb3dmdcWBuk3zfLtn9A7fVAHNghl3VwAJ4iQ01wBY4Az9GAjWw7N/5Oybgg11rBXyw64FACKwVCIGDAvORIdc7oM0ATyNg119ABfAEfCeGpTsQW7HrE/DmP2QhUAS2EFCBNQIm4BIBU7CrlutXnjoFq8TMEXjNAbuS7IDpiq0E1OBSATNwrkAWeCKc+wM6wVwHHKRwSUmOk+QiejjYTKAUrBaQxOKxB6Quopw4zroyJadAvAMld7WJgCYkVAIW6VQkYBmL2QIfieHcWJTE8Sf9D+QzsFeu+L5iO/APvPvDIQFtOoUEBuCQgFUs+gKjYF9gYwT2BdYpsKvKEBx95wWEWJ52cT95XQAAAABJRU5ErkJggg=="
    },
    1608: function(e, t, r) {
        e.exports = r.p + "img/icon-alert_fWbnKH-6d5ca3ce.png"
    },
    1609: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA1CAYAAAD4bU3WAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAADrUlEQVRoBe1aOYgUQRTd9cLbRbzv0RXMNFFEwd1EQRQVFNRwg40EIzNB2UBB0cRAMFRxBQVBBCNzNdHEA7x2VWQNVPAGxeO9Zappa+p3dfXUdFeP/eFR3b9+1f//TVV1dU13dviXCehyBtAFzAEWAMuAGjCtjukoCdop2x+4/hjDJ1x/ruM9yhfAK2AEeAfQlja/gaBkMaLpAy4DDPJPzngMf2eA7cAUoDCZD8+3gLwJsPk7gpjG5c3KlgCJiBP1HPHNyouUjYGToYj5gDi5TrVUuCgqh2UoL7WUDXR+omSE8Edb3SpSJpaQDBJy0YWQTgfjHbC9Lti/FPR5qZdaHHFPxC2BV3mK3kzrBteVooWjlz+KKT7quE/yKivQm8lZv1cvzXXGEWyKkTrugl1mgzWS04Kz2daW+RlwlyoRQv0aX6FMEhzd9uXAYz98fZBIGfTlZ5fgZJsvBx77WS/Eqkji4pooal6x3AfsBtipLgt1Be45RL8Z9EWq+A7zMyGAN4a6a9CdAx6qOpJxB1AspikvqMYBlsccc1H59qlcDmToYK1qHGC5MkM+ipQlzIeLo1KkLceyYcDCg6W0ucTtdo5Bw6mOiQ3A/pdjm7zND2V0yA1eBw9U4izZrpdndJZnMx5d2vIw1XdzQeUZ6AgwE0gjq2CUtJKn6aPVNszrmaOTw7A/rtqQFI4UEmNirp11d5HzZkCUyahpZwJUbleRJ9dQq+yBhWrU7mXDMmF6fN4EIdYtrpXWchg8QZj346Fy8YnLXNy8jSva/HoI+f3z1NTn0IY2J0BPrwYF/zmMRCeEhyz/m3AbEYlOyN6opvGiFyo+njnNeEayHwhRHiAoHgaNBxgr38oPApKskyqYrPRU6RYa8fkttSlK3/DkqMfeL8Q6KOQ2+mQxJfFFagC9dJpm6icP3Y2EWBehzhTDI6kN/7w2NaBu9KXH0JCLktSmKD2niUl6oDTF9NVkTJ3EIDu5AuhvxfOg43caJidF6o4iJk7/uHDKJ8UU2cbZJCGvoxrzBbe794BNwFazSTDa84hkGOgFeoAkiXiILmCdhpCkTstcF/GgP3bLnJSX2CtCNBorQipCNAa022qEVIRoDGi31QipCNEY0G6rEVIRojGg3VYjRCMk6zfhNa2fUG+HXAPLSsiwq6MC7Pmy6izxKcPzgjTyPY1RADZN58PRwk5s4OdHZRAv+ZxFpjZCeDhUFmk6H9uh8cmyMFGP00s+/Pf/FKCPFH6eWUZxyucvLlmrS5GWSjgAAAAASUVORK5CYII="
    },
    1610: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAACT9JREFUeNrt3VuIXlcZBuB3MqmpNZmZZCKmFFFatdHU0gMeENF6wOAZEU+oYBTP3okWwZuCClJUsNgLEUQ0GqSIXlhUMKlKtVRtq7bW2EqllGiklkqaamuTeLG3msTpOIf/X/uwngc2yU3yJ2uv/c63vn+vvWfC2OxIcn6Sne2vT06yZYljc5KHkxxpjwdO+v29SQ6edNyR5CFDOz4zhmDQHp/kRUlenOSS9oKfm8LnHE/yxyS3J/lJkv1JbkpyzCkQAJSzJcll7QX/kiQXdHgO70/yozYMfpjkNqcHJm82ye4ke5M8mORET49bk3w0yTlOGazfM5NcmeRQjy/6pY5jSX6Q5G1JznIaYXV2t+vsEyM47k/yySTbnVZYvhfz2iQ/H8mFf/rxQJLPJDnbqYZTvTHJr0d64Z9+/CPJ1foEkOxK00U/UeFxJMmHk2w0DajN45J8Os1NOCcqP36T5PmmBLV4XZK7XfinHMeTfDnNTU0w2p/6X3GxL3v8Oc3NTTC6tf5vXeArvofgiiQbTBvGYE+Soy7sVR/702xqgkHapOSfyJLgMlOJoZlLcsAFPJHjoSRvMKUYih1JbnbhTrwv8H5TazpmDcHEnJfkuiRPNxQTNZPkle2v1xkO+uiids3qJ/Z0j6vjGRb0zFOT/MXFWez4nClnCdAXZ7cNP5tbynlumk1F1xsKujSf5BY/kTs73mEK0pVNbUPKhdjd8c8krzIV6cI3XIC9OB5sG7BQzPtceL06fp/macmsga9UVueiJD9LcubA/t2PJLkryeGc+hKQx+S/LwqZS3Jukm0DPC/7krzF9BQA07QlyS/TfO3X94v9F2k21NyY5s0+f2jXzCuxPc1bhXYleWGaF48MYWPOe5N80TRlWr7e87Xw3iSvnlI5/Iwkl6d5+Udfx+DvSS40TZmGt/Z00t+Y5J2F18CXJrmqXUb0bTxuS3KG6cokzad/t/n+OMnLOh6X7Uk+kebZ/30am8tNWSbpqh5N7lvbNXnfAvLKtsfQl3cQPNG0ZRIubptqfZjUH+l5eXtBW5n0IQS+ZeqyXjNJbujBZP5pkicNaMw+lOZe/a7H7eWmMOuxp+MJfLwtrYf48oxLk9zZ8fjdqSHIWs2m+e68q8l7NM27AodsPsm1HYfAHlOZtXh7h5P2viTPG8k4bkzy1Q7H8mA8Ypw1rGO7eo7/PWnuwBvbeH62wxB4kynNary+o4l6b5pbcMfqCx2N66/ilndW4aaO1vzPGfm4bkjyzY5C4DWmNSvxgg4m57Ekr6hkfDelm1ei7ze1WYkvdTA5r6hsjHek2ZZc+itVdweyrMcm+VvhiXkgdXapX9pWPiXH+mOmOMt5c+EJ+dc0TxWu1acKj/ftpjjL+W7hCfnuysf7zJS/2epZpjlLeULKbvq5Ib6aSprmZ8kA+LwhZynvKtyQusSQ/8e3C4793YabpXyt4CS8xnCf4sI2FEuN/1MMOac7VHACXmy4/8d3Co7/eww3J9tZcPJda7iX9OyC52Cf4eZkHyg4+XYb7kdV6uErhw01J7um0MQ7FG9j7ksQ7zLcDXulm9dNl7A3zd1vLG1fkodHds4FQM9tTnJOwQDg0d2X5HuFPut8wy0AkuRphT7ncJJbTLf/6/uFPmenoRYAJX8SHDDVVmT/yM67ABAAAmAVfpfkTwU+59x4YrAAKBgA15tqvRqrjW0ICIDK//8lbgs9luQOU21VVUAJ5xlqAbBQ4DPuSrmvt8bg4IjOvQDouS0jmtACoH/nXgAIgNxjmvVyvARA5QGwIclZBT7niGnWy/ESAJUHwOaRTeixOJrm+QACQACMYgIIgNX594tSBAAAAAAAAAAAAAAAAMBpSryjfkfKPXsfhu54kptLfdjGAp/xwSQfd15hxc5I8kiJDyqxHXjR+YRV2Vrqg0oEwDbnE/p5zQgA6J9FAQAqAD0AEAAqABAAAwyAjUnmnE+oswew1bmEeisA63+oOACs/0EAADX2AAQA6AEAlgDASswlmRUAUKeZUteOAICKlwF6ACAAVAAgAAQA9MWiAAAVwGADYDZ2AkK1AbAtZR47DgKgpwEAVNoDEABQcQXgHgCwBAAEAKAHAKxIkR2BegDQTzMp8FBdFQBU3AcQAFBxH0AAgApADwAEgAoABMAE2AkIFfcAtsZOQKi2ArD+h4oDwPofBABQYw9AAIAeAGAJAKzFfKa8I1AAQH9NfUegAICKlwF6ACAAVAAgAAQA9M2iAAAVwGACYDbN1xdAhQFgJyBUHADKf6i4ByAAoOIKwD0AYAkACABADwBYk/lM8endegDQb1PdEagCgIr7AAIAKu4DCABQAegBgABQAYAAWAc7AaHiHsBC7ASEaisA63+oOACs/0EAADX2AAQA6AEAlgDAJCxkSjsCBQD039R2BAoAqHgZoAcAAkAFAAJAAEBfLQoAUAH0NgA2pPm6AqgwALwTECoOAOU/VNwDEABQcQXgHgCwBAAEAKAHAEzEVN4RqAcAwzCV+2xUAFBxH0AAQMV9AAEAKgA9ABAAKgAQAGv8e7wTECrtASxkSk8tBfpfAVj/Q8UBYP0PAgCosQcgAEAPALAEAKZhIRP+tk0AwHBMfEegAICKlwF6ACAAVAAgAAQA9N2iAAAVQG8CwDsBoeIAWIidgFBtACj/oeIegACAiisA9wCAJQAgAAA9AGAqFpLM6AFAnSZ6340KACruAwgAqLgPIABABaAHAAJABQACYJV/fsH5gDp7APOxExCqrQCs/6HiALD+BwEA1NgDEACgBwBYAgAlbM2EdgQKABieid1/IwCg4mWAHgAIABUACAABAEOxKABABdBZAMyk+ToCqDAAFmInIFQbAMp/qLgHIACg4grAPQBgCQAIAEAPAChiIRPYEagHAMM0m+ahvCoA0AcQAKAPIABABaAHAAJABQACYPIBMBPvBIRqewDzab6GACqsAKz/oeIAsP4HAQDU2AMQAKAHAFgCAF1Y9zsCBQAM17p3BAoAqHgZoAcAAkAFAAJAAMDQLAoAUAEUCwDvBISKA8BOQKg4AJT/UHEPQABAxRWAewDAEgAQAIAeANCJde0I1AOAYZtNMqcCAH0AAQD6AAIAVAB6ACAAVAAgACYSAHYCQsU9gLnYCQjVVgDW/1BxAFj/w4gC4F9OwA4v2e5dhgAAAABJRU5ErkJggg=="
    },
    1611: function(e, t, r) {
        e.exports = r.p + "img/icon-driver_ijQzrm-931604cd.png"
    },
    1612: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA0klEQVQ4jaXTTUoDQRAF4C9t4tITiGuJot4hd9HDBCOCojdRcg1Hly7cugpZSDD+LKYnDGOqlfjgraped/284icOMEGF18wHnGO4Jn+FbVxhia+AS1xisE48LQi7vM+aFW6DxOvMKAYO8REk7WZG7QwTzpBKwwmwhdOE0QbiBqOUSyxhjucgtpeUyz/BDMe4UffeRg+exOv6zMIdHGHRiVfUxvht7y/BRxNq65bcF/Ed+00vFxs8MG4PY6C251/Fd+h3J/6vY2qjOedHvGVWgnP+Bof0ibs0LpUPAAAAAElFTkSuQmCC"
    },
    1613: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAAKomlDQ1BJQ0MgUHJvZmlsZQAASImVlgdUU1kexu97L73QQpcSekeKQADpNXTpYCMkQEKJMRC6ncERGAsiIqAIOgii4KAUGSsWLAyKBewDMiio62ABVFT2AUvY2T27e/afc3N/58t9//e9m3fP+QCgdLMEgmRYCoAUfpow2MuVHhkVTccPAggggAA0gASLnSpwCQryA2jNz3+tiT50NVp3TWZ6/fvv/7WkOXGpbACgIJRjOansFJRPoaOZLRCmAYBwUV0rI00ww0UoywpRgygfnOGEOT41w7FzfG12TWiwG8pPACBQWCxhAgDkEVSnp7MT0D4UAspmfA6PjzIDZUc2l8VBORNl45SUNTN8GGX92H/qk/CXnrHinixWgpjnnmW2CO68VEEyK+v/3I7/XSnJovl7aKKDwhV6B6MzCd2zuqQ1vmLmxwYEzjOPM7t+lrki77B5Zqe6Rc8zh+XuO8+ipDCXeWYJF67lpTFD51m4Jljcn58c4CfuH8cUc1yqR8g8x/M8mfOczQ2NmOd0XnjAPKcmhfgurHET60JRsNhzvNBT/IwpqQve2KyFe6VxQ70XPESK/XDi3D3EOj9MvF6Q5iruKUgOWvCf7CXWU9NDxNemoS/YPCeyfIIW+gSJ9weEAwtgiX5QJ2lxmWkzRt3WCLKEvARuGt0FPSlxdCafbWpMtzAztwFg5tzN/a0fHsyeJ0iesKBl1aOv6X5ULFjQIqsBaHQHQKFlQdNGzwgN5dNv2SJh+pyGmfnCoq4kgSxQAmpAC+gDE9SdNbAHzsAD+IBAEAqiwCrABlyQAoQgA+SCTSAfFIKdYA8oB1XgEKgDx0EzaANnwEVwFdwEt8F98BgMgGHwGoyBCTAFQRAeokI0SAlSh3QgI8gCYkCOkAfkBwVDUVAMlADxIRGUC22BCqFiqByqhuqhX6DT0EXoOtQLPYQGoVHoPfQFRmAKLAurwrrwYpgBu8C+cCi8Ek6A18LZcB68HS6Da+BjcCt8Eb4J34cH4NfwOAIQMiKPaCAmCANxQwKRaCQeESLrkQKkFKlBGpEOpAu5iwwgb5DPGByGhqFjTDD2GG9MGIaNWYtZjynClGPqMK2Yy5i7mEHMGOY7lopVwRph7bBMbCQ2AZuBzceWYmuxLdgr2PvYYewEDoeTx+nhbHDeuChcIi4HV4Tbj2vCXcD14oZw43g8XglvhHfAB+JZ+DR8Pn4f/hj+PP4Ofhj/iUAmqBMsCJ6EaAKfsJlQSjhKOEe4Q3hJmCJKEXWIdsRAIoeYRdxBPEzsIN4iDhOnSNIkPZIDKZSUSNpEKiM1kq6QnpA+kMlkTbIteRmZR95ILiOfIF8jD5I/U2QohhQ3ygqKiLKdcoRygfKQ8oFKpepSnanR1DTqdmo99RL1GfWTBE3CVIIpwZHYIFEh0SpxR+KtJFFSR9JFcpVktmSp5EnJW5JvpIhSulJuUiyp9VIVUqel+qXGpWnS5tKB0inSRdJHpa9Lj8jgZXRlPGQ4Mnkyh2QuyQzREJoWzY3Gpm2hHaZdoQ3L4mT1ZJmyibKFssdle2TH5GTklsiFy2XKVcidlRuQR+R15ZnyyfI75Jvl++S/KKgquCjEKWxTaFS4ozCpuEjRWTFOsUCxSfG+4hclupKHUpLSLqU2pafKGGVD5WXKGcoHlK8ov1kku8h+EXtRwaLmRY9UYBVDlWCVHJVDKt0q46pqql6qAtV9qpdU36jJqzmrJaqVqJ1TG1WnqTuq89RL1M+rv6LL0V3oyfQy+mX6mIaKhreGSKNao0djSlNPM0xzs2aT5lMtkhZDK16rRKtTa0xbXdtfO1e7QfuRDlGHocPV2avTpTOpq6cbobtVt013RE9Rj6mXrdeg90Sfqu+kv1a/Rv+eAc6AYZBksN/gtiFsaGXINawwvGUEG1kb8Yz2G/UaY41tjfnGNcb9JhQTF5N0kwaTQVN5Uz/TzaZtpm8Xay+OXrxrcdfi72ZWZslmh80em8uY+5hvNu8wf29haMG2qLC4Z0m19LTcYNlu+W6J0ZK4JQeWPLCiWflbbbXqtPpmbWMttG60HrXRtomxqbTpZ8gyghhFjGu2WFtX2w22Z2w/21nbpdk12/1pb2KfZH/UfmSp3tK4pYeXDjloOrAcqh0GHOmOMY4HHQecNJxYTjVOz521nDnOtc4vXQxcEl2Oubx1NXMVura4TrrZua1zu+COuHu5F7j3eMh4hHmUezzz1PRM8GzwHPOy8srxuuCN9fb13uXdz1Rlspn1zDEfG591Ppd9Kb4hvuW+z/0M/YR+Hf6wv4//bv8nAToB/IC2QBDIDNwd+DRIL2ht0K/LcMuCllUsexFsHpwb3BVCC1kdcjRkItQ1dEfo4zD9MFFYZ7hk+Irw+vDJCPeI4oiByMWR6yJvRilH8aLao/HR4dG10ePLPZbvWT68wmpF/oq+lXorM1deX6W8KnnV2dWSq1mrT8ZgYyJijsZ8ZQWyaljjsczYytgxtht7L/s1x5lTwhmNc4grjnsZ7xBfHD+S4JCwO2GU68Qt5b7hufHKee8SvROrEieTApOOJE0nRyQ3pRBSYlJO82X4SfzLa9TWZK7pFRgJ8gUDa+3W7lk7JvQV1qZCqStT29Nk0YDTLdIX/SAaTHdMr0j/lBGecTJTOpOf2Z1lmLUt62W2Z/bPOZgcdk5nrkbuptzBdS7rqtdD62PXd27Q2pC3YXij18a6TaRNSZt+22y2uXjzxy0RWzryVPM25g394PVDQ75EvjC/f6v91qofMT/yfuzZZrlt37bvBZyCG4VmhaWFX4vYRTd+Mv+p7Kfp7fHbe3ZY7ziwE7eTv7Nvl9OuumLp4uziod3+u1tL6CUFJR/3rN5zvXRJadVe0l7R3oEyv7L2fdr7du77Ws4tv1/hWtFUqVK5rXJyP2f/nQPOBxqrVKsKq74c5B18UO1V3VqjW1N6CHco/dCLw+GHu35m/Fxfq1xbWPvtCP/IQF1w3eV6m/r6oypHdzTADaKG0WMrjt0+7n68vdGksbpJvqnwBDghOvHql5hf+pp9mztPMk42ntI5VdlCaylohVqzWsfauG0D7VHtvad9Tnd22He0/Gr665EzGmcqzsqd3XGOdC7v3PT57PPjFwQX3lxMuDjUubrz8aXIS/cuL7vcc8X3yrWrnlcvdbl0nb/mcO3Mdbvrp28wbrTdtL7Z2m3V3fKb1W8tPdY9rbdsbrXftr3d0bu099wdpzsX77rfvXqPee/m/YD7vX1hfQ/6V/QPPOA8GHmY/PDdo/RHU483PsE+KXgq9bT0mcqzmt8Nfm8asB44O+g+2P085PnjIfbQ6z9S//g6nPeC+qL0pfrL+hGLkTOjnqO3Xy1/Nfxa8HrqTf7fpP9W+Vb/7ak/nf/sHoscG34nfDf9vuiD0ocjH5d87BwPGn82kTIxNVnwSelT3WfG564vEV9eTmV8xX8t+2bwreO77/cn0ynT0wKWkDUbBRB0wPHxALw/AgA1Cs0Kt9G4IjGXi2cLmsvyswT+E89l59myBqDWGYDwjQCNEQBUokMHZRl0DkL1UGcAW1qKxz8qNd7SYq4XuQ2NJqXT0x/QPIg3AOBb//T0VNv09Lda1OwjAC5MzOXx2Rwzk0RvSAmB6vWc9eBf6++k/gB+fTN9rQAAAdVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4xPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPjI8L3RpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CgLYgAUAAAPoSURBVEgNvVfNS1RRFJ9nU7aoFDVtUc6YWJtg7GMhGCi0KBDUXZvGGQaKXIStDNw0riP0PxB3ofjRPsYWGZIxziIkcxhBBnIWOjpKRJvX7/fmvded++51ZlA6cLnnno/fOfe8e+6d8fkEMk3TsEfX2tqa2dvba25sbDQJJlWx9CUGsUAPMGpsfEMLBIO2eDxegIHJAYCvdNQ6aBT0oa+DA8wjyNo15kXx0tLS+WAwaAV2HDlPTEyEj3VUKG2fEixir6ysXFKYF0VMAFyJE9f19fVmoVBo1DpKimw220gfFdb8/HyzZF66HBgYeKdyHBwc/IIS6r+dDUMb2qow+vv7f5TFyGQyLXV1dcrsFxYWnpSm613ZNh5/Ym5ubt7xeigk+H5vIPaAsKw7OzvaElKnK/3k5GSi7O6dXGBYGwqFfquSwCf6Br2nKyijTuUDLKjNyw5+RXMqlXqoAqMMZX4tg0AW19njHhiV7cuukbExMjLyWQXKdtrb2+t2QMDf15UeGDlg+R3bqubDw8PmQCDgOQtMCsAs63UO8pTJg775fD5UVVDZeHFx8ZUM7Kxxb5gczlqe8VnY0icjlg+HKw8UTyB+CtXNSVv4sEIXTxbd9k6n0926u0GVGG23trYipxKcINiJgbtBeSBVCcA2C58zp5aAncRV9rMqoCize/52xcG5u0qNk8nktBhMxaPnP1aDaZVXTgAAfr6MchmxbopEItoqUAcKiHhYG/gt4Lk5XRsYWN+KhnNzc12dnZ1JcWc45enx8fFhPMc3YdMBvTYB6kCtBwcHHfB5Cl/xVfwJ/ejMzEyDG5wMHC5g+JH9rBhY5gkejUa1wR172hyXJO1gE0PM4qcHMw1B2gH4X3MsFnuGWD6f7iarpu/LJa3DWl5ebvbJh4pthJO8jsqE9/f3x6D/Uy6ATg/fX3gLXgJrDJgFuY2Hhobe+uRXDL/ZPsHBPbXgW3UPUk9Pj8mhSoA+oCvQWQT+LN6GdSxce8Tmb45/AvKgxxQ6hLWhCmJft7xyTVWJ6QNyN0I8rJ9zKhmyM87Edxi67zf4a6oHh1czdA0YjeDFdrMC0Ad0g4FJ4GvkClix+WpR7wy2EHaVgUOUZwAd4jkD2B3v+nMEJoGvhSxHVhz0xRl4AX0fzkBKbk+ckQ/aLlDtmuDMOpfLtYAvISTbLlcTBm41HF6cE4nEXWbfJ3eCaCTyDLC6unoLMiXhd2RYlwQcSqqDmLOIbTABA9m3QbArG4lrAB+hjEHIjiU8WMPlkkCs94hbfK7BWCcVs39qaiqMXv2FCG62BIPDNPT821YRbW9v3+OG5ESAvYsYj4DlvsB/ATu10oi9hqWCAAAAAElFTkSuQmCC"
    },
    1614: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KAtiABQAAAylJREFUSA21V79r00EUv8TfCiXi4KImoaCiQ4uLODXkD0hGFyHWyUXi5qJJWtA5s0hpBwengLOQJjo5tbgINj+qi1AkKdpK1TR+Xsw73r3chVT0IHmf9+Pe5/vefe8uiRgxSqVSn9RisWhWV1dNrVYbeOfm5kwqlTLLy8tmc3NzYMvlcnuJROI0lCl8PpfLZTM7O0tx1yORyNtB0ARfRNjH2ADpAJNOGOMjiK2tWq2WOR/Iv1AcfWDfQGyEfVpGtWGoFz32R9KGpLaKdrv9hn3z8/PT29vb11jXMkT4XgdCd2zRaHRLxPzpMwwgN2jv81CVIcIdkYzhNwYk9/f3d4XeFZgIL3U6navSxjhEyH4pe1LBiyH179LX7XbNysrKY2ljHCI8xQFCHhPYSELgn9JHGIQZtPW4tocIL+tA6GelDWtoK0R76Q11xtraGm2hK44RSohwQQdCvyFtvV7vh9R9uFKpZLQ9RDitA6GXaG14oKqvjNHSQ4ylxOFxR+qEvYTUDj2IbH193ZrT6XTHKsYcFthCxJ/HOjo+L+HCwmhH6ejiEY/HqVRbIZIeYZ+UtCdbrdYZadPYHl2xWMyLMaG/tLSUlRNx5NEWsPES1+t159RxKszn8zaPXC+JkfwJjq+XNpCy9/tHpS5xo9G4IHWHEG17USgU3skAifFA9/AiPMRL4mwD6M4elXOwNS5K3cF40ila5GazuZXNZm2L6JaA7RV83lsA/qdIZOMlzmQyzySJUyEcu3jaX8lk8j7dbTzoLoTtga6M/ZAjJwr7sBwJxiQ1IZ8er2XQEH/w2Nh0goGWeMjwGopgulD1kLeD9p3UBqGfE9itULRsTwYNMVfvcZlghQh2fLqlnGxcco6xEi/TuAo/2UAA59iRDo1F9dpFV5UlnJmZMTg0OGZncXHxLt5i1sNS/4gKRxqDhBvwD7YFfkSh4P5NfLxbKNTScfl9Pn1hV0Id+VeEeh+O/ALgp3QIQ23g4DHSqTBUHc13CDnhXxB7ryfOJ6UmZN274HIi44M+HBPwfH7SibcLT5xUakL6c0KD/qD8l6EJbw9bdOsAbBO3n3L+BnxFM/hO00kpAAAAAElFTkSuQmCC"
    },
    1615: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIqSURBVEiJtdfLb01RFAbw3+1Dqww0RYTGQOJOS0yomGBSEQMiJiLC0EQkIjFVE/+BRJgRFZLGa9YIUynRDggG1KySeoSqkhrsc9Lj9j727m2/ZOXse5Pv+/ZZ56y19imJQwm7MYCdKKMbnfiKjxjDCIYxFalbFy04jreYi4xfuIZNzRj340WCaWX8wCDaU41PY6YJ42I8w/pY48ElMi3Ge2xuZHxyGYzzeIlVtYz7LV2qa8WdomEpu7ZgFH2NUpNhAo+z9QYciuTBgQIXnEi8g0cF7p5E7iu05uQS3iWQR7C3YN6JLVkcjNQ4upid3xAeUS1sj9R5kBMuRxK+YE0d4xTzn+how64GgjlGsw0QWudNC0unK1JrJfrahCERg9nC+jc+Z9cu7EBHpE6OMiEFMan6rnab3CiUT8pbfza/o1jCfeHtroYOjCdonW/FuTqClSjjiDA2e4Tymsp+/8U3HI7UukfouSnpqoxbBcH+BN5Am3ACiWmrT3Gpyv/jhfXWCJ0cY3AqcqdDDcRa8DxS63VOGBZKphl047ZQcjH4b7pdj9jthHD3Q7hY4G7DdAQ/j2kVB4te8fU+hyfmh8mxBN4crlRLRWyPbyYmhUe0AO3CuFwu41nsq2aco0fabE+JM/WMc/SKL5mY+IMLMcY5VuPuEhhPapDqethvce13BlexbrHGOVqFcnqocTm+EVpwww8E5o/OsegU5kAZa7FC+Er9IPTqTyli/wDJ9QSzWupNpAAAAABJRU5ErkJggg=="
    },
    1616: function(e, t) {
        !function(e, t, r) {
            "use strict";
            var n, a, i, s, o, c = {};
            function l(e, t, r) {
                var n, a = e.runtimeStyle && e.runtimeStyle[t], i = e.style;
                return !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(r) && /^-?\d/.test(r) && (n = i.left,
                a && (e.runtimeStyle.left = e.currentStyle.left),
                i.left = "fontSize" === t ? "1em" : r || 0,
                r = i.pixelLeft + "px",
                i.left = n,
                a && (e.runtimeStyle.left = a)),
                /^(thin|medium|thick)$/i.test(r) ? r : Math.round(parseFloat(r)) + "px"
            }
            function u(e) {
                return parseInt(e, 10)
            }
            function d(e, t, r, n, a, i) {
                var s, o, l, u, d = c.Util.getCSS(t, e, a);
                if (1 === d.length && (u = d[0],
                (d = [])[0] = u,
                d[1] = u),
                -1 !== d[0].toString().indexOf("%"))
                    l = parseFloat(d[0]) / 100,
                    o = r.width * l,
                    "backgroundSize" !== e && (o -= (i || n).width * l);
                else if ("backgroundSize" === e)
                    if ("auto" === d[0])
                        o = n.width;
                    else if (/contain|cover/.test(d[0])) {
                        var m = c.Util.resizeBounds(n.width, n.height, r.width, r.height, d[0]);
                        o = m.width,
                        s = m.height
                    } else
                        o = parseInt(d[0], 10);
                else
                    o = parseInt(d[0], 10);
                return "auto" === d[1] ? s = o / n.width * n.height : -1 !== d[1].toString().indexOf("%") ? (l = parseFloat(d[1]) / 100,
                s = r.height * l,
                "backgroundSize" !== e && (s -= (i || n).height * l)) : s = parseInt(d[1], 10),
                [o, s]
            }
            c.Util = {},
            c.Util.log = function(t) {
                c.logging && e.console && e.console.log && e.console.log(t)
            }
            ,
            c.Util.trimText = (a = String.prototype.trim,
            function(e) {
                return a ? a.apply(e) : ((e || "") + "").replace(/^\s+|\s+$/g, "")
            }
            ),
            c.Util.asFloat = function(e) {
                return parseFloat(e)
            }
            ,
            i = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,
            s = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,
            c.Util.parseTextShadows = function(e) {
                if (!e || "none" === e)
                    return [];
                for (var t = e.match(i), r = [], n = 0; t && n < t.length; n++) {
                    var a = t[n].match(s);
                    r.push({
                        color: a[0],
                        offsetX: a[1] ? a[1].replace("px", "") : 0,
                        offsetY: a[2] ? a[2].replace("px", "") : 0,
                        blur: a[3] ? a[3].replace("px", "") : 0
                    })
                }
                return r
            }
            ,
            c.Util.parseBackgroundImage = function(e) {
                var t, r, n, a, i, s, o, c, l = [], u = 0, d = 0, m = function() {
                    t && ('"' === r.substr(0, 1) && (r = r.substr(1, r.length - 2)),
                    r && c.push(r),
                    "-" === t.substr(0, 1) && (a = t.indexOf("-", 1) + 1) > 0 && (n = t.substr(0, a),
                    t = t.substr(a)),
                    l.push({
                        prefix: n,
                        method: t.toLowerCase(),
                        value: i,
                        args: c
                    })),
                    c = [],
                    t = n = r = i = ""
                };
                m();
                for (var g = 0, p = e.length; g < p; g++)
                    if (s = e[g],
                    !(0 === u && " \r\n\t".indexOf(s) > -1)) {
                        switch (s) {
                        case '"':
                            o ? o === s && (o = null) : o = s;
                            break;
                        case "(":
                            if (o)
                                break;
                            if (0 === u) {
                                u = 1,
                                i += s;
                                continue
                            }
                            d++;
                            break;
                        case ")":
                            if (o)
                                break;
                            if (1 === u) {
                                if (0 === d) {
                                    u = 0,
                                    i += s,
                                    m();
                                    continue
                                }
                                d--
                            }
                            break;
                        case ",":
                            if (o)
                                break;
                            if (0 === u) {
                                m();
                                continue
                            }
                            if (1 === u && 0 === d && !t.match(/^url$/i)) {
                                c.push(r),
                                r = "",
                                i += s;
                                continue
                            }
                        }
                        i += s,
                        0 === u ? t += s : r += s
                    }
                return m(),
                l
            }
            ,
            c.Util.Bounds = function(e) {
                var t, r = {};
                return e.getBoundingClientRect && (t = e.getBoundingClientRect(),
                r.top = t.top,
                r.bottom = t.bottom || t.top + t.height,
                r.left = t.left,
                r.width = e.offsetWidth,
                r.height = e.offsetHeight),
                r
            }
            ,
            c.Util.OffsetBounds = function(e) {
                var t = e.offsetParent ? c.Util.OffsetBounds(e.offsetParent) : {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.offsetTop + t.top,
                    bottom: e.offsetTop + e.offsetHeight + t.top,
                    left: e.offsetLeft + t.left,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }
            ,
            c.Util.getCSS = function(e, a, i) {
                void 0 !== e && (n = t.defaultView.getComputedStyle(e, null));
                var s = n[a];
                if (/^background(Size|Position)$/.test(a))
                    return function(e, t, n, a) {
                        if (e = (e = (e || "").split(","))[a || 0] || e[0] || "auto",
                        e = c.Util.trimText(e).split(" "),
                        "backgroundSize" !== n || e[0] && !e[0].match(/cover|contain|auto/)) {
                            if (e[0] = -1 === e[0].indexOf("%") ? l(t, n + "X", e[0]) : e[0],
                            e[1] === r) {
                                if ("backgroundSize" === n)
                                    return e[1] = "auto",
                                    e;
                                e[1] = e[0]
                            }
                            e[1] = -1 === e[1].indexOf("%") ? l(t, n + "Y", e[1]) : e[1]
                        }
                        return e
                    }(s, e, a, i);
                if (/border(Top|Bottom)(Left|Right)Radius/.test(a)) {
                    var o = s.split(" ");
                    return o.length <= 1 && (o[1] = o[0]),
                    o.map(u)
                }
                return s
            }
            ,
            c.Util.resizeBounds = function(e, t, r, n, a) {
                var i, s, o = e / t;
                return a && "auto" !== a ? r / n < o ^ "contain" === a ? (s = n,
                i = n * o) : (i = r,
                s = r / o) : (i = r,
                s = n),
                {
                    width: i,
                    height: s
                }
            }
            ,
            c.Util.BackgroundPosition = function(e, t, r, n, a) {
                var i = d("backgroundPosition", e, t, r, n, a);
                return {
                    left: i[0],
                    top: i[1]
                }
            }
            ,
            c.Util.BackgroundSize = function(e, t, r, n) {
                var a = d("backgroundSize", e, t, r, n);
                return {
                    width: a[0],
                    height: a[1]
                }
            }
            ,
            c.Util.Extend = function(e, t) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r]);
                return t
            }
            ,
            c.Util.Children = function(e) {
                var t, n, a;
                try {
                    t = e.nodeName && "IFRAME" === e.nodeName.toUpperCase() ? e.contentDocument || e.contentWindow.document : (n = e.childNodes,
                    a = [],
                    null !== n && function(e, t) {
                        var n = e.length
                          , a = 0;
                        if ("number" == typeof t.length)
                            for (var i = t.length; a < i; a++)
                                e[n++] = t[a];
                        else
                            for (; t[a] !== r; )
                                e[n++] = t[a++];
                        e.length = n
                    }(a, n),
                    a)
                } catch (e) {
                    c.Util.log("html2canvas.Util.Children failed with exception: " + e.message),
                    t = []
                }
                return t
            }
            ,
            c.Util.isTransparent = function(e) {
                return "transparent" === e || "rgba(0, 0, 0, 0)" === e
            }
            ,
            c.Util.Font = (o = {},
            function(e, t, n) {
                if (o[e + "-" + t] !== r)
                    return o[e + "-" + t];
                var a, i, s = n.createElement("div"), c = n.createElement("img"), l = n.createElement("span");
                return s.style.visibility = "hidden",
                s.style.fontFamily = e,
                s.style.fontSize = t,
                s.style.margin = 0,
                s.style.padding = 0,
                n.body.appendChild(s),
                c.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=",
                c.width = 1,
                c.height = 1,
                c.style.margin = 0,
                c.style.padding = 0,
                c.style.verticalAlign = "baseline",
                l.style.fontFamily = e,
                l.style.fontSize = t,
                l.style.margin = 0,
                l.style.padding = 0,
                l.appendChild(n.createTextNode("Hidden Text")),
                s.appendChild(l),
                s.appendChild(c),
                a = c.offsetTop - l.offsetTop + 1,
                s.removeChild(l),
                s.appendChild(n.createTextNode("Hidden Text")),
                s.style.lineHeight = "normal",
                c.style.verticalAlign = "super",
                i = {
                    baseline: a,
                    lineWidth: 1,
                    middle: c.offsetTop - s.offsetTop + 1
                },
                o[e + "-" + t] = i,
                n.body.removeChild(s),
                i
            }
            ),
            function() {
                var e = c.Util
                  , r = {};
                c.Generate = r;
                var n = [/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/, /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];
                function a(t) {
                    return function(r) {
                        try {
                            t.addColorStop(r.stop, r.color)
                        } catch (t) {
                            e.log(["failed to add color stop: ", t, "; tried to add: ", r])
                        }
                    }
                }
                r.parseGradient = function(e, t) {
                    var r, a, i, s, o, c, l, u, d, m, g, p, f = n.length;
                    for (a = 0; a < f && !(i = e.match(n[a])); a += 1)
                        ;
                    if (i)
                        switch (i[1]) {
                        case "-webkit-linear-gradient":
                        case "-o-linear-gradient":
                            if (r = {
                                type: "linear",
                                x0: null,
                                y0: null,
                                x1: null,
                                y1: null,
                                colorStops: []
                            },
                            o = i[2].match(/\w+/g))
                                for (c = o.length,
                                a = 0; a < c; a += 1)
                                    switch (o[a]) {
                                    case "top":
                                        r.y0 = 0,
                                        r.y1 = t.height;
                                        break;
                                    case "right":
                                        r.x0 = t.width,
                                        r.x1 = 0;
                                        break;
                                    case "bottom":
                                        r.y0 = t.height,
                                        r.y1 = 0;
                                        break;
                                    case "left":
                                        r.x0 = 0,
                                        r.x1 = t.width
                                    }
                            if (null === r.x0 && null === r.x1 && (r.x0 = r.x1 = t.width / 2),
                            null === r.y0 && null === r.y1 && (r.y0 = r.y1 = t.height / 2),
                            o = i[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g))
                                for (c = o.length,
                                l = 1 / Math.max(c - 1, 1),
                                a = 0; a < c; a += 1)
                                    (u = o[a].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/))[2] ? (s = parseFloat(u[2]),
                                    "%" === u[3] ? s /= 100 : s /= t.width) : s = a * l,
                                    r.colorStops.push({
                                        color: u[1],
                                        stop: s
                                    });
                            break;
                        case "-webkit-gradient":
                            if (r = {
                                type: "radial" === i[2] ? "circle" : i[2],
                                x0: 0,
                                y0: 0,
                                x1: 0,
                                y1: 0,
                                colorStops: []
                            },
                            (o = i[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/)) && (r.x0 = o[1] * t.width / 100,
                            r.y0 = o[2] * t.height / 100,
                            r.x1 = o[3] * t.width / 100,
                            r.y1 = o[4] * t.height / 100),
                            o = i[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g))
                                for (c = o.length,
                                a = 0; a < c; a += 1)
                                    u = o[a].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/),
                                    s = parseFloat(u[2]),
                                    "from" === u[1] && (s = 0),
                                    "to" === u[1] && (s = 1),
                                    r.colorStops.push({
                                        color: u[3],
                                        stop: s
                                    });
                            break;
                        case "-moz-linear-gradient":
                            if (r = {
                                type: "linear",
                                x0: 0,
                                y0: 0,
                                x1: 0,
                                y1: 0,
                                colorStops: []
                            },
                            (o = i[2].match(/(\d{1,3})%?\s(\d{1,3})%?/)) && (r.x0 = o[1] * t.width / 100,
                            r.y0 = o[2] * t.height / 100,
                            r.x1 = t.width - r.x0,
                            r.y1 = t.height - r.y0),
                            o = i[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g))
                                for (c = o.length,
                                l = 1 / Math.max(c - 1, 1),
                                a = 0; a < c; a += 1)
                                    (u = o[a].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/))[2] ? (s = parseFloat(u[2]),
                                    u[3] && (s /= 100)) : s = a * l,
                                    r.colorStops.push({
                                        color: u[1],
                                        stop: s
                                    });
                            break;
                        case "-webkit-radial-gradient":
                        case "-moz-radial-gradient":
                        case "-o-radial-gradient":
                            if (r = {
                                type: "circle",
                                x0: 0,
                                y0: 0,
                                x1: t.width,
                                y1: t.height,
                                cx: 0,
                                cy: 0,
                                rx: 0,
                                ry: 0,
                                colorStops: []
                            },
                            (o = i[2].match(/(\d{1,3})%?\s(\d{1,3})%?/)) && (r.cx = o[1] * t.width / 100,
                            r.cy = o[2] * t.height / 100),
                            o = i[3].match(/\w+/),
                            u = i[4].match(/[a-z\-]*/),
                            o && u)
                                switch (u[0]) {
                                case "farthest-corner":
                                case "cover":
                                case "":
                                    d = Math.sqrt(Math.pow(r.cx, 2) + Math.pow(r.cy, 2)),
                                    m = Math.sqrt(Math.pow(r.cx, 2) + Math.pow(r.y1 - r.cy, 2)),
                                    g = Math.sqrt(Math.pow(r.x1 - r.cx, 2) + Math.pow(r.y1 - r.cy, 2)),
                                    p = Math.sqrt(Math.pow(r.x1 - r.cx, 2) + Math.pow(r.cy, 2)),
                                    r.rx = r.ry = Math.max(d, m, g, p);
                                    break;
                                case "closest-corner":
                                    d = Math.sqrt(Math.pow(r.cx, 2) + Math.pow(r.cy, 2)),
                                    m = Math.sqrt(Math.pow(r.cx, 2) + Math.pow(r.y1 - r.cy, 2)),
                                    g = Math.sqrt(Math.pow(r.x1 - r.cx, 2) + Math.pow(r.y1 - r.cy, 2)),
                                    p = Math.sqrt(Math.pow(r.x1 - r.cx, 2) + Math.pow(r.cy, 2)),
                                    r.rx = r.ry = Math.min(d, m, g, p);
                                    break;
                                case "farthest-side":
                                    "circle" === o[0] ? r.rx = r.ry = Math.max(r.cx, r.cy, r.x1 - r.cx, r.y1 - r.cy) : (r.type = o[0],
                                    r.rx = Math.max(r.cx, r.x1 - r.cx),
                                    r.ry = Math.max(r.cy, r.y1 - r.cy));
                                    break;
                                case "closest-side":
                                case "contain":
                                    "circle" === o[0] ? r.rx = r.ry = Math.min(r.cx, r.cy, r.x1 - r.cx, r.y1 - r.cy) : (r.type = o[0],
                                    r.rx = Math.min(r.cx, r.x1 - r.cx),
                                    r.ry = Math.min(r.cy, r.y1 - r.cy))
                                }
                            if (o = i[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g))
                                for (c = o.length,
                                l = 1 / Math.max(c - 1, 1),
                                a = 0; a < c; a += 1)
                                    (u = o[a].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/))[2] ? (s = parseFloat(u[2]),
                                    "%" === u[3] ? s /= 100 : s /= t.width) : s = a * l,
                                    r.colorStops.push({
                                        color: u[1],
                                        stop: s
                                    })
                        }
                    return r
                }
                ,
                r.Gradient = function(e, r) {
                    if (0 !== r.width && 0 !== r.height) {
                        var n, i, s = t.createElement("canvas"), o = s.getContext("2d");
                        if (s.width = r.width,
                        s.height = r.height,
                        n = c.Generate.parseGradient(e, r))
                            switch (n.type) {
                            case "linear":
                                i = o.createLinearGradient(n.x0, n.y0, n.x1, n.y1),
                                n.colorStops.forEach(a(i)),
                                o.fillStyle = i,
                                o.fillRect(0, 0, r.width, r.height);
                                break;
                            case "circle":
                                i = o.createRadialGradient(n.cx, n.cy, 0, n.cx, n.cy, n.rx),
                                n.colorStops.forEach(a(i)),
                                o.fillStyle = i,
                                o.fillRect(0, 0, r.width, r.height);
                                break;
                            case "ellipse":
                                var l = t.createElement("canvas")
                                  , u = l.getContext("2d")
                                  , d = Math.max(n.rx, n.ry)
                                  , m = 2 * d;
                                l.width = l.height = m,
                                i = u.createRadialGradient(n.rx, n.ry, 0, n.rx, n.ry, d),
                                n.colorStops.forEach(a(i)),
                                u.fillStyle = i,
                                u.fillRect(0, 0, m, m),
                                o.fillStyle = n.colorStops[n.colorStops.length - 1].color,
                                o.fillRect(0, 0, s.width, s.height),
                                o.drawImage(l, n.cx - n.rx, n.cy - n.ry, 2 * n.rx, 2 * n.ry)
                            }
                        return s
                    }
                }
                ,
                r.ListAlpha = function(e) {
                    var t, r = "";
                    do {
                        t = e % 26,
                        r = String.fromCharCode(t + 64) + r,
                        e /= 26
                    } while (26 * e > 26);return r
                }
                ,
                r.ListRoman = function(e) {
                    var t, r = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"], n = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], a = "", i = r.length;
                    if (e <= 0 || e >= 4e3)
                        return e;
                    for (t = 0; t < i; t += 1)
                        for (; e >= n[t]; )
                            e -= n[t],
                            a += r[t];
                    return a
                }
            }(),
            c.Parse = function(n, a) {
                e.scroll(0, 0);
                var i = a.elements === r ? t.body : a.elements[0]
                  , s = i.ownerDocument
                  , o = c.Util
                  , l = o.Support(a, s)
                  , u = new RegExp("(" + a.ignoreElements + ")")
                  , d = s.body
                  , m = o.getCSS
                  , g = "___html2canvas___pseudoelement"
                  , p = s.createElement("style");
                function f(e, t) {
                    var r = parseInt(m(e, t), 10);
                    return isNaN(r) ? 0 : r
                }
                function h(e, t, r, n, a, i) {
                    "transparent" !== i && (e.setVariable("fillStyle", i),
                    e.fillRect(t, r, n, a),
                    1)
                }
                function v(e, t, r) {
                    if (e.length > 0)
                        return t + r.toUpperCase()
                }
                function E(e, t, r, n) {
                    null !== e && o.trimText(e).length > 0 && (n.fillText(e, t, r),
                    1)
                }
                function y(e, t, r, n) {
                    var a = m(t, "fontWeight")
                      , i = m(t, "fontFamily")
                      , c = m(t, "fontSize")
                      , l = o.parseTextShadows(m(t, "textShadow"));
                    switch (parseInt(a, 10)) {
                    case 401:
                        a = "bold";
                        break;
                    case 400:
                        a = "normal"
                    }
                    if (e.setVariable("fillStyle", n),
                    e.setVariable("font", [m(t, "fontStyle"), m(t, "fontVariant"), a, c, i].join(" ")),
                    e.setVariable("textAlign", "left"),
                    l.length && (e.setVariable("shadowColor", l[0].color),
                    e.setVariable("shadowOffsetX", l[0].offsetX),
                    e.setVariable("shadowOffsetY", l[0].offsetY),
                    e.setVariable("shadowBlur", l[0].blur)),
                    "none" !== r)
                        return o.Font(i, c, s)
                }
                function A(e, t, r, n, a) {
                    var i;
                    if (l.rangeBounds && !a)
                        "none" === r && 0 === o.trimText(t).length || (i = function(e, t, r) {
                            var n = s.createRange();
                            return n.setStart(t, r),
                            n.setEnd(t, r + e.length),
                            n.getBoundingClientRect()
                        }(t, e.node, e.textOffset)),
                        e.textOffset += t.length;
                    else if (e.node && "string" == typeof e.node.nodeValue) {
                        var c = n ? e.node.splitText(t.length) : null;
                        i = function(e, t) {
                            var r = e.parentNode
                              , n = s.createElement("wrapper")
                              , a = e.cloneNode(!0);
                            n.appendChild(e.cloneNode(!0)),
                            r.replaceChild(n, e);
                            var i = t ? o.OffsetBounds(n) : o.Bounds(n);
                            return r.replaceChild(a, n),
                            i
                        }(e.node, a),
                        e.node = c
                    }
                    return i
                }
                function b(e, t, r) {
                    var n, i, s, c = r.ctx, l = m(e, "color"), u = m(e, "textDecoration"), d = m(e, "textAlign"), g = {
                        node: t,
                        textOffset: 0
                    };
                    o.trimText(t.nodeValue).length > 0 && (t.nodeValue = function(e, t) {
                        switch (t) {
                        case "lowercase":
                            return e.toLowerCase();
                        case "capitalize":
                            return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, v);
                        case "uppercase":
                            return e.toUpperCase();
                        default:
                            return e
                        }
                    }(t.nodeValue, m(e, "textTransform")),
                    d = d.replace(["-webkit-auto"], ["auto"]),
                    i = !a.letterRendering && /^(left|right|justify|auto)$/.test(d) && (s = m(e, "letterSpacing"),
                    /^(normal|none|0px)$/.test(s)) ? t.nodeValue.split(/(\b| )/) : t.nodeValue.split(""),
                    n = y(c, e, u, l),
                    a.chinese && i.forEach(function(e, t) {
                        /.*[\u4E00-\u9FA5].*$/.test(e) && ((e = e.split("")).unshift(t, 1),
                        i.splice.apply(i, e))
                    }),
                    i.forEach(function(e, t) {
                        var a = A(g, e, u, t < i.length - 1, r.transform.matrix);
                        a && (E(e, a.left, a.bottom, c),
                        function(e, t, r, n, a) {
                            switch (t) {
                            case "underline":
                                h(e, r.left, Math.round(r.top + n.baseline + n.lineWidth), r.width, 1, a);
                                break;
                            case "overline":
                                h(e, r.left, Math.round(r.top), r.width, 1, a);
                                break;
                            case "line-through":
                                h(e, r.left, Math.ceil(r.top + n.middle + n.lineWidth), r.width, 1, a)
                            }
                        }(c, u, a, n, l))
                    }))
                }
                function _(e, t, r) {
                    var n, a, i = t.ctx, l = m(e, "listStyleType");
                    if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(l)) {
                        if (a = function(e, t) {
                            var r, n, a = s.createElement("boundelement");
                            return a.style.display = "inline",
                            r = e.style.listStyleType,
                            e.style.listStyleType = "none",
                            a.appendChild(s.createTextNode(t)),
                            e.insertBefore(a, e.firstChild),
                            n = o.Bounds(a),
                            e.removeChild(a),
                            e.style.listStyleType = r,
                            n
                        }(e, n = function(e, t) {
                            var r, n = function(e) {
                                var t = -1
                                  , r = 1
                                  , n = e.parentNode.childNodes;
                                if (e.parentNode) {
                                    for (; n[++t] !== e; )
                                        1 === n[t].nodeType && r++;
                                    return r
                                }
                                return -1
                            }(e);
                            switch (t) {
                            case "decimal":
                                r = n;
                                break;
                            case "decimal-leading-zero":
                                r = 1 === n.toString().length ? n = "0" + n.toString() : n.toString();
                                break;
                            case "upper-roman":
                                r = c.Generate.ListRoman(n);
                                break;
                            case "lower-roman":
                                r = c.Generate.ListRoman(n).toLowerCase();
                                break;
                            case "lower-alpha":
                                r = c.Generate.ListAlpha(n).toLowerCase();
                                break;
                            case "upper-alpha":
                                r = c.Generate.ListAlpha(n)
                            }
                            return r + ". "
                        }(e, l)),
                        y(i, e, "none", m(e, "color")),
                        "inside" !== m(e, "listStylePosition"))
                            return;
                        i.setVariable("textAlign", "left"),
                        E(n, r.left, a.bottom, i)
                    }
                }
                function O(e) {
                    var t = n[e];
                    return !(!t || !0 !== t.succeeded) && t.img
                }
                function T(e, t) {
                    var r = Math.max(e.left, t.left)
                      , n = Math.max(e.top, t.top);
                    return {
                        left: r,
                        top: n,
                        width: Math.min(e.left + e.width, t.left + t.width) - r,
                        height: Math.min(e.top + e.height, t.top + t.height) - n
                    }
                }
                function I(e, t, r, n, a) {
                    var i = f(t, "paddingLeft")
                      , s = f(t, "paddingTop")
                      , o = f(t, "paddingRight")
                      , c = f(t, "paddingBottom");
                    P(e, r, 0, 0, r.width, r.height, n.left + i + a[3].width, n.top + s + a[0].width, n.width - (a[1].width + a[3].width + i + o), n.height - (a[0].width + a[2].width + s + c))
                }
                function C(e) {
                    return ["Top", "Right", "Bottom", "Left"].map(function(t) {
                        return {
                            width: f(e, "border" + t + "Width"),
                            color: m(e, "border" + t + "Color")
                        }
                    })
                }
                p.innerHTML = "." + g + '-before:before { content: "" !important; display: none !important; }.' + g + '-after:after { content: "" !important; display: none !important; }',
                d.appendChild(p),
                n = n || {};
                var R, N = (R = (Math.sqrt(2) - 1) / 3 * 4,
                function(e, t, r, n) {
                    var a = r * R
                      , i = n * R
                      , s = e + r
                      , o = t + n;
                    return {
                        topLeft: S({
                            x: e,
                            y: o
                        }, {
                            x: e,
                            y: o - i
                        }, {
                            x: s - a,
                            y: t
                        }, {
                            x: s,
                            y: t
                        }),
                        topRight: S({
                            x: e,
                            y: t
                        }, {
                            x: e + a,
                            y: t
                        }, {
                            x: s,
                            y: o - i
                        }, {
                            x: s,
                            y: o
                        }),
                        bottomRight: S({
                            x: s,
                            y: t
                        }, {
                            x: s,
                            y: t + i
                        }, {
                            x: e + a,
                            y: o
                        }, {
                            x: e,
                            y: o
                        }),
                        bottomLeft: S({
                            x: s,
                            y: o
                        }, {
                            x: s - a,
                            y: o
                        }, {
                            x: e,
                            y: t + i
                        }, {
                            x: e,
                            y: t
                        })
                    }
                }
                );
                function S(e, t, r, n) {
                    var a = function(e, t, r) {
                        return {
                            x: e.x + (t.x - e.x) * r,
                            y: e.y + (t.y - e.y) * r
                        }
                    };
                    return {
                        start: e,
                        startControl: t,
                        endControl: r,
                        end: n,
                        subdivide: function(i) {
                            var s = a(e, t, i)
                              , o = a(t, r, i)
                              , c = a(r, n, i)
                              , l = a(s, o, i)
                              , u = a(o, c, i)
                              , d = a(l, u, i);
                            return [S(e, s, l, d), S(d, u, c, n)]
                        },
                        curveTo: function(e) {
                            e.push(["bezierCurve", t.x, t.y, r.x, r.y, n.x, n.y])
                        },
                        curveToReversed: function(n) {
                            n.push(["bezierCurve", r.x, r.y, t.x, t.y, e.x, e.y])
                        }
                    }
                }
                function w(e, t, r, n, a, i, s) {
                    t[0] > 0 || t[1] > 0 ? (e.push(["line", n[0].start.x, n[0].start.y]),
                    n[0].curveTo(e),
                    n[1].curveTo(e)) : e.push(["line", i, s]),
                    (r[0] > 0 || r[1] > 0) && e.push(["line", a[0].start.x, a[0].start.y])
                }
                function D(e, t, r, n, a, i, s) {
                    var o = [];
                    return t[0] > 0 || t[1] > 0 ? (o.push(["line", n[1].start.x, n[1].start.y]),
                    n[1].curveTo(o)) : o.push(["line", e.c1[0], e.c1[1]]),
                    r[0] > 0 || r[1] > 0 ? (o.push(["line", i[0].start.x, i[0].start.y]),
                    i[0].curveTo(o),
                    o.push(["line", s[0].end.x, s[0].end.y]),
                    s[0].curveToReversed(o)) : (o.push(["line", e.c2[0], e.c2[1]]),
                    o.push(["line", e.c3[0], e.c3[1]])),
                    t[0] > 0 || t[1] > 0 ? (o.push(["line", a[1].end.x, a[1].end.y]),
                    a[1].curveToReversed(o)) : o.push(["line", e.c4[0], e.c4[1]]),
                    o
                }
                function M(e, t, r, n, a) {
                    var i = [];
                    switch (m(e, "backgroundClip")) {
                    case "content-box":
                    case "padding-box":
                        w(i, n[0], n[1], t.topLeftInner, t.topRightInner, a.left + r[3].width, a.top + r[0].width),
                        w(i, n[1], n[2], t.topRightInner, t.bottomRightInner, a.left + a.width - r[1].width, a.top + r[0].width),
                        w(i, n[2], n[3], t.bottomRightInner, t.bottomLeftInner, a.left + a.width - r[1].width, a.top + a.height - r[2].width),
                        w(i, n[3], n[0], t.bottomLeftInner, t.topLeftInner, a.left + r[3].width, a.top + a.height - r[2].width);
                        break;
                    default:
                        w(i, n[0], n[1], t.topLeftOuter, t.topRightOuter, a.left, a.top),
                        w(i, n[1], n[2], t.topRightOuter, t.bottomRightOuter, a.left + a.width, a.top),
                        w(i, n[2], n[3], t.bottomRightOuter, t.bottomLeftOuter, a.left + a.width, a.top + a.height),
                        w(i, n[3], n[0], t.bottomLeftOuter, t.topLeftOuter, a.left, a.top + a.height)
                    }
                    return i
                }
                function k(e, t, r) {
                    var n, a, i, s, o, c, l = t.left, u = t.top, d = t.width, g = t.height, p = function(e) {
                        return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(t) {
                            return m(e, "border" + t + "Radius")
                        })
                    }(e), f = function(e, t, r) {
                        var n = e.left
                          , a = e.top
                          , i = e.width
                          , s = e.height
                          , o = t[0][0]
                          , c = t[0][1]
                          , l = t[1][0]
                          , u = t[1][1]
                          , d = t[2][0]
                          , m = t[2][1]
                          , g = t[3][0]
                          , p = t[3][1]
                          , f = i - l
                          , h = s - m
                          , v = i - d
                          , E = s - p;
                        return {
                            topLeftOuter: N(n, a, o, c).topLeft.subdivide(.5),
                            topLeftInner: N(n + r[3].width, a + r[0].width, Math.max(0, o - r[3].width), Math.max(0, c - r[0].width)).topLeft.subdivide(.5),
                            topRightOuter: N(n + f, a, l, u).topRight.subdivide(.5),
                            topRightInner: N(n + Math.min(f, i + r[3].width), a + r[0].width, f > i + r[3].width ? 0 : l - r[3].width, u - r[0].width).topRight.subdivide(.5),
                            bottomRightOuter: N(n + v, a + h, d, m).bottomRight.subdivide(.5),
                            bottomRightInner: N(n + Math.min(v, i + r[3].width), a + Math.min(h, s + r[0].width), Math.max(0, d - r[1].width), Math.max(0, m - r[2].width)).bottomRight.subdivide(.5),
                            bottomLeftOuter: N(n, a + E, g, p).bottomLeft.subdivide(.5),
                            bottomLeftInner: N(n + r[3].width, a + E, Math.max(0, g - r[3].width), Math.max(0, p - r[2].width)).bottomLeft.subdivide(.5)
                        }
                    }(t, p, r), h = {
                        clip: M(e, f, r, p, t),
                        borders: []
                    };
                    for (n = 0; n < 4; n++)
                        if (r[n].width > 0) {
                            switch (a = l,
                            i = u,
                            s = d,
                            o = g - r[2].width,
                            n) {
                            case 0:
                                o = r[0].width,
                                c = D({
                                    c1: [a, i],
                                    c2: [a + s, i],
                                    c3: [a + s - r[1].width, i + o],
                                    c4: [a + r[3].width, i + o]
                                }, p[0], p[1], f.topLeftOuter, f.topLeftInner, f.topRightOuter, f.topRightInner);
                                break;
                            case 1:
                                c = D({
                                    c1: [(a = l + d - r[1].width) + (s = r[1].width), i],
                                    c2: [a + s, i + o + r[2].width],
                                    c3: [a, i + o],
                                    c4: [a, i + r[0].width]
                                }, p[1], p[2], f.topRightOuter, f.topRightInner, f.bottomRightOuter, f.bottomRightInner);
                                break;
                            case 2:
                                c = D({
                                    c1: [a + s, (i = i + g - r[2].width) + (o = r[2].width)],
                                    c2: [a, i + o],
                                    c3: [a + r[3].width, i],
                                    c4: [a + s - r[3].width, i]
                                }, p[2], p[3], f.bottomRightOuter, f.bottomRightInner, f.bottomLeftOuter, f.bottomLeftInner);
                                break;
                            case 3:
                                s = r[3].width,
                                c = D({
                                    c1: [a, i + o + r[2].width],
                                    c2: [a, i],
                                    c3: [a + s, i + r[0].width],
                                    c4: [a + s, i + o]
                                }, p[3], p[0], f.bottomLeftOuter, f.bottomLeftInner, f.topLeftOuter, f.topLeftInner)
                            }
                            h.borders.push({
                                args: c,
                                color: r[n].color
                            })
                        }
                    return h
                }
                function L(e, t) {
                    var r = e.drawShape();
                    return t.forEach(function(e, t) {
                        r[0 === t ? "moveTo" : e[0] + "To"].apply(null, e.slice(1))
                    }),
                    r
                }
                function j(e, t, r) {
                    var n, a, i = s.createElement("valuewrap");
                    ["lineHeight", "textAlign", "fontFamily", "color", "fontSize", "paddingLeft", "paddingTop", "width", "height", "border", "borderLeftWidth", "borderTopWidth"].forEach(function(t) {
                        try {
                            i.style[t] = m(e, t)
                        } catch (e) {
                            o.log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message)
                        }
                    }),
                    i.style.borderColor = "black",
                    i.style.borderStyle = "solid",
                    i.style.display = "block",
                    i.style.position = "absolute",
                    (/^(submit|reset|button|text|password)$/.test(e.type) || "SELECT" === e.nodeName) && (i.style.lineHeight = m(e, "height")),
                    i.style.top = t.top + "px",
                    i.style.left = t.left + "px",
                    (n = "SELECT" === e.nodeName ? (e.options[e.selectedIndex] || 0).text : e.value) || (n = e.placeholder),
                    a = s.createTextNode(n),
                    i.appendChild(a),
                    d.appendChild(i),
                    b(e, a, r),
                    d.removeChild(i)
                }
                function P(e) {
                    e.drawImage.apply(e, Array.prototype.slice.call(arguments, 1)),
                    1
                }
                function x(r, n) {
                    var a = e.getComputedStyle(r, n);
                    if (a && a.content && "none" !== a.content && "-moz-alt-content" !== a.content && "none" !== a.display) {
                        var i = a.content + ""
                          , s = i.substr(0, 1);
                        s === i.substr(i.length - 1) && s.match(/'|"/) && (i = i.substr(1, i.length - 2));
                        var c = "url" === i.substr(0, 3)
                          , l = t.createElement(c ? "img" : "span");
                        return l.className = g + "-before " + g + "-after",
                        Object.keys(a).filter(U).forEach(function(e) {
                            try {
                                l.style[e] = a[e]
                            } catch (t) {
                                o.log(["Tried to assign readonly property ", e, "Error:", t])
                            }
                        }),
                        c ? l.src = o.parseBackgroundImage(i)[0].args[0] : l.innerHTML = i,
                        l
                    }
                }
                function U(t) {
                    return isNaN(e.parseInt(t, 10))
                }
                function F(e, t, r, n) {
                    var a = Math.round(n.left + r.left)
                      , i = Math.round(n.top + r.top);
                    e.createPattern(t),
                    e.translate(a, i),
                    e.fill(),
                    e.translate(-a, -i)
                }
                function B(e, t, r, n, a, i, s, o) {
                    var c = [];
                    c.push(["line", Math.round(a), Math.round(i)]),
                    c.push(["line", Math.round(a + s), Math.round(i)]),
                    c.push(["line", Math.round(a + s), Math.round(o + i)]),
                    c.push(["line", Math.round(a), Math.round(o + i)]),
                    L(e, c),
                    e.save(),
                    e.clip(),
                    F(e, t, r, n),
                    e.restore()
                }
                function z(e, t, r, n, a) {
                    var i = o.BackgroundSize(e, t, n, a)
                      , c = o.BackgroundPosition(e, t, n, a, i)
                      , l = m(e, "backgroundRepeat").split(",").map(o.trimText);
                    switch (n = function(e, t) {
                        if (e.width === t.width && e.height === t.height)
                            return e;
                        var r = s.createElement("canvas");
                        return r.width = t.width,
                        r.height = t.height,
                        P(r.getContext("2d"), e, 0, 0, e.width, e.height, 0, 0, t.width, t.height),
                        r
                    }(n, i),
                    l = l[a] || l[0]) {
                    case "repeat-x":
                        B(r, n, c, t, t.left, t.top + c.top, 99999, n.height);
                        break;
                    case "repeat-y":
                        B(r, n, c, t, t.left + c.left, t.top, n.width, 99999);
                        break;
                    case "no-repeat":
                        B(r, n, c, t, t.left + c.left, t.top + c.top, n.width, n.height);
                        break;
                    default:
                        F(r, n, c, {
                            top: t.top,
                            left: t.left,
                            width: n.width,
                            height: n.height
                        })
                    }
                }
                function G(e, t, r) {
                    return e.setVariable("globalAlpha", m(t, "opacity") * (r ? r.opacity : 1))
                }
                function Y(e) {
                    return e.replace("px", "")
                }
                var H, q, Q, V = /(matrix)\((.+)\)/;
                function J(e, t, r, n) {
                    var i, c, l, u = (i = t ? r.width : Math.max(Math.max(s.body.scrollWidth, s.documentElement.scrollWidth), Math.max(s.body.offsetWidth, s.documentElement.offsetWidth), Math.max(s.body.clientWidth, s.documentElement.clientWidth)),
                    c = t ? r.height : Math.max(Math.max(s.body.scrollHeight, s.documentElement.scrollHeight), Math.max(s.body.offsetHeight, s.documentElement.offsetHeight), Math.max(s.body.clientHeight, s.documentElement.clientHeight)),
                    {
                        storage: l = [],
                        width: i,
                        height: c,
                        clip: function() {
                            l.push({
                                type: "function",
                                name: "clip",
                                arguments: arguments
                            })
                        },
                        translate: function() {
                            l.push({
                                type: "function",
                                name: "translate",
                                arguments: arguments
                            })
                        },
                        fill: function() {
                            l.push({
                                type: "function",
                                name: "fill",
                                arguments: arguments
                            })
                        },
                        save: function() {
                            l.push({
                                type: "function",
                                name: "save",
                                arguments: arguments
                            })
                        },
                        restore: function() {
                            l.push({
                                type: "function",
                                name: "restore",
                                arguments: arguments
                            })
                        },
                        fillRect: function() {
                            l.push({
                                type: "function",
                                name: "fillRect",
                                arguments: arguments
                            })
                        },
                        createPattern: function() {
                            l.push({
                                type: "function",
                                name: "createPattern",
                                arguments: arguments
                            })
                        },
                        drawShape: function() {
                            var e = [];
                            return l.push({
                                type: "function",
                                name: "drawShape",
                                arguments: e
                            }),
                            {
                                moveTo: function() {
                                    e.push({
                                        name: "moveTo",
                                        arguments: arguments
                                    })
                                },
                                lineTo: function() {
                                    e.push({
                                        name: "lineTo",
                                        arguments: arguments
                                    })
                                },
                                arcTo: function() {
                                    e.push({
                                        name: "arcTo",
                                        arguments: arguments
                                    })
                                },
                                bezierCurveTo: function() {
                                    e.push({
                                        name: "bezierCurveTo",
                                        arguments: arguments
                                    })
                                },
                                quadraticCurveTo: function() {
                                    e.push({
                                        name: "quadraticCurveTo",
                                        arguments: arguments
                                    })
                                }
                            }
                        },
                        drawImage: function() {
                            l.push({
                                type: "function",
                                name: "drawImage",
                                arguments: arguments
                            })
                        },
                        fillText: function() {
                            l.push({
                                type: "function",
                                name: "fillText",
                                arguments: arguments
                            })
                        },
                        setVariable: function(e, t) {
                            return l.push({
                                type: "variable",
                                name: e,
                                arguments: t
                            }),
                            t
                        }
                    }), d = {
                        ctx: u,
                        opacity: G(u, e, t),
                        cssPosition: m(e, "position"),
                        borders: C(e),
                        transform: n,
                        clip: t && t.clip ? o.Extend({}, t.clip) : null
                    };
                    return function(e, t, r) {
                        var n, a = "static" !== t.cssPosition, i = a ? m(e, "zIndex") : "auto", s = m(e, "opacity"), o = "none" !== m(e, "cssFloat");
                        t.zIndex = n = {
                            zindex: i,
                            children: []
                        },
                        n.isPositioned = a,
                        n.isFloated = o,
                        n.opacity = s,
                        n.ownStacking = "auto" !== i || s < 1,
                        r && r.zIndex.children.push(t)
                    }(e, d, t),
                    !0 === a.useOverflow && !0 === /(hidden|scroll|auto)/.test(m(e, "overflow")) && !1 === /(BODY)/i.test(e.nodeName) && (d.clip = d.clip ? T(d.clip, r) : r),
                    d
                }
                function W(e, t, r, n) {
                    var a, i = function(e, t) {
                        var r, n = m(e, "transform") || m(e, "-webkit-transform") || m(e, "-moz-transform") || m(e, "-ms-transform") || m(e, "-o-transform"), a = m(e, "transform-origin") || m(e, "-webkit-transform-origin") || m(e, "-moz-transform-origin") || m(e, "-ms-transform-origin") || m(e, "-o-transform-origin") || "0px 0px";
                        if (a = a.split(" ").map(Y).map(o.asFloat),
                        n && "none" !== n) {
                            var i = n.match(V);
                            if (i)
                                switch (i[1]) {
                                case "matrix":
                                    r = i[2].split(",").map(o.trimText).map(o.asFloat)
                                }
                        }
                        return {
                            origin: a,
                            matrix: r
                        }
                    }(e), s = function(e, t) {
                        var r = t.matrix ? o.OffsetBounds(e) : o.Bounds(e);
                        return t.origin[0] += r.left,
                        t.origin[1] += r.top,
                        r
                    }(e, i), c = J(e, t, s, i), l = c.borders, d = c.ctx, p = function(e, t, r) {
                        var n = {
                            left: t.left + e[3].width,
                            top: t.top + e[0].width,
                            width: t.width - (e[1].width + e[3].width),
                            height: t.height - (e[0].width + e[2].width)
                        };
                        return r && (n = T(n, r)),
                        n
                    }(l, s, c.clip), f = k(e, s, l), v = u.test(e.nodeName) ? "#efefef" : m(e, "backgroundColor");
                    switch (L(d, f.clip),
                    d.save(),
                    d.clip(),
                    p.height > 0 && p.width > 0 && !n ? (function(e, t, r) {
                        h(e, t.left, t.top, t.width, t.height, r)
                    }(d, s, v),
                    function(e, t, r) {
                        for (var n, a = m(e, "backgroundImage"), i = o.parseBackgroundImage(a), s = i.length; s--; )
                            (a = i[s]).args && 0 !== a.args.length && ((n = O("url" === a.method ? a.args[0] : a.value)) ? z(e, t, r, n, s) : o.log("html2canvas: Error loading background:", a))
                    }(e, p, d)) : n && (c.backgroundColor = v),
                    d.restore(),
                    f.borders.forEach(function(e) {
                        !function(e, t, r) {
                            "transparent" !== r && (e.setVariable("fillStyle", r),
                            L(e, t),
                            e.fill(),
                            1)
                        }(d, e.args, e.color)
                    }),
                    r || function(e, t) {
                        var r = x(e, ":before")
                          , n = x(e, ":after");
                        (r || n) && (r && (e.className += " " + g + "-before",
                        e.parentNode.insertBefore(r, e),
                        K(r, t, !0),
                        e.parentNode.removeChild(r),
                        e.className = e.className.replace(g + "-before", "").trim()),
                        n && (e.className += " " + g + "-after",
                        e.appendChild(n),
                        K(n, t, !0),
                        e.removeChild(n),
                        e.className = e.className.replace(g + "-after", "").trim()))
                    }(e, c),
                    e.nodeName) {
                    case "IMG":
                        (a = O(e.getAttribute("src"))) ? I(d, e, a, s, l) : o.log("html2canvas: Error loading <img>:" + e.getAttribute("src"));
                        break;
                    case "INPUT":
                        /^(text|url|email|submit|button|reset)$/.test(e.type) && (e.value || e.placeholder || "").length > 0 && j(e, s, c);
                        break;
                    case "TEXTAREA":
                        (e.value || e.placeholder || "").length > 0 && j(e, s, c);
                        break;
                    case "SELECT":
                        (e.options || e.placeholder || "").length > 0 && j(e, s, c);
                        break;
                    case "LI":
                        _(e, c, p);
                        break;
                    case "CANVAS":
                        I(d, e, e, s, l)
                    }
                    return c
                }
                function K(e, t, r) {
                    (function(e) {
                        return "none" !== m(e, "display") && "hidden" !== m(e, "visibility") && !e.hasAttribute("data-html2canvas-ignore")
                    }
                    )(e) && (t = W(e, t, r, !1) || t,
                    u.test(e.nodeName) || X(e, t, r))
                }
                function X(e, t, r) {
                    o.Children(e).forEach(function(n) {
                        n.nodeType === n.ELEMENT_NODE ? K(n, t, r) : n.nodeType === n.TEXT_NODE && b(e, n, t)
                    })
                }
                return H = m(t.documentElement, "backgroundColor"),
                q = o.isTransparent(H) && i === t.body,
                Q = W(i, null, !1, q),
                X(i, Q),
                q && (H = Q.backgroundColor),
                d.removeChild(p),
                {
                    backgroundColor: H,
                    stack: Q
                }
            }
            ,
            c.Preload = function(n) {
                var a, i, s, o, l = {
                    numLoaded: 0,
                    numFailed: 0,
                    numTotal: 0,
                    cleanupDone: !1
                }, u = c.Util, d = 0, m = n.elements[0] || t.body, g = m.ownerDocument, p = m.getElementsByTagName("img"), f = p.length, h = g.createElement("a"), v = (new Image).crossOrigin !== r;
                function E() {
                    u.log("html2canvas: start: images: " + l.numLoaded + " / " + l.numTotal + " (failed: " + l.numFailed + ")"),
                    !l.firstRun && l.numLoaded >= l.numTotal && (u.log("Finished loading images: # " + l.numTotal + " (failed: " + l.numFailed + ")"),
                    "function" == typeof n.complete && n.complete(l))
                }
                function y(t, a, i) {
                    var s, o, c = n.proxy;
                    h.href = t,
                    t = h.href,
                    s = "html2canvas_" + d++,
                    i.callbackname = s,
                    c.indexOf("?") > -1 ? c += "&" : c += "?",
                    c += "url=" + encodeURIComponent(t) + "&callback=" + s,
                    o = g.createElement("script"),
                    e[s] = function(t) {
                        "error:" === t.substring(0, 6) ? (i.succeeded = !1,
                        l.numLoaded++,
                        l.numFailed++,
                        E()) : (O(a, i),
                        a.src = t),
                        e[s] = r;
                        try {
                            delete e[s]
                        } catch (e) {}
                        o.parentNode.removeChild(o),
                        o = null,
                        delete i.script,
                        delete i.callbackname
                    }
                    ,
                    o.setAttribute("type", "text/javascript"),
                    o.setAttribute("src", c),
                    i.script = o,
                    e.document.body.appendChild(o)
                }
                function A(t, r) {
                    var n = e.getComputedStyle(t, r)
                      , a = n.content;
                    "url" === a.substr(0, 3) && i.loadImage(c.Util.parseBackgroundImage(a)[0].args[0]),
                    _(n.backgroundImage, t)
                }
                function b(e) {
                    return e && e.method && e.args && e.args.length > 0
                }
                function _(e, t) {
                    var n;
                    c.Util.parseBackgroundImage(e).filter(b).forEach(function(e) {
                        "url" === e.method ? i.loadImage(e.args[0]) : e.method.match(/\-?gradient$/) && (n === r && (n = c.Util.Bounds(t)),
                        function(e, t) {
                            var n = c.Generate.Gradient(e, t);
                            n !== r && (l[e] = {
                                img: n,
                                succeeded: !0
                            },
                            l.numTotal++,
                            l.numLoaded++,
                            E())
                        }(e.value, n))
                    })
                }
                function O(t, a) {
                    t.onload = function() {
                        a.timer !== r && e.clearTimeout(a.timer),
                        l.numLoaded++,
                        a.succeeded = !0,
                        t.onerror = t.onload = null,
                        E()
                    }
                    ,
                    t.onerror = function() {
                        if ("anonymous" === t.crossOrigin && (e.clearTimeout(a.timer),
                        n.proxy)) {
                            var r = t.src;
                            return t = new Image,
                            a.img = t,
                            t.src = r,
                            void y(t.src, t, a)
                        }
                        l.numLoaded++,
                        l.numFailed++,
                        a.succeeded = !1,
                        t.onerror = t.onload = null,
                        E()
                    }
                }
                for (h.href = e.location.href,
                a = h.protocol + h.host,
                i = {
                    loadImage: function(e) {
                        var t, i, s;
                        e && l[e] === r && (t = new Image,
                        e.match(/data:image\/.*;base64,/i) ? (t.src = e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""),
                        i = l[e] = {
                            img: t
                        },
                        l.numTotal++,
                        O(t, i)) : (s = e,
                        h.href = s,
                        h.href = h.href,
                        h.protocol + h.host === a || !0 === n.allowTaint ? (i = l[e] = {
                            img: t
                        },
                        l.numTotal++,
                        O(t, i),
                        t.src = e) : v && !n.allowTaint && n.useCORS ? (t.crossOrigin = "anonymous",
                        i = l[e] = {
                            img: t
                        },
                        l.numTotal++,
                        O(t, i),
                        t.src = e) : n.proxy && (i = l[e] = {
                            img: t
                        },
                        l.numTotal++,
                        y(e, t, i))))
                    },
                    cleanupDOM: function(a) {
                        var i, s;
                        if (!l.cleanupDone) {
                            for (s in a && "string" == typeof a ? u.log("html2canvas: Cleanup because: " + a) : u.log("html2canvas: Cleanup after timeout: " + n.timeout + " ms."),
                            l)
                                if (l.hasOwnProperty(s) && "object" == typeof (i = l[s]) && i.callbackname && i.succeeded === r) {
                                    e[i.callbackname] = r;
                                    try {
                                        delete e[i.callbackname]
                                    } catch (e) {}
                                    i.script && i.script.parentNode && (i.script.setAttribute("src", "about:blank"),
                                    i.script.parentNode.removeChild(i.script)),
                                    l.numLoaded++,
                                    l.numFailed++,
                                    u.log("html2canvas: Cleaned up failed img: '" + s + "' Steps: " + l.numLoaded + " / " + l.numTotal)
                                }
                            e.stop !== r ? e.stop() : t.execCommand !== r && t.execCommand("Stop", !1),
                            t.close !== r && t.close(),
                            l.cleanupDone = !0,
                            a && "string" == typeof a || E()
                        }
                    },
                    renderingDone: function() {
                        o && e.clearTimeout(o)
                    }
                },
                n.timeout > 0 && (o = e.setTimeout(i.cleanupDOM, n.timeout)),
                u.log("html2canvas: Preload starts: finding background-images"),
                l.firstRun = !0,
                function e(t) {
                    var n, a = !1;
                    try {
                        u.Children(t).forEach(e)
                    } catch (e) {}
                    try {
                        a = t.nodeType
                    } catch (e) {
                        a = !1,
                        u.log("html2canvas: failed to access some element's nodeType - Exception: " + e.message)
                    }
                    if (1 === a || a === r) {
                        A(n = t, ":before"),
                        A(n, ":after");
                        try {
                            _(u.getCSS(t, "backgroundImage"), t)
                        } catch (e) {
                            u.log("html2canvas: failed to get background-image - Exception: " + e.message)
                        }
                        _(t)
                    }
                }(m),
                u.log("html2canvas: Preload: Finding images"),
                s = 0; s < f; s += 1)
                    i.loadImage(p[s].getAttribute("src"));
                return l.firstRun = !1,
                u.log("html2canvas: Preload: Done."),
                l.numTotal === l.numLoaded && E(),
                i
            }
            ,
            c.Renderer = function(e, n) {
                return function(e) {
                    var t;
                    if ("string" == typeof n.renderer && c.Renderer[e] !== r)
                        t = c.Renderer[e](n);
                    else {
                        if ("function" != typeof e)
                            throw new Error("Unknown renderer");
                        t = e(n)
                    }
                    if ("function" != typeof t)
                        throw new Error("Invalid renderer defined");
                    return t
                }(n.renderer)(e, n, t, function(e) {
                    var t = [];
                    return function e(r) {
                        Object.keys(r).sort().forEach(function(n) {
                            var a = []
                              , i = []
                              , s = []
                              , o = [];
                            r[n].forEach(function(e) {
                                e.node.zIndex.isPositioned || e.node.zIndex.opacity < 1 ? s.push(e) : e.node.zIndex.isFloated ? i.push(e) : a.push(e)
                            }),
                            function e(t) {
                                t.forEach(function(t) {
                                    o.push(t),
                                    t.children && e(t.children)
                                })
                            }(a.concat(i, s)),
                            o.forEach(function(r) {
                                r.context ? e(r.context) : t.push(r.node)
                            })
                        })
                    }(function(e) {
                        var t = {};
                        return function e(t, n, a) {
                            var i = "auto" === n.zIndex.zindex ? 0 : Number(n.zIndex.zindex)
                              , s = t
                              , o = n.zIndex.isPositioned
                              , c = n.zIndex.isFloated
                              , l = {
                                node: n
                            }
                              , u = a;
                            n.zIndex.ownStacking ? (s = l.context = {
                                "!": [{
                                    node: n,
                                    children: []
                                }]
                            },
                            u = r) : (o || c) && (u = l.children = []),
                            0 === i && a ? a.push(l) : (t[i] || (t[i] = []),
                            t[i].push(l)),
                            n.zIndex.children.forEach(function(t) {
                                e(s, t, u)
                            })
                        }(t, e),
                        t
                    }(e)),
                    t
                }(e.stack), c)
            }
            ,
            c.Util.Support = function(e, t) {
                return {
                    rangeBounds: (i = !1,
                    t.createRange && (n = t.createRange()).getBoundingClientRect && ((a = t.createElement("boundtest")).style.height = "123px",
                    a.style.display = "block",
                    t.body.appendChild(a),
                    n.selectNode(a),
                    123 === n.getBoundingClientRect().height && (i = !0),
                    t.body.removeChild(a)),
                    i),
                    svgRendering: e.svgRendering && function() {
                        var e = new Image
                          , n = t.createElement("canvas")
                          , a = n.getContext !== r && n.getContext("2d");
                        if (!1 === a)
                            return !1;
                        n.width = n.height = 10,
                        e.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>", "<foreignObject width='10' height='10'>", "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>", "sup", "</div>", "</foreignObject>", "</svg>"].join("");
                        try {
                            a.drawImage(e, 0, 0),
                            n.toDataURL()
                        } catch (e) {
                            return !1
                        }
                        return c.Util.log("html2canvas: Parse: SVG powered rendering available"),
                        !0
                    }()
                };
                var n, a, i
            }
            ,
            e.html2canvas = function(t, r) {
                var n, a, i = {
                    logging: !1,
                    elements: t = t.length ? t : [t],
                    background: "#fff",
                    proxy: null,
                    timeout: 0,
                    useCORS: !1,
                    allowTaint: !1,
                    svgRendering: !1,
                    ignoreElements: "IFRAME|OBJECT|PARAM",
                    useOverflow: !0,
                    letterRendering: !1,
                    chinese: !1,
                    width: null,
                    height: null,
                    taintTest: !0,
                    renderer: "Canvas"
                };
                return i = c.Util.Extend(r, i),
                c.logging = i.logging,
                i.complete = function(e) {
                    "function" == typeof i.onpreloaded && !1 === i.onpreloaded(e) || (n = c.Parse(e, i),
                    "function" == typeof i.onparsed && !1 === i.onparsed(n) || (a = c.Renderer(n, i),
                    "function" == typeof i.onrendered && i.onrendered(a)))
                }
                ,
                e.setTimeout(function() {
                    c.Preload(i)
                }, 0),
                {
                    render: function(e, t) {
                        return c.Renderer(e, c.Util.Extend(t, i))
                    },
                    parse: function(e, t) {
                        return c.Parse(e, c.Util.Extend(t, i))
                    },
                    preload: function(e) {
                        return c.Preload(c.Util.Extend(e, i))
                    },
                    log: c.Util.log
                }
            }
            ,
            e.html2canvas.log = c.Util.log,
            e.html2canvas.Renderer = {
                Canvas: r
            },
            c.Renderer.Canvas = function(e) {
                e = e || {};
                var n = t
                  , a = []
                  , i = t.createElement("canvas")
                  , s = i.getContext("2d")
                  , o = c.Util
                  , l = e.canvas || n.createElement("canvas");
                function u(t, r) {
                    switch (r.type) {
                    case "variable":
                        t[r.name] = r.arguments;
                        break;
                    case "function":
                        switch (r.name) {
                        case "createPattern":
                            if (r.arguments[0].width > 0 && r.arguments[0].height > 0)
                                try {
                                    t.fillStyle = t.createPattern(r.arguments[0], "repeat")
                                } catch (e) {
                                    o.log("html2canvas: Renderer: Error creating pattern", e.message)
                                }
                            break;
                        case "drawShape":
                            !function(e, t) {
                                e.beginPath(),
                                t.forEach(function(t) {
                                    e[t.name].apply(e, t.arguments)
                                }),
                                e.closePath()
                            }(t, r.arguments);
                            break;
                        case "drawImage":
                            r.arguments[8] > 0 && r.arguments[7] > 0 && (!e.taintTest || e.taintTest && function(e) {
                                if (-1 === a.indexOf(e.arguments[0].src)) {
                                    s.drawImage(e.arguments[0], 0, 0);
                                    try {
                                        s.getImageData(0, 0, 1, 1)
                                    } catch (e) {
                                        return i = n.createElement("canvas"),
                                        s = i.getContext("2d"),
                                        !1
                                    }
                                    a.push(e.arguments[0].src)
                                }
                                return !0
                            }(r)) && t.drawImage.apply(t, r.arguments);
                            break;
                        default:
                            t[r.name].apply(t, r.arguments)
                        }
                    }
                }
                return function(e, t, n, a, i) {
                    var s, c, d, m = l.getContext("2d"), g = e.stack;
                    return l.width = l.style.width = t.width || g.ctx.width,
                    l.height = l.style.height = t.height || g.ctx.height,
                    d = m.fillStyle,
                    m.fillStyle = o.isTransparent(g.backgroundColor) && t.background !== r ? t.background : e.backgroundColor,
                    m.fillRect(0, 0, l.width, l.height),
                    m.fillStyle = d,
                    a.forEach(function(e) {
                        m.textBaseline = "bottom",
                        m.save(),
                        e.transform.matrix && (m.translate(e.transform.origin[0], e.transform.origin[1]),
                        m.transform.apply(m, e.transform.matrix),
                        m.translate(-e.transform.origin[0], -e.transform.origin[1])),
                        e.clip && (m.beginPath(),
                        m.rect(e.clip.left, e.clip.top, e.clip.width, e.clip.height),
                        m.clip()),
                        e.ctx.storage && e.ctx.storage.forEach(function(e) {
                            u(m, e)
                        }),
                        m.restore()
                    }),
                    o.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj"),
                    1 === t.elements.length && "object" == typeof t.elements[0] && "BODY" !== t.elements[0].nodeName ? (c = i.Util.Bounds(t.elements[0]),
                    (s = n.createElement("canvas")).width = Math.ceil(c.width),
                    s.height = Math.ceil(c.height),
                    (m = s.getContext("2d")).drawImage(l, c.left, c.top, c.width, c.height, 0, 0, c.width, c.height),
                    l = null,
                    s) : l
                }
            }
        }(window, document)
    },
    1617: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAYAAAA14t7uAAAAAXNSR0IArs4c6QAAAcZJREFUSA3tlLtLA0EQxr+5HBeMBEFQsNJGBP8ACYhFfHQhdlYWVoKlVSrBOlhoL1hYCiJqYeGrUBAsLIIowcLGxogoIYa7XG6dDWzOQMhuHqVbZG7uvvntZHZm6RJO1gKtCCBbhXuILlcJKCwCRbqGUwXI6pL3J1z8VIAEA3sJlXyKRYDxHmaqkhY5gnfcDvgdEHwUrZYQAYK1JOAbgwXcaUYetMLyt71Z+LdSYwgWOc7ihdNt0TXiU8DLqI1t9dDcBqsC4qmKCJeB+4hrNwR7RraRDWuLzZSKY12GN/9QviZjSpXgP87DzcuAJaCchH9jwRrk7CcUhGtfLKOyH/raUlC6H9GGup7DTvJAHRFoIARRvA/OeuhrwVIq7uTvGTDChiLwH/gdz0DjImDjAhhVbzWlqMmer+AsR+HkeUpPPSAuQG8KEFqKWXB2lM8jHdX2JifKCZktPtj0HNwTA7AZUKk4y9cC3EmTUqgYI8t/bWwYTkrTx0asBhH38xfg3dfBAsG2j8pmg6oDh4ElHhS/DuYDcheA7w5YTUN6XmO1yz9YVcL0Pq7rjR9kjQtSzfNfu3ONIzVCm/s3zZdcguDuarRtff4FP5R63ogxv30AAAAASUVORK5CYII="
    },
    1618: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAhCAYAAAAswACjAAAAAXNSR0IArs4c6QAAA4xJREFUSA2lVltsTFEUXefMoKoETSWaNPgh6LQVxKM+vBJ+SJA0IhGR8KNJxeunoS6DEPFORLz5E49IJCQEQSLxStV4tB6RIEW1pJV2jM692z4zZnru3Hunl55k5u6z9tp7zTl7n3NHwM+4beShQI6GRYWAGMSfJphmI97gJSqM392lEJ4Ew5BYKBdDyCUQmM28Pk4utYFwlfFTCG267vQnEXeRuvBMSLGPk5d4BTpxusWrW41S43mmzykSCW/g5Dt5S2Qmuds5UQcsLEPppgs61y4S2bqbc6/XCf9hE4hW8vadSMV2iTwLL+ctOply9OhJ6IRlzUJpzT2VJykS2VYEQa95mtOj5How0Uc0myMxw/iV3HdBYT8ChSIXU4IFyBcujaYLKFuIIhQEqxImHlcPRU7fT4x6Fro8OAR7cidiRKB/OtWTeAvWtD9Ag9WWxhwGURMumkMlevedn01gXq8iXMybYRNQycYH83FjwBwUBwY6cqcBIYZggSyXXJW5aTDDGCR6Y1fuBF55V3/olD4igEP9Jv8trO7RbIm5LCKGa5DNVNuUL7Pv/xheyUg5wBZnm3B+yT3N95H7GBvga8rHGBvMwiMUqu2KeuX5YnV4uWx4YzaeEFFeiai3RWiTh2azNnM3OyiOSPyHuzOBUj2LWI+8GK/MVpyOvfVyJ/Dt0Tq0I+7NMcUjiU7rDDPIi7WloxbnYu8dbpMs7Iu+wPHYG4cvDRBa0d5yOdmbkfBt7rLpaaeLMYlP+jTutmEyDw28wlvxz1ArzToIhxHaWBlMkIS1FwhMzxbwIP4N6uN7EBeLzEOKn7xKijdf4Va+4zuBP+IxlBiJptLuK1O9Rzxr4y9vmvUTlmmkZl0iIeMxa5xNOXr43Mav4aZUji4RhVjta1ioMeX8z+dDvKzbo8faRUp2/uA32gqd8G82/YIVX4aK86YeZxdRnpLN17gyx3WSb9tCdarYeoxTRHlb29byd/ajrmdJ2jdxyTzghPlt5QYmsKdbxyEo7jPFx3ufvoCiZQjt+OqWz30lillWU8tnp9ItyIapQ2dShZeA4nqLKG+o5iTX54gyvQetS/318eJkF1FRsQ9VvKK7rgmITvAPOejq08DuRSYc7UTMXMRC77Q4Pk58Db0yV9kwj4l34TMD6sKjEIBqhMG8hfX4GS/HVON7Js1t7l9ERdcaZegll4Lkfr7CP7oldMP+ANWVFQYZNZXvAAAAAElFTkSuQmCC"
    },
    1619: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAhCAYAAAAswACjAAAAAXNSR0IArs4c6QAAA05JREFUSA2tVk9IVGEQn3n+CTVBxNC8JkgpKx3s1KGbl8RCgkoMuhRRHaI6SCroborSJYICr1GHwNrIDtGpg1Bdsl3XlLQIStjMMmrX9t+bZr717b7d92dddWD3zffNb+b3zffNfO8huAida6yEhtoOAOziXxtDGwGoBgjCPF5mfZqffvAGphFAdwrFNqvQ5aZdUFNxERBucJBaKyJ/huaZog99QX++RcYWEur3NAPSU0BstnNwnSN4BrFYD44v/DHjckiov/UIaNoTBtSYQcXpNAf/sAPHA18NvwyJykCD19sj2AhL8A7CPw7jxHJUZjT5U2cgW7StDCTShiAchPq6e8ZQkaQPeQtnYESxfVIvDbS0i6lUlamqIlukmozvPQBRTxck9+xT49KVRaic8UN5eN7ZCRGBNB8DOpAGW4/zrj12QkcOdkOk/TTXYeb40lDSoertA6iakTpxEgYl1ht4u6TR7EUysCUQOGoQOdQD8Xq3SmdQScVRIZFOthXZIksGZiTHWBeMm2jUJgfPV4W9GGdgb03PJjbOyRmDjRrfQ9XOgM1YyB1EWK3xxbLkhJIqKiRlK47uaVekJdmukFMgKVPgAnEUPQWV723vxKwL4RyT0GR2JleTPpAytSVigt1v7kPZ94+5TuYRQYovTD/SiZZy2F/yjW11ZrtZlzKNtkkzNjEhQZk0I2fgSiABCKbQG+hUHcYNOc4Ned0ceEd0Xe9E3+yUnAlAIjnGrL93JLARhGBaCGSoSHB0fpVzGzHsO/LU4ZoRJ52JjNbWb3M2XwzDtp5Ej/BmQN5NSjIkeGcxBpg6bxi2/CT6BbH4FbN/hkQmcTj0gqtnwgzYgn6J3/H8JZOVHBI1vapf5W37nIUUoRFMojf4MN/DQoJ3Q3+5CM7yz6XV88PwmCgMyegFG0u6uvINvJpXnI281TYpvCCkXhxdXLFzsGSSAXmDQ7y6l5mxm0IwhMOzjlhHEr4KdEgmThUsa6Ln4A163dbgSCJOqklTqWOsqu8nSyCiBYhHenhBri8VVxJFNBKaAUid4a3LC0Q/gZKdOPap4HVUkEQRDYcmea192UwoDjp1o++Dyz2fRRel0aDnFg141vij7WRRjsWCec82lb057n90nhuzZ2rYZAAAAABJRU5ErkJggg=="
    },
    1620: function(e, t, r) {
        e.exports = r.p + "img/icon--user-rounded-gray_byhAfB-ac46dfa9.png"
    },
    1621: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTkuNSIgZmlsbD0iI0VERjVGOSIgc3Ryb2tlPSIjRTVFNUU1Ii8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOS41MTYgMzcuMDk3KSI+CiAgICAgIDxlbGxpcHNlIGN4PSI1OC40NjgiIGN5PSI2MS4yOSIgZmlsbD0iI0ZGRiIgcng9IjM4LjMwNiIgcnk9IjQwLjMyMyIvPgogICAgICA8cGF0aCBmaWxsPSIjNEU0RTUyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik02Mi45MDMyMjU4LDc3LjgyMjU4MDYgTDkzLjk1MTYxMjksNzcuODIyNTgwNiBMOTMuOTUxNjEyOSw4Mi42NjEyOTAzIEw2Mi45MDMyMjU4LDgyLjY2MTI5MDMgTDYyLjkwMzIyNTgsMTAwLjgwNjQ1MiBMNTguMDY0NTE2MSwxMDAuODA2NDUyIEw1OC4wNjQ1MTYxLDgyLjY2MTI5MDMgTDI1LjQwMzIyNTgsODIuNjYxMjkwMyBMMjUuNDAzMjI1OCw3Ny44MjI1ODA2IEw1OC4wNjQ1MTYxLDc3LjgyMjU4MDYgTDU4LjA2NDUxNjEsNjQuMTEyOTAzMiBMMjAuNTY0NTE2MSw2NC4xMTI5MDMyIEwyMC41NjQ1MTYxLDU5LjI3NDE5MzUgTDU4LjA2NDUxNjEsNTkuMjc0MTkzNSBMNTguMDY0NTE2MSw0NS41NjQ1MTYxIEwyNS40MDMyMjU4LDQ1LjU2NDUxNjEgTDI1LjQwMzIyNTgsNDAuNzI1ODA2NSBMNTguMDY0NTE2MSw0MC43MjU4MDY1IEw1OC4wNjQ1MTYxLDIwLjk2Nzc0MTkgTDYyLjkwMzIyNTgsMjAuOTY3NzQxOSBMNjIuOTAzMjI1OCw0MC43MjU4MDY1IEw5My45NTE2MTI5LDQwLjcyNTgwNjUgTDkzLjk1MTYxMjksNDUuNTY0NTE2MSBMNjIuOTAzMjI1OCw0NS41NjQ1MTYxIEw2Mi45MDMyMjU4LDU5LjI3NDE5MzUgTDEwMC40MDMyMjYsNTkuMjc0MTkzNSBMMTAwLjQwMzIyNiw2NC4xMTI5MDMyIEw2Mi45MDMyMjU4LDY0LjExMjkwMzIgTDYyLjkwMzIyNTgsNzcuODIyNTgwNiBaIE02MC4wODA2NDUyLDk4LjM4NzA5NjggQzgwLjM0NTkzMjQsOTguMzg3MDk2OCA5Ni43NzQxOTM1LDgxLjk1ODgzNTYgOTYuNzc0MTkzNSw2MS42OTM1NDg0IEM5Ni43NzQxOTM1LDQxLjQyODI2MTIgODAuMzQ1OTMyNCwyNSA2MC4wODA2NDUyLDI1IEMzOS44MTUzNTgsMjUgMjMuMzg3MDk2OCw0MS40MjgyNjEyIDIzLjM4NzA5NjgsNjEuNjkzNTQ4NCBDMjMuMzg3MDk2OCw4MS45NTg4MzU2IDM5LjgxNTM1OCw5OC4zODcwOTY4IDYwLjA4MDY0NTIsOTguMzg3MDk2OCBaIE02MC4wODA2NDUyLDEwMy4yMjU4MDYgQzM3LjE0MzAxMjQsMTAzLjIyNTgwNiAxOC41NDgzODcxLDg0LjYzMTE4MTEgMTguNTQ4Mzg3MSw2MS42OTM1NDg0IEMxOC41NDgzODcxLDM4Ljc1NTkxNTYgMzcuMTQzMDEyNCwyMC4xNjEyOTAzIDYwLjA4MDY0NTIsMjAuMTYxMjkwMyBDODMuMDE4Mjc3OSwyMC4xNjEyOTAzIDEwMS42MTI5MDMsMzguNzU1OTE1NiAxMDEuNjEyOTAzLDYxLjY5MzU0ODQgQzEwMS42MTI5MDMsODQuNjMxMTgxMSA4My4wMTgyNzc5LDEwMy4yMjU4MDYgNjAuMDgwNjQ1MiwxMDMuMjI1ODA2IFogTTYwLjg4NzA5NjgsOTguMzg3MDk2OCBDNzIuNTg5NzgzNyw5OC4zODcwOTY4IDgzLjA2NDUxNjEsODIuMjg0MTQ5OSA4My4wNjQ1MTYxLDYxLjY5MzU0ODQgQzgzLjA2NDUxNjEsNDEuMTAyOTQ2OCA3Mi41ODk3ODM3LDI1IDYwLjg4NzA5NjgsMjUgQzQ5LjE4NDQwOTgsMjUgMzguNzA5Njc3NCw0MS4xMDI5NDY4IDM4LjcwOTY3NzQsNjEuNjkzNTQ4NCBDMzguNzA5Njc3NCw4Mi4yODQxNDk5IDQ5LjE4NDQwOTgsOTguMzg3MDk2OCA2MC44ODcwOTY4LDk4LjM4NzA5NjggWiBNNjAuODg3MDk2OCwxMDMuMjI1ODA2IEM0NS45NjY1MDA3LDEwMy4yMjU4MDYgMzMuODcwOTY3Nyw4NC42MzExODExIDMzLjg3MDk2NzcsNjEuNjkzNTQ4NCBDMzMuODcwOTY3NywzOC43NTU5MTU2IDQ1Ljk2NjUwMDcsMjAuMTYxMjkwMyA2MC44ODcwOTY4LDIwLjE2MTI5MDMgQzc1LjgwNzY5MjgsMjAuMTYxMjkwMyA4Ny45MDMyMjU4LDM4Ljc1NTkxNTYgODcuOTAzMjI1OCw2MS42OTM1NDg0IEM4Ny45MDMyMjU4LDg0LjYzMTE4MTEgNzUuODA3NjkyOCwxMDMuMjI1ODA2IDYwLjg4NzA5NjgsMTAzLjIyNTgwNiBaIi8+CiAgICAgIDxwYXRoIGZpbGw9IiNEQzJGMzkiIGQ9Ik0tMTIuNjA0ODIxNiw0Mi41NjUwNjE5IEw5NC42MDM2Njk2LDQ0LjAyMzA3NCBDOTYuODQ3OTU1OCw0NC4wNTM1OTU4IDk4LjY1MTI4NzMsNDUuODgxNjE5IDk4LjY1MTI4NzMsNDguMTI2MTEyNyBMOTguNjUxMjg3Myw0OC4xMjYxMTI3IEM5OC42NTEyODczLDUwLjMzMTU1OTQgOTYuODYzNDE5NSw1Mi4xMTk0MjczIDk0LjY1Nzk3MjcsNTIuMTE5NDI3MyBDOTQuNjM5ODcxMSw1Mi4xMTk0MjczIDk0LjYyMTc2OTYsNTIuMTE5MzA0MiA5NC42MDM2Njk2LDUyLjExOTA1OCBMLTEyLjYwNDgyMTYsNTAuNjYxMDQ1OSBDLTE0Ljg0OTEwNzgsNTAuNjMwNTI0MSAtMTYuNjUyNDM5NCw0OC44MDI1MDA5IC0xNi42NTI0Mzk0LDQ2LjU1ODAwNzIgTC0xNi42NTI0Mzk0LDQ2LjU1ODAwNzIgQy0xNi42NTI0Mzk0LDQ0LjM1MjU2MDUgLTE0Ljg2NDU3MTUsNDIuNTY0NjkyNiAtMTIuNjU5MTI0OCw0Mi41NjQ2OTI2IEMtMTIuNjQxMDIzMSw0Mi41NjQ2OTI2IC0xMi42MjI5MjE3LDQyLjU2NDgxNTcgLTEyLjYwNDgyMTYsNDIuNTY1MDYxOSBaIiB0cmFuc2Zvcm09InJvdGF0ZSg0MCAyOS40MTcgNzYuNzcyKSIvPgogICAgICA8ZWxsaXBzZSBjeD0iNjAuNDg0IiBjeT0iMTIzLjc5IiBmaWxsPSIjNEU0RTUyIiBvcGFjaXR5PSIuMTUiIHJ4PSIzNC42NzciIHJ5PSIxLjIxIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
    },
    1622: function(e, t, r) {
        (function(e) {
            var r, n, a, i;
            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            window,
            i = function() {
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
                        if (4 & t && "object" === s(e) && e && e.__esModule)
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
            "object" === s(t) && "object" === s(e) ? e.exports = i() : (n = [],
            void 0 === (a = "function" == typeof (r = i) ? r.apply(t, n) : r) || (e.exports = a))
        }
        ).call(this, r(86)(e))
    },
    1770: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(5)
          , a = r(2)
          , i = r.n(a)
          , s = r(4)
          , o = r(76)
          , c = r.n(o)
          , l = r(6)
          , u = r.n(l)
          , d = r(1600)
          , m = r.n(d)
          , g = r(1601)
          , p = r.n(g)
          , f = r(1602)
          , h = r.n(f)
          , v = r(1603)
          , E = r.n(v)
          , y = r(1604)
          , A = r.n(y)
          , b = r(0)
          , _ = r.n(b)
          , O = r(1)
          , T = r.n(O)
          , I = r(8)
          , C = r.n(I)
          , R = r(7)
          , N = r.n(R)
          , S = r(1605)
          , w = r.n(S)
          , D = r(1606)
          , M = r.n(D)
          , k = r(1607)
          , L = r.n(k)
          , j = r(1608)
          , P = r.n(j)
          , x = r(1609)
          , U = r.n(x)
          , F = r(1610)
          , B = r.n(F)
          , z = r(1611)
          , G = r.n(z)
          , Y = r(1612)
          , H = r.n(Y)
          , q = r(21)
          , Q = r.n(q)
          , V = r(1613)
          , J = r.n(V)
          , W = r(1614)
          , K = r.n(W)
          , X = r(735)
          , Z = r(1615)
          , $ = r.n(Z)
          , ee = r(16)
          , te = r.n(ee)
          , re = (r(1616),
        r(3))
          , ne = r(31)
          , ae = r(188)
          , ie = r.n(ae)
          , se = r(24)
          , oe = r(11)
          , ce = r(1241)
          , le = r(1310)
          , ue = r(1617)
          , de = r.n(ue)
          , me = r(1618)
          , ge = r.n(me)
          , pe = r(1619)
          , fe = r.n(pe)
          , he = r(1620)
          , ve = r.n(he)
          , Ee = r(96)
          , ye = r(179)
          , Ae = r(1190)
          , be = r(1189)
          , _e = r(1188)
          , Oe = r(1185)
          , Te = r(1621)
          , Ie = r.n(Te);
        r(1622);
        function Ce(e) {
            return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Re(e, t, r, n, a, i, s) {
            try {
                var o = e[i](s)
                  , c = o.value
            } catch (e) {
                return void r(e)
            }
            o.done ? t(c) : Promise.resolve(c).then(n, a)
        }
        function Ne(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Se(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function we(e, t, r) {
            return t && Se(e.prototype, t),
            r && Se(e, r),
            e
        }
        function De(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Me() {
            return (Me = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ke(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    De(e, t, r[t])
                })
            }
            return e
        }
        function Le(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && Pe(e, t)
        }
        function je(e) {
            return (je = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Pe(e, t) {
            return (Pe = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function xe(e, t) {
            if (null == e)
                return {};
            var r, n, a = function(e, t) {
                if (null == e)
                    return {};
                var r, n, a = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
            }
            return a
        }
        function Ue(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Fe(e, t) {
            return !t || "object" !== Ce(t) && "function" != typeof t ? Ue(e) : t
        }
        function Be(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = new Array(e.length); t < e.length; t++)
                        r[t] = e[t];
                    return r
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var ze, Ge = Symbol("Enhance With Selected Order Category"), Ye = [{
            id: Ge,
            mapState: function(e) {
                return {
                    selectedOrderCategory: e.getIn(["page", "data", "currentTab"])
                }
            }
        }], He = {
            canPollOrders: "ORDERS_MOS_TOGGLE_RESULT",
            refreshOrders: "ORDERS_REFRESH",
            refreshOrdersFinished: "ORDERS_REFRESH_FINISHED",
            refreshOrdersError: "ORDERS_REFRESH_ERROR",
            loadingOrdersForPage: "ORDERS_LOADING_FOR_PAGE",
            loadingOrdersForPageFinished: "ORDERS_LOADING_FOR_PAGE_FINISHED",
            loadingOrdersForPageError: "ORDERS_LOADING_FOR_PAGE_ERROR",
            loadPollingOrders: "ORDERS_LOAD_POLLING_ORDERS",
            loadingOrdersFromPollFinished: "ORDERS_LOADING_FROM_POLL_FINISHED",
            loadingOrdersFromPollError: "ORDERS_LOADING_FROM_POLL_ERROR",
            setOrderPollingTimeout: "ORDERS_SET_ORDER_POLLING_TIMEOUT",
            setOrderPollingTimeoutId: "ORDERS_SET_ORDER_POLLING_TIMEOUT_ID",
            changeSelectedTab: "ORDERS_CHANGE_SELECTED_TAB",
            setOrderDingInterval: "ORDERS_SET_DING_INTERVAL",
            setOrderDingIntervalId: "ORDERS_SET_DING_INTERVAL_ID",
            playOrderDingForUnconfirmedOrders: "ORDERS_PLAY_DING_FOR_UNCONFIRMED",
            bumpOrder: "ORDERS_BUMP_STATUS",
            bumpOrderDelayFinish: "ORDERS_BUMP_DELAY_FINISH",
            bumpOrderFinished: "ORDERS_BUMP_FINISHED",
            bumpOrderFailed: "ORDERS_BUMP_FAILED",
            setOrderDetailsOrder: "ORDERS_SET_DETAILS_ORDER",
            orderDetailsAdjustmentResponse: "ORDER_DETAILS_ADJUSTMENT_RESPONSE",
            orderDetailsCancellationResponse: "ORDER_DETAILS_CANCELLATION_RESPONSE",
            openTestOrderModal: "ORDERS_OPEN_TEST_ORDER_DIALOG",
            closeTestOrderModal: "ORDERS_CLOSE_TEST_ORDER_DIALOG",
            ordersSubscriptionSuccess: "ORDERS_SUBSCRIPTION_SUCCESS",
            ordersSubscriptionFailure: "ORDERS_SUBSCRIPTION_FAILURE"
        };
        function qe(e) {
            var t;
            return De(t = {
                type: He.canPollOrders,
                result: e
            }, n.i, !0),
            De(t, n.q, !0),
            De(t, n.n, !0),
            De(t, n.k, !0),
            t
        }
        function Qe(e, t, r, a) {
            var i, s = t.ts;
            return ke({
                type: e
            }, xe(t, ["ts"]), (De(i = {
                lastPollingTimestamp: s,
                associatedRestaurantIdsPreRequest: r
            }, n.k, !0),
            De(i, "isRefresh", a),
            i))
        }
        function Ve() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return De(e = {
                type: He.refreshOrders
            }, n.k, !0),
            De(e, "isFirestoreSubscriptionError", t),
            e
        }
        function Je() {
            return De({
                type: He.refreshOrdersError
            }, n.p, !0)
        }
        function We(e) {
            var t = e.tab;
            return {
                type: He.loadingOrdersForPageError,
                tab: t
            }
        }
        function Ke() {
            var e;
            return De(e = {
                type: He.loadPollingOrders
            }, n.k, !0),
            De(e, Ge, !0),
            e
        }
        function Xe(e) {
            return De({
                type: He.setOrderPollingTimeout,
                msToPoll: e
            }, n.l, !0)
        }
        function Ze(e) {
            return {
                type: He.setOrderPollingTimeoutId,
                id: e
            }
        }
        function $e(e) {
            return {
                type: He.changeSelectedTab,
                selectedTab: e
            }
        }
        function et(e) {
            return {
                type: He.setOrderDingIntervalId,
                id: e
            }
        }
        function tt() {
            return {
                type: He.playOrderDingForUnconfirmedOrders
            }
        }
        function rt(e) {
            return {
                type: He.bumpOrderDelayFinish,
                order: e
            }
        }
        function nt(e) {
            return {
                type: He.bumpOrderFinished,
                order: e
            }
        }
        function at(e) {
            var t = e.uuid;
            return {
                type: He.bumpOrderFailed,
                uuid: t
            }
        }
        function it(e) {
            return {
                type: He.setOrderDetailsOrder,
                order: e
            }
        }
        function st(e) {
            var t = e.order
              , r = e.uuid;
            return {
                type: He.orderDetailsAdjustmentResponse,
                order: t,
                uuid: r
            }
        }
        function ot(e) {
            var t = e.order
              , r = e.uuid;
            return {
                type: He.orderDetailsCancellationResponse,
                order: t,
                uuid: r
            }
        }
        function ct() {
            return {
                type: He.ordersSubscriptionSuccess
            }
        }
        function lt() {
            return {
                type: He.ordersSubscriptionFailure
            }
        }
        var ut = {
            ANTICIPATED: "ANTICIPATED",
            CANCELLED: "CANCELLED",
            CONFIRMED: "CONFIRMED",
            FULFILLED: "FULFILLED",
            OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",
            READY_FOR_PICKUP: "PICKUP_READY",
            REJECTED: "REJECTED",
            STALE: "STALE",
            SUBMITTED: "SUBMITTED",
            UNCONFIRMED: "RESTAURANT_CONFIRMABLE"
        }
          , dt = {
            DAPI: "GRUBHUB_DAPI"
        }
          , mt = [ut.UNCONFIRMED, ut.REJECTED, ut.STALE]
          , gt = "scheduled"
          , pt = "outTheDoor"
          , ft = "active"
          , ht = (De(ze = {}, ft, {
            id: "ACTIVE",
            title: "Active"
        }),
        De(ze, pt, {
            id: "OUT_THE_DOOR",
            title: "Completed",
            hideCount: !0,
            emptyMessage: {
                primary: "You don't have any completed orders right now.",
                secondary: "Only showing orders that are less than 24 hours old."
            }
        }),
        De(ze, gt, {
            id: "SCHEDULED",
            title: "Scheduled",
            emptyMessage: {
                primary: "You don't have any scheduled orders right now.",
                secondary: "Upcoming orders will show up here before becoming active."
            }
        }),
        ze)
          , vt = [ft, gt, pt]
          , Et = 5
          , yt = [{
            displayValue: "Refund",
            value: "Refund"
        }, {
            displayValue: "Extra charge",
            value: "Extra charge"
        }]
          , At = ["Customer added item", "Customer added tip", "Delivery fee change", "Item substitution - extra charge", "Menu price is wrong", "Special instructions - extra charge"]
          , bt = ["Customer removed item", "Delivery fee change", "Issue with order", "Item substitution", "Out of item"]
          , _t = "Other"
          , Ot = ["No delivery staff available", "Order outside delivery area", "Restaurant closed", "Restaurant too busy", "Unable to reach customer", "Not enough advance notice", _t]
          , Tt = "INCLUDE"
          , It = 7200
          , Ct = {
            confirmedOrderFailed: function() {
                return {
                    header: "Couldn't confirm that order",
                    message: "Make sure you're connected to the internet and try again.",
                    isError: !0
                }
            },
            orderOutDeliveryFailed: function() {
                return {
                    header: "Couldn't set that order out for delivery",
                    message: "Make sure you're connected to the internet and try again.",
                    isError: !0
                }
            },
            orderReadyPickupFailed: function() {
                return {
                    header: "Couldn't set that order ready for pickup",
                    message: "Make sure you're connected to the internet and try again.",
                    isError: !0
                }
            },
            orderManagedFoodReadyFailed: function() {
                return {
                    header: "Couldn't set that order as food is ready",
                    message: "Make sure you're connected to the internet and try again.",
                    isError: !0
                }
            },
            driverLocationMissing: function() {
                return {
                    header: "Unable to retrieve driver location",
                    message: "We were unable to retrieve the location information for this driver. Please try again later.",
                    isError: !0
                }
            },
            rateDriveModalSubmitFailed: function() {
                return {
                    header: "Couldn't submit driver rating",
                    message: "Make sure you're connected to the internet and try again.",
                    isError: !0
                }
            },
            adjustmentFailed: function() {
                return {
                    header: "Couldn't adjust order",
                    message: "Sorry, but something went wrong. Try again later.",
                    isError: !0
                }
            },
            cancellationFailed: function() {
                return {
                    header: "Couldn't cancel order",
                    message: "Sorry, but something went wrong. Try again later.",
                    isError: !0
                }
            },
            testOrderSent: function() {
                return {
                    header: "Test order sent",
                    message: "Nice job! Next, confirm your test order."
                }
            },
            testOrderFailed: function() {
                return {
                    header: "Looks like a test order failed",
                    message: "Make sure you're connected to the internet and try again.",
                    isError: !0
                }
            },
            bumpOrderFailedDueToConflict: function(e) {
                return {
                    header: "An error has occurred and we are temporarily unable to update this order.",
                    message: "If this issue recurs, please call Care at ".concat(e, " and reference error code 102."),
                    isError: !0
                }
            },
            bumpOrderFailedDueToConnectivity: function(e) {
                return {
                    header: "we can't successfully make the request due to network issues or the service is down.",
                    message: "If this issue recurs, please call Care at ".concat(e, " and reference error code 101."),
                    isError: !0
                }
            },
            faxResendFailed: function(e) {
                return {
                    header: "Whoops",
                    message: "There was a problem resending fax for order number: " + e + ", please try again.",
                    isError: !0
                }
            },
            faxResendSuccess: function() {
                return {
                    header: "Fax request received",
                    message: "Printing may take several minutes"
                }
            }
        }
          , Rt = {
            ALLMENUS_ONLY: "ALLMENUS_ONLY",
            ACCOUNT_SETUP: "ACCOUNT_SETUP",
            SELF_SERVICE: "SELF_SERVICE",
            FAILED_GO_LIVE: "FAILED_GO_LIVE",
            DATA_ENTRY: "DATA_ENTRY",
            DATA_REVIEW: "DATA_REVIEW",
            GO_LIVE_READY: "GO_LIVE_READY",
            PREMIUM: "PREMIUM",
            FREEMIUM: "FREEMIUM",
            PREMIUM_BETA: "PREMIUM_BETA",
            MARKET_NOT_READY: "MARKET_NOT_READY",
            ACCOUNT_UPDATE_ESCALATION: "ACCOUNT_UPDATE_ESCALATION",
            ORDER_TRANSMISSION_ISSUES: "ORDER_TRANSMISSION_ISSUES",
            WANTS_TO_CANCEL: "WANTS_TO_CANCEL",
            GOING_OUT_OF_BUSINESS: "GOING_OUT_OF_BUSINESS",
            REMOVE_FROM_GH: "REMOVE_FROM_GH",
            DUPLICATE: "DUPLICATE",
            COMPLETELY_REMOVED: "COMPLETELY_REMOVED"
        };
        function Nt(e) {
            return function(e) {
                return e === Rt.ORDER_TRANSMISSION_ISSUES
            }(e.getIn(["orderTypeSettings", "standard", "merchantStatus"]))
        }
        function St(e) {
            return function(e) {
                return e === Rt.PREMIUM
            }(e.getIn(["orderTypeSettings", "standard", "merchantStatus"]))
        }
        function wt(e) {
            return e.forEach(function(e) {
                Dt(e),
                Mt(e),
                kt(e)
            }),
            e
        }
        function Dt(e) {
            var t;
            (t = e.statusHistory) && t.find(function(e) {
                return e.status === ut.REJECTED && e.updateSource === dt.DAPI
            }) && (e.status = ut.CANCELLED)
        }
        function Mt(e) {
            e.orderNumber && 15 === e.orderNumber.length && (e.orderNumber = e.orderNumber.slice(0, 8) + "—" + e.orderNumber.slice(8))
        }
        function kt(e) {
            e.catering && i.a.isEmpty(e.catering) && (e.catering = null)
        }
        function Lt(e) {
            return e ? (e.uuid ? (Dt(e),
            Mt(e),
            kt(e)) : e.orders ? e.orders = wt(e.orders) : e = function(e) {
                return i.a.forEach(e, function(e, t) {
                    ["scheduled", "unconfirmed", "inHouse", "outTheDoor", "futureActionable"].includes(t) && e.orders && (e.orders = wt(e.orders))
                }),
                e
            }(e),
            e) : e
        }
        function jt(e, t, r) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                method: "GET"
            };
            return n.X.makeAuthenticatedRequest(e, a, t(), r).then(function(e) {
                return e.data = Lt(e.data),
                e.data
            })
        }
        function Pt(e, t, r) {
            return jt("merchant/".concat(e.join(), "/orders"), t, r)
        }
        function xt(e, t, r, n, a) {
        	try {throw new Error('subapp-orders xt()')} catch (e) {console.log(e)} // #alec
            var i = "merchant/".concat(e.join(), "/orders?timestamp=").concat(t);
            return a !== pt && a !== gt || (i += "&include=".concat(ht[a].id)),
            jt(i, r, n)
        }
        function Ut(e, t, r, n, a) {
            return jt("merchant/".concat(e.join(), "/orders?tab=").concat(ht[t].id, "&offset=").concat(r, "&limit=").concat(Et), n, a).then(function(e) {
                return ke({
                    tab: t
                }, e)
            }, function() {
                throw {
                    tab: t
                }
            })
        }
        function Ft(e, t, r, a, i, o) {
            var c = !!Object(n.Cb)(a(), "ENABLE_SELF_SERVICE_UNPAUSE")
              , l = Nt(e)
              , u = c && r === ut.CONFIRMED && l;
            return jt("merchant/".concat(e.get("id"), "/orders/").concat(t, "/status"), a, i, {
                method: "PUT",
                body: {
                    status: r,
                    waitTimeInMinutes: o,
                    unpauseMerchant: u
                }
            }).catch(function(e) {
                var r = Object(n.wb)(a());
                throw 409 === e.status ? s.a.sendAlert(Ct.bumpOrderFailedDueToConflict(r)) : s.a.sendAlert(Ct.bumpOrderFailedDueToConnectivity(r)),
                {
                    err: e,
                    uuid: t
                }
            })
        }
        function Bt(e, t, r, n) {
            return jt("merchant/".concat(t, "/orders/").concat(e, "/adjustment"), r, n).then(function(t) {
                return {
                    order: t,
                    uuid: e
                }
            }, function() {
                throw {
                    uuid: e
                }
            })
        }
        var zt, Gt, Yt = {
            Chirpy: "https://s3.amazonaws.com/grub-central/chirpy.mp3",
            Ding: "https://s3.amazonaws.com/grub-central/unconfirmed_order_alert.mp3",
            GrubHub: "https://s3.amazonaws.com/grub-central/grubhub.mp3",
            Metro: "https://s3.amazonaws.com/grub-central/metro.mp3"
        }, Ht = "gfr-orders:audioSource", qt = "gh:central:orderAlert:audioSource", Qt = "Ding";
        function Vt() {
            return Jt.apply(this, arguments)
        }
        function Jt() {
            var e;
            return e = regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = Yt[Kt()],
                            zt) {
                                e.next = 5;
                                break
                            }
                            zt = Object(n.gb)(t),
                            e.next = 9;
                            break;
                        case 5:
                            if (zt.audio.src === t) {
                                e.next = 9;
                                break
                            }
                            return e.next = 8,
                            Gt;
                        case 8:
                            zt.audio.src = t;
                        case 9:
                            return e.next = 11,
                            zt.loadedPromise;
                        case 11:
                            (r = zt.audio.play()) && r.then && (Gt = r.then(function() {
                                return Gt = null
                            }));
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }),
            (Jt = function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, a) {
                    var i = e.apply(t, r);
                    function s(e) {
                        Re(i, n, a, s, o, "next", e)
                    }
                    function o(e) {
                        Re(i, n, a, s, o, "throw", e)
                    }
                    s(void 0)
                }
                )
            }
            ).apply(this, arguments)
        }
        function Wt(e) {
            window.localStorage.setItem(Ht, e)
        }
        function Kt() {
            var e = window.localStorage.getItem(Ht);
            return e || (e = function() {
                var e = window.localStorage.getItem(qt);
                if (!e)
                    return null;
                window.localStorage.removeItem(qt);
                try {
                    var t = JSON.parse(e);
                    return t.name ? (Wt(t.name),
                    t.name) : null
                } catch (e) {
                    return null
                }
            }()),
            e in Yt ? e : Qt
        }
        function Xt(e) {
            var t = e.get("status")
              , r = e.getIn(["delivery", "grubhubDelivery"])
              , n = !e.get("isPickup")
              , a = Zt(e);
            return er(e) ? ut.CONFIRMED : t === ut.CONFIRMED && !a || t === ut.SUBMITTED ? !r && n ? ut.OUT_FOR_DELIVERY : ut.READY_FOR_PICKUP : t === ut.CONFIRMED ? ut.SUBMITTED : "NOT_BUMPABLE"
        }
        function Zt(e) {
            return e && !!e.get("justInTimeOrder")
        }
        function $t(e) {
            return e && !!e.get("justInTimeScheduled")
        }
        function er(e) {
            var t = e.get("status");
            return mt.includes(t) && !$t(e)
        }
        function tr(e) {
            var t = e.get("status")
              , r = e.getIn(["delivery", "grubhubDelivery"], !1)
              , n = t === ut.CONFIRMED
              , a = t === ut.SUBMITTED
              , i = t === ut.READY_FOR_PICKUP
              , s = !1 === e.get("beforeLeadTimeWindow", !1)
              , o = i && r
              , c = !$t(e);
            return s && c && (n || a || o)
        }
        function rr(e) {
            var t = e.get("status") === ut.CONFIRMED
              , r = e.get("beforeLeadTimeWindow");
            return t && r
        }
        function nr(e) {
            var t = $t(e);
            return e.get("status") === ut.ANTICIPATED || t || rr(e)
        }
        function ar(e) {
            return !er(e) && !nr(e) && !tr(e)
        }
        function ir(e) {
            return "FUTURE" === e.get("fulfillmentScheduling")
        }
        function sr(e) {
            return {
                orderPollingMax: Object(n.Cb)(e(), "ORDER_POLLING_MAX_RESTAURANTS")
            }
        }
        function or(e) {
            var t = e.getIn(["payments", "adjustments"])
              , r = t && t.size
              , n = r && t.maxBy(function(e) {
                return e.get("submittedTimestamp")
            })
              , a = n && n.get("submittedTimestamp");
            return r ? a ? n : t.last() : null
        }
        function cr(e, t) {
            return !e.sort().equals(t.sort())
        }
        zt = null,
        Gt = null;
        var lr = [];
        function ur(e, t) {
            var r = c.a.firestore()
              , n = i.a.throttle(function() {
                return t(Ke())
            }, 1e3)
              , a = i.a.debounce(function() {
                return t(lt())
            }, 5e3);
            e.forEach(function(e) {
                lr.push(r.doc("merchant/".concat(e, "/orders/MERCHANTORDERS")).onSnapshot(function() {
                    n()
                }, function(e) {
                    console.error(e),
                    dr(),
                    a()
                }))
            })
        }
        function dr() {
            lr.forEach(function(e) {
                return e()
            }),
            lr = []
        }
        var mr = {
            setAutoPrintSettings: "SET_AUTO_PRINT_SETTINGS",
            autoPrintSettingsRetrieved: "AUTO_PRINT_SETTINGS_RETRIEVED",
            printOrders: "PRINT_ORDERS",
            printSuccess: "PRINT_SUCCESS",
            printFailed: "PRINT_FAILED",
            sendTestPrint: "SEND_TEST_PRINT",
            clearQueue: "CLEAR_PRINT_QUEUE",
            resumePrinting: "RESUME_PRINTING",
            showPrintConsole: "SHOW_PRINT_CONSOLE",
            hidePrintConsole: "HIDE_PRINT_CONSOLE",
            showReprintScheduledOrderModal: "SHOW_REPRINT_SCHEDULED_ORDER_MODAL",
            closeReprintScheduledOrderModal: "CLOSE_REPRINT_SCHEDULED_ORDER_MODAL"
        };
        function gr(e) {
            var t = e.enabled
              , r = e.copies;
            return {
                type: mr.autoPrintSettingsRetrieved,
                enabled: t,
                copies: r
            }
        }
        function pr(e) {
            var t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return De(t = {
                type: mr.printOrders,
                orders: Object(l.fromJS)(e),
                auto: r
            }, n.j, !0),
            De(t, n.o, !0),
            t
        }
        function fr(e) {
            var t, r = e ? e.order : null;
            return De(t = {
                type: mr.printSuccess,
                order: r
            }, n.j, !0),
            De(t, n.o, !0),
            t
        }
        function hr(e) {
            return {
                type: mr.printFailed,
                error: e
            }
        }
        function vr() {
            return {
                type: mr.showPrintConsole
            }
        }
        var Er, yr = "AutoPrintingEnabled", Ar = "AutoPrintCopies";
        function br(e) {
            var t = window.localStorage.getItem(yr)
              , r = window.localStorage.getItem(Ar)
              , a = Object(n.sb)(e()).get("authorities").includes("CUST_CARE_ACCESS");
            return {
                enabled: t ? JSON.parse(t) : !n.Y.isGCInABox() && !a,
                copies: r ? JSON.parse(r) : 1
            }
        }
        function _r(e, t) {
            window.localStorage.setItem(yr, e),
            window.localStorage.setItem(Ar, t)
        }
        function Or() {
            var e = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
            return {
                opera: e,
                chrome: !!window.chrome && !e,
                firefox: "undefined" != typeof InstallTrigger,
                ie: !!document.documentMode,
                safari: Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0
            }
        }
        function Tr(e, t) {
            if (n.Y.isGCInABox())
                return n.Y.printImage(e, t);
            var r = document.createElement("div");
            return r.id = "printSection",
            document.body.appendChild(r),
            new Promise(function(t) {
                var n = new Image;
                r.appendChild(n),
                n.onload = function() {
                    t()
                }
                ,
                n.src = "data:image/png;base64,".concat(e)
            }
            ).then(function() {
                for (var e = Or().ie, n = 0; n < t; n++)
                    e ? document.getElementById("IEActiveX").ExecWB(6, 2, null, null) : window.print();
                document.body.removeChild(r)
            })
        }
        function Ir() {
            return new Promise(function(e, t) {
                var r = new Image;
                r.onload = function() {
                    var n, a = document.createElement("CANVAS"), i = a.getContext("2d");
                    a.height = r.height,
                    a.width = r.width,
                    i.drawImage(r, 0, 0),
                    Tr((n = a.toDataURL()).substring(n.indexOf(",") + 1), 1).then(function() {
                        e()
                    }, function(e) {
                        t(e)
                    })
                }
                ,
                r.src = m.a
            }
            )
        }
        var Cr = A.a
          , Rr = (De(Er = {}, "grubhub", p.a),
        De(Er, "seamless", h.a),
        De(Er, "yelp", p.a),
        De(Er, "eat24", E.a),
        De(Er, "groupon", p.a),
        Er);
        function Nr(e) {
            var t = e.brand
              , r = e.className
              , n = Rr[t] || p.a;
            return _.a.createElement("div", {
                className: C()("receipt-logo", r)
            }, _.a.createElement("div", null, _.a.createElement("img", {
                className: "receipt-logo__gfr",
                src: Cr,
                alt: "Grubhub for Restaurants"
            })), _.a.createElement("img", {
                className: "receipt-logo__brand",
                src: n,
                alt: "Logo"
            }))
        }
        Nr.propTypes = {
            brand: T.a.string,
            className: T.a.string
        },
        Nr.defaultProps = {
            brand: "grubhub"
        };
        var Sr = function(e) {
            var t = e.brand
              , r = e.isThermal
              , a = e.order
              , i = e.restaurantPhoneNumber
              , s = a.get("status") !== ut.ANTICIPATED
              , o = "receipt-printing-header"
              , c = "".concat(o, "--").concat(r ? "thermal" : "desktop");
            return _.a.createElement("section", {
                className: "".concat(o, " ").concat(c, " ").concat("receipt__text--type-scale-1")
            }, _.a.createElement("div", {
                className: "".concat(o, "__content")
            }, _.a.createElement("div", null, _.a.createElement("strong", null, a.get("merchantName"))), _.a.createElement("div", null, Object(n.V)(i)), _.a.createElement("br", null), s && _.a.createElement("div", null, "Confirmation code: ", _.a.createElement("strong", null, a.get("confirmationCode"))), _.a.createElement("div", null, "Order: ", _.a.createElement("strong", null, "#", a.get("orderNumber"))), _.a.createElement("div", null, "Received:", " ", _.a.createElement("strong", null, N()(a.get("timePlaced")).format("MMMM D, YYYY, h:mmA")))), _.a.createElement(Nr, {
                className: "".concat(o, "__logo"),
                brand: t
            }))
        };
        Sr.propTypes = {
            isThermal: T.a.bool,
            order: T.a.instanceOf(l.Map).isRequired,
            restaurantPhoneNumber: T.a.string.isRequired,
            brand: T.a.string.isRequired
        };
        var wr = function(e) {
            var t = e.children
              , r = e.isThermal
              , n = C()("banner-bar", "receipt__box-outline", De({}, "banner-bar--thermal", r));
            return _.a.createElement("section", {
                className: "".concat(n)
            }, t)
        };
        wr.propTypes = {
            isThermal: T.a.bool
        },
        wr.defaultProps = {
            isThermal: !1
        };
        var Dr = function(e) {
            var t = e.children;
            return _.a.createElement("div", {
                className: "".concat("banner-bar", "__top receipt__text--type-scale-1")
            }, t)
        }
          , Mr = function(e) {
            var t = e.children;
            return _.a.createElement("div", {
                className: "".concat("banner-bar", "__bottom receipt__text--type-scale-micro")
            }, t)
        }
          , kr = function(e) {
            var t = e.order
              , r = e.isThermal
              , n = "ACTIVE";
            return er(t) && (n = "CONFIRM NOW"),
            nr(t) && (n = rr(t) ? "CONFIRMED" : "PREVIEW"),
            _.a.createElement(wr, {
                isThermal: r
            }, _.a.createElement(Dr, null, "SCHEDULED ORDER: ", _.a.createElement("strong", null, n)))
        };
        kr.propTypes = {
            order: T.a.instanceOf(u.a.Map),
            isThermal: T.a.bool
        },
        kr.defaultProps = {
            isThermal: !1
        };
        var Lr = function(e) {
            var t = e.order
              , r = e.isThermal
              , n = t.get("statusHistory").find(function(e) {
                return e.get("status") === ut.CANCELLED
            });
            return _.a.createElement(wr, {
                isThermal: r
            }, _.a.createElement(Dr, null, "ORDER CANCELLATION"), _.a.createElement(Mr, null, "Cancelled", " ", N()(n.get("timestamp")).format("MMMM Do, h:mma")))
        };
        function jr(e) {
            var t = e.order
              , r = e.thermal;
            return t.get("status") === ut.CANCELLED ? _.a.createElement(Lr, {
                order: t,
                thermal: r
            }) : ir(t) ? _.a.createElement(kr, {
                order: t,
                thermal: r
            }) : null
        }
        function Pr(e) {
            var t = e.order
              , r = e.isThermal;
            if (!t.has("catering"))
                return null;
            var n = t.getIn(["catering", "estimatedAttendees"])
              , a = t.getIn(["catering", "setupFood"])
              , i = t.getIn(["catering", "setupInstructions"])
              , o = "INCLUDE" === t.get("diningSupplies")
              , c = "receipt-printing-catering-instructions"
              , l = "".concat(c, "--").concat(r ? "thermal" : "desktop");
            return _.a.createElement("section", {
                className: "".concat(c, " ").concat(l)
            }, _.a.createElement(s.t, {
                className: "".concat(c, "__title-box")
            }, _.a.createElement(s.l, {
                className: "".concat(c, "__title")
            }, "Catering order instructions:")), _.a.createElement(s.t, {
                className: "".concat(c, "__content-box")
            }, _.a.createElement(s.l, {
                width: 1,
                className: "".concat(c, "__icon-col")
            }, _.a.createElement("img", {
                src: w.a,
                className: "".concat(c, "__icon ").concat(c, "__icon-attendees")
            })), _.a.createElement(s.l, {
                width: 11,
                className: "".concat(c, "__catering-instructions receipt__text--type-scale-1")
            }, _.a.createElement("span", {
                className: "".concat(c, "__info__highlight")
            }, n), " ", "attendees")), _.a.createElement(s.t, {
                className: "".concat(c, "__content-box")
            }, _.a.createElement(s.l, {
                width: 1,
                className: "".concat(c, "__icon-col")
            }, _.a.createElement("img", {
                src: o ? M.a : L.a,
                className: "".concat(c, "__icon ").concat(c, "__icon-dining-supplies")
            })), _.a.createElement(s.l, {
                width: 11,
                className: "".concat(c, "__catering-instructions receipt__text--type-scale-1")
            }, _.a.createElement("span", {
                className: "".concat(c, "__info__highlight")
            }, o ? "Yes, " : "Don't "), "include plates, utensils, ", o ? "and" : "or", " ", "napkins")), _.a.createElement(s.t, {
                className: "".concat(c, "__content-box")
            }, _.a.createElement(s.l, {
                width: 1,
                className: "".concat(c, "__icon-col")
            }, _.a.createElement("img", {
                src: a ? M.a : L.a,
                className: "".concat(c, "__icon ").concat(c, "__icon-setup-food")
            })), _.a.createElement(s.l, {
                width: 11,
                className: "".concat(c, "__catering-instructions receipt__text--type-scale-1")
            }, _.a.createElement("span", {
                className: "".concat(c, "__info__highlight")
            }, a ? "Yes, " : "No "), "food setup required", a && _.a.createElement("span", {
                className: "".concat(c, "__new-line")
            }, i))))
        }
        Lr.propTypes = {
            order: T.a.instanceOf(u.a.Map),
            isThermal: T.a.bool
        },
        Lr.defaultProps = {
            isThermal: !1
        },
        jr.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            thermal: T.a.bool
        },
        jr.defaultProps = {
            thermal: !1
        },
        Pr.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var xr = "receipt-printing-contact-info";
        function Ur(e) {
            var t = e.title
              , r = e.name
              , a = e.phone
              , i = e.address
              , s = r.length > 0
              , o = a.length > 0
              , c = i && i.get("addressLine1");
            return s || o || c ? _.a.createElement("div", null, _.a.createElement("div", null, _.a.createElement("strong", null, t)), s && _.a.createElement("div", null, r), c && function(e) {
                var t = e.get("addressLine2")
                  , r = e.get("crossStreets");
                return _.a.createElement("div", null, _.a.createElement("div", null, e.get("addressLine1")), t && _.a.createElement("div", null, t), r && _.a.createElement("div", null, r), _.a.createElement("div", null, e.get("city"), ", ", e.get("state"), " ", e.get("zipCode")))
            }(i), o && function(e) {
                return _.a.createElement("div", {
                    className: "".concat(xr, "__phone receipt__text--type-scale-2")
                }, Object(n.V)(e))
            }(a)) : null
        }
        Ur.defaultProps = {
            name: "",
            phone: ""
        },
        Ur.propTypes = {
            title: T.a.string.isRequired,
            name: T.a.string,
            phone: T.a.string,
            address: T.a.instanceOf(l.Map)
        };
        var Fr = "receipt-printing-diner-info";
        function Br(e) {
            var t = e.order
              , r = e.isThermal
              , n = "".concat(Fr, "--").concat(r ? "receipt" : "desktop")
              , a = t.get("isPickup")
              , i = a ? "Pickup by:" : "Deliver to:"
              , o = t.getIn(["contactInfo", "name"])
              , c = t.getIn(["contactInfo", "phone"])
              , l = t.getIn(["delivery", "deliveryAddress"])
              , u = "Alternate ".concat(a ? "pickup" : "delivery", " contact:")
              , d = t.getIn(["catering", "alternateName"], "")
              , m = t.getIn(["catering", "alternatePhone"], "");
            return _.a.createElement("section", null, _.a.createElement(s.t, {
                nested: !0,
                flush: !0,
                className: "".concat(Fr, " ").concat(n, " receipt__box-outline receipt__text--type-scale-1")
            }, _.a.createElement(s.l, null, _.a.createElement(Ur, {
                title: i,
                name: o,
                phone: c,
                address: l
            })), _.a.createElement(s.l, null, _.a.createElement(Ur, {
                title: u,
                name: d,
                phone: m
            })), function(e) {
                var t = e.get("isPickup") ? "Pickup" : "Delivery";
                if (!e.get("specialInstructions"))
                    return null;
                return _.a.createElement(s.l, {
                    className: "".concat(Fr, "__order-instructions-wrapper")
                }, _.a.createElement("img", {
                    src: "Pickup" === t ? P.a : U.a,
                    className: "".concat(Fr, "__icon")
                }), _.a.createElement("div", {
                    className: "".concat(Fr, "__order-instructions")
                }, _.a.createElement("strong", null, t, " Instructions: "), _.a.createElement("span", null, e.get("specialInstructions"))))
            }(t)))
        }
        function zr(e) {
            var t = e.getIn(["delivery", "deliveryInfo", "times", "pickup"])
              , r = e.getIn(["delivery", "deliveryInfo", "preferences", "pickupTime"])
              , n = e.get("requestedFulfillmentAt");
            return t ? t.get("timestamp") : r || n
        }
        function Gr(e) {
            var t = e.getIn(["delivery", "estimatedDelivered"])
              , r = e.get("estimatedPreparedAt")
              , n = e.get("requestedFulfillmentAt");
            return e.getIn(["delivery", "grubhubDelivery"]) ? zr(e) : ir(e) ? n : t || r || n
        }
        function Yr(e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , a = e.getIn(["delivery", "deliveryInfo"])
              , i = e.get("isPickup")
              , s = e.getIn(["delivery", "grubhubDelivery"])
              , o = N()(r).startOf("day").isBefore(N()(t).endOf("day"))
              , c = function(e, t) {
                return e && t ? "Ready for pickup" : e ? "Pickup" : "Deliver"
            }(i, o)
              , l = "";
            return ir(e) ? !n && o && (l = "at") : l = "by",
            s && (c = a ? "Ready for driver" : "Promised",
            l = "by"),
            !n && t && r && Hr(t, r) && (l = "in"),
            l ? "".concat(c, " ").concat(l) : c
        }
        function Hr(e, t) {
            var r = N()(t).diff(N()(e), "seconds");
            return r <= It && r >= 60
        }
        function qr(e, t) {
            var r, a, i = Object(n.Ab)(t), s = (N()(e).diff(N()()) - i) / 6e4;
            return Math.round((r = s) % (a = 5) > a / 2 ? r + a - r % a : r - r % a)
        }
        Br.propTypes = {
            isThermal: T.a.bool,
            order: T.a.instanceOf(l.Map).isRequired
        };
        var Qr = function(e) {
            var t = e.order
              , r = e.isThermal
              , n = t.has("catering")
              , a = t.get("isPickup")
              , i = Gr(t)
              , o = "receipt-printing-timing-info"
              , c = "".concat(o, "--").concat(r ? "thermal" : "desktop")
              , l = "";
            return l = N()().isSame(N()(i), "day") ? n ? "CATERING" : a ? "PICKUP" : "DELIVERY" : "".concat(n ? "CATERING FOR" : a ? "PICKUP ON" : "DELIVER ON", " ").concat(N()(i).format("ddd").toUpperCase()),
            _.a.createElement("section", {
                className: "".concat(o, " ").concat(c)
            }, _.a.createElement(s.t, {
                nested: !0,
                flush: !0,
                className: "".concat(o, "__summary receipt__box-outline")
            }, _.a.createElement(s.l, {
                className: "".concat(o, "__service-type receipt__text--type-scale-3")
            }, _.a.createElement("img", {
                className: "".concat(o, "__icon"),
                src: a ? B.a : G.a
            }), _.a.createElement("strong", null, l))), _.a.createElement(s.t, {
                nested: !0,
                flush: !0,
                className: "".concat(o, "__timing-instructions-wrapper receipt__box-outline")
            }, _.a.createElement(s.l, {
                className: "".concat(o, "__timing-instructions receipt__text--type-scale-1")
            }, "".concat(Yr(t, Date.now(), i, !0), " "), _.a.createElement("strong", null, N()(i).format("MMMM D, YYYY, h:mma")))))
        };
        function Vr(e, t) {
            var r = "".concat("ddd, MMM D", ", ").concat("h:mma");
            return Hr(t, e) ? function(e, t) {
                var r = N()(e).diff(N()(t), "minutes")
                  , n = Math.floor(r / 60)
                  , a = r % 60;
                if (n)
                    return "".concat(n, " hr ").concat(a, " min");
                return "".concat(a, " min")
            }(e, t) : N()(e).calendar(t, {
                sameDay: "h:mma",
                nextDay: "[tomorrow], ".concat("h:mma"),
                nextWeek: r,
                lastDay: r,
                lastWeek: r,
                sameElse: r
            })
        }
        function Jr(e) {
            return Kr(e, {
                formatDay: function(e) {
                    return Wr(e, "day")
                },
                formatHour: function(e) {
                    return Wr(e, "hr")
                },
                formatMinute: function(e) {
                    return Wr(e, "min")
                }
            })
        }
        function Wr(e, t) {
            var r;
            return r = e + " " + t,
            e > 1 && (r += "s"),
            r
        }
        function Kr(e, t) {
            var r = Math.floor(e / 60 / 1e3)
              , n = Math.floor(r / 60)
              , a = Math.floor(n / 24);
            return a > 0 ? t.formatDay(a) : n > 0 ? t.formatHour(n) : r > 0 ? t.formatMinute(r) : ""
        }
        function Xr(e, t) {
            return e && t && e !== t ? e + "-" + t : e > 1 ? e.toString() : t > 1 ? t.toString() : null
        }
        function Zr(e) {
            return (e.getIn(["charges", "lineGroups", 0, "lines"]) || []).map(function(e) {
                return e.get("leadTimeMs")
            })
        }
        function $r(e) {
            return Zr(e).filter(function(e) {
                return e && e > 0
            }).size > 0
        }
        function en(e) {
            var t = Zr(e);
            return !!t.every(function(e) {
                return e > 0
            }) && 1 === new Set(t).size
        }
        function tn(e) {
            return "All menu items require a " + Kr(e, {
                formatDay: function(e) {
                    return e + " day"
                },
                formatHour: function(e) {
                    return e + " hour"
                },
                formatMinute: function(e) {
                    return e + " minute"
                }
            }) + " minimum advance notice."
        }
        function rn(e) {
            var t = e.order
              , r = e.isThermal;
            if (!en(t))
                return null;
            var n = t.getIn(["charges", "lineGroups", 0, "lines"]).getIn([0, "leadTimeMs"])
              , a = "receipt-printing-min-adv-notice"
              , i = "".concat(a, "--").concat(r ? "thermal" : "desktop");
            return _.a.createElement("section", {
                className: "".concat(a, " ").concat(i)
            }, _.a.createElement(s.t, {
                className: "".concat(a, "__content-box")
            }, _.a.createElement(s.l, {
                width: 1,
                className: "".concat(a, "__icon-col")
            }, _.a.createElement("img", {
                src: H.a,
                className: "".concat(a, "__icon")
            })), _.a.createElement(s.l, {
                width: 11,
                className: "".concat(a, "__info")
            }, _.a.createElement("div", {
                className: "".concat(a, "__info__highlight")
            }, "Minimum advance notice"), _.a.createElement("div", null, tn(n)))))
        }
        Qr.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            isThermal: T.a.bool
        },
        rn.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var nn = "receipt-printing-menu-item"
          , an = function(e) {
            var t = e.lineItem
              , r = e.isThermal
              , n = e.showMinAdvNotice
              , a = C()(nn, De({}, "".concat(nn, "--desktop"), !r))
              , i = Xr(t.get("minimumServingSize"), t.get("maximumServingSize"));
            return _.a.createElement(s.t, {
                className: a,
                justify: "left",
                flush: !0,
                nested: !0
            }, _.a.createElement(s.l, {
                width: 1
            }, _.a.createElement("strong", {
                className: "".concat(nn, "__qty receipt__text--type-scale-1")
            }, t.get("quantity"))), _.a.createElement(s.l, {
                width: n ? 7 : 8
            }, _.a.createElement("div", {
                className: "".concat(nn, "__name receipt__text--type-scale-2")
            }, _.a.createElement("strong", null, t.get("name"))), i && _.a.createElement("div", {
                className: "".concat(nn, "__serving-size receipt__text--type-scale-1")
            }, _.a.createElement("strong", null, "(serves ", i, ")")), function(e) {
                if (!e || 0 === e.size)
                    return null;
                var t = C()(["".concat(nn, "__options")], De({}, "".concat(nn, "__options--large-options"), e.size > 5));
                return _.a.createElement("ul", {
                    className: t
                }, e.map(function(e, t) {
                    return _.a.createElement("li", {
                        className: "".concat(nn, "__options--indent receipt__text--type-scale-1"),
                        key: "item-".concat(t, "-").concat(e.get("name"))
                    }, "• ", e.get("name"))
                }))
            }(t.get("lineOptions")), function(e) {
                if (!e)
                    return null;
                return _.a.createElement("div", {
                    className: "".concat(nn, "__special-instructions receipt__text--type-scale-1")
                }, "Instructions: ", e)
            }(t.get("specialInstructions"))), n && _.a.createElement(s.l, {
                width: 2,
                className: "".concat(nn, "__min-adv-notice receipt__text--type-scale-1")
            }, _.a.createElement("strong", null, Jr(t.get("leadTimeMs")))), _.a.createElement(s.l, {
                width: n ? 2 : 3,
                className: "".concat(nn, "__price receipt__text--type-scale-1")
            }, _.a.createElement("strong", null, Q()(t.get("total")).format("$0,0.00"))))
        };
        an.propTypes = {
            lineItem: T.a.instanceOf(l.Map).isRequired,
            isThermal: T.a.bool,
            showMinAdvNotice: T.a.bool
        },
        an.defaultProps = {
            isThermal: !1
        };
        var sn = "receipt-printing-line-items"
          , on = function(e) {
            var t = e.order
              , r = e.isThermal
              , n = $r(t) && !en(t)
              , a = C()(sn, De({}, "".concat(sn, "--desktop"), !r))
              , i = t.getIn(["charges", "lineGroups", 0, "lines"]) || Object(l.fromJS)([]);
            return _.a.createElement("section", {
                className: a
            }, _.a.createElement(s.t, {
                className: "".concat(sn, "__row receipt__text--type-scale-micro"),
                justify: "left",
                flush: !0,
                nested: !0
            }, _.a.createElement(s.l, {
                width: 1
            }, "Qty"), _.a.createElement(s.l, {
                width: n ? 5 : 8
            }, _.a.createElement("div", {
                className: "".concat(sn, "__row--indent")
            }, "Description")), n && _.a.createElement(s.l, {
                width: 4,
                className: "".concat(sn, "__row--right-align")
            }, "Min adv notice"), _.a.createElement(s.l, {
                width: n ? 2 : 3,
                className: "".concat(sn, "__row--right-align")
            }, "Price")), function(e, t, r) {
                return e.map(function(e, n) {
                    return _.a.createElement(an, {
                        lineItem: e,
                        isThermal: r,
                        showMinAdvNotice: t,
                        key: "item-".concat(n, "-").concat(e.get("name"))
                    })
                })
            }(i, n, r))
        };
        on.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            isThermal: T.a.bool
        },
        on.defaultProps = {
            isThermal: !1
        };
        var cn = "receipt-printing-coupon"
          , ln = function(e) {
            var t = e.order
              , r = e.isThermal
              , n = t.getIn(["charges", "coupons", 0, "text"]) || null
              , a = -1 * t.getIn(["charges", "coupons", 0, "amount"]) || null
              , i = C()(cn, De({}, "".concat(cn, "--desktop"), !r));
            return n || a ? _.a.createElement("section", {
                className: i
            }, _.a.createElement(s.t, {
                className: "".concat(cn, "__row"),
                justify: "left",
                flush: !0,
                align: "center",
                nested: !0
            }, _.a.createElement(s.l, {
                className: "".concat(cn, "__row__img"),
                width: 1
            }, _.a.createElement("img", {
                src: J.a
            })), _.a.createElement(s.l, {
                width: 8
            }, _.a.createElement("div", {
                className: "".concat(cn, "__row__description")
            }, _.a.createElement("strong", {
                className: "receipt__text--type-scale-1"
            }, n))), _.a.createElement(s.l, {
                width: 3,
                className: "".concat(cn, "__row__right-column receipt__text--type-scale-1")
            }, _.a.createElement("strong", null, Q()(a).format("-$0,0.00"))))) : null
        };
        ln.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            isThermal: T.a.bool
        },
        ln.defaultProps = {
            isThermal: !1
        };
        var un = "receipt-printing-dining-supplies-info"
          , dn = function(e) {
            var t = e.order
              , r = e.isThermal
              , n = t.has("catering")
              , a = C()(un, De({}, "".concat(un, "--desktop"), !r));
            return n ? null : _.a.createElement("section", {
                className: a
            }, _.a.createElement(s.t, {
                className: "".concat(un, "__row"),
                justify: "left",
                flush: !0,
                align: "center"
            }, _.a.createElement(s.l, {
                className: "".concat(un, "__row__img"),
                width: 1
            }, _.a.createElement("img", {
                src: K.a
            })), _.a.createElement(s.l, {
                width: 9
            }, _.a.createElement("div", {
                className: "".concat(un, "__row__text receipt__text--type-scale-micro")
            }, "Include napkins and utensils?")), _.a.createElement(s.l, {
                width: 2,
                className: "".concat(un, "__row__right-column receipt__text--type-scale-1")
            }, _.a.createElement("strong", null, t.get("diningSupplies") === Tt ? "YES" : "NO"))))
        };
        dn.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            isThermal: T.a.bool
        },
        dn.defaultProps = {
            isThermal: !1
        };
        var mn = "receipt-printing-charges-row";
        function gn(e) {
            var t = e.title
              , r = e.value
              , n = e.valueClass
              , a = e.titleClass
              , i = e.isThermal
              , o = "number" == typeof r
              , c = "".concat(n, " receipt-printing-charges-row__right-column")
              , l = C()(mn, De({}, "".concat(mn, "--desktop"), !i));
            return _.a.createElement(s.t, {
                justify: "right",
                align: "bottom",
                nested: !0,
                flush: !0,
                className: l
            }, _.a.createElement(s.l, {
                className: a,
                width: 8
            }, t), _.a.createElement(s.l, {
                className: c,
                width: 4
            }, o ? _.a.createElement("strong", null, Q()(r).format("$0,0.00")) : r))
        }
        function pn(e) {
            return e.getIn(["orders", "unconfirmedOrders"])
        }
        function fn(e) {
            return e.getIn(["orders", "inHouseOrders"])
        }
        function hn(e) {
            return e.getIn(["page", "data", "scheduledOrders"])
        }
        function vn(e) {
            return e.getIn(["page", "data", "outTheDoorOrders"])
        }
        function En(e, t, r, a, i) {
            var s = Object(n.db)(a, r) || Object(l.Map)()
              , o = s.get("orderTypeSettings")
              , c = Cn(i)
              , u = Object(X.b)(e, t, o, c);
            if (yn(a, i)) {
                u += s.getIn(["orderTypeSettings", c, "leadTimeSettingsTiers", -1, "additionalPrepTime"], 0)
            }
            return ir(i) && i.get("beforeLeadTimeWindow") && (u = -1),
            u
        }
        function yn(e, t) {
            var r = Object(n.db)(e, t.get("shortMerchantId")) || Object(l.Map)()
              , a = Object(n.Cb)(e, "LARGE_ORDER")
              , i = r.getIn(["orderTypeSettings", Cn(t), "leadTimeSettingsTiers", -1, "threshold"]);
            i && (a = i);
            var s = a / 100;
            return t.getIn(["charges", "subTotal"]) > s
        }
        function An(e, t) {
            return t.some(function(t) {
                return yn(e, t)
            })
        }
        function bn(e) {
            return _n(Object(n.hb)(e))
        }
        function _n(e) {
            return !(!e || !e.find(function(e) {
                return "merchant.orders.retrieve" === e.get("claim")
            }))
        }
        function On(e, t) {
            var r = !yn(t, e)
              , n = e.getIn(["delivery", "grubhubDelivery"])
              , a = !e.get("catering")
              , i = "ASAP" === e.get("fulfillmentScheduling");
            return r && n && a && i
        }
        function Tn(e) {
            var t = Object(n.Cb)(e, "SUGGESTED_PREP_TIME_BUTTON_OFFSETS");
            return [t.get("left"), t.get("middle"), t.get("right")]
        }
        function In(e) {
            var t = Object(n.Cb)(e, "PICKUP_FEASIBILITY_BUTTON_OFFSETS");
            return [t.get("left"), t.get("middle"), t.get("right")]
        }
        function Cn(e) {
            return e.get("catering") ? "catering" : "standard"
        }
        function Rn(e) {
            return e.getIn(["charges", "restaurantGrandTotal"])
        }
        function Nn(e) {
            return e.getIn(["charges", "taxes", "restaurantDisplay"])
        }
        gn.propTypes = {
            title: T.a.string.isRequired,
            value: T.a.oneOfType([T.a.string, T.a.number]).isRequired,
            valueClass: T.a.string,
            titleClass: T.a.string,
            isThermal: T.a.bool
        },
        gn.defaultProps = {
            valueClass: "receipt__text--type-scale-1",
            titleClass: "receipt__text--type-scale-micro",
            isThermal: !1
        };
        var Sn = "receipt-printing-charges";
        function wn(e) {
            var t = e.order
              , r = e.isThermal
              , n = !t.getIn(["charges", "tipAmount"])
              , a = n ? "Cash Tip" : t.getIn(["charges", "tipAmount"])
              , i = n ? "receipt__text--type-scale-micro" : void 0;
            return _.a.createElement("section", {
                className: Sn
            }, _.a.createElement(s.t, {
                flush: !0
            }, _.a.createElement(s.l, null, _.a.createElement(gn, {
                title: "Subtotal",
                value: t.getIn(["charges", "subTotal"]),
                isThermal: r
            })), function(e, t) {
                if (e.get("isPickup") || e.getIn(["delivery", "grubhubDelivery"]))
                    return null;
                return _.a.createElement(s.l, null, _.a.createElement(gn, {
                    title: "Delivery Fee",
                    value: e.getIn(["charges", "deliveryFee"]),
                    isThermal: t
                }))
            }(t, r), function(e, t) {
                var r = Nn(e);
                return _.a.createElement(s.l, null, _.a.createElement(gn, {
                    title: "Tax",
                    value: r,
                    isThermal: t
                }))
            }(t, r), function(e, t, r, n) {
                if (e.getIn(["delivery", "grubhubDelivery"]))
                    return null;
                return _.a.createElement(s.l, null, _.a.createElement(gn, {
                    title: "Tip",
                    value: t,
                    valueClass: r,
                    isThermal: n
                }))
            }(t, a, i, r), function(e, t) {
                var r = Rn(e);
                return _.a.createElement(s.l, {
                    className: "".concat(Sn, "__tip-row")
                }, _.a.createElement(gn, {
                    title: "RESTAURANT TOTAL",
                    value: r,
                    valueClass: "receipt__text--type-scale-2",
                    titleClass: "receipt__text--type-scale-1",
                    isThermal: t
                }))
            }(t, r)))
        }
        wn.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            isThermal: T.a.bool
        },
        wn.defaultProps = {
            isThermal: !1
        };
        var Dn = "receipt-printing-payment-type";
        function Mn(e) {
            var t = e.order
              , r = e.isThermal
              , n = t.get("isPickup")
              , a = t.getIn(["payments", "paymentType"])
              , i = !a || "cash" === a.toLowerCase()
              , o = i ? "CASH ORDER" : "PREPAID"
              , c = i ? "COLLECT CASH ON ".concat(n ? "PICKUP" : "DELIVERY") : "DO NOT CHARGE"
              , l = C()(Dn, De({}, "".concat(Dn, "--desktop"), !r));
            return _.a.createElement("section", {
                className: l
            }, _.a.createElement(s.t, {
                className: "receipt__box-outline ".concat(Dn, "__box"),
                nested: !0,
                flush: !0
            }, r ? null : _.a.createElement(s.l, {
                width: 1,
                className: "".concat(Dn, "__icon")
            }, _.a.createElement("img", {
                src: $.a
            })), _.a.createElement(s.l, {
                className: "".concat(Dn, "__text-wrapper"),
                width: 11
            }, _.a.createElement(s.t, {
                nested: !0,
                flush: !0,
                justify: "left"
            }, _.a.createElement(s.l, {
                className: "".concat(Dn, "__title receipt__text--type-scale-2")
            }, _.a.createElement("strong", null, o)), _.a.createElement(s.l, {
                className: "".concat(Dn, "__instructions receipt__text--type-scale-micro")
            }, c)))))
        }
        Mn.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            isThermal: T.a.bool
        },
        Mn.defaultProps = {
            isThermal: !1
        };
        var kn = function(e) {
            var t, r = e.order, n = "receipt-printing-end-of-order";
            return r.get("status") === ut.ANTICIPATED && (t = "We will remind you to confirm this order nearer to its scheduled time.\n        The diner may continue to edit or cancel the order until then."),
            rr(r) && (t = "This order will become active closer to its scheduled time."),
            _.a.createElement("section", {
                className: n
            }, _.a.createElement(s.t, null, _.a.createElement(s.l, {
                className: "".concat(n, "__header receipt__text--type-scale-1")
            }, "END OF ORDER"), t && _.a.createElement(s.l, {
                className: "receipt__text--type-scale-micro"
            }, _.a.createElement("p", null, t))))
        };
        kn.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var Ln = "desktop-printing-wrapper";
        function jn(e) {
            var t = e.order
              , r = e.restaurantPhoneNumber
              , n = t.get("brand").toLowerCase();
            return _.a.createElement("div", {
                className: "print-wrapper ".concat(Ln)
            }, _.a.createElement(Sr, {
                order: t,
                restaurantPhoneNumber: r,
                brand: n
            }), _.a.createElement(jr, {
                order: t
            }), _.a.createElement("div", {
                className: "".concat(Ln, "__column ").concat(Ln, "__column--left")
            }, _.a.createElement(Qr, {
                order: t
            }), _.a.createElement(Pr, {
                order: t
            }), _.a.createElement(rn, {
                order: t
            }), _.a.createElement(on, {
                order: t
            }), _.a.createElement(ln, {
                order: t
            }), _.a.createElement(dn, {
                order: t
            }), _.a.createElement(wn, {
                order: t
            }), _.a.createElement(Mn, {
                order: t
            }), _.a.createElement(kn, {
                order: t
            })), _.a.createElement("div", {
                className: "".concat(Ln, "__column ").concat(Ln, "__column--right")
            }, _.a.createElement(Br, {
                order: t
            })))
        }
        jn.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            restaurantPhoneNumber: T.a.string.isRequired
        };
        var Pn = "receipt-printing-footer";
        function xn(e) {
            var t = e.brand
              , r = e.restaurantCareNumber;
            return _.a.createElement("section", {
                className: Pn
            }, _.a.createElement(s.t, {
                nested: !0,
                flush: !0,
                justify: "center"
            }, _.a.createElement(s.l, {
                className: "".concat(Pn, "__row")
            }, _.a.createElement(Nr, {
                brand: t,
                className: "".concat(Pn, "__logo")
            })), _.a.createElement(s.l, {
                className: "".concat(Pn, "__row ").concat(Pn, "__row--phone")
            }, "Customer Care: ", r)))
        }
        function Un(e) {
            var t = e.order
              , r = e.restaurantCareNumber
              , n = e.restaurantPhoneNumber
              , a = t.get("brand").toLowerCase();
            return _.a.createElement("div", {
                className: "print-wrapper thermal-printing-wrapper"
            }, _.a.createElement("div", {
                className: "thermal-printing-wrapper__content"
            }, _.a.createElement(jr, {
                order: t,
                isThermal: !0
            }), _.a.createElement(Sr, {
                order: t,
                restaurantPhoneNumber: n,
                brand: a,
                isThermal: !0
            }), _.a.createElement(Qr, {
                order: t,
                isThermal: !0
            }), _.a.createElement(Br, {
                order: t,
                isThermal: !0
            }), _.a.createElement(Pr, {
                order: t,
                isThermal: !0
            }), _.a.createElement(rn, {
                order: t,
                isThermal: !0
            }), _.a.createElement(on, {
                order: t,
                isThermal: !0
            }), _.a.createElement(ln, {
                order: t,
                isThermal: !0
            }), _.a.createElement(dn, {
                order: t,
                isThermal: !0
            }), _.a.createElement(wn, {
                order: t,
                isThermal: !0
            }), _.a.createElement(Mn, {
                order: t,
                isThermal: !0
            }), _.a.createElement(xn, {
                order: t,
                brand: a,
                restaurantCareNumber: r,
                isThermal: !0
            })))
        }
        function Fn(e, t) {
            return new Promise(function(r) {
                var a = n.Y.isGCInABox()
                  , i = document.createElement("div");
                a || (i.style.cssText = "width:1400px;"),
                te.a.render(function(r) {
                    var a = t()
                      , i = e.get("shortMerchantId")
                      , s = Object(n.db)(a, i)
                      , o = Object(n.wb)(a)
                      , c = s.get("phoneNumber");
                    return r ? _.a.createElement(Un, {
                        order: e,
                        restaurantPhoneNumber: c,
                        restaurantCareNumber: o
                    }) : _.a.createElement(jn, {
                        order: e,
                        restaurantPhoneNumber: c
                    })
                }(a), i),
                document.body.appendChild(i),
                window.html2canvas(i, {
                    onrendered: function(e) {
                        var t = e.toDataURL().replace("data:image/png;base64,", "");
                        document.body.removeChild(i),
                        r(t)
                    }
                })
            }
            )
        }
        function Bn(e, t, r, n) {
            var a = function(e, t) {
                return Object(l.fromJS)([pn(t) || [], fn(t) || [], hn(t) || [], vn(t) || []]).flatten(!0).find(function(t) {
                    return t.get("uuid") === e
                })
            }(e, r());
            return a ? Promise.resolve(a) : function(e, t, r, n) {
                return jt("merchant/".concat(t, "/orders/order/").concat(e), r, n)
            }(e, t, r, n).then(function(e) {
                return Object(l.fromJS)(e)
            })
        }
        function zn(e, t, r, a, i, s) {
            var o;
            return Bn(e, t, i, s).then(function(e) {
                return Fn(o = e.set("auto", a), i)
            }).then(function(e) {
                return Tr(e, r)
            }).then(function() {
                return o.get("status") === ut.ANTICIPATED && !$t(o) && function(e, t, r) {
                    function a() {
                        var a = "/merchant/".concat(e.get("shortMerchantId"), "/orders/").concat(e.get("uuid"), "/printed");
                        return n.X.makeAuthenticatedRequest(a, {
                            method: "PUT"
                        }, t(), r)
                    }
                    a().catch(a)
                }(o, i, s),
                {
                    order: o
                }
            })
        }
        function Gn(e, t, r) {
            return function(e, t, r, a) {
                var i = "transmission/router/merchant/".concat(t, "/transmit?method=fax")
                  , s = {
                    method: "POST",
                    body: {
                        orderUuid: e
                    }
                };
                return n.X.makeAuthenticatedRequest(i, s, r(), a)
            }(e.get("uuid"), e.get("shortMerchantId"), t, r).then(function() {
                s.a.sendAlert(Ct.faxResendSuccess())
            }, function(t) {
                throw s.a.sendAlert(Ct.faxResendFailed(e.get("orderNumber"))),
                t
            })
        }
        function Yn(e) {
            return {
                orderUuid: e.get("uuid"),
                orderApiHash: e.get("statusVersionUuid") ? {
                    string: e.get("statusVersionUuid")
                } : null,
                orderMosHash: e.get("merchantOrderVersion") ? {
                    string: e.get("merchantOrderVersion")
                } : null,
                restaurantId: {
                    string: e.get("shortMerchantId")
                }
            }
        }
        xn.propTypes = {
            brand: T.a.string.isRequired
        },
        Un.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            restaurantPhoneNumber: T.a.string.isRequired,
            restaurantCareNumber: T.a.string.isRequired
        };
        var Hn = function(e) {
            function t(e, r) {
                return Ne(this, t),
                Fe(this, je(t).call(this, "orderViewedOrPrinted", 1, e, r))
            }
            return Le(t, n["c"]),
            we(t, [{
                key: "getData",
                value: function(e, t) {
                    var r = t.order
                      , n = t.viewOrPrintType
                      , a = t.firedFrom;
                    return {
                        orderUuid: r.get("uuid"),
                        viewOrPrintType: n,
                        orderIdSnapshot: {
                            "gfr.orderIdSnapshot": Yn(r)
                        },
                        firedFrom: {
                            string: a
                        }
                    }
                }
            }]),
            t
        }();
        function qn(e) {
            return e ? e.reduce(function(e, t) {
                return e[t.get("id")] = t.get("faxEnabled"),
                e
            }, {}) : {}
        }
        function Qn(e, t) {
            var r = function(e) {
                var t = n.Y.isGCInABox() ? "ORDER_PRINTED" : "ORDER_PRINT_DIALOG_OPENED"
                  , r = e.get("auto") ? "PRINT_AUTOMATIC" : "PRINT_REPRINT";
                e.get("status") === ut.ANTICIPATED && (r = "PRINT_PREPRINT");
                return {
                    order: e,
                    viewOrPrintType: t,
                    firedFrom: r
                }
            }(e);
            Object(n.Ub)(Hn, t, r)
        }
        var Vn = Object(l.fromJS)({
            autoPrintEnabled: !1,
            autoPrintCopies: 0,
            queue: [],
            error: null,
            showPrintConsole: !1,
            running: !1,
            reprintingScheduledOrders: []
        });
        function Jn() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vn
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case n.Yb.loadSubappComplete:
                return t.isLoggedIn ? Object(re.f)(Vn, re.a.run(br, {
                    successActionCreator: gr,
                    args: [re.a.getState]
                })) : e;
            case n.F.applicationInitialized:
                return Object(re.f)(Vn, re.a.run(br, {
                    successActionCreator: gr,
                    args: [re.a.getState]
                }));
            case mr.autoPrintSettingsRetrieved:
                return e.merge({
                    autoPrintEnabled: t.enabled,
                    autoPrintCopies: t.copies
                });
            case mr.setAutoPrintSettings:
                return function(e, t) {
                    var r = e.merge({
                        autoPrintEnabled: t.enabled,
                        autoPrintCopies: t.copies
                    });
                    return Object(re.f)(r, re.a.run(_r, {
                        args: [t.enabled, t.copies]
                    }))
                }(e, t);
            case mr.printOrders:
                return function(e, t) {
                    var r = t.orders
                      , n = t.auto
                      , a = t.associatedRestaurants
                      , i = t.gcInABoxUtils;
                    if (n && !e.get("autoPrintEnabled"))
                        return e;
                    var s, o, c = e.get("error"), u = e.get("running"), d = qn(a), m = i.isGCInABox && !i.hasConnectedPrinter, g = [], p = e.get("queue"), f = r.map(function(e) {
                        return Object(l.fromJS)({
                            uuid: e.get("uuid"),
                            custId: e.get("shortMerchantId"),
                            orderNumber: e.get("orderNumber"),
                            label: e.getIn(["contactInfo", "name"]),
                            auto: n
                        })
                    });
                    s = n || !c ? p.concat(f) : u ? p.splice.apply(p, [1, 0].concat(Be(f.toArray()))) : f.concat(p);
                    u || c ? (o = e.set("queue", s),
                    c && (o = o.merge({
                        showPrintConsole: !0
                    }))) : (o = e.merge({
                        running: !0,
                        queue: s
                    }),
                    g.push(Wn(o, d, m)));
                    if (n)
                        g.push(re.a.action(function(e) {
                            return {
                                type: mr.showReprintScheduledOrderModal,
                                orders: Object(l.fromJS)(e)
                            }
                        }(r)));
                    else {
                        var h = r.get(0)
                          , v = s.get(0)
                          , E = d && d[v.get("custId")];
                        E && g.push(re.a.run(Gn, {
                            args: [h, re.a.getState, re.a.dispatch],
                            forceSync: !0
                        }))
                    }
                    return Object(re.f)(o, re.a.list(g))
                }(e, t);
            case mr.printSuccess:
                return function(e, t) {
                    var r = t.order
                      , n = t.associatedRestaurants
                      , a = t.gcInABoxUtils
                      , i = a.isGCInABox && !a.hasConnectedPrinter
                      , s = qn(n)
                      , o = e.get("queue")
                      , c = o.size > 1
                      , l = e.merge({
                        queue: o.shift(),
                        error: null,
                        running: c,
                        showPrintConsole: !1
                    })
                      , u = [];
                    r && u.push(re.a.run(Qn, {
                        args: [r, re.a.getState]
                    }));
                    c && u.push(Wn(l, s, i));
                    return Object(re.f)(l, re.a.list(u))
                }(e, t);
            case mr.printFailed:
                return function(e, t) {
                    var r = t.error
                      , n = r && r.resultCode || "Unknown"
                      , a = e.get("queue");
                    return e.merge({
                        running: !1,
                        queue: a.filter(function(e) {
                            return !e.get("isTest")
                        }),
                        error: n,
                        showPrintConsole: !a.getIn([0, "isTest"])
                    })
                }(e, t);
            case mr.resumePrinting:
                return function(e, t) {
                    var r = t.associatedRestaurants
                      , n = t.gcInABoxUtils;
                    if (e.get("running"))
                        return e;
                    var a = n.isGCInABox && !n.hasConnectedPrinter
                      , i = qn(r)
                      , s = e.merge({
                        running: !0,
                        showPrintConsole: !1
                    });
                    return Object(re.f)(s, Wn(s, i, a))
                }(e, t);
            case mr.sendTestPrint:
                return function(e) {
                    var t, r = e.get("queue"), n = Object(l.fromJS)({
                        isTest: !0
                    });
                    r.getIn([0, "isTest"]) ? t = r : (t = r.filter(function(e) {
                        return !e.get("isTest")
                    }),
                    t = e.get("running") ? t.insert(1, n) : t.unshift(n));
                    if (e.get("running"))
                        return e.set("queue", t);
                    var a = e.merge({
                        queue: t,
                        running: !0
                    });
                    return Object(re.f)(a, Wn(a))
                }(e);
            case mr.clearQueue:
                return function(e) {
                    return e.merge({
                        queue: [],
                        error: null,
                        running: !1,
                        showPrintConsole: !1
                    })
                }(e);
            case mr.showPrintConsole:
                return e.get("error") ? e.merge({
                    showPrintConsole: !0
                }) : e;
            case mr.hidePrintConsole:
                return e.merge({
                    showPrintConsole: !1
                });
            case n.I.clear:
                return e.merge(Vn);
            case n.gc.updateUser:
                return t.shouldRefreshData ? e.merge(Vn) : e;
            case mr.showReprintScheduledOrderModal:
                return function(e, t) {
                    if (t.orders.size < 1)
                        return e;
                    var r = e.get("reprintingScheduledOrders")
                      , n = t.orders.filter(function(e) {
                        return e.get("printedAt") && ir(e) && er(e)
                    });
                    return e.merge({
                        reprintingScheduledOrders: [].concat(Be(r), Be(n))
                    })
                }(e, t);
            case mr.closeReprintScheduledOrderModal:
                return function(e, t) {
                    var r = e.merge({
                        reprintingScheduledOrders: Vn.get("reprintingScheduledOrders")
                    });
                    if (!t.redirect)
                        return r;
                    return Object(re.f)(r, re.a.action(Object(ne.push)("/orders")))
                }(e, t);
            default:
                return e
            }
        }
        function Wn(e, t, r) {
            var n = e.getIn(["queue", 0])
              , a = n.get("auto") ? e.get("autoPrintCopies") : 1
              , i = t && t[n.get("custId")];
            return n.get("isTest") ? re.a.run(Ir, {
                successActionCreator: fr,
                failActionCreator: hr
            }) : i && r ? re.a.run(Bn, {
                successActionCreator: fr,
                failActionCreator: fr,
                args: [n.get("uuid"), n.get("custId"), re.a.getState, re.a.dispatch]
            }) : re.a.run(zn, {
                successActionCreator: fr,
                failActionCreator: hr,
                args: [n.get("uuid"), n.get("custId"), a, n.get("auto"), re.a.getState, re.a.dispatch]
            })
        }
        var Kn = {
            changeRating: "RATE_DRIVER_FORM_CHANGE_RATING",
            toggleComment: "RATE_DRIVER_FORM_TOGGLE_COMMENT",
            reset: "RATE_DRIVER_FORM_RESET",
            submit: "RATE_DRIVER_FORM_SUBMIT",
            submitSucceeded: "RATE_DRIVER_FORM_SUBMIT_SUCCEEDED",
            submitFailed: "RATE_DRIVER_FORM_SUBMIT_FAILED"
        }
          , Xn = function(e, t) {
            return {
                type: Kn.changeRating,
                name: e,
                newRating: t
            }
        }
          , Zn = function(e, t) {
            return {
                type: Kn.toggleComment,
                name: e,
                comment: t
            }
        }
          , $n = function(e) {
            return {
                type: Kn.reset,
                name: e
            }
        }
          , ea = function(e, t) {
            return {
                type: Kn.submit,
                name: e,
                deliveryDetails: t
            }
        }
          , ta = function(e) {
            return {
                type: Kn.submitSucceeded,
                name: e
            }
        }
          , ra = function(e) {
            return {
                type: Kn.submitFailed,
                name: e
            }
        }
          , na = "ratedriver_drawer_ratestars"
          , aa = "RATE_DRIVER_DRAWER_SHOW"
          , ia = "RATE_DRIVER_DRAWER_NEXT"
          , sa = "RATE_DRIVER_DRAWER_HIDE"
          , oa = "RATE_DRIVER_DRAWER_AUTOHIDE"
          , ca = Kn.changeRating
          , la = (Kn.toggleComment,
        Kn.reset,
        Kn.submit,
        Kn.submitSucceeded)
          , ua = "RATE_DRIVER_DRAWER_CHECK_AND_FETCH_RATABLE_COURIERS"
          , da = "RATE_DRIVER_DRAWER_START_CHECK_AND_FETCH_RATABLE_COURIERS_INTERVAL"
          , ma = "RATE_DRIVER_DRAWER_COURIERS_TO_RATE_INTERVAL_STARTED"
          , ga = function(e) {
            return {
                type: ma,
                intervalId: e
            }
        }
          , pa = function(e) {
            return {
                type: aa,
                couriersToRate: e
            }
        }
          , fa = function(e) {
            return {
                type: ia,
                couriersToRate: e
            }
        }
          , ha = function() {
            return {
                type: sa
            }
        }
          , va = function() {
            return {
                type: oa
            }
        }
          , Ea = function(e) {
            return Xn(na, e)
        }
          , ya = function() {
            return $n(na)
        }
          , Aa = function(e) {
            return ea(na, e)
        }
          , ba = function() {
            return {
                type: ua
            }
        }
          , _a = function(e) {
            return {
                type: da,
                interval: e
            }
        }
          , Oa = function(e) {
            function t(e, r) {
                return Ne(this, t),
                Fe(this, je(t).call(this, "courierRatingSubmitted", 1, e, r))
            }
            return Le(t, n["c"]),
            we(t, [{
                key: "getData",
                value: function(e, t) {
                    var r = t.restaurantId
                      , n = t.selectedRating
                      , a = t.maxPossibleRating
                      , i = t.firedFrom;
                    return {
                        restaurantId: r,
                        selectedRating: n,
                        maxPossibleRating: a,
                        firedFrom: i ? {
                            string: i
                        } : null
                    }
                }
            }]),
            t
        }()
          , Ta = 2
          , Ia = 4;
        function Ca(e, t, r, a) {
            var i = t.courierId
              , o = t.merchantId
              , c = t.deliveryId
              , l = e.get("name")
              , u = "/couriers/v1/".concat(i, "/ratings")
              , d = {
                method: "POST",
                body: {
                    id: ie.a.v4(),
                    rating: e.get("selectedRating"),
                    merchantId: o,
                    deliveryId: c,
                    comments: "",
                    keywords: e.get("selectedComments").toArray()
                }
            };
            return Object(n.Ub)(Oa, r, {
                firedFrom: l,
                restaurantId: o,
                selectedRating: e.get("selectedRating"),
                maxPossibleRating: 5
            }),
            n.X.makeAuthenticatedRequest(u, d, r(), a).then(function() {
                return l
            }, function() {
                return s.a.sendAlert(Ct.rateDriveModalSubmitFailed()),
                Promise.reject(l)
            })
        }
        function Ra(e) {
            return e = Number(e),
            isNaN(e) ? [] : e <= Ta ? ["Bad Attitude", "Late", "Careless"] : e >= Ia ? ["Good Attitude", "On Time", "Careful"] : []
        }
        function Na(e) {
            var t = Object(l.fromJS)({
                name: e,
                isLoading: !1,
                isSuccess: !1,
                selectedRating: 0,
                selectedComments: Object(l.Set)([])
            });
            return function() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t
                  , n = arguments.length > 1 ? arguments[1] : void 0;
                if (n.name !== e)
                    return r;
                switch (n.type) {
                case Kn.changeRating:
                    return function(e, t) {
                        var r = t.newRating
                          , n = Ra(r)
                          , a = e.get("selectedComments").intersect(n);
                        return e.merge({
                            selectedRating: r,
                            selectedComments: a
                        })
                    }(r, n);
                case Kn.toggleComment:
                    return function(e, t) {
                        var r = t.comment
                          , n = e.get("selectedComments")
                          , a = n.includes(r) ? n.delete(r) : n.add(r);
                        return e.set("selectedComments", a)
                    }(r, n);
                case Kn.reset:
                    return t;
                case Kn.submit:
                    return function(e, t) {
                        var r = t.deliveryDetails
                          , n = e.set("isLoading", !0)
                          , a = re.a.run(Ca, {
                            args: [e, r, re.a.getState, re.a.dispatch],
                            successActionCreator: ta,
                            failActionCreator: ra
                        });
                        return Object(re.f)(n, a)
                    }(r, n);
                case Kn.submitSucceeded:
                    return r.merge({
                        isLoading: !1,
                        isSuccess: !0
                    });
                case Kn.submitFailed:
                    return r.set("isLoading", !1);
                default:
                    return r
                }
            }
        }
        function Sa(e) {
            return e.getIn(["orders", "rateDriverDrawer"])
        }
        var wa = {
            method: "GET"
        };
        function Da(e, t, r) {
            var a = t();
            return e.size < 1 ? Promise.reject() : function(e, t, r) {
                var a = "/merchant/".concat(e.map(function(e) {
                    return e.get("id")
                }).join(","), "/orders/deliveries/ratable");
                return n.X.makeAuthenticatedRequest(a, wa, t, r).then(function(e) {
                    return e.data
                })
            }(e, a, r).then(function(e) {
                var t = i.a.flatten(i.a.values(e));
                return n.X.makeAuthenticatedRequest("/couriers/v1/couriersToRate", {
                    method: "POST",
                    body: t
                }, a, r).then(function(e) {
                    return e.data
                })
            })
        }
        var Ma = 30
          , ka = 1
          , La = 3;
        function ja(e, t) {
            var r = e();
            return function(e) {
                var t = Object(n.fb)(e);
                if (!t)
                    return !0;
                var r = t.size > 5
                  , a = !t.find(function(e) {
                    return !0 === e.get("managedDelivery")
                });
                if (r || a)
                    return !0;
                var i = Sa(e)
                  , s = i.get("lastOpened") > N()().subtract(ka, "hour").toDate()
                  , o = i.get("timePlacedForRecentOrders").filter(function(e) {
                    return N()().diff(e, "minutes") < Ma
                }).size > 1;
                return s || o
            }(r) ? Promise.reject() : Da(Object(n.cb)(r), e, t).then(function(e) {
                var t = Sa(r)
                  , n = t.get("lastOpened")
                  , a = N()().subtract(La, "hours").toDate()
                  , s = Math.max(n, a)
                  , o = i.a.chain(e).groupBy("courierId").map(function(e) {
                    return i.a.maxBy(e, "lastPickupTime")
                }).filter(function(e) {
                    return function(e) {
                        return N()(e.lastPickupTime).toDate() > s
                    }(e) && !function(e) {
                        return t.get("shownCourierIds").contains(e.courierId)
                    }(e)
                }).value();
                return o.length > 0 ? Object(l.fromJS)(o) : Promise.reject()
            })
        }
        var Pa = 500;
        function xa(e) {
            return re.a.run(n.Ub, {
                args: [n.d, re.a.getState, {
                    ctaId: "ratedriver_drawer",
                    header: "How was [driverName]?",
                    type: e
                }]
            })
        }
        var Ua = Object(se.combineReducers)({
            couriersToRateIntervalId: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case n.Yb.loadSubappComplete:
                    return t.isLoggedIn ? Object(re.f)(null, re.a.list([re.a.run(n.M, {
                        args: [!1, e]
                    }), re.a.run(n.Cb, {
                        successActionCreator: _a,
                        args: [re.a.getState, "CHECK_FOR_RATABLE_COURIERS_INTERVAL_MINUTES"]
                    })])) : e;
                case n.F.applicationInitialized:
                    return Object(re.f)(null, re.a.list([re.a.run(n.M, {
                        args: [!1, e]
                    }), re.a.run(n.Cb, {
                        successActionCreator: _a,
                        args: [re.a.getState, "CHECK_FOR_RATABLE_COURIERS_INTERVAL_MINUTES"]
                    })]));
                case da:
                    return Object(re.f)(e, re.a.run(n.R, {
                        successActionCreator: ga,
                        args: [!1, 60 * t.interval * 1e3, re.a.dispatch, ba]
                    }));
                case ma:
                    return t.intervalId;
                case n.gc.updateUser:
                    if (!t.shouldRefreshData)
                        return e;
                case n.I.clear:
                    return Object(re.f)(null, re.a.run(n.M, {
                        args: [!1, e]
                    }));
                default:
                    return e
                }
            },
            couriersToRate: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(l.Stack)()
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case aa:
                    return Object(l.Stack)(t.couriersToRate);
                case ia:
                    return Object(re.f)(e.pop(), re.a.action(ya()));
                case la:
                    return function(e, t) {
                        if (t.name !== na)
                            return e;
                        var r = e.size > 1 ? fa : va
                          , a = re.a.run(n.R, {
                            args: [!0, Pa, re.a.dispatch, r, e]
                        });
                        return Object(re.f)(e, a)
                    }(e, t);
                case ua:
                    return Object(re.f)(e, re.a.run(ja, {
                        successActionCreator: pa,
                        args: [re.a.getState, re.a.dispatch]
                    }));
                case n.I.clear:
                case n.gc.updateUser:
                    return Object(l.Stack)();
                default:
                    return e
                }
            },
            open: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case aa:
                    return Object(re.f)(!0, xa("Viewed"));
                case oa:
                    return Object(re.f)(!1, re.a.action(ya()));
                case sa:
                    return Object(re.f)(!1, re.a.list([re.a.action(ya()), xa("Dismissed")]));
                case ca:
                    return t.name === na ? Object(re.f)(e, xa("Clicked")) : e;
                case ia:
                    return Object(re.f)(e, xa("Viewed"));
                case n.I.clear:
                case n.gc.updateUser:
                    return !1;
                default:
                    return e
                }
            },
            lastOpened: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                case aa:
                    return new Date;
                case n.I.clear:
                case n.gc.updateUser:
                    return null;
                default:
                    return e
                }
            },
            timePlacedForRecentOrders: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(l.Set)()
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case He.loadingOrdersFromPollFinished:
                case He.refreshOrdersFinished:
                    return e.concat(t.unconfirmed.orders.map(function(e) {
                        return new Date(e.timePlaced)
                    })).filter(function(e) {
                        return N()().diff(e, "minutes") < 16
                    });
                case n.I.clear:
                case n.gc.updateUser:
                    return Object(l.Set)();
                default:
                    return e
                }
            },
            shownCourierIds: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(l.Set)()
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case aa:
                    return e.add(t.couriersToRate.first().get("courierId"));
                case ia:
                    return e.add(t.couriersToRate.get(1).get("courierId"));
                case n.I.clear:
                case n.gc.updateUser:
                    return Object(l.Set)();
                default:
                    return e
                }
            },
            form: Na(na)
        })
          , Fa = {
            showDriverRatingReminderModal: "SHOW_DRIVER_RATING_REMINDER_MODAL",
            hideDriverRatingReminderModal: "HIDE_DRIVER_RATING_REMINDER_MODAL",
            driverRatingReminderTimeoutStarted: "DRIVER_RATING_REMINDER_TIMEOUT_STARTED"
        };
        function Ba(e) {
            return {
                type: Fa.driverRatingReminderTimeoutStarted,
                timeoutId: e
            }
        }
        function za(e, t) {
            return setTimeout(function() {
                var r = Object(n.fb)(e());
                r && r.filter(function(e) {
                    return e.get("managedDelivery")
                }).size > 0 && t({
                    type: Fa.showDriverRatingReminderModal
                })
            }, function() {
                var e, t = new Date;
                e = t.getHours() < 14 ? new Date(t.getFullYear(),t.getMonth(),t.getDate(),14,0,0,0) : t.getHours() < 20 ? new Date(t.getFullYear(),t.getMonth(),t.getDate(),20,0,0,0) : new Date(t.getFullYear(),t.getMonth(),t.getDate() + 1,14,0,0,0);
                return e.valueOf() - t.valueOf()
            }())
        }
        var Ga = Object(l.fromJS)({
            showModal: !1,
            timeoutId: null
        });
        function Ya(e) {
            return e.get("timeoutId") ? e : Object(re.f)(e, Ha())
        }
        function Ha() {
            return re.a.run(za, {
                successActionCreator: Ba,
                args: [re.a.getState, re.a.dispatch]
            })
        }
        function qa() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ga
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case n.Yb.loadSubappComplete:
                return t.isLoggedIn ? Ya(e) : e;
            case n.F.applicationInitialized:
                return Ya(e);
            case n.I.clear:
                return Object(re.f)(Ga, re.a.run(n.M, {
                    args: [!0, e.get("timeoutId")]
                }));
            case n.gc.updateUser:
                return t.shouldRefreshData ? e.merge({
                    showModal: !1
                }) : e;
            case Fa.showDriverRatingReminderModal:
                return function(e) {
                    var t = e.merge({
                        showModal: !0
                    });
                    return Object(re.f)(t, Ha())
                }(e);
            case Fa.hideDriverRatingReminderModal:
                return e.merge({
                    showModal: !1
                });
            case Fa.driverRatingReminderTimeoutStarted:
                return e.merge({
                    timeoutId: t.timeoutId
                });
            default:
                return e
            }
        }
        var Qa, Va, Ja = "GO_LIVE_TEST_ORDER", Wa = {
            onLoad: "".concat(Ja, "_ON_LOAD"),
            expandModal: "".concat(Ja, "_MODAL_EXPAND"),
            collapseModal: "".concat(Ja, "_MODAL_COLLAPSE"),
            sendTestOrder: "".concat(Ja, "_SEND_TEST_ORDER"),
            resendTestOrder: "".concat(Ja, "_RESEND_TEST_ORDER"),
            sendTestOrderSuccess: "".concat(Ja, "_SEND_TEST_ORDER_SUCCESS"),
            sendTestOrderFailed: "".concat(Ja, "_SEND_TEST_ORDER_FAILED"),
            startTakingOrder: "".concat(Ja, "_START_TAKING_ORDERS"),
            startTakingOrderSuccess: "".concat(Ja, "_START_TAKING_ORDERS_SUCCESS"),
            startTakingOrderFailed: "".concat(Ja, "_START_TAKING_ORDERS_FAILED"),
            testOrderConfirmedSuccess: "".concat(Ja, "_TEST_ORDER_CONFIRMED_SUCCESS"),
            testOrderConfirmedFailed: "".concat(Ja, "_TEST_ORDER_CONFIRMED_FAILED"),
            nextStep: "".concat(Ja, "_NEXT_STEP"),
            openSetGoLiveReminderModal: "".concat(Ja, "_OPEN_SHOW_GO_LIVE_REMINDER_MODAL"),
            closeSetGoLiveReminderModal: "".concat(Ja, "_CLOSE_SHOW_GO_LIVE_REMINDER_MODAL"),
            selectGoLiveReminderDate: "".concat(Ja, "_SELECT_GO_LIVE_REMINDER_DATE"),
            saveGoLiveReminderDate: "".concat(Ja, "_SAVE_GO_LIVE_REMINDER_DATE"),
            saveGoLiveReminderDateSuccess: "".concat(Ja, "_SAVE_GO_LIVE_REMINDER_DATE_SUCCESS"),
            saveGoLiveReminderDateFailure: "".concat(Ja, "_SAVE_GO_LIVE_REMINDER_DATE_FAILURE"),
            dismissCongratsModal: "".concat(Ja, "_DISMISS_CONGRATS_MODAL"),
            finishTestOrderGoLive: "".concat(Ja, "_FINISH_TEST_ORDER_GO_LIVE")
        };
        function Ka(e) {
            var t = e.data;
            return {
                type: Wa.sendTestOrderSuccess,
                data: t
            }
        }
        function Xa(e) {
            var t = e.status
              , r = e.data;
            return {
                type: Wa.sendTestOrderFailed,
                status: t,
                data: r
            }
        }
        function Za(e) {
            var t = e.data;
            return De({
                type: Wa.testOrderConfirmedSuccess,
                merchant: t
            }, n.m, !0)
        }
        function $a(e) {
            var t = e.status
              , r = e.data;
            return {
                type: Wa.testOrderConfirmedFailed,
                status: t,
                data: r
            }
        }
        function ei(e) {
            var t = e.data;
            return {
                type: Wa.startTakingOrderFailed,
                data: t
            }
        }
        function ti() {
            return {
                type: Wa.closeSetGoLiveReminderModal
            }
        }
        function ri(e) {
            var t = e.data;
            return De({
                type: Wa.saveGoLiveReminderDateSuccess,
                merchant: t
            }, n.m, !0)
        }
        function ni(e) {
            var t = e.data;
            return {
                type: Wa.saveGoLiveReminderDateFailure,
                data: t
            }
        }
        function ai(e, t, r, a) {
            var i = "test/orderprocessing/ghc-merchants/".concat(e, "/orders")
              , s = {
                method: "POST",
                body: {
                    partnerId: e,
                    initialStatus: "RESTAURANT_CONFIRMABLE",
                    isDelivery: t
                }
            };
            return n.X.makeAuthenticatedRequest(i, s, r(), a)
        }
        var ii = {
            step: "initial",
            title: "You're almost ready to go live!",
            body: "But first, we need you to confirm a test order, so we can be sure everything is working properly, it should only take a few minutes.",
            okButtonText: "Send test order"
        }
          , si = {
            step: "testOrderSentSuccess",
            title: "Sent. Can you confirm the order?",
            body: 'It will appear in the Active tab of the Orders screen. Tap the order to review its details. Update the prep time and then press "Confirm" to accept the order.',
            okButtonText: "Resend test order"
        }
          , oi = {
            step: "testOrderSentFailed",
            title: "Test order failed to send",
            body: "${ERROR_MESSAGE} Please contact your Sales representative.",
            okButtonText: "Resend test order"
        }
          , ci = {
            step: "readyToStartTakingOrder",
            title: "Good Job! Ready for real orders?",
            body: "Don't worry, you can always stop taking orders by going to the Hours screen. You can call Restaurant Care at ${CARE_NUM} if you have any real-time order issues.",
            okButtonText: "Start taking orders",
            cancelButtonText: "I'm not ready yet",
            color: "green"
        }
          , li = {
            step: "congrats",
            title: "Congratulations, You're live!",
            body: _.a.createElement("div", null, _.a.createElement("p", null, "Customers can now order from your restaurant on Grubhub!"), _.a.createElement("p", null, "Do your part to get more orders. Visit the ", _.a.createElement("a", {
                href: "http://learn.grubhub.com/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Learning Center"), " to understand how to be successful on Grubhub.")),
            okButtonText: "Got it"
        }
          , ui = {
            step: "dontForgetToConfirm",
            title: "Don't forget to confirm orders",
            body: "Confirming lets your customers know that you're preparing their order. It also tells the driver that they should start heading to your restaurant. Grubhub will call after 5 minutes if you don't confirm an order.",
            okButtonText: "Done"
        }
          , di = {
            header: "Unable to set reminder",
            message: "We're having some difficulties on our end. Wait a few minutes and try setting the reminder again.",
            isError: !0
        }
          , mi = {
            header: "Unable to take orders",
            message: "We're having some difficulties on our end. Please contact your account advisor.",
            isError: !0
        }
          , gi = {
            impressions: (Qa = {},
            De(Qa, ii.step, {
                eventAction: "send test order modal_impression",
                eventCategory: "self activation",
                nonInteraction: !0
            }),
            De(Qa, si.step, {
                eventAction: "test order sent modal_impression",
                eventCategory: "self activation",
                nonInteraction: !0
            }),
            De(Qa, ci.step, {
                eventAction: "start taking orders modal_impression",
                eventCategory: "self activation",
                nonInteraction: !0
            }),
            De(Qa, li.step, {
                eventAction: "partner is now live modal_impression",
                eventCategory: "self activation",
                nonInteraction: !0
            }),
            De(Qa, "goLiveReminderModal", {
                eventAction: "set go live reminder modal_impression",
                eventCategory: "self activation",
                nonInteraction: !0
            }),
            Qa),
            CTAs: (Va = {},
            De(Va, ii.step, function(e) {
                return {
                    eventAction: "send test order modal_cta",
                    eventCategory: "self activation",
                    eventLabel: e
                }
            }),
            De(Va, si.step, function(e) {
                return {
                    eventAction: "test order sent modal_cta",
                    eventCategory: "self activation",
                    eventLabel: e
                }
            }),
            De(Va, "confirmTestOrder", function(e) {
                return {
                    eventAction: "confirm order_cta",
                    eventCategory: "self activation",
                    eventLabel: e
                }
            }),
            De(Va, ci.step, function(e) {
                return {
                    eventAction: "start taking orders modal_cta",
                    eventCategory: "self activation",
                    eventLabel: e
                }
            }),
            De(Va, li.step, function(e) {
                return {
                    eventAction: "partner is now live modal_cta",
                    eventCategory: "self activation",
                    eventLabel: e
                }
            }),
            De(Va, "goLiveReminderModal", function(e) {
                return {
                    eventAction: "set go live reminder modal_cta",
                    eventCategory: "self activation",
                    eventLabel: e
                }
            }),
            Va)
        };
        function pi(e, t, r, n) {
            return vi(e, {
                goLiveReminderDate: t
            }, r, n)
        }
        function fi(e, t, r) {
            return vi(e, {
                testOrderSuccess: !0
            }, t, r)
        }
        function hi(e, t, r) {
            var a = "merchant/".concat(e, "/go-live");
            return n.X.makeAuthenticatedRequest(a, {
                method: "POST",
                body: {
                    orderTypes: ["standard"]
                }
            }, t(), r)
        }
        function vi(e, t, r, a) {
            return n.X.makeAuthenticatedRequest("merchant/".concat(e), {
                method: "PATCH",
                body: t
            }, r(), a)
        }
        var Ei = function() {}
          , yi = function(e) {
            var t = e.eventAction
              , r = e.eventCategory
              , n = e.eventLabel
              , a = e.nonInteraction;
            window.ga = window.ga || Ei;
            var s = i.a.omitBy({
                eventCategory: r,
                eventAction: t,
                eventLabel: n,
                nonInteraction: a
            }, i.a.isUndefined);
            window.ga("send", "event", s)
        }
          , Ai = gi.CTAs
          , bi = Object(l.fromJS)({
            hasError: !1,
            errorStatus: null,
            errorData: null
        });
        var _i = gi.impressions
          , Oi = gi.CTAs
          , Ti = Object(l.fromJS)({
            testOrderId: null,
            isLoading: !1,
            isCollapsed: !1,
            finished: !1,
            hasSentTestOrder: !1,
            step: null
        });
        function Ii(e, t) {
            var r = t.step
              , n = t.isCollapsed
              , a = e.set("isCollapsed", n);
            return n && Oi[r] ? Object(re.f)(a, wi(Oi[r]("collapse"))) : a
        }
        function Ci(e, t) {
            var r = t.restaurantId
              , n = re.a.run(ai, {
                successActionCreator: Ka,
                failActionCreator: Xa,
                args: [r, !0, re.a.getState, re.a.dispatch]
            });
            return Object(re.f)(e.merge({
                hasSentTestOrder: !0,
                isLoading: !0
            }), n)
        }
        function Ri(e, t) {
            var r = t.merchantId;
            return Object(re.f)(e, re.a.run(hi, {
                successActionCreator: function(e) {
                    return function(e, t) {
                        var r = t.data;
                        return De({
                            type: Wa.startTakingOrderSuccess,
                            merchantId: e,
                            merchantStatus: r.updatedMerchantStatusesResponse.standard
                        }, n.m, !0)
                    }(r, e)
                },
                failActionCreator: ei,
                args: [r, re.a.getState, re.a.dispatch]
            }))
        }
        function Ni(e, t) {
            var r = t.step
              , n = e.set("step", r);
            return _i[r] ? Object(re.f)(n, wi(_i[r])) : n
        }
        function Si(e, t) {
            var r = e.set("showSetGoLiveReminderModal", !1);
            return !1 === t ? r : Object(re.f)(r, wi(Oi.goLiveReminderModal("collapse")))
        }
        function wi(e) {
            return re.a.run(yi, {
                args: [e]
            })
        }
        var Di = Object(re.g)(function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ti
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case Wa.onLoad:
                return function(e, t) {
                    var r = t.testOrderReadyMerchant;
                    return r ? Ni(e.setIn(["goLiveReminder", "selectedDate"], r.get("goLiveReminderDate")), {
                        step: r.get("testOrderSuccess") ? ci.step : ii.step
                    }) : e
                }(e, t);
            case Wa.expandModal:
            case Wa.collapseModal:
                return Ii(e, t);
            case Wa.sendTestOrder:
                return Ci(e, t);
            case Wa.resendTestOrder:
                return function(e, t) {
                    var r = Ci(e, {
                        restaurantId: t.restaurantId
                    })
                      , n = Object(re.c)(r)
                      , a = Object(re.b)(r);
                    return Object(re.f)(n, re.a.list([wi(Oi[si.step]("resent_test_order")), a]))
                }(e, t);
            case Wa.sendTestOrderSuccess:
                return function(e, t) {
                    var r = t.data.id
                      , n = Ni(e.merge({
                        isLoading: !1,
                        hasError: !1,
                        errorStatus: null,
                        errorData: null,
                        testOrderId: r
                    }), {
                        step: si.step
                    })
                      , a = Object(re.b)(n);
                    return Object(re.f)(Object(re.c)(n), re.a.list([wi(Oi[ii.step]("send_test_order_success")), a]))
                }(e, t);
            case Wa.startTakingOrder:
                return Ri(e, t);
            case Wa.startTakingOrderSuccess:
                return function(e, t) {
                    var r = t.merchantId
                      , a = t.merchantStatus
                      , i = t.currentUser
                      , s = e.merge({
                        hasError: !1,
                        step: li.step
                    })
                      , o = Object(n.fc)(i, r, function(e) {
                        return e.mergeIn(["orderTypeSettings", "standard"], {
                            merchantStatus: a.name,
                            merchantStatusCategory: a.categoryName
                        })
                    });
                    return Object(re.f)(s, re.a.list([re.a.action(Object(n.dc)({
                        newUser: o
                    })), wi(Oi[ci.step]("start_taking_orders_success")), wi(_i[li.step])]))
                }(e, t);
            case Wa.dismissCongratsModal:
                return function(e) {
                    return Object(re.f)(Ni(e, {
                        step: ui.step
                    }), wi(Oi[li.step]("done")))
                }(e);
            case Wa.nextStep:
                return Ni(e, t);
            case Wa.openSetGoLiveReminderModal:
                return function(e, t) {
                    var r = t.now
                      , n = e.getIn(["goLiveReminder", "selectedDate"])
                      , a = N()(r).add(1, "days").toDate()
                      , i = e.merge({
                        goLiveReminder: {
                            selectedDate: n || a
                        },
                        showSetGoLiveReminderModal: !0
                    });
                    return Object(re.f)(i, wi(_i.goLiveReminderModal))
                }(e, t);
            case Wa.closeSetGoLiveReminderModal:
                return Si(e, t);
            case Wa.selectGoLiveReminderDate:
                return function(e, t) {
                    var r = t.goLiveReminderDate;
                    return e.setIn(["goLiveReminder", "selectedDate"], r)
                }(e, t);
            case Wa.saveGoLiveReminderDate:
                return function(e, t) {
                    var r = t.goLiveReminderDate
                      , n = t.merchantId;
                    return Object(re.f)(e, re.a.run(pi, {
                        successActionCreator: ri,
                        failActionCreator: ni,
                        args: [n, r, re.a.getState, re.a.dispatch]
                    }))
                }(e, t);
            case Wa.saveGoLiveReminderDateSuccess:
                return function(e, t) {
                    var r = t.merchant
                      , a = t.currentUser
                      , i = Si(e.set("hasError", !1), !1)
                      , s = Object(n.ec)(a, r.accountInformation.legacyId, function(e) {
                        return e.set("goLiveReminderDate", r.goLiveReminderDate)
                    });
                    return Object(re.f)(i, re.a.list([re.a.action(Object(n.dc)({
                        newUser: s
                    })), wi(Oi.goLiveReminderModal("set_go_live_reminder_success"))]))
                }(e, t);
            case He.bumpOrder:
                return function(e, t) {
                    var r = t.order;
                    return e.get("testOrderId") === r.get("uuid") ? Object(re.f)(e, re.a.run(fi, {
                        successActionCreator: Za,
                        failActionCreator: $a,
                        args: [r.get("merchantUuid"), re.a.getState, re.a.dispatch]
                    })) : e
                }(e, t);
            case Wa.testOrderConfirmedSuccess:
                return function(e, t) {
                    var r = t.merchant
                      , a = t.currentUser
                      , i = Ni(e.set("hasError", !1), {
                        step: ci.step
                    })
                      , s = Object(n.ec)(a, r.accountInformation.legacyId, function(e) {
                        return e.set("testOrderSuccess", !0)
                    });
                    return Object(re.f)(Object(re.c)(i), re.a.list([re.a.action(Object(n.dc)({
                        newUser: s
                    })), wi(Oi.confirmTestOrder("test order_success")), Object(re.b)(i)]))
                }(e, t);
            case Wa.finishTestOrderGoLive:
                return e.set("finished", !0);
            default:
                return e
            }
        }, function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bi
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case Wa.sendTestOrderFailed:
                return function(e, t) {
                    var r = t.data
                      , n = t.status;
                    return Object(re.f)(e.merge({
                        isLoading: !1,
                        hasError: !0,
                        errorStatus: n,
                        errorData: r,
                        step: oi.step
                    }), re.a.run(yi, {
                        args: [Ai[ii.step]("send_test_order_error-".concat(r.message))]
                    }))
                }(e, t);
            case Wa.startTakingOrderFailed:
                return function(e, t) {
                    var r = t.data;
                    return Object(re.f)(e, re.a.list([re.a.run(yi, {
                        args: [Ai[ci.step]("start_taking_orders_error-".concat(JSON.stringify(r)))]
                    }), re.a.run(s.a.sendAlert, {
                        args: [mi]
                    })]))
                }(e, t);
            case Wa.saveGoLiveReminderDateFailure:
                return function(e, t) {
                    var r = t.data;
                    return Object(re.f)(e, re.a.list([re.a.action(ti()), re.a.run(yi, {
                        args: [Ai.goLiveReminderModal("set_go_live_reminder_error-".concat(r.message))]
                    }), re.a.run(s.a.sendAlert, {
                        args: [di]
                    })]))
                }(e, t);
            case Wa.testOrderConfirmedFailed:
                return function(e, t) {
                    var r = t.data;
                    return Object(re.f)(e.set("hasError", !0), re.a.run(yi, {
                        args: [Ai.confirmTestOrder("test order_error-".concat(r.message))]
                    }))
                }(e, t);
            default:
                return e
            }
        })
          , Mi = Object(l.fromJS)({
            orderPollingTimeoutId: null,
            orderDingIntervalId: null,
            lastPollingTimestamp: 0,
            unconfirmedOrders: [],
            inHouseOrders: [],
            futureActionableOrders: [],
            scheduledCount: 0,
            outTheDoorCount: 0,
            refreshing: !1,
            bumpStatuses: {},
            subscribedToFirestore: !1,
            doImmediatePollAfterRefresh: !1
        })
          , ki = function(e) {
            var t = e.get("subscribedToFirestore") ? "ORDER_POLLING_INTERVAL_USING_FIRESTORE" : "ORDER_POLLING_INTERVAL";
            return re.a.run(n.Cb, {
                successActionCreator: Xe,
                args: [re.a.getState, t]
            })
        }
          , Li = re.a.run(n.Cb, {
            successActionCreator: function(e) {
                return {
                    type: He.setOrderDingInterval,
                    ms: e
                }
            },
            args: [re.a.getState, "ORDER_DING_INTERVAL"]
        });
        function ji() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mi
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case n.Yb.loadSubappComplete:
                return t.isLoggedIn && "orders" === t.subapp ? Object(re.f)(e, re.a.run(sr, {
                    successActionCreator: qe,
                    args: [re.a.getState]
                })) : e;
            case n.F.applicationInitialized:
                return Object(re.f)(e, re.a.run(sr, {
                    successActionCreator: qe,
                    args: [re.a.getState]
                }));
            case He.canPollOrders:
                return function(e, t) {
                    if (r = t,
                    n = r.associatedGroups,
                    a = r.result.orderPollingMax,
                    i = r.loggedInUser,
                    s = n.map(function(e) {
                        return e.get("groupMembers").size
                    }).reduce(function(e, t) {
                        return e + t
                    }, 0),
                    !(a > s && (o = i,
                    _n(o.get("claims")))))
                        return zi(e);
                    var r, n, a, i, s, o;
                    var c;
                    c = t.firebaseSubscriptionEnabled ? [re.a.run(ur, {
                        successActionCreator: ct,
                        failActionCreator: lt,
                        args: [t.associatedRestaurantIds, re.a.dispatch]
                    }), Li] : [re.a.action(Ve()), Li];
                    return Object(re.f)(e, re.a.list(c))
                }(e, t);
            case He.refreshOrders:
                return function(e, t) {
                    var r = t.associatedRestaurantIds
                      , a = e.get("orderPollingTimeoutId");
                    if (0 === r.size)
                        return e;
                    var i = e.set("refreshing", !0);
                    return Object(re.f)(i, re.a.list([re.a.run(n.M, {
                        args: [!0, a]
                    }), re.a.run(Pt, {
                        successActionCreator: function(e) {
                            return t = e,
                            n = r,
                            Qe(He.refreshOrdersFinished, t, n);
                            var t, n
                        },
                        failActionCreator: Je,
                        args: [r, re.a.getState, re.a.dispatch]
                    })]))
                }(e, t);
            case He.refreshOrdersFinished:
                return function(e, t) {
                    if (cr(t.associatedRestaurantIdsPreRequest, t.associatedRestaurantIds))
                        return e;
                    var r = e.get("lastPollingTimestamp")
                      , n = [ki(e)];
                    r && (n.push(xi(e, t)),
                    n.push(Ui(e, t)));
                    var a = e.merge({
                        unconfirmedOrders: t.unconfirmed.orders,
                        inHouseOrders: t.inHouse.orders,
                        futureActionableOrders: t.futureActionable.orders,
                        scheduledCount: t.scheduled.count,
                        outTheDoorCount: t.outTheDoor.count,
                        lastPollingTimestamp: t.lastPollingTimestamp,
                        refreshing: !1,
                        bumpStatuses: {},
                        doImmediatePollAfterRefresh: !1
                    });
                    if (e.get("doImmediatePollAfterRefresh"))
                        return Object(re.f)(a, re.a.action(Ke()));
                    return Object(re.f)(a, re.a.list(n))
                }(e, t);
            case He.refreshOrdersError:
                return function(e, t) {
                    if (!t.isLoggedIn)
                        return e;
                    if (e.get("doImmediatePollAfterRefresh")) {
                        var r = e.merge({
                            refreshing: !1,
                            doImmediatePollAfterRefresh: !1
                        });
                        return Object(re.f)(r, re.a.action(Ke()))
                    }
                    return Object(re.f)(e.set("refreshing", !1), ki(e))
                }(e, t);
            case He.loadPollingOrders:
                return function(e, t) {
                    if (e.get("refreshing"))
                        return e.merge({
                            doImmediatePollAfterRefresh: !0
                        });
                    var r = e.get("lastPollingTimestamp")
                      , a = !r
                      , i = t.selectedOrderCategory
                      , s = t.associatedRestaurantIds
                      , o = e.get("orderPollingTimeoutId")
                      , c = e.merge({
                        orderPollingTimeoutId: null,
                        refreshing: a
                    });
                    return Object(re.f)(c, re.a.list([re.a.run(n.M, {
                        args: [!0, o]
                    }), re.a.run(xt, {
                        successActionCreator: function(e) {
                            return function(e, t, r) {
                                return Qe(He.loadingOrdersFromPollFinished, e, t, r)
                            }(e, t.associatedRestaurantIds, a)
                        },
                        failActionCreator: function(e) {
                            return function(e, t) {
                                var r;
                                return De(r = {
                                    type: He.loadingOrdersFromPollError
                                }, n.p, !0),
                                De(r, "isRefresh", t),
                                r
                            }(0, a)
                        },
                        args: [s, r, re.a.getState, re.a.dispatch, i]
                    })]))
                }(e, t);
            case He.loadingOrdersFromPollFinished:
                return function(e, t) {
                    if (cr(t.associatedRestaurantIdsPreRequest, t.associatedRestaurantIds))
                        return e;
                    var r = [ki(e)];
                    e.get("lastPollingTimestamp") && (r.push(xi(e, t)),
                    r.push(Ui(e, t)));
                    var n = function(e, t) {
                        var r = t.unconfirmed
                          , n = t.inHouse
                          , a = t.scheduled
                          , i = t.outTheDoor
                          , s = t.futureActionable
                          , o = t.lastPollingTimestamp
                          , c = t.isRefresh
                          , u = e.get("unconfirmedOrders")
                          , d = e.get("inHouseOrders")
                          , m = e.get("futureActionableOrders")
                          , g = Fi(r, n, i, s, a)
                          , p = Object(l.fromJS)(r.orders)
                          , f = Object(l.fromJS)(n.orders)
                          , h = Object(l.fromJS)(s.orders);
                        return e.merge({
                            unconfirmedOrders: Bi(u, g).concat(p),
                            inHouseOrders: Bi(d, g).concat(f),
                            scheduledCount: a.count,
                            outTheDoorCount: i.count,
                            futureActionableOrders: Bi(m, g).concat(h),
                            lastPollingTimestamp: o,
                            refreshing: !c && e.get("refreshing")
                        })
                    }(e, t);
                    return Object(re.f)(n, re.a.list(r))
                }(e, t);
            case He.loadingOrdersFromPollError:
                return function(e, t) {
                    if (!t.isLoggedIn)
                        return e;
                    var r = t.isRefresh ? e.merge({
                        refreshing: !1
                    }) : e;
                    return Object(re.f)(r, ki(e))
                }(e, t);
            case He.setOrderPollingTimeout:
                return Object(re.f)(e.set("orderPollingTimeoutId", null), re.a.run(n.R, {
                    successActionCreator: Ze,
                    args: [!0, t.msToPoll, re.a.dispatch, Ke]
                }));
            case He.setOrderPollingTimeoutId:
                return e.set("orderPollingTimeoutId", t.id);
            case He.setOrderDingInterval:
                return Object(re.f)(e, re.a.run(n.R, {
                    successActionCreator: et,
                    args: [!1, t.ms, re.a.dispatch, tt]
                }));
            case He.setOrderDingIntervalId:
                return e.set("orderDingIntervalId", t.id);
            case He.playOrderDingForUnconfirmedOrders:
                return function(e) {
                    var t = 0 === e.get("unconfirmedOrders").size
                      , r = 0 === e.get("futureActionableOrders").size;
                    if (t && r)
                        return e;
                    return Object(re.f)(e, re.a.run(Vt))
                }(e);
            case n.I.clear:
                return zi(e);
            case n.gc.updateUser:
                return t.shouldRefreshData ? zi(e) : e;
            case He.bumpOrder:
                return function(e, t) {
                    var r = t.order
                      , n = t.waitTimeInMinutes
                      , a = t.associatedRestaurants;
                    if (e.hasIn(["bumpStatuses", r.get("uuid")]))
                        return e;
                    var i, s = a.find(function(e) {
                        return r.get("shortMerchantId") === e.get("id")
                    }), o = Xt(r);
                    n >= 0 && (i = n);
                    if ("NOT_BUMPABLE" === o)
                        return e;
                    var c = e.setIn(["bumpStatuses", r.get("uuid")], !1);
                    return Object(re.f)(c, re.a.run(Ft, {
                        successActionCreator: rt,
                        failActionCreator: at,
                        args: [s, r.get("uuid"), o, re.a.getState, re.a.dispatch, i]
                    }))
                }(e, t);
            case He.bumpOrderDelayFinish:
                return function(e, t) {
                    var r = t.order
                      , a = e.setIn(["bumpStatuses", r.uuid], !0);
                    return Object(re.f)(a, re.a.run(n.R, {
                        args: [!0, 1300, re.a.dispatch, nt, r]
                    }))
                }(e, t);
            case He.bumpOrderFinished:
                return function(e, t) {
                    var r = t.order;
                    return Gi(e.deleteIn(["bumpStatuses", r.uuid]), r)
                }(e, t);
            case He.bumpOrderFailed:
                return function(e, t) {
                    var r = t.uuid;
                    return e.deleteIn(["bumpStatuses", r])
                }(e, t);
            case He.ordersSubscriptionSuccess:
                return function(e) {
                    return e.merge({
                        subscribedToFirestore: !0
                    })
                }(e);
            case He.ordersSubscriptionFailure:
                return function(e) {
                    var t = e.merge({
                        subscribedToFirestore: !1
                    });
                    return Object(re.f)(t, re.a.action(Ve()))
                }(e);
            case He.orderDetailsAdjustmentResponse:
            case He.orderDetailsCancellationResponse:
                return function(e, t) {
                    var r = t.order;
                    if (!r)
                        return e;
                    return Gi(e, r)
                }(e, t);
            default:
                return e
            }
        }
        function Pi(e, t, r, n) {
            var a = e.get("unconfirmedOrders").concat(e.get("inHouseOrders")).concat(e.get("futureActionableOrders"))
              , i = r.filter(function(e) {
                return !ir(Object(l.fromJS)(e))
            })
              , s = r.filter(function(e) {
                return ir(Object(l.fromJS)(e)) && Zt(Object(l.fromJS)(e))
            });
            return Object(l.fromJS)(t.concat(i).concat(s).concat(n)).filter(function(e) {
                return !a.some(function(t) {
                    return e.get("uuid") === t.get("uuid")
                })
            })
        }
        function xi(e, t) {
            var r = Pi(e, t.unconfirmed.orders, t.inHouse.orders, t.futureActionable.orders);
            return r.size > 0 ? re.a.action(pr(r, !0)) : re.a.none
        }
        function Ui(e, t) {
            var r = t.unconfirmed
              , a = t.inHouse
              , i = t.futureActionable;
            return Pi(e, r.orders, a.orders, i.orders).size > 0 ? re.a.list([re.a.run(n.M, {
                args: [!1, e.get("orderDingIntervalId")]
            }), re.a.run(Vt), Li]) : re.a.none
        }
        function Fi() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return Object(l.fromJS)(t).reduce(function(e, t) {
                var r = t.get("legacyIdToOrders").reduce(function(e, t) {
                    return e.concat(t)
                }, Object(l.List)());
                return e.concat(r)
            }, Object(l.List)()).toJS()
        }
        function Bi(e, t) {
            return 0 === t.length ? e : e.filter(function(e) {
                return !t.includes(e.get("uuid"))
            })
        }
        function zi(e) {
            var t = e.merge(Mi);
            return Object(re.f)(t, re.a.list([re.a.run(n.M, {
                args: [!0, e.get("orderPollingTimeoutId")]
            }), re.a.run(n.M, {
                args: [!1, e.get("orderDingIntervalId")]
            }), re.a.run(dr)]))
        }
        function Gi(e, t) {
            var r = e.get("unconfirmedOrders")
              , n = e.get("inHouseOrders")
              , a = e.get("futureActionableOrders")
              , i = t.uuid
              , s = Object(l.fromJS)(t);
            return er(s) ? e.merge({
                unconfirmedOrders: Bi(r, [i]).concat([s]),
                inHouseOrders: Bi(n, [i])
            }) : nr(s) ? e.merge({
                futureActionableOrders: Bi(a, [i])
            }) : tr(s) ? e.merge({
                unconfirmedOrders: Bi(r, [i]),
                inHouseOrders: Bi(n, [i]).concat([s]),
                futureActionableOrders: Bi(a, [i])
            }) : e.merge({
                unconfirmedOrders: Bi(r, [i]),
                inHouseOrders: Bi(n, [i])
            })
        }
        var Yi = "ratedriver_details_ratestars"
          , Hi = Object.assign({
            show: "RATE_DRIVER_MODAL_SHOW",
            hide: "RATE_DRIVER_MODAL_HIDE"
        }, Kn)
          , qi = function(e) {
            return {
                type: Hi.show,
                initialRating: e
            }
        }
          , Qi = function() {
            return {
                type: Hi.hide
            }
        }
          , Vi = function(e) {
            return Xn(Yi, e)
        }
          , Ji = function() {
            return $n(Yi)
        }
          , Wi = function(e) {
            return ea(Yi, e)
        }
          , Ki = {
            showModal: "CANCEL_ORDER_MODAL_SHOW",
            closeModal: "CANCEL_ORDER_MODAL_CLOSE",
            setNotes: "CANCEL_ORDER_MODAL_SET_NOTES",
            setReason: "CANCEL_ORDER_MODAL_SET_REASON",
            submit: "CANCEL_ORDER_MODAL_SUBMIT",
            onSubmitSuccess: "CANCEL_ORDER_MODAL_SUBMIT_SUCCESS",
            onSubmitFailure: "CANCEL_ORDER_MODAL_SUBMIT_FAILURE"
        }
          , Xi = function(e) {
            return {
                type: Ki.showModal,
                order: e
            }
        }
          , Zi = function() {
            return {
                type: Ki.closeModal
            }
        }
          , $i = function(e) {
            return {
                type: Ki.setNotes,
                notes: e
            }
        }
          , es = function(e) {
            return {
                type: Ki.setReason,
                reason: e
            }
        }
          , ts = function() {
            return {
                type: Ki.submit
            }
        }
          , rs = function(e) {
            return {
                type: Ki.onSubmitSuccess,
                order: e
            }
        }
          , ns = function() {
            return {
                type: Ki.onSubmitFailure
            }
        };
        function as(e, t, r, a) {
            var i = Object(n.sb)(r()).get("userName")
              , s = Object.assign(t, {
                requestor: i
            });
            return jt("merchant/".concat(e.get("shortMerchantId"), "/orders/").concat(e.get("uuid"), "/cancellation"), r, a, {
                method: "POST",
                body: s
            })
        }
        function is(e) {
            return (e || "").replace(/\r|\n/g, " ").replace(/<[^>]*>/g, "")
        }
        var ss = 500
          , os = Object(l.fromJS)({
            showModal: !1,
            order: null,
            isValid: !1,
            isLoading: !1,
            isSuccess: !1,
            notes: "",
            reason: null
        });
        function cs() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : os
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case Ki.showModal:
                return function(e, t) {
                    var r = t.order;
                    return e.merge({
                        showModal: !0,
                        order: r
                    })
                }(e, t);
            case Ki.closeModal:
                return os;
            case Ki.setNotes:
                return function(e, t) {
                    var r = t.notes
                      , n = e.get("reason") === _t && !!r;
                    return e.merge({
                        isValid: n,
                        notes: r
                    })
                }(e, t);
            case Ki.setReason:
                return function(e, t) {
                    var r = t.reason;
                    if (r !== _t)
                        return e.merge({
                            isValid: !0,
                            notes: "",
                            reason: r
                        });
                    var n = e.get("notes")
                      , a = r === _t && n;
                    return e.merge({
                        isValid: a,
                        reason: r
                    })
                }(e, t);
            case Ki.submit:
                return function(e) {
                    if (!e.get("isValid"))
                        return e;
                    var t = e.set("isLoading", !0)
                      , r = e.get("order")
                      , n = {
                        reason: e.get("reason"),
                        notes: is(e.get("notes"))
                    };
                    return Object(re.f)(t, re.a.run(as, {
                        successActionCreator: rs,
                        failActionCreator: ns,
                        args: [r, n, re.a.getState, re.a.dispatch]
                    }))
                }(e);
            case Ki.onSubmitSuccess:
                return function(e, t) {
                    var r = t.order
                      , a = e.merge({
                        isSuccess: !0,
                        isLoading: !1
                    })
                      , i = r.uuid;
                    return Object(re.f)(a, re.a.list([re.a.action(ot({
                        order: r,
                        uuid: i
                    })), re.a.run(n.R, {
                        args: [!0, ss, re.a.dispatch, Zi]
                    })]))
                }(e, t);
            case Ki.onSubmitFailure:
                return function(e) {
                    return Object(re.f)(e.merge({
                        isSuccess: !1,
                        isLoading: !1
                    }), re.a.run(s.a.sendAlert, {
                        args: [Ct.cancellationFailed()]
                    }))
                }(e);
            default:
                return e
            }
        }
        var ls = 500;
        var us = Object(se.combineReducers)({
            visible: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case Hi.show:
                    return Object(re.f)(!0, re.a.action(Vi(t.initialRating)));
                case Hi.hide:
                    return Object(re.f)(!1, re.a.action(Ji()));
                case Hi.submitSucceeded:
                    return function(e, t) {
                        if (t.name !== Yi)
                            return e;
                        var r = re.a.run(n.R, {
                            args: [!0, ls, re.a.dispatch, Qi]
                        });
                        return Object(re.f)(e, r)
                    }(e, t);
                default:
                    return e
                }
            },
            form: Na(Yi)
        })
          , ds = {
            showModal: "ADJUSTMENT_MODAL_SHOW",
            closeModal: "ADJUSTMENT_MODAL_CLOSE",
            setExtraCharge: "ADJUSTMENT_MODAL_SET_TYPE",
            setReason: "ADJUSTMENT_MODAL_SET_REASON",
            setNotes: "ADJUSTMENT_MODAL_SET_NOTES",
            setAmount: "ADJUSTMENT_MODAL_SET_AMOUNT",
            validate: "ADJUSTMENT_MODAL_VALIDATE",
            submit: "ADJUSTMENT_MODAL_FORM_SUBMIT",
            onSubmitFailure: "ADJUSTMENT_MODAL_FORM_SUBMIT_FAILURE"
        }
          , ms = function(e) {
            return {
                type: ds.showModal,
                order: e
            }
        }
          , gs = function() {
            return {
                type: ds.closeModal
            }
        }
          , ps = function(e) {
            return {
                type: ds.setExtraCharge,
                extraCharge: e
            }
        }
          , fs = function(e) {
            return {
                type: ds.setReason,
                reason: e
            }
        }
          , hs = function(e) {
            return {
                type: ds.setNotes,
                notes: e
            }
        }
          , vs = function(e) {
            return {
                type: ds.setAmount,
                amount: e
            }
        }
          , Es = function() {
            return {
                type: ds.validate
            }
        }
          , ys = function() {
            return {
                type: ds.submit
            }
        }
          , As = function() {
            return {
                type: ds.onSubmitFailure
            }
        };
        function bs(e, t, r) {
            var a = e.get("order")
              , i = e.get("extraCharge")
              , s = Q()(e.get("amount")).value().toFixed(2)
              , o = a.get("uuid")
              , c = s * (i ? 1 : -1)
              , l = Object(n.sb)(t()).get("userName")
              , u = is(e.get("notes"));
            return function(e, t, r, n, a) {
                return jt("merchant/".concat(t, "/orders/").concat(r, "/adjustment"), n, a, {
                    method: "POST",
                    body: e
                })
            }({
                amount: c,
                reason: e.get("reason"),
                statusVersionUuid: a.get("statusVersionUuid"),
                requestor: l,
                notes: u
            }, a.get("shortMerchantId"), o, t, r).then(function(e) {
                return {
                    order: e,
                    uuid: o
                }
            })
        }
        var _s = 800
          , Os = Object(l.fromJS)({
            showModal: !1,
            order: {},
            reason: "",
            notes: "",
            extraCharge: void 0,
            amount: "",
            isValid: !1,
            isLoading: !1,
            isSuccess: !1
        });
        function Ts() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Os
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case ds.showModal:
                return e.merge({
                    showModal: !0,
                    order: t.order
                });
            case ds.closeModal:
                return Os;
            case ds.setExtraCharge:
                return function(e, t) {
                    var r = t.extraCharge
                      , n = e.merge({
                        extraCharge: r,
                        reason: Os.get("reason"),
                        notes: Os.get("notes")
                    });
                    return Object(re.f)(n, re.a.action(Es()))
                }(e, t);
            case ds.setReason:
                return function(e, t) {
                    var r = t.reason
                      , n = e.set("reason", r);
                    return Object(re.f)(n, re.a.action(Es()))
                }(e, t);
            case ds.setNotes:
                return function(e, t) {
                    var r = t.notes
                      , n = e.set("notes", r);
                    return Object(re.f)(n, re.a.action(Es()))
                }(e, t);
            case ds.setAmount:
                return function(e, t) {
                    var r = t.amount
                      , n = e.set("amount", r);
                    return Object(re.f)(n, re.a.action(Es()))
                }(e, t);
            case ds.validate:
                return e.set("isValid", function(e) {
                    return "" !== e.get("amount")
                }(e) && function(e) {
                    return "" !== e.get("reason")
                }(e));
            case ds.submit:
                return function(e) {
                    return e.get("isValid") ? Object(re.f)(e.set("isLoading", !0), re.a.run(bs, {
                        successActionCreator: st,
                        failActionCreator: As,
                        args: [e, re.a.getState, re.a.dispatch]
                    })) : e
                }(e);
            case ds.onSubmitFailure:
                return function(e) {
                    return Object(re.f)(e.set("isLoading", !1), re.a.run(s.a.sendAlert, {
                        args: [Ct.adjustmentFailed()]
                    }))
                }(e);
            case He.orderDetailsAdjustmentResponse:
                return function(e) {
                    if (!e.get("isLoading"))
                        return e;
                    var t = e.merge({
                        isSuccess: !0,
                        isLoading: !1
                    });
                    return Object(re.f)(t, re.a.run(n.R, {
                        args: [!0, _s, re.a.dispatch, gs]
                    }))
                }(e);
            default:
                return e
            }
        }
        var Is = Object(l.fromJS)({
            currentTab: ft,
            scrolling: !1,
            doneFetchingOrdersForPage: !0,
            currentOffset: Et,
            scheduledOrders: [],
            outTheDoorOrders: [],
            orderDetailsId: null,
            orderDetailsLoading: !1,
            orderDetailsSuccessfullySubmittedDriverRating: !1,
            testOrderModalOpen: !1
        });
        function Cs(e, t) {
            if (e.get("doneFetchingOrdersForPage"))
                return e.update("currentOffset", function(e) {
                    return e + Et
                });
            var r = e.set("scrolling", !0)
              , a = e.get("currentTab")
              , i = e.get("currentOffset");
            return Object(re.f)(r, re.a.run(Ut, {
                successActionCreator: function(e) {
                    return r = e,
                    a = t.associatedRestaurantIds,
                    ke(De({
                        type: He.loadingOrdersForPageFinished,
                        associatedRestaurantIdsPreRequest: a
                    }, n.k, !0), r);
                    var r, a
                },
                failActionCreator: We,
                args: [t.associatedRestaurantIds, a, i, re.a.getState, re.a.dispatch]
            }))
        }
        function Rs(e, t) {
            var r = t.get("testOrderModalOpen");
            return e === ft ? Is.merge({
                currentTab: e,
                doneFetchingOrdersForPage: !0,
                testOrderModalOpen: r
            }) : Is.merge({
                currentTab: e,
                currentOffset: 0,
                doneFetchingOrdersForPage: !1,
                testOrderModalOpen: r
            })
        }
        function Ns(e, t) {
            var r = e.get("scheduledOrders")
              , n = e.get("outTheDoorOrders")
              , a = t.uuid
              , i = Object(l.fromJS)(t);
            return nr(i) ? e.merge({
                scheduledOrders: Bi(r, [a]).concat([i]),
                outTheDoorOrders: Bi(n, [a])
            }) : ar(i) ? e.merge({
                scheduledOrders: Bi(r, [a]),
                outTheDoorOrders: Bi(n, [a]).concat([i])
            }) : e.merge({
                scheduledOrders: Bi(r, [a]),
                outTheDoorOrders: Bi(n, [a])
            })
        }
        function Ss(e, t) {
            switch (t.type) {
            case n.Ob.loaded:
                return function(e) {
                    var t = e.currentUser.get("associatedRestaurants").map(function(e) {
                        return e.get("id")
                    });
                    return 0 === t.size ? Is : Object(re.f)(Is, re.a.action(Object(n.cc)(t)))
                }(t);
            case He.refreshOrdersFinished:
                return Rs(e.get("currentTab"), e);
            case He.changeSelectedTab:
                return Rs(t.selectedTab, e);
            case He.loadingOrdersForPage:
                return Cs(e, t);
            case He.loadingOrdersForPageFinished:
                return function(e, t) {
                    if (cr(t.associatedRestaurantIdsPreRequest, t.associatedRestaurantIds))
                        return e;
                    var r = t.orders.map(function(e) {
                        return e.uuid
                    })
                      , n = {
                        scrolling: !1,
                        doneFetchingOrdersForPage: t.pageSize + t.pageOffset >= t.resultsSize,
                        currentOffset: t.pageSize + t.pageOffset
                    };
                    return e.get("currentTab") === gt && t.tab === gt ? e.merge(ke({}, n, {
                        scheduledOrders: Bi(e.get("scheduledOrders"), r).concat(Object(l.fromJS)(t.orders))
                    })) : e.get("currentTab") === pt && t.tab === pt ? e.merge(ke({}, n, {
                        outTheDoorOrders: Bi(e.get("outTheDoorOrders"), r).concat(Object(l.fromJS)(t.orders))
                    })) : e
                }(e, t);
            case He.loadingOrdersForPageError:
                return function(e, t) {
                    return e.get("currentTab") === t.tab ? e.merge({
                        scrolling: !1,
                        doneFetchingOrdersForPage: !0
                    }) : e
                }(e, t);
            case He.loadingOrdersFromPollFinished:
                return function(e, t) {
                    var r = t.scheduled
                      , n = t.unconfirmed
                      , a = t.inHouse
                      , i = t.outTheDoor
                      , s = t.futureActionable;
                    if (cr(t.associatedRestaurantIdsPreRequest, t.associatedRestaurantIds))
                        return e;
                    if (e.get("currentTab") !== gt && e.get("currentTab") !== pt)
                        return e;
                    var o = e.get("scheduledOrders")
                      , c = e.get("outTheDoorOrders")
                      , u = Fi(r, n, a, i, s);
                    return e.merge({
                        scheduledOrders: r.orders ? Bi(o, u).concat(Object(l.fromJS)(r.orders)) : o,
                        outTheDoorOrders: i.orders ? Bi(c, u).concat(Object(l.fromJS)(i.orders)) : c
                    })
                }(e, t);
            case He.setOrderDetailsOrder:
                return function(e, t) {
                    var r = t.order;
                    if (!r)
                        return e.merge({
                            orderDetailsId: null,
                            orderDetailsLoading: !1,
                            orderDetailsSuccessfullySubmittedDriverRating: !1
                        });
                    var n = r.get("uuid")
                      , a = r.getIn(["payments", "adjustments"]);
                    if (!a || a.every(function(e) {
                        return !e.get("pending")
                    }))
                        return e.merge({
                            orderDetailsId: n,
                            orderDetailsLoading: !1,
                            orderDetailsSuccessfullySubmittedDriverRating: !1
                        });
                    var i = e.merge({
                        orderDetailsId: n,
                        orderDetailsLoading: !0,
                        orderDetailsSuccessfullySubmittedDriverRating: !1
                    });
                    return Object(re.f)(i, re.a.run(Bt, {
                        args: [r.get("uuid"), r.get("shortMerchantId"), re.a.getState, re.a.dispatch],
                        successActionCreator: st,
                        failActionCreator: st
                    }))
                }(e, t);
            case He.bumpOrderFinished:
                return Ns(e, t.order);
            case He.orderDetailsAdjustmentResponse:
            case He.orderDetailsCancellationResponse:
                return function(e, t) {
                    var r = t.order;
                    if (t.uuid !== e.get("orderDetailsId"))
                        return e;
                    var n = e.set("orderDetailsLoading", !1);
                    return r ? Ns(n, r) : n
                }(e, t);
            case Hi.submitSucceeded:
                return e.set("orderDetailsSuccessfullySubmittedDriverRating", !0);
            case He.openTestOrderModal:
                return e.set("testOrderModalOpen", !0);
            case He.closeTestOrderModal:
                return e.set("testOrderModalOpen", !1);
            default:
                return e
            }
        }
        var ws = {
            switch: {
                onIcon: "kabob",
                offIcon: "kabob"
            },
            dropDownMenuItems: [{
                text: "Send test order",
                value: "test-order",
                className: "kabob__dropdown__send-test-order"
            }, {
                text: "Refresh page",
                value: "refresh-page",
                className: "kabob__dropdown__refresh-page"
            }],
            className: "kabob-dropdown",
            openLeft: !0,
            caret: !1
        };
        var Ds = Object(oe.connect)(null, function(e) {
            return {
                refreshOrders: function() {
                    return e(Ve())
                },
                openTestOrderModal: function() {
                    return e({
                        type: He.openTestOrderModal
                    })
                }
            }
        })(function(e) {
            var t = e.refreshOrders
              , r = {
                "test-order": e.openTestOrderModal,
                "refresh-page": t
            }
              , n = {
                handleMenuClick: function(e) {
                    r[e]()
                }
            };
            return _.a.createElement(s.db, Me({}, ws, n))
        })
          , Ms = {
            CoverOpen: {
                headline: "Cover is open",
                message: "Make sure your printer is closed. The printer should resume printing."
            },
            CutterError: {
                headline: "Printer isn't cutting properly",
                message: "Turn off the printer, remove any jammed paper, return the cutter to its home position and turn the printer on."
            },
            EmptyPrintImage: {
                headline: "That receipt is unavailable",
                message: "Looks like we couldn't get your receipt. Please try again."
            },
            NoPrinterFound: {
                headline: "No printer was found on the network",
                message: "Make sure your printer is connected."
            },
            OutOfPaperOrPaperIssues: {
                headline: "Out of paper",
                message: "Refill the paper and the printer will resume printing."
            },
            PrinterOffline: {
                headline: "Printer is offline",
                message: "Make sure the printer is powered on."
            },
            PrinterTemperature: {
                headline: "Printer is overheated",
                message: "Don’t use the printer until it cools off, then try again."
            },
            BadPrintImage: {
                headline: "The printer can't print",
                message: "There was an issue with the print image being sent to the printer."
            },
            Unknown: {
                headline: "The printer can't print",
                message: "There’s an issue with the printer. Wait a moment, then try again."
            },
            get UnrecoverableError() {
                return this.Unknown
            }
        };
        function ks(e) {
            return e.getIn(["orders", "printing", "queue"])
        }
        function Ls(e) {
            var t = e.getIn(["orders", "printing", "error"]);
            return t ? Ms[t] : null
        }
        function js(e, t) {
            return ks(e).some(function(e) {
                return e.get("uuid") === t
            })
        }
        function Ps(e, t) {
            return js(e, t) && !!Ls(e)
        }
        function xs(e) {
            return e.getIn(["orders", "printing", "running"])
        }
        function Us(e) {
            return e.getIn(["orders", "printing", "autoPrintEnabled"])
        }
        function Fs(e) {
            return e.getIn(["orders", "printing", "showPrintConsole"])
        }
        var Bs = Object(oe.connect)(function(e) {
            return {
                showPrintToggle: !!Ls(e) && ks(e).size > 0
            }
        }, function(e) {
            return {
                showConsole: function() {
                    return e(vr())
                }
            }
        })(function(e) {
            var t = e.showPrintToggle
              , r = e.showConsole;
            return t ? _.a.createElement("div", {
                className: "print__console-toggle",
                onClick: r
            }, _.a.createElement(s.w, {
                value: "warning",
                size: "small",
                iconColor: "chili"
            })) : null
        });
        function zs(e) {
            var t = e.count;
            return _.a.createElement(s.T, {
                text: "".concat(t),
                backgroundColor: "chili",
                size: "small",
                autoWidth: !0,
                textColor: "salt"
            })
        }
        function Gs(e) {
            var t = e.count
              , r = e.selected ? "blue-down" : "blue";
            return _.a.createElement(s.T, {
                text: "".concat(t),
                outline: !0,
                outlineColor: r,
                size: "small",
                autoWidth: !0,
                textColor: r
            })
        }
        zs.propTypes = {
            count: T.a.number
        },
        Gs.propTypes = {
            count: T.a.number,
            selected: T.a.bool
        };
        var Ys = function(e) {
            function t(e, r) {
                var n;
                return Ne(this, t),
                (n = Fe(this, je(t).call(this, e, r))).handleSelectTab = n.handleSelectTab.bind(Ue(Ue(n))),
                n
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "render",
                value: function() {
                    return _.a.createElement("div", {
                        className: "orders-tab-bar"
                    }, _.a.createElement("div", {
                        className: "orders-tab-bar__tabs"
                    }, _.a.createElement(s.pb, {
                        tabTitles: this.getTabTitles(this.props.orderCounts),
                        selectedIndex: this.currentTabIndex,
                        onSelectTab: this.handleSelectTab
                    })), _.a.createElement(Bs, null), this.props.hasRestaurants ? _.a.createElement("div", {
                        className: "orders-tab-bar__kabob"
                    }, _.a.createElement(Ds, null)) : null)
                }
            }, {
                key: "getTabTitles",
                value: function(e) {
                    var t = this;
                    return vt.map(function(r) {
                        var n = e && e[r];
                        return t.getTitleComponent(ht[r], r, n)
                    })
                }
            }, {
                key: "getRenderOrderCount",
                value: function(e, t) {
                    var r, n = e.confirmable, a = e.total;
                    return n ? r = _.a.createElement(zs, {
                        count: n
                    }) : a && (r = _.a.createElement(Gs, {
                        count: a,
                        selected: t
                    })),
                    r ? _.a.createElement("div", {
                        className: "orders-tab-bar__tabs-title__count"
                    }, r) : null
                }
            }, {
                key: "getTitleComponent",
                value: function(e, t, r) {
                    var n = e.id
                      , a = e.title
                      , i = e.hideCount
                      , s = t === this.props.currentTab
                      , o = i ? null : this.getRenderOrderCount(r, s);
                    return _.a.createElement("div", {
                        key: n.toLowerCase(),
                        id: "orders_tab_".concat(n.toLowerCase())
                    }, o, _.a.createElement("div", {
                        className: "".concat("orders-tab-bar__tabs-title", "__name")
                    }, a))
                }
            }, {
                key: "handleSelectTab",
                value: function(e) {
                    Object(n.Tb)(),
                    this.currentTabIndex !== e && (this.props.onTabChange(vt[e]),
                    this.props.analytics.startPerformanceMeasureFor("ORDER_TAB_TAP_OR_CLICK"))
                }
            }, {
                key: "currentTabIndex",
                get: function() {
                    return vt.indexOf(this.props.currentTab)
                }
            }]),
            t
        }();
        Ys.propTypes = {
            orderCounts: T.a.object
        };
        var Hs = Object(oe.connect)(function(e) {
            var t, r = Object(n.eb)(e);
            return {
                currentTab: e.getIn(["page", "data", "currentTab"]),
                hasRestaurants: r && r.size > 0,
                orderCounts: (t = {},
                De(t, ft, {
                    confirmable: e.getIn(["orders", "unconfirmedOrders"]).size
                }),
                De(t, pt, {
                    total: e.getIn(["orders", "outTheDoorCount"])
                }),
                De(t, gt, {
                    confirmable: e.getIn(["orders", "futureActionableOrders"]).size,
                    total: e.getIn(["orders", "scheduledCount"])
                }),
                t)
            }
        }, function(e) {
            return {
                onTabChange: function(t) {
                    return e($e(t))
                }
            }
        })(Ys)
          , qs = Object(n.ic)(Hs)
          , Qs = function(e) {
            return e.size > 0 ? null : _.a.createElement("p", null, "Specify a user and restaurant to view their orders.")
        }
          , Vs = function(e) {
            return e.size < 2 ? null : _.a.createElement("div", {
                className: "orders-header__restaurant-selector"
            }, _.a.createElement(s.t, {
                nested: !0
            }, _.a.createElement(s.l, {
                lg: 4
            }, _.a.createElement(n.w, null))))
        };
        var Js = Object(oe.connect)(function(e) {
            return {
                associatedRestaurants: Object(n.fb)(e)
            }
        }, null)(function(e) {
            var t = e.associatedRestaurants;
            return _.a.createElement(s.gb, null, _.a.createElement("div", {
                className: "orders-header"
            }, Qs(t), Vs(t), _.a.createElement(qs, null)))
        })
          , Ws = function(e) {
            var t = e.order
              , r = e.oldDesign
              , a = t.getIn(["contactInfo", "name"])
              , i = t.getIn(["contactInfo", "phone"])
              , s = t.getIn(["delivery", "deliveryAddress"])
              , o = s && s.get("addressLine1")
              , c = C()("order-details-header__diner-info", {
                "order-details-header__diner-info--scheduled": ir(t),
                "order-details-header__diner-info--old-design": r
            });
            return _.a.createElement("div", {
                className: c
            }, _.a.createElement("h4", {
                className: "order-details-header__diner-info__name"
            }, a), o ? function(e) {
                var t = e.get("addressLine1")
                  , r = e.get("addressLine2")
                  , n = e.get("crossStreets")
                  , a = e.get("city")
                  , i = e.get("state")
                  , s = e.get("zipCode")
                  , o = _.a.createElement("div", null, _.a.createElement("div", {
                    className: "order-details-header__diner-info__address"
                }, "".concat(t).concat(r ? ", " + r : "")), _.a.createElement("div", {
                    className: "order-details-header__diner-info__cross-street"
                }, n ? "Cross street: " + n : ""))
                  , c = _.a.createElement("div", {
                    className: "order-details-header__diner-info__city-state-zip"
                }, "".concat(a, " ").concat(i, " ").concat(s));
                return _.a.createElement("div", null, o, c)
            }(s) : null, _.a.createElement("div", {
                id: "diner-phone"
            }, i), function(e) {
                var t = e.getIn(["catering", "alternateName"])
                  , r = e.getIn(["catering", "alternatePhone"]);
                if (!t && !r)
                    return null;
                return _.a.createElement("div", {
                    className: "order-details-header__diner-info__alternate"
                }, _.a.createElement("h4", null, "Alternate Delivery Contact"), _.a.createElement("p", {
                    className: "order-details-header__diner-info__alternate-name"
                }, t), _.a.createElement("p", {
                    className: "order-details-header__diner-info__alternate-phone"
                }, Object(n.V)(r)))
            }(t))
        };
        Ws.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var Ks = function(e) {
            var t = e.order
              , r = t.getIn(["payments", "paymentType"])
              , n = C()("order-details-header-order-info__payment-type", {
                "order-details-header-order-info__payment-type--cash": "cash" === r.toLowerCase()
            });
            return _.a.createElement("div", {
                className: "order-details-header-order-info"
            }, _.a.createElement("h4", {
                className: "order-details-header-order-info__order-number"
            }, "#", t.get("orderNumber")), _.a.createElement("div", {
                className: "order-details-header-order-info__time-placed"
            }, function(e) {
                var t = e.get("timePlaced")
                  , r = function(e) {
                    return t = e.get("timePlaced"),
                    N()(t).isSame(N()(), "day") ? "[Received today ".concat(ir(e) ? "at " : "", "]h:mma") : "[Received on] ddd, MMM Do, h:mma";
                    var t
                }(e);
                return N()(t).format(r)
            }(t)), _.a.createElement("div", {
                className: n
            }, function(e) {
                return "cash" === e.toLowerCase() ? "Cash order" : "Prepaid order"
            }(r)))
        };
        Ks.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var Xs = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).intervalId = null,
                e.timeoutId = null,
                e.startIntervalToRefreshRelativeTimestamp = e.startIntervalToRefreshRelativeTimestamp.bind(Ue(Ue(e))),
                e
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = Gr(this.props.order)
                      , t = N()(e).diff(N()(), "seconds");
                    this.timeoutId = n.hc.setTimeout(this.startIntervalToRefreshRelativeTimestamp, (t + 1) % 60 * 1e3)
                }
            }, {
                key: "startIntervalToRefreshRelativeTimestamp",
                value: function() {
                    var e = this;
                    this.intervalId = n.hc.setInterval(function() {
                        return e.forceUpdate()
                    }, 6e4),
                    this.forceUpdate()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.intervalId && n.hc.clearInterval(this.intervalId),
                    n.hc.clearTimeout(this.timeoutId)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.order
                      , t = Date.now()
                      , r = Gr(e)
                      , n = Yr(e, t, r);
                    return "".concat(n, " ").concat(Vr(r, t))
                }
            }]),
            t
        }();
        Xs.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var Zs = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).timeoutId = null,
                e
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this
                      , t = Gr(this.props.order)
                      , r = N()(t).diff(N()(Date.now()), "seconds") - It;
                    r > 0 && (this.timeoutId = n.hc.setTimeout(function() {
                        return e.forceUpdate()
                    }, 1e3 * r))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    n.hc.clearTimeout(this.timeoutId)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.order
                      , t = Date.now()
                      , r = Gr(e)
                      , n = Yr(e, t, r);
                    return Hr(t, r) ? _.a.createElement(Xs, {
                        order: e
                    }) : "".concat(n, " ").concat(Vr(r, t))
                }
            }]),
            t
        }();
        function $s(e) {
            var t = e.order
              , r = e.isLarge
              , n = e.onClose
              , a = null
              , i = ir(t);
            i && (a = _.a.createElement("div", {
                className: "order-details-header-title-bar__timestamp"
            }, _.a.createElement(Zs, {
                order: t
            })));
            var o = "order-details-header-title-bar"
              , c = C()(o, De({}, "".concat(o, "--scheduled"), i));
            return _.a.createElement("div", null, _.a.createElement("div", {
                className: c
            }, _.a.createElement("div", {
                className: "order-details-header-title-bar__close"
            }, _.a.createElement("span", {
                onClick: n,
                className: "order-details-header-title-bar__close__icon"
            }, _.a.createElement(s.w, {
                value: "close",
                size: "small",
                iconColor: "blue"
            })), _.a.createElement("a", {
                className: "order-details-header-title-bar__close__back",
                onClick: n
            }, _.a.createElement(s.w, {
                className: "order-details-header-title-bar__close__arrow",
                value: "arrow-left",
                size: "small",
                iconColor: "blue"
            }), "Back")), _.a.createElement("h2", {
                className: "order-details-header-title-bar__order-type"
            }, function(e, t) {
                var r = e.get("isPickup")
                  , n = e.has("catering")
                  , a = t && !n ? "large" : ""
                  , i = ir(e) ? "scheduled" : ""
                  , s = n ? "catering" : ""
                  , o = n ? "" : r ? "pickup" : "delivery"
                  , c = Object(le.a)([a, i, s, o], "").join(" ");
                return Object(ce.a)(c)
            }(t, r))), a)
        }
        Zs.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        },
        $s.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            onClose: T.a.func.isRequired
        };
        var eo = Object(oe.connect)(function(e, t) {
            return {
                isLarge: yn(e, t.order)
            }
        })($s)
          , to = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    finished: !1,
                    processing: !1,
                    orderInPrintQueue: !1
                },
                r.onClick = r.onClick.bind(Ue(Ue(r))),
                r.resetState = r.resetState.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "componentWillUnmount",
                value: function() {
                    n.hc.clearTimeout(this.timeout)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    t.processing && e.orderInPrintQueue && !this.state.orderInPrintQueue && (this.timeout = n.hc.setTimeout(this.resetState, 2e3))
                }
            }, {
                key: "onClick",
                value: function(e) {
                    e.stopPropagation(),
                    this.state.processing || (this.setState({
                        finished: !1,
                        processing: !0
                    }),
                    this.props.printOrder())
                }
            }, {
                key: "resetState",
                value: function() {
                    this.setState({
                        finished: !1,
                        processing: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.className
                      , t = this.state
                      , r = t.finished
                      , n = t.processing
                      , a = this.isDisabled;
                    return _.a.createElement("div", {
                        className: e
                    }, _.a.createElement(s.e, {
                        type: "secondary",
                        disabled: a,
                        onClick: this.onClick,
                        className: "print-order-button",
                        isLoading: n,
                        isSuccess: !n && r,
                        successElement: this.successElement
                    }, _.a.createElement("span", {
                        className: "".concat("print-order-button", "__content")
                    }, "Print")))
                }
            }, {
                key: "isDisabled",
                get: function() {
                    var e = this.props
                      , t = e.order
                      , r = e.autoPrintEnabled
                      , a = e.associatedCustIdsFaxSetting[t.get("shortMerchantId")]
                      , i = n.Y.isGCInABox() && 0 === Object.keys(n.Y.getCurrentPrinter()).length;
                    return !a && !r && i
                }
            }, {
                key: "successElement",
                get: function() {
                    var e = this.state
                      , t = e.finished
                      , r = e.processing;
                    return t && !r ? _.a.createElement(s.w, {
                        className: "".concat("print-order-button", "__success-icon"),
                        value: "checkmark",
                        size: "regular",
                        iconColor: "green"
                    }) : null
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var r = {
                        orderInPrintQueue: e.orderInPrintQueue
                    };
                    return t.processing && t.orderInPrintQueue && !e.orderInPrintQueue ? (r.processing = !1,
                    r.finished = !0) : t.processing && e.orderInPrintQueue && !e.printerRunning && (r.finished = !1,
                    r.hover = !1,
                    r.processing = !1),
                    r
                }
            }]),
            t
        }();
        to.propTypes = {
            className: T.a.string,
            order: T.a.instanceOf(l.Map).isRequired
        };
        var ro = Object(oe.connect)(function(e, t) {
            var r = Object(n.fb)(e)
              , a = r ? qn(r) : {};
            return {
                orderInPrintQueue: js(e, t.order.get("uuid")),
                printerRunning: xs(e),
                autoPrintEnabled: Us(e),
                associatedCustIdsFaxSetting: a
            }
        }, function(e, t) {
            return {
                printOrder: function() {
                    e(pr([t.order], !1))
                }
            }
        })(to)
          , no = ["gfr-grid", "gfr-grid__col", "gfr-grid__col--4", "order-details-header-actions__btn-wrapper"]
          , ao = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                r = Fe(this, je(t).call(this, e)),
                ["adjustOrder", "cancelOrder"].forEach(function(e) {
                    return r[e] = r[e].bind(Ue(Ue(r)))
                }),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "calculateAdjustCancelStatus",
                value: function() {
                    var e = this.props.order
                      , t = "cash" === e.getIn(["payments", "paymentType"]).toLowerCase()
                      , r = e.get("status") === ut.ANTICIPATED
                      , n = !!e.getIn(["payments", "adjustments"]).size
                      , a = !!e.get("cancellation")
                      , i = e.get("status") === ut.CANCELLED;
                    return t || r || n || a || i
                }
            }, {
                key: "createButton",
                value: function(e, t, r, n) {
                    var a = C()(no, De({}, "order-details-header-actions__".concat(t), !0));
                    return _.a.createElement("div", {
                        className: a
                    }, _.a.createElement(s.e, {
                        type: "secondary",
                        disabled: n,
                        onClick: r,
                        className: "order-details-header-actions__btn"
                    }, _.a.createElement("span", {
                        className: "order-details-header-actions__btn__content"
                    }, e)))
                }
            }, {
                key: "adjustOrder",
                value: function(e) {
                    e.stopPropagation();
                    var t = this.props
                      , r = t.order;
                    (0,
                    t.showAdjustmentsModal)(r)
                }
            }, {
                key: "cancelOrder",
                value: function(e) {
                    var t = this.props
                      , r = t.order
                      , n = t.showCancelModal;
                    e.stopPropagation(),
                    n(r)
                }
            }, {
                key: "render",
                value: function() {
                    return _.a.createElement("div", {
                        className: "gfr-grid order-details-header-actions"
                    }, this.createButton("Adjust", "btn-adjust", this.adjustOrder, this.calculateAdjustCancelStatus()), this.createButton("Cancel", "btn-cancel", this.cancelOrder, this.calculateAdjustCancelStatus()), _.a.createElement(ro, {
                        className: C()(no, "order-details-header-actions__btn-print"),
                        order: this.props.order
                    }))
                }
            }]),
            t
        }();
        ao.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var io = Object(oe.connect)(null, function(e) {
            return {
                showAdjustmentsModal: function(t) {
                    return e(ms(t))
                },
                showCancelModal: function(t) {
                    return e(Xi(t))
                }
            }
        })(ao)
          , so = function(e) {
            var t = e.order
              , r = e.onClose;
            return _.a.createElement("div", null, _.a.createElement(eo, {
                order: t,
                onClose: r
            }), _.a.createElement(io, {
                order: t
            }), _.a.createElement(s.t, {
                className: "order-details-header__info-grid",
                flush: !0
            }, _.a.createElement(s.l, {
                sm: 12,
                width: 6
            }, _.a.createElement(Ks, {
                order: t
            })), _.a.createElement(s.l, {
                sm: 12,
                width: 6
            }, _.a.createElement(Ws, {
                order: t
            }))))
        };
        function oo(e) {
            var t = e.order
              , r = t.get("dinerUpdated");
            return ir(t) && r ? _.a.createElement("div", {
                className: "order-details-diner-updated-bar"
            }, _.a.createElement(s.w, {
                value: "update",
                size: "small",
                iconColor: "orange"
            }), _.a.createElement("h4", {
                className: "order-details-diner-updated-bar__text"
            }, "Order updated"), _.a.createElement("span", {
                className: "order-details-diner-updated-bar__time"
            }, N()(r).format("ddd, MMM D, h:mma"))) : null
        }
        so.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            onClose: T.a.func.isRequired
        },
        oo.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var co = 5;
        function lo(e) {
            return "".concat(function(e, t) {
                var r = t - N()(e).minute() % t;
                return N()(e).subtract(Math.abs(r - t), "minutes").format("h:mma")
            }(e, co), " - ").concat(function(e, t) {
                var r = t - N()(e).minute() % t;
                return N()(e).add(r, "minutes").format("h:mma")
            }(e, co))
        }
        function uo(e, t) {
            return e <= N()(t).add({
                minute: 5
            }) ? "Driver is arriving shortly" : "Driver arrival ".concat(lo(e))
        }
        function mo(e) {
            switch (e.getIn(["delivery", "deliveryInfo", "status"])) {
            case "DELIVERED":
                return function(e) {
                    var t = e.getIn(["delivery", "deliveryInfo", "times", "dropoff", "timestamp"]);
                    return "Delivered at ".concat(N()(t).format("h:mmA"))
                }(e);
            case "IN_TRANSIT":
                return "Delivery in progress";
            default:
                return function(e) {
                    var t = e.getIn(["delivery", "deliveryInfo", "courier"])
                      , r = e.getIn(["delivery", "deliveryInfo", "times", "pickup", "timestamp"]) || e.getIn(["delivery", "deliveryInfo", "preferences", "pickupTime"]);
                    return t ? Zt(e) ? "Driver is arriving shortly" : uo(N()(r)) : "Assigning delivery driver ..."
                }(e)
            }
        }
        var go = function(e) {
            var t = e.order;
            return _.a.createElement("h4", {
                className: "delivery-status-summary"
            }, mo(t))
        };
        function po(e) {
            return e.getIn(["delivery", "deliveryInfo", "courier", "photoUrl"])
        }
        go.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired
        };
        var fo = function(e) {
            function t() {
                return Ne(this, t),
                Fe(this, je(t).apply(this, arguments))
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "render",
                value: function() {
                    return _.a.createElement("div", {
                        className: "assigned-delivery-detail gfr-grid"
                    }, _.a.createElement("div", {
                        className: "assigned-delivery-detail__content gfr-grid__col gfr-grid__col--10"
                    }, this.props.children), this.timestamp)
                }
            }, {
                key: "timestamp",
                get: function() {
                    var e = this.props.timestamp;
                    return e ? _.a.createElement("div", {
                        className: "assigned-delivery-detail__timestamp gfr-grid__col gfr-grid__col--2"
                    }, N()(e).format("h:mma")) : null
                }
            }]),
            t
        }()
          , ho = function(e) {
            function t() {
                return Ne(this, t),
                Fe(this, je(t).apply(this, arguments))
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "render",
                value: function() {
                    return _.a.createElement("div", {
                        className: "assigned-delivery-details"
                    }, this.dropoffDetail, this.pickupDetail, _.a.createElement(fo, null, _.a.createElement("div", {
                        className: "assigned-delivery-details__icon"
                    }, _.a.createElement(s.w, {
                        size: "small",
                        value: "checkmark",
                        iconColor: "green"
                    })), "Delivery driver assigned"))
                }
            }, {
                key: "deliveryStatus",
                get: function() {
                    return this.props.order.getIn(["delivery", "deliveryInfo", "status"])
                }
            }, {
                key: "dropoffDetail",
                get: function() {
                    var e = this.props.order
                      , t = e.getIn(["delivery", "deliveryInfo", "times", "dropoff", "timestamp"]);
                    switch (this.deliveryStatus) {
                    case "DELIVERED":
                        return _.a.createElement(fo, {
                            timestamp: t
                        }, _.a.createElement("div", {
                            className: "assigned-delivery-details__icon"
                        }, _.a.createElement(s.w, {
                            size: "small",
                            value: "checkmark",
                            iconColor: "green"
                        })), "Order delivered to ", e.getIn(["contactInfo", "name"]));
                    case "IN_TRANSIT":
                        return _.a.createElement(fo, null, _.a.createElement("div", {
                            className: "assigned-delivery-details__icon"
                        }, _.a.createElement(s.w, {
                            size: "small",
                            value: "more"
                        })), "Order being delivered");
                    default:
                        return null
                    }
                }
            }, {
                key: "pickupDetail",
                get: function() {
                    var e = this.props.order.getIn(["delivery", "deliveryInfo", "times", "pickup", "timestamp"]);
                    switch (this.deliveryStatus) {
                    case "DELIVERED":
                    case "IN_TRANSIT":
                        return _.a.createElement(fo, {
                            timestamp: e
                        }, _.a.createElement("div", {
                            className: "assigned-delivery-details__icon"
                        }, _.a.createElement(s.w, {
                            size: "small",
                            value: "checkmark",
                            iconColor: "green"
                        })), "Order picked up");
                    default:
                        return _.a.createElement(fo, null, _.a.createElement("div", {
                            className: "assigned-delivery-details__icon"
                        }, _.a.createElement(s.w, {
                            size: "small",
                            value: "more"
                        })), "Driver coming to restaurant")
                    }
                }
            }]),
            t
        }()
          , vo = "ratedriver_details_ratelink";
        var Eo = Object(oe.connect)(null, function(e) {
            return {
                onClick: function() {
                    return e(Object(ne.push)("/orders/drivers?ctaId=".concat(vo)))
                }
            }
        })(function(e) {
            var t = e.onClick
              , r = e.analytics;
            return _.a.createElement("section", {
                className: "rate-driver-confirmation"
            }, _.a.createElement("p", null, "Thanks for your feedback!"), _.a.createElement("p", null, _.a.createElement("a", {
                href: "javascript:void(0);",
                onClick: function() {
                    return function(e, t) {
                        e(n.d, {
                            ctaId: vo,
                            type: "Viewed",
                            header: "Rate Your Drivers"
                        }),
                        t()
                    }(r.sendCSV2Analytics, t)
                }
            }, _.a.createElement("strong", {
                className: "strong-as-label"
            }, "Rate more drivers"))))
        })
          , yo = Object(n.ic)(Eo);
        function Ao(e) {
            var t = e.getIn(["page", "data", "rateDriverModal"]);
            return t.get("visible") ? t.get("form") : null
        }
        var bo = function(e) {
            var t = e.comments
              , r = e.onToggleComment;
            return i.a.size(t) < 1 ? null : _.a.createElement("div", {
                className: "rate-driver-form-comments"
            }, i.a.map(t, function(e, t) {
                return function(e) {
                    var t = e.comment
                      , r = e.selected
                      , n = e.onToggleComment;
                    return _.a.createElement(s.e, {
                        key: t,
                        className: "rate-driver-form-comments__button",
                        type: "secondary",
                        forceActive: r,
                        onClick: function() {
                            return n(t)
                        }
                    }, t)
                }({
                    selected: e,
                    comment: t,
                    onToggleComment: r
                })
            }))
        };
        bo.propTypes = {
            comments: T.a.object.isRequired,
            onToggleComment: T.a.func.isRequired
        };
        var _o = Object(oe.connect)(function(e, t) {
            var r = t.form
              , n = r.get("selectedRating")
              , a = r.get("selectedComments")
              , i = {};
            return Ra(n).forEach(function(e) {
                i[e] = a.includes(e)
            }),
            {
                comments: i
            }
        }, function(e, t) {
            var r = t.form;
            return {
                onToggleComment: function(t) {
                    return e(Zn(r.get("name"), t))
                }
            }
        })(bo);
        var Oo = Object(oe.connect)(function(e) {
            return {
                form: Ao(e)
            }
        })(_o)
          , To = function(e) {
            var t = e.order
              , r = e.rating
              , n = e.hidden
              , a = e.isLoading
              , i = e.isSuccess
              , o = e.onClose
              , c = e.onChangeRating
              , l = e.onSubmit
              , u = t.getIn(["delivery", "deliveryInfo", "courier"]);
            return n ? null : _.a.createElement(s.H, {
                className: "rate-driver-modal",
                outsideClicksCloseModal: !1,
                onClose: o
            }, _.a.createElement(s.b, {
                className: "rate-driver-modal__avatar",
                photoUrl: po(t)
            }), _.a.createElement("h2", null, u.get("name")), _.a.createElement(s.Y, {
                className: "rate-driver-modal__rating",
                value: r,
                maximum: 5,
                iconSize: "medium",
                iconColor: "orange",
                onChange: c
            }), _.a.createElement(Oo, null), _.a.createElement(s.e, {
                className: "rate-driver-modal__submit-button",
                type: "primary",
                isLoading: a,
                isSuccess: i,
                onClick: l
            }, "Submit"))
        };
        To.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            rating: T.a.number,
            hidden: T.a.bool,
            isLoading: T.a.bool,
            isSuccess: T.a.bool,
            onSubmit: T.a.func,
            onClose: T.a.func,
            onChangeRating: T.a.func
        },
        To.defaultProps = {
            isLoading: !1,
            isSuccess: !1
        };
        var Io = Object(oe.connect)(function(e) {
            var t = Ao(e);
            return t ? {
                rating: t.get("selectedRating"),
                isLoading: t.get("isLoading"),
                isSuccess: t.get("isSuccess")
            } : {
                hidden: !0
            }
        }, function(e, t) {
            var r = t.order;
            return {
                onSubmit: function() {
                    return e(Wi({
                        courierId: r.getIn(["delivery", "deliveryInfo", "courier", "id"]),
                        merchantId: r.get("shortMerchantId"),
                        deliveryId: r.getIn(["delivery", "deliveryId"])
                    }))
                },
                onClose: function() {
                    return e(Qi())
                },
                onChangeRating: function(t) {
                    return e(Vi(t))
                }
            }
        })(To);
        function Co(e, t, r) {
            return e.getIn(["delivery", "deliveryInfo", "courier", "id"]) && !r && function(e) {
                var t = N()(e.get("requestedFulfillmentAt")).isSame(new Date, "day")
                  , r = e.getIn(["delivery", "deliveryInfo", "status"]);
                return t && ("IN_TRANSIT" === r || "DELIVERED" === r)
            }(e) ? _.a.createElement(s.Y, {
                className: "assigned-delivery__rating",
                value: 0,
                maximum: 5,
                iconSize: "medium",
                iconColor: "orange",
                onChange: t
            }) : null
        }
        var Ro = function(e) {
            var t = e.order
              , r = e.showDetails
              , a = e.showRateDriverConfirmation
              , i = e.onChangeRating
              , o = t.getIn(["delivery", "deliveryInfo", "courier"])
              , c = Object(n.V)(o.get("phone"));
            return _.a.createElement("div", {
                className: "assigned-delivery"
            }, _.a.createElement("div", {
                className: "assigned-delivery__courier"
            }, _.a.createElement(s.b, {
                photoUrl: po(t)
            }), _.a.createElement("div", {
                className: "assigned-delivery__courier-info"
            }, _.a.createElement("h4", {
                className: "assigned-delivery__courier-name"
            }, o.get("name")), c, a ? _.a.createElement(yo, null) : null), Co(t, i, a), _.a.createElement(Io, {
                order: t
            })), r ? _.a.createElement(ho, {
                order: t
            }) : null)
        };
        Ro.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            showDetails: T.a.bool,
            showRateDriverConfirmation: T.a.bool,
            onChangeRating: T.a.func
        };
        var No = Object(oe.connect)(function(e) {
            return {
                showRateDriverConfirmation: e.getIn(["page", "data", "orderDetailsSuccessfullySubmittedDriverRating"])
            }
        }, function(e) {
            return {
                onChangeRating: function(t) {
                    return e(qi(t))
                }
            }
        })(Ro);
        var So = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).state = {
                    showDetails: !1
                },
                e.toggleDetails = function() {
                    return e.setState({
                        showDetails: !e.state.showDetails
                    })
                }
                ,
                e
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "render",
                value: function() {
                    var e = this.props.order
                      , t = this.state.showDetails
                      , r = e.getIn(["delivery", "deliveryInfo", "courier"]);
                    return function(e) {
                        return !er(e) && !e.get("beforeLeadTimeWindow")
                    }(e) || r ? _.a.createElement("div", {
                        className: "order-details-delivery-info"
                    }, _.a.createElement(go, {
                        order: e
                    }), r ? this.assignedDeliveryToggle : null, r ? _.a.createElement(No, {
                        order: e,
                        showDetails: t
                    }) : null) : null
                }
            }, {
                key: "assignedDeliveryToggle",
                get: function() {
                    return _.a.createElement("a", {
                        href: "javascript:void(0);",
                        className: "order-details-delivery-info__toggle",
                        onClick: this.toggleDetails
                    }, _.a.createElement("strong", {
                        className: "strong-as-label"
                    }, this.state.showDetails ? "Hide" : "Show", " status"))
                }
            }]),
            t
        }();
        So.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired
        };
        var wo = function(e) {
            var t, r, n, a = e.order, i = a.get("cancellation"), s = i || a.get("status") === ut.CANCELLED, o = or(a), c = Rn(a), l = a.getIn(["charges", "restaurantAdjustedTotal"]);
            return s ? (r = (t = i).get("notes"),
            n = t.get("reason"),
            _.a.createElement("div", {
                className: "adjust-cancel-details"
            }, n ? _.a.createElement("div", {
                className: "adjust-cancel-details__row"
            }, _.a.createElement("h4", {
                className: "adjust-cancel-details__row__left-container"
            }, "Cancellation reason"), _.a.createElement("h4", {
                className: "adjust-cancel-details__row__right-container"
            }, n)) : null, r ? _.a.createElement("div", {
                className: "adjust-cancel-details__row__sub-text"
            }, r) : null)) : function(e, t, r) {
                var n = e.get("pending")
                  , a = e.get("requestedAmount")
                  , i = e.get("notes")
                  , s = e.get("reason")
                  , o = !n && r - t
                  , c = (o || a) > 0 ? "Upcharge:" : "Refund:";
                return _.a.createElement("div", {
                    className: "adjust-cancel-details"
                }, s ? _.a.createElement("div", {
                    className: "adjust-cancel-details__row"
                }, _.a.createElement("h4", {
                    className: "adjust-cancel-details__row__left-container"
                }, "Adjustment type"), _.a.createElement("h4", {
                    className: "adjust-cancel-details__row__right-container"
                }, "".concat(c, " ").concat(s))) : null, i ? _.a.createElement("div", {
                    className: "adjust-cancel-details__row__sub-text"
                }, i) : null, a ? _.a.createElement("div", {
                    className: "adjust-cancel-details__row"
                }, _.a.createElement("h4", {
                    className: "adjust-cancel-details__row__left-container"
                }, "Requested amount"), _.a.createElement("h4", {
                    className: "adjust-cancel-details__row__right-container"
                }, Do(a))) : null, o ? _.a.createElement("div", {
                    className: "adjust-cancel-details__row"
                }, _.a.createElement("h4", {
                    className: "adjust-cancel-details__row__left-container"
                }, "Approved amount"), _.a.createElement("h4", {
                    className: "adjust-cancel-details__row__right-container"
                }, Do(o))) : null, o || n ? null : _.a.createElement("div", {
                    className: "adjust-cancel-details__row"
                }, _.a.createElement("h4", {
                    className: "adjust-cancel-details__row__left-container"
                }, "Request processed"), _.a.createElement("h4", {
                    className: "adjust-cancel-details__row__right-container"
                }, "No adjustment to total")), _.a.createElement("div", {
                    className: "adjust-cancel-details__row__sub-text"
                }, "Grubhub calculates the applicable state taxes from the requested adjustment amount and uses the new amount for the adjusted total."))
            }(o, c, l)
        };
        function Do(e) {
            return e > 0 ? Q()(e).format("$0,0.00") : Q()(e).format("-$0,0.00")
        }
        wo.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired
        };
        var Mo = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    showDetails: !1
                },
                r.toggleDetails = r.toggleDetails.bind(Ue(Ue(r))),
                r
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "toggleDetails",
                value: function() {
                    this.setState({
                        showDetails: !this.state.showDetails
                    })
                }
            }, {
                key: "getAdjustCancelHeader",
                value: function(e, t, r) {
                    return t ? "Order cancelled" : e ? "Cancellation pending ..." : r ? "Order adjusted" : "Adjustment pending ..."
                }
            }, {
                key: "displayDetailToggle",
                value: function(e, t) {
                    var r = e && (e.get("reason") || e.get("notes"));
                    return !e && !t || r
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props.order, r = t.get("cancellation"), n = t.get("status") === ut.CANCELLED, a = or(t), i = a && !a.get("pending"), s = r || n || a, o = C()("order-details-adjust-cancel-status__text", (De(e = {}, "order-details-adjust-cancel-status__text--adjusted", i),
                    De(e, "order-details-adjust-cancel-status__text--cancelled", n),
                    e)), c = C()("order-details-adjust-cancel-status", De({}, "order-details-adjust-cancel-status--expand-details", this.state.showDetails));
                    return s ? _.a.createElement("div", null, _.a.createElement("div", {
                        className: c
                    }, _.a.createElement("h4", {
                        className: o
                    }, this.getAdjustCancelHeader(r, n, i)), this.displayDetailToggle(r, n) ? _.a.createElement("a", {
                        href: "javascript:void(0);",
                        className: "order-details-adjust-cancel-status__toggle",
                        onClick: this.toggleDetails
                    }, _.a.createElement("strong", {
                        className: "strong-as-label"
                    }, this.state.showDetails ? "Hide" : "Show", " details")) : null), this.state.showDetails ? _.a.createElement(wo, {
                        order: t
                    }) : null) : null
                }
            }]),
            t
        }();
        Mo.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var ko = function(e) {
            var t = e.printerError
              , r = e.showPrintConsole;
            return t ? _.a.createElement("div", {
                className: "order-details-printer-error",
                onClick: r
            }, _.a.createElement(s.w, {
                iconColor: "chili",
                size: "regular",
                value: "warning"
            }), _.a.createElement("span", {
                className: "order-details-printer-error__message"
            }, "Order failed to print. ", t)) : null
        };
        ko.propTypes = {
            orderUuid: T.a.string.isRequired
        };
        var Lo = Object(oe.connect)(function(e, t) {
            var r = js(e, t.orderUuid)
              , n = Ls(e);
            return {
                printerError: r && n && n.headline || null
            }
        }, function(e) {
            return {
                showPrintConsole: function() {
                    e(vr())
                }
            }
        })(ko);
        function jo(e) {
            var t = e.catering.get("estimatedAttendees")
              , r = C()("order-details-instructions__icon order-details-instructions__icon--".concat("user"));
            return _.a.createElement(s.t, {
                className: "order-details-instructions__item"
            }, _.a.createElement(s.l, {
                width: 1,
                className: "order-details-instructions__icon-col"
            }, _.a.createElement(s.w, {
                className: r,
                value: "user",
                size: "small",
                iconColor: "green",
                lockSize: !0
            })), _.a.createElement(s.l, {
                width: 11,
                className: "order-details-instructions__info"
            }, _.a.createElement("span", {
                className: "order-details-instructions__info__highlight"
            }, t), " ", "attendees."))
        }
        function Po(e) {
            var t = e.exclude
              , r = t ? "close" : "checkmark"
              , n = t ? "red" : "green"
              , a = C()("order-details-instructions__icon order-details-instructions__icon--".concat(r));
            return _.a.createElement(s.t, {
                className: "order-details-instructions__item order-details-instructions__exclude-utensils"
            }, _.a.createElement(s.l, {
                width: 1,
                className: "order-details-instructions__icon-col"
            }, _.a.createElement(s.w, {
                className: a,
                value: r,
                size: "small",
                iconColor: n,
                lockSize: !0
            })), _.a.createElement(s.l, {
                width: 11,
                className: "order-details-instructions__info"
            }, _.a.createElement("span", {
                className: "order-details-instructions__info__highlight"
            }, t ? "Don't" : "Yes,"), " ", "include plates, utensils, ", t ? "or" : "and", " napkins"))
        }
        function xo(e) {
            var t = e.specialInstructions
              , r = C()("order-details-instructions__icon order-details-instructions__icon--".concat("info"));
            return _.a.createElement(s.t, {
                className: "order-details-instructions__item order-details-instructions__special-instructions"
            }, _.a.createElement(s.l, {
                width: 1,
                className: "order-details-instructions__icon-col"
            }, _.a.createElement(s.w, {
                className: r,
                value: "info",
                size: "small",
                iconColor: "truffle-30",
                lockSize: !0
            })), _.a.createElement(s.l, {
                width: 11,
                className: "order-details-instructions__info"
            }, t))
        }
        function Uo(e) {
            var t = e.catering
              , r = t.get("setupFood")
              , n = t.get("setupInstructions")
              , a = r ? "checkmark" : "close"
              , i = r ? "green" : "red"
              , o = C()("order-details-instructions__icon order-details-instructions__icon--".concat(a));
            return _.a.createElement(s.t, {
                className: "order-details-instructions__item order-details-instructions__setup-instructions"
            }, _.a.createElement(s.l, {
                width: 1,
                className: "order-details-instructions__icon-col"
            }, _.a.createElement(s.w, {
                className: o,
                value: a,
                size: "small",
                iconColor: i,
                lockSize: !0
            })), _.a.createElement(s.l, {
                width: 11,
                className: "order-details-instructions__info"
            }, _.a.createElement("span", {
                className: "order-details-instructions__setup-text"
            }, _.a.createElement("span", {
                className: "order-details-instructions__info__highlight"
            }, r ? "Yes," : "No"), " ", "food setup required."), r ? _.a.createElement("div", {
                className: "order-details-instructions__setup-text-instructions"
            }, n) : null))
        }
        jo.propTypes = {
            catering: T.a.instanceOf(l.Map).isRequired
        },
        Po.propTypes = {
            exclude: T.a.bool
        },
        xo.propTypes = {
            specialInstructions: T.a.string.isRequired
        },
        Uo.propTypes = {
            catering: T.a.instanceOf(l.Map).isRequired
        };
        var Fo = "order-details-instructions";
        function Bo(e) {
            var t = e.order
              , r = "EXCLUDE" === t.get("diningSupplies")
              , n = t.get("catering")
              , a = function(e) {
                var t = e.get("specialInstructions");
                if (!t)
                    return null;
                var r = e.get("isPickup");
                return _.a.createElement("div", {
                    className: Fo
                }, _.a.createElement("h4", {
                    className: "".concat(Fo, "__item")
                }, r ? "Pickup" : "Delivery", " instructions"), _.a.createElement(xo, {
                    specialInstructions: t
                }))
            }(t)
              , i = function(e, t) {
                if (!t)
                    return null;
                var r = "".concat(Fo, " ").concat(Fo, "--special");
                return _.a.createElement("div", {
                    className: r
                }, _.a.createElement("h4", {
                    className: "".concat(Fo, "__item")
                }, "Special order instructions"), _.a.createElement(Po, {
                    exclude: !0
                }))
            }(0, r && !n)
              , s = function(e, t, r) {
                var n = "".concat(Fo, " ").concat(Fo, "--catering");
                return r ? _.a.createElement("div", {
                    className: n
                }, _.a.createElement("h4", {
                    className: "".concat(Fo, "__item")
                }, "Catering order instructions"), _.a.createElement(jo, {
                    catering: r
                }), _.a.createElement(Po, {
                    exclude: t
                }), _.a.createElement(Uo, {
                    catering: r
                })) : null
            }(0, r, n);
            return a || i || s ? _.a.createElement("div", null, a, i, s) : null
        }
        Bo.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var zo = "Items requiring a minimum advance notice are clearly labelled below.";
        function Go(e) {
            var t = e.order.getIn(["charges", "lineGroups", 0, "lines"])
              , r = new Set(t.map(function(e) {
                return e.get("leadTimeMs")
            }))
              , n = r.size > 1 ? zo : tn(r.values().next().value);
            return _.a.createElement("div", {
                className: "minimum-advance-notice"
            }, _.a.createElement("h4", null, "Minimum advance notice"), _.a.createElement(s.t, {
                className: "minimum-advance-notice__item"
            }, _.a.createElement(s.l, {
                width: 1,
                className: "minimum-advance-notice__icon-col"
            }, _.a.createElement(s.w, {
                value: "clock",
                className: "minimum-advance-notice__icon",
                size: "small",
                iconColor: "truffle-30",
                lockSize: !0
            })), _.a.createElement(s.l, {
                width: 11,
                className: "minimum-advance-notice__info"
            }, _.a.createElement("small", null, n))))
        }
        var Yo = function(e, t) {
            var r = e.get("name");
            return _.a.createElement("li", {
                key: "modifier-".concat(t)
            }, r)
        }
          , Ho = function(e) {
            var t = e.line
              , r = e.showAdvanceNotice
              , n = function(e) {
                var t = [];
                e.get("quantity") > 1 && t.push(Q()(e.get("price")).format("$0,0.00") + "/ea");
                var r = Xr(e.get("minimumServingSize"), e.get("maximumServingSize"));
                return r && t.push("serves " + r),
                0 === t.length ? null : _.a.createElement("p", {
                    className: "order-details-menu-item__unit-price"
                }, "(", t.join(", "), ")")
            }(t)
              , a = function(e) {
                var t = e.get("lineOptions");
                if (!t.size)
                    return null;
                var r = "order-details-menu-item__modifiers"
                  , n = C()(r, De({}, "".concat(r, "--multi-column"), t.size > 5));
                return _.a.createElement("ul", {
                    className: n
                }, t.map(Yo))
            }(t)
              , i = function(e) {
                var t = e.get("specialInstructions");
                return t ? _.a.createElement("p", {
                    className: "order-details-menu-item__instructions"
                }, "Instructions: ", t) : null
            }(t)
              , o = C()("order-details-menu-item", {
                "order-details-menu-item--with-unit-price": n,
                "order-details-menu-item--with-modifiers": a,
                "order-details-menu-item--with-instructions": i
            })
              , c = 0
              , l = t.get("leadTimeMs");
            return r && (c = 3),
            _.a.createElement("div", {
                className: o
            }, _.a.createElement(s.t, {
                className: "order-details-menu-item__content"
            }, _.a.createElement(s.l, {
                width: 1
            }, _.a.createElement("h4", null, t.get("quantity"))), _.a.createElement(s.l, {
                lg: 9 - c,
                md: 9 - c,
                sm: 8 - c
            }, _.a.createElement("h4", null, t.get("name")), n, a, i), r && _.a.createElement(s.l, {
                width: c,
                className: "order-details-menu-item__advanced-notice"
            }, l ? _.a.createElement(s.A, {
                transparentBg: !0,
                hasBorder: !0,
                icon: {
                    value: "clock",
                    iconColor: "truffle-50"
                },
                color: "truffle-50"
            }, Jr(l)) : null), _.a.createElement(s.l, {
                lg: 2,
                md: 2,
                sm: 3,
                className: "order-details-menu-item__price"
            }, _.a.createElement("h4", null, Q()(t.get("total")).format("$0,0.00")))))
        };
        function qo(e) {
            var t = e.order
              , r = $r(t) && !en(t)
              , n = t.getIn(["charges", "lineGroups", 0, "lines"]) || Object(l.fromJS)([]);
            return _.a.createElement("div", {
                className: "order-details-items"
            }, n.map(function(e, t) {
                var n = e.get("name") + t
                  , a = {
                    line: e,
                    showAdvanceNotice: r
                };
                return _.a.createElement(Ho, Me({
                    key: n
                }, a))
            }))
        }
        qo.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired
        };
        var Qo = "$0,0.00";
        function Vo(e) {
            var t = e.order.getIn(["charges", "coupons"]);
            return t && t.size ? _.a.createElement("div", {
                className: "order-details-coupons"
            }, t.map(function(e, t) {
                var r = "coupon-".concat(t);
                return _.a.createElement("div", {
                    className: "gfr-grid order-details-coupons__item",
                    key: r
                }, _.a.createElement("div", {
                    className: "order-details-coupons__icon gfr-grid__col gfr-grid__col--1"
                }, _.a.createElement(s.w, {
                    value: "cut",
                    size: "small",
                    iconColor: "green"
                })), _.a.createElement("div", {
                    className: "order-details-coupons__text gfr-grid__col gfr-grid__col-lg--9 gfr-grid__col-md--8 gfr-grid__col-sm--7"
                }, _.a.createElement("h4", null, "Coupon"), _.a.createElement("p", null, e.get("text"))), _.a.createElement("h4", {
                    className: "order-details-coupons__amount gfr-grid__col gfr-grid__col-lg--2 gfr-grid__col-md--3 gfr-grid__col-sm--4"
                }, "- ", Q()(e.get("amount")).format(Qo)))
            })) : null
        }
        Vo.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var Jo = function(e) {
            function t(e) {
                return Ne(this, t),
                Fe(this, je(t).call(this, e))
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "renderFor",
                value: function(e) {
                    return this.props.isTotal ? _.a.createElement("h4", null, e) : e
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , r = e.title
                      , n = e.value
                      , a = isNaN(n) ? n : Q()(n).format("$0,0.00")
                      , i = C()("gfr-grid", "order-details-charges__item", t);
                    return _.a.createElement("div", {
                        className: i
                    }, _.a.createElement("div", {
                        className: "gfr-grid__col gfr-grid__col--5 gfr-grid__col-offset--4 order-details-charges__title"
                    }, this.renderFor(r)), _.a.createElement("div", {
                        className: "gfr-grid__col gfr-grid__col--3 order-details-charges__amount"
                    }, this.renderFor(a)))
                }
            }]),
            t
        }();
        function Wo(e) {
            var t = e.order
              , r = t.get("isPickup")
              , n = t.getIn(["delivery", "grubhubDelivery"]);
            if (r || n)
                return null;
            var a = t.getIn(["charges", "deliveryFee"]);
            return _.a.createElement(Jo, {
                title: "Delivery Fee",
                value: a
            })
        }
        function Ko(e) {
            var t = e.order
              , r = t.get("charges");
            if (t.getIn(["delivery", "grubhubDelivery"]))
                return null;
            var n = r.get("tipAmount");
            return _.a.createElement(Jo, {
                title: "Tip",
                value: n || "N/A (Cash Tip)"
            })
        }
        function Xo(e) {
            var t = e.order
              , r = or(t)
              , n = r && r.get("pending")
              , a = r && r.get("requestedAmount") && 0 !== r.get("requestedAmount")
              , i = r && r.get("adjustmentAmount")
              , s = n && a || i
              , o = s ? "Original Restaurant Total" : "Restaurant Total"
              , c = Rn(t);
            return _.a.createElement(Jo, {
                className: "order-details-charges__total",
                title: o,
                value: c,
                isTotal: !s
            })
        }
        Jo.propTypes = {
            isTotal: T.a.bool,
            title: T.a.string.isRequired,
            value: T.a.oneOfType([T.a.number, T.a.string]).isRequired
        },
        Jo.defaultProps = {
            isTotal: !1,
            value: 0
        },
        Wo.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        },
        Ko.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        },
        Xo.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var Zo = function(e) {
            function t(e) {
                return Ne(this, t),
                Fe(this, je(t).call(this, e))
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "renderPendingAdjustment",
                value: function() {
                    var e = Rn(this.props.order)
                      , t = this.pendingAdjustedBy
                      , r = t + e;
                    return 0 !== t ? _.a.createElement("div", null, _.a.createElement(Jo, {
                        title: "Pending Adjustment",
                        value: t
                    }), _.a.createElement(Jo, {
                        title: "Pending Adjusted Total",
                        value: r,
                        isTotal: !0
                    })) : null
                }
            }, {
                key: "renderFinishedAdjustment",
                value: function() {
                    var e = this.props.order
                      , t = e.getIn(["charges", "restaurantAdjustedTotal"], 0)
                      , r = t - e.getIn(["charges", "restaurantGrandTotal"]);
                    return _.a.createElement("div", null, _.a.createElement(Jo, {
                        title: "Adjusted By",
                        value: r
                    }), _.a.createElement(Jo, {
                        title: "Adjusted Total",
                        value: t,
                        isTotal: !0
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = or(this.props.order)
                      , t = e && e.get("pending")
                      , r = e && e.get("requestedAmount") && 0 !== e.get("requestedAmount")
                      , n = e && e.get("adjustedTotal");
                    return t && r || n ? t ? this.renderPendingAdjustment() : this.renderFinishedAdjustment() : null
                }
            }, {
                key: "pendingAdjustedBy",
                get: function() {
                    var e = or(this.props.order);
                    return e && e.get("requestedAmount") || 0
                }
            }]),
            t
        }();
        function $o(e) {
            var t = e.order
              , r = t.getIn(["charges", "subTotal"])
              , n = t.getIn(["payments", "paymentType"])
              , a = Nn(t);
            return _.a.createElement("div", {
                className: "order-details-charges"
            }, _.a.createElement(Jo, {
                className: "order-details-charges__sub-total",
                title: "Subtotal",
                value: r,
                isTotal: !0
            }), _.a.createElement(Wo, {
                order: t
            }), _.a.createElement(Jo, {
                title: "Taxes",
                value: a
            }), _.a.createElement(Ko, {
                order: t
            }), _.a.createElement("div", {
                className: "gfr-grid__col-offset--4 gfr-grid__col gfr-grid__col--8 gfr-grid order-details-charges__divider"
            }), _.a.createElement(Xo, {
                order: t
            }), _.a.createElement(Zo, {
                order: t
            }), _.a.createElement("div", {
                className: "gfr-grid order-details-charges__item order-details-charges__payment-type"
            }, _.a.createElement("div", {
                className: "gfr-grid__col gfr-grid__col--8 gfr-grid__col-offset--4"
            }, "cash" === n.toLowerCase() ? "Cash order" : "Prepaid order")))
        }
        function ec(e, t) {
            if (On(e, t)) {
                var r = function(e, t) {
                    var r = e.getIn(["delivery", "deliveryInfo", "pickupFeasibilityTime"])
                      , n = e.getIn(["delivery", "deliveryInfo", "courier"])
                      , a = e.getIn(["delivery", "deliveryInfo", "times", "pickup", "timestamp"]);
                    if (n && a) {
                        var i = qr(a, t);
                        return Math.max(i, 5)
                    }
                    if (!r)
                        return null;
                    var s = qr(r, t);
                    return Math.max(s, 10)
                }(e, t);
                return r || null
            }
            return En(e.get("isPickup"), e.getIn(["delivery", "grubhubDelivery"]), e.get("shortMerchantId"), t, e)
        }
        Zo.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        },
        $o.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var tc = function(e) {
            function t(e, r) {
                return Ne(this, t),
                Fe(this, je(t).call(this, "orderStatusUpdated", 4, e, r))
            }
            return Le(t, n["c"]),
            we(t, [{
                key: "getData",
                value: function(e, t) {
                    var r = t.firedFrom
                      , n = t.order
                      , a = t.waitEstimate
                      , i = t.reason
                      , s = t.sendSuggestion
                      , o = void 0 !== s && s
                      , c = Xt(n)
                      , l = n.get("uuid")
                      , u = En(n.get("isPickup"), n.getIn(["delivery", "grubhubDelivery"]), n.get("shortMerchantId"), e, n)
                      , d = ec(n, e);
                    return d = null !== d && o ? {
                        int: d
                    } : null,
                    {
                        orderUuid: l,
                        orderIdSnapshot: {
                            "gfr.orderIdSnapshot": Yn(n)
                        },
                        orderStatus: c,
                        firedFrom: r ? {
                            string: r
                        } : null,
                        defaultEstimate: Number.isFinite(u) && u >= 0 ? {
                            int: u
                        } : null,
                        userEnteredEstimate: Number.isFinite(a) && a >= 0 ? {
                            int: a
                        } : null,
                        reason: i ? {
                            string: i
                        } : null,
                        suggestedEstimate: d
                    }
                }
            }]),
            t
        }()
          , rc = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).bumpOrder = r.bumpOrder.bind(Ue(Ue(r))),
                r.state = {
                    clicked: !1
                },
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "justFinishedBumping",
                value: function(e) {
                    return e.processing && !this.props.processing
                }
            }, {
                key: "justFinishedShowingCheckmark",
                value: function(e) {
                    return e.success && !this.props.success
                }
            }, {
                key: "isGHDelivery",
                value: function() {
                    return !!this.props.order.getIn(["delivery", "grubhubDelivery"])
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this
                      , r = this.state.clicked && this.justFinishedShowingCheckmark(e);
                    this.state.clicked && this.justFinishedBumping(e) && this.setState({
                        clicked: !1
                    }, function() {
                        r && t.props.onSuccess()
                    })
                }
            }, {
                key: "sendOrderStatusUpdatedClickstream",
                value: function() {
                    var e = this.props
                      , t = e.firedFrom
                      , r = e.order
                      , n = e.waitEstimate
                      , a = e.skipUnconfirmedAnalytics
                      , i = e.sendSuggestionWithAnalytics;
                    a && Xt(r) === ut.CONFIRMED || this.props.analytics.sendCSV2Analytics(tc, {
                        firedFrom: t,
                        order: r,
                        waitEstimate: n,
                        sendSuggestion: i
                    })
                }
            }, {
                key: "bumpOrder",
                value: function(e) {
                    var t = this;
                    if (e.stopPropagation(),
                    !this.props.processing) {
                        var r = this.props
                          , n = r.order
                          , a = r.dispatchBumpOrderAction;
                        this.processingStartTime = Date.now(),
                        (er(n) || n.get("status") === ut.CONFIRMED || n.get("status") === ut.SUBMITTED) && this.setState({
                            clicked: !0
                        }, function() {
                            t.sendOrderStatusUpdatedClickstream(),
                            a()
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , r = t.order
                      , n = t.isDisabled
                      , a = t.forcePrimary
                      , i = t.color
                      , o = this.props.type || (r.get("status") !== ut.CONFIRMED || a ? "primary" : "secondary");
                    return _.a.createElement("div", {
                        className: "order-bump-button"
                    }, _.a.createElement(s.e, {
                        onMouseEnter: function() {
                            e.props.onHover(!0)
                        },
                        onMouseLeave: function() {
                            e.props.onHover(!1)
                        },
                        type: o,
                        color: i,
                        disabled: n,
                        isLoading: this.props.processing && !this.props.success,
                        isSuccess: this.props.success,
                        onClick: this.bumpOrder,
                        className: this.props.className
                    }, this.buttonTitle))
                }
            }, {
                key: "confirmationText",
                get: function() {
                    var e = this.props
                      , t = e.order
                      , r = e.waitEstimate;
                    if (r <= 0)
                        return "Confirm";
                    if (this.props.usePickupFeasibility)
                        return _.a.createElement("span", null, "Confirm ", r, " minutes");
                    if (this.props.showDetailedConfirmationText) {
                        var n = t.get("isPickup") || this.isGHDelivery() ? "prep" : "delivery";
                        return _.a.createElement("span", null, "Confirm ", r, " min", _.a.createElement("span", {
                            className: "order-bump-button__minute-suffix"
                        }, "ute"), " ", n, " ", "time")
                    }
                    return "Confirm"
                }
            }, {
                key: "buttonTitle",
                get: function() {
                    var e = this.props.order
                      , t = !e.get("isPickup");
                    if (e.get("status") === ut.ANTICIPATED)
                        return "Confirm";
                    switch (Xt(e)) {
                    case ut.CONFIRMED:
                        return this.confirmationText;
                    case ut.SUBMITTED:
                        return "Submitted for prep";
                    case ut.OUT_FOR_DELIVERY:
                        return "Out for delivery";
                    case ut.READY_FOR_PICKUP:
                        return t ? "Ready for driver" : "Food is ready";
                    default:
                        return ""
                    }
                }
            }]),
            t
        }();
        rc.propTypes = {
            isDisabled: T.a.bool,
            isOrderAside: T.a.bool,
            order: T.a.instanceOf(u.a.Map).isRequired,
            onHover: T.a.func,
            onSuccess: T.a.func,
            waitEstimate: T.a.number,
            className: T.a.string,
            firedFrom: T.a.string,
            forcePrimary: T.a.bool,
            color: T.a.string,
            type: T.a.string,
            skipUnconfirmedAnalytics: T.a.bool,
            sendSuggestionWithAnalytics: T.a.bool,
            showDetailedConfirmationText: T.a.bool
        },
        rc.defaultProps = {
            firedFrom: "ORDER_CARD",
            onHover: function() {},
            onSuccess: function() {},
            skipUnconfirmedAnalytics: !1,
            sendSuggestionWithAnalytics: !1,
            showDetailedConfirmationText: !1
        };
        var nc = Object(oe.connect)(function(e, t) {
            var r = e.getIn(["orders", "bumpStatuses"])
              , n = r.has(t.order.get("uuid"))
              , a = r.get(t.order.get("uuid"));
            return {
                processing: n,
                success: n && a,
                usePickupFeasibility: On(t.order, e)
            }
        }, function(e, t) {
            var r = t.order
              , a = t.waitEstimate;
            return {
                dispatchBumpOrderAction: function() {
                    return e(function(e, t) {
                        return De({
                            type: He.bumpOrder,
                            order: e,
                            waitTimeInMinutes: t
                        }, n.j, !0)
                    }(r, a))
                }
            }
        })(rc)
          , ac = Object(n.ic)(nc)
          , ic = function(e) {
            var t = e.order
              , r = e.onHide
              , n = e.onClose
              , a = e.onShowNextOrder
              , i = e.successTime
              , o = e.unconfirmedOrders;
            return _.a.createElement(s.t, {
                className: "next-order-actions"
            }, _.a.createElement(s.l, {
                className: "next-order-actions__confirmation-status",
                width: 6
            }, function() {
                var e;
                e = er(t) ? "Confirmed at: " : Zt(t) ? "Submitted at: " : "Ready at: ";
                e += N()(i).format("h:mma");
                var r = _.a.createElement(s.w, {
                    value: "checkmark",
                    iconColor: "green",
                    size: "large"
                });
                return _.a.createElement(s.T, {
                    text: e,
                    icon: r
                })
            }()), _.a.createElement(s.l, {
                className: "next-order-actions__buttons",
                width: 6
            }, c() ? _.a.createElement(s.e, {
                onClick: function() {
                    a(c()),
                    r()
                },
                type: "secondary"
            }, "Next") : _.a.createElement(s.e, {
                onClick: n,
                type: "secondary"
            }, "Close")));
            function c() {
                return er(t) ? o.findLast(function(e) {
                    return e.get("uuid") !== t.get("uuid")
                }) : null
            }
        };
        ic.propTypes = {
            order: T.a.object.isRequired,
            onClose: T.a.func.isRequired,
            onHide: T.a.func.isRequired,
            successTime: T.a.instanceOf(Date).isRequired,
            unconfirmedOrders: T.a.instanceOf(l.List)
        };
        var sc = Object(oe.connect)(null, function(e) {
            return {
                onShowNextOrder: function(t) {
                    return e(it(t))
                }
            }
        })(ic)
          , oc = Object(oe.connect)(function(e, t) {
            var r = t.isPickup
              , a = t.isGHD
              , i = t.shortMerchantId
              , s = t.order
              , o = (Object(n.db)(e, i) || Object(l.Map)()).get("orderTypeSettings")
              , c = Cn(s)
              , u = yn(e, s)
              , d = On(s, e)
              , m = ec(s, e);
            return {
                defaultEstimate: En(!!r, !!a, i, e, s),
                orderTypeSettings: o,
                facetType: c,
                isLarge: u,
                usePickupFeasibility: d,
                suggestedEstimate: m
            }
        })(X.a);
        oc.propTypes = {
            isPickup: T.a.bool,
            isGHD: T.a.bool,
            shortMerchantId: T.a.string.isRequired,
            order: T.a.instanceOf(l.Map).isRequired,
            value: T.a.number.isRequired,
            onChange: T.a.func.isRequired
        };
        var cc = "Changing the time for this order may result in a poor diner experience."
          , lc = "order-confirmation-modal"
          , uc = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    waitEstimate: r.getInitialWaitEstimate(),
                    disableClosing: !1
                },
                r.onTimePickerChange = r.onTimePickerChange.bind(Ue(Ue(r))),
                r.bumpSuccess = r.bumpSuccess.bind(Ue(Ue(r))),
                r
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this;
                    !e.processing && this.props.processing ? this.setState({
                        disableClosing: !0
                    }, function() {
                        return t.delayedReenableClosing()
                    }) : e.processing && !this.props.processing && (clearTimeout(this.disableClosingTimeout),
                    this.setState({
                        disableClosing: !1
                    }))
                }
            }, {
                key: "delayedReenableClosing",
                value: function() {
                    var e = this;
                    this.disableClosingTimeout = setTimeout(function() {
                        e.setState({
                            disableClosing: !1
                        })
                    }, 5e3)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    n.hc.clearTimeout(this.disableClosingTimeout)
                }
            }, {
                key: "getMinutesUntil",
                value: function(e) {
                    var t = e && N()(e).diff(N()(Date.now()), "minutes");
                    return t && t > 0 ? t : 1
                }
            }, {
                key: "getInitialWaitEstimate",
                value: function() {
                    var e = this.props
                      , t = e.order
                      , r = e.defaultEstimate
                      , n = e.suggestedEstimate
                      , a = t.getIn(["delivery", "grubhubDelivery"]);
                    return ir(t) && a ? this.getMinutesUntil(zr(t)) : n || 0 === n ? n : r
                }
            }, {
                key: "onTimePickerChange",
                value: function(e) {
                    this.setState({
                        waitEstimate: e
                    })
                }
            }, {
                key: "bumpSuccess",
                value: function() {
                    this.props.onConfirmSuccess(this.state.waitEstimate)
                }
            }, {
                key: "render",
                value: function() {
                    return _.a.createElement(s.H, {
                        canClose: !this.state.disableClosing,
                        onClose: this.props.onClose,
                        outsideClicksCloseModal: !0,
                        contentClassName: lc,
                        centered: !0
                    }, this.modalContent)
                }
            }, {
                key: "timePicker",
                get: function() {
                    var e = this.props.order
                      , t = !!e.getIn(["delivery", "grubhubDelivery"]);
                    return ir(e) && t ? null : _.a.createElement("div", {
                        className: "".concat(lc, "__time-picker")
                    }, _.a.createElement(oc, {
                        order: e,
                        isPickup: e.get("isPickup"),
                        isGHD: t,
                        shortMerchantId: e.get("shortMerchantId"),
                        value: this.state.waitEstimate,
                        onChange: this.onTimePickerChange
                    }))
                }
            }, {
                key: "estimatedTime",
                get: function() {
                    var e, t = this.props.order, r = t.getIn(["delivery", "grubhubDelivery"]), n = 1e3 * this.state.waitEstimate * 60, a = Date.now() + n;
                    return e = ir(t) && r ? null : this.props.usePickupFeasibility ? "Have food ready for driver by" : Yr(t),
                    _.a.createElement("div", {
                        className: "".concat(lc, "__estimate")
                    }, e, " ", _.a.createElement("div", null, _.a.createElement("strong", {
                        className: "".concat(lc, "__estimate__time")
                    }, N()(a).format("hh:mma"))))
                }
            }, {
                key: "modalContent",
                get: function() {
                    var e, t = this.props, r = t.order, n = t.defaultEstimate, a = t.suggestedEstimate, i = t.openedFromSuggestedPrepTimes, s = t.usePickupFeasibility, o = r.getIn(["delivery", "grubhubDelivery"]), c = ir(r), l = r.get("isPickup"), u = i, d = null, m = null, g = null, p = "".concat(lc, "__header");
                    e = s && a > n ? this.state.waitEstimate > a + 5 : this.state.waitEstimate > n;
                    var f = this.props.firedFrom
                      , h = i && e;
                    return o && c ? (d = "Driver will arrive at",
                    p = C()(p, "".concat(p, "--scheduled-ghd")),
                    f = "CONFIRM_MODAL_SCHEDULED_GHD",
                    h = !1,
                    u = !1) : o ? (d = s ? "Select a driver arrival time" : "When will the food be ready?",
                    m = s ? null : "The driver will arrive close to this time. Accurate estimates help ensure the best possible experience for your diners.",
                    g = e ? cc : null) : (d = l ? "When will the food be ready?" : "When will the food be delivered?",
                    e && (g = l ? "Customers see your default pickup time when placing an order. Changing the time for this order may result in a poor experience." : cc)),
                    _.a.createElement("div", null, _.a.createElement("h2", {
                        className: p
                    }, d), this.timePicker, m ? _.a.createElement("p", {
                        className: "order-confirmation-modal__text"
                    }, m) : null, g ? _.a.createElement("p", {
                        className: "order-confirmation-modal__warning"
                    }, g) : null, this.estimatedTime, _.a.createElement(ac, {
                        className: "id-order-confirmation-modal",
                        order: r,
                        onSuccess: this.bumpSuccess,
                        firedFrom: f,
                        forcePrimary: !0,
                        waitEstimate: this.state.waitEstimate,
                        skipUnconfirmedAnalytics: h,
                        showDetailedConfirmationText: !c || !o,
                        sendSuggestionWithAnalytics: u
                    }))
                }
            }]),
            t
        }();
        uc.propTypes = {
            onClose: T.a.func,
            onConfirmSuccess: T.a.func,
            order: T.a.instanceOf(l.Map).isRequired,
            firedFrom: T.a.string,
            openedFromSuggestedPrepTimes: T.a.bool
        },
        uc.defaultProps = {
            firedFrom: "CONFIRM_MODAL",
            openedFromSuggestedPrepTimes: !1
        };
        var dc = Object(oe.connect)(function(e, t) {
            var r = t.order
              , n = r.get("isPickup")
              , a = r.getIn(["delivery", "grubhubDelivery"])
              , i = r.get("shortMerchantId");
            return {
                processing: e.getIn(["orders", "bumpStatuses"]).has(r.get("uuid")),
                defaultEstimate: En(n, a, i, e, r),
                suggestedEstimate: ec(r, e),
                usePickupFeasibility: On(r, e)
            }
        })(uc)
          , mc = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    success: !1,
                    showModal: !1
                },
                r.openDialog = r.openDialog.bind(Ue(Ue(r))),
                r.onDialogSuccess = r.onDialogSuccess.bind(Ue(Ue(r))),
                r.onModalClose = r.onModalClose.bind(Ue(Ue(r))),
                r.getConfirmModal = r.getConfirmModal.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.isDisabled
                      , r = e.onHover
                      , n = e.className
                      , a = e.type
                      , i = e.color;
                    return _.a.createElement("div", null, this.getConfirmModal(), _.a.createElement(s.e, {
                        type: a,
                        color: i,
                        disabled: t,
                        className: n,
                        isSuccess: this.state.success,
                        onClick: this.openDialog,
                        onMouseEnter: function() {
                            r(!0)
                        },
                        onMouseLeave: function() {
                            r(!1)
                        }
                    }, "Confirm"))
                }
            }, {
                key: "getConfirmModal",
                value: function() {
                    return this.state.showModal ? _.a.createElement(dc, {
                        order: this.props.order,
                        onClose: this.onModalClose,
                        onConfirmSuccess: this.onDialogSuccess,
                        firedFrom: this.props.firedFrom
                    }) : null
                }
            }, {
                key: "onModalClose",
                value: function() {
                    this.setState({
                        showModal: !1
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.confirmedGHDeliveryOrder() && this.props.analytics.finishPerformanceMeasureFor("ORDER_CONFIRM_PAGE_ANIMATIONS", n.Qb.orderConfirm)
                }
            }, {
                key: "confirmedGHDeliveryOrder",
                value: function() {
                    return this.state.success && !!this.props.order.getIn(["delivery", "grubhubDelivery"])
                }
            }, {
                key: "openDialog",
                value: function(e) {
                    e.stopPropagation(),
                    this.setState({
                        showModal: !0
                    })
                }
            }, {
                key: "onDialogSuccess",
                value: function(e) {
                    this.setState({
                        success: !0
                    }),
                    this.props.onSuccess(e)
                }
            }]),
            t
        }();
        mc.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired,
            isDisabled: T.a.bool,
            className: T.a.string,
            type: T.a.string,
            color: T.a.string,
            onSuccess: T.a.func,
            firedFrom: T.a.string
        },
        mc.defaultProps = {
            type: "primary",
            color: "blue",
            onHover: function() {},
            onSuccess: function() {}
        };
        var gc = Object(n.ic)(mc)
          , pc = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).state = {
                    showModal: !1
                },
                e.toggleModal = e.toggleModal.bind(Ue(Ue(e))),
                e
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "componentDidMount",
                value: function() {
                    this.reinitializeEstimate()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.reinitializeEstimate()
                }
            }, {
                key: "reinitializeEstimate",
                value: function() {
                    if (-1 === this.props.waitEstimate) {
                        var e = this.props.buttonOffsets[this.props.isPickupFeasibilityEnabled ? 0 : 1]
                          , t = this.props.suggestedEstimate;
                        null === t && (t = this.props.defaultEstimate),
                        this.props.onChange(t + e)
                    }
                }
            }, {
                key: "toggleModal",
                value: function() {
                    this.setState({
                        showModal: !this.state.showModal
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.waitEstimate
                      , r = e.order
                      , n = e.isPickupFeasibilityEnabled;
                    if (-1 === t)
                        return null;
                    var a, i = r.get("isPickup");
                    return a = r.getIn(["delivery", "grubhubDelivery"]) ? n ? "Select a driver arrival time" : "Ready for driver in" : i ? "Ready for pickup in" : "Deliver in",
                    _.a.createElement(s.t, {
                        nested: !0,
                        flush: !0,
                        className: "order-details-suggested-prep-times"
                    }, _.a.createElement(s.l, null, _.a.createElement("h3", {
                        className: "order-details-suggested-prep-times__title"
                    }, a)), _.a.createElement(s.l, {
                        width: 9
                    }, this.estimates), _.a.createElement(s.l, {
                        width: 3
                    }, _.a.createElement(s.e, {
                        className: "order-details-suggested-prep-times__other",
                        type: s.e.BUTTON_TYPE_SECONDARY,
                        onClick: this.toggleModal
                    }, "Other"), this.modal))
                }
            }, {
                key: "estimates",
                get: function() {
                    var e = this.props
                      , t = e.suggestedEstimate
                      , r = e.waitEstimate
                      , n = e.onChange
                      , a = e.isPickupFeasibilityEnabled
                      , i = e.defaultEstimate
                      , o = e.buttonOffsets
                      , c = (a ? null === t ? [i + o[0], i + o[1], i + o[2]] : [t + o[0], t + o[1], t + o[2]] : t < 5 ? [0, 5, 10] : [t + o[0], t + o[1], t + o[2]]).map(function(e, t) {
                        var n = e < 0 ? 0 : e;
                        return {
                            value: n,
                            displayValue: "".concat(n, " min"),
                            className: C()("order-details-suggested-prep-times__button", "order-details-suggested-prep-times__button-".concat(t), {
                                "order-details-suggested-prep-times__button--selected": e === r
                            })
                        }
                    });
                    return _.a.createElement(s.f, {
                        onChange: n,
                        buttons: c,
                        selectedValue: r
                    })
                }
            }, {
                key: "modal",
                get: function() {
                    return this.state.showModal ? _.a.createElement(dc, {
                        order: this.props.order,
                        onClose: this.toggleModal,
                        openedFromSuggestedPrepTimes: !0,
                        onConfirmSuccess: this.props.onDialogSuccess
                    }) : null
                }
            }]),
            t
        }();
        pc.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            waitEstimate: T.a.number.isRequired,
            onChange: T.a.func.isRequired,
            onDialogSuccess: T.a.func.isRequired
        };
        var fc = Object(oe.connect)(function(e, t) {
            var r = t.order
              , n = On(r, e)
              , a = r.get("isPickup")
              , i = r.getIn(["delivery", "grubhubDelivery"])
              , s = r.get("shortMerchantId");
            return {
                suggestedEstimate: ec(r, e),
                isPickupFeasibilityEnabled: n,
                defaultEstimate: En(a, i, s, e, r),
                buttonOffsets: n ? In(e) : Tn(e)
            }
        })(pc)
          , hc = ["Busier than normal", "Order contains many items", "Items require longer prep time", "Driver requires more time", "Other"]
          , vc = [].concat(hc);
        vc.splice(3, 1);
        var Ec = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).state = {
                    reason: ""
                },
                e.updateReason = e.updateReason.bind(Ue(Ue(e))),
                e.dismiss = e.dismiss.bind(Ue(Ue(e))),
                e.submit = e.submit.bind(Ue(Ue(e))),
                e
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "updateReason",
                value: function(e) {
                    this.setState({
                        reason: e
                    })
                }
            }, {
                key: "orderIsSelfDelivery",
                value: function() {
                    return !this.props.order.get("isPickup") && !this.props.order.getIn(["delivery", "grubhubDelivery"])
                }
            }, {
                key: "sendAnalytics",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.props.analytics.sendCSV2Analytics(tc, {
                        firedFrom: "CONFIRM_MODAL",
                        order: this.props.order,
                        waitEstimate: this.props.waitEstimate,
                        reason: e,
                        sendSuggestion: !0
                    })
                }
            }, {
                key: "dismiss",
                value: function() {
                    this.sendAnalytics(),
                    this.props.onClose()
                }
            }, {
                key: "submit",
                value: function() {
                    this.sendAnalytics(this.state.reason),
                    this.props.onClose()
                }
            }, {
                key: "render",
                value: function() {
                    return _.a.createElement(s.H, {
                        onClose: this.dismiss,
                        centered: !0,
                        contentClassName: "order-details-prep-time-questionnaire"
                    }, _.a.createElement(s.t, {
                        flush: !0,
                        nested: !0
                    }, _.a.createElement(s.l, {
                        className: "order-details-prep-time-questionnaire__header"
                    }, this.header), _.a.createElement(s.l, {
                        className: "order-details-prep-time-questionnaire__reasons"
                    }, _.a.createElement(s.X, {
                        value: this.state.reason,
                        onChange: this.updateReason
                    }, this.reasons.map(function(e) {
                        return _.a.createElement(s.W, {
                            label: e,
                            key: e,
                            value: e,
                            className: "order-details-prep-time-questionnaire__reason"
                        })
                    }))), _.a.createElement(s.l, {
                        width: 6
                    }, _.a.createElement(s.e, {
                        className: "order-details-prep-time-questionnaire__skip",
                        onClick: this.dismiss,
                        type: s.e.BUTTON_TYPE_SECONDARY
                    }, "Skip")), _.a.createElement(s.l, {
                        width: 6
                    }, _.a.createElement(s.e, {
                        className: "order-details-prep-time-questionnaire__submit",
                        onClick: this.submit,
                        disabled: "" === this.state.reason
                    }, "Submit"))))
                }
            }, {
                key: "header",
                get: function() {
                    var e;
                    return e = this.orderIsSelfDelivery() ? "Why does this order require a longer delivery time?" : "Why does this order require a longer prep time?",
                    _.a.createElement("h2", null, e)
                }
            }, {
                key: "reasons",
                get: function() {
                    return this.orderIsSelfDelivery() ? hc : vc
                }
            }]),
            t
        }();
        Ec.prototypes = {
            onClose: T.a.func.isRequired,
            order: T.a.instanceOf(l.Map).isRequired,
            waitEstimate: T.a.number.isRequired
        };
        var yc = Object(n.ic)(Ec)
          , Ac = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = r.getInitialState(),
                ["suggestedPrepTimesSuccess", "onConfirmationHide", "onEstimateChange", "closeQuestionnaire"].forEach(function(e) {
                    return r[e] = r[e].bind(Ue(Ue(r)))
                }),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "getInitialState",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.order;
                    return {
                        showNextOrderActions: !1,
                        showQuestionnaire: !1,
                        waitEstimate: -1,
                        successTime: null,
                        originalOrder: e,
                        order: e
                    }
                }
            }, {
                key: "bumpSuccess",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.showQuestionnaire
                      , r = void 0 !== t && t
                      , n = e.waitEstimate
                      , a = void 0 === n ? this.state.waitEstimate : n
                      , i = new Date;
                    this.setState({
                        showNextOrderActions: !0,
                        successTime: i,
                        showQuestionnaire: r,
                        waitEstimate: a
                    })
                }
            }, {
                key: "suggestedPrepTimesSuccess",
                value: function(e) {
                    var t = e > this.props.defaultEstimate;
                    this.bumpSuccess({
                        showQuestionnaire: t,
                        waitEstimate: e
                    })
                }
            }, {
                key: "closeQuestionnaire",
                value: function() {
                    this.setState({
                        showQuestionnaire: !1
                    })
                }
            }, {
                key: "onConfirmationHide",
                value: function() {
                    this.setState(this.getInitialState())
                }
            }, {
                key: "onEstimateChange",
                value: function(e) {
                    this.setState({
                        waitEstimate: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return this.orderHasBumpButton || this.state.showNextOrderActions ? _.a.createElement("div", {
                        className: "order-details-footer"
                    }, this.estimateSelector, this.pendingOrderInfoMessage, this.state.showNextOrderActions ? this.nextOrderActions : this.orderActions, this.state.showQuestionnaire ? _.a.createElement(yc, {
                        order: this.state.originalOrder,
                        onClose: this.closeQuestionnaire,
                        waitEstimate: this.state.waitEstimate
                    }) : null) : null
                }
            }, {
                key: "orderActions",
                get: function() {
                    return _.a.createElement(s.t, {
                        flush: !0,
                        className: "order-details-footer__buttons"
                    }, _.a.createElement(s.l, null, this.showModal ? this.openConfirmModalButton : this.confirmButton))
                }
            }, {
                key: "nextOrderActions",
                get: function() {
                    return _.a.createElement(sc, {
                        order: this.state.originalOrder,
                        onHide: this.onConfirmationHide,
                        onClose: this.props.closeDetails,
                        successTime: this.state.successTime,
                        unconfirmedOrders: this.props.unconfirmedOrders
                    })
                }
            }, {
                key: "confirmButton",
                get: function() {
                    var e = this;
                    return _.a.createElement(ac, {
                        isDisabled: this.isDisabled,
                        isOrderAside: !0,
                        order: this.state.originalOrder,
                        onSuccess: function() {
                            return e.bumpSuccess()
                        },
                        forcePrimary: !0,
                        firedFrom: "ORDER_DETAIL",
                        className: "order-details-footer__confirm-btn",
                        waitEstimate: this.state.waitEstimate,
                        showDetailedConfirmationText: !0,
                        sendSuggestionWithAnalytics: !0
                    })
                }
            }, {
                key: "openConfirmModalButton",
                get: function() {
                    var e = this;
                    return _.a.createElement(gc, {
                        isDisabled: this.isDisabled,
                        order: this.state.originalOrder,
                        onSuccess: function() {
                            return e.bumpSuccess()
                        },
                        className: "order-details-footer__confirm-btn"
                    })
                }
            }, {
                key: "isDisabled",
                get: function() {
                    return nr(this.state.originalOrder)
                }
            }, {
                key: "showModal",
                get: function() {
                    var e = this.state.originalOrder
                      , t = e.getIn(["delivery", "grubhubDelivery"])
                      , r = !e.get("beforeLeadTimeWindow");
                    return t && r && ir(e) && er(e)
                }
            }, {
                key: "orderHasBumpButton",
                get: function() {
                    var e = this.state.originalOrder
                      , t = Zt(e)
                      , r = e.get("isPickup")
                      , n = e.get("status") === ut.CONFIRMED
                      , a = e.get("status") === ut.SUBMITTED && t && r;
                    return er(e) || nr(e) || a || n
                }
            }, {
                key: "estimateSelector",
                get: function() {
                    var e = this.state.originalOrder
                      , t = ir(e) && e.get("beforeLeadTimeWindow");
                    return !er(e) || t || this.state.showNextOrderActions || this.showModal ? null : _.a.createElement(fc, {
                        order: e,
                        waitEstimate: this.state.waitEstimate,
                        onChange: this.onEstimateChange,
                        onDialogSuccess: this.suggestedPrepTimesSuccess
                    })
                }
            }, {
                key: "pendingOrderInfoMessage",
                get: function() {
                    var e = this.state.originalOrder;
                    if (!nr(e))
                        return null;
                    var t = e.get("status") === ut.CONFIRMED
                      , r = "order-details-footer__info-message";
                    return e.get("status") === ut.ANTICIPATED ? _.a.createElement("div", {
                        className: r
                    }, _.a.createElement("h4", null, "Not yet confirmable"), "We will remind you to confirm this order nearer to its scheduled time. The diner may continue to edit or cancel the order until then.") : t ? _.a.createElement("div", {
                        className: r
                    }, _.a.createElement("h4", null, "Previously confirmed"), "This order will become active closer to its scheduled time.") : null
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return t.order.get("uuid") !== e.order.get("uuid") ? {
                        showNextOrderActions: !1,
                        showQuestionnaire: !1,
                        waitEstimate: -1,
                        successTime: null,
                        originalOrder: e.order,
                        order: e.order
                    } : {
                        order: e.order
                    }
                }
            }]),
            t
        }();
        Ac.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired,
            closeDetails: T.a.func.isRequired,
            unconfirmedOrders: T.a.instanceOf(l.List)
        };
        var bc = Object(oe.connect)(function(e, t) {
            var r = t.order;
            return {
                defaultEstimate: En(r.get("isPickup"), r.getIn(["delivery", "grubhubDelivery"]), r.get("shortMerchantId"), e, r)
            }
        })(Ac)
          , _c = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).onSwipeRight = e.onSwipeRight.bind(Ue(Ue(e))),
                e
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "sendFinishedLoadingAnalytics",
                value: function() {
                    this.props.analytics.finishPerformanceMeasureFor("ORDER_DETAIL_TAP_OR_CLICK", null, {
                        firedFrom: this.props.currentTab
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.loading || this.sendFinishedLoadingAnalytics()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.loading && !this.props.loading && this.sendFinishedLoadingAnalytics()
                }
            }, {
                key: "onSwipeRight",
                value: function() {
                    this.props.onClose()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.onClose
                      , r = e.loading;
                    return _.a.createElement(s.R, {
                        className: "order-details",
                        hideHeader: !0,
                        onClose: t,
                        loading: r
                    }, _.a.createElement(s.hb, {
                        onSwipeRight: this.onSwipeRight
                    }, r ? null : this.content))
                }
            }, {
                key: "content",
                get: function() {
                    var e = this.props
                      , t = e.onClose
                      , r = e.order
                      , n = e.unconfirmedOrders
                      , a = r.get("status") !== ut.CANCELLED && r.getIn(["delivery", "grubhubDelivery"]);
                    return _.a.createElement("div", {
                        className: "order-details__content"
                    }, _.a.createElement("div", {
                        className: "order-details__content__scrollable"
                    }, _.a.createElement(so, {
                        order: r,
                        onClose: t
                    }), _.a.createElement(oo, {
                        order: r
                    }), a ? _.a.createElement(So, {
                        order: r
                    }) : null, _.a.createElement(Mo, {
                        order: r
                    }), _.a.createElement(Lo, {
                        orderUuid: r.get("uuid")
                    }), _.a.createElement(Bo, {
                        order: r
                    }), $r(r) && _.a.createElement(Go, {
                        order: r
                    }), _.a.createElement("div", {
                        className: "order-details__divider"
                    }), _.a.createElement(qo, {
                        order: r
                    }), _.a.createElement(Vo, {
                        order: r
                    }), _.a.createElement("div", {
                        className: "order-details__divider"
                    }), _.a.createElement($o, {
                        order: r
                    }), _.a.createElement("div", {
                        className: "order-details__divider"
                    })), _.a.createElement(bc, {
                        order: r,
                        closeDetails: t,
                        unconfirmedOrders: n
                    }))
                }
            }]),
            t
        }();
        _c.propTypes = {
            order: T.a.instanceOf(l.Map),
            onClose: T.a.func.isRequired,
            currentTab: T.a.string,
            loading: T.a.bool,
            unconfirmedOrders: T.a.instanceOf(l.List)
        };
        var Oc = Object(oe.connect)(function(e) {
            return {
                userId: Object(n.tb)(e)
            }
        })(_c)
          , Tc = Object(n.ic)(Oc)
          , Ic = [{
            value: !1,
            displayValue: "Delivery order"
        }, {
            value: !0,
            displayValue: "Pickup order"
        }]
          , Cc = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    pickup: !1,
                    restaurantId: r.props.restaurantIds.get(0),
                    loading: !1
                },
                r.updateRestaurant = r.updateRestaurant.bind(Ue(Ue(r))),
                r.setPickup = r.setPickup.bind(Ue(Ue(r))),
                r.submit = r.submit.bind(Ue(Ue(r))),
                r.closeModal = r.closeModal.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.loading
                      , r = e.restaurantId
                      , a = e.pickup
                      , i = this.props.restaurantIds.size > 1;
                    return _.a.createElement(s.H, {
                        centered: !0,
                        onClose: this.closeModal
                    }, _.a.createElement(s.t, {
                        flush: !0,
                        nested: !0,
                        className: "test-order-modal"
                    }, _.a.createElement(s.l, {
                        className: "test-order-modal__header"
                    }, _.a.createElement("h2", null, "Send test order")), _.a.createElement(s.l, {
                        className: "test-order-modal__header"
                    }, "Confirm test orders to avoid reminder", _.a.createElement("br", null), "calls from Customer Care."), _.a.createElement(s.l, {
                        className: "test-order-modal__content"
                    }, _.a.createElement(s.f, {
                        buttons: Ic,
                        onChange: this.setPickup,
                        selectedValue: a
                    })), i ? _.a.createElement(s.l, {
                        className: "test-order-modal__content"
                    }, _.a.createElement(n.B, {
                        className: "test-order-modal__content__rest-selector",
                        activeRestaurantId: r,
                        updateHandler: this.updateRestaurant
                    })) : null, _.a.createElement(s.l, null, _.a.createElement(s.t, {
                        nested: !0,
                        flush: !0
                    }, _.a.createElement(s.l, {
                        width: 6
                    }, _.a.createElement(s.e, {
                        className: "test-order-modal__nevermind",
                        type: "secondary",
                        onClick: this.closeModal
                    }, "Nevermind")), _.a.createElement(s.l, {
                        width: 6
                    }, _.a.createElement(s.e, {
                        className: "test-order-modal__send-now",
                        onClick: this.submit,
                        isLoading: t
                    }, "Send now"))))))
                }
            }, {
                key: "updateRestaurant",
                value: function(e) {
                    this.setState({
                        restaurantId: e
                    })
                }
            }, {
                key: "setPickup",
                value: function(e) {
                    this.state.pickup !== e && this.setState({
                        pickup: e
                    })
                }
            }, {
                key: "closeModal",
                value: function() {
                    this.props.onClose ? this.props.onClose() : this.props.dispatchActionToClose()
                }
            }, {
                key: "submit",
                value: function() {
                    var e = this.props
                      , t = e.state
                      , r = e.dispatch
                      , n = this.state
                      , a = n.restaurantId
                      , i = n.pickup;
                    this.setState({
                        loading: !0
                    }),
                    ai(a, !i, function() {
                        return t
                    }, r).then(function() {
                        s.a.sendAlert(Ct.testOrderSent())
                    }, function() {
                        s.a.sendAlert(Ct.testOrderFailed())
                    }).then(this.closeModal)
                }
            }]),
            t
        }();
        Cc.propTypes = {
            onClose: T.a.func
        };
        var Rc = Object(oe.connect)(function(e) {
            return {
                restaurantIds: Object(n.eb)(e),
                state: e
            }
        }, function(e) {
            return {
                dispatchActionToClose: function() {
                    return e({
                        type: He.closeTestOrderModal
                    })
                }
            }
        })(Cc)
          , Nc = "order-bundle-separator"
          , Sc = function(e) {
            var t = e.onToggle
              , r = e.reverseSort
              , n = e.title
              , a = e.orderCount
              , i = n.concat(a ? " (".concat(a, ")") : "")
              , o = _.a.createElement(s.l, {
                width: 6,
                className: "".concat(Nc, "__link")
            }, _.a.createElement("a", {
                href: "javascript:void(0);",
                onClick: t
            }, _.a.createElement("strong", {
                className: "strong-as-label"
            }, r ? "Oldest" : "Newest", " first"), _.a.createElement("span", {
                className: "".concat(Nc, "__icon")
            }, _.a.createElement(s.w, {
                value: r ? "arrow-down" : "arrow-up",
                size: "x-small"
            }))));
            return _.a.createElement("div", {
                className: "".concat(Nc)
            }, _.a.createElement("div", {
                className: "gfr-container"
            }, _.a.createElement(s.t, {
                className: "".concat(Nc, "__content"),
                flush: !0
            }, _.a.createElement(s.l, {
                width: 6
            }, _.a.createElement("h3", {
                className: "".concat(Nc, "__heading")
            }, i)), t && o)))
        };
        Sc.propTypes = {
            onToggle: T.a.func,
            reverseSort: T.a.bool,
            title: T.a.string.isRequired,
            orderCount: T.a.number
        };
        var wc = function(e) {
            var t = e.order;
            return _.a.createElement("h4", {
                className: "merchant-group-header"
            }, t.get("merchantName"), " ", t.get("locationDescription"))
        };
        wc.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired
        };
        var Dc = {
            markerWidth: 35,
            markerRestaurant: de.a,
            markerDinerDelivered: ge.a,
            markerDinerDelivering: fe.a,
            markerDriverDefault: ve.a,
            markerStrokeWidth: 2,
            markerStrokeColor: "white"
        }
          , Mc = function(e) {
            function t(e) {
                return Ne(this, t),
                Fe(this, je(t).call(this, e))
            }
            return Le(t, b["PureComponent"]),
            we(t, [{
                key: "getLocations",
                value: function() {
                    var e = [];
                    return this.addDinerLocations(e),
                    this.addDriverLocation(e),
                    this.addRestaurantLocation(e),
                    e
                }
            }, {
                key: "addRestaurantLocation",
                value: function(e) {
                    e.push({
                        lat: this.props.deliveryInfo.getIn(["pickup", "geo", "lat"]),
                        lng: this.props.deliveryInfo.getIn(["pickup", "geo", "lng"]),
                        pin: Dc.markerRestaurant,
                        size: {
                            width: 22,
                            height: 25
                        },
                        anchor: {
                            width: 5,
                            height: 45
                        }
                    })
                }
            }, {
                key: "addDinerLocations",
                value: function(e) {
                    this.props.orders.map(function(e) {
                        return Object(l.Map)({
                            lat: e.getIn(["delivery", "deliveryInfo", "dropoff", "geo", "lat"]),
                            lng: e.getIn(["delivery", "deliveryInfo", "dropoff", "geo", "lng"]),
                            status: e.getIn(["delivery", "deliveryInfo", "status"])
                        })
                    }).forEach(function(t) {
                        e.push({
                            lat: t.get("lat"),
                            lng: t.get("lng"),
                            pin: "DELIVERED" === t.get("status") ? Dc.markerDinerDelivered : Dc.markerDinerDelivering,
                            size: {
                                width: 25,
                                height: 33
                            },
                            anchor: {
                                width: 25,
                                height: 45
                            }
                        })
                    })
                }
            }, {
                key: "addDriverLocation",
                value: function(e) {
                    var t = Dc.markerWidth + Dc.markerStrokeWidth;
                    "DELIVERED" !== this.props.deliveryInfo.get("status") && e.push({
                        lat: this.props.deliveryInfo.getIn(["courier", "geo", "lat"]),
                        lng: this.props.deliveryInfo.getIn(["courier", "geo", "lng"]),
                        pin: this.props.deliveryInfo.getIn(["courier", "photoUrl"]),
                        size: {
                            width: t,
                            height: t
                        },
                        anchor: {
                            width: .5 * t,
                            height: .5 * t
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.deliveryInfo
                      , t = this.getLocations()
                      , r = e.getIn(["courier", "name"])
                      , a = Object(n.V)(e.getIn(["courier", "phone"]))
                      , i = r ? _.a.createElement("div", {
                        className: "delivery-map__courier-details"
                    }, _.a.createElement("span", {
                        className: "delivery-map__courier-details-driver-name"
                    }, "Driver: ", r), _.a.createElement("span", null, a)) : null;
                    return _.a.createElement("div", {
                        className: "delivery-map"
                    }, _.a.createElement(s.s, {
                        locations: t,
                        onLoadError: this.props.onLoadError,
                        centerLat: e.getIn(["pickup", "geo", "lat"]),
                        centerLng: e.getIn(["pickup", "geo", "lng"])
                    }), i)
                }
            }]),
            t
        }();
        Mc.propTypes = {
            deliveryInfo: T.a.instanceOf(l.Map).isRequired,
            orders: T.a.instanceOf(l.List).isRequired,
            onLoadError: T.a.func
        };
        var kc = "orders-card__header";
        function Lc(e) {
            var t = e.isDelivery ? "Delivery" : "Pickup";
            return e.isLarge && (t = "Large ".concat(t)),
            _.a.createElement("h4", {
                className: "".concat(kc, "__order-type")
            }, t)
        }
        Lc.propTypes = {
            isDelivery: T.a.bool,
            orders: T.a.instanceOf(l.List).isRequired
        };
        var jc = Object(oe.connect)(function(e, t) {
            return {
                isLarge: An(e, t.orders)
            }
        })(Lc);
        function Pc(e) {
            var t = e.order
              , r = !!t.getIn(["delivery", "deliveryInfo", "courier"])
              , n = r && Zt(t)
              , a = t.get("status") === ut.CANCELLED;
            return ar(t) || n || a ? null : _.a.createElement("h4", {
                className: "orders-card__header__progress"
            }, function(e, t) {
                if (t) {
                    var r = Date.now()
                      , n = Gr(e);
                    return uo(N()(n), r)
                }
                if (e.getIn(["delivery", "grubhubDelivery"], !1) && tr(e))
                    return "Assigning delivery driver...";
                return _.a.createElement(Zs, {
                    order: e
                })
            }(t, r))
        }
        function xc(e) {
            var t = e.mapToggle
              , r = e.mapOpen;
            return e.isCourierAssigned ? _.a.createElement("div", {
                className: "".concat(kc, "__courier-btn"),
                onClick: t
            }, _.a.createElement(s.w, function(e) {
                return {
                    size: "regular",
                    iconColor: "truffle",
                    value: e ? "close" : "pin"
                }
            }(r))) : null
        }
        Pc.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        },
        Object.assign(xc, {
            propTypes: {
                isCourierAssigned: T.a.bool,
                mapToggle: T.a.func,
                mapOpen: T.a.bool
            }
        });
        var Uc = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                r = Fe(this, je(t).call(this, e)),
                Object.assign(Ue(Ue(r)), {
                    state: {
                        mapOpen: !1
                    },
                    mapToggle: r.mapToggle.bind(Ue(Ue(r))),
                    onMapError: r.onMapError.bind(Ue(Ue(r)))
                }),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "mapToggle",
                value: function() {
                    this.setState({
                        mapOpen: !this.state.mapOpen
                    })
                }
            }, {
                key: "componentClasses",
                value: function() {
                    return C()("".concat(kc), De({}, "".concat(kc, "--courier-assigned"), this.isCourierAssigned))
                }
            }, {
                key: "onMapError",
                value: function() {
                    this.setState({
                        mapOpen: !1
                    }),
                    s.a.sendAlert(Ct.driverLocationMissing())
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.allTripOrders.some(function(e) {
                        return e.get("status") === ut.CONFIRMED && Zt(e)
                    })
                      , t = C()("".concat(kc, "__row"), De({}, "".concat(kc, "__row--jit-confirmed"), e));
                    return _.a.createElement("div", {
                        className: this.componentClasses()
                    }, _.a.createElement(s.t, {
                        nested: !0,
                        align: "center",
                        className: t
                    }, _.a.createElement(s.l, {
                        lg: 6,
                        md: 4,
                        sm: 4
                    }, _.a.createElement(jc, {
                        orders: this.props.allTripOrders,
                        isDelivery: !this.props.order.get("isPickup")
                    })), this.progressStatus), this.map, _.a.createElement(xc, this.courierAssignedBtnProps), this.avatar)
                }
            }, {
                key: "isCourierAssigned",
                get: function() {
                    return !!this.props.order.getIn(["delivery", "deliveryInfo", "courier"])
                }
            }, {
                key: "map",
                get: function() {
                    var e = {
                        deliveryInfo: this.props.order.getIn(["delivery", "deliveryInfo"], Object(l.Map)({})),
                        orders: this.props.allTripOrders,
                        onLoadError: this.onMapError
                    };
                    return this.state.mapOpen ? _.a.createElement(Mc, e) : null
                }
            }, {
                key: "avatar",
                get: function() {
                    return this.isCourierAssigned ? _.a.createElement(s.b, {
                        className: "".concat(kc, "__courier-avatar"),
                        photoUrl: po(this.props.order)
                    }) : null
                }
            }, {
                key: "courierAssignedBtnProps",
                get: function() {
                    return {
                        isCourierAssigned: this.isCourierAssigned,
                        mapToggle: this.mapToggle,
                        mapOpen: this.state.mapOpen
                    }
                }
            }, {
                key: "progressStatus",
                get: function() {
                    var e = this.props.order
                      , t = e.getIn(["delivery", "deliveryInfo", "status"]) || "";
                    return ["DELIVERED", "CANCELED", "REJECTED"].indexOf(t.toUpperCase()) > -1 ? null : _.a.createElement(s.l, {
                        lg: 6,
                        md: 8,
                        sm: 8
                    }, _.a.createElement(Pc, {
                        order: e
                    }))
                }
            }]),
            t
        }();
        function Fc(e) {
            var t = e.getIn(["charges", "lineGroups", 0, "lines"]);
            if (!t)
                return "0 items";
            var r = t.map(function(e) {
                return e.get("quantity")
            }).reduce(function(e, t) {
                return e + t
            });
            return "".concat(r, " ").concat(r > 1 ? "items" : "item")
        }
        Object.assign(Uc, {
            propTypes: {
                order: T.a.instanceOf(l.Map).isRequired,
                allTripOrders: T.a.instanceOf(l.List).isRequired
            }
        });
        var Bc = "".concat("order-card-info", "__totals")
          , zc = function(e) {
            var t = e.order
              , r = t.get("status") === ut.CONFIRMED
              , n = r
              , a = !r;
            return _.a.createElement("div", {
                className: "order-card-info"
            }, _.a.createElement("div", {
                className: Bc
            }, n && _.a.createElement("h4", {
                className: "".concat(Bc, "__confirmed")
            }, "CONFIRMED"), a && _.a.createElement("div", {
                className: "".concat(Bc, "__item-count")
            }, Fc(t)), _.a.createElement("p", {
                className: "".concat(Bc, "__total")
            }, Q()(Rn(t)).format("$0,0.00"))))
        };
        zc.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired
        };
        var Gc = function(e) {
            var t = e.order
              , r = t.get("isPickup") ? t.getIn(["contactInfo", "phone"]) : t.getIn(["delivery", "deliveryAddress", "addressLine1"]);
            return _.a.createElement("div", {
                className: "order-card-diner-info"
            }, _.a.createElement("h3", {
                className: "".concat("order-card-diner-info", "__name")
            }, t.getIn(["contactInfo", "name"])), _.a.createElement("p", {
                className: "".concat("order-card-diner-info", "__contact")
            }, r))
        };
        Gc.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired
        };
        var Yc = function(e) {
            return _.a.createElement(s.A, Me({}, e, {
                color: "orange"
            }), "SCHEDULED")
        }
          , Hc = function(e) {
            return _.a.createElement(s.A, Me({}, e, {
                color: "truffle"
            }), "CATERING")
        }
          , qc = function(e) {
            var t = e.order
              , r = function(e) {
                var t = function(e) {
                    var t = e.get("statusHistory")
                      , r = t.find(function(e) {
                        return e.get("status") === ut.CANCELLED
                    });
                    if (r)
                        return r.get("timestamp");
                    var n = e.get("delivery")
                      , a = t.getIn([0, "status"])
                      , i = e.getIn(["delivery", "grubhubDelivery"]) || !1;
                    if (n && i && n.get("delivered"))
                        return n.get("delivered");
                    if (n && !i && a === ut.FULFILLED)
                        return t.getIn([0, "timestamp"]);
                    if (e.get("status") === ut.SUBMITTED) {
                        var s = t.find(function(e) {
                            return e.get("status") === ut.SUBMITTED
                        });
                        return s && s.get("timestamp")
                    }
                    return e.get("preparedAt") ? e.get("preparedAt") : Date.now()
                }(e);
                if (Wc(e))
                    return "Cancelled ".concat(N()(t).format("MMM D, h:mma"));
                if (Kc(e))
                    return "Pending";
                if (e.get("status") === ut.SUBMITTED)
                    return t ? "Submitted at " + N()(t).format("h:mma") : null;
                if (Vc(e))
                    return "Ready at " + N()(t).format("h:mma");
                if (function(e) {
                    return !e.get("isPickup") && e.getIn(["delivery", "grubhubDelivery"])
                }(e))
                    return function(e, t) {
                        if (Jc(e))
                            return "Delivery in progress";
                        return t = e.getIn(["delivery", "deliveryInfo", "times", "dropoff", "timestamp"]) || t,
                        "Delivered at " + N()(t).format("h:mm A")
                    }(e, t);
                return "Ready at " + N()(t).format("h:mma")
            }(t);
            return r ? _.a.createElement("div", {
                className: "gh-order-status"
            }, _.a.createElement(s.T, {
                text: r,
                icon: Qc(t)
            })) : null
        };
        function Qc(e) {
            var t = _.a.createElement(s.w, {
                value: "close",
                iconColor: "red",
                size: "large"
            })
              , r = _.a.createElement(s.w, {
                value: "refresh",
                size: "large"
            })
              , n = _.a.createElement(s.w, {
                value: "checkmark",
                iconColor: "green",
                size: "large"
            })
              , a = _.a.createElement(s.w, {
                value: "more",
                size: "large"
            });
            return Wc(e) ? t : Vc(e) && e.get("status") !== ut.SUBMITTED ? r : Jc(e) ? a : n
        }
        function Vc(e) {
            var t = e.getIn(["delivery", "deliveryInfo", "status"]);
            return function(e) {
                var t = !e.get("isPickup");
                return !!e.getIn(["delivery", "grubhubDelivery"]) && t && !e.getIn(["delivery", "deliveryInfo", "courier"])
            }(e) || "ASSIGNED" === t || "PICKUP_READY" === t || Kc(e)
        }
        function Jc(e) {
            return "IN_TRANSIT" === e.getIn(["delivery", "deliveryInfo", "status"])
        }
        function Wc(e) {
            return "OrderCanceled" === e.get("orderChangeStatusName") || e.get("status") === ut.CANCELLED
        }
        function Kc(e) {
            return "CancellationRequested" === e.get("orderChangeStatusName")
        }
        qc.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired
        };
        var Xc = {
            size: "small",
            iconColor: "chili",
            value: "warning"
        };
        function Zc(e) {
            var t = e.hasPrintError
              , r = e.showPrintConsole;
            return t ? _.a.createElement("div", {
                className: "order__print-error"
            }, _.a.createElement(s.t, {
                align: "center",
                nested: !0
            }, _.a.createElement(s.l, null, _.a.createElement("div", {
                className: "order__print-error__content",
                onClick: r
            }, _.a.createElement("div", {
                className: "order__print-error__warning"
            }, _.a.createElement(s.w, Xc)), _.a.createElement("span", {
                className: "order__print-error__desktop_tablet_msg"
            }, "This order did not print properly."), _.a.createElement("span", {
                className: "order__print-error__mobile_msg"
            }, "This order did not print."))))) : null
        }
        Zc.propTypes = {
            uuid: T.a.string.isRequired
        };
        var $c = Object(oe.connect)(function(e, t) {
            return {
                hasPrintError: Ps(e, t.uuid)
            }
        }, function(e) {
            return {
                showPrintConsole: function() {
                    e(vr())
                }
            }
        })(Zc)
          , el = function(e) {
            function t(e, r) {
                var n;
                return Ne(this, t),
                (n = Fe(this, je(t).call(this, e, r))).state = {
                    cancelHover: !1
                },
                n.onActionHover = n.onActionHover.bind(Ue(Ue(n))),
                n
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "onActionHover",
                value: function(e) {
                    this.setState({
                        cancelHover: e
                    })
                }
            }, {
                key: "onClick",
                value: function(e) {
                    var t = this;
                    return function(r) {
                        r.stopPropagation(),
                        t.props.analytics.startPerformanceMeasureFor("ORDER_DETAIL_TAP_OR_CLICK"),
                        t.props.onClick(e)
                    }
                }
            }, {
                key: "getLabels",
                value: function(e, t) {
                    if (e || t) {
                        var r = "order-bundle__order--labels"
                          , n = "".concat(r, "__label");
                        return _.a.createElement("div", {
                            className: r
                        }, e && _.a.createElement(Yc, {
                            className: n
                        }), t && _.a.createElement(Hc, {
                            className: n
                        }))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.orders.map(function(t) {
                        var r = t.getIn(["delivery", "grubhubDelivery"])
                          , n = t.get("isPickup")
                          , a = Zt(t)
                          , i = t.get("status") === ut.CONFIRMED
                          , o = t.get("status") === ut.SUBMITTED
                          , c = t.get("status") === ut.CANCELLED
                          , l = t.get("status") === ut.READY_FOR_PICKUP
                          , u = t.get("beforeLeadTimeWindow")
                          , d = i && !a
                          , m = i && a
                          , g = o && a && n
                          , p = o && a && r
                          , f = l && r
                          , h = c && u
                          , v = tr(t) && (d || g)
                          , E = ar(t) || p || c || f
                          , y = nr(t)
                          , A = ir(t) && !nr(t) && !a && !h
                          , b = t.get("catering")
                          , O = C()("order-bundle__order", {
                            "order-bundle__order--jit-confirmed": m
                        })
                          , T = C()("order-bundle__order__row", {
                            "order__row--cancelled-hover": e.state.cancelHover
                        });
                        return _.a.createElement("div", {
                            className: O,
                            key: t.get("orderNumber")
                        }, _.a.createElement($c, {
                            uuid: t.get("uuid")
                        }), _.a.createElement(s.t, {
                            justify: "even",
                            align: "center",
                            className: T,
                            onClick: e.onClick(t)
                        }, _.a.createElement(s.l, {
                            md: 6,
                            lg: 6
                        }, _.a.createElement(Gc, {
                            order: t
                        }), e.getLabels(A, b)), _.a.createElement(s.l, {
                            md: 6,
                            lg: 3,
                            className: "order-bundle__order__right-side-contents"
                        }, y && _.a.createElement(zc, {
                            order: t
                        }), v && _.a.createElement(ac, {
                            order: t,
                            onHover: e.onActionHover
                        }), E && _.a.createElement(qc, {
                            order: t
                        }))))
                    });
                    return _.a.createElement("div", {
                        className: "order-bundle"
                    }, t)
                }
            }]),
            t
        }();
        el.propTypes = {
            orders: T.a.instanceOf(u.a.List).isRequired
        };
        var tl = Object(oe.connect)(null, function(e) {
            return {
                onClick: function(t) {
                    return e(it(t))
                }
            }
        })(el)
          , rl = Object(n.ic)(tl)
          , nl = "order-card-footer"
          , al = function(e) {
            var t = e.lastUpdatedTimestamp
              , r = e.printedAt;
            return _.a.createElement("ul", {
                className: nl
            }, t ? function(e) {
                return _.a.createElement("li", null, _.a.createElement(s.w, {
                    value: "update",
                    size: "regular",
                    className: "".concat(nl, "__icon"),
                    iconColor: "orange"
                }), "Updated ", N()(e).format("MMM D, h:mma"))
            }(t) : null, r ? function(e) {
                return _.a.createElement("li", {
                    className: "".concat(nl, "__item--right")
                }, _.a.createElement(s.w, {
                    value: "print",
                    size: "regular",
                    iconColor: "orange",
                    className: "".concat(nl, "__icon")
                }), "Printed ", N()(e).format("MMM D, h:mma"))
            }(r) : null)
        };
        al.propTypes = {
            lastUpdatedTimestamp: T.a.string,
            printedAt: T.a.string
        };
        var il = function(e) {
            function t() {
                return Ne(this, t),
                Fe(this, je(t).apply(this, arguments))
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "shouldComponentUpdate",
                value: function(e) {
                    return !(u.a.is(e.orders, this.props.orders) && u.a.is(e.associatedRestaurants, this.props.associatedRestaurants))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, r = this.props, n = r.orders, a = r.associatedRestaurants, i = n.first(), o = n.some(function(e) {
                        return e.get("status") === ut.CONFIRMED && Zt(e)
                    }), c = "gh-trip-card__" + n.map(function(e) {
                        return e.get("uuid")
                    }).join(""), l = a && a.size > 1, u = _.a.createElement(Uc, {
                        order: i,
                        allTripOrders: n
                    }), d = {
                        groupHeader: sl(i, l),
                        header: u,
                        footer: (e = i,
                        t = nr(e) && (e.get("dinerUpdated") || e.get("printedAt")),
                        t ? _.a.createElement(al, {
                            lastUpdatedTimestamp: e.get("dinerUpdated"),
                            printedAt: e.get("printedAt")
                        }) : null),
                        borderClassOverride: ol(n, l)
                    };
                    return o && (d.borderClassOverride = "trip-card--jit-confirmed"),
                    _.a.createElement("div", {
                        className: "trip-card",
                        id: c
                    }, _.a.createElement(s.i, d, _.a.createElement(rl, {
                        orders: n
                    })))
                }
            }]),
            t
        }();
        function sl(e, t) {
            if (t)
                return _.a.createElement(wc, {
                    order: e
                })
        }
        function ol(e, t) {
            var r = e.filter(function(e) {
                return nr(e)
            }).size > 0;
            return C()({
                "trip-card--future": r
            }, {
                "trip-card--multi": t
            })
        }
        il.propTypes = {
            orders: T.a.instanceOf(l.List).isRequired,
            associatedRestaurants: T.a.instanceOf(l.List)
        };
        var cl = Object(oe.connect)(function(e) {
            return {
                associatedRestaurants: Object(n.fb)(e)
            }
        })(il);
        function ll(e) {
            var t = e.find(function(e) {
                return e[0] !== e[1]
            });
            return t ? t[0] > t[1] ? 1 : -1 : 0
        }
        function ul(e) {
            if (e.get("delivery")) {
                if (e.getIn(["delivery", "grubhubDelivery"])) {
                    if (/IN_TRANSIT/i.test(e.getIn(["delivery", "deliveryInfo", "status"]))) {
                        var t = e.getIn(["delivery", "deliveryInfo", "times", "dropoff", "timestamp"]);
                        return t ? Date.parse(t) : new Date(864e13)
                    }
                    var r = e.getIn(["delivery", "deliveryInfo", "times", "pickup", "timestamp"]);
                    return r ? Date.parse(r) : new Date(864e13)
                }
                return e.getIn(["delivery", "estimatedDelivered"])
            }
            return e.get("estimatedPreparedAt")
        }
        function dl(e) {
            return ir(e) ? e.get("requestedFulfillmentAt") : e.get("timePlaced")
        }
        function ml(e, t) {
            return e.sort(function(e, r) {
                if (t) {
                    var n = [r, e];
                    e = n[0],
                    r = n[1]
                }
                var a = e.has("orders") ? e.getIn(["orders", 0]) : e
                  , i = r.has("orders") ? r.getIn(["orders", 0]) : r
                  , s = /IN_TRANSIT|DELIVERED|CANCELED/i.test(a.getIn(["delivery", "deliveryInfo", "status"]))
                  , o = [a.getIn(["contactInfo", "name"]), i.getIn(["contactInfo", "name"])];
                if (/anticipated/i.test(a.get("status")))
                    return ll([[a.get("requestedFulfillmentAt"), i.get("requestedFulfillmentAt")], o, [a.get("timePlaced"), i.get("timePlaced")]]);
                if (er(a))
                    return ll([[dl(a), dl(i)], o]);
                if (/confirmed/i.test(a.get("status")) || /managedfoodisready/i.test(a.get("status")) && !s)
                    return a.get("status") !== i.get("status") ? /confirmed/i.test(a.get("status")) ? -1 : 1 : /confirmed/i.test(a.get("status")) ? ll([[dl(a), dl(i)], o, [ul(a), ul(i)]]) : ll([[ul(a), ul(i)], o, [a.get("timePlaced"), i.get("timePlaced")]]);
                var c = /IN_TRANSIT/i.test(a.getIn(["delivery", "deliveryInfo", "status"]));
                return c !== /IN_TRANSIT/i.test(i.getIn(["delivery", "deliveryInfo", "status"])) ? c ? -1 : 1 : ll(c ? [[dl(a), dl(i)], o, [ul(a), ul(i)]] : [[dl(i), dl(a)], o, [i.get("preparedAt"), a.get("preparedAt")]])
            })
        }
        function gl(e) {
            var t = e.order
              , r = e.isLarge
              , n = t.getIn(["delivery", "deliveryInfo", "courier"]) ? _.a.createElement(s.b, {
                className: "new-order-card-type__avatar",
                photoUrl: po(t)
            }) : null
              , a = r ? "LARGE" : null
              , i = t.get("isPickup") ? "PICKUP" : "DELIVERY";
            return _.a.createElement("span", {
                className: "new-order-card-type"
            }, n, " ", a, " ", i)
        }
        gl.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var pl = Object(oe.connect)(function(e, t) {
            return {
                isLarge: yn(e, t.order)
            }
        })(gl)
          , fl = function(e) {
            var t = e.order;
            return _.a.createElement(s.t, {
                nested: !0,
                flush: !0,
                className: "new-order-info"
            }, _.a.createElement(s.l, {
                width: 6
            }, _.a.createElement(pl, {
                order: t
            })), _.a.createElement(s.l, {
                width: 6,
                className: "new-order-info__labels"
            }, function(e) {
                var t = []
                  , r = "new-order-info__labels__label";
                ir(e) && t.push(_.a.createElement(Yc, {
                    key: "scheduled",
                    className: r
                }));
                e.get("catering") && t.push(_.a.createElement(Hc, {
                    key: "catering",
                    className: r
                }));
                0 === t.length && t.push(_.a.createElement("span", {
                    key: "new",
                    className: r
                }, "NEW"));
                return t
            }(t)), _.a.createElement(s.l, {
                width: 8,
                className: "new-order-info__diner-name"
            }, t.getIn(["contactInfo", "name"])), _.a.createElement(s.l, {
                width: 4,
                className: "new-order-info__item-count"
            }, Fc(t)))
        };
        fl.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var hl = function(e) {
            var t = e.order;
            return _.a.createElement("div", {
                className: "future-order-info"
            }, _.a.createElement("div", null, _.a.createElement("div", {
                className: "future-order-info__diner-name"
            }, t.getIn(["contactInfo", "name"])), _.a.createElement("div", {
                className: "future-order-info__time"
            }, _.a.createElement(Zs, {
                order: t
            }))), _.a.createElement("div", null, t.get("catering") ? _.a.createElement(Hc, null) : _.a.createElement("div", {
                className: "future-order-info__total"
            }, Q()(Rn(t)).format("$0,0.00")), _.a.createElement("div", {
                className: "future-order-info__item-count"
            }, Fc(t))))
        };
        hl.propTypes = {
            order: T.a.instanceOf(l.Map).isRequired
        };
        var vl = function(e) {
            function t(e, r) {
                var n;
                return Ne(this, t),
                (n = Fe(this, je(t).call(this, e, r))).onClick = n.onClick.bind(Ue(Ue(n))),
                n.setClickable = n.setClickable.bind(Ue(Ue(n))),
                n.state = {
                    clickable: !0
                },
                n
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "onClick",
                value: function() {
                    this.props.analytics.startPerformanceMeasureFor("ORDER_DETAIL_TAP_OR_CLICK"),
                    this.props.onClick()
                }
            }, {
                key: "setClickable",
                value: function(e) {
                    this.setState({
                        clickable: !e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.order
                      , r = e.associatedRestaurants
                      , n = this.state.clickable
                      , a = r && r.size > 1 ? _.a.createElement(wc, {
                        order: t
                    }) : null
                      , i = C()("new-order-card", {
                        "new-order-card--clickable": n
                    })
                      , o = t.get("beforeLeadTimeWindow")
                      , c = o ? hl : fl
                      , l = o ? "future" : "asap"
                      , u = C()("new-order-card__body--".concat(l), "gfr-grid", "gfr-grid--nested", {
                        "new-order-card__body--with-group-header": a
                    });
                    return _.a.createElement("div", {
                        className: i,
                        onClick: this.onClick
                    }, _.a.createElement(s.i, {
                        borderClassOverride: "new-order-card__border--".concat(l),
                        groupHeader: a
                    }, _.a.createElement("div", {
                        className: u
                    }, _.a.createElement("div", {
                        className: "gfr-grid__col gfr-grid__col-lg--9"
                    }, _.a.createElement(c, {
                        order: t
                    })), _.a.createElement("div", {
                        className: "new-order-card__confirm gfr-grid__col gfr-grid__col--3"
                    }, this.confirmButton))))
                }
            }, {
                key: "confirmButton",
                get: function() {
                    var e = this.props
                      , t = e.order
                      , r = e.defaultEstimate
                      , n = t.get("beforeLeadTimeWindow") ? "orange" : "green"
                      , a = "inverse-secondary"
                      , i = t.getIn(["delivery", "grubhubDelivery"])
                      , s = !t.get("beforeLeadTimeWindow");
                    return i && s ? _.a.createElement(gc, {
                        type: a,
                        color: n,
                        order: t,
                        onHover: this.setClickable,
                        firedFrom: "CONFIRM_MODAL_FROM_CARD"
                    }) : _.a.createElement(ac, {
                        type: a,
                        color: n,
                        order: t,
                        onHover: this.setClickable,
                        waitEstimate: r
                    })
                }
            }]),
            t
        }();
        vl.propTypes = {
            order: T.a.instanceOf(u.a.Map).isRequired,
            associatedRestaurants: T.a.instanceOf(u.a.List)
        };
        var El = Object(oe.connect)(function(e, t) {
            var r = t.order;
            return {
                defaultEstimate: En(r.get("isPickup"), r.getIn(["delivery", "grubhubDelivery"]), r.get("shortMerchantId"), e, r)
            }
        }, function(e, t) {
            var r = t.order;
            return {
                onClick: function() {
                    return e(it(r))
                }
            }
        })(vl)
          , yl = Object(n.ic)(El)
          , Al = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).renderCard = r.renderCard.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "renderCard",
                value: function(e) {
                    var t = this.props.associatedRestaurants
                      , r = e.get("orderNumber");
                    return _.a.createElement(yl, {
                        key: r,
                        order: e,
                        associatedRestaurants: t
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.orders
                      , t = "gh-trip-card__" + e.map(function(e) {
                        return e.get("uuid")
                    }).join("");
                    return _.a.createElement("div", {
                        className: "trip-card",
                        id: t
                    }, _.a.createElement("div", {
                        className: "order-bundle"
                    }, e.map(this.renderCard)))
                }
            }]),
            t
        }();
        Al.propTypes = {
            associatedRestaurants: T.a.instanceOf(l.List),
            orders: T.a.instanceOf(l.List).isRequired
        };
        var bl = Object(oe.connect)(function(e) {
            return {
                associatedRestaurants: Object(n.fb)(e)
            }
        })(Al)
          , _l = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).getOrdersByTrip = Object(Ee.createSelector)([function(e) {
                    return e
                }
                , function(e, t) {
                    return t
                }
                ], Ol),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "shouldComponentUpdate",
                value: function(e) {
                    return !(u.a.is(e.orders, this.props.orders) && e.orderRenderingLimit === this.props.orderRenderingLimit && e.reverseSort === this.props.reverseSort)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.orders
                      , r = e.orderRenderingLimit
                      , n = e.useNewOrderCard;
                    if (0 === r)
                        return _.a.createElement("div", {
                            className: "trip-bundle gfr-container"
                        });
                    var a = this.getOrdersByTrip(t, this.props.reverseSort)
                      , i = 0
                      , s = [];
                    return a.forEach(function(e) {
                        var t = e.get("orders")
                          , a = e.get("id");
                        if (n ? s.push(_.a.createElement(bl, {
                            orders: t,
                            key: a
                        })) : s.push(_.a.createElement(cl, {
                            orders: t,
                            key: a
                        })),
                        (i += t.size) >= r)
                            return !1
                    }),
                    _.a.createElement("div", {
                        className: "trip-bundle gfr-container"
                    }, s)
                }
            }]),
            t
        }();
        function Ol(e, t) {
            var r = e.groupBy(function(e) {
                return e.get("shortMerchantId")
            })
              , n = ["uuid"]
              , a = ["delivery", "deliveryInfo", "tripId"]
              , i = r.map(function(e) {
                return e.groupBy(function(e) {
                    var t = e.getIn(["delivery", "deliveryInfo", "status"]) || ""
                      , r = ["ASSIGNED", "IN_TRANSIT", "DELIVERED", "PICKUP_READY"].includes(t.toUpperCase())
                      , i = n;
                    return r && (i = a),
                    e.getIn(i) || e.getIn(n)
                }).map(function(e, r) {
                    return Object(l.Map)({
                        id: r,
                        orders: ml(e, t)
                    })
                })
            });
            return ml(i.toList().flatten(!0), t)
        }
        _l.propTypes = {
            orders: T.a.instanceOf(l.List).isRequired,
            orderRenderingLimit: T.a.number.isRequired,
            useNewOrderCard: T.a.bool,
            reverseSort: T.a.bool
        },
        _l.defaultProps = {
            reverseSort: !1
        };
        var Tl = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).getOrdersByDate = Object(Ee.createSelector)([function(e) {
                    return e
                }
                ], Il),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "shouldComponentUpdate",
                value: function(e) {
                    return !(u.a.is(e.orders, this.props.orders) && e.orderRenderingLimit === this.props.orderRenderingLimit)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.orders
                      , r = e.orderRenderingLimit;
                    if (0 === r)
                        return null;
                    var n = this.getOrdersByDate(t)
                      , a = 0
                      , i = [];
                    return n.forEach(function(e) {
                        if (i.push(_.a.createElement("div", {
                            className: "date-bundle__day",
                            key: e.get("id")
                        }, _.a.createElement("div", {
                            className: "date-bundle__heading"
                        }, _.a.createElement(s.w, {
                            value: "calendar-time",
                            size: "regular",
                            className: "date-bundle__calendar-icon"
                        }), _.a.createElement("span", {
                            className: "date-bundle__date-text"
                        }, N()(e.get("id")).format("dddd, MMMM D, YYYY"))), _.a.createElement(_l, {
                            orders: e.get("orders"),
                            orderRenderingLimit: r
                        }))),
                        (a += e.get("orders").size) >= r)
                            return !1
                    }),
                    _.a.createElement("div", {
                        className: "date-bundle gfr-container"
                    }, i)
                }
            }]),
            t
        }();
        function Il(e) {
            var t = ["requestedFulfillmentAt"]
              , r = ["delivery", "deliveryInfo", "time", "pickup", "timestamp"];
            return e.groupBy(function(e) {
                var n = e.getIn(["delivery", "grubhubDelivery"])
                  , a = e.getIn(t);
                return n && (a = e.getIn(r) || a),
                N()(a).local().format("YYYY-MM-DD")
            }).map(function(e, t) {
                return Object(l.Map)({
                    id: t,
                    orders: e
                })
            }).sortBy(function(e) {
                return e.get("id")
            })
        }
        Tl.propTypes = {
            orders: T.a.instanceOf(l.List).isRequired,
            orderRenderingLimit: T.a.number.isRequired
        };
        var Cl = "order-lists__empty-message";
        function Rl(e) {
            var t = e.activeRestaurantIds
              , r = e.currentUser
              , n = e.orders
              , a = e.tabName
              , i = r && r.get("authorities").includes("TRANSACTION_VIEW");
            if (n.size)
                return null;
            var s = function(e, t) {
                var r = ht[e];
                if (!t.size) {
                    var n = r.title.toLowerCase();
                    return {
                        primary: "There are no orders matching your restaurant selections.",
                        secondary: "Pick at least one restaurant to view your ".concat(n, " orders.")
                    }
                }
                return r.emptyMessage
            }(a, t);
            return _.a.createElement("div", {
                className: Cl
            }, _.a.createElement("div", {
                className: "gfr-grid"
            }, _.a.createElement("div", {
                className: "gfr-grid__col--11 ".concat(Cl, "__body")
            }, _.a.createElement("h2", null, s.primary), _.a.createElement("p", null, s.secondary, a === pt && i ? _.a.createElement("span", null, "To see older orders,", " ", _.a.createElement("a", {
                href: "/financials/transactions",
                className: "".concat(Cl, "__body__transaction-btn")
            }, "go to Transactions.")) : null))))
        }
        Rl.propTypes = {
            orders: T.a.instanceOf(l.List).isRequired,
            activeRestaurantIds: T.a.instanceOf(l.List).isRequired,
            tabName: T.a.string.isRequired
        };
        var Nl = Object(oe.connect)(function(e) {
            return {
                currentUser: Object(n.mb)(e)
            }
        }, null)(Rl)
          , Sl = function(e) {
            var t = e.activeRestaurants
              , r = e.currentTab
              , a = e.onClick
              , i = e.analytics;
            return t.find(function(e) {
                return e.get("managedDelivery")
            }) ? _.a.createElement("div", {
                className: "gfr-container"
            }, _.a.createElement("div", {
                className: "rate-drivers-button gfr-grid__col gfr-grid__col-lg-offset--4 gfr-grid__col-lg--4 gfr-grid__col-md-offset--3 gfr-grid__col-md--6 gfr-grid__col-sm-offset--1 gfr-grid__col-sm--10"
            }, _.a.createElement(s.e, {
                type: "secondary",
                onClick: function() {
                    var e = "ratedriver_ratebutton_".concat(r.toLowerCase(), "tab");
                    i.sendCSV2Analytics(n.d, {
                        ctaId: e,
                        type: "Viewed",
                        header: "Rate Your Drivers"
                    }),
                    a(e)
                }
            }, "Rate your drivers"))) : null
        };
        Sl.propTypes = {
            activeRestaurantIds: T.a.instanceOf(l.List).isRequired,
            currentTab: T.a.string.isRequired
        };
        var wl = Object(oe.connect)(function(e, t) {
            var r, a;
            return {
                activeRestaurants: (r = Object(n.fb)(e),
                a = t.activeRestaurantIds,
                r ? r.filter(function(e) {
                    return a.includes(e.get("id"))
                }) : Object(l.List)())
            }
        }, function(e) {
            return {
                onClick: function(t) {
                    return e(Object(ne.push)("/orders/drivers?ctaId=".concat(t)))
                }
            }
        })(Sl)
          , Dl = Object(n.ic)(wl)
          , Ml = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    reverseSort: !1
                },
                r.fetchInfiniteScrollOrders = r.fetchInfiniteScrollOrders.bind(Ue(Ue(r))),
                r.toggleSort = r.toggleSort.bind(Ue(Ue(r))),
                r
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "fetchInfiniteScrollOrders",
                value: function() {
                    this.props.isScrolling || this.props.fetchInfiniteScrollOrders()
                }
            }, {
                key: "toggleSort",
                value: function() {
                    this.setState({
                        reverseSort: !this.state.reverseSort
                    })
                }
            }, {
                key: "getActiveBundle",
                value: function() {
                    var e = this.props
                      , t = e.inHouseOrders
                      , r = e.currentTab === ft
                      , n = _.a.createElement("div", null, this.unconfirmedOrdersBundle, _.a.createElement(Sc, {
                        reverseSort: this.state.reverseSort,
                        onToggle: this.toggleSort,
                        title: "In progress",
                        orderCount: t.size
                    }), this.inHouseOrdersBundle);
                    return this.getBundleContainer(ft, n, r)
                }
            }, {
                key: "getScheduledBundle",
                value: function() {
                    var e = this.props
                      , t = e.currentTab
                      , r = e.scrollOffset
                      , n = t === gt
                      , a = n ? r : Et
                      , i = _.a.createElement("div", null, this.futureActionableOrdersBundle, this.getScheduledOrdersBundle(a));
                    return this.getBundleContainer(gt, i, n)
                }
            }, {
                key: "getScheduledOrdersBundle",
                value: function(e) {
                    var t = this.props
                      , r = t.activeRestaurantIds
                      , n = t.scheduledCount
                      , a = t.scheduledOrders
                      , i = t.doneFetchingOrdersForPage;
                    return _.a.createElement("div", null, _.a.createElement(Sc, {
                        title: "Pending",
                        orderCount: n
                    }), _.a.createElement(Tl, {
                        orders: a,
                        orderRenderingLimit: e
                    }), i && _.a.createElement(Nl, {
                        orders: a,
                        activeRestaurantIds: r,
                        tabName: gt
                    }))
                }
            }, {
                key: "getCompletedBundle",
                value: function() {
                    var e = this.props
                      , t = e.activeRestaurantIds
                      , r = e.doneFetchingOrdersForPage
                      , n = e.outTheDoorOrders
                      , a = e.currentTab
                      , i = e.scrollOffset
                      , s = a === pt
                      , o = s ? i : Et
                      , c = _.a.createElement("div", null, _.a.createElement(_l, {
                        orders: n,
                        orderRenderingLimit: o
                    }), r ? _.a.createElement(Nl, {
                        orders: n,
                        activeRestaurantIds: t,
                        tabName: pt
                    }) : null);
                    return this.getBundleContainer(pt, c, s)
                }
            }, {
                key: "getBundleContainer",
                value: function(e, t, r) {
                    var n = r ? {} : {
                        display: "none"
                    };
                    return _.a.createElement("div", {
                        key: e,
                        style: n
                    }, t)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.currentOrders;
                    if (this.props.currentTab === ft) {
                        var r = this.props.inHouseOrders.size;
                        e = r > 0 && this.props.scrollOffset < r
                    } else
                        e = t.size > 0 && this.props.scrollOffset < t.size;
                    var n = !e && this.props.doneFetchingOrdersForPage;
                    return this.props.isRefreshing ? _.a.createElement("div", {
                        className: "order-lists__loader-container"
                    }, _.a.createElement(s.fb, {
                        size: "xx-large"
                    })) : _.a.createElement("div", null, _.a.createElement(s.y, {
                        onThreshold: this.fetchInfiniteScrollOrders,
                        threshold: 100,
                        showLoader: this.props.isScrolling,
                        enabled: !n
                    }, this.getActiveBundle(), this.getCompletedBundle(), this.getScheduledBundle(), _.a.createElement(Dl, {
                        activeRestaurantIds: this.props.activeRestaurantIds,
                        currentTab: this.props.currentTab
                    })))
                }
            }, {
                key: "currentOrders",
                get: function() {
                    var e = this.props.currentTab;
                    return e === gt ? this.props.scheduledOrders : e === ft ? this.props.unconfirmedOrders.concat(this.props.inHouseOrders) : this.props.outTheDoorOrders
                }
            }, {
                key: "unconfirmedOrdersBundle",
                get: function() {
                    var e = this.props
                      , t = e.activeRestaurantIds
                      , r = e.unconfirmedOrders;
                    return t.size && 0 === r.size ? _.a.createElement("div", {
                        className: "order-lists__no-active-orders order-lists__no-unconfirmed-orders"
                    }, _.a.createElement("p", null, "New orders will appear here.")) : _.a.createElement(_l, {
                        orders: r,
                        orderRenderingLimit: r.size,
                        useNewOrderCard: !0
                    })
                }
            }, {
                key: "inHouseOrdersBundle",
                get: function() {
                    var e = this.props
                      , t = e.activeRestaurantIds
                      , r = e.currentTab
                      , n = e.scrollOffset
                      , a = e.inHouseOrders
                      , i = r === ft;
                    return t.size && 0 === a.size ? _.a.createElement("div", {
                        className: "order-lists__no-active-orders order-lists__no-in-house-orders"
                    }, _.a.createElement("h2", null, "No confirmed orders"), _.a.createElement("p", null, "Check History to review past orders.")) : _.a.createElement(_l, {
                        orders: a,
                        orderRenderingLimit: i ? n : Et,
                        reverseSort: this.state.reverseSort
                    })
                }
            }, {
                key: "futureActionableOrdersBundle",
                get: function() {
                    var e = this.props
                      , t = e.activeRestaurantIds
                      , r = e.futureActionableOrders;
                    return t.size && 0 === r.size ? _.a.createElement("div", {
                        className: "order-lists__no-active-orders order-lists__no-unconfirmed-orders"
                    }, _.a.createElement("p", null, "Orders requiring attention will appear here.")) : _.a.createElement(_l, {
                        orders: r,
                        orderRenderingLimit: r.size,
                        useNewOrderCard: !0
                    })
                }
            }]),
            t
        }();
        Ml.propTypes = {
            scrollOffset: T.a.number.isRequired,
            isRefreshing: T.a.bool.isRequired,
            currentTab: T.a.oneOf(Object.keys(ht)).isRequired,
            unconfirmedOrders: T.a.instanceOf(l.List).isRequired,
            inHouseOrders: T.a.instanceOf(l.List).isRequired,
            futureActionableOrders: T.a.instanceOf(l.List).isRequired,
            scheduledOrders: T.a.instanceOf(l.List).isRequired,
            scheduledCount: T.a.number,
            outTheDoorOrders: T.a.instanceOf(l.List).isRequired,
            doneFetchingOrdersForPage: T.a.bool.isRequired,
            isScrolling: T.a.bool.isRequired,
            activeRestaurantIds: T.a.instanceOf(l.List).isRequired,
            lastPollingTimestamp: T.a.oneOfType([T.a.number, T.a.instanceOf(Date)])
        };
        var kl = Object(oe.connect)(null, function(e) {
            return {
                fetchInfiniteScrollOrders: function() {
                    return e(De({
                        type: He.loadingOrdersForPage
                    }, n.k, !0))
                }
            }
        })(Ml)
          , Ll = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).isTabChanged = !1,
                e.getActiveScheduledOrders = e.createGetActiveOrdersSelector(),
                e.getActiveUnconfirmedOrders = e.createGetActiveOrdersSelector(),
                e.getActiveInHouseOrders = e.createGetActiveOrdersSelector(),
                e.getActiveOutTheDoorOrders = e.createGetActiveOrdersSelector(),
                e
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "hasTabChanged",
                value: function(e) {
                    var t = e.currentTab
                      , r = this.props.currentTab;
                    return t && r && t !== r
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , r = t.currentTab
                      , n = t.doneFetchingOrdersForPage
                      , a = t.isRefreshing
                      , i = t.scrollOffset
                      , s = t.analytics
                      , o = !a && (i || n);
                    if (this.hasTabChanged(e) && (this.isTabChanged = !0),
                    !o || !this.isTabChanged)
                        return !1;
                    s.finishPerformanceMeasureFor("ORDER_TAB_TAP_OR_CLICK", null, {
                        firedFrom: r
                    }),
                    this.isTabChanged = !1
                }
            }, {
                key: "createGetActiveOrdersSelector",
                value: function() {
                    return Object(Ee.createSelector)([function(e) {
                        return e
                    }
                    , function(e, t) {
                        return t
                    }
                    ], function(e, t) {
                        return e.filter(function(e) {
                            return t.includes(e.get("shortMerchantId"))
                        })
                    })
                }
            }, {
                key: "getCurrentModal",
                value: function(e) {
                    if (this.props.testOrderModalOpen)
                        return _.a.createElement(Rc, null);
                    var t = this.getCurrentOrderDetailsOrder();
                    if (t) {
                        var r = {
                            loading: this.props.orderDetailsLoading,
                            order: t,
                            onClose: this.props.onDetailsClose,
                            currentTab: this.props.currentTab,
                            unconfirmedOrders: e
                        };
                        return _.a.createElement(Tc, r)
                    }
                    return null
                }
            }, {
                key: "getCurrentOrderDetailsOrder",
                value: function() {
                    var e = this;
                    return this.props.orderDetailsId ? Object(l.List)([this.props.scheduledOrders, this.props.unconfirmedOrders, this.props.inHouseOrders, this.props.outTheDoorOrders, this.props.futureActionableOrders]).flatten(!0).find(function(t) {
                        return t.get("uuid") === e.props.orderDetailsId
                    }) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props;
                    if (!e.loaded)
                        return null;
                    var t = {
                        futureActionableOrders: this.getActiveUnconfirmedOrders(e.futureActionableOrders, e.activeRestaurantIds),
                        scheduledOrders: this.getActiveScheduledOrders(e.scheduledOrders, e.activeRestaurantIds),
                        scheduledCount: e.scheduledCount,
                        unconfirmedOrders: this.getActiveUnconfirmedOrders(e.unconfirmedOrders, e.activeRestaurantIds),
                        inHouseOrders: this.getActiveInHouseOrders(e.inHouseOrders, e.activeRestaurantIds),
                        outTheDoorOrders: this.getActiveOutTheDoorOrders(e.outTheDoorOrders, e.activeRestaurantIds),
                        scrollOffset: e.scrollOffset,
                        doneFetchingOrdersForPage: e.doneFetchingOrdersForPage,
                        isScrolling: e.isScrolling,
                        currentTab: e.currentTab,
                        activeRestaurantIds: e.activeRestaurantIds,
                        isRefreshing: e.isRefreshing,
                        lastPollingTimestamp: e.lastPollingTimestamp
                    };
                    return _.a.createElement(b.Fragment, null, _.a.createElement(s.t, {
                        className: "orders-body",
                        nested: !0
                    }, _.a.createElement(s.l, {
                        width: 12
                    }, _.a.createElement(kl, t))), this.getCurrentModal(t.unconfirmedOrders))
                }
            }]),
            t
        }();
        var jl = Object(oe.connect)(function(e) {
            var t = "orders" === e.getIn(["page", "location"]) && e.getIn(["page", "data"]);
            return t ? {
                loaded: !0,
                isRefreshing: e.getIn(["orders", "refreshing"]),
                currentTab: t.get("currentTab"),
                activeRestaurantIds: e.getIn(["page", "activeRestaurantIds"]),
                unconfirmedOrders: e.getIn(["orders", "unconfirmedOrders"]),
                inHouseOrders: e.getIn(["orders", "inHouseOrders"]),
                futureActionableOrders: e.getIn(["orders", "futureActionableOrders"]),
                scheduledOrders: t.get("scheduledOrders"),
                scheduledCount: e.getIn(["orders", "scheduledCount"]),
                outTheDoorOrders: t.get("outTheDoorOrders"),
                scrollOffset: t.get("currentOffset"),
                doneFetchingOrdersForPage: t.get("doneFetchingOrdersForPage"),
                isScrolling: t.get("scrolling"),
                lastPollingTimestamp: e.getIn(["orders", "lastPollingTimestamp"]),
                orderDetailsId: t.get("orderDetailsId"),
                orderDetailsLoading: t.get("orderDetailsLoading"),
                testOrderModalOpen: t.get("testOrderModalOpen")
            } : {
                loaded: !1
            }
        }, function(e) {
            return {
                onDetailsClose: function() {
                    return e(it(null))
                }
            }
        })(Ll)
          , Pl = Object(n.ic)(jl);
        function xl() {
            return _.a.createElement("div", {
                className: "orders-no-polling"
            }, _.a.createElement("div", {
                className: "gfr-grid"
            }, _.a.createElement("div", {
                className: "gfr-grid__col--11 orders-no-polling__body"
            }, _.a.createElement("div", {
                className: "orders-no-polling__body__icon"
            }, _.a.createElement(s.w, {
                value: "bag-swift",
                iconColor: "truffle-50",
                size: "large"
            })), _.a.createElement("h2", null, "Welcome to Grubhub for Restaurants!"), _.a.createElement("p", null, "Access the main menu at the top-left corner of the screen to manage your business with Grubhub."))))
        }
        function Ul(e) {
            return e.getIn(["page", "data", "cancellations", "showModal"])
        }
        function Fl(e) {
            return e.getIn(["page", "data", "cancellations", "isSuccess"])
        }
        function Bl(e) {
            return e.getIn(["page", "data", "cancellations", "isLoading"])
        }
        function zl(e) {
            return e.getIn(["page", "data", "cancellations", "isValid"])
        }
        function Gl(e) {
            return e.getIn(["page", "data", "cancellations", "reason"]) || ""
        }
        var Yl = Object(oe.connect)(function(e) {
            return {
                isLoading: Bl(e),
                isSuccess: Fl(e),
                isValid: zl(e),
                reason: Gl(e),
                showModal: Ul(e)
            }
        }, function(e) {
            return {
                closeModal: function() {
                    return e(Zi())
                },
                setNotes: function(t) {
                    return e($i(t))
                },
                setReason: function(t) {
                    return e(es(t))
                },
                submit: function() {
                    return e(ts())
                }
            }
        })(function(e) {
            var t = e.closeModal
              , r = e.isLoading
              , n = e.isValid
              , a = e.isSuccess
              , i = e.reason
              , o = e.setNotes
              , c = e.setReason
              , l = e.showModal
              , u = e.submit;
            if (!l)
                return null;
            function d() {
                r || a || u()
            }
            var m = i === _t;
            return _.a.createElement(s.G, {
                onClose: t,
                headerTitle: "Cancel Order",
                footerContent: _.a.createElement(s.e, {
                    disabled: !n,
                    onClick: d,
                    isLoading: r,
                    isSuccess: a
                }, "Request cancellation"),
                className: "cancel-order-modal",
                outsideClicksCloseModal: !1
            }, _.a.createElement(s.X, {
                value: i,
                onChange: c,
                className: "cancel-order-modal__group",
                itemClassName: "cancel-order-modal__item-wrapper"
            }, Ot.map(function(e) {
                return _.a.createElement(s.W, {
                    key: e,
                    label: e,
                    value: e,
                    className: "cancel-order-modal__item"
                })
            })), m ? _.a.createElement(s.sb, {
                placeholder: "Describe your reason",
                onChange: o,
                className: "cancel-order-modal__notes"
            }) : null)
        })
          , Hl = function(e) {
            var t = e.driver
              , r = e.form
              , n = e.onChange
              , a = r.get("selectedRating");
            return _.a.createElement("section", {
                className: "rate-driver-drawer-form-rating"
            }, _.a.createElement("div", {
                className: "rate-driver-drawer-form-rating__driver"
            }, _.a.createElement(s.b, {
                className: "rate-driver-drawer-form-rating__avatar",
                photoUrl: t.get("photoUrl")
            }), _.a.createElement("section", {
                className: "rate-driver-drawer-form-rating__driver-details"
            }, _.a.createElement("h4", null, "How was ", _.a.createElement("br", null), _.a.createElement("span", {
                className: "rate-driver-drawer-form-rating__driver-name"
            }, t.get("courierName")), "?"), _.a.createElement("p", null, N()(t.get("lastPickupTime")).fromNow().replace("minute", "min")))), _.a.createElement(s.Y, {
                className: "rate-driver-drawer-form-rating__rating",
                value: a,
                maximum: 5,
                iconSize: "medium",
                iconColor: "orange",
                onChange: n
            }))
        };
        Hl.propTypes = {
            driver: T.a.instanceOf(l.Map).isRequired,
            form: T.a.instanceOf(l.Map).isRequired,
            onChange: T.a.func.isRequired
        };
        var ql = function(e) {
            var t = e.driver
              , r = e.form
              , n = e.onSubmit
              , a = e.onChangeRating;
            return _.a.createElement("section", {
                className: C()("rate-driver-drawer-form", {
                    "rate-driver-drawer-form--rating-selected": r.get("selectedRating")
                })
            }, _.a.createElement(Hl, {
                driver: t,
                form: r,
                onChange: a
            }), _.a.createElement("div", {
                className: "rate-driver-drawer-form__details"
            }, _.a.createElement(_o, {
                form: r
            }), function(e) {
                var t = e.form
                  , r = e.onSubmit
                  , n = t.get("isLoading")
                  , a = t.get("isSuccess");
                return _.a.createElement(s.e, {
                    className: "rate-driver-drawer-form__submit-button",
                    type: "primary",
                    isLoading: n,
                    isSuccess: a,
                    onClick: r
                }, "Submit")
            }({
                form: r,
                onSubmit: n
            })))
        };
        ql.propTypes = {
            driver: T.a.instanceOf(l.Map).isRequired,
            form: T.a.instanceOf(l.Map).isRequired,
            onSubmit: T.a.func.isRequired,
            onChangeRating: T.a.func.isRequired
        };
        var Ql = Object(oe.connect)(function(e) {
            return {
                form: Sa(e).get("form")
            }
        }, function(e, t) {
            var r = t.driver;
            return {
                onSubmit: function() {
                    return e(Aa({
                        courierId: r.get("courierId"),
                        merchantId: r.get("custId")
                    }))
                },
                onChangeRating: function(t) {
                    return e(Ea(t))
                }
            }
        })(ql);
        Ql.propTypes = {
            driver: T.a.instanceOf(l.Map).isRequired
        };
        var Vl = function(e) {
            var t = e.driver
              , r = e.open
              , n = e.onClose;
            return t && r ? _.a.createElement(s.r, {
                onClose: n
            }, _.a.createElement(Ql, {
                driver: t
            })) : null
        };
        Vl.propTypes = {
            driver: T.a.instanceOf(l.Map),
            onClose: T.a.func,
            open: T.a.bool
        };
        var Jl = Object(oe.connect)(function(e) {
            var t = Sa(e);
            return {
                driver: t ? t.get("couriersToRate").peek() : null,
                open: !!t && t.get("open")
            }
        }, function(e) {
            return {
                onClose: function() {
                    return e(ha())
                }
            }
        })(Vl);
        function Wl(e) {
            return e.getIn(["page", "data", "adjustments", "showModal"])
        }
        function Kl(e) {
            return e.getIn(["page", "data", "adjustments", "extraCharge"])
        }
        function Xl(e) {
            return e.getIn(["page", "data", "adjustments", "isValid"])
        }
        function Zl(e) {
            return e.getIn(["page", "data", "adjustments", "isSuccess"])
        }
        function $l(e) {
            return e.getIn(["page", "data", "adjustments", "isLoading"])
        }
        function eu(e) {
            return e.getIn(["page", "data", "adjustments", "reason"])
        }
        var tu = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).state = {
                    amountValue: ""
                },
                e.onChanged = e.onChanged.bind(Ue(Ue(e))),
                e.onBlur = e.onBlur.bind(Ue(Ue(e))),
                e
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "onChanged",
                value: function(e) {
                    e = (e = (e = (e = (e = (e = String(e)).replace(/[^0-9.]/g, "")).replace(/\.+/g, ".")).replace(/(.*\.[0-9][0-9]?).*/g, "$1")).replace(/^0+(.*)$/, "0$1")).replace(/^0([^.].*)$/, "$1"),
                    this.setState({
                        amountValue: e
                    }),
                    this.props.onChange("" === e ? "" : Number(e))
                }
            }, {
                key: "onBlur",
                value: function(e) {
                    this.setState({
                        amountValue: "" === e ? "" : Q()(e).format("0.00")
                    }),
                    this.props.onBlur("" === e ? "" : Number(e))
                }
            }, {
                key: "render",
                value: function() {
                    var e = Me({}, this.props);
                    return _.a.createElement(s.rb, Me({}, e, {
                        value: this.state.amountValue,
                        placeholder: "$0",
                        onChange: this.onChanged,
                        onBlur: this.onBlur
                    }))
                }
            }]),
            t
        }();
        tu.propTypes = {
            onChange: T.a.func.isRequired,
            onBlur: T.a.func
        },
        tu.defaultProps = {
            onBlur: function() {}
        };
        var ru = Object(oe.connect)(function(e) {
            return {
                show: Wl(e),
                extraCharge: Kl(e),
                isValid: Xl(e),
                isLoading: $l(e),
                isSuccess: Zl(e),
                selectedReason: eu(e)
            }
        }, function(e) {
            return {
                setExtraCharge: function(t) {
                    return e(ps(t))
                },
                setReason: function(t) {
                    return e(fs(t))
                },
                setNotes: function(t) {
                    return e(hs(t))
                },
                setAmount: function(t) {
                    return e(vs(t))
                },
                close: function() {
                    return e(gs())
                },
                submit: function() {
                    e(ys())
                }
            }
        })(function(e) {
            var t = e.show
              , r = e.close
              , n = e.submit
              , a = e.isValid
              , i = e.isLoading
              , o = e.isSuccess
              , c = e.extraCharge
              , l = e.selectedReason
              , u = e.setExtraCharge
              , d = e.setAmount
              , m = e.setReason
              , g = e.setNotes;
            return t ? _.a.createElement(s.G, {
                onClose: r,
                headerTitle: "Adjust order",
                className: "order-adjustment-modal",
                footerContent: _.a.createElement(s.t, {
                    flush: !0,
                    nested: !0,
                    justify: "center"
                }, _.a.createElement(s.l, {
                    lg: 6
                }, _.a.createElement(s.e, {
                    onClick: p,
                    disabled: !a,
                    isSuccess: o
                }, "Request Adjustment"))),
                outsideClicksCloseModal: !1
            }, _.a.createElement("h3", {
                className: "order-adjustment-modal__header"
            }, "Select adjustment type"), _.a.createElement(s.f, {
                buttons: yt,
                onChange: function(e) {
                    return u(e === yt[1].value)
                },
                selectedValue: f()
            }), _.a.createElement(s.X, {
                value: l,
                onChange: m,
                className: "order-adjustment-modal__group",
                itemClassName: "order-adjustment-modal__item-wrapper"
            }, (f() ? c ? At : bt : []).map(function(e) {
                return _.a.createElement(s.W, {
                    key: e,
                    label: e,
                    value: e,
                    className: "order-adjustment-modal__item"
                })
            })), f() ? _.a.createElement(s.rb, {
                placeholder: "Describe your reason",
                onChange: g,
                className: "order-adjustment-modal__notes"
            }) : null, _.a.createElement("h3", {
                className: "order-adjustment-modal__bottom-header"
            }, "Enter adjustment amount"), _.a.createElement(tu, {
                onChange: d,
                className: "order-adjustment-modal__amount"
            })) : null;
            function p() {
                i || o || n()
            }
            function f() {
                return !1 === c ? yt[0].value : c ? yt[1].value : ""
            }
        });
        var nu = function(e) {
            function t() {
                return Ne(this, t),
                Fe(this, je(t).call(this))
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "componentDidMount",
                value: function() {
                    this.props.pageLoaded(),
                    this.checkUrlForNewTab()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.checkUrlForNewTab()
                }
            }, {
                key: "checkUrlForNewTab",
                value: function() {
                    var e = this.props;
                    !function(e, t, r) {
                        var n = e.search ? Object(ye.parse)(e.search) : {};
                        "tab"in n && (vt.includes(n.tab) && t(n.tab),
                        delete n.tab,
                        r({
                            pathname: e.pathname,
                            search: Object(ye.stringify)(n),
                            hash: e.hash
                        }))
                    }(e.location, e.changeSelectedTab, e.changeLocation)
                }
            }, {
                key: "getOrdersComponents",
                value: function() {
                    return _.a.createElement("div", null, _.a.createElement(Js, null), _.a.createElement(Pl, null), _.a.createElement(Yl, null), _.a.createElement(Jl, null), _.a.createElement(ru, null))
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.canShowOrdersPolling ? this.getOrdersComponents() : _.a.createElement(xl, null)
                }
            }]),
            t
        }();
        nu.propTypes = {
            location: T.a.shape({
                hash: T.a.string,
                pathname: T.a.string,
                search: T.a.string
            }).isRequired
        };
        var au = Object(oe.connect)(function(e) {
            var t = Object(n.Cb)(e, "ORDER_POLLING_MAX_RESTAURANTS")
              , r = Object(n.H)(e);
            return {
                canShowOrdersPolling: (r && r.map(function(e) {
                    return e.get("groupMembers").size
                }).reduce(function(e, t) {
                    return e + t
                }, 0)) < t
            }
        }, function(e) {
            return {
                pageLoaded: function() {
                    return e(Object(n.Pb)("orders", {
                        suppressTargetedMessage: !0,
                        suppressWootricSurvey: !0
                    }))
                },
                changeSelectedTab: function(t) {
                    return e($e(t))
                },
                changeLocation: function(t) {
                    return e(Object(ne.replace)(t))
                }
            }
        })(nu)
          , iu = {
            loadDriverData: "LOAD_DRIVER_DATA",
            filterDriversByText: "FILTER_DRIVERS_BY_SEARCH_TEXT",
            refreshDriversToRateFinished: "DRIVERS_TO_RATE_REFRESH_FINISHED",
            refreshDriversToRateError: "DRIVERS_TO_RATE_REFRESH_ERROR"
        };
        function su(e) {
            var t;
            return De(t = {
                type: iu.refreshDriversToRateFinished
            }, n.k, !0),
            De(t, "driversToRate", Object(l.fromJS)(e)),
            t
        }
        function ou() {
            return De({
                type: iu.refreshDriversToRateError
            }, n.k, !0)
        }
        function cu(e, t) {
            if (!t)
                return e;
            var r = new RegExp(t,"gi");
            return e.filter(function(e) {
                return e.get("courierName").match(r)
            })
        }
        function lu(e, t) {
            return e.getIn(["page", "data", "formsByDriverId", t.toString()])
        }
        function uu(e) {
            var t = e.hasMultipleRestaurants
              , r = e.onSearchDriver;
            return _.a.createElement("div", {
                className: "driver-rating-header"
            }, _.a.createElement(s.t, null, _.a.createElement(s.l, null, _.a.createElement("h1", {
                className: "driver-rating-header__title"
            }, "Rate your drivers")), t ? _.a.createElement(s.l, {
                lg: 3
            }, _.a.createElement("div", {
                className: "driver-rating-header__restaurant-selector"
            }, _.a.createElement(n.B, null))) : null, _.a.createElement(s.l, {
                lg: 3
            }, _.a.createElement(s.ab, {
                className: "driver-rating-header__search-box",
                onReturn: r,
                placeholder: "Search",
                onClear: r
            }))))
        }
        uu.propTypes = {
            hasMultipleRestaurants: T.a.bool,
            onSearchDriver: T.a.func
        };
        var du = "driver-ratings-card";
        function mu(e) {
            var t = e.driver
              , r = t.get("courierName")
              , n = t.get("numPickups")
              , a = "".concat(n, " order").concat(n > 1 ? "s" : "");
            return _.a.createElement(s.t, {
                flush: !0,
                className: "".concat(du, "__header")
            }, _.a.createElement(s.l, {
                lg: 6,
                md: 6,
                sm: 6,
                className: "".concat(du, "__name")
            }, _.a.createElement("h4", null, r)), _.a.createElement(s.l, {
                lg: 6,
                md: 6,
                sm: 6,
                className: "".concat(du, "__pickups")
            }, _.a.createElement("h4", null, a)))
        }
        mu.propTypes = {
            driver: T.a.instanceOf(l.Map).isRequired
        };
        var gu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).renderCommentButton = r.renderCommentButton.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "renderCommentButton",
                value: function(e) {
                    var t = this.props
                      , r = t.onToggleComment
                      , n = t.selectedComments.includes(e);
                    return _.a.createElement(s.e, {
                        key: e,
                        className: "".concat("rate-driver-comments", "__button"),
                        type: "secondary",
                        forceActive: n,
                        onClick: function() {
                            return r(e)
                        }
                    }, e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.selectedRating;
                    if (!e)
                        return null;
                    var t = Ra(e);
                    return _.a.createElement("div", {
                        className: "rate-driver-comments"
                    }, t.map(this.renderCommentButton))
                }
            }]),
            t
        }();
        gu.propTypes = {
            onToggleComment: T.a.func.isRequired,
            selectedComments: T.a.instanceOf(l.Set).isRequired,
            selectedRating: T.a.number.isRequired
        };
        var pu = "RATE_DRIVERS_"
          , fu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).onSubmit = r.onSubmit.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "onSubmit",
                value: function() {
                    var e = this.props
                      , t = e.driver
                      , r = e.form
                      , n = e.restaurantId
                      , a = e.submitDriverRating
                      , i = t.get("courierId")
                      , s = r.get("isLoading")
                      , o = r.get("isSuccess");
                    s || o || a({
                        courierId: i,
                        merchantId: n
                    })
                }
            }, {
                key: "renderThanks",
                value: function() {
                    return _.a.createElement("p", {
                        className: "".concat("rate-driver", "__thanks")
                    }, "Thanks for your feedback!")
                }
            }, {
                key: "renderRating",
                value: function() {
                    var e = this.props
                      , t = e.form
                      , r = e.setSelectedRating
                      , n = e.toggleSelectedComment
                      , a = t.get("selectedComments")
                      , i = t.get("selectedRating");
                    return _.a.createElement("div", null, _.a.createElement(s.Y, {
                        className: "".concat("rate-driver", "__rating"),
                        value: i,
                        maximum: 5,
                        iconSize: "medium",
                        iconColor: "orange",
                        onChange: r
                    }), _.a.createElement(gu, {
                        selectedComments: a,
                        selectedRating: i,
                        onToggleComment: n
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , r = e.form
                      , n = r.get("selectedRating")
                      , a = r.get("isLoading")
                      , i = r.get("isSuccess");
                    return _.a.createElement("div", {
                        className: C()("rate-driver", t)
                    }, i ? this.renderThanks() : this.renderRating(), _.a.createElement(s.e, {
                        className: "".concat("rate-driver", "__submit-button"),
                        type: "primary",
                        disabled: !n,
                        isLoading: a,
                        isSuccess: i,
                        onClick: this.onSubmit
                    }, "Submit"))
                }
            }]),
            t
        }();
        fu.propTypes = {
            className: T.a.string,
            driver: T.a.instanceOf(l.Map).isRequired,
            restaurantId: T.a.string.isRequired
        };
        var hu = Object(oe.connect)(function(e, t) {
            return {
                form: lu(e, t.driver.get("courierId"))
            }
        }, function(e, t) {
            var r = t.driver.get("courierId")
              , n = "".concat(pu).concat(r);
            return {
                submitDriverRating: function(t) {
                    return e(ea(n, t))
                },
                setSelectedRating: function(t) {
                    return e(Xn(n, t))
                },
                toggleSelectedComment: function(t) {
                    return e(Zn(n, t))
                }
            }
        })(fu)
          , vu = "driver-ratings-card";
        function Eu(e) {
            var t = e.driver
              , r = t.get("photoUrl");
            return _.a.createElement(s.i, {
                className: vu,
                header: _.a.createElement(mu, {
                    driver: t
                })
            }, _.a.createElement("div", {
                className: "".concat(vu, "__body")
            }, _.a.createElement(s.b, {
                className: "".concat(vu, "__avatar"),
                photoUrl: r
            }), _.a.createElement(hu, Me({
                className: "".concat(vu, "__rate-driver")
            }, e))))
        }
        function yu() {
            return _.a.createElement(s.t, {
                className: "driver-ratings-view-no-drivers"
            }, _.a.createElement(s.l, null, _.a.createElement("h3", null, "No drivers to rate."), _.a.createElement("p", null, "You can only rate drivers who have picked up an order from you today.")))
        }
        Eu.propTypes = {
            driver: T.a.instanceOf(l.Map).isRequired,
            restaurantId: T.a.string.isRequired
        };
        var Au = "driver-ratings-view";
        function bu(e) {
            var t = e.drivers
              , r = e.isLoading
              , n = e.restaurantId;
            return r ? _.a.createElement("div", {
                className: "".concat(Au, "__loading")
            }, _.a.createElement(s.fb, {
                size: "xx-large"
            })) : t.size ? _.a.createElement(s.t, {
                className: Au,
                nested: !0
            }, t.map(function(e) {
                return _.a.createElement(s.l, {
                    className: "".concat(Au, "__card"),
                    lg: 6,
                    key: e.get("courierId")
                }, _.a.createElement(Eu, {
                    driver: e,
                    restaurantId: n
                }))
            })) : _.a.createElement(yu, null)
        }
        function _u() {
            return _.a.createElement(s.t, {
                className: "driver-view__intro"
            }, _.a.createElement(s.l, null, "Rating your drivers helps make Grubhub delivery better. Your feedback will be anonymous."))
        }
        bu.propTypes = {
            drivers: T.a.instanceOf(l.List),
            isLoading: T.a.bool,
            restaurantId: T.a.string
        },
        bu.defaultProps = {
            isLoading: !1
        };
        var Ou = Object(oe.connect)(function(e) {
            var t = e.getIn(["page", "data"]);
            return {
                associatedRestaurants: Object(n.fb)(e),
                activeRestaurantId: Object(n.D)(e),
                isLoading: t.get("isLoading"),
                driversToRate: cu(t.get("driversToRate"), t.get("searchText"))
            }
        }, function(e) {
            return {
                filterDriversBySearchText: function(t) {
                    return e(function(e) {
                        return {
                            type: iu.filterDriversByText,
                            searchText: e
                        }
                    }(t))
                }
            }
        })(function(e) {
            var t = e.activeRestaurantId
              , r = e.associatedRestaurants
              , n = e.driversToRate
              , a = e.filterDriversBySearchText
              , i = e.isLoading
              , s = !i && n && n.size
              , o = r.size > 1;
            return _.a.createElement("div", {
                className: "drivers-view"
            }, _.a.createElement(uu, {
                hasMultipleRestaurants: o,
                onSearchDriver: a
            }), s ? _.a.createElement(_u, null) : null, _.a.createElement(bu, {
                isLoading: i,
                drivers: n,
                restaurantId: t
            }))
        })
          , Tu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).updateCopies = r.updateCopies.bind(Ue(Ue(r))),
                r.updateEnabled = r.updateEnabled.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "updateCopies",
                value: function(e) {
                    this.props.updateSettings(this.props.enabled, e)
                }
            }, {
                key: "updateEnabled",
                value: function(e) {
                    this.props.updateSettings(e, this.props.copies)
                }
            }, {
                key: "render",
                value: function() {
                    return _.a.createElement(s.t, {
                        className: "auto-print-settings"
                    }, _.a.createElement(s.l, null, _.a.createElement("h3", {
                        className: "auto-print-settings__header"
                    }, "Auto-print receipts")), _.a.createElement(s.l, null, _.a.createElement("p", {
                        className: "auto-print-settings__description"
                    }, "Enable auto-printing if you would like incoming tickets to be automatically printed via your connected printer.")), _.a.createElement(s.l, null, _.a.createElement(s.X, {
                        className: "auto-print-settings__enabled",
                        value: this.props.enabled,
                        onChange: this.updateEnabled
                    }, _.a.createElement(s.W, {
                        label: "Yes",
                        value: !0
                    }), _.a.createElement(s.W, {
                        label: "No",
                        value: !1
                    }))), _.a.createElement(s.l, null, _.a.createElement("p", {
                        className: "auto-print-settings__copies-header"
                    }, "Number of copies to auto-print"), _.a.createElement(s.t, {
                        flush: !0,
                        nested: !0,
                        className: "auto-print-settings__copies"
                    }, _.a.createElement(s.l, {
                        lg: 3
                    }, _.a.createElement(s.O, {
                        step: 1,
                        min: 0,
                        max: 100,
                        value: this.props.copies,
                        onChange: this.updateCopies
                    })))))
                }
            }]),
            t
        }();
        var Iu = Object(oe.connect)(function(e) {
            var t = function(e) {
                return e.getIn(["orders", "printing"])
            }(e);
            return {
                enabled: t.get("autoPrintEnabled"),
                copies: t.get("autoPrintCopies")
            }
        }, function(e) {
            return {
                updateSettings: function(t, r) {
                    e(function(e) {
                        var t = e.enabled
                          , r = e.copies;
                        return {
                            type: mr.setAutoPrintSettings,
                            enabled: t,
                            copies: r
                        }
                    }({
                        enabled: t,
                        copies: r
                    }))
                }
            }
        })(Tu)
          , Cu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    isMenuOpen: !1,
                    isLoading: !1,
                    showSuccessState: !1,
                    showFailState: !1,
                    isTestPrintInQueue: !1
                },
                r.handleTriggerClick = r.handleTriggerClick.bind(Ue(Ue(r))),
                r.testPrinting = r.testPrinting.bind(Ue(Ue(r))),
                r.disconnectPrinter = r.disconnectPrinter.bind(Ue(Ue(r))),
                r.waitAndRevertToNormalState = r.waitAndRevertToNormalState.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "waitAndRevertToNormalState",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.setState({
                            showSuccessState: !1,
                            showFailState: !1
                        })
                    }, 1500)
                }
            }, {
                key: "getSuccessIcon",
                value: function() {
                    return _.a.createElement(s.w, {
                        value: "checkmark-circle",
                        size: "medium",
                        className: "star-printer-connection-kabob__icon--success"
                    })
                }
            }, {
                key: "getFailIcon",
                value: function() {
                    return _.a.createElement(s.w, {
                        value: "warning-circle",
                        size: "medium",
                        className: "star-printer-connection-kabob__icon--fail"
                    })
                }
            }, {
                key: "getTrigger",
                value: function() {
                    var e = C()("star-printer-connection-kabob__button", {
                        "star-printer-connection-kabob__button--success": this.state.showSuccessState,
                        "star-printer-connection-kabob__button--fail": this.state.showFailState
                    });
                    return _.a.createElement("div", {
                        id: "thermalPrinterKabob"
                    }, _.a.createElement(s.e, {
                        className: e,
                        type: "inverse-secondary",
                        isLoading: this.state.isLoading,
                        isSuccess: this.state.showSuccessState,
                        isFail: this.state.showFailState,
                        onClick: this.handleTriggerClick,
                        successElement: this.getSuccessIcon(),
                        failElement: this.getFailIcon()
                    }, _.a.createElement(s.w, {
                        value: "kabob-circle",
                        size: "medium",
                        className: "star-printer-connection-kabob__icon"
                    })))
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    this.props.printerError && this.state.showFailState && !this.state.isLoading && !e.printerError && (this.waitAndRevertToNormalState(),
                    this.props.setTestPrintErrorMessage(this.props.printerError)),
                    !this.state.showSuccessState || this.state.isLoading || t.showSuccessState || (this.waitAndRevertToNormalState(),
                    this.props.setTestPrintErrorMessage(null))
                }
            }, {
                key: "testPrinting",
                value: function() {
                    this.state.isLoading || (this.setState({
                        isLoading: !0
                    }),
                    this.props.sendTestPrint())
                }
            }, {
                key: "disconnectPrinter",
                value: function() {
                    this.state.isLoading || (this.setState({
                        isLoading: !0
                    }),
                    this.props.onDisconnect())
                }
            }, {
                key: "getKabobMenu",
                value: function() {
                    return _.a.createElement("div", {
                        className: "star-printer-connection-kabob__menu",
                        onClick: this.handleTriggerClick
                    }, _.a.createElement("div", {
                        className: "star-printer-connection-kabob__menu__item",
                        id: "thermalPrinterKabob-testPrint",
                        onClick: this.testPrinting
                    }, "Test printer"), _.a.createElement("div", {
                        className: "star-printer-connection-kabob__menu__item",
                        id: "thermalPrinterKabob-disconnect",
                        onClick: this.disconnectPrinter
                    }, "Disconnect printer"))
                }
            }, {
                key: "handleTriggerClick",
                value: function() {
                    this.setState({
                        isMenuOpen: !this.state.isMenuOpen
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return _.a.createElement("div", {
                        className: "star-printer-connection-kabob"
                    }, _.a.createElement(s.U, {
                        trigger: this.getTrigger(),
                        openLeft: !0,
                        openUp: !1,
                        isOpen: this.state.isMenuOpen,
                        onChange: this.handleTriggerClick
                    }, this.getKabobMenu()))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return t.isLoading && t.isTestPrintInQueue && !e.isTestPrintInQueue ? e.printerError ? {
                        showFailState: !0,
                        isLoading: !1,
                        isTestPrintInQueue: e.isTestPrintInQueue
                    } : {
                        showSuccessState: !0,
                        isLoading: !1,
                        isTestPrintInQueue: e.isTestPrintInQueue
                    } : {
                        isTestPrintInQueue: e.isTestPrintInQueue
                    }
                }
            }]),
            t
        }();
        Cu.propTypes = {
            setTestPrintErrorMessage: T.a.func.isRequired,
            onDisconnect: T.a.func.isRequired
        };
        var Ru = Object(oe.connect)(function(e) {
            var t = ks(e)
              , r = Ls(e);
            return {
                isTestPrintInQueue: t.some(function(e) {
                    return e.get("isTest")
                }),
                printerError: r && r.message || null
            }
        }, function(e) {
            return {
                sendTestPrint: function() {
                    e({
                        type: mr.sendTestPrint
                    })
                }
            }
        })(Cu)
          , Nu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    errorMessage: !1
                },
                r.setTestPrintErrorMsg = r.setTestPrintErrorMsg.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "setTestPrintErrorMsg",
                value: function(e) {
                    this.setState({
                        errorMessage: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.connectedPrinter
                      , r = e.onDisconnect;
                    return !(t && t.get("name")) ? _.a.createElement("div", {
                        id: "thermalPrinter-notConnected",
                        className: "star-printer-device-info__printer"
                    }, "No printer connected") : _.a.createElement("div", null, _.a.createElement("div", {
                        className: "star-printer-device-info"
                    }, _.a.createElement("div", {
                        id: "thermalPrinter-connectedDevice",
                        className: "star-printer-device-info__printer star-printer-device-info__printer--connected"
                    }, _.a.createElement(s.w, {
                        value: "print",
                        size: "regular",
                        className: "star-printer-device-info__printer__icon"
                    }), t.get("name")), _.a.createElement("div", {
                        className: "star-printer-device-info__kabob"
                    }, _.a.createElement(Ru, {
                        setTestPrintErrorMessage: this.setTestPrintErrorMsg,
                        onDisconnect: r
                    }))), this.state.errorMessage ? _.a.createElement("p", {
                        id: "thermalPrinter-errorMessage",
                        className: "star-printer-device-info__error-msg"
                    }, this.state.errorMessage) : null)
                }
            }]),
            t
        }();
        Nu.propTypes = {
            connectedPrinter: T.a.instanceOf(l.Map),
            onDisconnect: T.a.func
        };
        var Su = "star-printer-settings__discovery"
          , wu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    error: !1,
                    loading: !1,
                    availablePrinters: Object(l.fromJS)([]),
                    selectedMacAddress: ""
                },
                r.fetchAllPrinters = r.fetchAllPrinters.bind(Ue(Ue(r))),
                r.onRadioChange = r.onRadioChange.bind(Ue(Ue(r))),
                r.onFetchPrintersFailure = r.onFetchPrintersFailure.bind(Ue(Ue(r))),
                r.onFetchPrintersSuccess = r.onFetchPrintersSuccess.bind(Ue(Ue(r))),
                r.savePrinter = r.savePrinter.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "componentWillUnmount",
                value: function() {
                    n.hc.clearTimeout(this.timeout)
                }
            }, {
                key: "fetchAllPrinters",
                value: function() {
                    this.state.loading || (this.setState({
                        error: !1,
                        loading: !0
                    }),
                    n.Y.getAvailablePrinters().then(this.onFetchPrintersSuccess, this.onFetchPrintersFailure))
                }
            }, {
                key: "onFetchPrintersSuccess",
                value: function(e) {
                    var t = this.props.connectedPrinter
                      , r = Object(l.fromJS)(e.printers)
                      , n = t ? t.get("macAddress") : r.first().get("macAddress");
                    this.setState({
                        loading: !1,
                        availablePrinters: r,
                        selectedMacAddress: n
                    })
                }
            }, {
                key: "onFetchPrintersFailure",
                value: function() {
                    this.setState({
                        error: !0,
                        loading: !1
                    })
                }
            }, {
                key: "onRadioChange",
                value: function(e) {
                    this.setState({
                        selectedMacAddress: e
                    })
                }
            }, {
                key: "savePrinter",
                value: function() {
                    var e = this
                      , t = this.state
                      , r = t.loading
                      , a = t.availablePrinters
                      , i = t.selectedMacAddress
                      , s = a.find(function(e) {
                        return e.get("macAddress") === i
                    });
                    r || (this.setState({
                        loading: !0
                    }),
                    n.Y.savePrinter(s.get("ipAddress"), s.get("macAddress"), s.get("name")),
                    n.hc.clearTimeout(this.timeout),
                    this.timeout = n.hc.setTimeout(function() {
                        e.props.onSave(s),
                        e.setState({
                            loading: !1,
                            availablePrinters: Object(l.fromJS)([])
                        })
                    }, 400))
                }
            }, {
                key: "renderAddPrinterButton",
                value: function() {
                    var e = this.state.loading;
                    return _.a.createElement(s.t, {
                        className: "".concat(Su, "__add-printer"),
                        flush: !0
                    }, _.a.createElement(s.l, {
                        lg: 6,
                        md: 6
                    }, _.a.createElement(s.e, {
                        type: "primary",
                        isLoading: e,
                        onClick: this.fetchAllPrinters
                    }, "Add printer")))
                }
            }, {
                key: "renderAvailablePrinters",
                value: function() {
                    var e = this.state
                      , t = e.loading
                      , r = e.availablePrinters;
                    return _.a.createElement("div", {
                        className: "".concat(Su, "__available-printers")
                    }, _.a.createElement(s.t, {
                        flush: !0
                    }, _.a.createElement(s.l, null, _.a.createElement(s.X, {
                        value: this.state.selectedMacAddress,
                        onChange: this.onRadioChange
                    }, r.map(function(e) {
                        var t = e.get("macAddress");
                        return _.a.createElement(s.W, {
                            key: t,
                            label: e.get("name"),
                            value: t
                        })
                    })))), _.a.createElement(s.t, {
                        flush: !0
                    }, _.a.createElement(s.l, {
                        lg: 6,
                        md: 6
                    }, _.a.createElement(s.e, {
                        type: "primary",
                        isLoading: t,
                        onClick: this.savePrinter
                    }, "Select printer"))))
                }
            }, {
                key: "renderErrorMessage",
                value: function() {
                    return _.a.createElement("p", {
                        className: "".concat(Su, "__error-message")
                    }, "We couldn't find a printer near you. Make sure the printer is powered on and try again")
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.error
                      , r = e.availablePrinters;
                    return _.a.createElement("div", {
                        className: Su
                    }, t ? this.renderErrorMessage() : null, r.size ? this.renderAvailablePrinters() : this.renderAddPrinterButton())
                }
            }]),
            t
        }();
        function Du(e) {
            var t = e.onClose;
            return _.a.createElement("div", {
                className: "star-printer-help-content"
            }, _.a.createElement("div", {
                className: "star-printer-help-content__header"
            }, _.a.createElement("h2", {
                className: "star-printer-help-content__header__title"
            }, "Printer help"), function(e) {
                return _.a.createElement("button", {
                    id: "thermalPrinterHelpClose",
                    onClick: e,
                    className: "star-printer-help-content__header__close-btn"
                }, _.a.createElement(s.w, {
                    value: "close",
                    size: "small",
                    className: "star-printer-help-content__header__icon"
                }))
            }(t)), _.a.createElement("div", {
                className: "star-printer-help-content__section"
            }, _.a.createElement("h3", {
                className: "star-printer-help-content__title"
            }, "Setting up a Star printer"), _.a.createElement("p", null, "Grubhub for Restaurants currently supports ethernet connected Star printers. To set up your Star printer, make sure your printer is powered on and plugged in to your router. Then, follow the steps below."), _.a.createElement("ol", {
                className: "star-printer-help-content__list"
            }, _.a.createElement("li", {
                className: "star-printer-help-content__list--indent"
            }, "Tap the ", _.a.createElement("strong", null, "Add printer"), " button."), _.a.createElement("li", {
                className: "star-printer-help-content__list--indent"
            }, "Choose the printer you'd like to use and tap", " ", _.a.createElement("strong", null, "Select printer"), "."), _.a.createElement("li", {
                className: "star-printer-help-content__list--indent"
            }, "Test the connection by tapping the ", Mu(), " icon and selecting", " ", _.a.createElement("strong", null, "Test printer"), "."))), _.a.createElement("div", {
                className: "star-printer-help-content__section"
            }, _.a.createElement("h3", {
                className: "star-printer-help-content__title"
            }, "Receipt printer not working"), _.a.createElement("p", null, "A common solution for some problems is to disconnect and reconnect the printer. You can do that with the following steps:"), _.a.createElement("ol", {
                className: "star-printer-help-content__list"
            }, _.a.createElement("li", {
                className: "star-printer-help-content__list--indent"
            }, "Tap the ", Mu(), " icon next to the printer in your Grubhub for Restaurants ", _.a.createElement("strong", null, "Settings"), " page."), _.a.createElement("li", {
                className: "star-printer-help-content__list--indent"
            }, "Choose ", _.a.createElement("strong", null, "Disconnect"), ". This will disconnect your receipt printer."), _.a.createElement("li", {
                className: "star-printer-help-content__list--indent"
            }, "Tap the ", _.a.createElement("strong", null, "Add printer"), " button."), _.a.createElement("li", {
                className: "star-printer-help-content__list--indent"
            }, "Choose the printer you'd like to use and tap", " ", _.a.createElement("strong", null, "Select printer"), "."), _.a.createElement("li", {
                className: "star-printer-help-content__list--indent"
            }, "Test the connection by tapping the ", Mu(), " icon and selecting", " ", _.a.createElement("strong", null, "Test printer"), "."))))
        }
        function Mu() {
            return _.a.createElement(s.w, {
                value: "kabob-circle",
                size: "small",
                className: "star-printer-help-content__icon"
            })
        }
        wu.propTypes = {
            connectedPrinter: T.a.instanceOf(l.Map),
            onSave: T.a.func.isRequired
        },
        Du.propTypes = {
            onClose: T.a.func.isRequired
        };
        var ku = function(e) {
            function t() {
                var e;
                return Ne(this, t),
                (e = Fe(this, je(t).call(this))).state = {
                    open: !1
                },
                e.openAside = function() {
                    return e.setState({
                        open: !0
                    })
                }
                ,
                e.closeAside = function() {
                    return e.setState({
                        open: !1
                    })
                }
                ,
                e
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "render",
                value: function() {
                    return _.a.createElement("div", null, this.state.open ? this.helpContentAside : null, _.a.createElement("div", {
                        className: "star-printer-settings-header"
                    }, _.a.createElement("div", {
                        className: "star-printer-settings-header__row"
                    }, _.a.createElement("h2", null, "Receipt printer"), _.a.createElement("a", {
                        href: "#",
                        onClick: this.openAside,
                        id: "thermalPrinterHelp"
                    }, "Help")), _.a.createElement("p", {
                        className: "star-printer-settings-header__body"
                    }, "You can print receipts from Grubhub for Restaurants if you have a Star printer.")))
                }
            }, {
                key: "helpContentAside",
                get: function() {
                    return _.a.createElement(s.R, {
                        hideHeader: !0
                    }, _.a.createElement(Du, {
                        onClose: this.closeAside
                    }))
                }
            }]),
            t
        }()
          , Lu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    connectedPrinter: r.currentPrinter
                },
                r.onDisconnect = r.onDisconnect.bind(Ue(Ue(r))),
                r.onPrinterSaved = r.onPrinterSaved.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "onDisconnect",
                value: function() {
                    n.Y.savePrinter(null, null, null),
                    this.setState({
                        connectedPrinter: null
                    })
                }
            }, {
                key: "onPrinterSaved",
                value: function(e) {
                    this.setState({
                        connectedPrinter: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.connectedPrinter;
                    return n.Y.isGCInABox() ? _.a.createElement(s.t, {
                        className: "star-printer-settings"
                    }, _.a.createElement(s.l, null, _.a.createElement(ku, null), _.a.createElement(Nu, {
                        connectedPrinter: e,
                        onDisconnect: this.onDisconnect
                    }), _.a.createElement(wu, {
                        connectedPrinter: e,
                        onSave: this.onPrinterSaved
                    }))) : null
                }
            }, {
                key: "currentPrinter",
                get: function() {
                    return n.Y.isGCInABox() ? Object(l.fromJS)(n.Y.getCurrentPrinter()) : null
                }
            }]),
            t
        }()
          , ju = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).audio = new Audio,
                r.onChange = r.onChange.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "onChange",
                value: function(e) {
                    this.audio.src = Yt[e],
                    this.audio.play(),
                    this.props.onChange(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.ding;
                    return e ? _.a.createElement(s.t, {
                        className: "incoming-order-sound"
                    }, _.a.createElement(s.l, null, _.a.createElement("h3", {
                        className: "".concat("incoming-order-sound", "__header")
                    }, "Incoming order sound"), _.a.createElement("p", {
                        className: "".concat("incoming-order-sound", "__description")
                    }, "Change the default sound that plays when an incoming order arrives. Click to preview the sound."), _.a.createElement(s.X, {
                        value: e,
                        onChange: this.onChange
                    }, Object.keys(Yt).map(function(e) {
                        return _.a.createElement(s.W, {
                            key: e,
                            label: e,
                            value: e
                        })
                    })))) : null
                }
            }]),
            t
        }();
        ju.propTypes = {
            ding: T.a.string,
            onChange: T.a.func.isRequired
        };
        var Pu = {
            getOrderDing: "GET_ORDER_DING",
            updateOrderDing: "UPDATE_ORDER_DING_IN_STORAGE",
            updateRestaurantEstimates: "SETTINGS_UPDATE_RESTAURANT_ESTIMATES",
            estimatesUpdateSuccessful: "SETTINGS_ESTIMATES_UPDATE_SUCCESS",
            estimatesUpdateFailure: "SETTINGS_ESTIMATES_UPDATE_FAILURE"
        };
        function xu(e) {
            return De({
                type: Pu.estimatesUpdateSuccessful,
                restaurant: e
            }, n.m, !0)
        }
        function Uu() {
            return {
                type: Pu.estimatesUpdateFailure
            }
        }
        function Fu(e) {
            return {
                type: Pu.getOrderDing,
                ding: e
            }
        }
        var Bu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = r.getInitialState(),
                r.resetUpdateTimeouts(),
                r.onPickupEstimateChanged = r.onPickupEstimateChanged.bind(Ue(Ue(r))),
                r.onDeliveryEstimateChanged = r.onDeliveryEstimateChanged.bind(Ue(Ue(r))),
                r.updateEstimates = r.updateEstimates.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    if (e.restaurant !== this.props.restaurant && !this.estimatesAlreadyUpdated(this.props)) {
                        var t = this.timeouts
                          , r = t.pickup
                          , n = t.delivery;
                        (r || n) && this.updateEstimates(),
                        this.setState(this.getInitialState()),
                        this.cancelUpdateTimeouts(this.timeouts.pickup, this.timeouts.delivery),
                        this.resetUpdateTimeouts()
                    }
                }
            }, {
                key: "estimatesAlreadyUpdated",
                value: function(e) {
                    var t = e.restaurant.getIn(["orderTypeSettings", "standard", "deliveryEstimateMinutes"])
                      , r = e.restaurant.getIn(["orderTypeSettings", "standard", "pickupEstimateMinutes"])
                      , n = this.state
                      , a = n.deliveryEstimate
                      , i = n.pickupEstimate;
                    return !(-1 !== a && t !== a || -1 !== i && r !== i)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this.timeouts
                      , t = e.pickup
                      , r = e.delivery;
                    (t || r) && this.updateEstimates(),
                    this.cancelUpdateTimeouts(t, r),
                    this.resetUpdateTimeouts()
                }
            }, {
                key: "getInitialState",
                value: function() {
                    return {
                        pickupEstimate: -1,
                        deliveryEstimate: -1
                    }
                }
            }, {
                key: "setTimeoutAndUpdate",
                value: function(e) {
                    var t = this;
                    this.timeouts[e] = window.setTimeout(function() {
                        t.timeouts[e] = void 0,
                        t.updateEstimates()
                    }, 2e3)
                }
            }, {
                key: "onPickupEstimateChanged",
                value: function(e) {
                    var t = -1 !== this.state.pickupEstimate;
                    this.cancelUpdateTimeouts(this.timeouts.pickup),
                    this.setState({
                        pickupEstimate: e
                    }),
                    t && this.setTimeoutAndUpdate("pickup")
                }
            }, {
                key: "onDeliveryEstimateChanged",
                value: function(e) {
                    var t = -1 !== this.state.deliveryEstimate;
                    this.cancelUpdateTimeouts(this.timeouts.delivery),
                    this.setState({
                        deliveryEstimate: e
                    }),
                    t && this.setTimeoutAndUpdate("delivery")
                }
            }, {
                key: "cancelUpdateTimeouts",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    t.forEach(function(e) {
                        return window.clearTimeout(e)
                    })
                }
            }, {
                key: "resetUpdateTimeouts",
                value: function() {
                    this.timeouts = {
                        delivery: void 0,
                        pickup: void 0
                    }
                }
            }, {
                key: "updateEstimates",
                value: function() {
                    var e = this.state
                      , t = e.pickupEstimate
                      , r = e.deliveryEstimate
                      , n = this.props
                      , a = n.updateRestaurantEstimates
                      , i = n.restaurant
                      , s = Object(l.fromJS)({
                        merchantId: i.get("merchantId")
                    });
                    t > -1 && (s = s.setIn(["orderTypeSettings", "standard", "pickupEstimateMinutes"], t)),
                    r > -1 && (s = s.setIn(["orderTypeSettings", "standard", "deliveryEstimateMinutes"], r)),
                    a(s)
                }
            }, {
                key: "render",
                value: function() {
                    return _.a.createElement(s.t, {
                        className: "default-estimates"
                    }, _.a.createElement(s.l, null, _.a.createElement("h3", {
                        className: "default-estimates__header"
                    }, "Default estimates"), _.a.createElement("p", {
                        className: "default-estimates__description"
                    }, "Change your default estimates to accurately reflect the time it takes for you to make your food and get it to your customers. Remember, you can always change these estimates for each order.")), _.a.createElement(s.l, {
                        className: "default-estimates__time-picker default-estimates__time-picker--pickup"
                    }, _.a.createElement("p", {
                        className: "default-estimates__time-picker__header"
                    }, "Default prep estimate"), this.pickupTimePicker), this.props.restaurant.get("managedDelivery") ? null : _.a.createElement(s.l, {
                        className: "default-estimates__time-picker default-estimates__time-picker--delivery"
                    }, _.a.createElement("p", {
                        className: "default-estimates__time-picker__header"
                    }, "Default prep + delivery estimate"), this.deliveryTimePicker))
                }
            }, {
                key: "deliveryTimePicker",
                get: function() {
                    var e = {
                        isPickup: !1,
                        isGHD: !1,
                        orderTypeSettings: this.props.restaurant.get("orderTypeSettings"),
                        value: this.state.deliveryEstimate,
                        onChange: this.onDeliveryEstimateChanged
                    };
                    return _.a.createElement(s.t, {
                        nested: !0,
                        flush: !0
                    }, _.a.createElement(s.l, {
                        lg: 4
                    }, _.a.createElement(X.a, e)))
                }
            }, {
                key: "pickupTimePicker",
                get: function() {
                    var e = {
                        isPickup: !0,
                        isGHD: !1,
                        orderTypeSettings: this.props.restaurant.get("orderTypeSettings"),
                        value: this.state.pickupEstimate,
                        onChange: this.onPickupEstimateChanged
                    };
                    return _.a.createElement(s.t, {
                        nested: !0,
                        flush: !0
                    }, _.a.createElement(s.l, {
                        lg: 4
                    }, _.a.createElement(X.a, e)))
                }
            }]),
            t
        }();
        Bu.propTypes = {
            restaurant: T.a.instanceOf(u.a.Map).isRequired
        };
        var zu = Object(oe.connect)(null, function(e) {
            return {
                updateRestaurantEstimates: function(t) {
                    return e((r = t,
                    {
                        type: Pu.updateRestaurantEstimates,
                        settings: r
                    }));
                    var r
                }
            }
        })(Bu);
        function Gu(e) {
            return e.getIn(["page", "data", "ding"])
        }
        var Yu = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                (r = Fe(this, je(t).call(this, e))).state = {
                    showTestOrderModal: !1
                },
                r.toggleTestOrderModal = r.toggleTestOrderModal.bind(Ue(Ue(r))),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "toggleTestOrderModal",
                value: function() {
                    this.setState({
                        showTestOrderModal: !this.state.showTestOrderModal
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return _.a.createElement(b.Fragment, null, this.state.showTestOrderModal ? _.a.createElement(Rc, {
                        onClose: this.toggleTestOrderModal
                    }) : null, _.a.createElement("div", {
                        className: "settings-view"
                    }, this.header, this.mainContent))
                }
            }, {
                key: "mainContent",
                get: function() {
                    if (!this.props.activeRestaurant)
                        return null;
                    var e = this.props
                      , t = e.activeRestaurant
                      , r = e.ding
                      , n = e.updateDing;
                    return _.a.createElement("div", {
                        className: "".concat("settings-view", "__content gfr-container")
                    }, _.a.createElement(zu, {
                        restaurant: t
                    }), _.a.createElement(Lu, null), _.a.createElement(Iu, null), _.a.createElement(ju, {
                        ding: r,
                        onChange: n
                    }), this.sendTestOrderSection)
                }
            }, {
                key: "restaurantSelector",
                get: function() {
                    return _.a.createElement(s.l, {
                        lg: 4,
                        className: "".concat("settings-view", "__header__restaurant-selector")
                    }, _.a.createElement(n.B, null))
                }
            }, {
                key: "sendTestOrderSection",
                get: function() {
                    return _.a.createElement(s.t, null, _.a.createElement(s.l, null, _.a.createElement("h3", {
                        className: "".concat("settings-view", "__test-order__header")
                    }, "Test order")), _.a.createElement(s.l, null, _.a.createElement("p", {
                        className: "".concat("settings-view", "__test-order__description")
                    }, "Send yourself a test order to make sure everything is functioning correctly.")), _.a.createElement(s.l, {
                        lg: 3
                    }, _.a.createElement(s.e, {
                        type: "secondary",
                        onClick: this.toggleTestOrderModal
                    }, "Send test order")))
                }
            }, {
                key: "header",
                get: function() {
                    var e = this.props.associatedRestaurants
                      , t = e && e.size > 1
                      , r = C()("".concat("settings-view", "__header"), De({}, "".concat("settings-view", "__header--no-selector"), !t));
                    return _.a.createElement(s.t, {
                        nested: !0,
                        align: "center",
                        className: r
                    }, _.a.createElement(s.l, {
                        lg: 8
                    }, _.a.createElement("h2", null, "Settings")), t ? this.restaurantSelector : null)
                }
            }]),
            t
        }();
        var Hu = Object(oe.connect)(function(e) {
            return {
                associatedRestaurants: Object(n.fb)(e),
                activeRestaurant: Object(n.ab)(e),
                ding: Gu(e)
            }
        }, function(e) {
            return {
                updateDing: function(t) {
                    return e(function(e) {
                        return {
                            type: Pu.updateOrderDing,
                            ding: e
                        }
                    }(t))
                }
            }
        })(Yu);
        var qu = Object(oe.connect)(function(e) {
            return {
                isLoggedIn: Object(n.Jb)(e),
                canAccessOrders: bn(e)
            }
        })(function(e) {
            return e.isLoggedIn ? e.canAccessOrders ? _.a.createElement(be.a, null, _.a.createElement(_e.a, {
                exact: !0,
                path: "/orders",
                component: au
            }), _.a.createElement(n.e, {
                exact: !0,
                path: "/orders/drivers/".concat(n.e.placeholder),
                title: "Drivers",
                component: Ou,
                pageReducerName: "orders/drivers",
                suppressWootricSurvey: !0
            }), _.a.createElement(n.e, {
                exact: !0,
                path: "/orders/settings/".concat(n.e.placeholder),
                title: "Settings",
                component: Hu,
                pageReducerName: "orders/settings",
                suppressWootricSurvey: !0
            }), _.a.createElement(Ae.a, {
                to: "/orders"
            })) : _.a.createElement(Ae.a, {
                to: "/"
            }) : _.a.createElement(n.z, {
                to: "/"
            })
        })
          , Qu = Object(Oe.a)(qu);
        function Vu(e) {
            return e.getIn(["orders", "driverRatingReminder", "showModal"])
        }
        var Ju = Object(oe.connect)(function(e) {
            return {
                isModalShown: Vu(e)
            }
        }, function(e) {
            return {
                closeModal: function() {
                    return e({
                        type: Fa.hideDriverRatingReminderModal
                    })
                },
                redirect: function() {
                    return e(Object(ne.push)("/orders/drivers"))
                }
            }
        })(function(e) {
            var t = e.isModalShown
              , r = e.closeModal
              , n = e.redirect;
            if (!t)
                return null;
            var a = "driver-rating-reminder";
            return _.a.createElement(s.H, {
                centered: !0,
                onClose: r,
                outsideClicksCloseModal: !1
            }, _.a.createElement("h2", {
                className: "".concat(a, "__header")
            }, "Improve Grubhub delivery"), _.a.createElement("p", null, "Your feedback helps us and your drivers make Grubhub delivery better. Your ratings are always anonymous."), _.a.createElement(s.t, {
                justify: "right",
                className: "".concat(a, "__footer"),
                flush: !0
            }, _.a.createElement(s.l, {
                sm: 6,
                md: 4,
                lg: 4
            }, _.a.createElement(s.e, {
                className: "".concat(a, "__cancel"),
                onClick: function() {
                    return r()
                },
                type: "link"
            }, "No thanks")), _.a.createElement(s.l, {
                sm: 6,
                md: 5,
                lg: 6
            }, _.a.createElement(s.e, {
                onClick: function() {
                    r(),
                    n()
                },
                type: "primary"
            }, "Rate drivers"))))
        });
        function Wu(e) {
            return e.getIn(["orders", "goLiveTestOrder"], Object(l.fromJS)({}))
        }
        function Ku(e) {
            return Wu(e).get("isCollapsed")
        }
        function Xu(e) {
            return Wu(e).get("isLoading")
        }
        function Zu(e) {
            return Wu(e).get("finished")
        }
        function $u(e) {
            return Wu(e).get("errorStatus")
        }
        function ed(e) {
            return Wu(e).get("errorData")
        }
        var td = Object(l.Set)(["DATA_REVIEW", "GO_LIVE_READY"])
          , rd = Object(l.Set)([li.step, ui.step]);
        function nd(e) {
            if (!function(e) {
                return Object(n.Cb)(e, "SHOW_TEST_ORDER_GO_LIVE_MODAL")
            }(e))
                return null;
            var t = Object(n.fb)(e).filter(function(t) {
                var r = t.getIn(["orderTypeSettings", "standard"], Object(l.fromJS)({}))
                  , n = t.get("goLiveMerchantStatus");
                return !!n && "DISABLED" !== n && (td.contains(r.get("merchantStatus")) || rd.contains(sd(e)) && r.get("merchantStatusCategory").startsWith("ACTIVE"))
            }).sortBy(function(e) {
                return e.get("id")
            });
            return t.isEmpty() ? null : t.get(0)
        }
        function ad(e) {
            return Wu(e).getIn(["goLiveReminder", "selectedDate"])
        }
        function id(e) {
            return Wu(e).get("showSetGoLiveReminderModal")
        }
        function sd(e) {
            return Wu(e).get("step")
        }
        var od = "go-live-test-order-modal"
          , cd = function(e) {
            var t, r = e.title, n = e.body, a = e.okButtonText, i = e.cancelButtonText, o = e.okCallback, c = e.cancelCallback, l = e.isLoading, u = e.color, d = void 0 === u ? "blue" : u, m = e.expandModal, g = e.collapseModal, p = e.isCollapsed, f = e.step, h = C()("".concat(od, "__content"), (De(t = {}, "".concat(od, "__content--collapsed"), p),
            De(t, "".concat(od, "__content--open"), !p),
            t)), v = C()("", De({}, "".concat(od, "__drawer__close-button--collapsed"), p)), E = p ? _.a.createElement("div", null, _.a.createElement("span", null, r), _.a.createElement("span", {
                onClick: m
            }, _.a.createElement(s.w, {
                className: "".concat(od, "__expand-button"),
                value: "arrow-up",
                size: "small",
                iconColor: "truffle-50"
            }))) : _.a.createElement("h3", null, r);
            return _.a.createElement("div", {
                className: od
            }, _.a.createElement(s.r, {
                className: h,
                onClose: function() {
                    return g(f)
                },
                closeButtonClassName: v
            }, E, !p && _.a.createElement(_.a.Fragment, null, _.a.createElement("div", {
                className: "".concat(od, "__content__text")
            }, n), _.a.createElement(s.t, {
                nested: !0,
                justify: "right",
                className: "".concat(od, "__content__buttons")
            }, c && i && _.a.createElement(s.l, {
                width: 6
            }, _.a.createElement(s.e, {
                type: "link",
                className: "".concat(od, "__content__buttons__cancel-button"),
                onClick: c,
                isLoading: l
            }, i)), _.a.createElement(s.l, {
                width: 6
            }, _.a.createElement(s.e, {
                color: d,
                className: "".concat(od, "__content__buttons__ok-button"),
                onClick: o,
                isLoading: l
            }, a))))))
        };
        cd.propTypes = {
            title: T.a.string.isRequired,
            body: T.a.node.isRequired,
            okButtonText: T.a.string.isRequired,
            cancelButtonText: T.a.string,
            okCallback: T.a.func.isRequired,
            cancelCallback: T.a.func,
            isLoading: T.a.bool,
            color: T.a.string
        };
        var ld = Object(oe.connect)(function(e) {
            return {
                isCollapsed: Ku(e)
            }
        }, function(e) {
            return {
                expandModal: function(t) {
                    return e(function(e) {
                        return {
                            type: Wa.expandModal,
                            step: e,
                            isCollapsed: !1
                        }
                    }(t))
                },
                collapseModal: function(t) {
                    return e(function(e) {
                        return {
                            type: Wa.collapseModal,
                            step: e,
                            isCollapsed: !0
                        }
                    }(t))
                }
            }
        })(cd);
        function ud(e) {
            var t = e.selectedDate
              , r = e.selectDate
              , n = e.closeModal
              , a = e.saveAndClose
              , i = _.a.createElement(s.t, {
                nested: !0,
                justify: "right",
                className: "go-live-reminder-modal__footer-content"
            }, _.a.createElement(s.l, {
                width: 3
            }, _.a.createElement(s.e, {
                onClick: n,
                className: "go-live-reminder-modal__footer-content__cancel-btn",
                type: "link"
            }, "Cancel")), _.a.createElement(s.l, {
                width: 3
            }, _.a.createElement(s.e, {
                onClick: function() {
                    return a(t)
                },
                className: "go-live-reminder-modal__footer-content__save-btn"
            }, "Save")));
            return _.a.createElement(s.G, {
                onClose: n,
                className: "go-live-reminder-modal",
                headerTitle: "Set a reminder to go live",
                footerContent: i
            }, _.a.createElement("div", {
                className: "go-live-reminder-modal__content"
            }, _.a.createElement("div", null, "Let us know when you'd like a reminder to go live and start taking orders from customers."), _.a.createElement("div", {
                className: "go-live-reminder-modal__content__date-picker"
            }, _.a.createElement(s.cb, {
                disablePastDates: !0,
                date: t,
                onDateChanged: r
            })), _.a.createElement("div", null, "If you have any questions before going live, contact your sales representative.")))
        }
        ud.propTypes = {
            merchantId: T.a.string.isRequired
        };
        var dd = Object(oe.connect)(function(e) {
            return {
                selectedDate: ad(e)
            }
        }, function(e, t) {
            return {
                closeModal: function() {
                    return e(ti())
                },
                selectDate: function(t) {
                    return e((r = t,
                    {
                        type: Wa.selectGoLiveReminderDate,
                        goLiveReminderDate: r
                    }));
                    var r
                },
                saveAndClose: function(r) {
                    return e((n = t.merchantId,
                    a = r,
                    {
                        type: Wa.saveGoLiveReminderDate,
                        merchantId: n,
                        goLiveReminderDate: a
                    }));
                    var n, a
                }
            }
        })(ud)
          , md = function(e) {
            function t(e) {
                var r;
                return Ne(this, t),
                r = Fe(this, je(t).call(this, e)),
                ["sendTestOrder", "openReminderToGoLiveModal"].forEach(function(e) {
                    return r[e] = r[e].bind(Ue(Ue(r)))
                }),
                r.steps = {
                    initial: ke({}, ii, {
                        okCallback: function() {
                            return r.sendTestOrder(!1)
                        }
                    }),
                    testOrderSentSuccess: ke({}, si, {
                        okCallback: function() {
                            return r.sendTestOrder(!0)
                        }
                    }),
                    testOrderSentFailed: ke({}, oi, {
                        okCallback: function() {
                            return r.sendTestOrder(!0)
                        }
                    }),
                    readyToStartTakingOrder: ke({}, ci, {
                        okCallback: function() {
                            return r.props.startTakingOrder(r.props.testOrderReadyMerchant.get("merchantId"))
                        },
                        cancelCallback: function() {
                            return r.openReminderToGoLiveModal()
                        }
                    }),
                    congrats: ke({}, li, {
                        okCallback: r.props.dismissCongratsModal
                    }),
                    dontForgetToConfirm: ke({}, ui, {
                        okCallback: r.props.finishTestOrderGoLive
                    })
                },
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props
                      , t = e.testOrderReadyMerchant;
                    (0,
                    e.onLoad)(t)
                }
            }, {
                key: "sendTestOrder",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , t = this.props
                      , r = t.sendTestOrder
                      , n = t.resendTestOrder
                      , a = t.testOrderReadyMerchant;
                    a && (e ? n(a.get("id")) : r(a.get("id")))
                }
            }, {
                key: "openReminderToGoLiveModal",
                value: function() {
                    this.props.openSetGoLiveReminderModal()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.testOrderReadyMerchant
                      , r = e.isLoading
                      , n = e.isFinished;
                    return !t || n ? null : this.props.showGoLiveReminderModal ? _.a.createElement(dd, {
                        merchantId: t.get("merchantId")
                    }) : this.modalContext && _.a.createElement(ld, Me({}, this.modalContext, {
                        isLoading: r
                    }))
                }
            }, {
                key: "modalContext",
                get: function() {
                    var e = this.props
                      , t = e.step
                      , r = e.errorStatus
                      , n = e.errorData;
                    if (!t)
                        return null;
                    var a = this.steps[t];
                    if (t === oi.step) {
                        var i = a.body.replace("${ERROR_MESSAGE}", r < 500 ? n.get("message") : "Something went wrong.");
                        a = ke({}, a, {
                            body: i
                        })
                    }
                    if (t === ci.step) {
                        var s = a.body.replace("${CARE_NUM}", this.props.rcarePhoneNumber)
                          , o = a
                          , c = o.title
                          , l = o.cancelButtonText;
                        this.props.goLiveReminderDate && (c = "Go-live reminder set for ".concat(N()(this.props.goLiveReminderDate).format("MMM Do")),
                        l = "Change reminder date"),
                        a = ke({}, a, {
                            title: c,
                            cancelButtonText: l,
                            body: s
                        })
                    }
                    return a
                }
            }]),
            t
        }()
          , gd = Object(oe.connect)(function(e) {
            return {
                testOrderReadyMerchant: nd(e),
                errorData: ed(e),
                errorStatus: $u(e),
                step: sd(e),
                isLoading: Xu(e),
                isFinished: Zu(e),
                goLiveReminderDate: ad(e),
                showGoLiveReminderModal: id(e),
                rcarePhoneNumber: Object(n.V)(Object(n.wb)(e).replace(/-/g, ""))
            }
        }, function(e) {
            return {
                onLoad: function(t) {
                    return e(function(e) {
                        return {
                            type: Wa.onLoad,
                            testOrderReadyMerchant: e
                        }
                    }(t))
                },
                sendTestOrder: function(t) {
                    return e(function(e) {
                        return {
                            type: Wa.sendTestOrder,
                            restaurantId: e
                        }
                    }(t))
                },
                resendTestOrder: function(t) {
                    return e(function(e) {
                        return {
                            type: Wa.resendTestOrder,
                            restaurantId: e
                        }
                    }(t))
                },
                startTakingOrder: function(t) {
                    return e(function(e) {
                        return {
                            type: Wa.startTakingOrder,
                            merchantId: e
                        }
                    }(t))
                },
                dismissCongratsModal: function() {
                    return e({
                        type: Wa.dismissCongratsModal
                    })
                },
                nextStep: function(t) {
                    return e(function(e) {
                        return {
                            type: Wa.nextStep,
                            step: e
                        }
                    }(t))
                },
                openSetGoLiveReminderModal: function() {
                    return e(De({
                        type: Wa.openSetGoLiveReminderModal
                    }, n.l, !0))
                },
                finishTestOrderGoLive: function() {
                    return e({
                        type: Wa.finishTestOrderGoLive
                    })
                }
            }
        })(md);
        var pd = Object(oe.connect)(function(e) {
            return {
                orders: e.getIn(["orders", "printing", "reprintingScheduledOrders"])
            }
        }, function(e) {
            return {
                closeModal: function(t) {
                    return e(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return {
                            type: mr.closeReprintScheduledOrderModal,
                            redirect: e
                        }
                    }(t))
                }
            }
        })(function(e) {
            var t = e.orders
              , r = e.closeModal;
            if (t.size < 1)
                return null;
            return _.a.createElement(s.H, {
                onClose: r,
                outsideClicksCloseModal: !1,
                centered: !0
            }, _.a.createElement("div", {
                className: "reprint-modal"
            }, _.a.createElement(s.w, {
                className: "reprint-modal__icon",
                value: "active-order",
                size: "x-large",
                iconColor: "blue"
            }), _.a.createElement("h2", {
                className: "reprint-modal__header"
            }, t.size > 1 ? "Orders now Active" : "Order now Active"), _.a.createElement(s.t, {
                justify: "center",
                className: "reprint-modal__body",
                flush: !0
            }, _.a.createElement(s.l, {
                md: 8,
                lg: 10
            }, _.a.createElement("p", {
                className: "reprint-modal__description"
            }, "".concat(t.size > 1 ? t.size : "A", " previously printed scheduled\n            order").concat(t.size > 1 ? "s are" : " is", " now active. Remember to replace all existing copies."))), _.a.createElement(s.l, {
                lg: 8
            }, _.a.createElement(s.e, {
                onClick: function() {
                    r(!0)
                },
                type: "primary"
            }, "View order".concat(t.size > 1 ? "s" : ""))))))
        })
          , fd = "print-error-modal";
        function hd(e, t) {
            return _.a.createElement(s.t, {
                flush: !0,
                className: "".concat(fd, "__footer")
            }, _.a.createElement(s.l, {
                width: 6
            }, _.a.createElement(s.e, {
                type: "secondary",
                onClick: e
            }, "Clear queue")), _.a.createElement(s.l, {
                width: 6
            }, _.a.createElement(s.e, {
                type: "primary",
                onClick: t
            }, "Retry print")))
        }
        var vd = Object(oe.connect)(function(e) {
            var t = Ls(e);
            return {
                showModal: Fs(e) && !!t,
                error: t,
                printQueue: ks(e)
            }
        }, function(e) {
            return {
                hide: function() {
                    return e({
                        type: mr.hidePrintConsole
                    })
                },
                clearQueue: function() {
                    return e({
                        type: mr.clearQueue
                    })
                },
                resumePrinting: function() {
                    return e((De(t = {
                        type: mr.resumePrinting
                    }, n.j, !0),
                    De(t, n.o, !0),
                    t));
                    var t
                }
            }
        })(function(e) {
            var t, r, n, a, i = e.showModal, o = e.hide, c = e.error, l = e.printQueue, u = e.clearQueue, d = e.resumePrinting;
            return i ? _.a.createElement(s.G, {
                headerTitle: "Printer error",
                onClose: o,
                footerContent: hd(u, d)
            }, _.a.createElement("div", {
                className: "".concat(fd, "__content")
            }, (n = (r = c).headline,
            a = r.message,
            _.a.createElement("div", {
                className: "".concat(fd, "__error-section")
            }, _.a.createElement("div", {
                className: "".concat(fd, "__icon")
            }, _.a.createElement(s.w, {
                value: "warning-circle",
                size: "small",
                iconColor: "red"
            })), _.a.createElement("div", null, _.a.createElement("h4", {
                className: "".concat(fd, "__error-section__header")
            }, n), a))), (t = l,
            _.a.createElement("div", null, _.a.createElement("div", {
                className: "".concat(fd, "__queue-header")
            }, _.a.createElement("h4", null, "".concat(t.size, " orders did not print:"))), t.map(function(e) {
                return _.a.createElement("div", {
                    className: "".concat(fd, "__order"),
                    key: e.get("uuid")
                }, _.a.createElement("div", null, e.get("label")), _.a.createElement("div", {
                    className: "".concat(fd, "__order__id")
                }, e.get("orderNumber")))
            }))))) : null
        })
          , Ed = _.a.createElement("h2", null, "Not taking orders")
          , yd = function(e) {
            function t() {
                var e, r;
                Ne(this, t);
                for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
                    a[i] = arguments[i];
                return De(Ue(Ue(r = Fe(this, (e = je(t)).call.apply(e, [this].concat(a))))), "state", {
                    showConfirmation: !1,
                    testOrderInProgress: !1,
                    testOrderError: !1
                }),
                De(Ue(Ue(r)), "toggleShowConfirmation", function() {
                    var e = r.state.showConfirmation;
                    r.setState({
                        showConfirmation: !e
                    })
                }),
                De(Ue(Ue(r)), "onSendTestOrder", function() {
                    var e = r.props
                      , t = e.merchant
                      , n = e.onDismiss
                      , a = e.state
                      , i = e.dispatch
                      , s = e.redirectToOrders
                      , o = t.get("id");
                    return r.setState({
                        testOrderInProgress: !0
                    }),
                    ai(o, !1, function() {
                        return a
                    }, i).then(function() {
                        s(),
                        n()
                    }, function() {
                        r.setState({
                            testOrderInProgress: !1,
                            testOrderError: !0
                        })
                    })
                }),
                r
            }
            return Le(t, b["PureComponent"]),
            we(t, [{
                key: "renderDefaultContent",
                value: function() {
                    var e = this.props.merchant
                      , t = this.state
                      , r = t.testOrderError
                      , n = t.testOrderInProgress;
                    return _.a.createElement(b.Fragment, null, _.a.createElement("div", {
                        className: "fix-transmission-pause__icon"
                    }, _.a.createElement("img", {
                        className: "fix-transmission-pause__icon__svg",
                        src: Ie.a
                    })), Ed, _.a.createElement("p", null, "We have stopped ", _.a.createElement("strong", null, e.get("name")), " from taking orders because you're not receiving the orders we've sent you."), _.a.createElement("p", null, "To start taking orders again, you need to send and", " ", _.a.createElement("strong", null, "confirm a test order.")), r && _.a.createElement(s.ub, {
                        className: "fix-transmission-pause__error"
                    }, _.a.createElement("h4", null, "Looks like a test order failed"), _.a.createElement("p", null, "Make sure you're connected to the internet and try again.")), _.a.createElement(s.t, {
                        flush: !0,
                        nested: !0
                    }, _.a.createElement(s.l, {
                        width: 6
                    }, _.a.createElement(s.e, {
                        type: "secondary",
                        onClick: this.toggleShowConfirmation
                    }, "Not now")), _.a.createElement(s.l, {
                        width: 6
                    }, _.a.createElement(s.e, {
                        type: "primary",
                        className: "fix-transmission-pause__send-test",
                        onClick: this.onSendTestOrder,
                        isLoading: n
                    }, "Send test ", _.a.createElement("span", {
                        className: s.u
                    }, "order")))))
                }
            }, {
                key: "renderConfirmationContent",
                value: function() {
                    var e = this.props
                      , t = e.merchant
                      , r = e.restaurantCareNumber
                      , n = e.onDismiss;
                    return _.a.createElement(b.Fragment, null, Ed, _.a.createElement("p", null, _.a.createElement("strong", null, t.get("name")), " won't be able to take orders again until you resolve your problem by sending and", " ", _.a.createElement("strong", null, "confirming a test order.")), _.a.createElement("p", null, "If you have questions or concerns, please reach out to a Care representative at ", _.a.createElement("strong", null, r, ".")), _.a.createElement(s.e, {
                        type: "primary",
                        onClick: n
                    }, "OK"))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.merchant
                      , t = this.state.showConfirmation
                      , r = null;
                    return e && (r = _.a.createElement(s.H, {
                        contentClassName: "fix-transmission-pause",
                        canEscape: !1,
                        outsideClicksCloseModal: !1,
                        hideHeader: !0,
                        centered: !0
                    }, t ? this.renderConfirmationContent() : this.renderDefaultContent())),
                    r
                }
            }]),
            t
        }();
        yd.propTypes = {
            merchant: T.a.instanceOf(l.Map),
            restaurantCareNumber: T.a.string.isRequired,
            onDismiss: T.a.func.isRequired
        },
        yd.defaultProps = {
            merchant: Object(l.Map)()
        };
        var Ad = Object(oe.connect)(function(e) {
            return {
                restaurantCareNumber: Object(n.wb)(e),
                state: e
            }
        }, function(e) {
            return {
                redirectToOrders: function() {
                    return e(Object(ne.push)("/orders"))
                }
            }
        })(yd)
          , bd = function(e) {
            function t() {
                var e, r;
                Ne(this, t);
                for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
                    a[i] = arguments[i];
                return De(Ue(Ue(r = Fe(this, (e = je(t)).call.apply(e, [this].concat(a))))), "state", {
                    showFixTransmissionModals: !1,
                    timeout: void 0,
                    currentPausedRestaurantId: void 0
                }),
                De(Ue(Ue(r)), "getCurrentPausedRestaurant", function() {
                    var e = r.props.associatedRestaurants
                      , t = r.state.currentPausedRestaurantId;
                    return e.find(function(e) {
                        return e.get("id") === t
                    })
                }),
                De(Ue(Ue(r)), "setLatestPaused", function() {
                    var e = r.props.associatedRestaurants;
                    if (r.state.currentPausedRestaurantId) {
                        var t = r.getCurrentPausedRestaurant();
                        t ? St(t) && r.showUnpausedMessaging() : r.clearMessaging()
                    } else {
                        var n = e.find(function(e) {
                            return Nt(e)
                        });
                        n && r.setState({
                            currentPausedRestaurantId: n.get("id")
                        }, function() {
                            r.showPausedMessaging()
                        })
                    }
                }),
                De(Ue(Ue(r)), "hideModal", function() {
                    return r.setState({
                        showFixTransmissionModals: !1,
                        timeout: setTimeout(r.showModal, r.props.modalRedisplayTimeout)
                    })
                }),
                De(Ue(Ue(r)), "showModal", function() {
                    return r.setState({
                        showFixTransmissionModals: !0
                    })
                }),
                De(Ue(Ue(r)), "clearModalTimeout", function() {
                    clearTimeout(r.state.timeout),
                    r.hideModal(),
                    r.setState({
                        timeout: void 0
                    })
                }),
                De(Ue(Ue(r)), "clearMessaging", function() {
                    r.setState({
                        currentPausedRestaurantId: void 0
                    }, function() {
                        r.clearModalTimeout(),
                        r.hideBanner(),
                        r.setLatestPaused()
                    })
                }),
                r
            }
            return Le(t, b["Component"]),
            we(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setLatestPaused()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.associatedRestaurants
                      , r = e.associatedRestaurants;
                    t.equals(r) || this.setLatestPaused()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.clearModalTimeout(),
                    this.hideBanner()
                }
            }, {
                key: "showPausedBanner",
                value: function() {
                    s.c.displayBanner({
                        type: s.c.alertTypes.error,
                        name: "TRANSMISSION_FAILURE_BANNER",
                        message: "Not taking orders",
                        persistent: !0,
                        onClick: this.showModal,
                        fullyClickable: !0,
                        action: this.renderFixItNowButton()
                    })
                }
            }, {
                key: "showUnpausedBanner",
                value: function() {
                    s.c.displayBanner({
                        type: s.c.alertTypes.success,
                        name: "UNPAUSE_SUCCESS_BANNER",
                        message: "Fixed! You're able to take orders again.",
                        mobileMessage: "Fixed! You're able to take orders.",
                        onClick: this.clearMessaging
                    })
                }
            }, {
                key: "hideBanner",
                value: function() {
                    s.c.hideBanner(["TRANSMISSION_FAILURE_BANNER", "UNPAUSE_SUCCESS_BANNER"])
                }
            }, {
                key: "showPausedMessaging",
                value: function() {
                    this.showPausedBanner(),
                    this.showModal()
                }
            }, {
                key: "showUnpausedMessaging",
                value: function() {
                    this.hideModal(),
                    this.showUnpausedBanner()
                }
            }, {
                key: "renderFixItNowButton",
                value: function() {
                    return _.a.createElement(s.e, {
                        type: "link",
                        color: "salt",
                        onClick: this.showModal,
                        className: "package-state-handler__banner-button"
                    }, "Fix it now")
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.showFixTransmissionModals
                      , t = this.getCurrentPausedRestaurant()
                      , r = null;
                    return e && (r = _.a.createElement(Ad, {
                        merchant: t,
                        onDismiss: this.hideModal
                    })),
                    r
                }
            }]),
            t
        }();
        var _d = Object(oe.connect)(function(e) {
            return {
                associatedRestaurants: Object(n.fb)(e),
                modalRedisplayTimeout: Object(n.Cb)(e, "SELF_SERVICE_UNPAUSE_MODAL_REDISPLAY_TIMEOUT")
            }
        })(bd)
          , Od = function(e) {
            function t() {
                return Ne(this, t),
                Fe(this, je(t).apply(this, arguments))
            }
            return Le(t, _.a.Component),
            we(t, [{
                key: "componentDidMount",
                value: function() {
                    Or().ie && this.setActiveXObject()
                }
            }, {
                key: "setActiveXObject",
                value: function() {
                    var e = document.createElement("object");
                    e.id = "IEActiveX",
                    e.width = 0,
                    e.height = 0,
                    e.classid = "CLSID:8856F961-340A-11D0-A96B-00C04FD705A2",
                    document.body.appendChild(e)
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.canAccessOrders ? _.a.createElement(b.Fragment, null, _.a.createElement(Ju, null), _.a.createElement(pd, null), _.a.createElement(vd, null), _.a.createElement(gd, null), this.props.enableSelfServiceUnpause && _.a.createElement(_d, null)) : null
                }
            }]),
            t
        }();
        var Td = Object(oe.connect)(function(e) {
            return {
                canAccessOrders: bn(e),
                enableSelfServiceUnpause: Object(n.Cb)(e, "ENABLE_SELF_SERVICE_UNPAUSE")
            }
        })(Od)
          , Id = Object(l.fromJS)({});
        function Cd() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Id
              , t = arguments.length > 1 ? arguments[1] : void 0
              , r = t.type
              , n = t.driversToRate
              , a = (r === iu.refreshDriversToRateFinished ? n.groupBy(function(e) {
                return e.get("courierId")
            }) : e).map(function(e, t) {
                return Na("".concat(pu).concat(t))
            }).toJS();
            return Object(se.mergeChildReducers)(e, t, a)
        }
        var Rd = Object(l.fromJS)({
            driversToRate: [],
            isLoading: !1
        });
        function Nd(e) {
            return Object(re.f)(e.set("isLoading", !0), re.a.action((De(t = {
                type: iu.loadDriverData
            }, n.m, !0),
            De(t, n.h, !0),
            t)));
            var t
        }
        function Sd(e, t, r) {
            var n = t.get("associatedRestaurants").find(function(e) {
                return e.get("id") === r
            })
              , a = e.set("isLoading", !0);
            return Object(re.f)(a, re.a.run(Da, {
                successActionCreator: su,
                failActionCreator: ou,
                args: [Object(l.fromJS)([n]), re.a.getState, re.a.dispatch]
            }))
        }
        function wd() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rd
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case n.Ob.loaded:
                return Nd(e);
            case n.Ob.activeIdsChange:
                return function(e, t) {
                    return Sd(e, t.currentUser, t.ids.get(0))
                }(e, t);
            case iu.loadDriverData:
                return Sd(e, t.currentUser, t.activeRestaurantIds.get(0));
            case iu.refreshDriversToRateFinished:
                return function(e, t) {
                    var r = Object(l.fromJS)(t.driversToRate || []);
                    return e.merge({
                        isLoading: !1,
                        driversToRate: r
                    })
                }(e, t);
            case iu.refreshDriversToRateError:
                return Rd;
            case iu.filterDriversByText:
                return function(e, t) {
                    var r = t.searchText;
                    return e.merge({
                        searchText: r
                    })
                }(e, t);
            default:
                return e
            }
        }
        var Dd = {
            estimatesUpdated: function(e) {
                return {
                    header: "The default order estimate for ".concat(e, " has been updated"),
                    message: ""
                }
            },
            estimatesUpdateFailed: function() {
                return {
                    header: "The default order estimate could not be updated. Please try again.",
                    message: "",
                    isError: !0
                }
            }
        };
        function Md(e, t, r) {
            var a = e.get("merchantId")
              , i = {
                url: "merchant/".concat(a, "/"),
                options: {
                    method: "PATCH",
                    body: {
                        orderTypeSettingsMap: {
                            standard: {
                                deliveryEstimateMinutes: e.getIn(["orderTypeSettings", "standard", "deliveryEstimateMinutes"]),
                                pickupEstimateMinutes: e.getIn(["orderTypeSettings", "standard", "pickupEstimateMinutes"])
                            }
                        }
                    }
                }
            };
            return n.X.makeAuthenticatedRequest(i.url, i.options, t(), r).then(function(e) {
                return e.data
            })
        }
        var kd = Object(l.fromJS)({
            isLoading: !1
        });
        var Ld = {
            root: Qu,
            globalRoot: Td,
            reducer: function(e, t) {
                var r = ji(e, t);
                return Object(se.mergeChildReducers)(r, t, {
                    printing: Jn,
                    rateDriverDrawer: Ua,
                    driverRatingReminder: qa,
                    goLiveTestOrder: Di
                })
            },
            pageReducers: {
                orders: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Is
                      , t = arguments.length > 1 ? arguments[1] : void 0
                      , r = Ss(e, t);
                    return Object(se.mergeChildReducers)(r, t, {
                        cancellations: cs,
                        rateDriverModal: us,
                        adjustments: Ts
                    })
                },
                "orders/drivers": function(e, t) {
                    var r = wd(e, t);
                    return Object(se.mergeChildReducers)(r, t, {
                        formsByDriverId: Cd
                    })
                },
                "orders/settings": function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kd
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case n.Ob.loaded:
                        return function(e) {
                            return Object(re.f)(e, re.a.run(Kt, {
                                successActionCreator: Fu
                            }))
                        }(e);
                    case Pu.updateRestaurantEstimates:
                        return function(e, t) {
                            var r = t.settings;
                            return Object(re.f)(e.set("isLoading", !0), re.a.run(Md, {
                                successActionCreator: xu,
                                failActionCreator: Uu,
                                args: [r, re.a.getState, re.a.dispatch]
                            }))
                        }(e, t);
                    case Pu.estimatesUpdateSuccessful:
                        return function(e, t) {
                            var r = t.restaurant
                              , a = t.currentUser;
                            if (!e.get("isLoading"))
                                return e;
                            var i = r.accountInformation.legacyId
                              , o = a.get("associatedRestaurants").findIndex(function(e) {
                                return e.get("id") === i.toString()
                            })
                              , c = a.getIn(["associatedRestaurants", o, "orderTypeSettings"]).mergeDeepIn(["standard"], Object(l.fromJS)({
                                deliveryEstimateMinutes: r.orderTakingInformation.deliveryEstimateMinutes,
                                pickupEstimateMinutes: r.orderTakingInformation.pickupEstimateMinutes
                            }))
                              , u = a.mergeDeepIn(["associatedRestaurants", o], Object(l.fromJS)({
                                orderTypeSettings: c
                            }))
                              , d = e.set("isLoading", !1);
                            return Object(re.f)(d, re.a.list([re.a.action(Object(n.dc)({
                                newUser: u
                            })), re.a.run(s.a.sendAlert, {
                                args: [Dd.estimatesUpdated(r.name)]
                            })]))
                        }(e, t);
                    case Pu.estimatesUpdateFailure:
                        return function(e) {
                            return e.get("isLoading") ? Object(re.f)(e.set("isLoading", !1), re.a.run(s.a.sendAlert, {
                                args: [Dd.estimatesUpdateFailed()]
                            })) : e
                        }(e);
                    case Pu.getOrderDing:
                        return function(e, t) {
                            var r = t.ding;
                            return e.merge({
                                ding: r
                            })
                        }(e, t);
                    case Pu.updateOrderDing:
                        return function(e, t) {
                            var r = t.ding
                              , n = e.merge({
                                ding: r
                            });
                            return Object(re.f)(n, re.a.run(Wt, {
                                args: [r]
                            }))
                        }(e, t);
                    default:
                        return e
                    }
                }
            },
            toggleConstants: Object(n.O)({
                ORDER_POLLING_INTERVAL: 6e4,
                LARGE_ORDER: 25e3,
                ORDER_DING_INTERVAL: 2e4,
                ORDER_POLLING_MAX_RESTAURANTS: 50,
                CHECK_FOR_RATABLE_COURIERS_INTERVAL_MINUTES: 30,
                SUGGESTED_PREP_TIME_BUTTON_OFFSETS: {
                    left: -5,
                    middle: 0,
                    right: 5
                },
                PICKUP_FEASIBILITY_BUTTON_OFFSETS: {
                    left: 0,
                    middle: 5,
                    right: 10
                },
                SHOW_TEST_ORDER_GO_LIVE_MODAL: !1,
                ORDER_POLLING_INTERVAL_USING_FIRESTORE: 6e4,
                ENABLE_SELF_SERVICE_UNPAUSE: !1,
                SELF_SERVICE_UNPAUSE_MODAL_REDISPLAY_TIMEOUT: 36e5
            }, ["ORDER_POLLING_MAX_RESTAURANTS", "CHECK_FOR_RATABLE_COURIERS_INTERVAL_MINUTES"]),
            actionEnhancers: Ye
        };
        t.default = Ld
    }
}]);
//# sourceMappingURL=https://s3.amazonaws.com/gfr-sourcemaps/subapp-orders-d057a86f93a8872a384c.js.map
