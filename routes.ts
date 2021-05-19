import { Router } from 'express'
import { SettingsController } from './src/controllers/SettingsController'
import { UsersController } from './src/controllers/UsersController'
import { MessagesController } from './src/controllers/MessagesController'

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()
const messageController = new MessagesController()

routes.post("/settings", settingsController.create)
routes.get("/settings/:username", settingsController.findByUsername)
routes.put("/settings/:username", settingsController.update)

routes.post("/users", usersController.create)

routes.post("/messages", messageController.create)
routes.get("/messages/:id", messageController.showByUser)

export { routes }