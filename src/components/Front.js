import React from 'react';

import { ethers } from "ethers";

// https://codesandbox.io/s/hpo28?file=/src/pages/Home.js
// https://codesandbox.io/s/me5vnd?file=/src/App.js
// https://www.npmjs.com/package/react-crypto-chart

const provider = new ethers.providers.Web3Provider(window.ethereum)

const Front = () => {

  async function connectMetamask(){
   const accounts= await provider.send("eth_requestAccounts", []);

   console.log(accounts)

  }
    return ( <body class="antialiased font-ssans flex bg-blue-200 h-screen">
    <div class="mx-auto m-8 space-y-6 flex flex-col">
      {/* <!--  Monthly card start  --> */}
  
      <div className='mx-auto md:w-1/4 w-1/2 mb-8 '>
          {/* <img src={Logo}  /> */}
          {/* bbb */}
              
        </div>
      <div className='flex flex-row space-x-6 mx-auto my-auto rounded-3xl border-white px-10 bg-blue-100 p-32 w-3/4'>
      
      
      
      <div class="pl-1 w-96 h-20  rounded-lg shadow-md ">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={()=>connectMetamask()}
      >Connect to metamast</button>
      
      </div>
      <div class="pl-1 w-96 h-20  rounded-lg shadow-md ">
      
      </div>
  
      </div>
     
    </div>
  </body> );
}
 
export default Front;