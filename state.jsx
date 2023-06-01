import { useState } from 'react';

function State() {
    const [theme , settheme] = useState("white");
    if(theme === "black")
    {
     var p_color = "white";
    }
    function setcookie(name,value) {
        document.cookie =  name + "=" + value + ";" + "expires=Thu, 01 Jan 2970 00:00:00 UTC";
    }
    function getCookie(name) {
        var cname = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        var cvalue = ca[0].split('=');
        console.log(cvalue[1]);
        // for(var i = 0; i < ca.length ; i++) {
        //     var c = ca[i];
        //     while(c.charAt(0) == ' '){
        //         c = c.substring(1);
        //     }
        //     if(c.indexOf(cname) == 0){
        //         return c.substring(cname.length, c.length);
        //     }
        // }

        
        return "";
    }
    setcookie("theme",{theme});
    // var user = getCookie("theme");
    console.log(typeof document.cookie); 
  
    return (
        <div className='wrapper' style={{ background : theme}}>
        <p style = {{color : p_color }} >Just click on the below buttons to switch to Light / Dark theme.</p>
        <button style={{ color: p_color , background : theme}} className="light-btn" onClick={() => {
          settheme("white");
        }}>Light </button>
        <button style={{ color : p_color , background : theme}}   className="dark-btn" onClick={() => {
          settheme("black");
        }}> Dark </button>
      </div>
    );
}
export default State;