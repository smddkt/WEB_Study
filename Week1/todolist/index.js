const input = document.querySelector('input')


input.addEventListener('keyup', () => {
    whatTodo.innerHTML = input
})




function addList()  {
  
    // 1. 추가할 값을 input창에서 읽어온다
    const input = document.getElementById('input').value;
    
    // 2. 추가할 li element 생성
    // 2-1. 추가할 li element 생성
    const li = document.createElement("li");
    
    // 2-2. li에 id 속성 추가 
    li.setAttribute('id',addValue);
    
    // 2-3. li에 text node 추가 
    const textNode = document.createTextNode(input);
    li.appendChild(textNode);
    
    // 3. 생성된 li를 ul에 추가
    document
      .getElementById('fruits')
      .appendChild(li);
  }
  



  function removeItem()  {
  
    // 1. <ul> element 선택
    const ul = document
      .getElementById('fruits');
    
    // 2. <li> 목록 선택
    const items = ul.getElementsByTagName('li');
    
    // 3. <li> 목록 중 첫번째 item 삭제
    if(items.length > 0)  {
      items[0].remove();
    }
    
  }

















// function add_list(event){
//     event.preventDefault();
//     const code = event.code;
//     const input = document.getElementById("input").value;
//     const whatTodo = document.getElementById("whatTodo");
//     const todoInput = document.querySelector("#input");

//     if (code === 'Enter'){
//     whatTodo.innerHTML = input
//     todoInput.value = ' ';
//     }
// }


// todoInput.addEventListener('keyup', function(event){
//         add_list(event);
// });
