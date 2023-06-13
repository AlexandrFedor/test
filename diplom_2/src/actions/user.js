import axios from "axios";
import { setUser } from "../reducers/userReducer";
import { API_URL } from "../config";

export const registration = async (username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}auth/registration`,
      {
        username,
        password,
      }
    );
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login =  (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(
             ` ${API_URL}auth/login`,
              {
                username,
                password,
              }
            );
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
          
          } catch (e) {
            alert(e.response.data.message);
          }
    }
   
  };
  

  export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}


export const uploadAvatar =  (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${API_URL}auth/avatar`, formData,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
 
        } catch (e) {
            console.log(e)
        }
    }
}



export const deleteAvatar =  () => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}auth/avatar`, 
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
 
        } catch (e) {
            console.log(e)
        }
    }
}
