import React from 'react';
import styled from 'styled-components';
import ProductType from '../types/product';

const Container = styled.div`
  display: flex;
  width: 20%;
  min-width: 285px; 
  margin: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  @media (max-width: 768px) {
    width: 35%;
    min-width: 155px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 301px;
  max-width: 285px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-height: 165px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F4F5F7;
  width: 100%;
  max-width: 285px;
  font-family: 'Poppins', sans-serif;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 12px;
    };

    @media (max-width: 361px) {
      font-size: 10px;
    }
  }

  p {
    font-size: 14px;
    color: #000000;
    margin: 5px;
    
    @media (max-width: 768px) {
      font-size: 8px;
    };
  }
  
  .texts {
    padding: 10px;
    
    @media (max-width: 768px) {
      padding: 5px;
      min-height: 98px;
    };
  }
  
  .price-wrapper {
    display: flex;
    
    @media (max-width: 768px) {
      flex-direction: column;
    };
  }

  .current-price {
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    
    @media (max-width: 768px) {
      font-size: 12px;
    };
    
    @media (max-width: 361px) {
      font-size: 10px;
    }
  }
  
  .original-price {
    font-size: 14px;
    color: #000000;
    margin: 5px;
    text-decoration: line-through;
    
    @media (max-width: 768px) {
      font-size: 8px;
    };

    @media (max-width: 361px) {
      font-size: 8px;
      min-width: 98px;
    }
  }
`;

const DiscountBadge = styled.p`
  position: absolute;
  top: 10px;
  right: 25%;
  
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 55px;
  background-color: #E97171;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50%;
  margin: 10px;
  
  @media (max-width: 768px) {
    font-size: 12px;
    top: -5px;
    right: -5px;
    
    height: 35px;
    width: 35px;
    line-height: 35px;
  };
`;

const NewBadge = styled.p`
  position: absolute;
  top: 10px;
  right: 25%;
  
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 55px;
  background-color: #2EC1AC;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50%;
  margin: 10px;
  
  @media (max-width: 768px) {
    font-size: 12px;
    top: -5px;
    right: -5px;
    
    height: 35px;
    width: 35px;
    line-height: 35px;
  };
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
`;

const Informations = ( { Product }: { Product: ProductType } ) => { 
  return (
    <InfoWrapper>
      <div className="texts">
          <h1>{Product.name}</h1>
          <p>{Product.description}</p>
          <div className="price-wrapper">
            <p className="current-price">Rp {Product.price}</p>
            {
              Product.hasDiscount &&
              <p className="original-price">Rp {Product.originalPrice }</p>
            }
          </div>
      </div>
    </InfoWrapper>
  );
};

const Product = ({ Product }: { Product: ProductType }) => {
  return (
    <Container>
        <Wrapper>
        {
          Product.hasDiscount && 
          <DiscountBadge>-{Product.discount}</DiscountBadge>
        }
        {
          Product.newProduct && 
          <NewBadge>New</NewBadge>
        }
        <Image src={Product.image}/>
      </Wrapper>
      <Informations Product={Product}/>
    </Container>
  );
};


export default Product;
