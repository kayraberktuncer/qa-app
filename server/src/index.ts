import * as bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import App from './app'
import loggerMiddleware from './middleware/logger.middleware'
import customErrorHandler from './middleware/error.middleware'
import endpoint from './lib/endpoint.config'
import ConnectDB from './helpers/database/db'

import HomeController from './controllers/home/home.controller'
import QuestionController from './controllers/question/question.controller'
import AuthController from './controllers/user/user.controller'

const app = new App({
    port: endpoint.PORT,
    controllers: [
        new HomeController(),
        new QuestionController(),
        new AuthController()
    ],
    helperS: [
        ConnectDB
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cookieParser(),
        loggerMiddleware,
        customErrorHandler
    ]
})

app.listen()