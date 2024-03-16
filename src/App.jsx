import { Route, Routes } from "react-router-dom";

//import halaman
import landingPage from "./pages/landingPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" Component={landingPage} />
      </Routes>
    </>
  )
}

export default App
