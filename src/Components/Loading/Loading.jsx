import React, {Component} from 'react'

class Loading extends Component {

    componentWillUnmount() {
        console.log('Loading Component Will Unmount')
    }

    render() {
        return (
            <p>Loading...</p>
        )
    }
}

export {Loading}