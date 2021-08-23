import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
  },
  heading: {
    textDecoration: "none",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  image: {
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    minWidth: "0px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "0px",
    color: "#fff",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    marginRight: "10px",
  },
  logout: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "100px",
    },
  },
}));
