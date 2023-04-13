import {useState} from 'react'
import myStore from '../redux/Store'

export default function Inputcomp() {
    const [state, setState] = useState("")
    const calldispatch = ()=>{
        myStore.dispatch({
            type:"name",
            username: state
        })
    }
  return (
    <div style={{marginTop:"4rem"}}>
      <input type='text' value={state} onChange={(e)=>{setState(e.target.value)}}></input>
      <button onClick={calldispatch}>Search</button>
    </div>
  )
}
