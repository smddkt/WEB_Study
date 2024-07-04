function Profile() {
    return (
        <img
            src= "l"
            alt= "k"
        />
    );
 }
 
 
 export default function Gallery()  {
    return (
        <section>
            <h1> asdffdasdfsa</h1>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
 }
 
 
 
 
 
 
 
 
 const person  = {
    name: 'dltkddms',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
 };
 
 
 export default function TodoList() {
    return (
        <div style = {person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className = "avatar"
                scr = "https://i.imgur.com/7vQDafsdio.jpg"
                alt = "Gregorio Y. Zara"
            />
            <ul>
                <li>sdfsadf</li>
                <li>wejifdsij</li>
                <li>asdf</li>
            </ul>
        </div>
    );
 }
 
 
 
 
 import  { getImageUrl } from './utils.js'
 
 
 export default function Profile() {
    return  (
 
 
        <Card>
            <Avatar
                size = {100}
                person = {{
                    name: 'Katsuko Saruhashi',
                    imageId: 'afsdi22'
                }}
            />
        </Card>
    );
 }
 
 
 
 
 function Avatar({ person, size }) {
    return (
        <img
            className "avatar"
            src = {getImgUrl(person)}
            alt = {person.name}
            width = {size}
            height =  {size}
        />
    );
 }
 
 
 function Card({ children }) {
    return (
        <div className="card">
            {childrene}
        </div>
    )
 }
 
 
 /* props 전달하는 예시.
 모든 부모 컴포넌트는 자식 컴포넌트에게 props를 전달할 수 있다.
 오브젝트, 배열, 함수, jsx 를 다 전달할 수 있다.
 */
 