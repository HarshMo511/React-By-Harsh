import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/Products" element={<ProductsPage />} />
//   </Route>,
// );

// const router = createBrowserRouter(routerDefinitions);

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/Products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
