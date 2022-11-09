import axiosInstance from '../api/axios';
import requests from '../api/request';

const USERLOGIN = 'user/USERLOGIN' as const;
const USERREGISTER = 'user/USERREGISTER' as const;

export const userLogin = (body: loginData) => {
    // axios 통신

    // const responce = axiosInstance
    //     .post('http://localhost:3000/login', JSON.stringify(body), {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then((res) => res.data);

    return {
        type: USERLOGIN,
        payload: '',
    };
};
export const userRegister = (body: userData) => {
    //axios 통신
    const responce = axiosInstance
        .post(requests.register, JSON.stringify(body))
        .then((res) => res.messege);

    console.log(responce);

    return {
        type: USERREGISTER,
        payload: responce,
    };
};

// 액션객체에 대한 타입
type UserAction =
    | ReturnType<typeof userLogin>
    | ReturnType<typeof userRegister>;

export interface userData {
    email: string;
    password: string;
    name: string;
}

type loginData = Omit<userData, 'name'>;

// 상태의 타입
export type UsersState = userData[];
// 초기 상태
const initialState: UsersState = [];

// 리듀서
const user = (state: UsersState = initialState, action: UserAction) => {
    switch (action.type) {
        case USERREGISTER:
            return { ...state, users: action.payload };

        case USERLOGIN:
            return { ...state };
        default:
            return state;
    }
};

export default user;
