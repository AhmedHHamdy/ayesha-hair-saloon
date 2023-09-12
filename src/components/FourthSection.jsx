import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init()

export default function FourthSection() {
  return (
		<section id="staff" class="fourth-section clearfix" data-aos="fade-up">
			<section class="img-container clearfix">
				<section class="one-pic"></section>
				<section class="two-pic"></section>
				<section class="three-pic"></section>
			</section>

			<section class="artist-info clearfix">
				<div>
					<h4>Smith michael</h4>
					<span>- Colourist</span>
				</div>

				<div class="second-div">
					<h4>Ayesha lake</h4>
					<span>- styler</span>
				</div>

				<div class="third-div">
					<h4>Alita willims</h4>
					<span>- Beautician</span>
				</div>
			</section>
		</section>
  )
}