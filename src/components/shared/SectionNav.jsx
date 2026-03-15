import { Fragment, useEffect, useRef } from "react";
import {
  NavPill,
  NavSep,
  StickyNav,
} from "../app/nav/NavMenuStyles";

export default function SectionNav({ items, activeSection, onSelect }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current || !activeSection) return;
    const pill = navRef.current.querySelector(
      `[data-section="${activeSection}"]`,
    );
    if (!pill) return;
    const nav = navRef.current;
    const pillCenter = pill.offsetLeft + pill.offsetWidth / 2;
    nav.scrollTo({ left: pillCenter - nav.offsetWidth / 2, behavior: "smooth" });
  }, [activeSection]);

  return (
    <StickyNav aria-label="Service categories" ref={navRef}>
      {items.map((item, i) => (
        <Fragment key={item.id}>
          {i > 0 && <NavSep />}
          <NavPill
            data-section={item.id}
            $active={activeSection === item.id}
            $accent={item.accent}
            onClick={() => onSelect(item.id)}
          >
            {item.label}
          </NavPill>
        </Fragment>
      ))}
    </StickyNav>
  );
}
