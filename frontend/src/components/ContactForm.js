import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', address: '', message: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('https://YOUR_BACKEND_URL/api/contact', formData);
            alert('Message sent successfully');
            setFormData({ name: '', email: '', phone: '', address: '', message: '' });
        } catch (err) {
            alert('Error sending message');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
