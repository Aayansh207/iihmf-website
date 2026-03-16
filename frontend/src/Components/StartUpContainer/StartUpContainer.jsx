import React, { useState } from 'react'
import './StartUpContainer.css'
import { LiaAngleDownSolid } from "react-icons/lia";

const StartUpContainer = (props) => {
    const[isActive,setActive]=useState(false);
  return (
    <div className='startup-container'>
        <div className="startup-container-left">
            <a href={props.link} target='_blank'><h4>{props.head}</h4></a>
            <p>{props.founder_name}</p>
            <p>{props.core_area}</p>
            <p>{props.areas}</p>
            <button onClick={()=>{setActive(!isActive)}}>More <LiaAngleDownSolid /></button>
            <div className={`startup-desc ${isActive? 
            'active-desc' : ''
            }`}>
                <p>{props.desc}</p>
            </div>
        </div>
        <div className="startup-container-right">
            <a href={props.link} target='_blank'><img src={props.img} alt="" /></a>
        </div>
        
    </div>
  )
}


export default StartUpContainer
