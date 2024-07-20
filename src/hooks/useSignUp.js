const useSignUp = () => {
  const signUp = async ({ email, password,name }) => {
    console.log("signup called");
    const URL = "https://ecomm-backend-266caf3bf048.herokuapp.com/api/v1/auth/signup";
    const OPTIONS = {
      method: "POST",
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password,name }),
    };
    const res = await fetch(URL, OPTIONS);
    const data = await res.json();
    console.log(data);
  };
  return {
    signUp,
  };
};

export default useSignUp;
