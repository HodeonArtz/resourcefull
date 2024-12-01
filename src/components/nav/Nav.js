import { DropdownItem, DropdownButton } from "../buttons/DropdownButton";
import { ReactComponent as AddIcon } from "../../assets/icons/add-outline-white.svg";
import { ReactComponent as LinkIcon } from "../../assets/icons/link.svg";
import { ReactComponent as ClipboardIcon } from "../../assets/icons/clipboard-outline.svg";

import * as btnColors from "../buttons/colors";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <h1 className="nav__logo logo">Resourcefull</h1>
      </div>
      <div className="nav__content">
        <div className="nav__content-left">
          <DropdownButton
            color={btnColors.secondary}
            iconComponent={<AddIcon />}
          >
            <DropdownItem>
              <LinkIcon />
              <span className="dropdown-list__item__text">New resource</span>
            </DropdownItem>
            <DropdownItem>
              <ClipboardIcon />
              <span className="dropdown-list__item__text">New list</span>
            </DropdownItem>
          </DropdownButton>
        </div>
        <div className="nav__content-center"></div>
        <div className="nav__content-right"></div>
      </div>
    </nav>
  );
}
