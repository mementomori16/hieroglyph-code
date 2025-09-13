import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from "./routes/router";
import "./global.scss";
// Import your i18n configuration
import i18n from '../i18n'; 
// Import the necessary provider and Suspense component
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrap your app with Suspense and I18nextProvider */}
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);