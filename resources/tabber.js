function tabberObj(t) {
    var a;
    for (a in this.div = null, this.classMain = "tabber", this.classMainLive = "tabberlive", this.classTab = "tabbertab", this.classTabDefault = "tabbertabdefault", this.classpath = "tabberpath", this.classTabHide = "tabbertabhide", this.classpathActive = "tabberactive", this.titleElements = ["a"], this.titleElementsStripHTML = !0, this.removeTitle = !0, this.addLinkId = !1, this.linkIdFormat = "<tabberid>path<tabnumberone>", t) this[a] = t[a];
    this.REclassMain = RegExp("\\b" + this.classMain + "\\b", "gi"), this.REclassMainLive = RegExp("\\b" + this.classMainLive + "\\b", "gi"), this.REclassTab = RegExp("\\b" + this.classTab + "\\b", "gi"), this.REclassTabDefault = RegExp("\\b" + this.classTabDefault + "\\b", "gi"), this.REclassTabHide = RegExp("\\b" + this.classTabHide + "\\b", "gi"), this.tabs = [], this.div && (this.init(this.div), this.div = null)
}

function tabberAutomatic(t) {
    var a, e, i;
    for (t || (t = {}), a = new tabberObj(t), e = document.getElementsByTagName("div"), i = 0; i < e.length; i++) e[i].className && e[i].className.match(a.REclassMain) && (t.div = e[i], e[i].tabber = new tabberObj(t));
    return this
}

function tabberAutomaticOnLoad(t) {
    var a;
    t || (t = {}), a = window.onload, "function" != typeof window.onload ? window.onload = function () {
        tabberAutomatic(t)
    } : window.onload = function () {
        a(), tabberAutomatic(t)
    }
}
tabberObj.prototype.init = function (t) {
    var a, e, i, s, b, n, h, l, r, c = 0;
    if (!document.getElementsByTagName) return !1;
    for (t.id && (this.id = t.id), this.tabs.length = 0, a = t.childNodes, e = 0; e < a.length; e++) a[e].className && a[e].className.match(this.REclassTab) && ((s = {}).div = a[e], this.tabs[this.tabs.length] = s, a[e].className.match(this.REclassTabDefault) && (c = this.tabs.length - 1));
    for (e = 0, (b = document.createElement("ul")).className = this.classpath; e < this.tabs.length; e++) {
        if ((s = this.tabs[e]).headingText = s.div.title, this.removeTitle && (s.div.title = ""), !s.headingText) {
            for (i = 0; i < this.titleElements.length; i++)
                if (r = s.div.getElementsByTagName(this.titleElements[i])[0]) {
                    s.headingText = r.innerHTML, this.titleElementsStripHTML && (s.headingText.replace(/<br>/gi, " "), s.headingText = s.headingText.replace(/<[^>]+>/g, ""));
                    break
                }
        }
        s.headingText || (s.headingText = e + 1), n = document.createElement("li"), s.li = n, (h = document.createElement("a")).appendChild(document.createTextNode(s.headingText)), h.href = "javascript:void(null);", h.title = s.headingText, h.onclick = this.pathClick, h.tabber = this, h.tabberIndex = e, this.addLinkId && this.linkIdFormat && (l = (l = (l = (l = (l = this.linkIdFormat).replace(/<tabberid>/gi, this.id)).replace(/<tabnumberzero>/gi, e)).replace(/<tabnumberone>/gi, e + 1)).replace(/<tabtitle>/gi, s.headingText.replace(/[^a-zA-Z0-9\-]/gi, "")), h.id = l), n.appendChild(h), b.appendChild(n)
    }
    return t.insertBefore(b, t.firstChild), t.className = t.className.replace(this.REclassMain, this.classMainLive), this.tabShow(c), "function" == typeof this.onLoad && this.onLoad({
        tabber: this
    }), this
}, tabberObj.prototype.pathClick = function (t) {
    var a, e, i, s, b;
    return e = this, !!e.tabber && (i = e.tabber, s = e.tabberIndex, e.blur(), ("function" != typeof i.onClick || (b = {
        tabber: i,
        index: s,
        event: t
    }, t || (b.event = window.event), !1 !== (a = i.onClick(b)))) && (i.tabShow(s), !1))
}, tabberObj.prototype.tabHideAll = function () {
    var t;
    for (t = 0; t < this.tabs.length; t++) this.tabHide(t)
}, tabberObj.prototype.tabHide = function (t) {
    var a;
    return !!this.tabs[t] && ((a = this.tabs[t].div).className.match(this.REclassTabHide) || (a.className += " " + this.classTabHide), this.pathClearActive(t), this)
}, tabberObj.prototype.tabShow = function (t) {
    var a;
    return !!this.tabs[t] && (this.tabHideAll(), (a = this.tabs[t].div).className = a.className.replace(this.REclassTabHide, ""), this.pathSetActive(t), "function" == typeof this.onTabDisplay && this.onTabDisplay({
        tabber: this,
        index: t
    }), this)
}, tabberObj.prototype.pathSetActive = function (t) {
    return this.tabs[t].li.className = this.classpathActive, this
}, tabberObj.prototype.pathClearActive = function (t) {
    return this.tabs[t].li.className = "", this
}, "undefined" == typeof tabberOptions ? tabberAutomaticOnLoad() : tabberOptions.manualStartup || tabberAutomaticOnLoad(tabberOptions);