import type { ICustomer } from "../interfaces/ICustomer";
import { PatternEnum } from "../model/enums/PatternEnum";
import { onPostSendNewCustomer } from "../service/Customer/CustomerService";
import { useGenericFormValidator, type ValidationRulesType } from "./useGenericFormValidator"

export const useRegister = () => {

    const validationRules: { [key: string]: ValidationRulesType } = {
        cpf: {
            required: true,
            message: 'CPF inválido',
            pattern: PatternEnum.cpf
        },
        email: {
            required: true,
            message: 'E-mail inválido',
            pattern: PatternEnum.email
        },
        full_name: {
            required: true,
            message: 'Digite seu nome completo',
            pattern: PatternEnum.fullName
        },
        date_of_birth: {
            required: true,
        },
        smartphone: {
            required: true,
            message: 'Telefone inválido',
            pattern: PatternEnum.phone
        },
    }

    const initialForm = {
        cpf: "",
        date_of_birth: "",
        full_name: "",
        email: "",
        smartphone: "",
    };
    const { form, errors, handleChange, validate, setForm, setErrors } = useGenericFormValidator<ICustomer>(initialForm, validationRules);

    const setInitialForm = () => { setForm(initialForm), setErrors({}) }

    const handleSubmit = () => {
        const isValid = validate();
        if (isValid) {
            onPostSendNewCustomer(form, setInitialForm);
        }
    }

    return {
        handleChange,
        errors,
        form,
        handleSubmit
    }
}