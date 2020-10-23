const orm = require('../config/orm');


const burger = {
    all: function(cb) {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    create: function(cols, newVals, cb) {
        orm.insertOne('burgers', cols, newVals, (res) => {
            cb(res);
        });
    },

    update: function(newColVal, condition, cb) {
        orm.updateOne('burgers', newColVal, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;
