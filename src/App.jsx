import { MainPage } from "./pages/MainPage/MainPage"
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
