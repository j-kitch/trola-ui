import {useAuth0} from "@auth0/auth0-react";
import restClient from "../utility/restClient";
import {AxiosInstance, AxiosResponse} from "axios";

interface User {
    id: string
    givenName: string
    familyName: string
    emailAddress: string
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

    return {
        findUserBySubject,
    };
};

export default useApi;