import React from "react";
import "../css/background1.css";
import image1 from  "../image/thewitcher 1.png"
import image2 from  "../image/text.png"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


function Picture(){
    return(<>
    <div className="p">
      <div>  
   <img src={image1} alt="" className="" style={{width:"40%", marginTop:"100px", marginLeft:"100px"}} />
   </div>
   <div>
   <img src={image2} alt="" style={{width:"30%", marginTop:"10px", marginLeft:"100px"}}  />
   </div>
   <p>2019
   <Button variant="outline-light">TV Series</Button>
   </p>
   <div>
   <Button variant="danger" style={{width:"20%", marginTop:"30px"}}>Watch Now!</Button>{' '}
   </div>
    </div>
   </>
    )
}

export default Picture;