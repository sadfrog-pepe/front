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
    row-gap: 3rem;
`;

const InputContainer = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    position: relative;

    & Input {
        position: absolute;
        right: 0px;
    }
`

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
            // console.log(res);
            // if (res.type.split('/').includes('fulfilled')) {
            //     navigate('/');
            // } else {
            //     alert('이미 존재하는 email입니다.');
            // }
        });
    };

    return (
        <RegisterContainer>
            <Title>Sign up</Title>
            <Form onSubmit={handleSubmit}>
                <InputContainer>
                    <div className='name'>이름 <span className='point'>*</span></div>
                    <Input
                        type="text"
                        placeholder="이름"
                        value={userName}
                        onChange={onNameHandler}
                    />
                </InputContainer>
                <InputContainer>
                    <div>이메일 <span>*</span></div>
                    <Input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={onEmailHandler}
                    />
                    <div style={{ color: 'red' }}> {emailErrorMessage}</div>
                </InputContainer>
                <InputContainer>
                    <div>비밀번호<span>*</span></div>
                    <Input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={onPasswordHandler}
                    />
                </InputContainer>
                <InputContainer>
                    <div>비밀번호 확인<span>*</span></div>
                    <Input
                        type="password"
                        placeholder="비밀번호 확인"
                        value={passwordCheck}
                        onChange={onPasswordCheckHandler}
                    />
                    <div style={{ color: 'red' }}> {passwordErrorMessage}</div>
                </InputContainer>
                {/* 수정 필요 */}
                <div style={{display : 'flex'}}>
                    <Input type="checkbox"  name="news_letter" />
                    <label htmlFor="news_letter">[선택]뉴스레터 수신동의</label>
                </div>
                <div style={{display : 'flex'}}>
                    <Input type="checkbox"  name="news_letter" />
                    <label htmlFor="marketing">[선택]마케팅 목적 개인정보 수집 및 이용에 대한 동의</label>
                    {/* <ul>
                            <li><span >항목 : 성별, 생년월일</span></li>
                            <li>고객님께서는 위의 개인정보 및 회원정보 수정 등을 통해 추가로 수집하는 개인정보에<br/>
                                대해 동의하지 않거나 개인정보를 기재하지 않음으로써 거부하실 수 있습니다.<br/>
                                다만 이때 회원 대상 서비스가 제한될 수 있습니다.
                            </li>
                    </ul> */}
                </div>


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
