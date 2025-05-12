import { ReactElement} from "react"


interface PageProps {
    children:ReactElement;
}

const Page = ({children}:PageProps) => {
  return (
    <div>{children}</div>
  )
}

export default Page