const orm = require('../config/orm');


const burger = {
    all: function(cb) {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    create: function(burger_name, cb) {
        orm.insertOne(burger_name, (res) => {
            cb(res);
        });
    },

    update: function(boolean, idCol, id, cb) {
        orm.updateOne(boolean, idCol, id, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;
