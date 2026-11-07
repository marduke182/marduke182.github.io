var e = /\s/;
function t(t) {
	let n = "", r = [], i = [], a = [], o = !0;
	return t.forEach((t, s) => {
		let c = [];
		for (let a = 0; a < t.length; a++) {
			c.push(n.length);
			let l = t[a], u = e.test(l);
			u && o || (n += u ? " " : l, r.push(s), i.push(a), o = u);
		}
		c.push(n.length), a.push(c);
	}), {
		text: n,
		chunkOf: r,
		offsetOf: i,
		positions: a
	};
}
function n(e, t, n) {
	let r = e.positions[t];
	return r ? r[Math.max(0, Math.min(n, r.length - 1))] : e.text.length;
}
function r(e, t, n) {
	return t < 0 || n > e.text.length || n <= t ? null : {
		startChunk: e.chunkOf[t],
		startOffset: e.offsetOf[t],
		endChunk: e.chunkOf[n - 1],
		endOffset: e.offsetOf[n - 1] + 1
	};
}
function i(e, t, n, r = 40) {
	let i = Math.max(0, t), a = Math.min(e.length, n);
	for (; i < a && e[i] === " ";) i++;
	for (; a > i && e[a - 1] === " ";) a--;
	return i >= a ? null : {
		quote: e.slice(i, a),
		before: e.slice(Math.max(0, i - r), i),
		after: e.slice(a, a + r),
		start: i,
		end: a
	};
}
var a = (e, t) => {
	let n = 0;
	for (; n < e.length && n < t.length && e[e.length - 1 - n] === t[t.length - 1 - n];) n++;
	return n;
}, o = (e, t) => {
	let n = 0;
	for (; n < e.length && n < t.length && e[n] === t[n];) n++;
	return n;
};
function s(e, t) {
	let n = c(t.quote);
	if (!n) return null;
	let r = null, i = -1;
	for (let s = e.indexOf(n); s !== -1; s = e.indexOf(n, s + 1)) {
		let c = s + n.length, l = a(e.slice(Math.max(0, s - t.before.length), s), t.before) + o(e.slice(c, c + t.after.length), t.after);
		l > i && (r = {
			start: s,
			end: c
		}, i = l);
	}
	return r;
}
function c(e) {
	return e.replace(/\s+/g, " ").trim();
}
var l = /^[A-Za-z_][\w-]*$/;
function u(e, t = 5) {
	let n = [], r = e;
	for (; r && n.length < t;) {
		if (r.id && l.test(r.id)) {
			n.unshift(`#${r.id}`);
			break;
		}
		let e = r.localName;
		if (e === "body" || e === "main" || e === "html") {
			n.unshift(e);
			break;
		}
		let t = r.parentElement, i = e;
		if (t) {
			let n = Array.from(t.children).filter((t) => t.localName === e);
			n.length > 1 && (i += `:nth-of-type(${n.indexOf(r) + 1})`);
		}
		n.unshift(i), r = t;
	}
	return n.join(" > ");
}
function d(e, t) {
	return e.length <= t ? e : `${e.slice(0, Math.max(0, t - 1)).trimEnd()}…`;
}
//#endregion
//#region ../../libs/dev-feedback/bootstrap.ts
var f = "review-mode", p = "__reviewMode";
[
	":host{all:initial;position:fixed;right:var(--space-4,1rem);bottom:var(--space-4,1rem);z-index:2147482999}",
	"button{font:700 var(--text-sm,.875rem)/1 var(--font-body,system-ui,sans-serif);color:var(--ink,#1b2a2f);cursor:pointer;",
	"background:var(--card,#fff);border:var(--line-thin,2px solid #1b2a2f);border-radius:var(--radius-pill,999px);",
	"padding:var(--space-1,.25rem) var(--space-3,.75rem);min-height:2.25rem;box-shadow:var(--shadow-sm,0 2px 0 #1b2a2f)}",
	"button:hover{background:var(--teal-100,#d5f0ee)}",
	"button:focus-visible{outline:3px solid var(--focus,#0b6e69);outline-offset:2px}"
].join("");
//#endregion
//#region ../../libs/dev-feedback/clipboard.ts
async function m(e, t) {
	if (t.clipboard) try {
		return await t.clipboard.writeText(e), !0;
	} catch {}
	let { document: n } = t;
	if (!n.body) return !1;
	let r = n.createElement("textarea");
	r.value = e, r.setAttribute("readonly", ""), r.style.cssText = "position:fixed;top:0;left:-9999px;opacity:0", n.body.append(r);
	try {
		return r.select(), n.execCommand("copy");
	} catch {
		return !1;
	} finally {
		r.remove();
	}
}
//#endregion
//#region ../../libs/dev-feedback/prompt.ts
var h = "Apply these review comments to the source of this page. Each comment quotes the text it is about: find that text in the source file (Markdown/MDX post or lesson, or the component that renders it) and make the change the comment asks for.", g = (e) => e.replace(/\s+/g, " "), _ = (e) => g(e).trim(), v = (e) => `> ${_(e)}`, y = (e) => e.trim().split(/\r?\n/).map((e) => e.trim() ? `> ${e.trimEnd()}` : ">").join("\n");
function ee(e) {
	let t = e.comments.length, n = [
		h,
		"",
		`- Page: ${e.url}`,
		`- Title: ${_(e.title) || "(untitled)"}`,
		`- Language: ${e.lang || "(unknown)"}`,
		`- Comments: ${t}`
	];
	return e.comments.forEach((e, t) => {
		let r = e.heading?.text ? _(e.heading.text) : "(top of page)", i = e.heading?.id ? ` (#${e.heading.id})` : "";
		n.push("", `## ${t + 1}. § ${r}${i}`, "", "Quote:", "", v(e.quote), "", `In context: …${g(e.before)}[[${_(e.quote)}]]${g(e.after)}…`), e.path && n.push(`Element: \`${e.path}\``), n.push("", "Comment:", "", y(e.comment));
	}), `${n.join("\n")}\n`;
}
//#endregion
//#region ../../libs/dev-feedback/client.ts
var te = "review-mode-root", b = "review-mode:", x = "review-mode", S = "review-mode-active", C = /* @__PURE__ */ new Set([
	"SCRIPT",
	"STYLE",
	"NOSCRIPT",
	"TEMPLATE",
	"TEXTAREA"
]), ne = "\n:host { all: initial; position: fixed; top: 0; left: 0; width: 0; height: 0; z-index: 2147483000; }\n* { box-sizing: border-box; font-family: var(--font-body, system-ui, sans-serif); }\n[hidden] { display: none !important; }\nbutton {\n  font: inherit; font-size: var(--text-sm); font-weight: 700; color: var(--ink); cursor: pointer;\n  background: var(--card); border: var(--line-thin); border-radius: var(--radius-pill);\n  padding: var(--space-1) var(--space-3); min-height: 2.25rem;\n}\nbutton:hover:not(:disabled) { background: var(--teal-100); }\nbutton:disabled { opacity: 0.55; cursor: not-allowed; }\nbutton:focus-visible, textarea:focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }\nbutton.primary { background: var(--teal-600); color: var(--on-teal); border-color: var(--teal-600); }\nbutton.primary:hover:not(:disabled) { background: var(--teal-800); }\nbutton.close { min-width: 2.25rem; padding: 0; font-size: var(--text-lg, 1.25rem); line-height: 1; }\nbutton[aria-pressed='true'] { background: var(--tang-soft); }\n.dock {\n  position: fixed; right: var(--space-4); bottom: var(--space-4);\n  display: flex; flex-direction: column; align-items: flex-end; gap: var(--space-2);\n  max-width: calc(100vw - 2 * var(--space-4)); color: var(--ink);\n}\n.bar {\n  display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: var(--space-2);\n  background: var(--paper); border: var(--line-thin); border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-sm); padding: var(--space-2);\n}\n.count {\n  display: inline-block; min-width: 1.5em; margin-left: var(--space-1); padding: 0 var(--space-1);\n  border-radius: var(--radius-pill); background: var(--ink); color: var(--paper); text-align: center;\n}\n.status { flex-basis: 100%; margin: 0; font-size: var(--text-xs); color: var(--muted); text-align: right; }\n.status:empty { display: none; }\n.panel {\n  width: min(24rem, calc(100vw - 2 * var(--space-4))); max-height: 60vh; overflow: auto;\n  background: var(--card); border: var(--line-thin); border-radius: var(--radius-sm);\n  box-shadow: var(--shadow-sm); padding: var(--space-3);\n}\n.panel h2 { margin: 0 0 var(--space-2); font-size: var(--text-base); }\n.panel ol { margin: 0; padding: 0; list-style: none; display: grid; gap: var(--space-3); }\n.panel li { border-top: 2px dashed var(--teal-200); padding-top: var(--space-2); }\n.panel li:first-child { border-top: 0; padding-top: 0; }\n.where { margin: 0; font-size: var(--text-xs); color: var(--muted); overflow-wrap: anywhere; }\n.quote {\n  display: block; width: 100%; text-align: left; border-radius: var(--radius-sm); font-weight: 400;\n  font-style: italic; margin: var(--space-1) 0; overflow-wrap: anywhere; background: var(--tang-soft);\n}\n.text { margin: 0 0 var(--space-2); font-size: var(--text-sm); white-space: pre-wrap; overflow-wrap: anywhere; }\n.row { display: flex; flex-wrap: wrap; gap: var(--space-2); }\n.empty { margin: 0; font-size: var(--text-sm); color: var(--muted); }\n.popover {\n  position: fixed; width: min(20rem, calc(100vw - 2 * var(--space-4)));\n  background: var(--card); border: var(--line-thin); border-radius: var(--radius-sm);\n  box-shadow: var(--shadow); padding: var(--space-3); color: var(--ink);\n}\n.popover .quote { cursor: default; }\ntextarea {\n  display: block; width: 100%; min-height: 5rem; margin: var(--space-2) 0; padding: var(--space-2);\n  font: inherit; font-size: var(--text-sm); color: var(--ink); background: var(--paper);\n  border: var(--line-thin); border-radius: var(--radius-sm); resize: vertical;\n}\nlabel { font-size: var(--text-sm); font-weight: 700; }\n", re = `
::highlight(${x}) { background-color: var(--tang-soft); text-decoration: underline 2px var(--tang-ink); }
::highlight(${S}) { background-color: var(--tang); color: var(--on-fill); }
`;
function w(e, t = {}, ...n) {
	let r = document.createElement(e);
	for (let [e, n] of Object.entries(t)) n !== void 0 && n !== !1 && (e.startsWith("aria-") || e.startsWith("data-") || e === "role" ? r.setAttribute(e, String(n)) : e.startsWith("on") && typeof n == "function" ? r.addEventListener(e.slice(2), n) : r[e] = n);
	for (let e of n) e && r.append(e);
	return r;
}
function T(e) {
	let n = [], r = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode(t) {
		let n = t.parentElement;
		return !n || C.has(n.tagName) || e.contains(n) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
	} });
	for (let e = r.nextNode(); e; e = r.nextNode()) n.push(e);
	return {
		nodes: n,
		at: new Map(n.map((e, t) => [e, t])),
		index: t(n.map((e) => e.data))
	};
}
function E(e, t, r) {
	let i = e.at.get(t);
	if (i !== void 0) return n(e.index, i, r);
	let a = document.createRange();
	a.setStart(t, r);
	for (let t = 0; t < e.nodes.length; t++) if (a.comparePoint(e.nodes[t], 0) >= 0) return n(e.index, t, 0);
	return e.index.text.length;
}
function ie(e, t, n) {
	let i = r(e.index, t, n);
	if (!i) return null;
	let a = document.createRange();
	return a.setStart(e.nodes[i.startChunk], i.startOffset), a.setEnd(e.nodes[i.endChunk], i.endOffset), a;
}
function ae(e) {
	let t = Array.from(document.body.querySelectorAll("h1, h2, h3, h4, h5, h6"));
	for (let n = t.length - 1; n >= 0; n--) {
		let r = t[n];
		if (r === e || r.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) return {
			text: c(r.textContent ?? ""),
			id: r.id
		};
	}
	return null;
}
var D = (e) => e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement, O = () => `${b}${location.pathname}`;
function oe() {
	try {
		let e = localStorage.getItem(O()), t = e ? JSON.parse(e) : [];
		return Array.isArray(t) ? t : [];
	} catch {
		return [];
	}
}
function k(e) {
	try {
		e.length ? localStorage.setItem(O(), JSON.stringify(e)) : localStorage.removeItem(O());
	} catch {}
}
var A = () => `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`, se = () => matchMedia("(prefers-reduced-motion: reduce)").matches, j = (e, t) => e.altKey && e.shiftKey && !e.ctrlKey && !e.metaKey && e.code === t, M = null;
function N() {
	if (!M) {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", () => N(), { once: !0 });
			return;
		}
		M = F();
	}
}
function P() {
	M?.destroy(), M = null;
}
function F() {
	let e = new AbortController(), { signal: t } = e, n = document.createElement(te), r = n.attachShadow({ mode: "open" }), a = w("style", { textContent: re });
	document.head.append(a);
	let o = oe(), c = !0, l = !1, p = null, h = null, g = null, _ = 0, v = w("p", {
		className: "status",
		role: "status",
		"aria-live": "polite"
	}), y = w("span", { className: "count" }), b = w("button", {
		type: "button",
		title: "Toggle review mode (Alt+Shift+R)"
	}, "Review", y), C = w("button", {
		type: "button",
		className: "close",
		title: "Close review (Esc)",
		"aria-label": "Close review"
	}, "×"), O = w("button", {
		type: "button",
		"aria-controls": "review-panel"
	}, "Comments"), M = w("button", { type: "button" }, "Copy for agent"), N = w("div", { className: "row" }, O, M, null), F = w("div", {
		className: "bar",
		role: "region",
		"aria-label": "Review comments"
	}, b, N, C, v), I = w("ol"), L = w("button", { type: "button" }, "Delete all"), R = w("section", {
		className: "panel",
		id: "review-panel",
		"aria-label": "Pending comments",
		hidden: !0
	}, w("h2", {}, "Pending comments"), I, w("div", {
		className: "row",
		style: "margin-top: var(--space-3)"
	}, L)), z = w("p", { className: "quote" }), B = w("textarea", {
		id: "review-comment",
		placeholder: "What should change? (Ctrl/Cmd+Enter saves)"
	}), V = w("button", {
		type: "button",
		className: "primary"
	}, "Save"), H = w("button", { type: "button" }, "Cancel"), U = w("div", {
		className: "popover",
		role: "dialog",
		"aria-label": "Comment on the selected text",
		hidden: !0
	}, w("label", { htmlFor: "review-comment" }, "Comment on"), z, B, w("div", { className: "row" }, V, H));
	r.append(w("style", { textContent: ne }), w("div", { className: "dock" }, R, F), U), document.body.append(n);
	let W = (e) => {
		v.textContent = e;
	}, G = () => {
		k(o), q();
	}, K = (e) => {
		g = T(n);
		let t = "highlights" in CSS ? CSS.highlights : null, r = [], i = null;
		for (let t of o) {
			let n = s(g.index.text, t), a = n && ie(g, n.start, n.end);
			a && (r.push(a), t.id === e && (i = a));
		}
		return t && (t.set(x, new Highlight(...r)), i ? t.set(S, new Highlight(i)) : t.delete(S)), i;
	}, q = () => {
		let e = o.length;
		y.textContent = String(e), b.setAttribute("aria-pressed", String(c)), b.setAttribute("aria-label", `Review mode ${c ? "on" : "off"}, ${e} pending ${e === 1 ? "comment" : "comments"}`), N.hidden = !c, R.hidden = !c || !l, O.setAttribute("aria-expanded", String(l && c)), O.textContent = `Comments (${e})`, M.disabled = e === 0, L.disabled = e === 0, I.replaceChildren(...e === 0 ? [w("li", {}, w("p", { className: "empty" }, "No comments yet. Select text on the page to add one."))] : [], ...o.map((e, t) => {
			let n = w("p", { className: "where" }, `#${t + 1} § ${e.heading?.text || "(top of page)"}`), r = w("button", {
				type: "button",
				className: "quote",
				title: "Scroll to this quote",
				onclick: () => J(e.id)
			}, `“${d(e.quote, 140)}”`);
			if (p === e.id) {
				let i = w("textarea", {
					value: e.comment,
					"aria-label": `Edit comment ${t + 1}`
				}), a = () => {
					let t = i.value.trim();
					if (!t) return i.focus();
					e.comment = t, p = null, G();
				};
				return i.addEventListener("keydown", (e) => {
					e.key === "Enter" && (e.metaKey || e.ctrlKey) && a(), e.key === "Escape" && (e.stopPropagation(), p = null, q());
				}), queueMicrotask(() => i.focus()), w("li", {}, n, r, i, w("div", { className: "row" }, w("button", {
					type: "button",
					className: "primary",
					onclick: a
				}, "Save"), w("button", {
					type: "button",
					onclick: () => (p = null, q())
				}, "Cancel")));
			}
			return w("li", {}, n, r, w("p", { className: "text" }, e.comment), w("div", { className: "row" }, w("button", {
				type: "button",
				"aria-label": `Edit comment ${t + 1}`,
				onclick: () => (p = e.id, q())
			}, "Edit"), w("button", {
				type: "button",
				"aria-label": `Delete comment ${t + 1}`,
				onclick: () => {
					o = o.filter((t) => t.id !== e.id), G(), K(), O.focus();
				}
			}, "Delete")));
		}));
	}, J = (e) => {
		let t = K(e);
		if (!t) return W("That quote is no longer on the page.");
		D(t.startContainer)?.scrollIntoView({
			block: "center",
			behavior: se() ? "auto" : "smooth"
		}), clearTimeout(_), _ = window.setTimeout(() => K(), 2500);
	}, Y = () => {
		U.hidden = !0, h = null;
	}, X = () => {
		let e = document.getSelection();
		if (!c || !e || e.isCollapsed || e.rangeCount === 0) return;
		let t = e.getRangeAt(0);
		if (n.contains(t.commonAncestorContainer)) return;
		g = T(n);
		let r = E(g, t.startContainer, t.startOffset), a = E(g, t.endContainer, t.endOffset), o = i(g.index.text, r, a);
		if (!o) return;
		h = o, z.textContent = `“${d(o.quote, 160)}”`, B.value = "", U.hidden = !1;
		let s = t.getBoundingClientRect(), { width: l, height: u } = U.getBoundingClientRect(), f = Math.min(Math.max(8, s.left), innerWidth - l - 8), p = s.bottom + 8, m = p + u <= innerHeight - 8 ? p : Math.max(8, s.top - u - 8);
		U.style.left = `${Math.max(8, f)}px`, U.style.top = `${m}px`, B.focus();
	}, Z = () => {
		let e = B.value.trim();
		if (!h || !g) return Y();
		if (!e) return B.focus();
		let t = g.nodes[g.index.chunkOf[h.start]], n = g.nodes[g.index.chunkOf[h.end - 1]], r = null;
		if (t && n) {
			let e = document.createRange();
			e.setStart(t, 0), e.setEnd(n, n.length), r = D(e.commonAncestorContainer);
		}
		o.push({
			id: A(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			quote: h.quote,
			before: h.before,
			after: h.after,
			heading: t ? ae(t) : null,
			path: r ? u(r) : "",
			comment: e
		}), Y(), document.getSelection()?.removeAllRanges(), G(), K(), W(`Comment saved (${o.length} pending).`), b.focus();
	}, ce = () => ({
		url: `${location.origin}${location.pathname}`,
		title: document.title,
		lang: document.documentElement.lang,
		submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
		comments: o.map(({ quote: e, before: t, after: n, heading: r, path: i, comment: a }) => ({
			quote: e,
			before: t,
			after: n,
			heading: r,
			path: i,
			comment: a
		}))
	}), Q = (e) => {
		c = e, e || Y(), q();
	}, $ = () => {
		let e = window.reviewMode;
		if (e) return e(!1);
		try {
			localStorage.removeItem(f);
		} catch {}
		P();
	};
	return b.addEventListener("click", () => Q(!c)), C.addEventListener("click", $), O.addEventListener("click", () => {
		l = !l, q();
	}), M.addEventListener("click", async () => {
		let e = ee(ce());
		console.log(e);
		let t = await m(e, {
			clipboard: navigator.clipboard,
			document
		});
		W(t ? "Copied — paste it into your agent." : "Could not copy: the prompt is in the console.");
	}), L.addEventListener("click", () => {
		confirm(`Delete all ${o.length} pending comments on this page?`) && (o = [], G(), K());
	}), V.addEventListener("click", Z), H.addEventListener("click", Y), B.addEventListener("keydown", (e) => {
		e.key === "Enter" && (e.metaKey || e.ctrlKey) && Z();
	}), document.addEventListener("pointerup", (e) => {
		e.composedPath().includes(n) || setTimeout(X, 0);
	}, { signal: t }), document.addEventListener("keydown", (e) => {
		j(e, "KeyR") ? (e.preventDefault(), Q(!c), b.focus()) : j(e, "KeyC") ? (e.preventDefault(), X()) : e.key === "Escape" && (U.hidden ? l ? (l = !1, q(), O.focus()) : $() : Y());
	}, { signal: t }), q(), K(), { destroy() {
		e.abort(), clearTimeout(_), n.remove(), a.remove(), "highlights" in CSS && (CSS.highlights.delete(x), CSS.highlights.delete(S));
	} };
}
window[p] = {
	mount: N,
	unmount: P
};
try {
	localStorage.getItem("review-mode") && N();
} catch {}
//#endregion
export { N as mount, P as unmount };
