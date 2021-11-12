import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import About from './Pages/Home/About/About';
import Review from './Pages/Home/Review/Review';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Home/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="">
      <BrowserRouter>
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
          <Route path="/productDetails/:id">
           <ProductDetails/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
