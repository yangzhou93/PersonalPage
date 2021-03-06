import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {
   state = {
      sending: false,
      sent: false
   }
   sendEmail = (e)=>{
      e.preventDefault();
      this.setState({
         sent:false,
         sending: true
       });
      emailjs.sendForm('gmail', 'PersonlWebsiteTemplate', e.target,'user_3Q1BN5VK34Zw6T4sR83su')
         .then((result) => {
            this.setState({
               sending: false,
               sent: true
            })
            console.log(result.text);
            e.target.reset()
         }, (error) => {
            console.log(error.text);
         });
   }
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit = {this.sendEmail} action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input required type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input required type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea required cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     {this.state.sending && <span id = 'loading'>
                        <img alt="" src="images/loader.gif" />
                     </span>}
                     {this.state.sent && <span id ='sentSuccess'>
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                     </span>}
                  </div>
					</fieldset>
				   </form>

				   
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Email and Phone</h4>
					   <p className="address">
						   {email}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
