import React, {FC, useState} from "react";
import Input from "./Input";
import {useAuth0} from "@auth0/auth0-react";
import useApi, {User} from "../../hooks/useApi";
import {useMutation} from "react-query";

interface Props {
    onNext: () => void,
}

const UserForm: FC<Props> = ({ onNext }) => {

    const auth0 = useAuth0();
    const api = useApi();

    const [user, setUser] = useState<User>({
        subject: auth0.user?.sub!,
        givenName: auth0.user?.given_name!,
        familyName: auth0.user?.family_name!,
        emailAddress: auth0.user?.email!
    });

    const mutation = useMutation("currentUser", api.createUser(), {
        onSuccess: onNext
    });

    return (
        <div className="flex h-screen w-screen bg-white justify-center items-center">
            <div className="w-1/2 flex flex-col">
                <div className="pb-4 border-b-2">
                    <div className="pb-4">
                        <h1 className="text-3xl">
                            Add user details
                        </h1>
                        <p className="text-sm">
                            You can change these details anytime in your user settings.
                        </p>
                    </div>
                    <Input id="givenName" label="Name" value={user.givenName}
                           setValue={givenName => setUser({ ...user, givenName })}
                           placeholder="Your first given name" type="text"/>
                    <Input id="familyName" label="Surname" value={user.familyName}
                           setValue={familyName => setUser({ ...user, familyName})}
                           placeholder="Your family name" type="text"/>
                    <Input id="emailAddress" label="Email" value={user.emailAddress}
                           setValue={emailAddress => setUser({ ...user, emailAddress })}
                           placeholder="Your email address" type="email"/>
                </div>
                <div className="pt-4 flex flex-row justify-end gap-5">
                    <input
                        className="bg-gray-50 hover:bg-gray-200 w-1/6 h-8 rounded-md
                                    active:bg-blue-200 active:text-blue-800"
                        value="Create User"
                        onClick={() => mutation.mutate(user)}
                        type="submit">
                    </input>
                </div>
            </div>
        </div>
    );
};

export default UserForm;