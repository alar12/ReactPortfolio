// import React from 'react';

// function ContactSection() {
//   return (
//     <section className="contact" id="contact">
//       <div className="max-width">
//         <h2 className="title" data-aos="fade-down">Contact Me</h2>
//         <div className="contact-content">
//           <div className="column left" data-aos="flip-left">
//             <div className="text">Let's Get in Touch</div>
//             <p className="paragraph-3">
//               Feel free to reach me out. Please do not hesitate, the response to the message may take time.
//             </p>
//             <div className="icons">
//               <div className="row">
//                 <i className="fas fa-user"></i>
//                 <div className="info">
//                   <div className="head">Name</div>
//                   <div className="sub-title">Lalith Adithya Reddy Avuthu</div>
//                 </div>
//               </div>
//               <div className="row">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <div className="info">
//                   <div className="head">Address</div>
//                   <div className="sub-title">4475 W Pine Blvd, St Louis, MO, 63108</div>
//                 </div>
//               </div>
//               <div className="row">
//                 <i className="fas fa-envelope"></i>
//                 <div className="info">
//                   <div className="head">Email</div>
//                   <div className="sub-title">adithyaavuthu@gmail.com</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="column right" data-aos="flip-right">
//             <div className="text">Message Me</div>
//             <form action="#Contact">
//               <div className="fields">
//                 <div className="field name">
//                   <input type="text" id="fromName" placeholder="Name" required autoComplete="off" />
//                 </div>
//                 <div className="field email">
//                   <input type="email" id="emailSender" placeholder="Email" required autoComplete="off" />
//                 </div>
//               </div>
//               <div className="field">
//                 <input type="text" id="subjectSender" placeholder="Subject" required autoComplete="off" />
//               </div>
//               <div className="field textarea">
//                 <textarea cols="30" rows="10" id="message" placeholder="Message" required autoComplete="off"></textarea>
//               </div>
//               <div className="button">
//                 <button type="submit">Send Message</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactSection;

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_99diu2a', 'template_27u1x2d', form.current, 'aAkTVNIMrBBSmzvhJ')
      .then((result) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mail Sent Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      }, (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Something went wrong!',
          text: error.text,
        });
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title" data-aos="fade-down">Contact Me</h2>
        <div className="contact-content">
          <div className="column left" data-aos="flip-left">
            <div className="text">Let's Get in Touch</div>
            <p className="paragraph-3">
              Feel free to reach me out. Please do not hesitate, the response to the message may take time.
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Lalith Adithya Reddy Avuthu</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">4475 W Pine Blvd, St Louis, MO, 63108</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">adithyaavuthu@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right" data-aos="flip-right">
            <div className="text">Message Me</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input type="text" name="from_name" placeholder="Name" required autoComplete="off" />
                </div>
                <div className="field email">
                  <input type="email" name="email_sender" placeholder="Email" required autoComplete="off" />
                </div>
              </div>
              <div className="field">
                <input type="text" name="subject_sender" placeholder="Subject" required autoComplete="off" />
              </div>
              <div className="field textarea">
                <textarea cols="30" rows="10" name="message_sender" placeholder="Message" required autoComplete="off"></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

