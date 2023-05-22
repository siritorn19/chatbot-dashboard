import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";


export default function Header() {
    const styles = { button: { margin: 15,}, appBarBackground:{ background : '#93d602' }};
   return (
      <Box>
         <AppBar position="static" style={styles.appBarBackground}>
            <Toolbar>
               {/* sx = {flexGrow: 1} allows us to set all content at right except typography */}
               <Typography variant = "h4" sx = {{ flexGrow: 1 }}>
                  Dashboard
               </Typography>
               {/* <Button color = "inherit"> Sign Up </Button>
               <Button color = "inherit"> Sign In </Button> */}
            </Toolbar>
         </AppBar>
      </Box>
   );
}