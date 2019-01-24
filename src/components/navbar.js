import React,{Component} from 'react';
import {  Link } from "react-router-dom";
import Logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './button';


class Navbar extends Component {
    render(){
      return(
        <div>
          <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
            <Link to='/'>
              <img src={Logo} alt="store" className="navbar-brand"></img>
            </Link>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                  Prodcts
                </Link>
              </li>
            </ul>
            <Link to='/cart' className="ml-auto">
              <ButtonContainer>
                <i className="fas fa-cart-plus"></i>
                my cart
              </ButtonContainer>
            </Link>
          </NavWrapper>
        </div>
      );
    }
}






export default Navbar;
const NavWrapper =styled.nav`
  background:var(--mainBlue);
  .nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
     text-transform: capitalize ';
  }
`
