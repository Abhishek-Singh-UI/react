import { useState , useEffect } from 'react';
function Effect() {

const [effect,change_effect] = useState("posts");
useEffect(() => {
    console.log("use effect running");
})

return(
    <>  
        <button onClick={() => {change_effect("posts")}}>posts</button>
        <button onClick={() => {change_effect("comments")}}>comments</button>
        <button onClick={() => {change_effect("exit")}}>exit</button>
        <p>{effect}</p>
    </>
);
}
export default Effect;