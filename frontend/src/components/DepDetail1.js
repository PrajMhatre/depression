import React, { Component } from "react";
import { Button } from "@mui/material";
import "./home.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export class DepDetail1 extends Component {
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
				values.care_options == null ||
				values.anonymity === null ||
				values.seek_help === null ||
				values.wellness_program === null
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
							<h3 align="left">3/5</h3>
						</div>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Do you know the options for mental health care your organization
								provides?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.care_options}
								onChange={handleChange("care_options")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
								<FormControlLabel
									value={2}
									control={<Radio />}
									label="Not Sure"
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Have you  ever discussed mental health as part of an
								employee wellness program?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.wellness_program}
								onChange={handleChange("wellness_program")}
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
							<FormLabel id="demo-row-radio-buttons-group-label">
								Does your organization provide resources to learn more about mental
								health issues and how to seek help?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.seek_help}
								onChange={handleChange("seek_help")}
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
								Is your anonymity protected if you choose to take advantage of
								mental health or substance abuse treatment
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.anonymity}
								onChange={handleChange("anonymity")}
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

export default DepDetail1;
