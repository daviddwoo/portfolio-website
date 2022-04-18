import React, { useState } from 'react'
import './Contact.css'
import { TextField } from '@mui/material'
import { styled } from '@mui/material';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser'

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
    const [text, setText] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    const onChange = (ev) => {
        const change = {};
        change[ev.target.name] = ev.target.value
        setText(ev.target.value);
    }

    return (
        <div className='ct'>
            <div className='ct-title'>
                <h3>Get in touch</h3>
                <span>Feel free to leave a message!</span>
            </div>
            <div className='ct-form'>
                <form onSubmit={onSubmit}>
                    <div className='ct-field'>
                        <CssTextField
                            className='field' 
                            label="Name" 
                            variant="outlined"     
                            inputProps={{
                                style: {
                                    width: '640px'
                                }
                            }}
                        />
                    </div>
                    <div className='ct-field'>
                        <CssTextField  
                            className='field' 
                            label="Email" 
                            variant="outlined"     
                            inputProps={{
                                style: {
                                    width: '640px'
                                }
                            }}
                        />
                    </div>
                    <div className='ct-field'>
                        <CssTextField 
                            className='field' 
                            label="Message" 
                            multiline
                            rows={4}
                            variant="outlined"     
                            inputProps={{
                                style: {
                                    height: '100px',
                                    width: '640px',
                                }
                            }}
                        />
                    </div>
                    <Button 
                        variant='contained' 
                        size='large' 
                        endIcon={<SendIcon />} 
                        sx={{
                            backgroundColor: '#3d3d40', 
                            width: '670px', 
                            marginLeft: '15px',
                            '&:hover': {
                                backgroundColor: '#3d3d40',
                            }
                        }}
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Contact