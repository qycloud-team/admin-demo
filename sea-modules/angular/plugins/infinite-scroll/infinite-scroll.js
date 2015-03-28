define("angular/plugins/infinite-scroll/infinite-scroll", [], function (require, exports, module) {
    /* ng-infinite-scroll - v1.1.2 - 2014-05-21 */
    var mod;
    mod = angular.module("infinite-scroll", []), mod.value("THROTTLE_MILLISECONDS", null), mod.directive("infiniteScroll", ["$rootScope", "$window", "$timeout", "THROTTLE_MILLISECONDS", function (n, i, t, l) {
        return{scope: {infiniteScroll: "&", infiniteScrollContainer: "=", infiniteScrollDistance: "=", infiniteScrollDisabled: "=", infiniteScrollUseDocumentBottom: "="}, link: function (e, o, r) {
            var c, u, f, a, s, S, m, h, d, v, p, g, D;
            return i = angular.element(i), v = null, p = null, u = null, f = null, d = !0, D = !1, h = function () {
                var t, l, r, c, a;
                return f === i ? (t = f.height() + f.scrollTop(), r = o.offset().top + o.height()) : (t = f.height(), l = 0, void 0 !== f.offset() && (l = f.offset().top), r = o.offset().top - l + o.height()), D && (r = $(document).height()), c = r - t, a = f.height() * v + 1 >= c, a ? (u = !0, p ? e.$$phase || n.$$phase ? e.infiniteScroll() : e.$apply(e.infiniteScroll) : void 0) : u = !1
            }, g = function (n, i) {
                var l, e, o;
                return o = null, e = 0, l = function () {
                    var i;
                    return e = (new Date).getTime(), t.cancel(o), o = null, n.call(), i = null
                }, function () {
                    var r, c;
                    return r = (new Date).getTime(), c = i - (r - e), 0 >= c ? (clearTimeout(o), t.cancel(o), o = null, e = r, n.call()) : o ? void 0 : o = t(l, c)
                }
            }, null != l && (h = g(h, l)), e.$on("$destroy", function () {
                return f.off("scroll", h)
            }), S = function (n) {
                return v = parseInt(n, 10) || 0
            }, e.$watch("infiniteScrollDistance", S), S(e.infiniteScrollDistance), s = function (n) {
                return p = !n, p && u ? (u = !1, h()) : void 0
            }, e.$watch("infiniteScrollDisabled", s), s(e.infiniteScrollDisabled), m = function (n) {
                return D = n
            }, e.$watch("infiniteScrollUseDocumentBottom", m), m(e.infiniteScrollUseDocumentBottom), c = function (n) {
                return null != f && f.off("scroll", h), f = "function" == typeof n.last && n !== i ? n.last() : n, null != n ? f.on("scroll", h) : void 0
            }, c(i), a = function (n) {
                if (null != n && 0 !== n.length) {
                    if (n = angular.element(n), null != n)return c(n);
                    throw new Exception("invalid infinite-scroll-container attribute.")
                }
            }, e.$watch("infiniteScrollContainer", a), a(e.infiniteScrollContainer || []), null != r.infiniteScrollParent && c(angular.element(o.parent())), null != r.infiniteScrollImmediateCheck && (d = e.$eval(r.infiniteScrollImmediateCheck)), t(function () {
                return d ? h() : void 0
            }, 0)
        }}
    }]);
});