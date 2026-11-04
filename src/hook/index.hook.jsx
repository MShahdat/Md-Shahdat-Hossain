import { useMutation, useQuery } from "@tanstack/react-query"
import { createContact, getCategory, getConfigById, getEducation, getHeadingById, getProjects, getServices, getSkills, getTools } from "../api/index.api"


export const useGetConfigById = () => {
  return useQuery({
    queryKey: ["config"],
    queryFn: getConfigById
  })
}



export const useGetHeadingById = (id) => {
  return useQuery({
    queryKey: ["heading", id],
    queryFn: () => getHeadingById(id)
  })
}


export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategory
  })
}


export const useGetTools = () => {
  return useQuery({
    queryKey: ["tools"],
    queryFn: getTools
  })
}

export const useGetSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getSkills
  })
}


export const useGetProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects
  })
}


export const useGetServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices
  })
}


export const useGetEducations = () => {
  return useQuery({
    queryKey: ["educations"],
    queryFn: getEducation
  })
}


export const useCreateContact = () => {
  return useMutation({
    mutationFn: createContact
  })
}