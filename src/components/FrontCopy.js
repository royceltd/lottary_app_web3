import React from 'react';

import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum)

const Front = () => {
    return ( <body class="antialiased font-ssans flex bg-blue-200 h-screen">
    <div class="mx-auto m-8 space-y-6 flex flex-col">
      {/* <!--  Monthly card start  --> */}
  
      <div className='mx-auto md:w-1/4 w-1/2 mb-8 '>
          {/* <img src={Logo}  /> */}
              
        </div>
      <div className='flex flex-row space-x-6 mx-auto my-auto rounded-3xl border-white px-10 bg-blue-100 p-32'>
      <a href='https://patient-test.basic.docsun.health/'>
      <div class="pl-1 w-96 h-20 bg-green-400 rounded-lg shadow-md my-auto">
        <div class="flex w-full h-full py-2 px-4 bg-blue-200 rounded-lg justify-between">
  
          
          <div class="my-auto">
            <p class="font-bold">Patient's Login</p>
          </div>
          <div class="my-auto">
          {/* <img src={Patient} className="h-16" />                   */}
          </div>
        </div>
      </div>
      </a>
      
      
      <div class="pl-1 w-96 h-20 bg-purple-500 rounded-lg shadow-md ">
      <a href='https://doctor-test.docsun.health'>
        <div class="flex w-full h-full py-2 px-4  rounded-lg justify-between bg-blue-200 ">
          <div class="my-auto">
            <p class="font-bold">Doctor's Login</p>
            {/* <p class="text-lg">50%</p> */}
          </div>
          <div class="my-auto">
            {/* <img src={Doctor} className="h-16" /> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg> */}
          </div>
        </div>
        </a>
      </div>
  
      </div>
     
    </div>
  </body> );
}
 
export default Front;