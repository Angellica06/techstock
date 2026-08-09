function Input({ type, placeholder }) {
  return (
    <input
      className="border border-gray-300 p-3 rounded-lg shadow"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
