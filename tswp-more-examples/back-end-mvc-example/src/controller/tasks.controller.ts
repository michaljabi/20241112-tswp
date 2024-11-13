import express from 'express';
import { tasksService } from '../model/tasks.service';

export const tasksController = express.Router();

tasksController.get('', (req, res) => {

	if(req.session.user) {
		tasksService.getTasks()
			.then(tasks => {
				res.render('tasks', { tasks  });
			})
			.catch(error => {
				res.render('tasks', { error: error.message  });
			})
	} else {
		res.redirect('/');
	}
})
