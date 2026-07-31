import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred. Please try again.';
    toast.error(message);
    return Promise.reject(error);
  }
);

export const submitReservation = async (data) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Reservation submitted successfully! We will contact you shortly.');
    return { success: true, data };
  } catch (error) {
    throw error;
  }
};

export const submitContactForm = async (data) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Message sent! We will get back to you soon.');
    return { success: true, data };
  } catch (error) {
    throw error;
  }
};

export const subscribeNewsletter = async (email) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Subscribed! Thank you for joining our newsletter.');
    return { success: true, email };
  } catch (error) {
    throw error;
  }
};

export default api;
