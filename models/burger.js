const orm = require('../config/orm');


const burger = {
    all: function(cb) {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    create: function(newVal, cb) {
        orm.insertOne('burgers', 'burger_name', newVal, (res) => {
            cb(res);
        });
    },

    update: function(newColVal, colId, itemId, cb) {
        orm.updateOne('burgers', newColVal, colId, itemId, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;
