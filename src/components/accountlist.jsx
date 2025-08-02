import React from 'react'
import "./allAccounts.css"

const accountlist = ({curElem}) => {

    const {title,img_url,link} = curElem

  return (

    <a href={link} target='_main'>
        <div className='account'>
        <img src={img_url} alt="" />
        <p>{title}</p>
    </div>
    </a>
  )
}

export default accountlist;