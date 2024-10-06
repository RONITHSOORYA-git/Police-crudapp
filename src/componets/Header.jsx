import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar  style={{backgroundColor:"black"}} className=" " >
        <Container style={{backgroundColor:"black"}} >
          <Navbar.Brand href="#home">
            
            <div className='d-flex align-items-center'>
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Kerala_State_Police_Logo.png?20220618024905"
              width="70"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            <h3 className='ms-2 text-light'>Kerala State Police</h3>

            </div>
          </Navbar.Brand>
          {/* <div>
            <span className='me-3 '>Contact Us</span>
            <span className='me-3'>Need Help ?</span>
          </div> */}
        </Container>
      </Navbar>
  )
}

export default Header