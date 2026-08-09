function Button({ children, className = "" }) {
  return (
    <button
      className={`bg-primary-light text-surface p-3 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
