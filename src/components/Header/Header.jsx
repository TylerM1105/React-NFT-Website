import React from "react";
import './Header.css'
import { Container } from "reactstrap";
import { NavLink, Link} from "react-router-dom";

const NAV__LINKS = [

  {
  display: 'Home',
  url:'/home'
  },
  {
  display: 'Market',
  url:'/market'
  },
  {
  display: 'Create',
  url:'/create'
  },
  {
  display: 'Contact',
  url:'/contact'
  },
]

const Header = () => {
  return <Header className="=Header">
      <Container>
        <div className="navigation">
            <div2 className="logo">
                <h2 className=" d-flex gap- align-items-center " >
                  <span>
                    <i class="ri-fire-fill"></i>
                  </span>
                  NFTs
                </h2>
            </div2>

            <div className="nav__menu">
              <ul className="nav__list">
                { NAV__LINKS.map((item, index) =>     (            
                    <li className="nav__item" key={index}>
                      <NavLink to={item.url}>   {item.display}  </NavLink>
                    </li>
                ))}
              </ul>
            </div>

        </div>
      </Container>
  </Header>
};

export default Header;