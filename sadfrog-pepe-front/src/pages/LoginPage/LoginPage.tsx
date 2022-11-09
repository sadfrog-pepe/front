import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../component/atoms/input/Input';
import Title from '../../component/atoms/title/Title';
import Btn from '../../component/atoms/button/Btn';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(false); // 로그인 가능여부
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (email && password && !errorMessage) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [email, password, errorMessage]);

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`id : ${email}`);
        console.log(`password : ${password}`);
    };

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

        if (!e.target.value || emailRegex.test(e.target.value)) {
            setErrorMessage('');
        } else {
            setErrorMessage('please verify your email');
        }

        setEmail(e.currentTarget.value);
    };

    const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    return (
        <LoginContainer>
            <Title>Sign in</Title>
            <Form onSubmit={onSubmitHandler}>
                <Input
                    type="text"
                    placeholder="아이디"
                    value={email}
                    onChange={onEmailHandler}
                />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={onPasswordHandler}
                />

                <div style={{ color: 'red' }}> {errorMessage}</div>

                {disabled ? (
                    <Btn
                        type="submit"
                        color="white"
                        bgColor="black"
                        width="400px"
                    >
                        로그인
                    </Btn>
                ) : (
                    <Btn
                        type="button"
                        color="white"
                        bgColor="black"
                        width="400px"
                        disabled
                    >
                        로그인
                    </Btn>
                )}
            </Form>
        </LoginContainer>
    );
};

export default LoginPage;
