import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LAnding() {
  return (
    <>

<div className=' bg-light  d-flex justify-content-center align-items-center p-5'style={{height:"max-content"}}>
         
         <Row className='container'>
           <Col  sm={12} md={6} className=' '>
           <div>
               <h2 style={{color:"darkblue"}}  className=' pb-'>Kerala State <span style={{color:"red"}}>Police</span></h2>
                <h4 className='text-dark pb-3 '>"മൃദു ഭാവെ ദൃഢ കൃത്യേ"</h4>	
               <p className='text-dark' style={{textAlign:"justify"}}>കേരള സംസ്ഥാനത്തിന്റെ ക്രമസമാധാന പരിപാലന-നിയമ നിർവഹണ ഏജൻസിയാണ്‌ കേരള പോലീസ്. തിരുവനന്തപുരം ആണ്‌ കേരള പോലീസിന്റെ‌ ആസ്ഥാനം. 'മൃദുവായ പെരുമാറ്റം, ദൃഢമായ പ്രവർത്തനം' എന്ന് അർത്ഥമാക്കുന്ന 'മൃദു ഭാവെ, ദൃഢ കൃത്യെ' എന്ന സംസ്കൃത വാക്യം ആണ്‌ ഈ സേനയുടെ ആപ്തവാക്യം. കേരള സർക്കാരിൻ്റെ ആഭ്യന്തര വകുപ്പിൻ്റെ കീഴിൽ പ്രവർത്തിക്കുന്ന ഈ സേനയുടെ തലവൻ സംസ്ഥാന പോലീസ് മേധാവിയാണ്. സംസ്ഥാന തലത്തിൽ ഉദ്യോഗാർത്ഥികളെ തിരഞ്ഞെടുത്ത്‌, പരിശീലനം നൽകി സ്വന്തം ജന്മദേശത്തോ, കേരളത്തിന്റെ മറ്റേതെങ്കിലും ഭാഗത്തോ നിയമിച്ചു കൊണ്ടുള്ള സംവിധാനം ആണ്‌ നിലവിലുള്ളത്‌. കേരളാ പോലീസിലെ ഉദ്യോഗസ്ഥർ സംസ്ഥാനത്തിന്റെ ഏതു ഭാഗത്തും പ്രവർത്തിക്കാൻ ബാധ്യസ്ഥരാണ്‌. ആവശ്യമെങ്കിൽ മറ്റു സംസ്ഥാനങ്ങളിലും പ്രവർത്തിക്കേണ്ടതുണ്ട്‌.</p>
               <Link to={'/Home'} className='btn btn-success'>Register Complaint</Link>

               </div> 

           </Col>
           <Col  sm={12} md={6} >
             <div className='d-flex justify-content-center align-items-center '>
             <img className='img-fluid ms-md-5 mt-5' style={{height:"20rem"}} src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Government_of_Kerala_Logo.svg" alt="landing"/>
             </div>
           </Col>

         </Row>
         <div >

         </div>

   </div>

    
    </>
  )
}

export default LAnding