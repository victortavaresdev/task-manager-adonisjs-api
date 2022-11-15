import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import Task from 'App/Models/Task'
import User from 'App/Models/User'

export const { actions } = Bouncer.define(
  'getUserData',
  (user: User, newUser: User) => user.id === newUser.id
)
  .define('updateUserData', (user: User, updatedUser: User) => user.id === updatedUser.id)
  .define('deleteUserData', (user: User, newUser: User) => user.id === newUser.id)
  .define('getTaskData', (user: User, task: Task) => user.id === task.user_id)
  .define('updateTaskData', (user: User, task: Task) => user.id === task.user_id)
  .define('deleteTaskData', (user: User, task: Task) => user.id === task.user_id)

export const { policies } = Bouncer.registerPolicies({})
