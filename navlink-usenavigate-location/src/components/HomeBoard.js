import React from 'react'
import TopNavigation from './TopNavigation'
import { useLocation } from 'react-router-dom'

function HomeBoard() {
  let locObj=useLocation();
  return (
    <div>
        <TopNavigation/>
        <h1>Home Board</h1>
        <h2>{locObj&&locObj.state&&locObj.state.msg?
        locObj.state.msg:"No data passed to display here"}</h2>
      
    </div>
  )
}

export default HomeBoard

