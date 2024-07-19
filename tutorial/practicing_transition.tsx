import styled from 'styled-components'

const Button = styled.div
transform: ${props => props.expanded ? 'rotate(180deg)':
    'rotate(0deg)'};
    transition: transform .2s ease-out;
}

// transform : props 객체의 expanded 값이 참이면 버튼을 180도 회전하고, 거짓이면 회전하지 않는다.
// transition: 버튼의 회전 변환이 0.2초 동안 부드럽게 진행된다. 



opacity: ${({open}) => (open ? '1' : '0')};
visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1), visibility 225ms, pointer-events 225ms;

//opacity: open prop이 true면 요소가 완전히 보이도록(1)하고, false면 투명하게(0)한다.
//visibility: open prop이 true면 요소가 보이도록, false면 숨기도록(요소가 차지하는 공간은 유지) 설정한다.
//pointer-events: open prop이 true면 요소가 마우스 이벤트를 받도록(auto) 하고, false면 받지 않도록(none) 한다.
//transition: prop에 따라 요소의 투명도, 가시성, 포인터 이벤트 수신 여부를 동적으로 변경한다. 변경은 225ms 동안 부드럽게 전환된다. 




//dialog 컴포넌트가 열릴 때 부드러운 transition 적용하기

const Dialog = styled.div`
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
    transition: opacity 225ms cubic-beizer(0.4, 0, 0.2, 1), visibility 225ms, pointer-events 225ms; //큐빅 베지어 함수,, 
`;

export default Dialog


//이 컴포넌트를 사용하는 파일 예시

import Dialog from './Dialog';

const App = () => {
    const [isOpen, setOPen] = useState(false);

    const toggleDialog = () => {
        setIsOpen(isOpen);
    };

    return (
        <div>
            <button onClick={toggleDialog}>
                {isOpen ? 'Close Dialog' : 'Open Dialog'}
            </button>
            <Dialog open={isOpen}>
                <h1>Dialog Content</h1>
                <p>This is content of the dialog.</p>
            </Dialog>
        </div>
    );
};

export default App;

//버튼을 클릭하면 toggleDialog 함수가 호출되어 isOpen 상태를 토글한다. 
//Dialog 컴포넌트에 "open" prop으로 isOpen 상태를 전달한다.