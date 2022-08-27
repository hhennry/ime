/* Importing the React library. */
import React from "react";

/* A constant that is an object with properties that are objects. */
const varnawigacja = {
  /* Creating an object with properties that are objects. */
  IME: {
    title: "Igreja Emanuel",
    url: "https://emanuelalvorada.com.br/?=header",
    target: "_blank",
    alt: "Igreja Emanuel",
  },
  MINIS: {
    title: "Ministerios",
    url: "https://emanuelalvorada.com.br/ministerios/?=header",
    target: "_blank",
    alt: "Ministerios da Igreja Emanuel",
  },
  DAY: {
    title: "Agenda",
    url: "https://emanuelalvorada.com.br/agenda/?=header",
    target: "_blank",
    alt: "Agenda da Igreja Emanuel",
  },
  GALERY: {
    title: "Galeria",
    url: "https://emanuelalvorada.com.br/galery/?=header",
    target: "_blank",
    alt: "Galeria da Igreja Emanuel",
  },
  CCD: {
    title: "CCD",
    url: "https://emanuelalvorada.com.br/edu/ccd/?=header",
    target: "_blank",
    alt: "Centro de Crecimento em Deus",
  },
};

export function C864f() {
  return (
    <section className="_sobheader flex item-center justify-center py-3 px-7 cs xs:justify-between md:px-20">
      <nav className="hidden  xs:gap-4 xs:flex">
        {/* A loop that is creating a list of links. */}
        {Object.entries(varnawigacja).map(([key, value]) => {
          return (
            <a className="_ta1Z96OJ relative"
              key={key}
              title={value.alt}
              href={value.url}
              target={value.target}>
              {value.title}
            </a>
          );
        })}
      </nav>
      <span>Deus Conosco&nbsp;🔥</span>
    </section>
  );
}
