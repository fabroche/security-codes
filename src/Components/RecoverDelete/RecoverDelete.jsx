import React from 'react';

function RecoverDelete({name, dispatch}) {
    function onUndoDelete() {
        // setConfirmed(false);
        // setDeleted(false);
        dispatch({
            type: 'RESET'
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