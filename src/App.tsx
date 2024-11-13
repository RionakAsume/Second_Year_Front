import { Register } from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRouter } from "./ProtectedRouter";
import { AuthProvider } from "./context/AuthContext";
import Main from "./pages/Main";
function App() {


  return (
    <>
      <AuthProvider>

        <BrowserRouter>
          <Routes>

            <Route path="/register" element={<Register />} />


            <Route element={<ProtectedRouter />}>
              
            </Route>
            <Route path="/" element={<Main/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
