! function(t) {
    var a = function() {
            t("img[data-recalc-dims]").each(function a() {
                var o = t(this);
                if (this.complete) {
                    if (o.data("lazy-src") && o.attr("src") !== o.data("lazy-src")) return void o.load(a);
                    var d = this.width,
                        i = this.height;
                    d && d > 0 && i && i > 0 && (o.attr({ width: d, height: i }), e(this))
                } else o.load(a)
            })
        },
        e = function(a) { t(a).removeAttr("data-recalc-dims").removeAttr("scale") };
    t(document).ready(a), "on" in t.fn ? t(document.body).on("post-load", a) : t(document).delegate("body", "post-load", a)
}(jQuery);