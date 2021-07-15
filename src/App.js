import React, { Fragment } from 'react'
import Provider from './Provider'
import Context from './context'

const Agents = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name:{context.data.mname}</p>
          <h1>Mission Status:{context.data.accept}</h1>
          <button onClick={context.isMissionAccepted}>Choose to start</button>
          <button onClick={context.missionRejected}>Choose to Reject</button>
        </Fragment>
      )}
    </Context.Consumer>
  )
}

const App = () => {
  return (
    <>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </>
  )
}

export default App
