import classes from './contact-form.module.css';
import { useState } from 'react';
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    setReqStatus('error');
    throw new Error(data.message || 'Something went wrong.');
  }
}

export default () => {
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [reqStatus, setReqStatus] = useState(); // Pending, success, error

  async function sendMessageHandler(e) {
    e.preventDefault();
    setReqStatus('pending');

    try {
      await sendContactData({
        email: currentEmail,
        name: currentName,
        message: currentMessage
      });
      setReqStatus('success');
    } catch (err) {
      setReqStatus('error');
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can we help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' name='email' id='email' required value={currentEmail} onChange={(e) => setCurrentEmail(e.target.value)} />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' name='name' id='name' required value={currentName} onChange={(e) => setCurrentName(e.target.value)} />
          </div>
        </div>
        <div className='classes.control'>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' cols='30' rows='5' required value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
        </div>
        <div className='classes.actions'>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};
