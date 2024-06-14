import styled from 'styled-components';
import ProductType from '@types/product';
import Product from '@components/product';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  padding: 15px;
  
  @media (max-width: 768px) {
    padding: 15px 0;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
`;

const Products = () => {

  const productList: ProductType[] = [
    { name: "Syltherine", description: "Stylish cafe chair", image: "/src/assets/products/Syltherine.png", price: "2.500.000", hasDiscount: true, discount: "30%", originalPrice: "3.500.000", newProduct: false,},
    { name: "Leviosa", description: "Stylish cafe chair", image: "/src/assets/products/Leviosa.png", price: "2.500.000", hasDiscount: false, discount: "", originalPrice: "",newProduct: false,},
    { name: "Lolito", description: "Luxury big sofa", image: "/src/assets/products/Lolito.png", price: "7.000.000", hasDiscount: true, discount: "50%",originalPrice: "14.000.000",newProduct: false,},
    { name: "Respira", description: "Outdoor bar table and stool", image: "/src/assets/products/Respira.png", price: "500.000", hasDiscount: false, discount: "", originalPrice: "", newProduct: true,},
    { name: "Syltherine", description: "Stylish cafe chair", image: "/src/assets/products/Syltherine.png", price: "2.500.000", hasDiscount: true, discount: "30%", originalPrice: "3.500.000", newProduct: false,},
    { name: "Leviosa", description: "Stylish cafe chair", image: "/src/assets/products/Leviosa.png", price: "2.500.000", hasDiscount: false, discount: "", originalPrice: "",newProduct: false,},
    { name: "Lolito", description: "Luxury big sofa", image: "/src/assets/products/Lolito.png", price: "7.000.000", hasDiscount: true, discount: "50%",originalPrice: "14.000.000",newProduct: false,},
    { name: "Respira", description: "Outdoor bar table and stool", image: "/src/assets/products/Respira.png", price: "500.000", hasDiscount: false, discount: "", originalPrice: "", newProduct: true,},
    { name: "Syltherine", description: "Stylish cafe chair", image: "/src/assets/products/Syltherine.png", price: "2.500.000", hasDiscount: true, discount: "30%", originalPrice: "3.500.000", newProduct: false,},
    { name: "Leviosa", description: "Stylish cafe chair", image: "/src/assets/products/Leviosa.png", price: "2.500.000", hasDiscount: false, discount: "", originalPrice: "",newProduct: false,},
    { name: "Lolito", description: "Luxury big sofa", image: "/src/assets/products/Lolito.png", price: "7.000.000", hasDiscount: true, discount: "50%",originalPrice: "14.000.000",newProduct: false,},
    { name: "Respira", description: "Outdoor bar table and stool", image: "/src/assets/products/Respira.png", price: "500.000", hasDiscount: false, discount: "", originalPrice: "", newProduct: true,},
    { name: "Syltherine", description: "Stylish cafe chair", image: "/src/assets/products/Syltherine.png", price: "2.500.000", hasDiscount: true, discount: "30%", originalPrice: "3.500.000", newProduct: false,},
    { name: "Leviosa", description: "Stylish cafe chair", image: "/src/assets/products/Leviosa.png", price: "2.500.000", hasDiscount: false, discount: "", originalPrice: "",newProduct: false,},
    { name: "Lolito", description: "Luxury big sofa", image: "/src/assets/products/Lolito.png", price: "7.000.000", hasDiscount: true, discount: "50%",originalPrice: "14.000.000",newProduct: false,},
    { name: "Respira", description: "Outdoor bar table and stool", image: "/src/assets/products/Respira.png", price: "500.000", hasDiscount: false, discount: "", originalPrice: "", newProduct: true,},
  ]

  return (
    <Container>
      <Wrapper>
        {productList.map((product) => (
          <Product Product={product}/>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
