export default function useUsers() {

    const users = [
        {
            subject: "google-oauth2|109062243924481937759",
            givenName: "Joshua",
            surname: "Kitchen"
        },
        {
            subject: "otherUser",
            givenName: "Scooby",
            surname: "Doo"
        }
    ];

    return {
        getUsers: () => users,
    };
}