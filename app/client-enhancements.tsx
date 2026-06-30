"use client";

import { useEffect } from "react";

const MCCANN_WORDMARK_PATH = "brand-assets/mccann-wordmark-white.svg";

export default function ClientEnhancements() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLImageElement>(
        'img[src="/brand-assets/mccann-wordmark-white.svg"]',
      )
      .forEach((image) => {
        image.src = MCCANN_WORDMARK_PATH;
      });
  }, []);

  return null;
}
