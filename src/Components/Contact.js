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
            <div className='ct-title'>
                <h3>Get in touch</h3>
                <span>Feel free to leave a message!</span>
            </div>
            <div className='ct-form'>
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
                            variant="outlined"     
                            inputProps={{
                                style: {
                                    height: '100px',
                                    width: '640px'
                                }
                            }}
                        />
                    </div>
                <button className='form-btn'>Submit Message</button>
            </div>
        </div>
    )
}

export default Contact