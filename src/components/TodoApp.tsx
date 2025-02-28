import { useState } from 'react';
import {TaskList} from './TaskList';
export const TodoApp = () => {
	const [newTask, setNewTask] = useState<string>('');
	const [taskList, setTaskList] = useState<string[]>([]);
	const handleAddTask = () => {
		if(newTask.trim() === '') return;
		setTaskList(taskList => [...taskList, newTask]);
		setNewTask('');
		console.log(taskList)
	}
	const handleDeleteTask = (index: number) => {
		setTaskList(tasks => tasks.filter((_, i) => i!==index))
	}	
	return (
		<div>
			<h1>Lista de Tareas</h1>
			<div>
				<input 
					type="text"
					value={newTask}
					onChange = {(e) => setNewTask(e.target.value)}
					placeholder= 'Nueva Tarea'
				/>
				<button onClick= { handleAddTask }> Add Task </button>
			</div>
			<TaskList taskList = {taskList} deleteTask = {handleDeleteTask}></TaskList>
		</div>
	)
	console.log(taskList)
}


