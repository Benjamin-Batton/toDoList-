import {useState , useCallback ,useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setAuthUserData} from "../components/Auth/loginReducer.js";
import {removeUserData} from "../components/Auth/loginReducer.js";

const LocalStorageName="userData";

export const useLogin = ()=>{
    const dispatch = useDispatch();

    const login = useCallback( async (token,userId)=>{
       try {
        dispatch(setAuthUserData({token,userId,isAuth:true}));
        //TODO change object token and userid
        localStorage.setItem(LocalStorageName,JSON.stringify({token:token,userId:userId}));
      
       } catch (error) {
           throw new Error(error);
       } 
    },[]);
    const logout = useCallback(()=>{
        dispatch(removeUserData());
        localStorage.removeItem(LocalStorageName);
    })
    
    useEffect(()=>{
        const localStorageData = JSON.parse(localStorage.getItem(LocalStorageName));
        if(localStorageData && localStorageData.token){
            login(localStorageData.token,localStorageData.userId);
        }
    },[login])
    return {login,logout};
}