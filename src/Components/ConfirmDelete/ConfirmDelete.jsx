import React from 'react';

function ConfirmDelete({name, dispatch}) {
    function onDelete() {
    return dispatch({
        type: 'DELETE'
    })
    }

    function onRollback() {
        // setConfirmed(false)
        return dispatch({
            type: 'RESET'
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