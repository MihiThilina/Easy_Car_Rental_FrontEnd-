import axios from "../axios";

class Booking{

    postBooking = async (data) => {
        //   console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('booking', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
        
        };

        // http://localhost:8080/BackEnd_war_exploded/booking/bookingID
    
        GetBooking = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('booking')
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

export default new Booking();