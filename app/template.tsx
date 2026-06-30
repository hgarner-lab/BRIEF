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
    background-image: url("brand-assets/mccann-wordmark-white.svg");
  }

  .brand-lockup .truth {
    width: clamp(9.25rem, 17vw, 15rem);
    aspect-ratio: 11 / 1.25;
    background-image: url("logos/truth-well-told-white.svg");
    opacity: 0.94;
  }

  .footer span:first-child {
    width: clamp(6.5rem, 12vw, 10rem);
    aspect-ratio: 947 / 226;
    background-image: url("brand-assets/mccann-wordmark-white.svg");
  }

  .footer span:last-child {
    width: clamp(8.75rem, 16vw, 13rem);
    aspect-ratio: 11 / 1.25;
    background-image: url("logos/truth-well-told-white.svg");
  }

  .how-to blockquote {
    display: block !important;
    width: clamp(13rem, 30vw, 22rem) !important;
    max-width: 100%;
    min-height: 0 !important;
    aspect-ratio: 1 / 1;
    margin: 0;
    padding: 0;
    border: 0;
    background-image: url("brand-assets/truth-well-told-stamp.png") !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    color: transparent !important;
    justify-self: end;
  }

  .how-to blockquote * {
    display: none !important;
  }
`;

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: logoStyles }} />
      {children}
    </>
  );
}
