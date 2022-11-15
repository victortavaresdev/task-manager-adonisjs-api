import { Limiter } from '@adonisjs/limiter/build/services'

export const { httpLimiters } = Limiter.define('global', () => {
  return Limiter.allowRequests(20).every('1 min')
})
