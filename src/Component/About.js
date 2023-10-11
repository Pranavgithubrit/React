import React from 'react'
export default function About(props)
{
    // const[myStyle,setMyStyle]=useState({
    //   color:'black',
    //   backgroundColor: 'white'
// });
// const[btnText,setBtnText]=useState('Enable Dark Mode');
    
    return(
        <>
        <div className="container" >
        <div className="accordion accordion-flush" id="accordionFlushExample ">
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Contact
      </button>
    </h2>
    <div id="flush-collapseOne" mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" >Contact Us anytime of the day. Our services are available all the time for your assistance.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Our Offices
      </button>
    </h2>
    <div id="flush-collapseTwo"mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" >We have offices in many locations in India and across the world. We deliver our services not only in India but around various corners of the world.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        City Offices
      </button>
    </h2>
    <div id="flush-collapseThree" mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" >The city offices of India are in- Delhi, Mumbai, Kolkata, Madurai and Chennai.</div>
    </div>
    {/* <button className="btn btn-primary" onClick={toggleMode} >{btnText}</button> */}
  </div>
</div>
</div>
        </>
    )
}