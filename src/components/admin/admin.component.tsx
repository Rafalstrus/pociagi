import './admin.styles.css';

import {useRef} from 'react'
import {Box,Button,TextField} from '@material-ui/core/';

import Encrypt from './admin.encrypt'

function Admin() {
  const adminPassword = useRef(null)
  return (
    <Box 
    bgcolor="rgba(255, 255, 255, 0.96)"
    padding="25px"
    borderRadius="2vw"
    maxWidth="300px"
    >
      <Box>
        <TextField
        ref={adminPassword}
        ></TextField>
      <Button 
      variant="contained"
      onClick={()=>{
        console.log(adminPassword.current)
      }}
      >Check Password</Button>
      </Box>
    </Box>
  );
}

export default Admin;
