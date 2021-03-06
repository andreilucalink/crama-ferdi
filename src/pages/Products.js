import React, { useEffect } from 'react';
import '../css/products.css';
import AOS from 'aos';

function Products() {
	useEffect(() => {
		if (window.innerWidth > 965 && window.innerWidth < 1401) {
			document.getElementById('animation2').removeAttribute('data-aos');
		}
		AOS.init({
			once: true,
			duration: 1000
		});
	});

	return (
		<div className="products-page">
			<header className="main-header">
				<h1>
					<span> View </span> Products
				</h1>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, dolores!</p>
			</header>
			<main className="products-container">
				<div className="card-cell">
					<section className="card-info">
						<div className="img" id="product1" />
						<div>
							<section>
								<h3>Product 1</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias magnam
									maxime at eius necessitatibus accusantium eaque, sapiente, animi fugit repudiandae
									delectus, explicabo voluptatem quam pariatur veniam corporis fuga! Laudantium.
								</p>
							</section>
							<a href="#start" className="btn">
								View more
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell">
					<section className="card-info" id="animation2" data-aos="fade-right" data-aos-offset="150">
						<div className="img" id="product2" />
						<div>
							<section>
								<h3>Product 2</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam recusandae harum
									molestiae eveniet incidunt!
								</p>
							</section>
							<a href="#start" className="btn">
								View more
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell">
					<section className="card-info" data-aos="fade-left" data-aos-offset="150">
						<div className="img" id="product3" />
						<div>
							<section>
								<h3>Product 3</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias magnam
									maxime at eius necessitatibus accusantium eaque, sapiente, animi fugit repudiandae
									delectus, explicabo voluptatem quam pariatur veniam corporis fuga! Laudantium.
								</p>
							</section>
							<a href="#start" className="btn">
								View more
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell">
					<section className="card-info" data-aos="fade-right" data-aos-offset="150">
						<div className="img" id="product4" />
						<div>
							<section>
								<h3>Product 4</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias magnam
									maxime at eius necessitatibus accusantium eaque, sapiente, animi fugit repudiandae
									delectus, explicabo voluptatem quam pariatur veniam corporis fuga! Laudantium.
								</p>
							</section>
							<a href="#start" className="btn">
								View more
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell">
					<section className="card-info" data-aos="fade-left" data-aos-offset="150">
						<div className="img" id="product5" />
						<div>
							<section>
								<h3>Product 5</h3>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione corporis cumque,
									optio sit error necessitatibus corrupti dolor ad ipsam. Quibusdam.
								</p>
							</section>
							<a href="#start" className="btn">
								View more
							</a>
						</div>
					</section>
				</div>
				<div className="card-cell" data-aos="fade-right" data-aos-offset="150">
					<section className="card-info">
						<div className="img" id="product6" />
						<div>
							<section>
								<h3>Product 6</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet ipsam minima,
									veniam aut id? Odit, nulla itaque. Neque aspernatur officia quos. Nostrum placeat
									itaque facere nam recusandae delectus architecto.
								</p>
							</section>
							<a href="#start" className="btn">
								View more
							</a>
						</div>
					</section>
				</div>
			</main>
			<a role="button" href="#start" data-scroll>
				<img src={require('../img/up-ar.svg')} alt="Go Up" className="scroll-products" />
			</a>
		</div>
	);
}

export default Products;
