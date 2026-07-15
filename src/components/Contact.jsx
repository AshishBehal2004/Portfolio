import './contact.css'

export default function Contact() {
  return (
    <div id="contact">
        <p className="text-4xl"></p>
        <h2 className="section-heading">Contact</h2>
        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">

          <input type="hidden" name="access_key" value="9e973e5f-be42-4661-b9d9-dd0c5c5d5d6f"/>

          <div className="form-field">
            <input type="text" name="name" placeholder=" " required/>
            <label htmlFor="floatingInput">Name</label>
          </div>
          
          <div className="form-field">
            <input type="email" name="email" placeholder=" " required/>
            <label htmlFor="floatingInput">Email</label>
          </div>

          <div className="form-field">
            <textarea name="message" placeholder=" " required></textarea>
            <label htmlFor="floatingInput">Message</label>
          </div>
          
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

