import { useState } from "react";

const ContactHandler = () => {
    const [fullName, setfullName] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [message, setmessage] = useState("");

    const contactInput = () => {
     console.log(fullName,emailAddress,message)
    }
    return (
        fullName,
        setfullName,
        emailAddress,   
        setemailAddress,
        message,
        setmessage,
        contactInput
    )
}
export default ContactHandler;