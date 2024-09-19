import { useEffect, useState } from "react";
import React  from "react";

function Hast(){

const[value,setValue]=useState("")
const[update,setUpdate]=useState([])
const[filter,setFilter]=useState("")

const hest=()=>{
    setUpdate([...update,{value}])
    setValue("")
}


   const handlerDelet=()=>{
        const filtered=update.map((item)=>
            (item.value !==filter))
            setUpdate(filtered)
            setFilter("")
}

    return(
        <div>
            <h1>
                jyothi
                <input   onChange={(e)=>setValue(e.target.value)}   />
                <button     onClick={hest} >onclick</button>
                {update.map((item,index)=><li>
                      {item.value}
                      <button  onClick={handlerDelet}>delete</button>
                </li>)}

            </h1>
        </div>
    );
}

export default Hast;