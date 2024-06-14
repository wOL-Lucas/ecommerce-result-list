import Header from '../components/header';
import Filters from '../components/filters';
import Products from '../components/products';
import Pager from '../components/pager';
import Footer from '../components/footer';

const Shop = () => {
  return (
    <div>
      <Header PageName={"Shop"} PreviousPage={"Home"}/>
      <Filters/>
      <Products/>
      <Pager PagesCount={3}/>
      <Footer/>
    </div>
  );
}

export default Shop;
