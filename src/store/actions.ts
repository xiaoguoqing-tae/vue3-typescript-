import {state,ConsName,Filed} from '../types/index'
import { Commit } from 'vuex';
import {SET_CONSNAME,SET_FILED,SET_ERRORCODE,SET_DATA,SET_LOGINE} from './actionTypes'
interface ICtx {
    commit: Commit,
    state: state
}
export default{
    [SET_CONSNAME]({ commit }: ICtx, consName: ConsName):void{
        commit(SET_CONSNAME,consName)
    },
    [SET_FILED]({ commit }: ICtx, filed: Filed):void{
        commit(SET_FILED,filed)
    },
    [SET_ERRORCODE]({ commit }: ICtx, errorCode: number|string):void{
        commit(SET_ERRORCODE,errorCode)
    },
    [SET_DATA]({ commit }: ICtx, data: Array<any>):void{
        commit(SET_DATA,data)
    },
    [SET_LOGINE]({ commit }: ICtx):void{
        commit(SET_LOGINE,1)
    },

}