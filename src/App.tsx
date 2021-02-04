import React from 'react'
import './styles/App.scss'
import FormUsingFormik from './components/FormUsingFormik'
import FormUsingHookForms from './components/FormUsingHookForm'

const App = () => {

  return (
    <div>
      <FormUsingHookForms />
      {/*<FormUsingFormik />*/}
    </div>
  )
}

export default App