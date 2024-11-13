let id = 0;

const STATUS = {
	COMPLETED: 'completed',
	NOT_COMPLETED: 'not-completed'
}

export function makeTask(title = 'No title', completed = false) {
	 id++;
	 return {
		 id,
		 title,
		 status: completed ? STATUS.COMPLETED : STATUS.NOT_COMPLETED
	 }
}

export type Task = ReturnType<typeof makeTask>;
