import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';


function View({data}) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
  <>
<button onClick={handleShow} className='btn ms-5'>View</button>

<div>

<Modal
 show={show}
 onHide={handleClose}
 backdrop="static"
 keyboard={false}
>
 <Modal.Header closeButton>
 </Modal.Header>
 <Modal.Body>

   <Row>

     <Col sm={12} md={5}>

        <div className='mt-5'>
        <img className='img-fluid' src={data.image} alt="" />

        </div>
     
     </Col>
     <Col sm={12} md={7}>


        <input type="text" placeholder='ID'className='form-control mb-3' value={data.id} />

         <input type="text" placeholder='Name'className='form-control mb-3' value={data.name} />
         <input type="text" placeholder='Enter Phone number'className='form-control mb-3'value={data.number} />
         <input type="text" placeholder='Enter Address'className='form-control mb-3 ' value={data.number} />
         <input type="text" placeholder='Enter Discription'className='form-control mb-3' value={data.discription} />
   
     </Col>

     
   </Row>



   <Modal.Footer>

   <button className='btn btn-outline-danger' variant="secondary" onClick={handleClose}>
     Close
   </button>
   {/* <button className='btn btn-outline-info' variant="primary">Register</button> */}

 
 </Modal.Footer>


   <div className='d-flex justify-content-between'>


   
   

   </div>

 </Modal.Body>

</Modal>
</div>

  </>
  )
}

export default View