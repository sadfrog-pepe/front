import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../../component/atoms/title/Title';
import Input from '../../component/atoms/input/Input';
import Btn from '../../component/atoms/button/Btn';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../modules/store/store';
import { registerUser, signupUser } from '../../modules/reducers/user';
// import { useCookies } from 'react-cookie'; // useCookies import

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    // cookie
    // const [cookies, setCookie, removeCookie] = useCookies(['id']);

    // error 메시지
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (email && password && !emailErrorMessage && !passwordErrorMessage) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [email, password, emailErrorMessage, passwordErrorMessage]);

    const onNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/; // email 형식

        if (!e.target.value || emailRegex.test(e.target.value)) {
            setEmailErrorMessage('');
        } else {
            setEmailErrorMessage('please verify your email');
        }

        setEmail(e.currentTarget.value);
    };

    const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordRegax =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // 8자이상, 영어, 숫자, 특수문자1개이상

        if (!e.target.value || passwordRegax.test(e.target.value)) {
            setPasswordErrorMessage('');
        } else {
            setPasswordErrorMessage('please verify your password');
        }
        setPassword(e.currentTarget.value);
    };

    const onPasswordCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== password) {
            setPasswordErrorMessage('please check your password');
        } else {
            setPasswordErrorMessage('');
        }
        setPasswordCheck(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let body = {
            email: email,
            password: password,
            name: userName,
        };

        dispatch(signupUser(body)).then((res) => {
            console.log(res);
            if (res.type.split('/').includes('fulfilled')) {
                navigate('/');
            } else {
                alert('이미 존재하는 email입니다.');
            }
        });
    };

    return (
        <RegisterContainer>
            <Title>Sign up</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="이름"
                    value={userName}
                    onChange={onNameHandler}
                />
                <Input
                    type="email"
                    placeholder="아이디"
                    value={email}
                    onChange={onEmailHandler}
                />
                <div style={{ color: 'red' }}> {emailErrorMessage}</div>
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={onPasswordHandler}
                />
                <Input
                    type="password"
                    placeholder="비밀번호 확인"
                    value={passwordCheck}
                    onChange={onPasswordCheckHandler}
                />
                <div style={{ color: 'red' }}> {passwordErrorMessage}</div>

                {disabled ? (
                    <Btn
                        type="submit"
                        color="white"
                        bgColor="black"
                        width="400px"
                    >
                        회원가입
                    </Btn>
                ) : (
                    <Btn
                        type="button"
                        color="white"
                        bgColor="black"
                        width="400px"
                        disabled
                    >
                        회원가입
                    </Btn>
                )}
            </Form>
        </RegisterContainer>
    );
};

export default RegisterPage;
