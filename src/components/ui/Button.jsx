function Button({
  children,
  className = "",
  onClick,
  disabled,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary-light text-surface p-3 rounded-lg cursor-pointer ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
