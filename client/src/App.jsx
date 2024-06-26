import { Route, Routes } from "react-router-dom";
import { Home, PublicLayout } from "./pages/public";
import path from "./utils/path";

function App() {
  return (
    <Routes>
      <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
        <Route path={path.HOME} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
