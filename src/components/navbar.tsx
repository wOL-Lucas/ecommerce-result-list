import React from 'react';
import styled from 'styled-components';
import Logo from '@components/logo';
const HeaderContainer = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;
  padding: 25px 0;
  background:#FFFFFF;
`

const Container = styled.div`
  position: absolute;
  width: 90%;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0;
  margin: 0;
  color: #000000;

  a {
    text-decoration: none;
    color: #000000;
    margin: 0 10px;
    padding: 0;
  }
}
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0;
  margin: 0;
  color: #000000;

  a {
    text-decoration: none;
    color: #000000;
    margin: 0 10px;
    padding: 0;
  }
}
`

const Header = () => {
  
  const pages = [
    {
      name: 'Home',
      url: '#'
    },
    {
      name: "Shop",
      url: '#'
    },
    {
      name: 'About',
      url: '#'
    },
    {
      name: 'Contact',
      url: '#'
    }
  ]

  const actions = [
    {
      name: "login",
      url: "#",
      icon: "person_alert"
    },
    {
      name: "search",
      url: "#",
      icon: "search"
    },
    {
      name: "wishlist",
      url: "#",
      icon: "favorite"
    },
    {
      name: "cart",
      url: "#",
      icon: "shopping_cart"
    }

  ]

  return (
    <HeaderContainer>
      <Container>
        <Logo />
        <Items>
          {pages.map((page, index) => (
            <a key={index} href={page.url}>{page.name}</a>
          ))}
        </Items>
        <Actions>
          {actions.map((action, index) => (
            <a key={index} href={action.url}><span className="material-symbols-outlined">{action.icon}</span></a>
          ))}
        </Actions>
      </Container>
    </HeaderContainer>
  )
}


export default Header;
