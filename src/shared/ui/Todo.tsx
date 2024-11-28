interface TodoProps {
  content: string;
  checked?: boolean;
}

export function Todo({ content, checked }: TodoProps) {
  return (
    <li className="p-[15px] border-b border-[#ededed] flex items-center group">
      <div className="mr-[15px] rounded-full size-10 border flex justify-center items-center">
        {checked && (
          <svg
            className="text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </div>
      {content}
      <svg
        className="ml-auto cursor-pointer hidden group-hover:block"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </li>
  );
}
