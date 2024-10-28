import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { IoCallSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Logs form data properly
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.btnSty}>
          <Button text="via chat support" icon={<MdMessage />} variant="chat" />
          <Button text="via call" icon={<IoCallSharp />} />
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              rows={5}
              value={formData.text}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              
            }}
          >
            <Button text="Submit" variant="chat" />
          </div>
        </form>
      </div>
      <div className={styles.image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </div>
  );
}
