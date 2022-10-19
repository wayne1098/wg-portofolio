import React from 'react'
import Store from '../assets/Store1.png';
export const Works = () => {
  return (

<div id='work' className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Works</h1>

  
</div>


  <div>
    <img
      className="object-cover w-full h-full mb-6 rounded shadow-lg "
      src={Store}
      alt=""
    />
     <a href='https://uxwing.com/coming-soon-icon/'>
     <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">DEMO</button>
                         </a>
                         <a href='https://github.com/wayne1098/POS-Store.git'>
                         <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">CODE</button>
                         </a>

  </div>


</div>
);
};