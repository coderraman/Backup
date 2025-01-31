let input = document.getElementById('todo');
let button = document.getElementById('addTask');
let list = document.getElementById('list');

button.addEventListener('click', function() {
    let task = input.value;
    let li = document.createElement('li');
    li.classList.add('list-item');
    li.style.listStyle = 'none';
    list.style.margin = '1.3rem';
    li.style.margin = '1rem';
    li.innerText = task;
    list.appendChild(li);
    input.value = '';
});

