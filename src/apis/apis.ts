import { ConsName,Filed } from "@/types";
import request from "../utils/request";

export const getdata = (consName:ConsName , type:Filed):Promise<void> => {
    return request({
        url:`/api/constellation/getAll`,
        method:'get',
        params:{
            consName:consName,
            type:type
        }
    })
}