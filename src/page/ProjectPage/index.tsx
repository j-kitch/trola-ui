import React, {FC} from "react";
import {useParams} from "react-router";
import {useQuery} from "react-query";
import useApi from "../../hooks/useApi";
import HeaderBar from "../../component/HeaderBar";

type Params = {
    projectKey: string
};

const ProjectPage: FC = () => {

    const {projectKey} = useParams<Params>();
    const api = useApi();

    const projectQuery = useQuery("project", api.findProject(projectKey!), {});

    return (
        <div>
            <HeaderBar/>
            {projectQuery?.data?.name}
        </div>
    )
};

export default ProjectPage;