import React, { useRef } from 'react'
import './Contact.css'
import { TextField } from '@mui/material'
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import emailjs from '@emailjs/browser'
import emailjs from 'emailjs-com'

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

    const form = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((res) => {
                console.log(res.text)
            }, (err) => {
                console.log(err.text)
            })
    }

    return (
        <div className='ct'>
            <div className='ct-title'>
                <h3>Get in touch</h3>
                <span>Feel free to leave a message!</span>
            </div>
            <div className='ct-form'>
                <form ref={form} onSubmit={onSubmit}>
                    {/* <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" /> */}
                    <div className='ct-field'>
                        <CssTextField
                            required
                            type='text'
                            className='field' 
                            label="Name"
                            name='from_name' 
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
                            required 
                            type='email' 
                            className='field' 
                            label="Email"
                            name='from_email' 
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
                            required
                            className='field' 
                            label="Message"
                            name='message' 
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
                        type='submit' 
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