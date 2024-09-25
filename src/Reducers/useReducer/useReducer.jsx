import React, {useEffect, useReducer} from 'react';
import {initialState, actionTypes, reducer} from "./reducer.js";


const SECURITY_CODE = 'paradigma'

function UseReducer(props) {

    const NAME = props.name

    const [state, dispatch] = useReducer(reducer, initialState);

    function onConfirm() {
        dispatch({
            type: actionTypes.confirm
        })
    }

    function onError() {
        dispatch({
            type: actionTypes.error
        })
    }


    useEffect(() => {
        console.log("Empezando el Efecto")

        if (!!state.loading) {
            // setError(false)

            setTimeout(() => {
                console.log('Haciendo la Validacion')


                if (state.inputValue !== SECURITY_CODE) {
                    onError()
                } else {
                    onConfirm()
                }

                // setLoading(false)

                console.log('Terminando la Validacion')
            }, 1500)
        }

        console.log("Terminando el Efecto")

        return () => {
            console.log('Desmontando useEffect')
        }
    }, [state.loading]);

    return (
        <>
            {(!state.confirmed && !state.deleted) && props.render({
                name: NAME,
                state,
                dispatch
            })}

            {(state.error && !state.loading) && (props.onError({
                msg: 'Error: el codigo es incorrecto'
            }))}

            {state.loading && props.onLoading()}

            {(!!state.confirmed && !state.deleted) && props.onConfirmDelete({
                name: NAME,
                dispatch
            })}

            {(!state.confirmed && !!state.deleted) && props.onRecoverDelete({
                name: NAME,
                dispatch
            })}
        </>
    );
}




export {UseReducer};
