import React from "react";
import "../css/tv.css";
import image1 from  "../image/la_logo.png"
import image2 from  "../image/la_text.png"
import Button from 'react-bootstrap/Button';


function Picture3(){
    return(
    <div className="r">
        <div>  
   <img src={image1} alt="" className="" style={{width:"20%", marginTop:"100px", marginLeft:"100px"}} />
   </div>
        <div>  
   <img src={image2} alt="" className="" style={{width:"40%", marginTop:"20px", marginLeft:"100px"}} />
   </div>
   <p>2019
   <Button variant="outline-light">TV Series</Button>
   </p>
   <div>
   <Button variant="danger" style={{width:"20%", marginTop:"30px"}}>Watch Now!</Button>{' '}
   </div>
    </div>
)
}

export default Picture3;