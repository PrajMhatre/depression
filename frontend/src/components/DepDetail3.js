import React, { Component } from "react";
import { Button } from "@mui/material";
import "./home.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export class DepDetail3 extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextSection();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevSection();
	};
	render() {
		const { values, handleChange } = this.props;
		const check = (e) => {
			if (
				values.mental_health_interview === null ||
				values.phys_health_interview === null ||
				values.obs_consequence === null ||
				values.mental_vs_physical === null
			) {
				alert("All The Field Are Mandatory");
			} else {
				this.continue(e);
			}
		};
		return (
			<div className="stylings">
				<div className="userdetail">
					<React.Fragment>
						<div
							style={{
								width: "100%",
								color: "#054f99",
								padding: "1%",
								fontWeight: "bold",
							}}
						>
							<h3 align="left">5/5</h3>
						</div>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Would you bring up a mental health issue with a potential
								employer in an interview?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.mental_health_interview}
								onChange={handleChange("mental_health_interview")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
								<FormControlLabel
									value={2}
									control={<Radio />}
									label="May Be"
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Would you bring up a physical health issue with a potential
								employer in an interview?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.phys_health_interview}
								onChange={handleChange("phys_health_interview")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
								<FormControlLabel
									value={2}
									control={<Radio />}
									label="May Be"
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Do you feel that your employer takes mental health as seriously
								as physical health?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.mental_vs_physical}
								onChange={handleChange("mental_vs_physical")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
								<FormControlLabel
									value={2}
									control={<Radio />}
									label="Don't Know"
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel align="left" id="demo-row-radio-buttons-group-label">
								Have you heard of or observed negative consequences for
								coworkers with mental health conditions in your organization
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.obs_consequence}
								onChange={handleChange("obs_consequence")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>

						<div style={{ width: "100%" }}>
							<Button onClick={check}>Continue</Button>
							<Button className="rightBtn" onClick={this.back}>
								Back
							</Button>
						</div>
					</React.Fragment>
				</div>
			</div>
		);
	}
}

export default DepDetail3;
