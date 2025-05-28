import { DeskproAppProvider } from "@deskpro/app-sdk";
import { HashRouter, Route, Routes } from "react-router-dom";

import { Main } from "./pages/Main";
import "./App.css";

import "flatpickr/dist/themes/light.css";
import "tippy.js/dist/tippy.css";
import "simplebar/dist/simplebar.min.css";
import "@deskpro/deskpro-ui/dist/deskpro-ui.css";
import "@deskpro/deskpro-ui/dist/deskpro-custom-icons.css";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback";
import { ErrorBoundary } from "@sentry/react";

function App() {
  return (
    <HashRouter>
      <DeskproAppProvider>
        <ErrorBoundary fallback={ErrorFallback}>
          <Routes>
            <Route path="/" index element={<Main />} />
          </Routes>
        </ErrorBoundary>
      </DeskproAppProvider>
    </HashRouter>
  );
}

export default App;
