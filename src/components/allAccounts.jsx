import React from 'react'
import "./allAccounts.css"
import data from "../data/account.json"
import List from "./accountlist"


const allAccounts = () => {

  return (
    <div className='container'>
      <div className='list'>
        <div>
          <img className='containerimg' src="profile pic.png" alt="" />
        </div>
        <h2>razakhokher269@gmail.com</h2>
        {data.map((curElem)=>(
          <List key={curElem.id} curElem={curElem}/>
        ))}
      </div>
    </div>
  )
}

export default allAccounts;