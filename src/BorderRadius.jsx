import { useEffect, useState } from "react";

function BorderRadius(){
    const [top,setTop] = useState(0);
    const [right,setRight] = useState(0);
    const [bottom,setBottom] = useState(0);
    const [left,setLeft] = useState(0);


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
        <input type="range" name="" id="top" min={0} max={100} onChange={(e) => setTop(e.target.value)} />
    
    
    
        <div className="result-box">
            <input type="range" name="" id="left" onChange={(e) => setLeft(e.target.value)} />
            <div className="result" style={{borderRadius:`${top}% ${right}% ${bottom}% ${left}%`}}>
                <span id="toCopy">{'{'} border-radius: {top}% {right}% {bottom}% {left}% ;{'}'}</span><sub><button className="copy-button" onClick={copyToClipboard}>📋</button></sub>
            </div>
            <input type="range" name="" id="right" onChange={(e) => setRight(e.target.value)} />
        </div>
        <input type="range" name="" id="bottom" onChange={(e) => setBottom(e.target.value)} />
    
    </>)
}

export default BorderRadius;