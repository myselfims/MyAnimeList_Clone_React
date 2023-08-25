import React from "react";
import VerticalCard from "../components/VerticalCard";

const Videos = () => {
  const loop = (range) => {
    let arr = [];
    for (let i = 0; i < range; i++) {
      arr.push(i);
    }
    return arr;
  };
  return (
    <div>
      <div className="w-full border-b bg-slate-700 border-slate-600 p-1">
        <h1 className="font-bold text-xl">Episode Videos</h1>
      </div>
      <div className="border p-2 border-slate-600">
        <div className="flex text-sky-200">
          <a className="hover:border-b" href="">
            Top
          </a>
          <p className="text-white mx-1">&gt;</p>
          <a className="hover:border-b" href="">
            Watch
          </a>
        </div>
        <div className="my-3  border-b text-slate-400">
          <a
            href=""
            className=" bg-white text-black hover:bg-white hover:text-black px-1"
          >
            Episodes
          </a>
          <a href="" className=" hover:bg-white hover:text-black px-1">
            Trailers
          </a>
        </div>
        <div className="my-6 py-1 flex justify-between border-b border-slate-600 text-slate-500">
          <div>
            <a
              href=""
              className=" bg-white rounded-md p-1 mx-1 text-black hover:bg-white hover:text-black px-1"
            >
              Just Added
            </a>
            <a
              href=""
              className=" hover:bg-white bg-slate-700 rounded-md p-1 mx-1 hover:text-black px-1"
            >
              Most Popular
            </a>
          </div>
          <button className="text-slate-400">Hide blocked videos</button>
        </div>

        <div className="flex flex-wrap justify-between">
          {loop(48).map((item) => {
            return <VerticalCard key={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Videos;
