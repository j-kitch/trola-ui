import React, {useState} from "react";
import {
    Autocomplete, Breadcrumbs, Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Input,
    ListItemContent,
    ListItemDecorator,
    Sheet,
    Typography
} from "@mui/joy";
import {Link} from "react-router-dom";
import useUsers from "../hook/useUsers";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import UserAvatar from "../component/UserAvatar";
import useTeams from "../hook/useTeams";
import {useNavigate} from "react-router";

export default function NewTeamPage() {

    const users = useUsers();
    const teams = useTeams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);

    const options = users.getUsers().map(user => ({ ...user, label: `${user.givenName} ${user.surname}`}));

    const doThing = () => {
        teams.addTeam({
            id: '',
            name: name,
            members: selectedUsers.map((u: any) => u.subject)
        });
        navigate('/teams');
    };

    return (
        <Sheet sx={{
            alignContent: "center",
            mx: "auto",
            py: 10,
            textAlign: "left",
            width: 1000,
            display: "flex",
            gap: 5,
        }}>
            <Grid container spacing={2} sx={{flexGrow: 1, marginX: "auto"}}>
                <Grid xs={12}>
                    <Breadcrumbs>
                        <Link to="/" style={{textDecoration: "none"}}>Home</Link>
                        <Link to="/teams" style={{textDecoration: "none"}}>Teams</Link>
                        <Typography>Create New Team</Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid xs={12}>
                    <Typography level="h2">Create a New Team</Typography>
                </Grid>
                <Grid xs={12}>
                    <FormControl>
                        <FormLabel>Team Name</FormLabel>
                        <Input size="lg" onChange={event => setName(event.target.value)} />
                        <FormHelperText>The name of the new team.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid xs={12}>
                    <FormControl>
                        <FormLabel>Add Members</FormLabel>
                        <Autocomplete
                            size="lg"
                            options={options}
                            filterSelectedOptions={true}
                            placeholder="Search for a user"
                            multiple
                            isOptionEqualToValue={(a, b) => a.subject === b.subject}
                            onChange={(_, users: any) => setSelectedUsers(users)}
                            renderOption={(props, option) => (
                                <AutocompleteOption {...props}>
                                    <ListItemDecorator>
                                        <UserAvatar givenName={option.givenName} familyName={option.surname}/>
                                    </ListItemDecorator>
                                    <ListItemContent>
                                        <Typography>{option.givenName} {option.surname}</Typography>
                                    </ListItemContent>
                                </AutocompleteOption>
                            )}/>
                        <FormHelperText>Search for new users.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid xs={12}>
                    <Button variant="solid" onClick={() => doThing()}>Create</Button>
                </Grid>
            </Grid>
        </Sheet>
    );
}