const db = require('/db');

//create
exports.create =  (payload,err,success) => {
  db.url.create(payload).then(success).catch(err);
};


//find all
exports.findall =  (err,success) => {
  db.url.findall().then(success).catch(err);
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

//destroy
exports.destroy =  (payload,err,success) => {
  db.url.destroy({
    where: {
      id: urlID,
    },
  }).then(success).catch(err);
};
