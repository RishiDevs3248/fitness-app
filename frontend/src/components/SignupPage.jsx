import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
    conpassword:""
  })

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value
    }
    )
  }

  const submitHandler = (e) => {
    e.preventDefault()

    // console.log(data)

    const getData = async () => {
      try {
        if(data.password == data.conpassword){
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        })
        const responseData = await response.json();
        toast.error(responseData.error);
        // console.log(responseData)
        if (responseData.redirect) {
          window.location.href = responseData.redirect;
        }
      }
      } catch (error) {
        console.log(error)
      }
    }
    getData()

  }
  return (
    <div className="bg-[url('./images/b1.jpeg')] bg-no-repeat bg-cover bg-center">
      <div className="flex justify-center items-center	">
        <div className="h-screen flex flex-col justify-center">
          <div className="rounded-2xl bg-slate-100 grid grid-cols-2">
          <div className="w-full">
              <img src="./images/b1.jpeg" alt="" className="max-h-96 h-96 p-[10px] rounded-2xl rounded-bl-2xl	" />
            </div>
            <div className="flex justify-center items-center	">
              <div className="flex flex-col justify-center">
                <div className="w-48">
                  <h2 className="text-center text-3xl font-bold">Student login page</h2>
                  <form onSubmit={submitHandler}>
                    <div className="border-2 mt-3">
                      <input type="email" name="email" className="w-48 text-center" placeholder="Email" onChange={changeHandler} required />
                    </div>
                    <div className="border-2 mt-3">
                      <input type="password" name="password" className="w-48 text-center" placeholder="Password" onChange={changeHandler} required />
                    </div>
                    <div className="border-2 mt-3">
                      <input type="password" name="conpassword" className="w-48 text-center" placeholder="Confirrm Password" onChange={changeHandler} required />
                    </div>
                    <div className="flex justify-center mt-3">
                      <button type="submit" className="bg-blue-500 rounded-lg w-full">Login</button>
                    </div>
                  </form>

                  <div className="flex justify-center">
                    <NavLink to={"/"} className="text-sky-500 mt-8 text-sm underline">Login Page</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
}