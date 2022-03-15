import React from "react";
import { MainLayout } from "./layout/main-layout/main-layout";
import { PersonsList } from "./components/feature-person-list/persons-list";
import { PersonInfoProvider } from "./data-access/person-info-ctx";
import { ErrorAlert } from "./components/feature-error-alert/error-alert";
import { SelectedPersonsList } from "./components/feature-person-list/selected-persons-list";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";

const App: React.FC = () => (
  <ErrorBoundary message="ERROR" description="somthing, went wrong">
    <PersonInfoProvider>
      <ErrorAlert />
      <MainLayout>
        <SelectedPersonsList />
        <PersonsList />
      </MainLayout>
    </PersonInfoProvider>
  </ErrorBoundary>
);

export default App;
