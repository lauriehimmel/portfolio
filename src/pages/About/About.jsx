import './About.css'
import Header from "../../components/Header/Header";
import AboutBody from '../../components/About/About-body';
import Navbar from '../../components/Navbar/Navbar';

export default function About () {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutBody />
    </div>
  )
}
