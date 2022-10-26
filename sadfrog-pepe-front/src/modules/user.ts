const USERLOGIN = 'user/USERLOGIN' as const;
const USERREGISTER = 'user/USERREGISTER' as const;

export const userLogin = () => {
    // axios 통신

    return {
        type: USERLOGIN,
        payload: '',
    };
};
export const userRegister = () => {
    //axios 통신

    return {
        type: USERREGISTER,
        payload: '',
    };
};

// 액션객체에 대한 타입
type UserAction =
    | ReturnType<typeof userLogin>
    | ReturnType<typeof userRegister>;

interface UserState<T extends { id: string; password: number }> {
    user: T; // 일단 간략하게
}

const initialState: UserState<{ id: string; password: number }> = {
    user: { id: '', password: 0 },
};

// 리듀서
const user = (
    state: UserState<{ id: string; password: number }> = initialState,
    action: UserAction
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default user;
