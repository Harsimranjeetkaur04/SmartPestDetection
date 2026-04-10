// plugins/vuetify.ts
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

const customLightTheme = {
  dark: false,
  colors: {
    primary: "#10B981", // Emerald
    secondary: "#047857",
    background: "#F3F4F6", // Modern light gray
    surface: "#FFFFFF",
    error: "#EF4444",
    info: "#3B82F6",
    success: "#10B981",
    warning: "#F59E0B",
  },
};

const customDarkTheme = {
  dark: true,
  colors: {
    primary: "#10B981", // Emerald
    secondary: "#34D399",
    background: "#111827", // Rich dark gray
    surface: "#1F2937",
    error: "#EF4444",
    info: "#3B82F6",
    success: "#10B981",
    warning: "#F59E0B",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: customLightTheme,
      dark: customDarkTheme,
    },
  },
});
