import { Box, Typography, Button, TextField } from "@mui/material";
import React from "react";

const Auth = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Typography>Login</Typography>
          <TextField />
          <TextField />
          <TextField />
          <Button>submit</Button>
          <Button>change to signup</Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
