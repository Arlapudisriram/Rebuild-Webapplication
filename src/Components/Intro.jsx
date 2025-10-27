



    function SignInPage() {
      return (
        <div>
          <h1>SignIn</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      );
    }
function Intro() {
  return (
    <div className="w-screen">

        <div className="text-center w-[500px] mx-auto  transition-all duration-300 rounded-lg mt-12">
            <h1 className="text-3xl text-violet-400 font-bold">Smart weight loss companion</h1>
            <h2 className="text-xl text-orange-300 font-bold">Lose weight, tone up and gain strength at home</h2>        
        </div> 


            <div className=" flex  mx-auto w-full items-center cursor-pointer  gap-14 mt-14">
                <div className=" w-[300px] hover:scale-110 transition-all duration-500 border bg-neutral-50 p-4 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1651718243509-742f5bd5836c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRlcmlhbiUyMGRpZXQlNUN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&q=60&w=500" alt="" className="h-52 rounded-lg" />
                    <span className="text-2xl font-bold">Diet Plan</span>
                    <p className="mt-4 text-neutral-600"><span className="mt-2">Explicabo, alias temporibus? Vel delectus, numquam dolorum quia qui eligendi distinctio, ullam porro, optio iste eius</span></p>
                </div>

                <div className=" w-[300px] hover:scale-110 transition-all duration-500 border bg-neutral-50 p-4 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className="h-52 rounded-lg" />
                    <span className="text-2xl font-bold">Weight Loss</span>
                    <p className="mt-4 text-neutral-600"><span className="mt-2">Explicabo, alias temporibus? Vel delectus, numquam dolorum quia qui eligendi distinctio, ullam porro, optio iste eius</span></p>
                </div>

                <div className=" w-[300px] hover:scale-110 transition-all duration-500  border bg-neutral-50 p-4 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500" alt="" className="h-52 rounded-lg" />
                    <span className="text-2xl font-bold">Streaks/XP</span>
                    <p className="mt-4 text-neutral-600"><span className="mt-2">Explicabo, alias temporibus? Vel delectus, numquam dolorum quia qui eligendi distinctio, ullam porro, optio iste eius</span></p>
                </div>

                <div className=" w-[300px] hover:scale-110 transition-all duration-500 border bg-neutral-50 p-4 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" className="h-52 rounded-lg" />
                    <span className="text-2xl font-bold">Leaderboard</span>
                    <p className="mt-4 text-neutral-600"><span className="mt-2">Explicabo, alias temporibus? Vel delectus, numquam dolorum quia qui eligendi distinctio, ullam porro, optio iste eius</span></p>
                </div>
                
   

           </div>

        

    </div>
  )
}

export default Intro
