import React, { useRef, useState } from 'react'
import './Contact.css'
import { TextField } from '@mui/material'
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({
        vertical: 'bottom',
        horizontal: 'center'
    });

    const { vertical, horizontal } = pos;

    const handleClick = () => setOpen(true);

    const handleClose = (ev, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
              <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );

    const onSubmit = (ev) => {
        ev.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((res) => {
                handleClick();
            }, (err) => {
                console.log(err.text)
            }
        )
        setFormData({'from_name': '', 'from_email': '', 'message': ''});
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
                    <div className='ct-title'>
                        <h3>Get in touch</h3>
                        <span>Feel free to leave a message or connect with me on LinkedIn!</span>
                    </div>
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
                                    sx={{
                                        width: '94%'
                                    }} 
                                    value={formData['message']}
                                />
                            </div>
                            <div className='form-btn'>         
                                <Button
                                    variant="text"
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
                <Snackbar
                    anchorOrigin={{vertical, horizontal}}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Message sent. Thank you!"
                    action={action}
                />
            </div>
        </motion.div>
    )
}

export default Contact