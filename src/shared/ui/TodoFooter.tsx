export function TodoFooter() {
  return (
    <footer
      id="footer"
      className="hidden px-[15px] py-[10px] bg-white dark:bg-slate-600 dark:text-white flex justify-between shadow-2xl"
    >
      <div id="counter">1 item left</div>
      <div className="flex gap-2.5" id="filter">
        <a href="#/" className="p-1 border-pink-500 dark:border-cyan-500">
          All
        </a>
        <a href="#/active" className="p-1 border-pink-500 dark:border-cyan-500">
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
  );
}
