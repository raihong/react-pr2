import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20},
    reducers : {
      changeName(state){
        state.name = 'park'
      },
      // state 변경함수를 action이라고 많이해서 action을 많이씀
      increase(state, action){
        state.age += action.payload
      }
    }
  })

  
export let {changeName, increase} = user.actions

  export default user;