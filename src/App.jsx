import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDeteils from "./pages/ProductDeteils";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import RootLayouts from "./layouts/RootLayouts";


const router = createBrowserRouter(
  createRoutesFromElements(
   <>
   <Route path="/" element={<RootLayouts />}>
          <Route path="/home" element={<Home />}>  </Route>
          <Route path="/shop" element={<Shop/>}>  </Route>
          <Route path="/products" element={<ProductDeteils/>}> </Route>
          <Route path="/about" element={<About/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path="/cart" element={<Cart/>}> </Route>
          <Route path="/checkout" element={<Checkout/>}> </Route>
          <Route path="*" element={<Error/>}> </Route>
    </Route>

    
    
   </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App