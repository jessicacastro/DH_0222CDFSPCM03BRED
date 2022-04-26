const path = require('path')

const users = [
  {
    id: 1,
    name: 'John',
    surname: 'Smith',
    nickname: 'jonhsmith',
    email: 'jonhsmith@gmail.com'
  },
  {
    id: 2,
    name: 'Joana',
    surname: 'Johnson',
    nickname: 'joanajohnson',
    email: 'joanajohnson@gmail.com'
  }
]

const usersController = {
  index: (req, res) => {
    return res.json(users)
  },
  getUser: (req, res) => {
    // const { id } = req.params;
    // // const id = req.params.id;
    // console.log(typeof(req.params.id))
    const user = users.find(u => u.id == req.params.id);
    // console.log(user)
    return res.json(user)
  }
}


module.exports = usersController