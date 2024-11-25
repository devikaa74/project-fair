import SERVER_URL from "./serverUrl"
import commonAPI from "./commonAPI"
// import projects from "../../../project-fair-server/models/projectModel"
// import projects from "../../../project-fair-server/models/projectModel"


//registerAPI called by Auth component when user click register button
export const registerAPI=async(reqBody)=>
{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//loginAPI called by Auth component when user click login btn

export const loginAPI=async (reqBody)=>
{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

// addProjectAPI called by Add component when user click add button add-project
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

// getHomeProjectAPI called by the component when page loaded in browser(useEffect)
export const getHomeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-project`,{})
}

// allProjectAPI called by Project component when page loaded in browser (useeffect)
export const allProjectAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-project?search=${searchKey}`,{},reqHeader)
}

// userProjectAPI called by Project component when page loaded in browser (useeffect)
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-project`,{},reqHeader)
}

// updateProjectAPI called by Edit component when user click update btn project/67289aa49cf3b48513b36ad8/edit
export const updateProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT", `${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

// userProjectRemoveAPI called by View component when user click delete btn 
export const userProjectRemoveAPI= async (id,reqHeader)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/projects/${id}/remove`,{},reqHeader)
}

// updateUserAPI called by Profile component when user click update btn edit-user
export const updateUserAPI= async (reqBody,reqHeader)=>{
    return await commonAPI("PUT", `${SERVER_URL}/edit-user`,reqBody,reqHeader)
}