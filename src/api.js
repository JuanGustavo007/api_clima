import axios from 'axios'


const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?q=jundiai&appid=3e76c7ae4971bf37db1048d87b268a79&units=metric&lang=pt_br",
})

export default api;