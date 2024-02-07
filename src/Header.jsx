import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div> 
        <MDBNavbar  style={{backgroundColor:'#8c7cf7'}}>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img style={{marginLeft:'5%'}}
          src='http://easy-calc.com/images/Easy-Calc.png' height='30'alt='' loading='lazy'/>   
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}
export default Header