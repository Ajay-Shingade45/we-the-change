import emailjs from '@emailjs/browser';

// EmailJS configuration - using environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_p56njus';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'lZUf4BSVQXXJXhPoh';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Email templates
export const EMAIL_TEMPLATES = Object.freeze({
  CONTACT_FORM: 'template_fmuxzp8', // Updated template ID
  DONATION_NOTIFICATION: 'donation_notification',
  VOLUNTEER_APPLICATION: 'volunteer_application',
});

// Email sending functions
export const sendContactEmail = async (data) => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      to_email: 'fairy.nz@gmail.com,farheen@wethechangeindia.org',
    };

    console.log('Attempting to send contact email with params:', templateParams);

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAIL_TEMPLATES.CONTACT_FORM,
      templateParams
    );

    console.log('Contact email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    
    // If template doesn't exist, try with a generic template
    if (error && typeof error === 'object' && 'status' in error && error.status === 400) {
      console.log('Template not found, trying with generic template...');
      try {
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          'template_1', // Generic template
          {
            from_name: data.name,
            from_email: data.email,
            message: `Subject: ${data.subject}\nPhone: ${data.phone}\nMessage: ${data.message}`,
            to_email: 'fairy.nz@gmail.com,farheen@wethechangeindia.org',
          }
        );
        console.log('Contact email sent with generic template:', result);
        return true;
      } catch (fallbackError) {
        console.error('Fallback email also failed:', fallbackError);
      }
    }
    
    return false;
  }
};

export const sendDonationEmail = async (data) => {
  try {
    const templateParams = {
      donor_name: data.name,
      donor_email: data.email,
      amount: data.amount,
      phone: data.phone || 'Not provided',
      message: data.message || 'No additional message',
      to_email: 'fairy.nz@gmail.com,farheen@wethechangeindia.org',
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAIL_TEMPLATES.DONATION_NOTIFICATION,
      templateParams
    );

    console.log('Donation email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending donation email:', error);
    return false;
  }
};

export const sendVolunteerEmail = async (data) => {
  try {
    const templateParams = {
      volunteer_name: data.name,
      volunteer_email: data.email,
      phone: data.phone,
      age: data.age,
      role: data.role,
      skills: data.skills,
      experience: data.experience,
      availability: data.availability,
      motivation: data.motivation,
      to_email: 'fairy.nz@gmail.com,farheen@wethechangeindia.org',
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAIL_TEMPLATES.VOLUNTEER_APPLICATION,
      templateParams
    );

    console.log('Volunteer email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending volunteer email:', error);
    return false;
  }
};

// Utility functions
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  // Format as +91 XXXXX XXXXX for Indian numbers
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
};
