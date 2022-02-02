import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();
// Falha de segurança não é aconselhavel fazer.
router.get('/',loginRequired, userController.index);
router.get('/:id', userController.show);


// Caso real de aplicação 
router.put('/', loginRequired, userController.update);
router.delete('/',loginRequired, userController.delete);
router.post('/', userController.store);


export default router;
