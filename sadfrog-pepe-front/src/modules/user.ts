import axios from 'axios';

const USERLOGIN = 'user/USERLOGIN' as const;
const USERREGISTER = 'user/USERREGISTER' as const;
export const userLogin = (body: loginData) => {
    // axios 통신

    return {
        type: USERLOGIN,
        payload: '',
    };
};
export const userRegister = (body: userData) => {
    //axios 통신

    const responce = axios.post(
        'http://localhost:4000/users',
        JSON.stringify(body),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    const data = responce.then((res) => res.data);

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
    id: string;
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

        default:
            return state;
    }
};

export default user;
