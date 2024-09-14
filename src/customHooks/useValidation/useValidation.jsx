import React, {useEffect, useState} from 'react';

function useValidation({SECURITY_CODE}) {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    function onConfirm() {
        setConfirmed(true)
    }

    function onError() {
        setError(true)
    }


    useEffect(() => {
        console.log("Empezando el Efecto")

        if (!!loading) {
            setError(false)

            setTimeout(() => {
                console.log('Haciendo la Validacion')


                if (inputValue !== SECURITY_CODE) {
                    onError()
                } else {
                    onConfirm()
                }

                setLoading(false)


                console.log('Terminando la Validacion')
            }, 1500)
        }

        console.log("Terminando el Efecto")

        return () => {
            console.log('Desmontando useEffect')
        }
    }, [loading]);

    return {
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
    };
}

export {useValidation};