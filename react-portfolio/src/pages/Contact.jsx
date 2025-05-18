import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });

    if (!e.target.value.trim()) {
      setErrors({ ...errors, [e.target.name]: `${e.target.name} is required` });
    } else {
      const newErrors = { ...errors };
      delete newErrors[e.target.name];
      setErrors(newErrors);
    }

    if (e.target.name === 'email' && e.target.value) {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
      if (!emailValid) {
        setErrors({ ...errors, email: 'Email is invalid' });
      }
    }
  };

  return (
    <section>
      <h2 className="title is-3">Contact</h2>
      <form>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" name="name" type="text" placeholder="Name" onBlur={handleChange} />
          </div>
          {errors.name && <p className="help is-danger">{errors.name}</p>}
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" name="email" type="email" placeholder="Email" onBlur={handleChange} />
          </div>
          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" name="message" placeholder="Message" onBlur={handleChange}></textarea>
          </div>
          {errors.message && <p className="help is-danger">{errors.message}</p>}
        </div>

        <div className="control">
          <button className="button is-link" type="submit" disabled={Object.keys(errors).length > 0}>Send</button>
        </div>
      </form>
    </section>
  );
}
