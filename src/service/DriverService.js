import axios from "../axios";

class Driver{
             
    postDriver = async (data) => {
          console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('driver', data)   
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
     };

        GetDriver = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('driver')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }       

}


export default new Driver();