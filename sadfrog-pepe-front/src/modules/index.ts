import { combineReducers } from 'redux';
import counter from './counter';
import user from './user';

const rootReducer = combineReducers({
    counter,
    user,
});

export default rootReducer;

// 루트 리듀서의 반환값을 유추해 타입설정
// useSelector로 state가져올 때 지정할 타입
export type RootState = ReturnType<typeof rootReducer>;
