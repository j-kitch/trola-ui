import React, {Dispatch, FC, HTMLInputTypeAttribute, SetStateAction, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

interface InputProps {
    id: string
    label: string
    value: string
    setValue: Dispatch<SetStateAction<string>>
    placeholder: string
    type: HTMLInputTypeAttribute
}

const Input: FC<InputProps> = (props) => (
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
            type={props.type}
        />
    </div>
);

const SignUpPage: FC = () => {

    const {user} = useAuth0();

    const [givenName, setGivenName] = useState(user?.given_name || "");
    const [familyName, setFamilyName] = useState(user?.family_name || "");
    const [emailAddress, setEmailAddress] = useState(user?.email || "");

    return (
        <div className="flex h-screen w-screen bg-white justify-center items-center">
            <form className="w-1/2 flex flex-col">
                <div className="pb-4 border-b-2">
                    <div className="pb-4">
                        <h1 className="text-3xl">
                            Add user details
                        </h1>
                        <p className="text-sm">
                            You can change these details anytime in your user settings.
                        </p>
                    </div>
                    <Input id="givenName" label="Name" value={givenName} setValue={setGivenName}
                           placeholder="Your first given name" type="text"/>
                    <Input id="familyName" label="Surname" value={familyName} setValue={setFamilyName}
                           placeholder="Your family name" type="text"/>
                    <Input id="emailAddress" label="Email" value={emailAddress} setValue={setEmailAddress}
                           placeholder="Your email address" type="email"/>
                </div>
                <div className="pt-4 flex flex-row justify-end">
                    <input
                        className="bg-gray-50 hover:bg-gray-200 w-1/6 h-8 rounded-md
                                    focus:bg-blue-200 focus:text-blue-800"
                        value="Create User"
                        type="submit"/>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;