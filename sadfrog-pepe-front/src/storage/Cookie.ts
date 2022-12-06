import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// 리프래시 토큰 저장
export const setRefreshToken = (refreshToken: any) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set('refreshToken', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

// 리프레시 토큰 접근
export const getCookieToken = () => {
  return cookies.get('refreshToken');
};

// 리프레시 토큰 삭제
export const removeCookieToken = () => {
  return cookies.remove('refreshToken', { sameSite: 'strict', path: '/' });
};
