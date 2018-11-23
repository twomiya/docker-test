import {fakeSubmitForm} from '@/services/user'
import router from 'umi/router'
// import jwt_decode from 'jwt-decode';
export default{
    namespace: 'user',
    state: {
        jwt:''
    },
    reducers: {
        'login/success'(state,action){
            return{
                ...state,
                jwt:action.jwt
            }
        }
    },
    effects: {
        *login({payload},{call,put}){
            const res = yield call(fakeSubmitForm,payload);
            console.log(res.result.jwt)
            localStorage.setItem('token',res.result.jwt)
            // console.log(jwt_decode(res.result.jwtt))
            router.push('/dashboard')
            yield put ({type:'login/success',jwt:res.result.jwt})
        }
    }
}