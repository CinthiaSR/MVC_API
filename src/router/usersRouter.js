import { Router } from "express";
import {getPersona} from '../controller/usersController'

const router=Router()
router.route('/users')
    .get(getPersona)


export default router