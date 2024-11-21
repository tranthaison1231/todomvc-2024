import React from "react";

export function TodoList() {
  return (
    <div className="flex flex-col">
      <h1 className="text-[#b83f45] dark:text-cyan-500 text-[80px] text-center my-[40px] font-extralight hover:text-cyan-500">
        todos
      </h1>
      <div className="flex relative">
        <div className="absolute top-[20px] left-[20px]" id="toggle"></div>
        <input
          id="input"
          placeholder="What needs to be done?"
          className="pl-[60px] py-[16px] pr-[16px] dark:bg-slate-600 dark:text-white shadow-2xl h-[65px] w-[550px] text-2xl font-extralight outline-none"
        />
      </div>
      <ul
        className="bg-white dark:bg-slate-600 shadow-2xl border-t border-[#e6e6e6] text-2xl text-[#484848] dark:text-[#e6e6e6] font-extralight"
        id="list"
      ></ul>
      <footer
        id="footer"
        className="hidden px-[15px] py-[10px] bg-white dark:bg-slate-600 dark:text-white flex justify-between shadow-2xl"
      >
        <div id="counter">1 item left</div>
        <div className="flex gap-2.5" id="filter">
          <a href="#/" className="p-1 border-pink-500 dark:border-cyan-500">
            All
          </a>
          <a
            href="#/active"
            className="p-1 border-pink-500 dark:border-cyan-500"
          >
            Active
          </a>
          <a
            href="#/completed"
            className="p-1 border-pink-500 dark:border-cyan-500"
          >
            Completed
          </a>
        </div>
        <button className="hover:underline" id="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
}
