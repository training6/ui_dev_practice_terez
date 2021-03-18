import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const StyledButton = withStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, darkgrey 30%, lightgrey 90%)',
    border: 0,
    borderRadius: 50,
    color: "darkgrey",
    marginTop: 25,
    width: 185,
    height: 55,
    marginLeft: 20,
  
  },
})
)(Button);

export default function ButtonA() {

  return (
    <div>
      <StyledButton>
      <Button>
        <span>Apply</span>
      </Button>
      </StyledButton>
      </div>
      )
      }