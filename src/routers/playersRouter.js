const {Router} = require('express')

const playerCtrl = require('../controllers/player.controllers')

const {paginate: {paginate}} = require('../middlewares')

const playerRouter = new Router()

playerRouter.route('/')
  .get(paginate, playerCtrl.getAllPlayers)
  .post(playerCtrl.addPlayer)

playerRouter.route('/age/:age')
  .get(playerCtrl.getVeterans)

playerRouter.route('/roles')
  .patch(playerCtrl.patchPlayers)

playerRouter.route('/:id')
  .get(playerCtrl.getPlayerById)




module.exports = playerRouter;