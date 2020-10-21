const orm = require('../config/orm');


const burger = {
    all: function(cb) {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    create: function(name, cb) {
        orm.insertOne(name, (res) => {
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
