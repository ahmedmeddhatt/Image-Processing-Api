import { Router } from "express";
import imageRoute from './api/imageRoute'

const routes = Router()

routes.use('/api', imageRoute)



export default routes