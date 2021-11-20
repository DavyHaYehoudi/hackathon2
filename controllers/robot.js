const Robot = require('../models/Robot');

exports.getAllRobots = (req, res, next) => {
  Robot.find().then(
    (robots) => {
      const mappedRobots = robots.map((robot) => {
        robot.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + robot.imageUrl;
        return robot;
      });
      res.status(200).json(mappedRobots);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneRobot = (req, res, next) => {
  Robot.findById(req.params.id).then(
    (robot) => {
      if (!robot) {
        return res.status(404).send(new Error('robot not found!'));
      }
      robot.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + robot.imageUrl;
      res.status(200).json(robot);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  )
};

exports.orderRobots = (req, res, next) => {
    if (!req.body.contact ||
      !req.body.contact.firstName ||
      !req.body.contact.lastName ||
      !req.body.contact.address ||
      !req.body.contact.city ||
      !req.body.contact.email ||
      !req.body.products) {
      return res.status(400).send(new Error('Bad request!'));
    }
    let queries = [];
    for (let productId of req.body.products) {
      const queryPromise = new Promise((resolve, reject) => {
        Robot.findById(productId)
        .then(
          (robot) => {
            if (!robot) {
              reject('Robot not found: ' + productId);
            }
            robot.imageUrl = req.protocol + '://' + req.get('host') + '/images/' + robot.imageUrl;
            resolve(robot);
          }
        ).catch(
          () => {
            reject('Database error!');
          }
        )
      });
      queries.push(queryPromise);
    }
    Promise.all(queries)
    .then(
      (robots) => {
        const orderId = uuid();
        return res.status(201).json({
          contact: req.body.contact,
          products: robots,
          orderId: orderId
        })
      }
    ).catch(
      (error) => {
        return res.status(500).json(new Error(error));
      }
    );
  };