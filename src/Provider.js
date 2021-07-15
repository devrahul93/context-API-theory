import { useState } from 'react'
import PackageContext from './context'

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: 'Go to Russia',
    agent: '007',
    accept: 'not accepted',
  })
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: 'ACCEPTED' })
        },
        missionRejected: () => {
          setMission({ ...mission, accept: 'Not Going Bro' })
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  )
}
export default Provider
