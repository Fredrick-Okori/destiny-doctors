import React from 'react';

import { Button } from '@chakra-ui/react';

const ContactButton = () => {
    const handleButtonClick = () => {
        const email = 'your@email.com'; // Replace with your email address
        const subject = 'Subject of the email'; // Replace with your desired subject
        const body = 'Hello, I would like to get in touch with you.'; // Replace with your desired email body

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the default mail application
        window.open(mailtoLink, '_blank');
    };

    return (
        <Button
            bg='#37B34A'
            variant='outline'
            color='#214B24'
            px="12"
            py="7"
            fontWeight="bold"
            _hover={{ bg: '#214B24', color: '#37B34A' }}
            onClick={handleButtonClick}>
            Contact Us
        </Button>
    );
};

export default ContactButton;
