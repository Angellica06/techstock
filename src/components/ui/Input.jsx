function Input({ type, placeholder }) {
  return (
    <input
      className="w-full border border-gray-300 p-3 rounded-lg shadow 
      outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
