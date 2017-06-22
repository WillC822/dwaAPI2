const db = require('/db');

//create
exports.create =  (payload,err,success) => {
  db.url.create(payload).then(success).catch(err);
  logger.debug('Create record in db | models/crudDB.js');
};


//find all
exports.findall =  (err,success) => {
  db.url.findall().then(success).catch(err);
  logger.debug('Finding all records in db - return all records | models/crudDB.js');
};

//find a specific id
exports.find =  (payload,err,success) => {
  db.url.find({
    where: {
      id: urlID,
    },
    //find all relations in sequelize
    include:[{
      all:true,
      nested: true,
    }],
  }).then(success).catch(err);
  logger.debug('Searching for specified record in db - return search | models/crudDB.js');
};

//update
exports.update = ( payload, err, success) => {
    db.url.find({
        where:{
            id: urlID,
        },

    }).then(function (existingData){
        existingData.updateAttributes(payload).then(success).catch(err)
}).catch(err);
logger.debug('Updating for specified record in db - return updated info | models/crudDB.js');
};

//destroy
exports.destroy =  (payload,err,success) => {
  db.url.destroy({
    where: {
      id: urlID,
    },
  }).then(success).catch(err);
  logger.debug('Deleting specified record in db - return 1 = success / 0 = fail | models/crudDB.js');
};
