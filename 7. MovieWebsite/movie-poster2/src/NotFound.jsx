import { useNavigate } from 'react-router-dom';
import StyledNotFound from './components/StyledNotFound.js';

function NotFound() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <StyledNotFound>
      <p className='oops'>Oops!</p>
      <p>예상치 못한 에러가 발생했습니다. 😓</p>
      <p className='notfound'> Not Found</p>
      <br />
      <button onClick={goToMain}>메인으로 이동하기</button>
    </StyledNotFound>
  );
}

export default NotFound;
