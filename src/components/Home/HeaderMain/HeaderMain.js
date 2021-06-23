import React from "react";
import frame from "../../../images/logos/Frame.png";

const HeaderMain = () => {
  return (
		<section className="header-bg">
			<div className="container layout">
				<div className="row d-flex align-items-center mb-5">
					<div className="col-md-5 col-12 col-sm-6">
						<h1>We’re Finding Solution For Your Problems</h1>
						<p>
							Our repair technicians have a wealth of experience repairing motor
							cycles and diagnosing wealth of great thing experience repairing
							errors.
						</p>
						<button
							type="button"
							className="btn-all"
							data-toggle="tooltip"
							data-placement="top"
							title="+8801744510689"
						>
							Hire Us
						</button>
					</div>
					<div className="col-md-7 col-sm-6">
						<img src={frame} alt="" className="img-fluid w-100" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderMain;
