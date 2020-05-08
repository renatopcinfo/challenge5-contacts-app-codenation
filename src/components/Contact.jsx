import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar"><img src={this.props.avatar} alt="Avatar de usuário" /></span>
        <span className="contact__data">{this.props.name}</span>
        <span className="contact__data">{this.props.phone}</span>
        <span className="contact__data">{this.props.country}</span>
        <span className="contact__data">{this.props.admissionDate}</span>
        <span className="contact__data">{this.props.company}</span>
        <span className="contact__data">{this.props.department}</span>
      </article>
    );
  }
}

export default Contact;