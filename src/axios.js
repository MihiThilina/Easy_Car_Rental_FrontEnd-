import axios from "axios";

//base Url

const instance = axios.create({
    baseURL: 'http://localhost:8080/BackEnd_war_exploded/',

});


export default instance;