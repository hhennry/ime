import React from "react";
import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from "reakit/";

const varinsti = {
  INDENT: {
    title: "Nossa identidade",
    locate: {
      url: "https://emanuelalvorada.com.br//sobre/#s-identidade",
      alt: "Identidade que a Igreja Emanuel se encontra",
      target: "_self"
    },
  },
  MISSAO: {
    title: "Nossa missão",
    locate: {
      url: "https://emanuelalvorada.com.br/sobre/#s-missao",
      alt: "Missão que a Igreja Emanuel se dedica",
      target: "_self"
    },
  },
  VALORES: {
    title: "Nossos valores",
    locate: {
      url: "https://emanuelalvorada.com.br/sobre/#s-valores",
      alt: "Valores que a Igreja Emanuel segue",
      target: "_self"
    },
  },
  FUNCTION: {
    title: "Descrição de funções",
    locate: {
      url: "https://emanuelalvorada.com.br/sobre/#s-funcoes",
      alt: "Descrição das peincipais funções que a Igreja Emanuel possui",
      target: "_self"
    },
  }
};

export function C07q1() {
  const menu = useMenuState();
  return (
    <>
      <MenuButton className="_0192dqYm" {...menu}>Institucional</MenuButton>
      <Menu {...menu} aria-label="Institucional">
        <MenuItem {...menu}>
          <a className=""
            title="Sobre a Igreja Emanuel"
            href="https://emanuelalvorada.com.br/sobre/"
            target="_self"
          >
            Quem Somos?
          </a>
        </MenuItem>
        <MenuSeparator {...menu}></MenuSeparator>
        {Object.entries(varinsti).map(([key, value]) => {
          return (
            <MenuItem {...menu}>
              <a
                className=""
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
