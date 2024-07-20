import { useContext } from "react";
import AppContext from "../context/appContext";

const useLogin = () => {
    const {appLogin} = useContext(AppContext);
    const login = async ({ email, password }) => {
        try {
            console.log("login called");
      const URL = "http://localhost:9000/api/v1/auth/login";
      const OPTIONS = {
        method: "POST",
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      };
      const res = await fetch(URL, OPTIONS);
      const data = await res.json();
      if(data.status==="success"){
        appLogin(data.data.user);
        localStorage.setItem("authorization",data.data.token);
        console.log("Logged In");
      }
      else{
        console.log("Error",data.message);
      }
      console.log(data);
        } catch (error) {
          console.log(error.message);
        }
      
    };
    return {
      login,
    };
  };
  
  export default useLogin;
  