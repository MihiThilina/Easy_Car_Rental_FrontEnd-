

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
    

}

export default new Booking();