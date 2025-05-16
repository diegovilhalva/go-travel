import { footerCols, footerSocials } from "../utils/content"
import LogoIconDark from "./Icons/LogoIconDark"


const Footer = () => {
    return (
         <footer className="bg-primary-700 max-3xl:px-20 px-24 pt-24 pb-26 max-2xl:px-14 max-lg:px-6 max-md:pb-17.5 max-sm:px-4">
           <div className="m-auto flex max-w-432 justify-between gap-x-32 text-white max-xl:flex-wrap max-xl:gap-y-24 max-sm:gap-y-20">
        <div className="flex max-w-116 gap-x-4 max-xl:flex-col max-sm:gap-y-8">
          <LogoIconDark className="block shrink-0" />
          <div>
            <p className="mb-5 pt-3.5 text-[1.25rem] font-semibold max-xl:pt-6 max-sm:pt-0">
              GoTravel - Your Vacation Awaits
            </p>
            <p className="mb-8 font-light">
              GoTravel creates vacations you’ll remember. Simply pick your
              desired location, and we do the rest. An all inclusive getaway
              that leaves you relaxing, not stressing.
            </p>
            <ul className="flex gap-x-8">
              {footerSocials.map((social) => (
                <li key={social.id}>
                  <a href={social.href} target="_blank" aria-label={social.alt}>
                    <social.Icon className="fill-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="flex basis-256.5 justify-between max-2xl:grid max-2xl:grid-cols-2 max-2xl:gap-y-12 max-xl:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-15">
          {footerCols.map((col) => (
            <li key={col.id}>
              <p className="mb-5 text-xl font-semibold">{col.heading}</p>
              <ul className="flex flex-col gap-y-2.5">
                {col.links.map((link) => (
                  <li key={link.id} className="flex items-center gap-x-2">
                    {link.Icon && (
                      <link.Icon className="block h-6 w-6 fill-white" />
                    )}
                    <a
                      className="font-medium opacity-80 hover:opacity-100"
                      href={link.href}
                    >
                      <p>{link.name}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </footer>
    )
}

export default Footer