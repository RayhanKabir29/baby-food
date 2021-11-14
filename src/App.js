import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './Pages/Home/About/About';
import Review from './Pages/Home/Review/Review';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Home/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Header from './Pages/Home/Shared/Header/Header';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import AddProducts from './Pages/AddProducts/AddProducts';
import ManageProducts from './Pages/MangeProducts/ManageProducts';
import UpdateProducts from './Pages/UpdateProducts/UpdateProducts';
import MyOrder from './Pages/MyOrder/MyOrder';



function App() {
  return (
    <div className="">
      
      <AuthProvider>
      <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/products">
              <Products/>
            </Route>
            <PrivateRoute path="/productDetails/:id">
              <ProductDetails/>
            </PrivateRoute>
            <PrivateRoute path="/addProducts">
              <AddProducts/>
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts/>
            </PrivateRoute>
            <Route path="/update/:id">
              <UpdateProducts/>
            </Route>
            <PrivateRoute path="/myOrder">
              <MyOrder/>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
