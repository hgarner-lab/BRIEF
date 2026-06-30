"use client";

import { useEffect } from "react";

const MCCANN_WORDMARK_PATH = "brand-assets/mccann-wordmark-white.svg";
const ACTIVE_GAME_PREFIX = "brief:active-game:";
const NUMBERED_PROGRESS_PATTERN = /^brief:progress:(daily|brand):\d{4}-\d{2}-\d{2}:\d+$/;

function clearLegacyPuzzleOffsets() {
  try {
    Object.keys(window.localStorage).forEach((key) => {
      if (
        key.startsWith(ACTIVE_GAME_PREFIX) ||
        (NUMBERED_PROGRESS_PATTERN.test(key) && !key.endsWith(":0"))
      ) {
        window.localStorage.removeItem(key);
      }
    });
  } catch {
    // Ignore storage failures.
  }
}

function fixPagesLogoFallback() {
  document
    .querySelectorAll<HTMLImageElement>(
      'img[src="/brand-assets/mccann-wordmark-white.svg"]',
    )
    .forEach((image) => {
      image.src = MCCANN_WORDMARK_PATH;
    });
}

export default function ClientEnhancements() {
  useEffect(() => {
    clearLegacyPuzzleOffsets();
    fixPagesLogoFallback();
  }, []);

  return null;
}
