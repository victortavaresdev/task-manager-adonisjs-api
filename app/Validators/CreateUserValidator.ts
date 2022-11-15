import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([rules.minLength(3), rules.maxLength(20)]),
    email: schema.string([rules.email()]),
    password: schema.string([rules.minLength(6)]),
  })

  public messages: CustomMessages = {}
}
