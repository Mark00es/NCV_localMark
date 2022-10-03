import React from 'react'
import { AppBar, Grid, Typography, Toolbar, Tabs , Link, Tab, Box, Button ,useTheme , useMediaQuery} from '@mui/material';
import imgNiñosConValor from '../Assets/img/logo-ncv2.png'
/* import NewUserForm from './NewUserForm'; */


function Navbar() {
  const theme = useTheme();
  
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  function handleClickFiles(){
    window.location.href = "/ninos";
  }

  function handleClickAssets(){
    window.location.href = '/activos-fijos';
  }

  function handleClickHome(){
    window.location.href = "/inicio-ncv";
  }
  function handleClickSignIn(){
    window.location.href = "/registrarse-ncv";
  }

  function handleClickExit(){
    window.location.href = "/";
  }
  
  return (
    <AppBar sx={{backgroundImage: 'linear-gradient(90deg, rgba(0,212,255,1) 18%, rgba(9,121,115,1) 86%, rgba(9,121,115,1) 86%);', marginTop:'100'}}>
      <Toolbar>
        
       <Grid sx={{ placeItems: 'center'}} container>
            
            <Grid item xs={6}>
              <Typography>
                 <img
                    cursor="pointer"
                    onClick={handleClickHome}
                    height="60"
                    src={imgNiñosConValor}
                    alt="Niños con Valor"
                    className="logo-img-nvar"
                />
              </Typography>
            </Grid>
            
            <Grid  item xs={2}>
                <Button color="inherit" onClick={handleClickSignIn}>Registrar Usuario</Button>
            </Grid>
            
            <Grid  item xs={2}>
                <Button color="inherit" onClick={handleClickFiles}>Files de los niños</Button>
            </Grid>

            <Grid  item xs={2}>
                <Button color="inherit" onClick={handleClickAssets}>Activos Fijos</Button>
            </Grid>


            <Grid  item xs={2}>
                <Button color="inherit" onClick={handleClickExit}>Salir</Button>
            </Grid>


        </Grid>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
