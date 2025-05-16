import { MouseEvent, useState } from "react"
import Checkmark from "./Icons/Checkmark"
import { useFormAndValidation } from "../hooks/useFormValidation"
import { AnimatePresence, motion } from "motion/react"
import useInsertLead from "../hooks/useInsertLead";

interface FormState {
    currentState: "idle" | "pending" | "success" | "error";
    errorMessage: string | null;
}

const buttonStateClasses = {
    idle: "bg-primary-700 opacity-100",
    pending: "bg-primary-700 opacity-50",
    success: "bg-green-500 opacity-100",
    error: "bg-red-500 opacity-100",
};


const FrequentTraveler = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [formState, setFormState] = useState<FormState>({
        currentState: "idle",
        errorMessage: null
    })


    const { values, errors, isValid, handleChange, resetForm } = useFormAndValidation({
        "fullName": "",
        "email": ""
    })

    const mutation = useInsertLead({
        onSuccess:handleSuccess,
        onError:handleError
    })

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (isChecked && isValid) {
           
            setFormState({ currentState: "pending", errorMessage: null })
            mutation.mutate({
                createdAt:Date.now(),
                fullName:values.fullName,
                emailAddress:values.email
            })
        }
    }

    function handleSuccess() {
        resetForm()
        setIsChecked(false)
        setFormState({currentState:"success",errorMessage:null})
        setTimeout(() => {
            setFormState({currentState:"idle",errorMessage:null})
        }, 2000);
    }


     function handleError(error:Error)  {
        setFormState({currentState:"error",errorMessage:error.message})
         setTimeout(() => {
            setFormState({currentState:"idle",errorMessage:null})
        }, 2000);
    }

    return (
        <section className="bg-primary-100 px-24 py-36">
            <div className="border-y-grey-500/40 m-auto flex max-w-389 items-center justify-between gap-x-28 border-y-1 py-26">
                <div className="basis-150 text-center">
                    <h3 className="tracking-6 mb-9.5 text-[1.75rem]/14 font-semibold">Learn About Our frequent Travaler Program</h3>
                    <p className="text-grey-800 text-base/13.5">
                        Interested in saving up to $1000 on your next vacation? How about
                        earning travel points that can be converted into rewards like extra
                        nights, free meals, and exclusive offers from resorts around globe?
                    </p>
                </div>
                <div className="bg-grey-500/40 block w-0.25 self-stretch" />
                <form className="flex flex-col basis-150">
                    <label className="mb-8">
                        <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">Full Name</p>
                        <input type="text" name="fullName" value={values.fullName} onChange={handleChange} minLength={2} maxLength={50} disabled={formState.currentState !== "idle"}  placeholder="John Doe" className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50 ${errors.fullName && "outline-red-500"}`} required />
                        <AnimatePresence>

                            {errors.fullName &&
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="text-red-500 pt-1 pl-0.5 text-sm">
                                    {errors.fullName}
                                </motion.p>
                            }
                        </AnimatePresence>
                    </label>
                    <label className="mb-12">
                        <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">Email</p>
                        <input type="email" name="email" value={values.email} onChange={handleChange} minLength={5} maxLength={100} disabled={formState.currentState !== "idle"} placeholder="email@example.com" className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50 ${errors.email && "outline-red"}`} required />
                        <AnimatePresence>

                            {errors.email && <motion.p className="text-red-500 pt-1 pl-0.5 text-sm"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
                            >{errors.email}</motion.p>}
                        </AnimatePresence>
                    </label>
                    <div className="flex flex-wrap item-center justify-between gap-8">
                        <label className="text-grey-800 flex cursor-pointer items-center gap-x-1.5">
                            <button className="flex size-5 cursor-pointer items-center justify-center rounded-xs bg-white p-1 disabled:opacity-50" disabled={formState.currentState !== "idle"}  type="button" onClick={() => setIsChecked(!isChecked)}>
                                <Checkmark className={`size-2 transition-all duration-200 ${isChecked ? 'visible size-3 opacity-100' : 'invisible size-2 opacity-0'}`} />
                            </button>
                            <p className="text-sm tracking-[.03rem]">Agree to receive promotional email updates</p>
                        </label>
                        <button className={` enabled:hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed ${buttonStateClasses[formState.currentState]}`} onClick={handleSubmit} disabled={formState.currentState !== "idle"}>
                            {formState.currentState === "idle" && "Learn More"}
                            {formState.currentState === "pending" && "Submitting..."}
                            {formState.currentState === "error" && "Submission Failed"}
                            {formState.currentState === "success" && "Success!"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FrequentTraveler