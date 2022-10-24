import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input, {
    InputType,
    InputDefaultValue,
} from '../../component/atoms/input/Input';
import Button, {
    ButtonType,
    ButtonTheme,
    ButtonSize,
} from '../../component/atoms/button/Button';
import Title from '../../component/atoms/title/Title';

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
            <Title>Login</Title>
            <Form onSubmit={onSubmitHandler}>
                <Input
                    type={InputType.TEXT}
                    placeholder={InputDefaultValue.ID}
                    value={email}
                    onChange={onEmailHandler}
                />
                <Input
                    type={InputType.PASSWORD}
                    placeholder={InputDefaultValue.PASSWORD}
                    value={password}
                    onChange={onPasswordHandler}
                />

                <div style={{ color: 'red' }}> {errorMessage}</div>

                {disabled ? (
                    <Button
                        type={ButtonType.SUBMIT}
                        theme={ButtonTheme.DEFAULT}
                        className="black w-400"
                    >
                        로그인
                    </Button>
                ) : (
                    <div>nope</div>
                )}
            </Form>
        </LoginContainer>
    );
};

export default LoginPage;
