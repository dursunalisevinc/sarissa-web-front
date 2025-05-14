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
import Products from "./AdminPages/Products"
import Categories from "./AdminPages/Categories";
import { MessageBoxProvider } from "./context/MessageBox";

function App() {
  return (
    <MessageBoxProvider>
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
            path="/admin/"
            element={
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/variant"
            element={
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/categories"
            element={
              <AdminLayout>
                <Categories />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/products"
            element={
              <AdminLayout>
                <AdminDashboard />
                </AdminLayout>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            }
          />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </MessageBoxProvider>
  );
}

export default App;
