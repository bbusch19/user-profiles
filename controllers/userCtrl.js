var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Breiden',
        password: 'weiners',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
  login: function(req, res, next) {
    var found = false;
    users.forEach(function(elem) {
      if (req.body.name === elem.name && req.body.password === elem.password) {
          found = true;
          req.session.currentUser = elem;
          res.send({userFound: true});
      }
    })
    if (!found) res.send({userFound: false});
  }
};
