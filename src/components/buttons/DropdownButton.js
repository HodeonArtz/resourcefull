import { useState } from "react";
import * as btnColors from "./colors";
import { ReactComponent as ArrowIcon } from "../../assets/icons/caret-down.svg";

export function DropdownItem({ handleOnClick, children }) {
  return (
    <li className="dropdown-list__item">
      <button className="dropdown-list__item__btn" onClick={handleOnClick}>
        {children}
      </button>
    </li>
  );
}

export function DropdownButton({
  text = "",
  iconComponent,
  color = btnColors.primary,
  children, // specify DropdownListItem
}) {
  const [isOpened, setIsOpened] = useState(false);

  function handleOnClick(event) {
    event.stopPropagation();
    setIsOpened((isOpened) => !isOpened);
  }

  function handleOnClickOutside(event) {
    if (!event.target.closest(`.dropdown-button--${color}`)) {
      setIsOpened(false);
    }
  }

  if (isOpened) {
    document.addEventListener("click", handleOnClickOutside);
  }
  if (!isOpened) {
    document.removeEventListener("click", handleOnClickOutside);
  }

  return (
    <button
      className={`dropdown-button--${color}`}
      onClick={(event) => handleOnClick(event)}
    >
      {iconComponent}
      <ArrowIcon />
      <span className="dropdown-button__text">{text}</span>

      {isOpened && <ul className="dropdown-list">{children}</ul>}
    </button>
  );
}
