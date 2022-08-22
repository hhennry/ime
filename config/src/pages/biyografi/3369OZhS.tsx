const variabel = {
  SITE: {
    link: {
      href: "../omdirigering/dw2EEy15.html",
      target: "self",
      title: "Site da Igreja Emanuel",
    },
    icone: {
      path: "../config/public/assets/brand/logo.png",
      title: "Logo Igreja Emanuel",
    },
    title: "Site",
  },
  RNB: {
    link: {
      href: "../omdirigering/7iOw23G6.html",
      target: "self",
      title: "Veja como chegar na Igreja Emanuel",
    },
    icone: {
      path: "../config/public/assets/svg/maps.svg",
      title: "Icone de localização",
    },
    title: "Endereço",
  },
};

export function Bağlantl() {
  return (
    <nav className="grid gap-10">
      {Object.entries(variabel).map(([key, value]) => {
        return (
          <a className="_7iOw23G6 flex items-center justify-between w-full h-full" key={key} href={value.link.href} target={value.link.target} title={value.link.title}>
            <span className="flex items-center justify-center w-full">
              <img className="w-8 h-8" src={value.icone.path} alt={value.icone.title} />
              <h6>{value.title}</h6>
            </span>
          </a>
        );
      })}
    </nav>
  );
}
