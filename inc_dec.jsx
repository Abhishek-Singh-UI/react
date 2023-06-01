// button for increment and decrement
import { useState } from 'react';
function Inc_dec_btn() {
    const [count,setcount] = useState(0);
    return(
        <>
        <button onClick={() =>{
        setcount(count - 1);
        }}>-</button>
        <span> {count === 0 ? "null element" : `supported ${count} times`}</span>
        <button onClick={ () => {
        setcount(count + 1);
        }}>+</button>
        </>
    );
}
export default Inc_dec_btn;