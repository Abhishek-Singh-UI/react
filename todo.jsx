import { useState } from 'react';
function Todo() {
    const [ newitem,setnewitem] = useState();
    function handlesubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <form className="todo-form App">
                <label htmlFor='input-box'>text area to fill</label>
                <input type="text" className="inp-box" id="input-box" value={newitem} onChange={e => setnewitem(e.target.value)}></input>
                <button type="button" className="btn btn-primary" onClick={() => {
                    setnewitem(newitem)
                }} >Add</button>
            </form >
            <ul className='input-area'>
                <li>
                    <label>
                        <input type="checkbox"></input>
                        item 1
                    </label>
                    <button type="button" id='delete-btn'>delete</button>
                </li>
                <li>
                    <label>
                        <input type="checkbox"></input>
                        item 2
                    </label>
                    <button type="button" id='delete-btn'>delete</button>
                </li>
            </ul>
        </>
    );
}

export default Todo;
