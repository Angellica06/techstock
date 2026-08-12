function Button({ children, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary-light text-surface p-3 rounded-lg cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
