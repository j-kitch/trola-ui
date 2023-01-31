import React, {FC, useState} from "react";
import ProjectForm from "./ProjectForm";
import UserForm from "./UserForm";

enum Form {
    USER,
    PROJECT
}

const SignUpPage: FC = () => {

    const [form, setForm] = useState(Form.USER);

    return (
        <div className="flex h-screen w-screen bg-white justify-center items-center">
            {form === Form.USER && <UserForm onNext={() => setForm(Form.PROJECT)}/>}
            {form === Form.PROJECT && <ProjectForm onNext={() => setForm(Form.PROJECT)}/>}
        </div>
    );
};

export default SignUpPage;