var db = require('../config/connection')
var collection = require('../config/collection')
const bcrypt = require('bcrypt');
const { response } = require('../app');


module.exports = {
    DoSignup: (user) => {
        return new Promise(async (resolve, reject) => {
            var HaveUser = await db.get().collection(collection.ADMIN_COLLECTION).findOne({"email": user.email}).then((response)=>{
                console.log(response);
            })
            console.log(HaveUser);
            if(!HaveUser){
                await db.get().collection(collection.ADMIN_COLLECTION).insertOne(user);
            }
            resolve()

        })
    }
}