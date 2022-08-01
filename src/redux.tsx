import { configureStore } from '@reduxjs/toolkit'
import type { Reducer } from '@reduxjs/toolkit'

type item = { id:number, url:string, description: string }

export interface Istore { type?:string, link?:string, loggedIn?:boolean, value?:number, item?:item }

interface Ireducer { reducer: Reducer<{}> }

const initialState : Istore = { loggedIn:false, link:'', value:0 }

function rootReducer(state : Istore = initialState, action : Istore){
  switch(action.type){
  case 'login':
    return { ...state, loggedIn:true, link:action.link }
  case 'logout':
    return { ...state, loggedIn:false, link:'/login', value:action.value }
  case 'updateLink':
    return { ...state, link: action.link, value:action.value }
  case 'viewMore':
      return { ...state, link: action.link, value:action.value, item:action.item }
  default: return state
  }
};

const reducer : Ireducer = { reducer : rootReducer }
export const store = configureStore(reducer)