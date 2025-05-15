
import ErrorIcon from "./Icons/ErrorIcon";


export default function Error({children}:{children:string}) {
  return (
    <div className="flex flex-col items-center justify-center px-24 py-64">
        <ErrorIcon className="fill-red-500 size-24 mb-6" />
        <div className="flex max-w-124 flex-col justify-center gap-y-2 text-center">
            <h1 className="text-[3.25rem] font-semibold">Oh No!</h1>
            <p className="text-grey-900 text-base/8 font-light">
                {children}
                Try re-loading the or returning later. If the issue persist.
                please contact our tech team.
            </p>
        </div>
    </div>
  )
}
