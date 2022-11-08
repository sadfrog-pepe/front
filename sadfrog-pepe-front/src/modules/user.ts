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

    const responce = axiosInstance.post(
        requests.register,
        JSON.stringify(body),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    const data = responce.then((res) => res.data);
    console.log(data);

    return {
        type: USERREGISTER,
        payload: data,
    };
};

// 액션객체에 대한 타입
type UserAction =
    | ReturnType<typeof userLogin>
    | ReturnType<typeof userRegister>;

interface userData {
    email: string;
    password: string;
    name: string;
}

type loginData = Omit<userData, 'name'>;

// 상태의 타입
interface UserState<T extends userData> {
    users: T[]; // 일단 간략하게
}

const initialState: UserState<userData> = {
    users: [],
};

// 리듀서
const user = (
    state: UserState<userData> = initialState,
    action: UserAction
) => {
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
