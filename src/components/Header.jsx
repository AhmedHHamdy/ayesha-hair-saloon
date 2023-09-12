import "../App.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
			<nav class="clearfix">
				<span class="logo-name">Ayesha.</span>
				<ul class="menu">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#service">Service</a></li>
					<li><a href="#lookbook">Lookbook</a></li>
					<li><a href="#news">News</a></li>
					<li><a href="#staff">STYLISTS</a></li>
					<li><a href=""><i class="fa-sharp fa-solid fa-magnifying-glass"></i></a></li>
					<li><a href=""><i class="fa-sharp fa-solid fa-bag-shopping"></i></a></li>
				</ul>
				<Link class="header-button" to="/booking">&#8211; Book Online</Link>
			</nav>
		</header>
  )
}