import { Register } from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRouter } from "./ProtectedRouter";
import { AuthProvider } from "./context/AuthContext";
import { DbProvider } from "./context/DbContext";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />


            <Route element={<ProtectedRouter />}>
              <Route path="/" element={
                <DbProvider>
                  <Main />
                </DbProvider>
              }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
