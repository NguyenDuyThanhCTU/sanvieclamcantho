import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { AllRoutes } from "./routes/index";
import { AuthProviders } from "./Context/AuthProviders";
import { StateProvider } from "./Context/StateProvider";
import { DataProviders } from "./Context/DataProviders";
const App = () => {
  return (
    <DataProviders>
      <StateProvider>
        <AuthProviders>
          <Router>
            <Routes>
              {AllRoutes.map((route, index) => {
                let Layout = DefaultLayout;
                if (route.Layout) Layout = route.Layout;
                else Layout = DefaultLayout;

                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </Router>
        </AuthProviders>
      </StateProvider>
    </DataProviders>
  );
};

export default App;
