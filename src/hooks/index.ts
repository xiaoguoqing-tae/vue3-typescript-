import { SET_CONSNAME, SET_FILED,SET_ERRORCODE,SET_DATA,SET_LOGINE } from '@/store/actionTypes'
import { useStore,Store } from 'vuex'
import { ConsName,Filed, state } from '../types/index'
import { computed, ref , onMounted , onActivated} from 'vue'
import { getdata } from '../apis/apis'

interface IUseSet{
    setConsName:(consName:ConsName)=>void;
    setFiled:(filed:Filed)=>void;
    setErrorCode:(errorCode:string|number)=>void;
    setData:(data:Array<any>)=>void;
    setLogin:()=>void;
    getApiData:()=>void;
}
interface IuseInit{
    pageData:any;
    getData:()=>void;
    ActivatedFunc:()=>void;
}

export function UseSet():IUseSet {
    const store:Store<any> = useStore()
    function setConsName(consName:ConsName) {
        store.dispatch(SET_CONSNAME,consName)
    }
    function setFiled(filed:Filed){
        store.dispatch(SET_FILED,filed)
    }
    function setErrorCode(errorCode:string|number){
        store.dispatch(SET_ERRORCODE,errorCode)
    }
    function setData(data:Array<any>){
        store.dispatch(SET_DATA,data)
    }
    function setLogin(){
        store.dispatch(SET_LOGINE)
    }
    async function getApiData(){
        const consName = store.state.consName,
        filed = store.state.filed,
        data:any = await getdata(consName, filed)
        console.log(data)
        if (data.error_code) {
            setErrorCode(data.error_code)
            return
        }
        setData(data)
    }
    return{
        setConsName,
        setFiled,
        setErrorCode,
        setData,
        setLogin,
        getApiData
    }
}

export function UseInit(type:Filed):IuseInit{
    const {getApiData} = UseSet()
    const store:Store<any> = useStore(),
          state:state = store.state,
          status = ref(''),
          pageData = computed(() => state[type])
    function getData(){
        onMounted(()=>{
            getApiData()
        })
    }
    function ActivatedFunc(){
        onActivated(()=>{
            if (status.value !== state.consName) {
                getApiData()
                status.value = state.consName
            }
        })
    }
    return{
        pageData,
        getData,
        ActivatedFunc
    }
}
