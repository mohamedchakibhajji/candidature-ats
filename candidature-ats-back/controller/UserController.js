const User = require('../models/User');
const { json } = require('body-parser');
const userController = {};



/**add candidate*/
userController.create = async (req, res, next) => {
    delete req.body._id;
    const user = new User({
        ...req.body
      });
      user.save()
    .then(() => res.status(201).json(user))  
    .catch(error => {res.status(400).json({ error });console.log(error)});
  };
/**end add candidate */

/** get all candidats*/
userController.get = async (req, res, next) => {
  User.find()
.then(user => {res.status(200).json(group);console.log(user)})
.catch(error => {res.status(400).json({ error });console.log(error)});
};
/** end get candidat*/





/*profile_candidat*/ 
userController.showprofile= async(req, res, next) => {
 
  
  User.findOne({ _id: req.params.user_id })
    .then(group => {res.status(200).json(user);console.log(user)})
    .catch(error => {res.status(400).json({ error });console.log(error)});
    };
/*end_profile_candidat*/ 








  module.exports = groupController;