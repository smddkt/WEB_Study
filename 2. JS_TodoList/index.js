const Input = document.getElementById('input');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');

Input.addEventListener('keyup', function(event){
  addList(event);
});


item1.addEventListener("click", function(event){
  const target = event.target;
  if(target.tagName === "BUTTON"){
    const parentUl = target.parentNode;
    parentUl.remove();
    item2.appendChild(parentUl);
    target.innerText = "삭제";
  }
});


item2.addEventListener("click", function(event){
  const target = event.target;
  if(target.tagName === "BUTTON"){
    const parentUl = target.parentNode;
    parentUl.remove();
  }
});


function addList(event) {
  if(event.key ==="Enter"){
  event.preventDefault();
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const button1 = document.createElement("button");
  button1.innerText = '완료';
  li.textContent = Input.value;
  ul.appendChild(li);
  ul.appendChild(button1);
  item1.appendChild(ul);
  Input.value = '';
}}