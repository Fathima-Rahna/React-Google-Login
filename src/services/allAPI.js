//register api-called by component Auth

import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

export  const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}



//login-api called by component auth
export  const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}