import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route path="/search" element={"<></>"} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
