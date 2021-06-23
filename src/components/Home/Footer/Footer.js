import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer mt-5 ">
			<div className="container d-flex align-items-center py-5">
				<div className="row">
					<div className="col-md-5">
						<h1>Get In Touch</h1>
						<p>
							I'd Love to hear from you . Whether you have a question or just
							want to say hi, fell free to drop a message. I'll try my best to
							get back to you
						</p>
					</div>
					<div className="col-md-5 offset-md-1 mx-auto">
						<form action="">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Your  email Address "
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Your name  "
								/>
							</div>
							<div className="form-group">
								<textarea
									name=""
									className="form-control"
									id=""
									cols="30"
									rows="10"
									placeholder="Message... "
								></textarea>
							</div>
							<div className="form-group text-center">
								<button type="button" className="btn-all">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
				<div></div>
			</div>
			<Container>
				<Row>
					<Col md={6} lg={4} className="mt-2">
						<div className="footer-link">
							<h3 className="mb-4" style={{ color: "#404655" }}>
								Our Services
							</h3>
							<span className="animate-border border-black mb-3"></span>
							<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
								<FontAwesomeIcon icon={faCheckCircle} />{" "}
								<span> Bike cleaning and washing</span>
							</Link>
							<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
								<FontAwesomeIcon icon={faCheckCircle} />{" "}
								<span> Yearly bike inspection view</span>
							</Link>
							<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
								<FontAwesomeIcon icon={faCheckCircle} />{" "}
								<span> Bike repair and change service</span>
							</Link>
							<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
								<FontAwesomeIcon icon={faCheckCircle} />{" "}
								<span> Bike selling and buying service</span>
							</Link>
							<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
								<FontAwesomeIcon icon={faCheckCircle} />{" "}
								<span> Test driving and speed test</span>
							</Link>
						</div>
					</Col>
					<Col md={6} lg={4} className="mt-2">
						<div className="footer-link">
							<h3 className="mb-4" style={{ color: "#404655" }}>
								Our Support
							</h3>
							<span className="animate-border border-black mb-3"></span>
							<div className="footer-link">
								<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
									<FontAwesomeIcon icon={faCheckCircle} />{" "}
									<span> How to get started?</span>
								</Link>
								<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
									<FontAwesomeIcon icon={faCheckCircle} />{" "}
									<span> Frequently asked questions</span>
								</Link>
								<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
									<FontAwesomeIcon icon={faCheckCircle} />{" "}
									<span> Customer testimonials</span>
								</Link>
								<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
									<FontAwesomeIcon icon={faCheckCircle} />{" "}
									<span> Get a free quote</span>
								</Link>
								<Link to="/" className="d-block p-0 mb-4 item-link nav-link">
									<FontAwesomeIcon icon={faCheckCircle} />{" "}
									<span> Help & Support Center</span>
								</Link>
							</div>
						</div>
					</Col>
					<Col md={6} lg={4} className="mt-2">
						<div className="footer-link">
							<h3 className="mb-4" style={{ color: "#404655" }}>
								Social Links
							</h3>
							<span className="animate-border border-black mb-3"></span>
							<div className="footer-link">
								<a
									href="https://www.facebook.com/HashTagSaikat/"
									target="-blank"
									className="d-block p-0 mb-4 item-link nav-link"
								>
									<FontAwesomeIcon icon={faCheckCircle} /> <span>Facebook</span>
								</a>
								<a
									href="https://www.linkedin.com/in/saikat-in/"
									target="-blank"
									className="d-block p-0 mb-4 item-link nav-link"
								>
									<FontAwesomeIcon icon={faCheckCircle} />{" "}
									<span> LinkedIn</span>
								</a>
								<a
									href="https://github.com/saikat100"
									target="-blank"
									className="d-block p-0 mb-4 item-link nav-link"
								>
									<FontAwesomeIcon icon={faCheckCircle} /> <span> GitHub</span>
								</a>
								<a
									href="https://www.instagram.com/___saikat___/"
									target="-blank"
									className="d-block p-0 mb-4 item-link nav-link"
								>
									<FontAwesomeIcon icon={faCheckCircle} />{" "}
									<span>Instagram</span>
								</a>
								<a
									href="https://twitter.com/saikathossen"
									target="-blank"
									className="d-block p-0 mb-4 item-link nav-link"
								>
									<FontAwesomeIcon icon={faCheckCircle} /> <span>Twitter</span>
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="copyright">
				<small>
					Designed & Build by{" "}
					<a
						href="mailto:saikathossen3@gmail.com"
						style={{ color: "rgb(26 210 14)" }}
					>
						Saikat Hossain
					</a>
				</small>{" "}
				<br />
				<small>{new Date().getFullYear()} &copy; copyright | Saikat</small>{" "}
				<br />
			</div>
		</footer>
	);
};

export default Footer;
