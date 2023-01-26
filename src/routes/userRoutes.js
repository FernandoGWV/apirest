import {Router} from 'express'
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'
const router = new Router

//router.get('/',userController.index ) // listas usuarios
//router.get('/:id', userController.show ) // lista usuario


router.post('/', userController.store )
router.put('/',loginRequired, userController.update )
router.delete('/',loginRequired, userController.delete )

/*
 index -> lista todos os usuarios -> get
 store/create -> cria um novo usuario -> post
 delete -> deleta um usuario -> DELETE
 show -> mostrar um usuario -> GET
 update -> atualiza um usuario -> PATCH ou PUT
 */

export default router
