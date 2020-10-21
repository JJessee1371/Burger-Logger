const connection = require('./connection');

const orm = {
    selectAll: function(tableName, cb) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableName], (err, res) => {
            if(err) throw err;
            cb(res);
        });
    },

    insertOne: function(tableName, colName, colValue, cb) {
       let queryString = 'INSERT INTO ?? (?) VALUES (?)';
       connection.query(queryString, [tableName, colName, colValue], (err, res) => {
            if(err) throw err;
            cb(res);
        });
    },

    updateOne: function(tableName, newColVal, colId, itemId, cb) {
        let queryString = 'UPDATE ?? SET ?? WHERE ?? = ?';
        connection.query(queryString, [tableName, newColVal, colId, itemId], (err, res) => {
            if(err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;