import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'
import CreateTaskValidator from 'App/Validators/CreateTaskValidator'
import UpdateTaskValidator from 'App/Validators/UpdateTaskValidator'

export default class TasksController {
  public async store({ request, response, auth }: HttpContextContract) {
    const payload = await request.validate(CreateTaskValidator)
    const { id } = auth.user

    const task = await Task.create({ ...payload, user_id: id })

    return response.created({ task })
  }

  public async index({ request, response, bouncer }: HttpContextContract) {
    const id = request.param('id')
    const task = await Task.findOrFail(id)
    await bouncer.authorize('getTaskData', task)

    return response.ok({ task })
  }

  public async update({ request, response, bouncer }: HttpContextContract) {
    const id = request.param('id')
    const { title, description, date } = await request.validate(UpdateTaskValidator)
    const task = await Task.findOrFail(id)
    await bouncer.authorize('updateTaskData', task)

    task.title = title
    task.description = description
    task.date = date
    await task.save()

    return response.ok({ task })
  }

  public async destroy({ request, response, bouncer }: HttpContextContract) {
    const id = request.param('id')
    const task = await Task.findOrFail(id)
    await bouncer.authorize('deleteTaskData', task)
    await task.delete()

    return response.ok({})
  }
}
