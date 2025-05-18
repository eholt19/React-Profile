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
