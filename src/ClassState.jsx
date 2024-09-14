import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SecurityCodeTemplate} from "./Components/SecurityCodeTemplate/SecurityCodeTemplate.jsx";
import {Loading} from "./Components/Loading/Loading.jsx";

const SECURITY_CODE = 'paradigma'

class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            error: false,
            loading: false,
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update')

        if (!!this.state.loading){
            // this.setState({error: false})

            setTimeout(() => {
                console.log('Haciendo la Validacion')

                if (SECURITY_CODE === this.state.inputValue) {

                this.setState({loading: false})

                } else {
                    this.setState({
                        error: true,
                        loading:false
                    })
                }


                console.log('Terminando la Validacion')
            }, 1500)
        }
    }

    render() {
        const {name, render} = this.props
        const {error, loading, inputValue} = this.state

        return (
            <>
                <div className="securityCodeTemplate flex-center flex-column">
                    <h2>Eliminar {name}</h2>
                    <p>Por favor, escribe el código de seguridad.</p>

                    <div className="flex-center flex-wrap">
                        <input
                            placeholder="Código de seguridad"
                            value={this.state.inputValue}
                            onChange={(e) => this.setState({
                                inputValue: e.target.value
                            })}
                        />
                        <button
                            onClick={() => this.setState({
                                error: !error,
                                loading: true
                            })}
                        >Comprobar
                        </button>
                    </div>
                </div>
                {(error && !loading) && <p>Error: el codigo es incorrecto</p>}
                {loading && <Loading/>}
            </>
        );
    }
}

ClassState.propTypes = {};

export {ClassState};
