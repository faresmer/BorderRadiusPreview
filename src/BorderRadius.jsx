import { useState } from "react";

function BorderRadius(){
    const [top,setTop] = useState(0);
    const [right,setRight] = useState(0);
    const [bottom,setBottom] = useState(0);
    const [left,setLeft] = useState(0);

    function getResult(){
        if(!isNaN(parseInt(document.getElementById('right').value))&&
         !isNaN(parseInt(document.getElementById('left').value))&&
       !isNaN(parseInt(document.getElementById('bottom').value))&&
       ! isNaN(parseInt(document.getElementById('top').value))){
            setRight(parseInt(document.getElementById('right').value));
            setBottom(parseInt(document.getElementById('bottom').value));
            setTop(parseInt(document.getElementById('top').value));
            setLeft(parseInt(document.getElementById('left').value));
            document.getElementById('right').value="";
            document.getElementById('bottom').value="";
            document.getElementById('top').value="";
            document.getElementById('left').value="";
        }else{
            alert('Insert something that is a number!')
        }
        
    }

    function copyToClipboard(){
        const txt = document.getElementById('toCopy').innerHTML;
        navigator.clipboard.writeText(txt)
        .then(() => {
            alert('Copied to Clipboard!')
        })
        .catch((err) =>{
            console.log('Failed to copy: ',err);
        })
    }

    


    return(<>
    <h2>Enter the values of border radius </h2>
    <div>
        <label htmlFor="top">top </label>
        <input type="text" id="top" />
    </div>
    

    <div>
        <label htmlFor="right">right </label>
        <input type="text" id="right" />
    </div>

    <div>
        <label htmlFor="bottom">bottom </label>
        <input type="text" id="bottom" />
    </div>

    <div>
        <label htmlFor="left">left </label>
        <input type="text" id="left" />
    </div>

    
    <button className="get-button" onClick={getResult}>GET</button>
    <div className="result" style={{borderRadius:`${top}px ${right}px ${bottom}px ${left}px`}}>
        <span id="toCopy">{'{'} border-radius: {top}px {right}px {bottom}px {left}px ;{'}'}</span><sub><button className="copy-button" onClick={copyToClipboard}>📋</button></sub>
    </div>
    </>)
}

export default BorderRadius;