import Header from '@components/header';
import Filters from '@components/filters';

const Shop = () => {
  return (
    <div>
      <Header PageName={"Shop"} PreviousPage={"Home"}/>
      <Filters/>
    </div>
  );
}

export default Shop;
