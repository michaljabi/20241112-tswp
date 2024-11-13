import { makeTask, Task } from './Task';

const taskList: Task[] = [
	makeTask('Nauczyć się SQLa'),
	makeTask('Sprawdzić routing', true),
	makeTask('Poprawić style CSS na stronie'),
]

export const tasksService = {
	async getTasks() {
		return taskList
	},
	async addTask(title: string, isCompleted = false) {
		const task = makeTask(title, isCompleted);
		taskList.push(task)
		return task;
	}
}
