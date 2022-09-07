import { useState } from 'react';
import ModalAction from "./ModalAction";

function Todo(props) {
    // Custom ReactJS elements must start with a capital letter so ReactJS can find custom elements
    
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function delete_click(){
        // alert( `You are killing ${ props.title}` );
        setModalIsOpen(true);
    }
    
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button type="button" 
                        className="btn"
                        onClick={ delete_click }>Delete</button>
            </div>
        </div>
    );
}

export default Todo;