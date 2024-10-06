import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  let highlightLink =(obj)=>{
    console.log(obj);
    if(obj.isActive===true){
      return {backgroundColor:"green", color:"white"};

     } }

  return (
    <nav>
        <NavLink style={(obj)=>{
          return highlightLink(obj);
          }} to="/homeboard">HomeBoard</NavLink>

        <NavLink  style={(obj)=>{
          return highlightLink(obj);
          }}  to="/flower">Flower</NavLink>

        <NavLink style={(obj)=>{
          return highlightLink(obj);
          }}  to="/fruits">Fruits</NavLink>

        <NavLink style={(obj)=>{
          return highlightLink(obj);
          }}  to="/animals">Animals</NavLink>
          
        <NavLink to="/">Signout</NavLink>
      
    </nav>
  )
}

export default TopNavigation
