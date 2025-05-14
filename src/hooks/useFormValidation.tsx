import { useState, ChangeEvent } from "react";


interface FormValues {
    [key: string]: string
}

interface FormErrors {
    [key: string]: string
}

export function useFormAndValidation(inputs: FormValues) {
    const [values, setValues] = useState<FormValues>(inputs)
    const [errors, setErrors] = useState<FormErrors>({})
    const [isValid, setIsValid] = useState<boolean>(false)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target

        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
        setErrors((prev) => ({
            ...prev,
            [name]:e.target.validationMessage
        }))
        setIsValid(e?.target?.closest("form")?.checkValidity() ?? false)
    }

    function resetForm(values:FormValues = inputs, errors:FormErrors ={} ,isValid:boolean = false) {
        setErrors(errors)
        setValues(values)
        setIsValid(isValid)
       
    }
     return {
            values,
            errors,
            isValid,
            handleChange,
            resetForm
        }
}