import React from 'react';
import {useValidation} from "./customHooks/useValidation/useValidation.jsx";

const SECURITY_CODE = 'paradigma'

function UseState(props) {

    const NAME = props.name

    const {
        inputValue,
        setInputValue,
        error,
        setError,
        loading,
        setLoading,
        deleted,
        setDeleted,
        confirmed,
        setConfirmed
    } = useValidation({SECURITY_CODE})

    return (
        <>
            {(!confirmed && !deleted) && props.render({
                name: NAME,
                error,
                setError,
                loading,
                setLoading,
                inputValue,
                setInputValue,
            })}

            {(error && !loading) && (props.onError({
                msg: 'Error: el codigo es incorrecto'
            }))}

            {loading && props.onLoading()}

            {(!!confirmed && !deleted) && props.onConfirmDelete({
                name: NAME,
                setConfirmed,
                setDeleted
            })}

            {(!confirmed && !!deleted) && props.onRecoverDelete({
                name: NAME,
                setConfirmed,
                setDeleted
            })}
        </>
    );
}

export {UseState};