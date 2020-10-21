const connection = require('./connection');

const orm = {
    selectAll: function(tableName, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableName], (err, res) => {
            if(err) throw err;
            cb(res);
        });
    },

    insertOne: function(burger_name, cb) {
       let queryString = 'INSERT INTO burgers SET ??';
       connection.query(queryString, {burger_name}, (err, res) => {
            if(err) throw err;
            cb(res);
        });
    },

    updateOne: function(boolean, idCol, id, cb) {
        let queryString = 'UPDATE burgers SET ?? WHERE ?? = ?';
        connection.query(queryString, [{devoured: boolean}, idCol, id], (err, res) => {
            if(err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;