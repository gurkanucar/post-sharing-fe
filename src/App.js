import logo from "./logo.svg";
import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />

          {/* <Route path="/addresses/details/:id" element={<DetailPage />} /> */}
        </Route>
        <Route path="/login" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
