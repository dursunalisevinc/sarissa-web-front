import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import PrivateRoute from "./component/PrivateRoute";
import AdminDashboard from "./AdminPages/Dashboard";
import AdminLayout from "./shared/AdminLayout";
import Unauthorized from "./pages/Unauthorized";
import ProductDetail from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* <Route element={<PrivateRoute allowedRoles={["user"]} />}> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        {/* </Route> */}

        {/* <Route element={<PrivateRoute allowedRoles={["admin"]} />}> */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
