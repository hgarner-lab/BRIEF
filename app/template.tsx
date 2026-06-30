import type { ReactNode } from "react";

const logoStyles = `
  .brand-lockup {
    width: clamp(9.5rem, 18vw, 16rem);
    gap: 0.4rem;
  }

  .brand-lockup .mccann,
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
    overflow: hidden;
    white-space: nowrap;
  }

  .brand-lockup .mccann {
    width: clamp(8rem, 15vw, 13.5rem);
    aspect-ratio: 4 / 1;
    background-image: url("logos/mccann-white.svg");
  }

  .brand-lockup .truth {
    width: clamp(8.5rem, 16vw, 14rem);
    aspect-ratio: 9 / 1;
    background-image: url("logos/truth-well-told-white.svg");
    opacity: 0.94;
  }

  .footer span:first-child {
    width: clamp(6.5rem, 12vw, 10rem);
    aspect-ratio: 4 / 1;
    background-image: url("logos/mccann-white.svg");
  }

  .footer span:last-child {
    width: clamp(8rem, 15vw, 12rem);
    aspect-ratio: 9 / 1;
    background-image: url("logos/truth-well-told-white.svg");
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
