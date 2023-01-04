import React from "react"
import "./Header.css"
export default function Header(){
return(
<div className ="header">
        <div className="section1">
            <div><i className="fa fa-bars"></i></div>
            <div className="logo">
                <img src="Images\download.png" alt="youtube-logo"/>
            </div>
            <div className="Location-content">
                    <div>India</div>
            </div>
        </div>
       <div className="section2" >
            <div className="searchbox"> 
                <input type="text" name="search" placeholder="Search" id='search-text-input' ></input>&nbsp;&nbsp;
                <i class ="fa fa-search search-ico"></i> &nbsp;&nbsp;&nbsp;&nbsp;
                 <i class="fa fa-microphone microphone-ico"></i>
            </div>
        </div>       
        
       <div className="section3" >
         
            <img src="Images\video.png" alt="youtube-logo"/>
            <i class ="fa fa-bell"></i>
            <div className="Signin">
            <button>Sign In</button>
          </div>
         </div>
        </div>
    

);
}

