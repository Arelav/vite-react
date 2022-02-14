import { useState } from "react";
import Button from "@mui/material/Button";
import logo from "./logo.svg";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";
import {app, appHeader, appLogo, appLink} from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={app}>
      <ThemeProvider theme={theme}>
        <header className={appHeader}>
          <img src={logo} className={appLogo} alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <Button
              variant="contained"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </Button>
          </p>
          <CustomCheckbox defaultChecked />
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className={appLink}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className={appLink}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
