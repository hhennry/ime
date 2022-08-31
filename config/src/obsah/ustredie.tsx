/* Importing the material-ui components. */
import React from "react";
import { TextAlignRight, X } from "phosphor-react";
import { Button, Popover, PopoverDisclosure, usePopoverState } from "reakit/";
import { C07q1 } from "../content/22xNb7vX";
import { Mu971 } from "../content/0B67aE1k";
import { L61c0 } from "../content/vM6a5v0i/7v32AXx8";

const varstrany = {
  /* Creating an object with properties that are objects. */
  INIT: {
    title: "Inicio",
    locate: {
      url: "https://emanuelalvorada.com.br/",
      alt: "Inicio do site da Igreja Emanuel",
      target: "_self",
    },
  },
  INST: {
    title: "Institucional",
    locate: {
      url: "https://emanuelalvorada.com.br/sobre/",
      alt: "Institucional sobre a historia e valores da Igreja Emanuel",
      target: "_self",
    },
  },
  MINIST: {
    title: "Ministerios",
    locate: {
      url: "https://emanuelalvorada.com.br/ministerios/",
      alt: "Ministerios da Igreja Emanuel",
      target: "_self",
    },
  },
  CONTRIBUA: {
    title: "Contribua",
    locate: {
      url: "https://emanuelalvorada.com.br/apoiar/",
      alt: "Contribuir para a obra deDeus",
      target: "_self",
    },
  },
};

export function K3m41(): JSX.Element {
  const popover = usePopoverState();
  return (
    <section className="_header flex items-center mb:justify-between xs:justify-start px-7">
      <div className="_2P5gvv1z py-4 pr-7">
        <img
          className="w-24"
          src="../config/public/brand/ime/logo.png"
          alt="Logo da Igreja Missionaria Emanuel"
        />
      </div>
      <section className="w-screen">
        <div className="hidden xs:flex justify-between w-full items-center gap-4">
          <nav className="flex gap-5 font-bold ml-4">
            <a className="_0192dqYm" title="Inicio do site daIgreja Emanuel" target="_self" href="https://emanuelalvorada.com.br/">Inicio</a>
            <C07q1 />
            <Mu971 />
            <a className="_0192dqYm" title="Contribuir para a Igreja Emanuel fazer a obra de Deus" target="_self" href="https://emanuelalvorada.com.br/apoiar/">Contribua</a>
          </nav>
          <div>
            <L61c0 />
          </div>
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