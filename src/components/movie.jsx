import React from "react";
import "../css/movie.css";
import image1 from  "../image/joker.png"
import image2 from  "../image/text_joker.png"
import Button from 'react-bootstrap/Button';


function Picture2(){
    return(
    <div className="q">
        <div>  
   <img src={image1} alt="" className="" style={{width:"10%", marginTop:"100px", marginLeft:"100px"}} />
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

export default Picture2;