// const getClient = require('./utils').getClient;
//
// const query = 'SELECT * FROM poker.users WHERE username=?';
// exports.getUser = (userName, callback, errorCallback) => {
//     const client = getClient();
//     console.log(userName);
//     client.execute(query, [userName], function(err, result) {
//         if (err) {
//             errorCallback(err);
//             return;
//         }
//         callback(result.rows[0]);
//     });
// };

const users = {
  eran: {
    userName: 'eran',
    password: '1234'
  }
};

exports.getUser = (userName, callback, errorCallback) => {
  users[userName] ? callback(users[userName]) : errorCallback({error: 'user not found'});
};
