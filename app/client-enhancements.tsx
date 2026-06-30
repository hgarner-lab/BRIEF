"use client";

import { useEffect } from "react";

const stateToEmoji = [
  ["is-correct", "\u{1F7E9}"],
  ["is-present", "\u{1F7E8}"],
  ["is-absent", "\u2B1B"],
] as const;

function submittedRows() {
  return Array.from(document.querySelectorAll(".board-row"))
    .map((row) => Array.from(row.querySelectorAll(".tile")))
    .filter((tiles) =>
      tiles.some((tile) =>
        stateToEmoji.some(([className]) => tile.classList.contains(className)),
      ),
    )
    .map((tiles) =>
      tiles
        .map((tile) => {
          const match = stateToEmoji.find(([className]) =>
            tile.classList.contains(className),
          );
          return match ? match[1] : "\u2B1B";
        })
        .join(""),
    );
}

function shareText() {
  const meta =
    document.querySelector(".game-meta span")?.textContent?.trim() || "BRIEF";
  const rows = submittedRows();
  const message = document.querySelector(".game-message")?.textContent || "";
  const score = message.toLowerCase().includes("answer was")
    ? "X/6"
    : `${rows.length}/6`;
  const url = window.location.origin + window.location.pathname;

  return [meta + " " + score, "", rows.join("\n"), "", url].join("\n");
}

async function copyText(text: string) {
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

function ensurePostGameShareButton() {
  const message = document.querySelector(".game-message.is-final");
  const existing = document.querySelector(".post-game-share");

  if (!message) {
    existing?.remove();
    return;
  }

  if (existing && existing.previousElementSibling === message) {
    return;
  }

  existing?.remove();

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

function updateAboutCopy() {
  const title = document.querySelector("#about-title");
  const modal = title?.closest(".modal");
  const paragraph = modal?.querySelector("p:not(.modal-kicker)");

  if (!title || !paragraph) {
    return;
  }

  title.textContent = "Truth, well guessed.";
  paragraph.textContent =
    "BRIEF is a daily 5-letter word game for brand, advertising, marketing, media, and strategy people. Daily Brief uses industry terms. Brand Mode uses iconic 5-letter brand names. Good luck! Share your results.";
}

function syncEnhancements() {
  ensurePostGameShareButton();
  updateAboutCopy();
}

export default function ClientEnhancements() {
  useEffect(() => {
    syncEnhancements();

    const observer = new MutationObserver(syncEnhancements);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
