import React from 'react'
import Redirect from 'umi/redirect'
import {isLogin} from '../utils/login'
const Auth =({children})=>{
    if(isLogin()){
        return(
            <div>{children}</div>
        )
    }else{
        return(
           <Redirect to='/user/login'/> 
        )
    }
}
export default Auth