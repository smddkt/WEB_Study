//MUI의 styled함수. 
import { styled } from '@mui/material/styles';

//ButtonProps라는 것의 인터페이스를 정의한다. 
interface ButtonProps {
    bsize: string;
    btype: String;
    disabled: Boolean;
}

export enum ButtonProps {

}

//styled 함수를 사용해서 스타일링된 버튼을 생성한다. 

const StyledButton = styled(Button)<ButtonProps>(({theme, bsize, btype}) =>({
    width: '100%',
    borderRadius: '8px',
    fontFamily: 'pretendard',
    fontWeight: 500,
    fontSize: 
        bsize === 'large' ? '18px':
        bsize === 'medium' ? '16px':
        bsize === 'small' ? '14px':
        '12px',

    // (스타일드 컴포넌트 문법)
    // font-size: ${({ bsize }) =>
    //     bsize === 'large'? '18px':
    //     bsize === 'medium' ? '16px':
    //     bsize === 'small' ? '14px':
    //     '12px'};

    lineheight: 
        bsize === 'large' ? '24px':
        bsize === 'medium' ? '20px':
        bsize === 'small' ? '16px':
        '12px',
    padding: 
        bsize === 'large' ? '18px 16px':
        bsize === 'medium' ? '14px 16px':
        bsize === 'small' ? '10px 16px':
        '8px 16px',
    minHeight:
        bsize === 'large' ? '60px':
        bsize === 'medium' ? '48px':
        bsize === 'small' ? '36px':
        '32px',
    background: 
        btype === 'primary' ? '#000000':
        btype === 'secondary' ? '#EBEBEB':
        btype === 'gray' ? '#F5F5F5':
        '#FFFFFF',
    color : btype === 'primary' ? '#FFFFFF':'#000000',
    border:
    btype === 'primary' ? '1px solid #000':
    btype === 'secondary' ? '1px solid #EBEBEB':
    btype === 'tertiary' ? '1px solid #DDD':
    'none',

    '&:hover': {
        background: 
            btype === 'primary' ? '#000000':
            btype === 'secondary' ? '#EBEBEB':
            btype === 'gray' ? '#F5F5F5':
            '#FFFFFF',
        border: 
            btype === 'primary' ? '1px solid #000':
            btype === 'secondary' ? '1px solid #EBEBEB':
            btype === 'tertiary' ? '1px solid #DDD':
            'none',
    },

    '&:disabled' : {
        color: '#A6A6A6',
        background: 
            btype === 'primary' ? '#F5F5F5':
            btype === 'secondary' ? '#F5F5F5':
            '#FFF',
        border: 
            btype === 'primary' ? '1px solid #F5F5F5':
            btype === 'secondary' ? '1px solid #F5F5F5':
            btype === 'tertiary' ? '1px solid #EBEBEB':
            'none',
    },
}));





//위와 똑같은 내용의 StyledButton을 Styled-Comonents를 이용해서 작성하기

import styled from 'styled-components';

interface ButtonProps {
  bsize: string;
  btype: string;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  border-radius: 8px;
  font-family: 'pretendard';
  font-weight: 500;
  font-size: ${({ bsize }) =>
    bsize === 'large'
      ? '18px'
      : bsize === 'medium'
      ? '16px'
      : bsize === 'small'
      ? '14px'
      : '12px'};
  line-height: ${({ bsize }) =>
    bsize === 'large'
      ? '24px'
      : bsize === 'medium'
      ? '20px'
      : bsize === 'small'
      ? '16px'
      : '12px'};
  padding: ${({ bsize }) =>
    bsize === 'large'
      ? '18px 16px'
      : bsize === 'medium'
      ? '14px 16px'
      : bsize === 'small'
      ? '10px 16px'
      : '8px 16px'};
  min-height: ${({ bsize }) =>
    bsize === 'large'
      ? '60px'
      : bsize === 'medium'
      ? '48px'
      : bsize === 'small'
      ? '36px'
      : '32px'};
  background: ${({ btype }) =>
    btype === 'primary'
      ? '#000000'
      : btype === 'secondary'
      ? '#EBEBEB'
      : btype === 'gray'
      ? '#F5F5F5'
      : '#FFFFFF'};
  color: ${({ btype }) => (btype === 'primary' ? '#FFFFFF' : '#000000')};
  border: ${({ btype }) =>
    btype === 'primary'
      ? '1px solid #000'
      : btype === 'secondary'
      ? '1px solid #EBEBEB'
      : btype === 'tertiary'
      ? '1px solid #DDD'
      : 'none'};
  
  &:hover {
    background: ${({ btype }) =>
      btype === 'primary'
        ? '#000000'
        : btype === 'secondary'
        ? '#EBEBEB'
        : btype === 'gray'
        ? '#F5F5F5'
        : '#FFFFFF'};
    border: ${({ btype }) =>
      btype === 'primary'
        ? '1px solid #000'
        : btype === 'secondary'
        ? '1px solid #EBEBEB'
        : btype === 'tertiary'
        ? '1px solid #DDD'
        : 'none'};
  }

  &:disabled {
    color: #A6A6A6;
    background: ${({ btype }) =>
      btype === 'primary'
        ? '#F5F5F5'
        : btype === 'secondary'
        ? '#F5F5F5'
        : '#FFF'};
    border: ${({ btype }) =>
      btype === 'primary'
        ? '1px solid #F5F5F5'
        : btype === 'secondary'
        ? '1px solid #F5F5F5'
        : btype === 'tertiary'
        ? '1px solid #EBEBEB'
        : 'none'};
  }
`;

export default StyledButton;
