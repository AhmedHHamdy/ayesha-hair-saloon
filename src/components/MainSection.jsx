import "../App.css"
import { Link } from "react-router-dom"

export default function MainSection() {
  return (
		<main id="home">
			<h1>Ayesha</h1>
			<p>Divide Your Uniqueness By your hair in style</p>
			<a className="main-button" href="#service">&#8211; Our Services</a>

			<div className="sale-container">
				<span className="span-first">Your First Visit?</span>
				<p><span className="paragrap-span">-20%</span> for the first classic hair coloring</p>
				<Link className="sale-container-button" to="/booking">&#8211; Book online</Link>
			</div>
			
			{/* <div class="arrow-container">
				<a href=""><i class="fa-solid fa-arrow-left"></i></a>
				<a href=""><i class="fa-solid fa-arrow-right"></i></a>
			</div> */}

		</main>
  )
}