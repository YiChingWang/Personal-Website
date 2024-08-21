function FormValidation({ formData, children }) {
  const validate = (setErrors, setIsSubmitted) => {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    } else if (formData.firstName.includes(" ")) {
      newErrors.firstName = "Name cannot contain spaces.";
    } else if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
      newErrors.firstName = "Name cannot contain numbers.";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (formData.lastName.includes(" ")) {
      newErrors.lastName = "Name cannot contain spaces.";
    } else if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
      newErrors.lastName = "Name cannot contain numbers.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!formData.phoneNumber.match(/^\d+$/)) {
      newErrors.phoneNumber = "The phone number can only contain digits.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject.";
    } else if (formData.subject === "other" && !formData.otherSubject.trim()) {
      newErrors.otherSubject = "Please specify the subject.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }

    return newErrors;
  };

  return children(validate);
}

export default FormValidation;
