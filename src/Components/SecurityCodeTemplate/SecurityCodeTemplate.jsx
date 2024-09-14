import React from 'react';
import './SecurityCodeTemplate.css'

function SecurityCodeTemplate({name, state, dispatch}) {
    function onCheck() {
        return dispatch({
            type: 'CHECK'
        })
    }

    function handleOnChange(e) {
        // setInputValue(e.target.value)
        return dispatch({
            type: 'WRITE',
            payload: e.target.value
        })
    }

    return (
        <div className="securityCodeTemplate flex-center flex-column">
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad.</p>

            <div className="flex-center flex-wrap">
                <input
                    placeholder="Código de seguridad"
                    value={state.inputValue}
                    onChange={(e) => handleOnChange(e)}
                />
                <button
                    disabled={state.inputValue === ''}
                    onClick={() => onCheck()}
                >Comprobar
                </button>
            </div>
        </div>
    );
}

export {SecurityCodeTemplate};