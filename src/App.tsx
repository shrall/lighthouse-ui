import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import FormPage from "./pages/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
