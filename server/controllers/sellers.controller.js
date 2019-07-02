var models = require('../models');

exports.insert = (req, res) => {
  res.setHeader('Content-type', 'application/json');
    models.sellers.create({
    userId: req.body.userId,
    departmentId: req.body.departmentId,
    parent: req.body.parent,
    date_added: req.body.date_added,
    status: req.body.status
    }).then(seller => {
        res.status(200).send({
            status: 200,
            data: seller,
            count: seller.length,
            message: 'Success'
        });
      });
}

exports.findAll = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    models.sellers.findAll().then(sellers => {
        if(sellers.length <= 0){
            res.status(200).send({
                status: 200,
                data: sellers,
                count: sellers.length,
                message: 'Data is empty'
            });
        }else{
            res.status(200).send({
                status: 200,
                data: sellers,
                count: sellers.length,
                message: 'Success'
            });
        }
    })
}

exports.findById = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    models.sellers.findAll({
        where: {
            id: req.params.id
        }
    }).then(sellers => {
        if(sellers.length <= 0){
            res.status(200).send({
                status: 200,
                data: sellers,
                count: sellers.length,
                message: 'Data not found'
            });
        }else{
            res.status(200).send({
                status: 200,
                data: sellers,
                count: sellers.length,
                message: 'Success'
            });
        }
        
    })
}

exports.findBy = (req, res) => {
  res.setHeader('Content-type', 'text/html');
//   models.sellers.findAll({
//       where: {
//       }
//   })
  res.status(200).send({         
      status: 200,         
      data: [req.body.id],         
      message: 'Find one sellers by criteria'
    });
}

exports.update = (req, res) => {
  res.setHeader('Content-type', 'text/html');
  
  models.sellers.update(req.body,
  { 
    where: {
       id: parseInt(req.params.id)
    }
  }).then((sellers) => {
      if(sellers>0){
        res.status(200).send({         
            status: 200,         
            data: sellers,         
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
      message: 'Delete sellers'
  });
}