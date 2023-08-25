import React from "react";
import {AiFillStar} from 'react-icons/ai'

const TableCard = ({index}) => {
  return (
    <tr className="border border-slate-600">
      <td>
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-bold">{index+1}</h1>
        </div>
      </td>
      <td className="border border-slate-600">
        <div className="flex p-2">
          <img
            className="w-12 mx-3 h-20"
            src="https://i.pinimg.com/750x/5e/8d/fc/5e8dfc7210d98ff44bd04a2804875562.jpg"
            alt=""
          />
          <div>
            <h1 className="font-bold">Fullmetal Alchemist: Brotherhood</h1>
            <p className="text-slate-500 text-xs">TV (64 eps)</p>
            <p className="text-slate-500 text-xs">Apr 2009 - Jul 2010</p>
            <p className="text-slate-500 text-xs">3,215,053 members</p>
          </div>
        </div>
      </td>
      <td className="border border-slate-600">
        <div className="w-full flex justify-center flex-col items-center">
          <AiFillStar className="text-yellow-400 w-5 h-5" />
          <p className="font-bold">9.10</p>
        </div>
      </td>
      <td className="border border-slate-600">
        <div className="w-full flex justify-center flex-col items-center">
          <AiFillStar className="w-5 h-5" />
          <p className="text-slate-500">N/A</p>
        </div>
      </td>
      <td className="">
        <div className="flex justify-center items-center">
          <button className="bg-blue-700 hover:opacity-70 transition-all text-white px-4 py-1 rounded">
            Add to list
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableCard;
