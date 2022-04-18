import React, { useRef, useState } from 'react'
import './Contact.css'
import { TextField } from '@mui/material'
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
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
        borderRadius: 0
      },
      '&:hover fieldset': {
        borderColor: 'black',
        borderRadius: 0
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
});
  

const Contact = () => {

    const form = useRef();
    const [formData, setFormData] = useState({'from_name': '', 'from_email': '', 'message': ''})

    const onSubmit = (ev) => {
        ev.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((res) => {
                // console.log(res.text)
            }, (err) => {
                console.log(err.text)
            }
        )
        setFormData({'from_name': '', 'from_email': '', 'message': ''})
    }

    const onChange = (ev) => {
        const change = formData;
        change[ev.target.name] = ev.target.value
        setFormData({...change, [ev.target.name]: ev.target.value})
    }

    return (
        <div className='ct'>
            <div className='ct-wrapper'>
                <div className='ct-title'>
                    <h3>Get in touch</h3>
                    <span>Feel free to leave a message</span>
                    <span>or connect with me on LinkedIn!</span>
                </div>
                <div className='ct-form'>
                    <form ref={form} onSubmit={onSubmit}>
                        <div className='ct-field'>
                            <CssTextField
                                onChange={onChange}
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
                                value={formData['from_name']}
                            />
                        </div>
                        <div className='ct-field'>
                            <CssTextField
                                onChange={onChange}
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
                                value={formData['from_email']}
                            />
                        </div>
                        <div className='ct-field'>
                            <CssTextField
                                onChange={onChange} 
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
                                value={formData['message']}
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
                                borderRadius: 0,
                                '&:hover': {
                                    backgroundColor: '#3d3d40',
                                    borderRadius: 0
                                }
                            }}
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact