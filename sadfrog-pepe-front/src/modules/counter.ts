// 액션 타입
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액선 생성함수

export const increase = () => ({
    type: INCREASE,
});

export const decrease = () => ({
    type: DECREASE,
});

export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff, // 더할 값
});

// 액션 객체에 대한 타입
type CounterAction =
    | ReturnType<typeof increase> // 함수의 반환값을 추론
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

// 상태에 대한 타입
type CounterState = {
    count: number;
};

// 초기상태 선언
const initialState: CounterState = {
    count: 0,
};

// 리듀서
function counter(
    state: CounterState = initialState,
    action: CounterAction
): CounterState {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counter;
