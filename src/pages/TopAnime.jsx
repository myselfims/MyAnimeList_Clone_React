import React from "react";
import SignupBanner from "../components/SignupBanner";

import TableCard from "../components/TableCard";

const TopAnime = () => {

    const loop = (range)=>{
        let arr = []
        for (let i=0;i<range;i++){
            arr.push(i)
        }
        return arr;
    }

  return (
    <div>
      <SignupBanner />
      <div className="w-full p-1">
        <h1 className="font-bold text-xl">Top Anime</h1>
      </div>
      <div className="content border px-3 border-slate-600">
        <div className="flex text-sky-200">
          <a className="hover:border-b" href="">
            Top
          </a>
          <p className="text-white mx-1">&gt;</p>
          <a className="hover:border-b" href="">
            Anime
          </a>
          <p className="text-white mx-1">&gt;</p>
          <a className="hover:border-b" href="">
            Top Anime
          </a>
        </div>
        <div className="my-3 py-1 border-b text-slate-400">
          <a
            href=""
            className=" bg-white text-black hover:bg-white hover:text-black px-1"
          >
            All Anime
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Top Airing
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Top Upcoming
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Top TV Series
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Top Movies
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Top OVAs
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Top ONAs
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Top Specials
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Most Popular
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Most Favorited
          </a>
        </div>
        <div>
          <div className="flex mt-6 justify-between py-2 items-end">
            <div className="flex items-end">
              <h1 className="font-bold text-xl mr-4">Top Anime Series</h1>
              <p style={{ fontSize: "10px" }} className="text-xs">
                Updated twice a day. (
                <a
                  className="text-blue-500 hover:border-b border-slate-600-b"
                  href=""
                >
                  How do we rank shows?
                </a>
                )
              </p>
            </div>
            <button className="p-1 text-xs text-white bg-blue-500">
              Next 50
            </button>
          </div>
          <div>
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <td className="border border-slate-600 text-center">Rank</td>
                  <td className="border border-slate-600 text-center">Title</td>
                  <td className="border border-slate-600 text-center">Score</td>
                  <td className="border border-slate-600 text-center">
                    Your Score
                  </td>
                  <td className="border border-slate-600 text-center">
                    Status
                  </td>
                </tr>
              </thead>
              <tbody>
                {loop(10).map((item)=>{
                    return <TableCard index={item}/>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAnime;
