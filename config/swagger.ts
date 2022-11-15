import { SwaggerConfig } from '@ioc:Adonis/Addons/Swagger'

export default {
  uiEnabled: true,
  uiUrl: 'api-docs',
  specEnabled: true,
  specUrl: '/swagger.json',

  middleware: [],

  options: {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Task Management REST API',
        version: '1.0.0',
        description: 'Documentation for Task Management REST API created in Adonis.js',
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },

    apis: ['app/**/*.ts', 'docs/swagger/**/*.yml', 'start/routes.ts'],
    basePath: '/',
  },
  mode: process.env.NODE_ENV === 'production' ? 'PRODUCTION' : 'RUNTIME',
  specFilePath: 'docs/swagger.json',
} as SwaggerConfig
