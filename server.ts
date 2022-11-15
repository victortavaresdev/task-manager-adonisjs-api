import { Ignitor } from '@adonisjs/core/build/standalone'
import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'

sourceMapSupport.install({ handleUncaughtExceptions: false })

new Ignitor(__dirname).httpServer().start()
