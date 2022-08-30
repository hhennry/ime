/* Importing the material-ui components. */
import { TextAlignRight, X } from "phosphor-react";
import React from "react";
import { Button, Popover, PopoverDisclosure, usePopoverState } from "reakit";
import { C07q1 } from "../content/22xNb7vX";

const varstrany = {
  /* Creating an object with properties that are objects. */
  INIT: {
    id: "_init",
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
      url: "https://emanuelalvorada.com.br/sobre/",
      alt: "Institucional sobre a historia e valores da Igreja Emanuel",
      target: "_self",
    },
  },
  MINIST: {
    id: "_minist",
    title: "Ministerios",
    locate: {
      url: "https://emanuelalvorada.com.br/ministerios/",
      alt: "Ministerios da Igreja Emanuel",
      target: "_self",
    },
  },
  CONTRIBUA: {
    id: "_contriua",
    title: "Contribua",
    locate: {
      url: "https://emanuelalvorada.com.br/apoiar/",
      alt: "Contribuir para a obra deDeus",
      target: "_self",
    },
  },
};

export function K3m41() {
  const popover = usePopoverState();
  return (
    <section className="_header flex items-center justify-between px-7">
      <div className="_2P5gvv1z py-4 pr-7">
        <img loading="lazy"
          className="w-24"
          src="../config/public/brand/ime/logo.png"
          alt="Logo da Igreja Missionaria Emanuel"
        />
      </div>
      <section>
        <div>
          <nav>
            <a title="" target="" href=""></a>
            <C07q1 />
            <Mu971 />
            <a title="" target="" href=""></a>
          </nav>
        </div>
        <div className="xs:hidden">
          <Popover className="fixed inset-0 transform-none" {...popover}>
            <div className="_SxdO120h fixed inset-0 w-screen h-screen z-30 grid">
              <div className="w-screen flex justify-center">
                <Button
                  onClick={popover.hide}
                  className="_qB403Pbe w-fit h-fit mt-8"
                >
                  <X className="m-auto" size="35" />
                </Button>
              </div>
              <nav className="grid gap-12 place-content-center w-screen h-screen">
                {/* A loop that is creating a list of links. */}
                {Object.entries(varstrany).map(([key, value]) => {
                  return (
                    <a
                      className="_ta1Z96OJ relative font-semibold text-2xl text-center"
                      key={key}
                      title={value.locate.alt}
                      href={value.locate.url}
                      target={value.locate.target}
                    >
                      {value.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </Popover>
          <PopoverDisclosure className="_qB403Pbe" {...popover}>
            <TextAlignRight size="35" />
          </PopoverDisclosure>
        </div>
      </section>
    </section>
  );
}
