import { toast, ToastContainer } from "react-toastify";

export default function WeightGain() {
    const submitHandler = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
        if (!isChecked) {
            toast.error("Please complete at least one Task!", {
                position: "top-center",
                autoClose: 2000,
                style: {
                    background: "#fff",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "16px"
                },
                icon: "⚠️",
            });
            return;
        }
    
        toast("🔥 Good job, You did well!", {
            position: "top-center",
            autoClose: 2000,
            style: {
                background: "#fff",
                color: "#000",
                fontWeight: "bold",
                fontSize: "16px"
            },
            icon: "🔥",
            
        });
    };
    

    return (
        <div className="p-[20px] bg-[url('./images/bg3.jpeg')] bg-no-repeat bg-cover bg-center h-screen w-screen">
            <form onSubmit={submitHandler}>
                <div className="flex justify-around ">
                    <div className="w-[25%] flex flex-col justify-between">
                        <div className={`bg-white p-[20px] px-[20px] rounded-lg flex flex-col justify-around`}>
                            <div className="">
                                <div className="mb-[20px]">
                                    Excerise
                                </div>
                                <input type="checkbox" className="mr-[10px]" id="e1" name="e1" value="Bike" />
                                <label for="e1">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e2" name="e2" value="Bike" />
                                <label for="e2">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e3" name="e3" value="Bike" />
                                <label for="e3">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e4" name="e4" value="Bike" />
                                <label for="e4">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e5" name="e5" value="Bike" />
                                <label for="e5">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e6" name="e6" value="Bike" />
                                <label for="e6">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e7" name="e7" value="Bike" />
                                <label for="e7">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e8" name="e8" value="Bike" />
                                <label for="e8">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e9" name="e9" value="Bike" />
                                <label for="e9">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>
                                <input type="checkbox" className="mr-[10px]" id="e10" name="e10" value="Bike" />
                                <label for="e10">Barbell Squats* – 4 sets × 8–10 reps</label><br></br>

                            </div>
                        </div>
                        <div className="flex justify-center mt-3">
                            <button type="submit" className="hover:bg-green-500 bg-[#6A6A6A] text-white transition duration-500 ease-in-out rounded-lg h-[35px] w-full">Submit</button>
                            <ToastContainer className="z-[5]" />
                        </div>

                    </div>
                    <div className={`bg-white p-[20px] px-[20px] rounded-lg w-[25%] h-[30%] flex flex-col justify-around`}>
                        <div className="">
                            <div>
                                Diet Plan
                            </div>
                            <input type="checkbox" className="mr-[10px]" id="f1" name="f1" value="Bike" />
                            <label for="f1">Breakfast
                                <div className="ml-[50px]">
                                    4 boiled or scrambled eggs
                                </div>
                                <div className="ml-[50px]">
                                    2 slices of whole grain toast with peanut butter
                                </div>
                                <div className="ml-[50px]">
                                    1 banana
                                </div>
                                <div className="ml-[50px]">
                                    1 glass of full-fat milk or a protein shake
                                </div>
                            </label><br></br>
                            <input type="checkbox" className="mr-[10px]" id="f2" name="f2" value="Bike" />
                            <label for="f2">Mid-Morning Snack

                                <div className="ml-[50px]">
                                    Handful of mixed nuts (almonds, walnuts, cashews)
                                </div>
                                <div className="ml-[50px]">
                                    1 apple or seasonal fruit
                                </div>
                                <div className="ml-[50px]">
                                    Greek yogurt or paneer cubes (100g)
                                </div>

                            </label><br></br>
                            <input type="checkbox" className="mr-[10px]" id="f3" name="f3" value="Bike" />
                            <label for="f3">Lunch

                                <div className="ml-[50px]">
                                    1 cup cooked rice or 2-3 chapatis
                                </div>
                                <div className="ml-[50px]">
                                    1 cup dal (lentils) or grilled chicken breast (150g)
                                </div>
                                <div className="ml-[50px]">
                                    1 cup vegetables (stir-fried or cooked)
                                </div>
                                <div className="ml-[50px]">
                                    1 bowl of curd or raita
                                </div>
                            </label><br></br>
                            <input type="checkbox" className="mr-[10px]" id="f4" name="f4" value="Bike" />
                            <label for="f4">Dinner

                                <div className="ml-[50px]">
                                    2-3 chapatis or 1 cup cooked rice
                                </div>
                                <div className="ml-[50px]">
                                    1 cup cooked vegetables
                                </div>
                                <div className="ml-[50px]">
                                    Grilled paneer/tofu/chicken/fish (150g)
                                </div>
                                <div className="ml-[50px]">
                                    Salad (cucumber, tomato, lettuce)
                                </div>
                            </label><br></br>

                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}