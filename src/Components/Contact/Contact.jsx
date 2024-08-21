import React, { useState } from "react";
import Contactinfo from "./Contactinfo/Contactinfo.jsx";
import SkipLink from "../SkipLink/SkipLink.jsx";
import Button from "../Button/Button.jsx";
import FormField from "../Contact/FormField.jsx";
import SuccessMessage from "../Contact/SuccessMessage.jsx";
import FormValidation from "../Contact/FormValidation.jsx";
import contactinfo from "./Contactinfo/Contactinfo.js";
import "./Contact.css";

function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    otherSubject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  return (
    <div className="contact__form-container">
      <SkipLink />
      <div className="contact__content" id="main">
        <div className="contact__info">
          <h2 className="contact__info__title">Let's Connect & Collaborate!</h2>
          <div className="contact__info__list">
            {contactinfo.map((info, index) => (
              <Contactinfo
                key={index}
                icon={isDarkMode ? info.icons.dark : info.icons.light}
                name={info.name}
                content={info.content}
              />
            ))}
          </div>
        </div>
        <FormValidation formData={formData}>
          {(validate) => (
            <form
              className="contact__form"
              onSubmit={(event) => {
                event.preventDefault();
                const formErrors = validate(setErrors, setIsSubmitted); // 使用 validate 函数验证表单数据
                setErrors(formErrors);

                if (Object.keys(formErrors).length === 0) {
                  setIsSubmitted(true);
                }
              }}
            >
              <div className="contact__form__name">
                <FormField
                  type="text"
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  error={errors.firstName}
                />
                <FormField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  error={errors.lastName}
                />
              </div>
              <FormField
                type="text"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                error={errors.email}
              />
              <FormField
                type="text"
                name="phoneNumber"
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                error={errors.phoneNumber}
              />
              <FormField
                type="select"
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                error={errors.subject}
              >
                <option value="">Select Subject</option>
                <option value="uiux">UI/UX</option>
                <option value="visualDesign">Visual Design</option>
                <option value="frontendDesign">Frontend Design</option>
                <option value="other">Other</option>
              </FormField>
              {formData.subject === "other" && (
                <FormField
                  type="text"
                  name="otherSubject"
                  label="Other Subject"
                  value={formData.otherSubject}
                  onChange={handleInputChange}
                  placeholder="Other"
                  error={errors.otherSubject}
                />
              )}
              <FormField
                type="text"
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                error={errors.message}
              />
              <Button type="submit" className="form__submit__button">
                Submit
              </Button>
              <SuccessMessage isSubmitted={isSubmitted} />
            </form>
          )}
        </FormValidation>
      </div>
    </div>
  );
}

export default Contact;
