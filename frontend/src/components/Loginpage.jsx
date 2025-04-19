import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
    conpassword: ""
  });
  const [data2, setData2] = useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(true);

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value
    });
  }
  const changeHandler2 = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData2({
      ...data2,
      [name]: value
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data2),
          credentials: "include",
        });
        const responseData = await response.json();
        toast.error(responseData.error);
        if (responseData.redirect) {
          window.location.href = responseData.redirect;
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }

  const submitHandler2 = (e) => {
    e.preventDefault();
    const getData = async () => {
      try {
        if (data.password === data.conpassword) {
          const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
          });
          const responseData = await response.json();
          setLogin(!login)
          console.log(login,"-------------------------------")
          toast.error(responseData.error);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }

  return (
    <div className="bg-[url('./images/b1.jpeg')] bg-no-repeat bg-cover bg-center">
        <div className="flex justify-center items-center">
          <div className="h-screen flex flex-col justify-center relative">
            <div className="rounded-2xl bg-slate-100 flex flex-row justify-evenly w-[700px] h-[385px]">
              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center">
                  <div className="w-48">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={submitHandler}>
                      <div className="border-2 mt-3">
                        <input type="email" name="email" className="w-48 text-center text-[14px]" placeholder="Email" onChange={changeHandler2} required />
                      </div>
                      <div className="border-2 mt-3">
                        <input type="password" name="password" className="w-48 text-center" placeholder="Password" onChange={changeHandler2} required />
                      </div>
                      <div className="flex justify-center mt-3">
                        <button type="submit" className="bg-blue-500 rounded-lg w-full">Login</button>
                      </div>
                    </form>

                    <div className="flex justify-center">
                      <button onClick={() => { setLogin(false) }} className="text-sky-500 mt-8 text-sm underline">Sign up Page</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center">
                  <div className="w-48">
                    <h2 className="text-center text-3xl font-bold">Sign Up</h2>
                    <form onSubmit={submitHandler2}>
                      <div className="border-2 mt-3">
                        <input type="email" name="email" className="w-48 text-center" placeholder="Email" onChange={changeHandler} required />
                      </div>
                      <div className="border-2 mt-3">
                        <input type="password" name="password" className="w-48 text-center" placeholder="Password" onChange={changeHandler} required />
                      </div>
                      <div className="border-2 mt-3">
                        <input type="password" name="conpassword" className="w-48 text-center" placeholder="Confirm Password" onChange={changeHandler} required />
                      </div>
                      <div className="flex justify-center mt-3">
                        <button type="submit" className="bg-blue-500 rounded-lg w-full">Sign Up</button>
                      </div>
                    </form>

                    <div className="flex justify-center">
                      <button onClick={() => { setLogin(true) }} className="text-sky-500 mt-8 text-sm underline">Login Page</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
              <div className={`transition-transform duration-1000 ease-in-out z-10 ${login ? "translate-x-79" : "translate-x-0"} absolute`}>
                <img src="./images/b1.jpeg" alt="" className="max-h-96 h-96 p-[10px] rounded-2xl rounded-bl-2xl" />
              </div>

            <ToastContainer />
          </div>
        </div> 
    </div>
  );
}
