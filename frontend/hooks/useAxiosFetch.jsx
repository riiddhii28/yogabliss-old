import { useEffect } from "react";
import axios from "axios";

const useAxiosFetch = () => {
    
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/',
      });

    //inceptors
    useEffect(() => {

        const requestInceptor = axios.interceptors.request.use((config) => {
            return config;
        }, function(error) {
            return Promise.reject(error);    
    });


    const responseInterceptor = axios.interceptors.response.use((response) => {
        return response;
    }, function(error) {
        return Promise.reject(error);    
    });

    return () => {
        axiosInstance.interceptors.request.eject(requestInceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);


    }

}, [axiosInstance])
      
  return axiosInstance;
}

export default useAxiosFetch