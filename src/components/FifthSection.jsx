import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom"

AOS.init()

export default function FifthSection() {
  return (
		<section id="news" class="fifth-section" data-aos="fade-up">
				<span>Colour Day Offer!</span>
				<h3><span class="heading-span">-10%</span> On Haircut color and Highlight</h3>
				<Link to="/booking">&#8211; Book Appointment</Link>
		</section>
  )
}