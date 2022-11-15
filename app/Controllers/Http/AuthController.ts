import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)

    const { token } = await auth
      .use('api')
      .attempt(email, password, { expiresIn: process.env.TOKEN_EXPIRATION })

    return response.ok({ access_token: token })
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()

    return {
      revoked: true,
    }
  }

  public async getProfile({ auth }: HttpContextContract) {
    return auth.user
  }
}
