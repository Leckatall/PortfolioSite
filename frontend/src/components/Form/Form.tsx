'use client'
import {useState} from 'react';
import FormInput, {FormWidgetProps, InputType} from "@/components/Form/FormInput";
import {stringify} from "node:querystring";

interface InputBuilderProps {
    inputType: InputType;
    inputName: string;
    placeholder?: string;
    defaultValue?: string | number | undefined;
    required?: boolean;
    error?: string;
}

interface FormProps {
    inputs: InputBuilderProps[];
    onSubmit: (data: { [key: string]: string | number | undefined }) => void; // Maybe use a JSON parameter instead?
}

export default function Form({inputs, onSubmit}: FormProps) {
    const [formData, setFormData] = useState<{ [key: string]: string | number | undefined }>(
        () =>
            inputs.reduce((acc, input) => {
                acc[input.inputName] = input.defaultValue || ''; // Set default values
                return acc;
            }, {} as { [key: string]: string | number | undefined })
    );
    const [errors, setErrors] = useState<{ [key: string]: string }>(
        () =>
            inputs.reduce((acc, input) => {
                acc[input.inputName] = input.error || ''; // Set default values
                return acc;
            }, {} as { [key: string]: string })
    );

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData); // Call the parent-provided onSubmit handler with the form data
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-primary/30 rounded-lg p-5">
            {inputs.map((input) => (
                <FormInput
                    key={input.inputName}
                    inputType={input.inputType}
                    inputName={input.inputName}
                    placeholder={input.placeholder}
                    value={String(formData[input.inputName])}
                    onChange={handleChange}
                    required={input.required}
                    error={errors[input.inputName]}
                />
            ))}
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent
                 text-sm font-medium
                 rounded-md shadow-sm text-white
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Create Project
            </button>
        </form>
    )


}