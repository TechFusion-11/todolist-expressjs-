const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const fetchTodos=()=>{
    fetch('api/todos').then(res=>res.json(())
      .then(data=>{
        todoList.innerHtml='';
          data.forEach(todo=>{
            const li=document.createElement('li');
            li.innerHTML=`
              <span class="${todo.status?'completed':''}">${todo.task}</span>
              <div >
                       <button onclick="togglestatus(${todo.id},${todo.status})">${todo.status?'undo':'Done'}</button>
            
                       <button onclick="deleteTodo(${todo.id})">Delete</button>
            </div>`;
            todoList.appendChild(li);
          });
      });
};
addbtn.addEventListener('click',()=>{
  const task=taskinput.value.trim();
  if(!task) return alert ('enter a task');
  fetch('api/todos',{
    method:'POST',
    headers:{'content-Type':'application/json'}}).then(()=>{
    taskInput.value='';
    fetchTodos();
  });
});
const togglestatus=(id,status)=>{
  fetch(`/api/todos/${id}`,{
    method:'PUT'
    headers:{'content-Type:'application/json'},
    body.Json.stringify({status:!status})
            }).then(()=>fetchTodos());
};
const deleteTodo = (id) => {
    fetch(`/api/todos/${id}`, { method: 'DELETE' })
        .then(() => fetchTodos());
};
fetchTodos();
