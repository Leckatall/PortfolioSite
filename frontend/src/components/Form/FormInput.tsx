export enum InputType {
    TEXT = "text",
    FILE = "file",
    TEXTAREA = "textarea",
    DATE = "date",
}

export interface FormWidgetProps {
    inputType: InputType;
    inputName: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    error?: string;
}

export default function FormInput({
                                       inputType,
                                       inputName,
                                       placeholder = "",
                                       value = "",
                                       onChange,
                                       required = false,
                                       error = ""
                                   }: FormWidgetProps) {
    const Tag = (inputType === InputType.TEXTAREA) ? 'textarea' : 'input';
    const inputProps = (inputType === InputType.TEXTAREA) ? {} : {type: inputType};
    return (
        <Tag
            id={inputName}
            name={inputName}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            {...inputProps}
            className="mb-4 block w-full m-1 p-1 bg-secondary border-gray-300 rounded-md shadow-sm focus:border-secondary"
        />
    )
}



