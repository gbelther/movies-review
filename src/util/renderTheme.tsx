import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { theme } from "../global/styles/theme";

const renderTheme = (children: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export { renderTheme };
