import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UseState} from './UseState.jsx'
import {ClassState} from './ClassState.jsx'
import {Layout} from "./Components/Layout/Layout.jsx";
import {SecurityCodeTemplate} from "./Components/SecurityCodeTemplate/SecurityCodeTemplate.jsx";
import {Loading} from "./Components/Loading/Loading.jsx";
import {Error} from "./Components/Error/Error.jsx";
import {ConfirmDelete} from "./Components/ConfirmDelete/ConfirmDelete.jsx";
import {RecoverDelete} from "./Components/RecoverDelete/RecoverDelete.jsx";
import {UseReducer} from "./Reducers/useReducer/useReducer.jsx";


function App() {

  return (
     <Layout>
            <UseReducer
                name={'UseReducer'}
                onLoading={() => <Loading/>}
                onError={({...props}) => <Error {...props}/>}
                onConfirmDelete={({...props}) => <ConfirmDelete {...props}/>}
                onRecoverDelete={({...props}) => <RecoverDelete {...props}/>}
                render={({...props}) => <SecurityCodeTemplate {...props}/>}
            />

            {/*<ClassState*/}
            {/*    name={'ClassState'}*/}
            {/*/>*/}
     </Layout>
  )
}

export default App
