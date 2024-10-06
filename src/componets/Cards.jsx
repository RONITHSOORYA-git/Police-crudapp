import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import Edit from './Edit';
import { useDispatch } from 'react-redux';
import { deleteComplaint } from '../Redux/Slice';
import View from './View';



function Cards() {
    const {police}=useSelector((state)=>state. policeReducer)

    const dispatch=useDispatch()




  return (
   <>

   {
    police.length > 0?

    police.map((item)=>(

        <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"14rem"}} variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <span>{item.number}</span>
          
        </Card.Text>
        <div className='d-flex justify-content-around align-items-center'>
        <Edit edit={item}/>

        <View data={item}/>

        <Button  onClick={()=>{dispatch(deleteComplaint(item.id))}} variant="btn"><i className="fa-solid fa-trash fa-xl" style={{color: "#f00505",}} /></Button>
         </div>
      </Card.Body>
    </Card>
    

    ))
    :
    

        <h2  className='text-center text-light'> No Details..</h2>
    



   }


  
   
   </>
  )
}

export default Cards