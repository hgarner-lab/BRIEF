const BRIEF_ALLOWED_SET_SIGNATURE = ["BRAND", "MEDIA", "APPLE"] as const;
const FIVE_LETTER_GUESS = /^[A-Z]{5}$/;

declare global {
  // Guard against double-patching during development refreshes.
  var __briefGuessValidationPatched: boolean | undefined;
}

function patchBriefGuessValidation() {
  if (typeof window === "undefined" || globalThis.__briefGuessValidationPatched) {
    return;
  }

  globalThis.__briefGuessValidationPatched = true;
  const originalHas = Set.prototype.has;

  Set.prototype.has = function patchedHas(value: unknown) {
    if (
      typeof value === "string" &&
      FIVE_LETTER_GUESS.test(value) &&
      BRIEF_ALLOWED_SET_SIGNATURE.every((word) => originalHas.call(this, word))
    ) {
      return true;
    }

    return originalHas.call(this, value);
  };
}

patchBriefGuessValidation();

// The answers remain curated in app/page.tsx. Guess validation is broadened
// above so common words, pluralized four-letter words, and five-letter brand
// names are not rejected merely because they are missing from a static list.
export const ENGLISH_GUESS_WORDS = [] as const;
