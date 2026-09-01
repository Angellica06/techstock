import { FaXmark } from "react-icons/fa6";

function Toast({ message, type = "success", onClose }) {
  if (!message) return null;

  return (
    <div className="fixed right-6 top-6 z-50 flex items-center bg-white gap-4 rounded-lg pr-4 shadow-lg">
      <div className="flex">
        <p
          className={
            type === "success"
              ? "font-medium text-green-600 bg-green-200 p-4 rounded-l-lg"
              : type === "warning"
                ? "font-medium text-yellow-600 bg-yellow-200 p-4 rounded-l-lg"
                : "font-medium text-red-600 bg-red-200 p-4 rounded-l-lg"
          }
        >
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="font-sem text-gray-500 hover:text-red-600 cursor-pointer ml-4"
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
}

export default Toast;
