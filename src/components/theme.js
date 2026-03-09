const theme = {
  colors: {
    purple_dark: "#560289",
    purple_dark_transparent: "rgba(86,2,137,0.55)",
    purple_accent: "#C15EFD",
    tiel_dark: "#046C69",
    tiel_accent: "#27F7F0",
    blue_dark: "#1B2473",
    blue_accent: "#3141CE",
    yellow_accent: "#FFB422",
    background_dark: "#212121",
    white: "#ffffff",
    black: "#000000",
    black_transparent: "rgba(0,0,0,0.25)",
    transparent: "transparent",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Kanit, sans-serif",
  },
  border: {
    small: "4px",
    medium: "8px",
    big: "16px",
  },
  typography: {
    size: {
      // UI elements — fixed px, intentionally ignore user font-size prefs
      tag:        "10px",
      label:      "11px",
      micro:      "12px",
      ui:         "13px",
      caption:    "14px",
      // Body — rem, scales with user browser font-size preference
      body:       "1rem",
      lead:       "1.125rem",
      // Headings — clamp(rem, vw + rem, rem)
      // Fluid between viewports AND respects user font-size preference
      subheading: "clamp(1.25rem, 1.8vw + 0.5rem, 1.75rem)",
      heading:    "clamp(1.75rem, 3.5vw + 0.75rem, 3rem)",
      title:      "clamp(3rem, 7vw + 1rem, 6rem)",
      hero:       "clamp(4rem, 10vw + 1.5rem, 8rem)",
    },
    weight: {
      regular:  400,
      medium:   500,
      semibold: 600,
      bold:     700,
      black:    900,
    },
    leading: {
      tight:   "1.05",
      snug:    "1.3",
      normal:  "1.5",
      relaxed: "1.7",
    },
  },
};

export default theme;
