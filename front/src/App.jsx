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
import Products from "./AdminPages/Products";
import Customers from "./AdminPages/Customers";
import Variants from "./AdminPages/Variants";
import Categories from "./AdminPages/Categories";
import { MessageBoxProvider } from "./context/MessageBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import { CardProvider } from "./context/CartContext";

function App() {
  //   useEffect(()=>{
  // getXmlProductById(1554)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.error(err));
  //   },[])

  return (
    <>
      <ToastContainer />
      <CardProvider>
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
                path="/admin/customers"
                element={
                  <AdminLayout>
                    <Customers />
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
                    <Products />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/settings"
                element={
                  <AdminLayout>
                    <Products />
                  </AdminLayout>
                }
              />
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </MessageBoxProvider>
      </CardProvider>
    </>
  );
}

export default App;
