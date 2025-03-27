import express from "express"
import { Router } from "express"
import { controller } from "../controller/eventControllers.mjs"
import corsController from "../controller/corsControllers.mjs"
const route=Router()

route.use(express.json())

route.route("/user",corsController).get(controller.getUser)
route.route("/users",corsController).get(controller.getUserByUserName);
route.route("/register",corsController).post(controller.postUser)
route.route("/login",corsController).post(controller.Login)
route.route("/user/:id",corsController).get(controller.getUserById)
.put(controller.updateUser)
.delete(controller.deleteUserById)



export default route

