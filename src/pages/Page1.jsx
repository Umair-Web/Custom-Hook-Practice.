import React, { useState } from 'react'
import { FaClipboardList } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import useCopyToClipboard from '../utils/useCopyToClipboard';
const Page1 = () => {
    const [isCopied,handleCopy]=useCopyToClipboard(4000);
    console.log(isCopied)
    

    const[text,settext]=useState(null)
  return (
    <div>
         <textarea onChange={(e)=>settext(e.target.value)}></textarea>
         <button onClick={()=>handleCopy(text)} >{isCopied? <FaClipboardCheck size={20}/>:<FaClipboardList size={20}/>}</button>
    </div>
   
  )
}

export default Page1