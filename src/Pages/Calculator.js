import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
   
    const [str, setstr] = useState('')
    let handleclick = (event) =>{
            console.log(event) 
            let temp = str + event
            setstr(temp)
    } 

    let result = () => {
        setstr(eval(str))
    } 
    let clrdata = ()=>{
        setstr('')
    }

    let handleBackspace = () => {
        setstr(str.slice(0, -1));
      };

  return (
    <>
    <div class="titlecalc">
        Calculator
    </div><br/>
    <div class="calculator">
    <input type='text' value={str}/>
    <input type="button" value="7" onClick={()=>handleclick('7')} />
    <input type="button" value="8" onClick={()=>handleclick('8')} />
    <input type="button" value="9" onClick={()=>handleclick('9')} />
    <input type="button" value="/" onClick={()=>handleclick('/')} />
    <br/>
    <input type="button" value="4" onClick={()=>handleclick('4')} />
    <input type="button" value="5" onClick={()=>handleclick('5')} />
    <input type="button" value="6" onClick={()=>handleclick('6')} />
    <input type="button" value="*" onClick={()=>handleclick('*')} />
    <br/>
    <input type="button" value="1" onClick={()=>handleclick('1')} />
    <input type="button" value="2" onClick={()=>handleclick('2')} />
    <input type="button" value="3" onClick={()=>handleclick('3')} />
    <input type="button" value="-" onClick={()=>handleclick('-')} />
    <br/>
    
    <input type="button" value="." onClick={()=>handleclick('.')} />
    <input type="button" value="0" onClick={()=>handleclick('0')} />
      
    
    <input type="button" value="=" onClick={result} />
    <input type="button" value="+" onClick={()=>handleclick('+')} />
    <input type="button" value="CE" onClick={handleBackspace} /> 
    <input type="button" value="C" onClick={clrdata} />
    

    <br/>
   
</div>

    </>
  )
}
