import { useMutation } from "@tanstack/react-query";
import { Lead } from "../utils/contentTypes";
import { insertLead } from "../api/api";

interface useInsertLeadProps {
    onSuccess:() => void;
    onError:(error:Error) => void;
}


export default function useInsertLead({onError,onSuccess}:useInsertLeadProps) {
    const mutation = useMutation({
        mutationFn:async (lead:Lead) => insertLead(lead),
        onSuccess:onSuccess,
        onError:onError
    })

    return mutation
}
