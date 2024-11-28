type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ onChange, value, onKeyUp }: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder="What needs to be done?"
      className="pl-[60px] py-[16px] pr-[16px] dark:bg-slate-600 dark:text-white shadow-2xl h-[65px] w-[550px] text-2xl font-extralight outline-none"
    />
  );
}
