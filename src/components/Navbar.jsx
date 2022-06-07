import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function Navbar() {
    const links = ["Home", "Dashboard", "Descubrir", "FAQ", "Contacto", "Acerca De"];
  return (  
  <Nav className="flex j-between a-center">
      <div className="brand">
          <h2>CoinBase</h2>
      </div>
      <div className="toggle"></div>
      <div className="links">
          <ul className="flex gap-2" >
              {links.map((link) => {
                  return (
                      <li key={link}>
                          <a href="#"> {link} </a>
                      </li>
                  )
              })}
          </ul>
      </div>
      <div className="auth flex gap-1">
          <Button text="Registrarse" subduedButton/>
          <Button text="Iniciar Sesion"  />
      </div>
  </Nav>
  );
}

const Nav = styled.nav`
margin: 3rem 5rem;
.brand{
    h2{
        font-size: 2.5rem;
    }
}
.togle{
    display: none;
}
.links{
    ul{
        font-weight: bolder;
        li{
            cursor: pointer;
            &:first-of-type{
                a{
                    opacity: 1;
                }
            }
            a{
                opacity: 0.7;
                transition: 0.5s ease-in-out;
                &:hover {
                    opacity: initial;
                }
            }
        }
    }
}
`;