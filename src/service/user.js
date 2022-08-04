
import axios from "../axios";

class User{

    PutUser  = async (data) => {
        const promise = new Promise((resolve, reject) => {
           axios.put('user', data)
           .then((res) => {
               return resolve(res)
           })
           .catch((err) => {
               return resolve(err)
           })
        })
        return await promise;
   };

}

export default new User();