import React, { useEffect } from "react";
import copy from "copy-to-clipboard";
import { useState } from "react";
export default function useCopyToClipboard (resetInterval=null){
const [isCopied,setCopied]=useState(false)
function handleCopy (text){
    if(typeof text === "string" || typeof text ==="number"){
        copy(text.toString());
        setCopied(true)

    }else{
        setCopied(false)
        console.error(
            `Can't copy data of type ${typeof text} to clipboard,it should be string or number.`
        );
    }

}

useEffect(()=>{
    let timeout;
    if(isCopied&&resetInterval){
        timeout=setTimeout(()=>setCopied(false),resetInterval)
    }
    return()=>{
        clearTimeout(timeout)
    };
    


},[isCopied,resetInterval])
return [isCopied,handleCopy];


}