import { useState } from "react";

function Demo() {
    const [count,setcount] = useState();
    return(
        <>
        <input value = {count} />
        <button> Add </button>
        </>
    );
}
export default Demo;