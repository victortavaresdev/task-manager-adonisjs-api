import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import Logger from '@ioc:Adonis/Core/Logger'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: Exception, context: HttpContextContract): Promise<any> {
    if (['E_ROW_NOT_FOUND', 'E_ROUTE_NOT_FOUND'].includes(error.code || ''))
      return context.response.status(error.status).send({
        code: 'NOT_FOUND',
        message: 'Resource not found',
        status: 404,
      })
    else if (['E_INVALID_AUTH_UID', 'E_INVALID_AUTH_PASSWORD'].includes(error.code || ''))
      return context.response.status(error.status).send({
        code: 'BAD_REQUEST',
        message: 'Invalid credentials',
        status: 400,
      })
    else if (error.code === 'E_UNAUTHORIZED_ACCESS')
      return context.response.status(error.status).send({
        code: 'UNAUTHORIZED',
        message: 'Unauthorized access',
        status: 401,
      })
    else if (error.code === 'E_AUTHORIZATION_FAILURE')
      return context.response.status(error.status).send({
        code: 'FORBIDDEN',
        message: 'Authorization failure',
        status: 403,
      })
    else if (error.code === 'E_TOO_MANY_REQUESTS')
      return context.response.status(error.status).send({
        code: 'TOO_MANY_REQUESTS',
        message: 'Too many requests',
        status: 429,
      })

    return super.handle(error, context)
  }
}
