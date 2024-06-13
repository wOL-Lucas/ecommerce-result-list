import Header from '@components/header';
import Filters from '@components/filters';
import Products from '@components/products';

const Shop = () => {
  return (
    <div>
      <Header PageName={"Shop"} PreviousPage={"Home"}/>
      <Filters/>
      <Products/>
    </div>
  );
}

export default Shop;
