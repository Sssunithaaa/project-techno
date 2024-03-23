import React from 'react'
import Toolchart from './toolchart'
import { ToolsData } from '../../data';
const ToolTable = ({ data }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-400">
      <thead className="text-xs uppercase bg-gray-700 text-gray-400">
        <tr>
          <th className="px-6 py-3">Product name</th>
          <th className="px-6 py-3">Code</th>
          <th className="px-6 py-3">Quantity</th>
          <th className="px-6 py-3">Max Length</th>
          <th className="px-6 py-3">Cost</th>
        </tr>
      </thead>
      <tbody className='overflow-y-auto h-screen'>
        {data.map(tool => (
          <tr key={tool.id} className="border-b bg-gray-800 text-white border-gray-700">
            <td className="px-6 py-4 whitespace-nowrap">{tool.name}</td>
            <td className="px-6 py-4">{tool.code}</td>
            <td className="px-6 py-4">{tool.quantity}</td>
            <td className="px-6 py-4">{tool.maxLength}</td>
            <td className="px-6 py-4">{tool.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const ToolCharts = () => {
  return (
    <div className='flex flex-row'>

        <div className='flex flex-col my-5 w-[50%]'>
           <div className='flex flex-row gap-x-5 w-[100%] mx-5'>
             <div className="h-[100%] w-[100%] bg-gray-800 text-white p-5 mx-5 flex flex-col">
        <h2 className="text-3xl  uppercase font-bold my-5">Tool Information</h2>
        <div className="flex flex-col gap-y-5">
          <p>Tool name:</p>
        <p>Tool code:</p>
        <p>Length of cut:</p>
        <p>Cost:</p>
        </div>
      </div>
        
           </div>
        <div className='w-[100%] h-[100%]'>
            <Toolchart/>
        </div>
        </div>
        <div className='m-5 w-[50%]'>
        <ToolTable data={ToolsData}/>
        </div>
    </div>
  )
}

export default ToolCharts