import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Rackbot
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RackbotMain(){
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Solicita un servicio
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows='5'
            rowsMax='5'
            id="descripcion"
            label="Descripción del problema"
            autoFocus
            helperText="Describe el problema con el mayor detalle"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Dirección"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="celular"
            label="Celular"
            type="number"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </Button>

        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
