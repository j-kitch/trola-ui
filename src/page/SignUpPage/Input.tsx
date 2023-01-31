import React, {Dispatch, FC, HTMLInputTypeAttribute, SetStateAction} from "react";

interface Props {
    id: string
    label: string
    value: string
    setValue: (value: string) => void,
    placeholder: string
    maxLength?: number
    type: HTMLInputTypeAttribute
}

const Input: FC<Props> = (props) => (
    <div className="pt-2">
        <label
            className="text-sm text-gray-600"
            htmlFor={props.id}>{props.label}</label>
        <br/>
        <input
            className="bg-gray-50 w-1/2 p-2 rounded-md
                                    placeholder-gray-600
                                   outline-blue-500 outline-2
                                   hover:bg-gray-200
                                   focus:bg-white focus:outline-2
                                    "
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={e => props.setValue(e.target.value)}
            maxLength={props.maxLength}
            type={props.type}
        />
    </div>
);

export default Input;