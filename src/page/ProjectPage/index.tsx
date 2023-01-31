import React, {FC} from "react";
import {useParams} from "react-router";
import {useQuery} from "react-query";
import useApi from "../../hooks/useApi";

type Params = {
    projectKey: string
};

const ProjectPage: FC = () => {

    const {projectKey} = useParams<Params>();
    const api = useApi();

    console.log(`projectKey: ${projectKey}`);

    const query = useQuery("project", api.findProject(projectKey!), {
    });

    return (
        <div>{query?.data?.name}</div>
    )
};

export default ProjectPage;