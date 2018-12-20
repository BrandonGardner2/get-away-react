import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const User = () => {
  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className="text-white" nav caret>
          Brandon Gardner
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default User;
