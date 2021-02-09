import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      justifyContent: 'space-between',
      padding: '0 24px'
    },
    icon: {
      width:'60px', 
      height: '60px',
      marginRight: '0.5rem'
    },
    title : {
      margin: '1rem',
      fontSize: '2.5rem',
      color: 'white',
      fontFamily: 'Dancing Script, cursive',
      letterSpacing: '1px' 
    },
    headerLeft: {
      marginLeft: '3rem',
      display: 'flex',
      alignItems: 'center',
      cursor: 'none',
      '&:hover': {
        cursor: 'pointer',
      },
      textDecoration: 'none',
    },
    span:{
      color: '#424242'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    mainGrid: {
      backgroundColor: "transparent",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default useStyles;