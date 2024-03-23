import React from 'react'
import { BsPersonWorkspace } from "react-icons/bs";
import LeftChart from "../../Charts/leftLinechart/leftlinechart.jsx";
import BigChart from '../../Charts/BigChart/BigChart.jsx';
import LineChart from './LineChart.jsx';

 


const Homepage = () => {
  return (
    <div className='bg-main-dark-bg m-10 flex flex-col gap-y-8 mt-24'>
        
        <div className='w-full flex flex-col gap-x-5 gap-y-2'>
          <p className='font-bold text-3xl text-white '>Dashboard</p>
          <div className='flex lg:flex-row flex-col gap-y-5 gap-x-5'>
            <div className='bg-gray-800 p-8 lg:w-[25%] w-[100%] '>
            <p className='text-light-gray-500 flex flex-row justify-start items-center gap-x-3 text-xl text-white'><span className='p-1 bg-[#8177d5] rounded-md'><BsPersonWorkspace color='#2e1cc9'/></span>Total Employees</p>
            <p className='mt-3 font-semibold text-white text-2xl'>12345</p>
            <p className='text-sm text-gray-500'>Active</p>
          </div>
          <div className='bg-gray-800 p-8 lg:w-[25%] w-[100%] '>
            <p className='text-light-gray-500 flex flex-row justify-start items-center gap-x-3 text-xl text-white'><span className='p-1 bg-[#8177d5] rounded-md'><BsPersonWorkspace color='#2e1cc9'/></span>Total Vendors</p>
            <p className='mt-3 font-semibold text-white text-2xl'>12345</p>
            <p className='text-sm text-gray-500'>Active</p>
          </div>
          <div className='bg-gray-800 p-8 lg:w-[25%] w-[100%] '>
            <p className='text-light-gray-500 flex flex-row justify-start items-center gap-x-3 text-xl text-white'><span className='p-1 bg-[#8177d5] rounded-md'><BsPersonWorkspace color='#2e1cc9'/></span>Total Sheds</p>
            <p className='mt-3 font-semibold text-white text-2xl'>12345</p>
            <p className='text-sm text-gray-500'>Active</p>
          </div>
          <div className='bg-gray-800 p-8 lg:w-[25%] w-[100%] '>
            <p className='text-light-gray-500 flex flex-row justify-start items-center gap-x-3 text-xl text-white'><span className='p-1 bg-[#8177d5] rounded-md'><BsPersonWorkspace color='#2e1cc9'/></span>Total Services</p>
            <p className='mt-3 font-semibold text-white text-2xl'>12345</p>
            <p className='text-sm text-gray-500'>Active</p>
          </div>
          </div>
        </div>
    
        
            

<div class="relative overflow-x-auto">
    <p className='font-bold text-3xl text-white mb-3 '>Recent Transactions</p>
    <table class="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-b bg-gray-800 text-white border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class=" border-b bg-gray-800 text-white border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class=" bg-gray-800 text-white">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div>
<LineChart/>
</div>


        
        
        <div className='flex flex-row gap-x-5'>
           <div className='w-[50%] '>
             <LeftChart/>
           </div>
            <div className='w-[50%] '>
                <BigChart/>
            </div>
        </div>
    </div>
  )
}

export default Homepage