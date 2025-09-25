export interface ThemeConfig {
  colors: { primary: string; secondary: string; text: string };
  fontFamily: string;
}

export const applyThemeToLayout = (layout: any, theme: ThemeConfig): any => {
  // Apply theme styles (e.g., add className or inline styles)
  return {
    ...layout,
    className: `${layout.className || ""} text-${theme.colors.text} bg-${theme.colors.primary}`,
  };
};

// Example default theme
export const defaultTheme: ThemeConfig = {
  colors: { primary: "#ffffff", secondary: "#000000", text: "#333333" },
  fontFamily: "Arial, sans-serif",
};