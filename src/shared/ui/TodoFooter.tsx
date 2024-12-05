interface TodoFooterProps {
  numberItemLeft: number;
  onCompleted: () => void;
}

export function TodoFooter({ numberItemLeft, onCompleted }: TodoFooterProps) {
  return (
    <footer className="px-[15px] py-[10px] bg-white dark:bg-slate-600 dark:text-white flex justify-between shadow-2xl">
      <div id="counter">{numberItemLeft} item left</div>
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
      <button
        className="hover:underline"
        id="clear-completed"
        onClick={onCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}
