import {useAuth0} from "@auth0/auth0-react";
import restClient from "../utility/restClient";
import {AxiosInstance, AxiosResponse} from "axios";

interface User {
    subject: string
    givenName: string
    familyName: string
    emailAddress: string
}

interface Project {
    name: string
    key: string
    members: string[]
    owner: string
}

const useApi = () => {

    const {getAccessTokenSilently} = useAuth0();

    const restCall = <T extends unknown>(apiCall: (axios: AxiosInstance) => Promise<AxiosResponse<T>>): () => Promise<T> => {
        return async () => {
            const accessToken = await getAccessTokenSilently();
            restClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

            return apiCall(restClient)
                .then(response => response.data)
                .catch(error => error.toJSON());
        };
    };

    const findUserBySubject = (subject: string) => restCall(axios => axios.get<User>(`/users/${subject}`));

    const findProject = (id: string) => restCall(axios => axios.get<Project>(`/projects/${id}`));

    const createUser = () => (user: User) => {
        console.log(`createUser ${JSON.stringify(user)}`);
        return restCall(axios => axios.post("/users", user)).call(user);
    }

    const createProject = () => (project: Project) => {
        return restCall(axios => axios.post("/projects", project)).call(project);
    };

    return {
        findUserBySubject,
        findProject,
        createUser,
        createProject,
    };
};

export default useApi;
export type {User, Project};