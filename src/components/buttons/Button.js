import * as btnColors from "./colors";

export default function Button({
  handleOnClick = () => console.log("¡button clicked!"),
  color = btnColors.primary,
  children,
}) {
  return (
    <button
      onClick={(event) => handleOnClick(event)}
      className={`button--${color}`}
    >
      {children}
    </button>
  );
}
