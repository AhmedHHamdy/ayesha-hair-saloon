import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init()

export default function SixthSection() {
  return (
		<section id="lookbook" class="sixth-section" data-aos="fade-up">
			<h5>Our L<u>oo</u>kbook</h5>

			<section class="sixth-section-img-container clearfix">
				<section class="one"></section>
				<section class="two"></section>
				<section class="three"></section>
				<section class="four"></section>
				<section class="five"></section>
				<section class="six"></section>
			</section>
		</section>
  )
}