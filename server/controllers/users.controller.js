var models = require('../models');

exports.insert = (req, res) => {
  res.setHeader('Content-type', 'application/json');
    models.users.create({
          name: req.body.name,
          password: req.body.password,
          type: req.body.type,
          contact: req.body.contact,
          address: req.body.address,
          surname: req.body.surname,
          email: req.body.email
    }).then(user => {
        res.status(200).send({
            status: 200,
            data: user,
            count: user.length,
            message: 'Success'
        });
      });
}

exports.findAll = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    models.users.findAll().then(users => {
        if(users.length <= 0){
            res.status(200).send({
                status: 200,
                data: users,
                count: users.length,
                message: 'Data is empty'
            });
        }else{
            res.status(200).send({
                status: 200,
                data: users,
                count: users.length,
                message: 'Success'
            });
        }
    })
}

exports.findById = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    models.users.findAll({
        where: {
            id: req.params.id
        }
    }).then(users => {
        if(users.length <= 0){
            res.status(200).send({
                status: 200,
                data: users,
                count: users.length,
                message: 'Data not found'
            });
        }else{
            res.status(200).send({
                status: 200,
                data: users,
                count: users.length,
                message: 'Success'
            });
        }
        
    })
}

exports.findBy = (req, res) => {
  res.setHeader('Content-type', 'text/html');
//   models.users.findAll({
//       where: {
//           name: req.body.name,
//           type: req.body.type ? req.body.type : '',
//           contact: req.body.contact,
//           address: req.body.address,
//           surname: req.body.surname,
//           email: req.body.email
//       }
//   })
  res.status(200).send({         
      status: 200,         
      data: [req.body.id],         
      message: 'Find one user by criteria'
    });
}

exports.update = (req, res) => {
  res.setHeader('Content-type', 'text/html');
  
  models.users.update(req.body,
  { 
    where: {
       id: parseInt(req.params.id)
    }
  }).then((users) => {
      if(users>0){
        res.status(200).send({         
            status: 200,         
            data: users,         
            message: 'Success'
          });
      } else {
        res.status(500).send({         
            status: 500,         
            data: req.params,         
            message: 'Erreur lors de la mise à jour'
          });
      }
    
  });
  
}

exports.delete = (req, res) => {
    res.setHeader('Content-type', 'text/html');
  res.status(200).send({         
      status: 200,         
      data: [req.body.id],        
      message: 'Delete users'
  });
}