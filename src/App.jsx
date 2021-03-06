import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import routes from "./routes";

import "./App.scss";
function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
