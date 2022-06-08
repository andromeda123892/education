import { $authHost,$host } from "./index";

export const catalog = async () =>{
    const token = localStorage.getItem('token')
    console.log(token)
    const joffrey = await $host.post('api/catalog', {token})
    console.log(joffrey.data)
    if (joffrey){
        return (true)
    }
    else{
        return (false)
    }
}

export const createItem = async (item) => {
    const {data} = await $authHost.post('api/type', item)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createTask = async (values) => {
    console.log(values.get('info'))
    const {data} = await $authHost.post('api/exercise', values)
    return data
}

export const createTheme = async (values) => {
    const {data} = await $authHost.post('api/themes', values)
    return data
}

export const createCompilation = async (values) => {
    const {data} = await $authHost.post('api/themes/Compilation/', values)
    return data
}

export const fetchThemes = async () => {
    const {data} = await $host.get('api/themes')
    return data
}

export const fetchTasks = async () => {
    const {data} = await $host.get('api/exercise')
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.post('api/exercise/' + id)
    return data
}

export const fetchOneTheme = async (id) => {
    const {data} = await $host.post('api/themes/material/' + id)
    return data
}
