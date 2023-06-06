import { useState, useEffect } from 'react';
function callfunc() {
     t = new Date();
    return t;
  }
function Time(){
    const[ change, changetime ] = useState();
//    let t = new Date();
  callfunc();
    useEffect(() => {
        // changetime(t.getHours());
        // changetime(t.getMinutes());
    setInterval(() => {   changetime(t.getSeconds())
        console.log("hello")},1000)
     
    })

    return(
    <>
        <p>Time : {change} </p>
    </>

    )
}
export default Time;
