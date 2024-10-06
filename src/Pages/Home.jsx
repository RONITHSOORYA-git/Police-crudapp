import React from 'react'
import AddCard from '../componets/AddCard';
import Cards from '../componets/Cards';

function Home() {


  return (
   <>
  <div className=' bg-dark  p-5 text-center mb-5'>

    <AddCard/>

    <div style={{backgroundColor:"black"}}  className=' border border p-5 d-flex flex-wrap gap-4 mt-3 mb-5' >
      <Cards/>

    </div>
 </div>
   
   </>
  )
}

export default Home