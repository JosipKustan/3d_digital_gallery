import { ContactWrapper, PurPurAnimated } from "../shared/StaticStyles";
import { ContactZuki } from "./SVG/ContactZuki";

export function ContactZukiPurr() {
  return (
    <ContactWrapper>
      <ContactZuki eyes={false} />
      <PurPurAnimated style={{ top: "25px" }} />
      <PurPurAnimated style={{ top: "30px", right: "70%" }} />
      <PurPurAnimated style={{ top: "75px", right: "10%" }} />
    </ContactWrapper>
  );
}
