import React from "react"
import "./Subheader.css"
import {useEffect} from "react";
export default function Subheader(){
  
    useEffect(()=> {
        let subheader=document.querySelector(".subheader");
        let child_of_subheader=subheader.children;
        for(let i=0;i<child_of_subheader.length;i++){
            child_of_subheader[i].addEventListener("mouseover",(e)=>{
                 child_of_subheader[i].style.border="1px solid white"
             })
             child_of_subheader[i].addEventListener("mouseout",(e)=>{
                 child_of_subheader[i].style.border="none"
             })
            }
    }  
        , [])
return(
    <div className="subheader" >
       
        <div>All</div>     
        <div>Mixes</div>
        <div>Music</div>
        <div>One Direction</div>
        <div>Computer Programming</div>
        <div>Live</div>     
        <div >Play List</div>
        <div >Chill out Music</div>
        <div >Songs</div>
        <div >Gaming</div>
        <div>Motivation</div>
        <div>CSS</div>
        <div>News</div>
        <div>Animated Flims</div>        
    </div>

    );

}
