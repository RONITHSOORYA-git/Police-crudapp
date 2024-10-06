import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editComplaint } from '../Redux/Slice';

function Edit({edit}) {

    const [data,setdata]=useState(edit)

   const dispatch=useDispatch()

    const handleEidt=()=>{

         dispatch(editComplaint(data))
        console.log(data)
        handleClose()

    }







    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
<div>

<i onClick={handleShow}  className="fa-regular fa-pen-to-square fa-xl " style={{color: "#387109", cursor:"pointer"}} />


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
           <img className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Kerala_State_Police_Logo.png?20220618024905" alt="" />

           </div>
        
        </Col>
        <Col sm={12} md={7}>


           <input type="text" placeholder='ID'className='form-control mb-3' value={data.id} onChange={e=>setdata({...data,id:e.target.value})} />

            <input type="text" placeholder='Name'className='form-control mb-3' value={data.name} onChange={e=>setdata({...data,name:e.target.value})} />
            <input type="text" placeholder='Image'className='form-control mb-3' value={data.image} onChange={e=>setdata({...data,image:e.target.value})}  />
            <input type="text" placeholder='Enter Phone number'className='form-control mb-3'value={data.number}  onChange={e=>setdata({...data,number:e.target.value})}  />
            <input type="text" placeholder='Enter Address'className='form-control mb-3'value={data.address} onChange={e=>setdata({...data,address:e.target.value})}  />
            <input type="text" placeholder='Enter Discription'className='form-control mb-3' value={data.discription}  onChange={e=>setdata({...data,discription:e.target.value})} />
      
        </Col>

        
      </Row>



      <Modal.Footer>

      <button className='btn btn-outline-danger' variant="secondary" onClick={handleClose}>
        Close
      </button>
      <button onClick={handleEidt} className='btn btn-outline-info' variant="primary">update</button>

    
    </Modal.Footer>


      <div className='d-flex justify-content-between'>


      
      

      </div>
   
    </Modal.Body>
   
  </Modal>



</div>

    
    </>
  )
}

export default Edit