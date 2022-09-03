import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import {
  useMenuState,
  MenuButton,
  Menu,
  MenuItem,
} from "reakit";
import { C27z7 } from "./2M7B6sE8";

export function L61c0() {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu}>
        <div className="_6aLeJ1j1 p-2">
            <MagnifyingGlass size={22} />
        </div>
      </MenuButton>
      <Menu {...menu} aria-label="Pesquisar?" className="absolute inset-0">
        <MenuItem {...menu} className="_3SwX582z absolute top-16 right-7 p-2"><C27z7 /></MenuItem>
      </Menu>
    </>
  );
}
