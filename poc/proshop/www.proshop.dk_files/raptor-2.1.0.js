(function (n) { function ri() { function n(r, u) { return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u } var i = []; return n } function h(n) { return n[f] = !0, n } function c(n) { var t = e.createElement("div"); try { return !!n(t) } catch (i) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t); t = null } } function ui(n, i) { for (var u = n.split("|"), r = n.length; r--;)t.attrHandle[u[r]] = i } function wi(n, t) { var i = t && n, r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || ai) - (~n.sourceIndex || ai); if (r) return r; if (i) while (i = i.nextSibling) if (i === t) return -1; return n ? 1 : -1 } function cr(n) { return function (t) { var i = t.nodeName.toLowerCase(); return i === "input" && t.type === n } } function lr(n) { return function (t) { var i = t.nodeName.toLowerCase(); return (i === "input" || i === "button") && t.type === n } } function tt(n) { return h(function (t) { return t = +t, h(function (i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;)i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) } function fi(n) { return n && typeof n.getElementsByTagName !== ut && n } function bi() { } function wt(n) { for (var t = 0, r = n.length, i = ""; t < r; t++)i += n[t].value; return i } function ei(n) { return n.length > 1 ? function (t, i, r) { for (var u = n.length; u--;)if (!n[u](t, i, r)) return !1; return !0 } : n[0] } function oi(n) { for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = bt(function (n) { return n === s }, c, !0), a = bt(function (n) { return nt.call(s, n) > -1 }, c, !0), e = [function (n, t, i) { return !h && (i || t !== at) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i)) }]; i < o; i++)if (u = t.relative[n[i].type]) e = [bt(ei(e), u)]; else { if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) { for (r = ++i; r < o; r++)if (t.relative[n[r].type]) break; return kt(i > 1 && ei(e), i > 1 && wt(n.slice(0, i - 1).concat({ value: n[i - 2].type === " " ? "*" : "" })).replace(yt, "$1"), u, i < r && oi(n.slice(i, r)), r < o && oi(n = n.slice(r)), r < o && wt(n)) } e.push(u) } return ei(e) } function ar(n, i) { var f = 0, u = i.length > 0, o = n.length > 0, s = function (s, h, c, l, a) { var p, g, k, d = 0, y = "0", nt = s && [], w = [], tt = at, it = s || o && t.find.TAG("*", a), rt = v += tt == null ? 1 : Math.random() || .1, ut = it.length; for (a && (at = h !== e && h, ct = f); y !== ut && (p = it[y]) != null; y++) { if (o && p) { for (g = 0; k = n[g++];)if (k(p, h, c)) { l.push(p); break } a && (v = rt, ct = ++f) } u && ((p = !k && p) && d-- , s && nt.push(p)) } if (d += y, u && y !== d) { for (g = 0; k = i[g++];)k(nt, w, h, c); if (s) { if (d > 0) while (y--) nt[y] || w[y] || (w[y] = gi.call(l)); w = ht(w) } b.apply(l, w); a && !s && w.length > 0 && d + i.length > 1 && r.uniqueSort(l) } return a && (v = rt, at = tt), nt }; return u ? h(s) : s } function vr(n, t, i) { for (var u = 0, f = t.length; u < f; u++)r(n, t[u], i); return i } function yr(n, i, r, f) { var s, e, o, c, a, h = st(n); if (!f && h.length === 1) { if (e = h[0] = h[0].slice(0), e.length > 2 && (o = e[0]).type === "ID" && u.getById && i.nodeType === 9 && l && t.relative[e[1].type]) { if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], !i) return r; n = n.slice(e.shift().value.length) } for (s = pt.needsContext.test(n) ? 0 : e.length; s--;) { if (o = e[s], t.relative[c = o.type]) break; if ((a = t.find[c]) && (f = a(o.matches[0].replace(k, d), ii.test(e[0].type) && fi(i.parentNode) || i))) { if (e.splice(s, 1), n = f.length && wt(e), !n) return b.apply(r, f), r; break } } } return dt(n, h)(f, i, !l, r, ii.test(n) && fi(i.parentNode) || i), r } var it, u, ct, t, lt, si, dt, at, y, rt, p, e, a, l, o, g, vt, et, f = "sizzle" + -new Date, s = n.document, v = 0, ki = 0, hi = ri(), ci = ri(), li = ri(), gt = function (n, t) { return n === t && (rt = !0), 0 }, ut = typeof undefined, ai = -2147483648, di = {}.hasOwnProperty, w = [], gi = w.pop, nr = w.push, b = w.push, vi = w.slice, nt = w.indexOf || function (n) { for (var t = 0, i = this.length; t < i; t++)if (this[t] === n) return t; return -1 }, ni = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", i = "[\\x20\\t\\r\\n\\f]", ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", yi = ft.replace("w", "w#"), pi = "\\[" + i + "*(" + ft + ")" + i + "*(?:([*^$|!~]?=)" + i + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + yi + ")|)|)" + i + "*\\]", ti = ":(" + ft + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pi.replace(3, 8) + ")*)|.*)\\)|)", yt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"), tr = new RegExp("^" + i + "*," + i + "*"), ir = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"), rr = new RegExp("=" + i + "*([^\\]'\"]*)" + i + "*\\]", "g"), ur = new RegExp(ti), fr = new RegExp("^" + yi + "$"), pt = { ID: new RegExp("^#(" + ft + ")"), CLASS: new RegExp("^\\.(" + ft + ")"), TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"), ATTR: new RegExp("^" + pi), PSEUDO: new RegExp("^" + ti), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"), bool: new RegExp("^(?:" + ni + ")$", "i"), needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i") }, er = /^(?:input|select|textarea|button)$/i, or = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ii = /[+~]/, hr = /'|\\/g, k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"), d = function (n, t, i) { var r = "0x" + t - 65536; return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320) }, r, st, bt, ht, kt; try { b.apply(w = vi.call(s.childNodes), s.childNodes); w[s.childNodes.length].nodeType } catch (pr) { b = { apply: w.length ? function (n, t) { nr.apply(n, vi.call(t)) } : function (n, t) { for (var i = n.length, r = 0; n[i++] = t[r++];); n.length = i - 1 } } } r = function (n, t, i, r) { var w, h, c, v, k, y, d, a, nt, g; if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || typeof n != "string") return i; if ((v = t.nodeType) !== 1 && v !== 9) return []; if (l && !r) { if (w = sr.exec(n)) if (c = w[1]) { if (v === 9) if (h = t.getElementById(c), h && h.parentNode) { if (h.id === c) return i.push(h), i } else return i; else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && et(t, h) && h.id === c) return i.push(h), i } else { if (w[2]) return b.apply(i, t.getElementsByTagName(n)), i; if ((c = w[3]) && u.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(c)), i } if (u.qsa && (!o || !o.test(n))) { if (a = d = f, nt = t, g = v === 9 && n, v === 1 && t.nodeName.toLowerCase() !== "object") { for (y = st(n), (d = t.getAttribute("id")) ? a = d.replace(hr, "\\$&") : t.setAttribute("id", a), a = "[id='" + a + "'] ", k = y.length; k--;)y[k] = a + wt(y[k]); nt = ii.test(n) && fi(t.parentNode) || t; g = y.join(",") } if (g) try { return b.apply(i, nt.querySelectorAll(g)), i } catch (tt) { } finally { d || t.removeAttribute("id") } } } return yr(n.replace(yt, "$1"), t, i, r) }; u = r.support = {}; si = r.isXML = function (n) { var t = n && (n.ownerDocument || n).documentElement; return t ? t.nodeName !== "HTML" : !1 }; p = r.setDocument = function (n) { var v, r = n ? n.ownerDocument || n : s, h = r.defaultView; return r === e || r.nodeType !== 9 || !r.documentElement ? e : (e = r, a = r.documentElement, l = !si(r), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function () { p() }, !1) : h.attachEvent && h.attachEvent("onunload", function () { p() })), u.attributes = c(function (n) { return n.className = "i", !n.getAttribute("className") }), u.getElementsByTagName = c(function (n) { return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length }), u.getElementsByClassName = ot.test(r.getElementsByClassName) && c(function (n) { return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", n.getElementsByClassName("i").length === 2 }), u.getById = c(function (n) { return a.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length }), u.getById ? (t.find.ID = function (n, t) { if (typeof t.getElementById !== ut && l) { var i = t.getElementById(n); return i && i.parentNode ? [i] : [] } }, t.filter.ID = function (n) { var t = n.replace(k, d); return function (n) { return n.getAttribute("id") === t } }) : (delete t.find.ID, t.filter.ID = function (n) { var t = n.replace(k, d); return function (n) { var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id"); return i && i.value === t } }), t.find.TAG = u.getElementsByTagName ? function (n, t) { if (typeof t.getElementsByTagName !== ut) return t.getElementsByTagName(n) } : function (n, t) { var i, r = [], f = 0, u = t.getElementsByTagName(n); if (n === "*") { while (i = u[f++]) i.nodeType === 1 && r.push(i); return r } return u }, t.find.CLASS = u.getElementsByClassName && function (n, t) { if (typeof t.getElementsByClassName !== ut && l) return t.getElementsByClassName(n) }, g = [], o = [], (u.qsa = ot.test(r.querySelectorAll)) && (c(function (n) { n.innerHTML = "<select><option selected=''><\/option><\/select>"; n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + ni + ")"); n.querySelectorAll(":checked").length || o.push(":checked") }), c(function (n) { var t = r.createElement("input"); t.setAttribute("type", "hidden"); n.appendChild(t).setAttribute("t", ""); n.querySelectorAll("[t^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")"); n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"); n.querySelectorAll("*,:x"); o.push(",.*:") })), (u.matchesSelector = ot.test(vt = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && c(function (n) { u.disconnectedMatch = vt.call(n, "div"); vt.call(n, "[s!='']:x"); g.push("!=", ti) }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), v = ot.test(a.compareDocumentPosition), et = v || ot.test(a.contains) ? function (n, t) { var r = n.nodeType === 9 ? n.documentElement : n, i = t && t.parentNode; return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16)) } : function (n, t) { if (t) while (t = t.parentNode) if (t === n) return !0; return !1 }, gt = v ? function (n, t) { if (n === t) return rt = !0, 0; var i = !n.compareDocumentPosition - !t.compareDocumentPosition; return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, i & 1 || !u.sortDetached && t.compareDocumentPosition(n) === i) ? n === r || n.ownerDocument === s && et(s, n) ? -1 : t === r || t.ownerDocument === s && et(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : i & 4 ? -1 : 1 } : function (n, t) { if (n === t) return rt = !0, 0; var i, u = 0, o = n.parentNode, h = t.parentNode, f = [n], e = [t]; if (o && h) { if (o === h) return wi(n, t) } else return n === r ? -1 : t === r ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0; for (i = n; i = i.parentNode;)f.unshift(i); for (i = t; i = i.parentNode;)e.unshift(i); while (f[u] === e[u]) u++; return u ? wi(f[u], e[u]) : f[u] === s ? -1 : e[u] === s ? 1 : 0 }, r) }; r.matches = function (n, t) { return r(n, null, null, t) }; r.matchesSelector = function (n, t) { if ((n.ownerDocument || n) !== e && p(n), t = t.replace(rr, "='$1']"), u.matchesSelector && l && (!g || !g.test(t)) && (!o || !o.test(t))) try { var i = vt.call(n, t); if (i || u.disconnectedMatch || n.document && n.document.nodeType !== 11) return i } catch (f) { } return r(t, e, null, [n]).length > 0 }; r.contains = function (n, t) { return (n.ownerDocument || n) !== e && p(n), et(n, t) }; r.attr = function (n, i) { (n.ownerDocument || n) !== e && p(n); var f = t.attrHandle[i.toLowerCase()], r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : undefined; return r !== undefined ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null }; r.error = function (n) { throw new Error("Syntax error, unrecognized expression: " + n); }; r.uniqueSort = function (n) { var r, f = [], t = 0, i = 0; if (rt = !u.detectDuplicates, y = !u.sortStable && n.slice(0), n.sort(gt), rt) { while (r = n[i++]) r === n[i] && (t = f.push(i)); while (t--) n.splice(f[t], 1) } return y = null, n }; lt = r.getText = function (n) { var r, i = "", u = 0, t = n.nodeType; if (t) { if (t === 1 || t === 9 || t === 11) { if (typeof n.textContent == "string") return n.textContent; for (n = n.firstChild; n; n = n.nextSibling)i += lt(n) } else if (t === 3 || t === 4) return n.nodeValue } else while (r = n[u++]) i += lt(r); return i }; t = r.selectors = { cacheLength: 50, createPseudo: h, match: pt, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (n) { return n[1] = n[1].replace(k, d), n[3] = (n[4] || n[5] || "").replace(k, d), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function (n) { return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && r.error(n[0]), n }, PSEUDO: function (n) { var i, t = !n[5] && n[2]; return pt.CHILD.test(n[0]) ? null : (n[3] && n[4] !== undefined ? n[2] = n[4] : t && ur.test(t) && (i = st(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3)) } }, filter: { TAG: function (n) { var t = n.replace(k, d).toLowerCase(); return n === "*" ? function () { return !0 } : function (n) { return n.nodeName && n.nodeName.toLowerCase() === t } }, CLASS: function (n) { var t = hi[n + " "]; return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && hi(n, function (n) { return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "") }) }, ATTR: function (n, t, i) { return function (u) { var f = r.attr(u, n); return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0 } }, CHILD: function (n, t, i, r, u) { var s = n.slice(0, 3) !== "nth", o = n.slice(-4) !== "last", e = t === "of-type"; return r === 1 && u === 0 ? function (n) { return !!n.parentNode } : function (t, i, h) { var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling", p = t.parentNode, g = e && t.nodeName.toLowerCase(), d = !h && !e; if (p) { if (s) { while (b) { for (c = t; c = c[b];)if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1; w = b = n === "only" && !w && "nextSibling" } return !0 } if (w = [o ? p.firstChild : p.lastChild], o && d) { for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)if (c.nodeType === 1 && ++l && c === t) { k[n] = [v, y, l]; break } } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1]; else while (c = ++y && c && c[b] || (l = y = 0) || w.pop()) if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t)) break; return l -= u, l === r || l % r == 0 && l / r >= 0 } } }, PSEUDO: function (n, i) { var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n); return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function (n, t) { for (var r, f = u(n, i), e = f.length; e--;)r = nt.call(n, f[e]), n[r] = !(t[r] = f[e]) }) : function (n) { return u(n, 0, e) }) : u } }, pseudos: { not: h(function (n) { var i = [], r = [], t = dt(n.replace(yt, "$1")); return t[f] ? h(function (n, i, r, u) { for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e)) }) : function (n, u, f) { return i[0] = n, t(i, null, f, r), !r.pop() } }), has: h(function (n) { return function (t) { return r(n, t).length > 0 } }), contains: h(function (n) { return function (t) { return (t.textContent || t.innerText || lt(t)).indexOf(n) > -1 } }), lang: h(function (n) { return fr.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(), function (t) { var i; do if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1); return !1 } }), target: function (t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id }, root: function (n) { return n === a }, focus: function (n) { return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) }, enabled: function (n) { return n.disabled === !1 }, disabled: function (n) { return n.disabled === !0 }, checked: function (n) { var t = n.nodeName.toLowerCase(); return t === "input" && !!n.checked || t === "option" && !!n.selected }, selected: function (n) { return n.parentNode && n.parentNode.selectedIndex, n.selected === !0 }, empty: function (n) { for (n = n.firstChild; n; n = n.nextSibling)if (n.nodeType < 6) return !1; return !0 }, parent: function (n) { return !t.pseudos.empty(n) }, header: function (n) { return or.test(n.nodeName) }, input: function (n) { return er.test(n.nodeName) }, button: function (n) { var t = n.nodeName.toLowerCase(); return t === "input" && n.type === "button" || t === "button" }, text: function (n) { var t; return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text") }, first: tt(function () { return [0] }), last: tt(function (n, t) { return [t - 1] }), eq: tt(function (n, t, i) { return [i < 0 ? i + t : i] }), even: tt(function (n, t) { for (var i = 0; i < t; i += 2)n.push(i); return n }), odd: tt(function (n, t) { for (var i = 1; i < t; i += 2)n.push(i); return n }), lt: tt(function (n, t, i) { for (var r = i < 0 ? i + t : i; --r >= 0;)n.push(r); return n }), gt: tt(function (n, t, i) { for (var r = i < 0 ? i + t : i; ++r < t;)n.push(r); return n }) } }; t.pseudos.nth = t.pseudos.eq; for (it in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[it] = cr(it); for (it in { submit: !0, reset: !0 }) t.pseudos[it] = lr(it); bi.prototype = t.filters = t.pseudos; t.setFilters = new bi; st = function (n, i) { var e, f, s, o, u, h, c, l = ci[n + " "]; if (l) return i ? 0 : l.slice(0); for (u = n, h = [], c = t.preFilter; u;) { (!e || (f = tr.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = [])); e = !1; (f = ir.exec(u)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(yt, " ") }), u = u.slice(e.length)); for (o in t.filter) (f = pt[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), u = u.slice(e.length)); if (!e) break } return i ? u.length : u ? r.error(n) : ci(n, h).slice(0) }; bt = function (n, t, i) { var r = t.dir, u = i && r === "parentNode", e = ki++; return t.first ? function (t, i, f) { while (t = t[r]) if (t.nodeType === 1 || u) return n(t, i, f) } : function (t, i, o) { var h, s, c, l = v + " " + e; if (o) { while (t = t[r]) if ((t.nodeType === 1 || u) && n(t, i, o)) return !0 } else while (t = t[r]) if (t.nodeType === 1 || u) if (c = t[f] || (t[f] = {}), (s = c[r]) && s[0] === l) { if ((h = s[1]) === !0 || h === ct) return h === !0 } else if (s = c[r] = [l], s[1] = n(t, i, o) || ct, s[1] === !0) return !0 } }; ht = function (n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f)); return o }; kt = function (n, t, i, r, u, e) { return r && !r[f] && (r = kt(r)), u && !u[f] && (u = kt(u, e)), h(function (f, e, o, s) { var l, c, a, p = [], y = [], w = e.length, k = f || vr(t || "*", o.nodeType ? [o] : o, []), v = n && (f || !t) ? ht(k, p, n, o, s) : k, h = i ? u || (f ? n : w || r) ? [] : e : v; if (i && i(v, h, o, s), r) for (l = ht(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a)); if (f) { if (u || n) { if (u) { for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a); u(null, h = [], l, s) } for (c = h.length; c--;)(a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a)) } } else h = ht(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h) }) }; dt = r.compile = function (n, t) { var r, u = [], e = [], i = li[n + " "]; if (!i) { for (t || (t = st(n)), r = t.length; r--;)i = oi(t[r]), i[f] ? u.push(i) : e.push(i); i = li(n, ar(e, u)) } return i }; u.sortStable = f.split("").sort(gt).join("") === f; u.detectDuplicates = !!rt; p(); u.sortDetached = c(function (n) { return n.compareDocumentPosition(e.createElement("div")) & 1 }); c(function (n) { return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#" }) || ui("type|href|height|width", function (n, t, i) { if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2) }); u.attributes && c(function (n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === "" }) || ui("value", function (n, t, i) { if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue }); c(function (n) { return n.getAttribute("disabled") == null }) || ui(ni, function (n, t, i) { var r; if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null }); n.Sizzle = r })(window); var Raptor = function () { function n(n) { this.jsonpCallbacks = { cntr: 0 }; this.handClickEvents = function (n, t, i, r) { for (var e, u = this, f = 0; f < n.length; f++)e = n[f], this.raptorLog("Adding clickhandler for element", e), e.addEventListener("click", function (n) { var o, s, f, e; return n.preventDefault(), o = this, s = i ? "" : o.getAttribute("href"), u.raptorLog("Parsing arguments from attribute"), f = u.parseFromAttribute(o, "data-raptorrecommendation"), u.raptorLog("Parsed arguments from attribute", f), e = [], e[u.raptorConfiguration.productIdParamIndex - 1] = f.productId, e[u.raptorConfiguration.eventTypeParamIndex - 1] = f.eventType || "itemClick", u.raptorLog("Tracking event", e), u.trackClickEvent(t, e, s), r && r(f.productId), !1 }) }; this.raptorLog("Creating new Raptor object"); this.localWindow = n || window } return n.prototype.parse = function (n) { var u = {}, r, t, i; if (n) for (r = n.split(/\s*,\s*/), t = 0; t < r.length; t++)i = r[t].split(/\s*:\s*/), i.length === 2 && (u[i[0]] = i[1]); return u }, n.prototype.parseFromAttribute = function (n, t) { return this.parse(n.getAttribute(t)) }, n.prototype.addClickHandlers = function (n, t, i, r) { var o = this, u, f, e; for (r || (r = !1), this.raptorLog("addClickHandlers with scope" + n), u = n ? Sizzle(n) : [null], this.raptorLog("Found " + u.length, u), f = 0; f < u.length; f++)e = u[f], this.raptorLog("Adding clickhandler for scope", e), this.raptorLog("Adding click handlers for a tags"), this.handClickEvents(Sizzle("a[data-raptorrecommendation]", e), t, r, i), this.raptorLog("Adding click handlers for input tags"), this.handClickEvents(Sizzle("input[data-raptorrecommendation]", e), t, r, i); return this }, n.prototype.addUser = function (n) { if (this.raptorLog("add user called", n), n) try { this.exRuid === "" && this.raptorConfiguration.useCookies && (this.exRuid = this.readCookie(this.raptorConfiguration.customerID + "rsaRuid")); var i = new raptorBase64, t = i.encode(n); this.exRuid !== t && (this.exRuid = t, this.raptorConfiguration.useCookies && this.createCookie(this.raptorConfiguration.customerID + "rsaRuid", this.exRuid, 3650)) } catch (r) { this.raptorLog("error adding user", r); this.exRuid = "" } }, n.prototype.raptorLog = function (n) { for (var i = [], t = 1; t < arguments.length; t++)i[t - 1] = arguments[t]; if (this.raptorConfiguration && this.raptorConfiguration.useDebugLogging) try { window.console && (window.console.debug ? window.console.debug("raptor " + n, i) : window.console.log("raptor " + n, i)) } catch (r) { console.log("raptor error logging", r) } }, n.prototype.generateGuidMethod = function () { for (var i, t = "", n = 0; n < 32; n++)(n == 8 || n == 12 || n == 16 || n == 20) && (t = t + "-"), i = Math.floor(Math.random() * 16).toString(16).toUpperCase(), t = t + i; return t }, n.prototype.createCookie = function (n, t, i, r) { var f, o, h, c, s; r === void 0 && (r = !1); f = new Date; f.setTime(f.getTime() + 864e5 * i); var l = "expires=" + f.toUTCString(), t = r ? encodeURIComponent(t) : t, e = document.location.hostname.split("."), u = "", a = this.readCookie(n); for (a && this.deleteCookie(n), o = 0; o < e.length; ++o)if (u = e.slice(e.length - o - 1, e.length).join("."), h = u !== "localhost" ? "domain=." + u : "domain=" + u, c = n + "=" + t + ";" + l + ";" + h + ";path=/", document.cookie = c, s = this.readCookie(n, r), s && s === t) break; return u || document.location.hostname }, n.prototype.readCookie = function (n, t) { var f, e, r, i, u; for (t === void 0 && (t = !1), f = n + "=", e = document.cookie.split(";"), r = 0; r < e.length; r++) { for (i = e[r]; i.charAt(0) == " ";)i = i.substring(1, i.length); if (i.indexOf(f) == 0) return (u = i.substring(f.length, i.length), t && u) ? decodeURIComponent(u) : u } return null }, n.prototype.deleteCookie = function (n) { document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;;path=/" }, n.prototype.create = function (n) { return document.createElementNS ? document.createElementNS("http://www.w3.org/1999/xhtml", n) : document.createElement(n) }, n.prototype.getOrCreateCookie = function (n, t, i) { var r, u, f; try { return r = i, this.raptorConfiguration.useCookies && (this.raptorLog("Cookie reading.", n), u = this.readCookie(n), this.raptorLog("Cookie read.", n, u), u ? (r = u, f = this.createCookie(n, r, t)) : (r = this.generateGuidMethod(), this.raptorLog("Cookie created.", r), this.createCookie(n, r, t))), this.raptorLog("returning cookieValue:", r), r } catch (e) { return this.raptorLog("error creating cookie", n, e), i } }, n.prototype.getQorC = function (n, t, i, r) { try { var u = t[n] ? t[n] : "", f = this.readCookie(i, !0); return u == "" ? f && (u = f, this.createCookie(i, u, r, !0)) : f != u && this.raptorConfiguration.useCookies && this.createCookie(i, u, r, !0), u } catch (e) { return "" } }, n.prototype.initialize = function (n) { var t, r, i, u; if (!n) { console.error("No configuration!!"); return } typeof n.useCookies == "undefined" && (n.useCookies = !0); this.raptorConfiguration = n; this.raptorLog("Raptor initialize called", n); this.raptorConfiguration.productIdParamIndex || (this.raptorConfiguration.productIdParamIndex = 2); this.raptorConfiguration.eventTypeParamIndex || (this.raptorConfiguration.eventTypeParamIndex = 1); this.raptorConfiguration.useCookies == null && (this.raptorConfiguration.useCookies = !0); this.cookieID = this.getOrCreateCookie(this.raptorConfiguration.customerID + "rsa", 365, ""); this.sessionID = this.getOrCreateCookie(this.raptorConfiguration.customerID + "rsaSession", .015, null); t = this.qasObj(); this.exUid = this.getQorC("xuid", t, this.raptorConfiguration.customerID + "rsaXuid", 365); this.reaId = this.getQorC("reaid", t, this.raptorConfiguration.customerID + "rsaReaId", 365); this.rchId = this.getQorC("rchid", t, this.raptorConfiguration.customerID + "rsaRchId", 365); this.rchSource = t.rchsource; this.rchModule = t.rchmodule; this.rchItemId = t.rchitemid; try { this.raptorLog("trying to set ruid"); r = "ruid"; this.raptorConfiguration.userQueryParamName && (r = this.raptorConfiguration.userQueryParamName.toLocaleLowerCase()); this.exRuid = t[r] ? t[r] : ""; this.raptorLog("Ruid fetched from querystring:", this.exRuid); i = this.readCookie(this.raptorConfiguration.customerID + "rsaRuid"); this.raptorLog("Ruid fetched from cookie:", i); this.exRuid == "" ? i && (this.deleteCookie(this.raptorConfiguration.customerID + "rsaRuid"), this.createCookie(this.raptorConfiguration.customerID + "rsaRuid", i, 365), this.exRuid = i) : (u = new raptorBase64, this.exRuid = u.encode(this.exRuid), i != this.exRuid && this.raptorConfiguration.useCookies && (this.deleteCookie(this.raptorConfiguration.customerID + "rsaRuid"), this.createCookie(this.raptorConfiguration.customerID + "rsaRuid", this.exRuid, 365), this.raptorLog("cookie is created:", this.exRuid))) } catch (f) { this.raptorLog("Error when setting ruid", f); this.exRuid = "" } this.trackChannelSourceEvent() }, n.prototype.doJSONP = function (n, t) { var i = document.createElement("script"); i.src = n + "&callback=" + t; document.getElementsByTagName("head")[0].appendChild(i) }, n.prototype.callService = function (n, t, i, r) { var f = this, u = "fn" + this.jsonpCallbacks.cntr++; this.jsonpCallbacks[u] = function () { var e, n; for (delete f.jsonpCallbacks[u], e = [t, i], n = 0; n < arguments.length; n++)e[n + 2] = arguments[n]; r.apply(f, e) }; this.doJSONP(n, "window.raptor.jsonpCallbacks." + u) }, n.prototype.getQueryParameterByName = function (n) { var i = this.qasObj(), t = i[n.toLocaleLowerCase()]; return t ? t : "" }, n.prototype.qasObj = function () { var t = this.localWindow.location.search, f, i, r, n, u; if (t = t.substring(1), !this.localWindow.location.search) { if (!this.localWindow.location.hash) return {}; if (f = this.localWindow.location.hash.split("?"), f.length > 1) t = f[1]; else return {} } for (i = t.split("&"), r = {}, n = 0; n < i.length; n++)i[n] != "" && (u = i[n].split("="), r[u[0].toLocaleLowerCase()] || (r[u[0].toLocaleLowerCase()] = this.tryDecodeUri(u[1] || ""))); return r }, n.prototype.tryDecodeUri = function (n) { if (n) try { return decodeURIComponent(n) } catch (t) { this.raptorLog("Could not decode url", n, t) } return "" }, n.prototype.encode = function (n) { return n ? encodeURIComponent(n) : "" }, n.prototype.serializeArguments = function (n) { for (var i = "?", t = 0; t < n.length; t++)i = i + (t > 0 ? "&" : "") + ("p" + (t + 1) + "=" + this.encode(n[t] || "")); return i }, n.prototype.trackEvent = function () { for (var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n]; this.trackClickEvent({ methodName: "", customerId: "" }, t, "") }, n.prototype.trackCustomerEvent = function (n) { for (var i = [], t = 1; t < arguments.length; t++)i[t - 1] = arguments[t]; this.trackClickEvent({ methodName: "", customerId: n }, i, "") }, n.prototype.trackClickEvent = function (n, t, i) { var u; if (!this.raptorConfiguration) { this.raptorLog("No configuration found when tracking Clickevent"); return } if (this.raptorLog("Executing trackClickEvent"), u = this.create("img"), u.style.display = "none", this.raptorConfiguration.customerID) { var e = n.customerId || this.raptorConfiguration.customerID, o = this.serializeArguments(t), f = this.qasObj(), s = String(Math.random()).substr(2, 5), h = this.cookieID ? this.cookieID : "", c = this.sessionID ? this.sessionID : "none", l = "https:" == document.location.protocol ? "https://" : "http://", r = l + "t.raptorsmartadvisor.com/" + e + ".rsa" + o + "&sid=" + c + "&coid=" + h + "&am=" + n.methodName + "&v=2.1.17&xuid=" + encodeURIComponent(this.exUid) + "&ruid=" + encodeURIComponent(this.exRuid) + "&reaid=" + encodeURIComponent(this.reaId) + "&ts=" + s; this.rchId && (r = r + "&rchid=" + encodeURIComponent(this.rchId)); r = this.appQv(f, "utm_source", r); r = this.appQv(f, "utm_campaign", r); r = this.appQv(f, "utm_term", r); r = this.appQv(f, "utm_medium", r); r = this.appQv(f, "utm_content", r); u.src = r; u.height = 1; u.width = 1; u.className = "raptor_tracking_image"; i && (u.onload = u.onerror = function () { window.location.href = i }); document.getElementsByTagName("body")[0].appendChild(u) } }, n.prototype.trackChannelSourceEvent = function () { var t, i, n; if (this.rchSource && !this.rchId) { for (this.raptorLog("Found rchSource"), t = [], i = Math.max(this.raptorConfiguration.eventTypeParamIndex, this.raptorConfiguration.productIdParamIndex), n = 0; n < i; n++)t[n] = this.raptorConfiguration.eventTypeParamIndex === n + 1 ? (this.rchSource + "click").toLowerCase() : this.raptorConfiguration.productIdParamIndex === n + 1 ? this.rchItemId : ""; this.trackClickEvent({ methodName: this.rchModule, customerId: "" }, t, null) } }, n.prototype.appQv = function (n, t, i) { var r = n[t] || null; return r && (i += "&" + t + "=" + r), i }, n }(), raptorBase64 = function () { function n() { this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } return n.prototype.encode = function (n) { var f = "", e, t, i, s, h, o, r, u = 0; for (n = this.utf8Encode(n); u < n.length;)e = n.charCodeAt(u++), t = n.charCodeAt(u++), i = n.charCodeAt(u++), s = e >> 2, h = (e & 3) << 4 | t >> 4, o = (t & 15) << 2 | i >> 6, r = i & 63, isNaN(t) ? o = r = 64 : isNaN(i) && (r = 64), f = f + this._keyStr.charAt(s) + this._keyStr.charAt(h) + this._keyStr.charAt(o) + this._keyStr.charAt(r); return f }, n.prototype.utf8Encode = function (n) { var i, r, t; for (n = n.replace(/\r\n/g, "\n"), i = "", r = 0; r < n.length; r++)t = n.charCodeAt(r), t < 128 ? i += String.fromCharCode(t) : t > 127 && t < 2048 ? (i += String.fromCharCode(t >> 6 | 192), i += String.fromCharCode(t & 63 | 128)) : (i += String.fromCharCode(t >> 12 | 224), i += String.fromCharCode(t >> 6 & 63 | 128), i += String.fromCharCode(t & 63 | 128)); return i }, n }(); window.raptor = new Raptor(window); typeof raptorLoaded != "undefined" && raptorLoaded(window.raptor);