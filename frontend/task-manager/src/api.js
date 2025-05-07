import { API_URL } from "./utils"

export const CreateTask = async (taskObj)=>{
    const url = `${API_URL}/tasks`;
    console.log('url',url)
    const options = {
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(taskObj)
    }
    try {
        const result = await fetch(url, options)
        const data = await result.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const GettAllTasks = async ()=>{
    const url = `${API_URL}/tasks`;
    console.log('url',url)
    const options = {
        method:'GET',
        headers:{
            'content-Type':'application/json'
        },
    }
    try {
        const result = await fetch(url, options)
        const data = await result.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const DeleteTaskById = async (id)=>{
    const url = `${API_URL}/tasks/${id}`;
    console.log('url',url)
    const options = {
        method:'DELETE',
        headers:{
            'content-Type':'application/json'
        },
    }
    try {
        const result = await fetch(url, options)
        const data = await result.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const UpdateTaskById = async (id,reqBody)=>{
    const url = `${API_URL}/tasks/${id}`;
    console.log('url',url)
    const options = {
        method:'PUT',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(reqBody)
    }
    try {
        const result = await fetch(url, options)
        const data = await result.json();
        return data;
    } catch (error) {
        return error;
    }
}