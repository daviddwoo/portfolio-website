import React, { useRef, useState, useEffect } from 'react'
import './Contact.css'
import { TextField } from '@mui/material'
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import EastIcon from '@mui/icons-material/East';
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion';

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
        borderRadius: 0,
      },
      '&:hover fieldset': {
        borderColor: 'black',
        borderRadius: 0,
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
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            id='contact'
        >
            <div className='ct-wrapper'>
                <div className='ct-info-wrapper'>
                    {/* <div className='ct-title-wrapper'> */}
                    <div className='ct-title'>
                        <h3>Get in touch</h3>
                        <span>Feel free to leave a message or connect with me on LinkedIn!</span>
                        {/* <span>or connect with me on LinkedIn!</span> */}
                    </div>
                    {/* </div> */}
                    <div className='ct-form'>
                        <form ref={form} onSubmit={onSubmit}>
                            <div className='ct-form-ne'>
                                <div className='ct-field'>
                                    <CssTextField
                                        onChange={onChange}
                                        required
                                        type='text'
                                        className='field' 
                                        label="NAME"
                                        name='from_name' 
                                        variant="standard"     
                                        // inputProps={{
                                        //     style: {
                                        //         width: '640px'
                                        //     }
                                        // }}
                                        sx={{
                                            width: '98%'
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
                                        label="EMAIL"
                                        name='from_email' 
                                        variant="standard"
                                        sx={{
                                            width: '98%'
                                        }}     
                                        // inputProps={{
                                        //     style: {
                                        //         minWidth: '375px',
                                        //         width: '640px'
                                        //     }
                                        // }}
                                        value={formData['from_email']}
                                    />
                                </div>
                            </div>
                            <div className='ct-field'>
                                <CssTextField
                                    onChange={onChange} 
                                    required
                                    className='field' 
                                    label="MESSAGE"
                                    name='message' 
                                    multiline
                                    rows={3}
                                    variant="standard"     
                                    // inputProps={{
                                    //     style: {
                                    //         height: '100px',
                                    //         width: '640px',
                                    //     }
                                    // }}
                                    sx={{
                                        width: '94%'
                                    }} 
                                    value={formData['message']}
                                />
                            </div>
                            <div className='form-btn'>         
                                <Button
                                    variant="text"
                                    // disableRipple
                                    type='submit' 
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        backgroundColor: '#f9f9f9',
                                        '&:hover': {
                                            backgroundColor: '#f9f9f9',
                                        },
                                        width: 187,
                                        height: 30,
                                        fontSize: '1rem',
                                        padding: 0,
                                        marginLeft: '15px',
                                        justifyContent: 'flex-start',
                                        letterSpacing: '2px'
                                    }}
                                    endIcon={<EastIcon />}
                                >
                                    SEND MESSAGE
                                </Button>              
                                {/* <Button
                                    className='btn'
                                    type='submit' 
                                    variant='contained' 
                                    size='large' 
                                    endIcon={<SendIcon />} 
                                    sx={{
                                        backgroundColor: 'black', 
                                        // minWidth: '340px', 
                                        // maxWidth: '668px',
                                        width: '250px',
                                        marginLeft: '16px',
                                        borderRadius: 0,
                                        '&:hover': {
                                            backgroundColor: '#000',
                                            borderRadius: 0
                                        }
                                    }}
                                >
                                    Send Message
                                </Button> */}
                            </div>
                        </form>
                        <div className='ct-pref'>
                            PREFER EMAIL?
                        </div>
                        <div className='ct-em'>
                            dwoo1016@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact