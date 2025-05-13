import { ReactElement } from "react"

interface MainProps {
    children:ReactElement[]
}
const Main = ({children}:MainProps) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default Main