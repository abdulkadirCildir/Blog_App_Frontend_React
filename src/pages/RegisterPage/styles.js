import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
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
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default useStyles;