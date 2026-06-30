import type { ReactNode } from "react";

const logoStyles = `
  .brand-lockup {
    width: clamp(9.5rem, 18vw, 16rem);
    gap: 0.4rem;
  }

  .brand-lockup .mccann-wordmark,
  .footer .footer-wordmark {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }

  .brand-lockup::before,
  .brand-lockup .truth,
  .footer span:first-child,
  .footer span:last-child {
    display: block;
    color: transparent !important;
    font-size: 0 !important;
    line-height: 0 !important;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: visible;
    white-space: nowrap;
  }

  .brand-lockup::before {
    content: "";
    width: clamp(8rem, 15vw, 13.5rem);
    aspect-ratio: 947 / 226;
    background-image: url("/BRIEF/brand-assets/mccann-wordmark-white.svg");
  }

  .brand-lockup .truth {
    width: clamp(9.25rem, 17vw, 15rem);
    aspect-ratio: 11 / 1.25;
    background-image: url("/BRIEF/logos/truth-well-told-white.svg");
    opacity: 0.94;
  }

  .footer span:first-child {
    width: clamp(6.5rem, 12vw, 10rem);
    aspect-ratio: 947 / 226;
    background-image: url("/BRIEF/brand-assets/mccann-wordmark-white.svg");
  }

  .footer span:last-child {
    width: clamp(8.75rem, 16vw, 13rem);
    aspect-ratio: 11 / 1.25;
    background-image: url("/BRIEF/logos/truth-well-told-white.svg");
  }

  .how-to blockquote {
    display: block !important;
    width: clamp(13rem, 30vw, 22rem) !important;
    max-width: 100%;
    min-width: clamp(13rem, 30vw, 22rem) !important;
    min-height: clamp(13rem, 30vw, 22rem) !important;
    aspect-ratio: 1 / 1;
    margin: 0;
    padding: 0;
    border: 0;
    background-image: url("/BRIEF/brand-assets/truth-well-told-stamp.png") !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    color: transparent !important;
    justify-self: end;
  }

  .how-to blockquote * {
    display: none !important;
  }

  .post-game-share {
    display: grid;
    justify-items: center;
    gap: 0.65rem;
    margin: -0.4rem 0 1.2rem;
  }

  .share-score-button {
    border: 1px solid var(--white);
    background: var(--white);
    color: var(--black);
    cursor: pointer;
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    line-height: 1;
    padding: 0.85rem 1.1rem;
    text-transform: uppercase;
  }

  .share-score-button:hover,
  .share-score-button:focus-visible {
    background: transparent;
    color: var(--white);
    outline: 0;
  }

  .share-score-status {
    min-height: 1.2rem;
    margin: 0;
    color: var(--grey-300);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
`;

const shareScript = `
(() => {
  const stateToEmoji = [
    ["is-correct", "🟩"],
    ["is-present", "🟨"],
    ["is-absent", "⬛"],
  ];

  function submittedRows() {
    return Array.from(document.querySelectorAll(".board-row"))
      .map((row) => Array.from(row.querySelectorAll(".tile")))
      .filter((tiles) => tiles.some((tile) => stateToEmoji.some(([className]) => tile.classList.contains(className))))
      .map((tiles) => tiles.map((tile) => {
        const match = stateToEmoji.find(([className]) => tile.classList.contains(className));
        return match ? match[1] : "⬛";
      }).join(""));
  }

  function shareText() {
    const meta = document.querySelector(".game-meta span")?.textContent?.trim() || "BRIEF";
    const rows = submittedRows();
    const message = document.querySelector(".game-message")?.textContent || "";
    const score = message.toLowerCase().includes("answer was") ? "X/6" : rows.length + "/6";
    const url = window.location.origin + window.location.pathname;
    return [meta + " " + score, "", rows.join("\n"), "", url].join("\n");
  }

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  function ensureShareButton() {
    const message = document.querySelector(".game-message");
    const existing = document.querySelector(".post-game-share");

    if (!message || !message.classList.contains("is-final")) {
      existing?.remove();
      return;
    }

    if (existing) {
      return;
    }

    const wrap = document.createElement("div");
    wrap.className = "post-game-share";

    const button = document.createElement("button");
    button.className = "share-score-button";
    button.type = "button";
    button.textContent = "Share score";

    const status = document.createElement("p");
    status.className = "share-score-status";
    status.setAttribute("aria-live", "polite");

    button.addEventListener("click", async () => {
      const text = shareText();
      status.textContent = "";

      try {
        if (navigator.share) {
          await navigator.share({ title: "BRIEF", text });
          return;
        }

        await copyText(text);
        status.textContent = "Copied score.";
      } catch {
        try {
          await copyText(text);
          status.textContent = "Copied score.";
        } catch {
          status.textContent = text;
        }
      }
    });

    wrap.append(button, status);
    message.insertAdjacentElement("afterend", wrap);
  }

  ensureShareButton();
  new MutationObserver(ensureShareButton).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
})();
`;

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: logoStyles }} />
      <script dangerouslySetInnerHTML={{ __html: shareScript }} />
      {children}
    </>
  );
}
