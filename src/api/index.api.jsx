import apiClient from "../lib/apiClient"

const id = import.meta.env.VITE_API_CONFIG_ID


export const getConfigById = () => {
  return apiClient(`/site-config/${id}`)
}



export const getHeadingById = (id) => {
  return apiClient(`/heading/${id}`)
}


export const getCategory = () => {
  return apiClient('/categories')
}


export const getSkills = () => {
  return apiClient('/skill')
}


export const getTools = () => {
  return apiClient('/tool')
}

export const getProjects = () => {
  return apiClient('/projects')
}


export const getServices = () => {
  return apiClient('/services')
}


export const getEducation = () => {
  return apiClient('/education')
}


export const createContact = (payload) => {
  return apiClient('/contact', {
    method: "POST",
    body: payload
  })
}