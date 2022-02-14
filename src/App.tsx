import { useState } from "react";
import Button from "@mui/material/Button";
import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
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
