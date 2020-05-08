import React from 'react';

const Contact = ({
  avatar,
  name,
  phone,
  country,
  admissionDate,
  company,
  department
}) => {
  return (
    <article data-testid="contact" className="contact">
      <span className="contact__avatar"><img src={avatar} alt="Avatar de usuário" /></span>
      <span className="contact__data">{name}</span>
      <span className="contact__data">{phone}</span>
      <span className="contact__data">{country}</span>
      <span className="contact__data">{admissionDate}</span>
      <span className="contact__data">{company}</span>
      <span className="contact__data">{department}</span>
    </article>
  );
}


export default Contact;