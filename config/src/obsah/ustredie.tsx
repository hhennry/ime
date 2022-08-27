/* Importing the material-ui components. */
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

const varstrany = {
  /* Creating an object with properties that are objects. */
  INIT: {
    id: "",
    title: "Inicio",
    locate: {
      url: "https://emanuelalvorada.com.br/",
      alt: "Inicio do site da Igreja Emanuel",
      target: "_self",
    },
  },
  INST: {
    id: "_inst",
    title: "Institucional",
    locate: {
      url: "https://emanuelalvorada.com.br//",
      alt: "Inicio do site da Igreja Emanuel",
      target: "_self",
    },
  },
};

export function K3m41() {
  return (
    <section className="_header">
      <div>
        <img
          src="../config/public/brand/ime/logo.png"
          alt="Logo da Igreja Missionaria Emanuel"
        />
      </div>
      <section>
        <div>
          <Button></Button>
          <Menu open={false}>
            {/* A loop that is creating a list of links. */}
            {Object.entries(varstrany).map(([key, value]) => {
              return (
                <MenuItem id={value.id}>
                  <a
                    className="_ta1Z96OJ relative"
                    key={key}
                    title={value.locate.alt}
                    href={value.locate.url}
                    target={value.locate.target}
                  >
                    {value.title}
                  </a>
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </section>
    </section>
  );
}
