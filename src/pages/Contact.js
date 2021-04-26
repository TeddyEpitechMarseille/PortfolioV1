import emailjs from "emailjs-com";
import Navigation from '../components/Navigation';
import React, { useEffect } from 'react';
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
})
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7t02whw', 'template_bpgljim', e.target, 'user_ZF2UOUapdl6WLEpqZAGEi')
      .then((result) => {
          console.log(result.text);
          alert("Vous recevrez une réponse sous 48h. Bonne journée à vous !")
      }, (error) => {
          console.log(error.text);
          alert("Le message semble ne pas s'être envoyé.")
      });
      e.target.reset()
  }

  return (
    <>
    <Navigation/>
    <div className="contact">
        
        <section className="contact-content">
          <div>
            <h2>Prendre contact</h2>
            <h3>Vous souhaitez réaliser un projet ou vous avez des opportunités à me proposer ?
  Contactez-moi et nous discuterons !</h3>
          </div>
          <form onSubmit={sendEmail}>
            <div className="input-group id">
              <div className="first-name">
                <label>
                  Prénom
                </label>
                <input type="text" name="firstname" required/>
              </div>
              <div className="last-name">
                <label>
                  Nom
                </label>
                <input type="text" name="lastname" required/>
              </div>
            </div>
            <div className="input-group email"> 
              <label>
                Email
              </label>
              <input id="email" type="email" name="email" required/>
            </div>
            <div className="input-group content">
              <label>
                Message
              </label>
              <textarea id="message" name="message" cols="30" rows="10" required></textarea>
            </div>
            <div className="submit">
              <button type="submit" className="button">
                Envoyer
              </button>
            </div>
          </form>
        </section>
    </div>
    </>
  );
}

export default Contact;
