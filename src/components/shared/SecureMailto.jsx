import { HoverLink } from "./StaticStyles";

export function SecureMailto({ email, subject = "", body = "", children }) {
  const handleClick = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <HoverLink target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      {children || "Send Email"}
    </HoverLink>
  );
}
