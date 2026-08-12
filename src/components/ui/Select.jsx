import { MdKeyboardArrowDown } from "react-icons/md";

function Select({ options }) {
  return (
    <div className="relative">
      <select
        className="w-full appearance-none rounded-lg border border-gray-300 py-3 pl-4 pr-11 shadow 
      outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <MdKeyboardArrowDown
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={22}
      />
    </div>
  );
}

export default Select;
