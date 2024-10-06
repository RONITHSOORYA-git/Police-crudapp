import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
  <>
  <div className='p-5'>
    <Row>
    <Col sm={12} md={4}></Col>

      <Col sm={12} md={4}>

      <div className='d-flex align-items-center justify-content-center text-light'>
      <i className="fab fa-facebook-f "></i>
      <i className="fab fa-twitter ms-4"></i>
      <i className="fab fa-google ms-4"></i>
      <i className="fab fa-instagram ms-4"></i>
      



      </div>

      <div classNameName='' >
        {/* <img   style={{height:"10rem"}} classNameName='img-fluid d-flex align-items-center ' src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Government_of_Kerala_Logo.svg" alt="" srcset="" /> */}
      </div>
      {/* <span classNameName='text-center ms-5'>law enforcement agency for the Indian state of Kerala</span> */}

      
      </Col>
      <Col sm={12} md={4}>
      
      
        
        
       
      

      
      
      </Col>
    </Row>
  </div>
  </>
  )
}

export default Footer