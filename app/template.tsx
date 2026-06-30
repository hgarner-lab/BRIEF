import type { ReactNode } from "react";
import ClientEnhancements from "./client-enhancements";

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

  .new-game {
    display: none !important;
  }

  .how-to blockquote {
    display: grid !important;
    place-items: center;
    width: clamp(13rem, 30vw, 22rem) !important;
    max-width: 100%;
    min-width: clamp(13rem, 30vw, 22rem) !important;
    min-height: clamp(13rem, 30vw, 22rem) !important;
    aspect-ratio: 1 / 1;
    margin: 0;
    padding: 0;
    border: 0;
    background: none !important;
    color: transparent !important;
    justify-self: end;
  }

  .how-to blockquote::before {
    content: "";
    display: block;
    width: 100%;
    max-width: clamp(13rem, 30vw, 22rem);
    aspect-ratio: 1 / 1;
    background-image: url("/BRIEF/brand-assets/truth-well-told-stamp.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .how-to blockquote * {
    display: none !important;
  }

  .key.is-correct {
    border-color: var(--green) !important;
    background: var(--green) !important;
    color: var(--black) !important;
  }

  .key.is-present {
    border-color: var(--yellow) !important;
    background: var(--yellow) !important;
    color: var(--black) !important;
  }

  .key.is-absent {
    border-color: var(--grey-600) !important;
    background: var(--grey-700) !important;
    color: var(--grey-300) !important;
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

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{logoStyles}</style>
      <ClientEnhancements />
      {children}
    </>
  );
}
