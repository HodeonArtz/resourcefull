import Input from "./Input";

export function TextInput({
  handleOnChange,
  value = "",
  title = "",
  icon = false,
  children,
}) {
  return (
    <div className="input__container">
      {title.trim() !== "" && (
        <label htmlFor="" className="input__label">
          {title}
        </label>
      )}
      <Input handleOnChange={handleOnChange} value={value} icon={icon}>
        {children}
      </Input>
    </div>
  );
}
