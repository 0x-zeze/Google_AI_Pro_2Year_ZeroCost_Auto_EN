/* play_guard.js — Play Store Checkout Price Guard */
(() => {
  if (window.__GAPT_GUARD || window.top === window) return;
  window.__GAPT_GUARD = true;

  const FREE_WORDS = ["free trial", "start your free trial", "免费试用", "US$0.00", "$0.00", "0,00", "€0.00", "won't be charged", "不会向您收费", "不会收费", "upcoming charges", "due today: $0"];
  const PAID_WORDS = ["/mo after", "/month after", "per month after", "立即付款", "pay now", "今日扣款", "charged today", "due today: us$", "due today: $1", "due today: $2", "due today: $3"];

  let bar = null;
  function paint(kind, text) {
    if (!document.body) return;
    if (!bar) {
      bar = document.createElement("div");
      bar.style.cssText = "position:fixed;left:0;right:0;top:0;z-index:2147483647;padding:10px 14px;" +
        "font:13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;text-align:center;font-weight:600;";
      document.body.appendChild(bar);
    }
    bar.style.background = kind === "ok" ? "#1a7f37" : (kind === "bad" ? "#c62828" : "#616161");
    bar.style.color = "#fff";
    bar.textContent = text;
  }

  function judge() {
    let t = "";
    try {
      t = (document.body && document.body.innerText || "").toLowerCase();
    } catch (e) {
      return;
    }
    if (!t || t.length < 5) return;
    const free = FREE_WORDS.some((w) => t.includes(w.toLowerCase()));
    const paid = PAID_WORDS.some((w) => t.includes(w.toLowerCase()));

    if (free && !paid) {
      paint("ok", "✅ VERIFIED $0.00 FREE TRIAL — Safe to click Subscribe! (Verify Total is $0.00)");
    } else if (paid && !free) {
      paint("bad", "❌ NO FREE TRIAL DETECTED (Immediate charge) — DO NOT CLICK! Close modal and check layer.");
    } else if (free && paid) {
      paint("warn", "⚠️ FREE TRIAL WITH UPCOMING CHARGES — Verify Total Today is $0.00 before subscribing.");
    } else {
      paint("warn", "… Detecting price terms (Loading...)");
    }
  }

  setTimeout(judge, 1200);
  setTimeout(judge, 3000);
  setTimeout(judge, 6000);
  try {
    const mo = new MutationObserver(() => judge());
    document.addEventListener("DOMContentLoaded", () => mo.observe(document.body, { childList: true, subtree: true, characterData: true }));
  } catch (e) {}
})();
