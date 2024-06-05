import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    passwordConfirm: '',
  });

  useEffect(() => {
    validateName(name);
  }, [name]);

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  useEffect(() => {
    validateAge(age);
  }, [age]);

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  useEffect(() => {
    validatePasswordConfirm(passwordConfirm);
  }, [passwordConfirm]);

  const validateName = (name) => {
    if (name.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: '필수 입력 항목입니다!',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '올바른 이메일 형식이 아닙니다!',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  const validateAge = (age) => {
    if (age.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: '나이를 입력해주세요!',
      }));
    } else if (isNaN(age)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: '나이는 숫자 형식이어야 합니다!',
      }));
    } else if (age < 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: '나이는 음수가 될 수 없습니다!',
      }));
    } else if (age !== Math.floor(age).toString()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: '나이는 소수가 될 수 없습니다!',
      }));
    } else if (age < 19) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: '미성년자는 가입할 수 없습니다!',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, age: '' }));
    }
  };

  const validatePassword = (password) => {
    if (password.length < 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '비밀번호는 최소 4자리 이상이어야 합니다.',
      }));
    } else if (password.length > 12) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '비밀번호는 최대 12자리까지 가능합니다.',
      }));
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,12}$/.test(
        password,
      )
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  };

  const validatePasswordConfirm = (passwordConfirm) => {
    if (password !== passwordConfirm) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirm: '비밀번호가 일치하지 않습니다.',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, passwordConfirm: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);
    validateAge(age);
    validatePassword(password);
    validatePasswordConfirm(passwordConfirm);

    if (
      Object.values(errors).every((error) => error === '') &&
      name &&
      email &&
      age &&
      password &&
      passwordConfirm
    ) {
      console.log('폼 데이터:', {
        name,
        email,
        age,
        password,
        passwordConfirm,
      });
      alert('가입 성공!');
      navigate('/');
    } else {
      alert('모든 필드를 올바르게 입력하세요.');
    }
  };

  return (
    <main>
      <div className='contents'>
        <h1>회원가입</h1>
        <fieldset>
          <p>이름</p>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className='red'>{errors.name}</div>}
        </fieldset>

        <fieldset>
          <p>이메일</p>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className='red'>{errors.email}</div>}
        </fieldset>

        <fieldset>
          <p>나이</p>
          <input
            type='text'
            id='age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <div className='red'>{errors.age}</div>}
        </fieldset>

        <fieldset>
          <p>비밀번호</p>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className='red'>{errors.password}</div>}
        </fieldset>

        <fieldset>
          <p>비밀번호 확인</p>
          <input
            type='password'
            id='passwordConfirm'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {errors.passwordConfirm && (
            <div className='red'>{errors.passwordConfirm}</div>
          )}
        </fieldset>

        <fieldset className='signUp'>
          <button onClick={handleSubmit}>가입하기</button>
        </fieldset>
      </div>
    </main>
  );
};

export default RegistrationPage;
