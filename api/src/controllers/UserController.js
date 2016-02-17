/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  whaat: function (req, res) {
    CheckService.imprima(req.params.id || 'generic');
    res.ok()
  },
  whaat2: function (req, res) {
    console.log(req.body.data);
    res.ok()
  }

};

