import ContactCopy from "../../components/Contact/Contact-Copy";
import { ContactUs } from "../../components/Contact/Contact-Form";
import ContactLinks from "../../components/Contact/Contact-Links";
import Navbar from "../../components/Navbar/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar location={'contact'}/>
      <ContactCopy />
      <ContactLinks />
      <ContactUs />
    </>
  );
}
