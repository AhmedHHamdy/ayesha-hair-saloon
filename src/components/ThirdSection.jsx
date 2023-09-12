import "../App.css"
import jessica_felicio_F16KPYxfm6s_unsplash from '../assets/jessica_felicio_F16KPYxfm6s_unsplash.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init()

export default function ThirdSection() {
  return (
		<section id="about" class="third-section clearfix" data-aos="fade-up">
			<img src={jessica_felicio_F16KPYxfm6s_unsplash} alt="Hair beautification" />
			<section>
				<h2>Make Your <pre></pre>Own Momentum</h2>
				<p>Showcasing Your Distinctive Personality in Hairstyle At our hair salon, we believe that your hair is a canvas for self-expression and individuality. We understand that each client is unique, and that's why we encourage you to create your own momentum when it comes to your hairstyle. Our experienced stylists are here to help you showcase your distinctive personality with flair.</p>
				<a href="#about">&#8211; Read more</a>
			</section>
		</section>
  )
}