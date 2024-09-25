import React from 'react';
import {actionTypes} from "../../Reducers/useReducer/reducer.js";

function ConfirmDelete({name, dispatch}) {
    function onDelete() {
    return dispatch({
        type: actionTypes.delete
    })
    }

    function onRollback() {
        return dispatch({
            type: actionTypes.reset
        })
    }

    return (
        <>
            <h2>Eliminar {name}</h2>
            <p>¿Seguro que quieres eliminar {name}?</p>
            <div className="flex-center">
                <button
                    onClick={() => onDelete()}
                >Sí, eliminar
                </button>
                <button
                    onClick={() => onRollback()}
                >No, Volver
                </button>
            </div>
        </>
    );
}

export {ConfirmDelete};