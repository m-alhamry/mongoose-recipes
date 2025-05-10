const User = require('../models/User.js')

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('recipes')
    // Returns the full user object, including their hashed password. Never send this to anyone other than the user it belongs to.
    // const data = {
    //   first: userInDB.first,
    //   last: userInDB.last,
    //   picture: userInDB.picture,
    //   recipes: userInDB.recipes
    // }
    // Notice we have left out sensitive info like the user's email and hashed password.
    res.render('./users/profile.ejs', { user })
    // This will be an EJS page later...
  } catch (error) {
    console.error('An error has occurred finding a user!', error.message)
  }
}

module.exports = {
  getUserById
}