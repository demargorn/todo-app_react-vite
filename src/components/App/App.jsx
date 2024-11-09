import { useState } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './App.css';

function App() {
   let maxId = 100;
   const [todoData, setTodoData] = useState([
      createTask('Drink coffee'),
      createTask('Learn React'),
      createTask('Build React App'),
   ]);
   const [term, setTerm] = useState('');
   const [filter, setFilter] = useState('active');

   function createTask(label) {
      return {
         label: label,
         important: false,
         done: false,
         id: maxId++,
      };
   }

   const addTask = (label) => {
      const newTask = createTask(label);
      // создаем новый массив с новым task
      return setTodoData([...todoData, newTask]);
   };

   const deleteTask = (id) => {
      const idx = todoData.findIndex((item) => item.id === id);
      // создаем новый массив с вырезанным task
      return setTodoData([...todoData.slice(0, idx), ...todoData.slice(idx + 1)]);
   };

   function toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((item) => item.id === id);
      // обновляем объект task
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };
      // добавляем объект в массив не изменяя старый
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
   }

   const onToggleImportant = (id) => setTodoData(toggleProperty(todoData, id, 'important'));

   const onToggleDone = (id) => setTodoData(toggleProperty(todoData, id, 'done'));

   function search(items, term) {
      if (term.trim() === '') {
         return items;
      }
      return items.filter((item) => item.label.toLowerCase().includes(term));
   }

   const onSearchChange = (term) => {
      setTerm(term);
   };

   const onFilterChange = (filter) => {
      setFilter(filter);
   };

   function filterFn(items, filter) {
      switch (filter) {
         case 'all':
            return items;
         case 'active':
            return items.filter((item) => !item.done);
         case 'done':
            return items.filter((item) => item.done);
         default:
            return items;
      }
   }

   const visibleTasks = filterFn(search(todoData, term), filter);
   const doneCount = todoData.filter((task) => task.done).length;
   const todoCount = todoData.length - doneCount;

   return (
      <div className='todo-app'>
         <AppHeader toDo={todoCount} done={doneCount} />
         <div className='top-panel d-flex'>
            <SearchPanel onSearchChange={onSearchChange} />
            <ItemStatusFilter filter={filter} onFilterChange={onFilterChange} />
         </div>
         <TodoList
            todos={visibleTasks}
            onDeleted={deleteTask}
            onToggleImportant={onToggleImportant}
            onToggleDone={onToggleDone}
         />
         <ItemAddForm onAdded={addTask} />
      </div>
   );
}

export default App;
