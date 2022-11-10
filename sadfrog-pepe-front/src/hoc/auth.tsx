import React, { useEffect } from 'react';
import { useAppDispatch } from '../modules/store/store';
import { auth } from '../modules/reducers/user';
import { Cookies } from 'react-cookie';

type optionProps = null | true | false;

// null => 아무나 출입 가능
// true => 로그인한 유저만 출입 가능
// false => 로그인한 유저는 출입 불가능

export default function Auth(
    SpecificComponent: React.ComponentType,
    option: optionProps,
    admin = null
) {
    function AuthenticationCheck<P extends {}>(props: P) {
        const dispatch = useAppDispatch();
        useEffect(() => {
            dispatch(auth()).then((res) => {
                //
                console.log(res);
            });
        });

        return <SpecificComponent {...props} />;
    }

    return AuthenticationCheck;
}
