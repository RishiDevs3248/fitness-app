import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProfilePage() {
    const [data, setData] = useState({
        Age: "",
        Gender: "Male",
        Height: "",
        Weight: ""
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

    const [stateBmi, setstateBmi] = useState();

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     console.log(
    //         data
    //     )
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        const heightInMeters = data.Height / 100;
        const weight = data.Weight;

        const bmi = weight / (heightInMeters * heightInMeters);

        console.log("User Data:", data);
        console.log("Calculated BMI:", bmi.toFixed(2));
        setstateBmi(bmi)

    };


    return (
        <div className="p-[20px] bg-[url('./images/bg.jpg')] bg-no-repeat bg-cover bg-center h-screen w-screen">
            <div className="h-full flex justify-center items-center">
                <div className={`bg-white p-[20px] px-[${stateBmi ? 30 : 20}px] rounded-lg w-[25%] h-[${stateBmi ? 50 : 30}%] flex flex-col justify-around`}>
                    <form onSubmit={submitHandler} className="w-full ">
                        <div className=" mt-3 flex justify-around">
                            <div className="w-[30%]">Age :</div>
                            <input type="number" name="Age" className="w-48 text-center" placeholder="Age" onChange={changeHandler} required />
                        </div>
                        <div className="mt-3 flex justify-around">
                            <div className="w-[30%]">Gender :</div>
                            <select
                                name="Gender"
                                value={data.Gender}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        Gender: e.target.value
                                    })
                                }}
                                className="w-48 text-center"
                                required
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mt-3 flex justify-around">
                            <div className="w-[30%]">Height :</div>
                            <input type="number" name="Height" className="w-48 text-center" placeholder="Height" onChange={changeHandler} required />
                        </div>
                        <div className="mt-3 flex justify-around">
                            <div className="w-[30%]">Weight :</div>
                            <input type="number" name="Weight" className="w-48 text-center" placeholder="Weight" onChange={changeHandler} required />
                        </div>
                        <div className="flex justify-center mt-3">
                            <button type="submit" className="bg-[#151515] hover:bg-[#6A6A6A] text-white transition duration-500 ease-in-out rounded-lg w-full">Calculate</button>
                        </div>
                    </form>
                    {stateBmi ?
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center w-full">
                                <div className="">
                                    <div className="flex justify-center">
                                        <div>BMI Calculated : </div>
                                        <div className="" >{stateBmi}</div></div>
                                    <div className="text-center">
                                        <NavLink to={"/WeightGain"} className="text-sky-500 mt-8 text-sm underline">Weight Gain</NavLink>
                                    </div>
                                    <div className="text-center">
                                        <NavLink to={"/WeightLoss"} className="text-sky-500 mt-8 text-sm underline">Weight Loss</NavLink>
                                    </div>
                                    <div className="text-center">
                                        <NavLink to={"/BuildMus"} className="text-sky-500 mt-8 text-sm underline">Build Muscle</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>}
                </div>



            </div>
        </div>
    )
}