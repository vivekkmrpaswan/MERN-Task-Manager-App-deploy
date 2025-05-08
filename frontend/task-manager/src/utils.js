import { toast } from "react-toastify";

export const notify = (message, type)=>{
    toast[type](message)
}

// export const API_URL = 'http://localhost:8080'


export const API_URL = 'https://mern-task-manager-app-deploy-1.onrender.com'