import React from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
import "./ContactUs.css";
import ContactInput from "../../Elements/Atoms/ContactInput/ContactInput";
import ContactBtn from "../../Elements/Atoms/Button/ContactBtn/ContactBtn";
import Footer from "../../Elements/Footer/Footer";
import InputNumber from "../../Elements/Atoms/InputNumber/InputNumber";

const ContactUs = () => {
  return (
    <div id="ContactUsMainContainer">
      {/* <div className="NavbarContactUsContainer">
        <Navbar />
      </div> */}
      <div className="KeyHighlightsContactUsContainer">
        <KeyHighlights text={"Contact Us"} />
      </div>
      <div className="ContactUsInputContainer">
        <div className="ContactUsInputContainerTop">
          <h1>We’d Love to Hear From You!</h1>
        </div>
        <div className="ContactUsInputContainerBottom">
          <form action="#">
            <div className="ContactUsInputContainerBottomMainInput">
              <div className="ContactUsInputContainerBottomMainInputSubContainer">
                <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                  <ContactInput typepurpose={"text"} label={"Name"} />
                </div>
                <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                  <ContactInput typepurpose={"email"} label={"Email address"} />
                </div>
                <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                  <ContactInput
                    typepurpose={"number"}
                    label={"Phone number"}
                    minLength={10}
                    maxLength={11}
                  />
                </div>
                <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                  <ContactInput typepurpose={"text"} label={"Interested in"} />
                </div>
              </div>
              {/* <ContactInput typepurpose={"number"} label={"Phone number"} /> */}
              <div className="ContactUsTextarea">
                <textarea
                  name="textarea"
                  id=""
                  placeholder="How can we help ?"
                ></textarea>
              </div>
              <div className="contactBtn">
                <ContactBtn title={"Submit"} />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="Contactfooter">
        <Footer/>
      </div> */}
    </div>
  );
};

export default ContactUs;
