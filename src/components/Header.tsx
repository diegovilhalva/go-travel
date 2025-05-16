import { ReactElement } from "react"

interface HeaderProps {
    children: ReactElement[];
}

const Header = ({children}:HeaderProps) => {
    return (
        <header className="max-3xl:px-20 px-24 pt-8 pb-23 max-2xl:px-14 max-xl:px-10 max-xl:pb-6 max-lg:px-6 max-lg:pt-6 max-md:pb-0 max-sm:px-4 max-sm:pt-4">{children}</header>
    )
}

export default Header