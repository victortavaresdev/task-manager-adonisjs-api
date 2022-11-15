import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConflictException extends Exception {
  public code: string = 'CONFLICT'
  public status: number = 409

  public async handle(error: this, context: HttpContextContract) {
    return context.response.status(error.status).send({
      code: error.code,
      message: error.message,
      status: error.status,
    })
  }
}
