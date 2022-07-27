
import axios from "../axios";


class RentalRatesService{

    postRentalRatesService = async (data) => {
        console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('rental_rates', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };

        GetRentalRates = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('rental_rates')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        PutRentalRates  = async (data) => {
            const promise = new Promise((resolve, reject) => {
               axios.put('rental_rates', data)
               .then((res) => {
                   return resolve(res)
               })
               .catch((err) => {
                   return resolve(err)
               })
            })
            return await promise;
       };


       deleteRentalRate = async (params) => {
        const promise = new Promise((resolve, reject) => {
           axios.delete('rental_rates', {params: params})
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


export default new RentalRatesService();