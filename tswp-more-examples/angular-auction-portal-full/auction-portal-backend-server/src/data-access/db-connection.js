import knex from 'knex';
import { Model } from 'objection';

const environment = process.env.NODE_ENV || 'development'
export const db = knex(require('../../knexfile')[environment]);
Model.knex(db);



