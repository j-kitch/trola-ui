import React, {FC, useState} from "react";
import Input from "./Input";
import useApi, {Project} from "../../hooks/useApi";
import {useAuth0} from "@auth0/auth0-react";
import {useMutation} from "react-query";
import {useNavigate} from "react-router";

interface Props {
    onNext: () => void,
}

const ProjectForm: FC<Props> = ({ onNext }) => {

    const {user} = useAuth0();
    const api = useApi();
    const navigate = useNavigate();

    const [project, setProject] = useState<Project>({
        name: "",
        key: "",
        members: [user?.sub!],
        owner: user?.sub!
    });

    const mutation = useMutation(api.createProject(), {
        onSuccess: () => navigate(`/projects/${project.key}`),
    });

    return (
        <div className="w-1/2 flex flex-col">
            <div className="pb-4 border-b-2">
                <div className="pb-4">
                    <h1 className="text-3xl">
                        Add project details
                    </h1>
                    <p className="text-sm">
                        You can change these details anytime in your project settings.
                    </p>
                </div>
                <Input id="name" label="Name" value={project.name} setValue={name => setProject({...project, name})}
                       placeholder="A name for your first project" type="text"/>
                <Input id="key" label="Key" value={project.key} setValue={key => setProject({...project, key})}
                       placeholder="A short key for your project"
                       maxLength={2}
                       type="text"/>
            </div>
            <div className="pt-4 flex flex-row justify-end gap-5">
                <input
                    className="bg-gray-50 hover:bg-gray-200 w-1/6 h-8 rounded-md
                                    active:bg-blue-200 active:text-blue-800"
                    value="Create Project"
                    onClick={() => mutation.mutate(project)}
                    type="submit">
                </input>
            </div>
        </div>
    );
};

export default ProjectForm;