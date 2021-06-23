import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";
import "./Work.css";

const Warks = () => {
	const allCarousel = [
		carousel1,
		carousel2,
		carousel3,
		carousel4,
		carousel5,
	];

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="slider-container  pb-5 pt-5">
			<Container>
				<div className="mb-5">
					<h3 className="text-center section-title">
						{" "}
						Here are some of our works{" "}
					</h3>
				</div>
				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2500}
					keyBoardControl={true}
					dotListClass="custom-dot-list-style"
					showDots={true}
				>
					{allCarousel.map((carousel, index) => {
						return (
							<div key={index + 100}>
								<img className="carousel-image" src={carousel} alt="" />
							</div>
						);
					})}
				</Carousel>
				;
			</Container>
		</div>
	);
};

export default Warks;
