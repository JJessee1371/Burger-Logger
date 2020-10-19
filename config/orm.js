const connection = require('./connection');

const orm = {
    selectAll: function(tableName) {
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableName], (err, res) => {
            if(err) throw err;
            console.log(res);
        });
    },

    insertOne: function(name) {
       let queryString = 'INSERT INTO burgers SET ??';
       connection.query(queryString,
        {
            burger_name: name
        },
        (err, res) => {
            if(err) throw err;
            console.log(res);
        }) 
    },

    updateOne: function(boolean, idCol, id) {
        let queryString = 'UPDATE burgers SET ?? WHERE ?? = ?';
        connection.query(queryString, [{devoured: true}, idCol, id], (err, res) => {
            if(err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;