import { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./ContactUs.module.scss";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSent, setIsFormSent] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const clearInputFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const onSubmit = async () => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      message.length
    ) {
      if (email.includes("@") && email.includes(".")) {
        setIsFormSent(true);
        const data = {
          name: name,
          email: email,
          phone: phone,
          message: message,
        };
        const response = await axios.post(
          "http://localhost:3002/contact",
          data
        );
        return response.data;
      }
    }
    clearInputFields();
    setTimeout(() => {
      setIsFormSent(false);
    }, 25000);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact_headline_wrapper}>
        <p className={styles.contact_headline}>
          Let's discuss on something <span className={styles.contact_headline_span}>cool</span> together
        </p>
      </div>
      <div className={styles.contact_form_wrapper}>
        {!isFormSent && (
          <form className={styles.contact_form}>
            <div className={styles.contact_form_wrapper}>
              <div>
                <label className={styles.contact_label} htmlFor="name">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.contact_field}
                    value={name}
                    placeholder="Your name"
                    onChange={handleNameChange}
                  />
                </label>
              </div>
              <div>
                <label className={styles.contact_label} htmlFor="email">
                  Email
                  <input
                    type="text"
                    id="email"
                    placeholder="Your email"
                    name="email"
                    className={styles.contact_field}
                    value={email}
                    onChange={handleEmailChange}
                  />
                </label>
              </div>
              <div>
                <label className={styles.contact_label} htmlFor="phone">
                  Phone
                  <input
                    type="text"
                    id="phone"
                    placeholder="Your phone number"
                    className={styles.contact_field}
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </label>
              </div>
              <div>
                <label className={styles.contact_label} htmlFor="message">
                  Message
                  <textarea
                    id="message"
                    rows={20}
                    cols={10}
                    placeholder="Your message"
                    className={styles.contact_field}
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                  ></textarea>
                </label>
              </div>
            </div>
            <div className={styles.contact_btn_wrapper}>
              <Button onClick={onSubmit}>Submit</Button>
            </div>
          </form>
        )}
      </div>
      {isFormSent && (
        <div className={styles.contact_sent_form}>
          <p>Thanks for contacting us!</p>
          <p>We will answer you as soon as possible</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
