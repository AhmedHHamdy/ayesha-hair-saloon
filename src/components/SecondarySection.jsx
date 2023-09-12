import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init()

export default function SecondarySection() {
  return (
		<section id="service" class="secondary-section clearfix" data-aos="fade-up">
			<section>
				<i class="fa-solid fa-spray-can-sparkles"></i>
				<h3>Expert Beauticians</h3>
				<p>Our team consists of beauticians with over 30 years combined experience who will work together to make your vision a reality.</p>
			</section>

			<section>
				<i class="fa-solid fa-couch"></i>
				<h3>Quality Service</h3>
				<p>We offer the highest quality service using the latest in hair-care technology.</p>
			</section>

			<section>
				<i class="fa-solid fa-bottle-droplet"></i>
				<h3>Beauty Products</h3>
				<p>Rest assured that our products are free of sulfates and effective in hydrating and nourishing hair and skin.</p>
			</section>
		</section>
  )
}