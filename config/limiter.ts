import { limiterConfig } from '@adonisjs/limiter/build/config'

export default limiterConfig({
  default: 'db',
  stores: {
    db: {
      client: 'db',
      dbName: 'task-adonisjs-api',
      tableName: 'rate_limits',
      connectionName: 'pg',
      clearExpiredByTimeout: true,
    },
  },
})
