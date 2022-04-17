import React from 'react'
import './Contact.css'
import { TextField } from '@mui/material'
import { styled } from '@mui/material';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
});
  

const Contact = () => {
    return (
        <div className='ct'>
            Contact Form
            <div className='ct-wrapper'>
                <CssTextField  className='field' label="Name" variant="outlined" />
                <CssTextField  className='field' label="Email" variant="outlined" />
                <CssTextField  className='field' label="Message" variant="outlined" />
            </div>
        </div>
    )
}

export default Contact