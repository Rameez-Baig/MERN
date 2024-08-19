const {MongoClient} = require('mongodb')

let dbConnection

let dbURI = 'mongodb+srv://rameez:test123@nodetuts.tnlbhk6.mongodb.net/newdatabasr?retryWrites=true&w=majority';


module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(dbURI)
            .then((client) => {
                dbConnection= client.db()
                return cb()
            })
            .catch( (err) => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection 
}
