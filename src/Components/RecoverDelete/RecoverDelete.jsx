import React from 'react';
import {actionTypes} from "../../Reducers/useReducer/reducer.js";

function RecoverDelete({name, dispatch}) {
    function onUndoDelete() {
        dispatch({
            type: actionTypes.reset
        })
    }

    return (
        <>
            <h2>{name} fue eliminado exitosamente</h2>
            <button
                onClick={() => onUndoDelete()}
            >Recuperar {name}</button>
        </>
    );
}

export {RecoverDelete};