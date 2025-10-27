 import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

import build from './assets/build.svg';
import Intro from './Components/Intro';
import diet from './Components/diet.svg';
import Content from './Components/Content'
import Mealrecord from './Components/Mealrecord';
import WeightLossTracker from './Components/WeightLossTracker';
import UserProgress from './Components/UserProgress';
import Home from './Components/Home';



    function HomePage() {
      return <div><Intro/></div>;
    }
  
  

    function AboutPage() {
      return <div><Mealrecord/></div>;
    }

     function StreakPage() {
      return <div><WeightLossTracker/></div>;
    }

     function LeadershipPage() {
      return <div><UserProgress/></div>;
    }
    
    function ContentPage() {
      return <div><Home/></div>;
    }



    function SignInPage() {
      return (
    
        
       
           
            <div className='fixed bg-orange-400 w-[140px] mt-16 p-2 text-center rounded-lg right-10'>
                      <>
                  <SignedIn>
                    < UserButton/>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                </>
          
            </div>
          
    
      );
    }

    function App() {
      return (
        <div>
            <div className=" max-w-7xl mx-auto flex items-center  justify-between">
                  <nav className="flex items-center ">
                      <Link><img src={build} alt="" className="h-24" /></Link>
                      <h1 className="text-xl text-blue-400 font-bold">Rebuild</h1>
                  </nav>
                  <nav className='flex  items-center'>
                    <Link className='hover:text-blue-500 p-2 rounded-md' to="/"></Link>
                    {/* <Link className='  hover:text-blue-500  p-2 rounded-md' to="/signin">SignIn</Link>  */}
                    {/* <Link className='hover:text-blue-500 p-2 rounded-md' to="/">Home</Link> <Link className='hover:text-blue-500 p-2 rounded-md' to="/chatgpt">GPT</Link> <Link className='hover:text-blue-500  p-2 rounded-md' to="/about">Logmeal</Link> <Link className='hover:text-blue-500  p-2 rounded-md' to="/streak">Streak</Link>  <Link className='hover:text-blue-500  p-2 rounded-md' to="/leadership">Leadership</Link> <Link className='  hover:text-blue-500  p-2 rounded-md' to="/signin">SignIn</Link>     */}
                  </nav>
             </div>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/gpt" element={<ContentPage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/streak" element={<StreakPage />} />
             <Route path="/leadership" element={<LeadershipPage />} />
            <Route 
              path="/signin"
              element={<SignInPage/>}/>
                {/* <>
                  <SignedIn>
                    < UserButton/>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                </>
              }
            /> */} 
          </Routes>

        <div className=' w-screen h-screen bg-violet-200'>
         {/* <SignedIn>

           <div className="mt-12 w-[600px]  flex items-center gap-4">
              <Link className='hover:bg-blue-600 bg-blue-400 mt-6 text-white text-xl p-2 rounded-md' to="/gpt">Ask GPT</Link> 
              <Link className='hover:bg-blue-600 bg-blue-400 mt-6 text-white text-xl p-2 rounded-md' to="/about">Logmeal</Link> 
              <Link className=' hover:bg-blue-600 bg-blue-400 mt-6 text-white text-xl p-2 rounded-md' to="/streak">Streak</Link>
              <Link className=' hover:bg-blue-600 bg-blue-400 mt-6 text-white text-xl p-2 rounded-md' to="/leadership">Leadership</Link>  
            </div> 

            
          </SignedIn>  */}
           
                  <SignedOut>
                          <div className="">
                                    <div className="flex max-w-7xl justify-between items-center">
                                      <h2 className='text-2xl text-center mt-12 font-bold'>You are signed out!!</h2>
                                        <div className="bg-black px-4 py-2 mt-12 rounded-lg text-white">
                                            <SignInButton />
                                        </div>
                                    </div>
                          </div>
                      
                    <Intro/>
                  </SignedOut>

                  <SignedIn>
                      <div className="w-screen">
                                    
                            <div className="flex justify-between  items-center  max-w-7xl mx-auto">
                                       <div className=" w-[600px]  flex items-center gap-3">
                                          <Link className='hover:bg-blue-600 bg-blue-400  text-white text-xl p-2 rounded-md' to="/gpt">Ask GPT</Link> 
                                          <Link className='hover:bg-blue-600 bg-blue-400  text-white text-xl p-2 rounded-md' to="/about">Logmeal</Link> 
                                          <Link className=' hover:bg-blue-600 bg-blue-400  text-white text-xl p-2 rounded-md' to="/streak">Streak</Link>
                                          <Link className=' hover:bg-blue-600 bg-blue-400  text-white text-xl p-2 rounded-md' to="/leadership">Leadership</Link>  
                                      </div> 

                                        <UserButton />
                            </div>
                          <div className="text-center w-[580px] mx-auto font-bold mt-32 text-green-600 text-2xl">
                              <h2>Welcome🎉</h2>
                              <p>You are signed in — this is Rebuild a smart weight loss application.</p>
                          </div>
                   
                      </div>
                  </SignedIn>

          
          
                      

          </div> 
          <div>
              
          </div>

        </div>
      );
    }

    export default App;