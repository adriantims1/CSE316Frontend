import React from "react";
import { Container, Typography, Box, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { getprofileurlAPIMethod } from "../../api/profileClient";

const styles = makeStyles((theme) => ({
  profileName: {
    fontFamily: "Comfortaa",
    fontSize: "16px",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  title: {
    fontFamily: "Comfortaa",
    fontWeight: "bold",
    fontSize: "48px",
    color: theme.palette.secondary.main,
    alignSelf: "center",
  },
}));

export default function userHeader(props) {
    const [name, set_name] = useState('John Doe');
    const [accountType, set_accountType] = useState('Free Tier');
    const [profile_url, setProfile_url] = useState("https://res.cloudinary.com/dtkgfy2wk/image/upload/v1620202579/vippng.com-empty-circle-png-4161690_reukek.png");

    useEffect(() => {
        const fetchProfile = async () => {
            await getprofileurlAPIMethod((response) => {
                set_name(response.name);
                set_accountType(response.accountType);
                setProfile_url(response.profile_url);
            });

        }
        fetchProfile();


    }, []);

    const classes = styles();
  return (
    <Container className={classes.header}>
      <Typography className={classes.title}>{`${props.page}`}</Typography>
      <Box
        display="flex"
        style={{
          justifyContent: "space-between",

          alignItems: "center",
        }}
      >
        <NavLink to="/profile">
          <img
            src = {profile_url}
            style={{
              height: "75px",
              width: "75px",
              paddingRight: "16px",
              margin: "5px 0",
            }}
          ></img>
        </NavLink>

        <Box
          display="flex"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography className={classes.profileName}>
              {name}
          </Typography>
          <Typography color="secondary">{accountType}</Typography>
        </Box>
      </Box>
    </Container>
  );
}
