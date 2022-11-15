import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class CreateTaskValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string([rules.minLength(5), rules.maxLength(50)]),
    description: schema.string([rules.maxLength(200)]),
    date: schema.string(),
  })

  public messages: CustomMessages = {}
}
