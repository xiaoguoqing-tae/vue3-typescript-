import { ConsName, Filed, state } from '@/types'
import {SET_CONSNAME,SET_FILED,SET_ERRORCODE,SET_DATA,SET_LOGINE} from './actionTypes'
export default {
    [SET_CONSNAME](state:state,consName:ConsName):void{
        state.consName = consName
    },
    [SET_FILED](state:state,filed:Filed):void{
        state.filed = filed
    },
    [SET_ERRORCODE](state:state,errorCode:string|number):void{
        state.errorCode = errorCode
    },
    [SET_DATA](state:state,data:Array<any>):void{
        state[state.filed] = data
    },
    [SET_LOGINE](state:state):void{
        state.login = 1
    },
}