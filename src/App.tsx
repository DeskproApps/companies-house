import { DeskproAppProvider } from "@deskpro/app-sdk";
import { ErrorBoundary } from "react-error-boundary";
import { HashRouter, Route, Routes } from "react-router-dom";

import { Main } from "./pages/Main";
import "./App.css";

import "flatpickr/dist/themes/light.css";
import "tippy.js/dist/tippy.css";
import "simplebar/dist/simplebar.min.css";
import "@deskpro/deskpro-ui/dist/deskpro-ui.css";
import "@deskpro/deskpro-ui/dist/deskpro-custom-icons.css";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback";

function App() {
  return (
    <HashRouter>
      <DeskproAppProvider>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
        {/*@ts-ignore*/}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" index element={<Main />} />
          </Routes>
        </ErrorBoundary>
      </DeskproAppProvider>
    </HashRouter>
  );
}

export default App;
