import React, { Component } from "react";
import { Button } from "@mui/material";
import "./home.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export class DepDetail extends Component {
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
				values.work_interfere == null ||
				values.family_history === null ||
				values.benefits === null ||
				values.remote_work === null ||
				values.tech_company === null
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
							<h3 align="left">2/5</h3>
						</div>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								If you have a mental health condition, do you feel that it
								interferes with your work ?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.work_interfere}
								onChange={handleChange("work_interfere")}
							>
								<FormControlLabel value={3} control={<Radio />} label="Often" />
								<FormControlLabel
									value={2}
									control={<Radio />}
									label="Sometimes"
								/>
								<FormControlLabel
									value={1}
									control={<Radio />}
									label="Rarely"
								/>
								<FormControlLabel value={0} control={<Radio />} label="Never" />
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Do you have a family history of mental illness ?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.family_history}
								onChange={handleChange("family_history")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Do you work remotely (outside of an office) at least 50% of the
								time?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.remote_work}
								onChange={handleChange("remote_work")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Are you from primarily a tech company/organization ?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.tech_company}
								onChange={handleChange("tech_company")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Does your organization provide mental health benefits?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.benefits}
								onChange={handleChange("benefits")}
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

export default DepDetail;
