

import axios from "../axios";

class Cars{

        postCars = async (data) => {
            //   console.log(data);
            const promise = new Promise((resolve, reject) => {
                axios.post('cars', data)    // 20s
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            });

            return await promise;
            };


        GetCars = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('cars')
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

export default new Cars();