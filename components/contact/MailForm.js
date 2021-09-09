import styled from "styled-components";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 90%;
    justify-content: center;
`

const ContactForm = styled.form`
    display: grid;
    grid-template-rows: repeat(2, min-content) .9fr min-content;
    grid-gap: 2rem;

    position: relative;

    margin-top: 3rem;
    
    width: 100%;

    font-size: ${(props) => props.theme.fontSize.p};

    & > * {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
        border: none;
        
        font-size: inherit;

        padding: 1rem;

        &::placeholder {
            color: ${(props) => props.theme.colors.black};
        }

    }
`

const StyledLabel = styled.label`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`

const FormInput = styled.input`
    padding: 1rem;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};
`

const TextArea = styled.textarea`
    resize: none;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};
`

const Button = styled.button`
    padding: 1rem 4rem;
    justify-self: center;
    transition: all .2s;
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowLight};

    &:hover {
        transform: scale(1.1);
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.black};
        box-shadow: ${(props) => props.theme.boxShadow.boxShadowHeavy};

        & span{
            display: inline-block;
            transform: translateX(1rem);
        }
    }

`

const MailForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleMailSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nameRef.current.value,
            from_email: emailRef.current.value,
            to_name: 'Venable Park Investment Counsel',
            message: messageRef.current.value
        }

        if (nameRef && emailRef && messageRef) {

            emailjs.send(

                process.env.NEXT_PUBLIC_MAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_MAIL_USER_ID

            ).then((result) => {
                resetMailForm();

            }, (error) => {
                resetMailForm();
            });
        }
    }

    const resetMailForm = () => {
        nameRef.current.value = null;
        emailRef.current.value = null;
        messageRef.current.value = null;
    }


    return (
       <ContactWrapper>
           <ContactForm onSubmit={handleMailSubmit}>


               <FormInput id="user_name" type="text" name="user_name" ref={nameRef} placeholder="Name" required />
               <StyledLabel htmlFor="user_name">Full Name</StyledLabel>

               <FormInput id="user_email" type="email" name="user_email" ref={emailRef} placeholder="Email Address" required />
               <StyledLabel htmlFor="user_email">Email</StyledLabel>

               <TextArea id="message" name="message" ref={messageRef} required />
               <StyledLabel htmlFor="message">Message</StyledLabel>

               <Button type="submit" value="submit">Send <span>&rarr;</span></Button>

           </ContactForm>
       </ContactWrapper>
    );
};

export default MailForm;
