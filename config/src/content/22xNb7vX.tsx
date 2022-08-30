import React from "react";
import { Menu, MenuButton, MenuItem, MenuSeparator } from "reakit";

const varinsti = {
  /* Creating an object with properties that are objects. */
  INDENT: {
    title: "Nossa identidade",
    locate: {
      url: "https://emanuelalvorada.com.br//sobre/#s-identidade",
      alt: "Identidade que a Igreja Emanuel se encontra",
      target: "_self",
    },
  },
  MISSAO: {
    title: "Nossa missão",
    locate: {
      url: "https://emanuelalvorada.com.br/sobre/#s-missao",
      alt: "Missão que a Igreja Emanuel se dedica",
      target: "_self",
    },
  },
  VALORES: {
    title: "Nossos valores",
    locate: {
      url: "https://emanuelalvorada.com.br/sobre/#s-valores",
      alt: "Valores que a Igreja Emanuel segue",
      target: "_self",
    },
  },
  FUNCTION: {
    title: "Descrição de funções",
    locate: {
      url: "https://emanuelalvorada.com.br/sobre/#s-funcoes",
      alt: "Descrição das peincipais funções que a Igreja Emanuel possui",
      target: "_self",
    },
  },
};

export function Mu971() {
  return (
    <>
      <MenuButton>Institucional</MenuButton>
      <Menu aria-label="Institucional">
        <MenuItem>
          <a
            title="Sobre a Igreja Emanuel"
            href="https://emanuelalvorada.com.br/sobre/"
            target="_self"
          >
            Quem Somos?
          </a>
        </MenuItem>
        <MenuSeparator></MenuSeparator>
        {/* A loop that is creating a list of links. */}
        {Object.entries(varinsti).map(([key, value]) => {
          return (
            <MenuItem>
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
    </>
  );
}
