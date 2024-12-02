export default function Input({
  value = "",
  handleOnChange,
  icon = false,
  children,
  type = "text",
}) {
  return (
    <div className={`input input--${type}`}>
      {icon && <div className="input__icon">{icon}</div>}
      <input
        type={type}
        placeholder={children}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}
