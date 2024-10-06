import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComplaint } from '../Redux/Slice';
import { toast } from 'react-toastify';


function AddCard() {

    const [show, setShow] = useState(false);

    const [data,setdata]=useState({id:'',name:"",image:"",number:"",address:"",discription:""})
    
  const dispatch=useDispatch()

 const handleAdd=()=>{
    const{id,name,image,number,address,discription}=data
    if(!id||!name||!image||!number||!address||!discription){
        toast.warn("enter valid input")
    }else{
        dispatch(addComplaint(data))
        toast.success("Success")
        setdata({id:'',name:"",image:"",number:"",address:"",discription:""})

        handleClose()
    }


  

    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>
<div>

<button onClick={handleShow} className='btn btn-success'>Add Complaint</button>


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


           <input type="text" placeholder='ID'className='form-control mb-3' onChange={e=>setdata({...data,id:e.target.value})} />

            <input type="text" placeholder='Name'className='form-control mb-3' onChange={e=>setdata({...data,name:e.target.value})} />
            <input type="text" placeholder='Image'className='form-control mb-3' onChange={e=>setdata({...data,image:e.target.value})}  />
            <input type="text" placeholder='Enter Phone number'className='form-control mb-3' onChange={e=>setdata({...data,number:e.target.value})}  />
            <input type="text" placeholder='Enter Address'className='form-control mb-3'onChange={e=>setdata({...data,address:e.target.value})}  />
            <input type="text" placeholder='Enter Discription'className='form-control mb-3' onChange={e=>setdata({...data,discription:e.target.value})} />
      
        </Col>

        
      </Row>



      <Modal.Footer>

      <button className='btn btn-outline-danger' variant="secondary" onClick={handleClose}>
        Close
      </button>
      <button onClick={handleAdd} className='btn btn-outline-info' variant="primary">Register</button>

    
    </Modal.Footer>


      <div className='d-flex justify-content-between'>


      
      

      </div>
   
    </Modal.Body>
   
  </Modal>



</div>

</>
  )
}

export default AddCard