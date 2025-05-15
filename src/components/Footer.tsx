import { footerCols, footerSocials } from "../utils/content"
import LogoIconDark from "./Icons/LogoIconDark"


const Footer = () => {
    return (
        <footer className="bg-primary-700 px-24 pt-24 pb-26">
            <div className="m-auto flex max-w-412 justify-between gap-x-32 text-white">
                <div className="flex max-w-116 gap-x-4 ">
                    <LogoIconDark className="block shrink-0" />
                    <div className="">
                        <p className="mb-5 pt-3.5 text-[1.25rem] font-semibold">GoTravel - Your Vacation Awaits</p>
                        <p className="mb-8 font-light">GoTravel creates vacations you’ll remember. Simply pick your
                            desired location, and we do the rest. An all inclusive getaway
                            that leaves you relaxing, not stressing.</p>

                        <ul className="flex  gap-x-8">
                            {footerSocials.map((social) => (
                                <li key={social.id}>
                                    <a href={social.href}  target="_blank" aria-label={social.alt}>
                                        <social.Icon className="fill-white" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <ul className="flex basis-256.5 justify-between">
                    {footerCols.map((col) => (
                        <li key={col.id} className="">
                            <p className="mb-5 text-xl font-semibold">{col.heading}</p>
                            <ul className="flex flex-col gap-y-2.5">
                                {col.links.map((link) => (
                                    <li key={link.id} className="flex items-center gap-x-2">
                                        {link.Icon && <link.Icon className="block size-6 fill-white"/>}
                                        <a href={link.href} className="font-medium opacity-80 hover:opacity-100">
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