import React from 'react'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <>


<div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
        <div className=' w-50 border shadow p-5 '>
            <h1 className='text-center mb-4'>Register</h1>

            <input type="text" className='form-control my-3' placeholder='Enter Email'/>
            <input type="text" className='form-control my-3' placeholder='Enter username'/>
            <input type="text" className='form-control '  placeholder='Enter Password'/>
            <div className='d-flex justify-content-between'>
            <button className='btn btn-success my-3 '>Proceed</button>
            <Link className='btn  my-3 ' to={'/'}>Already user</Link>
            </div>
            


        </div>
    </div>
    
    </>
  )
}

export default Register