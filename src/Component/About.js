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
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo"mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" mode={props.mode} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
    {/* <button className="btn btn-primary" onClick={toggleMode} >{btnText}</button> */}
  </div>
</div>
</div>
        </>
    )
}