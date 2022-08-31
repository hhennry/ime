import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import {
  useMenuState,
  MenuButton,
  Menu,
  MenuItem,
} from "reakit";

export function L61c0() {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu}>
        <div className="_6aLeJ1j1 p-2">
            <MagnifyingGlass size={22} />
        </div>
      </MenuButton>
      <Menu {...menu} aria-label="Pesquisar?">
        <MenuItem {...menu}>Search</MenuItem>
      </Menu>
    </>
  );
}
