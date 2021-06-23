import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import './Review.css'
const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [reviews, setReviews] = useState({});
  const history = useHistory();
  const handleChange = (e) => {
    const newReview = {
      ...reviews,
      name: loggedInUser.name,
      img: loggedInUser.photoURL,
    };
    newReview[e.target.name] = e.target.value;
    setReviews(newReview);
  };

  const handleSubmit = (e) => {
    /* e.preventDefault(); */
    setReviews({
      ...reviews,
      name: loggedInUser.name,
      img: loggedInUser.photoURL,
    });
    fetch("http://localhost:5000/addFeedback", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(reviews),
		}).then((success) => {
			if (success) {
				alert("Thank you for Your feedback");
				history.push("/");
			}
			console.log(success);
		});
  };
  return (
		<section>
			<div className="row">
				<div className="col-md-3">
					<Sidebar></Sidebar>
				</div>
				<div className="col-md-9">
					<div className="row">
						<div className="col-md-7 mb-5 ml-5 mt-3">
							<h4 style={{ fontWeight: "bold" }}> Review Form</h4>
						</div>
						<div className="col-md-4 mt-3">
							<h5 style={{ fontWeight: "bolder" }}>{loggedInUser.name}</h5>
						</div>
					</div>
					<div className="order-form">
						<form onSubmit={handleSubmit}>
							<div className="form-group col-md-5 col-sm-12 col-12">
								<input
									onChange={handleChange}
									type="text"
									className="form-control"
									name="name"
									placeholder="Your name"
									value={loggedInUser.name}
								/>
							</div>
							<div className="form-group col-md-5 col-sm-12 col-12">
								<input
									onChange={handleChange}
									type="text"
									className="form-control"
									name="Designation"
									placeholder="Email"
								/>
							</div>

							<div className="form-group  col-md-5  col-sm-12 col-12">
								<label htmlFor="exampleInputName">Description</label>
								<textarea
									onChange={handleChange}
									type="text"
									className="form-control"
									name="description"
									placeholder="Write your comment here..."
									cols="30"
									rows="10"
								/>
							</div>

							<button type="submit" className="btn btn-success my-2">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>

		/* <section>
      <div className=" m-2 row">
        <div className="col-md-4">
          <img src="https://iili.io/3Hsc3N.png" alt="" className="img-fluid" width="60%" />
        </div>
        <div className="col-md-4 d-flex justify-content-start">
          <h1>Review Form</h1>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <h2>{loggedInUser.name}</h2>
        </div>
      </div>
      <div className="container-fluid row ml-5 mt-5">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8  order-Form">
          <form onSubmit={handleSubmit}>
            <div className="form-group col-md-5 col-sm-12 col-12">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
                placeholder="Your name"
                value={loggedInUser.name}
              />
            </div>
            <div className="form-group col-md-5 col-sm-12 col-12">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="Designation"
                placeholder="Designation,Company's name "
              />
            </div>

            <div className="form-group  col-md-5  col-sm-12 col-12">
              <label htmlFor="exampleInputName">Description</label>
              <textarea
                onChange={handleChange}
                type="text"
                className="form-control"
                name="description"
                placeholder="Enter description"
                cols="30"
                rows="10"
              />
            </div>

            <button type="submit" className="btn btn-success my-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section> */
	);
};

export default Review;
