import React, { useState } from "react";
import { Box, Input, Textarea, Button, Select, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (formData.phone && !/^[0-9]+$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert("Form submitted successfully");
      setLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
    }, 1000);
  };

  return (
    <Box maxW="500px" mx="auto" mt={20} p={5} boxShadow="md" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter your email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <Select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}>
            <option value="">Select Subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership Request">Partnership Request</option>
            <option value="Technical Support">Technical Support</option>
          </Select>
        </FormControl>
        <FormControl isInvalid={errors.message}>
          <FormLabel>Message</FormLabel>
          <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input placeholder="Enter Phone number" type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          <FormErrorMessage>{errors.phone}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="blue" type="submit" isLoading={loading}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;