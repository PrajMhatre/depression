import React, { Component } from "react";
import { TextField, Button } from "@mui/material";
import "./home.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export class UserDetail extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextSection();
	};
	render() {
		const { values, handleChange } = this.props;
		const check = (e) => {
			e.preventDefault();
			console.log(values.givenName);
			if (values.givenName === null) {
				alert("Please Enter Name");
			} else if (values.age === null) {
				alert("Please Enter Age");
			} else if (values.gender === null) {
				alert("Please Select Gender");
			} else if (values.self_employed === null) {
				alert("All The Fields are Mandatory");
			} else {
				this.continue(e);
			}
		};
		return (
			<div className="stylings">
				<React.Fragment>
					<form className="userdetail">
						<div
							style={{
								width: "100%",
								color: "#054f99",
								padding: "1%",
								fontWeight: "bold",
							}}
						>
							<h3 align="left">1/5</h3>
						</div>
						<TextField
							required
							id="outlined-required"
							label="Given Name"
							variant="filled"
							onChange={handleChange("givenName")}
							defaultValue={values.givenName}
							fullWidth
						/>
						<br />
						<TextField
							required
							type="number"
							id="outlined-required"
							label="Age"
							variant="filled"
							onChange={handleChange("age")}
							defaultValue={values.age}
						/>
						<br />
						<FormControl required>
							<FormLabel id="demo-row-radio-buttons-group-label" align="left">
								Gender
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.gender}
								onChange={handleChange("gender")}
							>
								<FormControlLabel
									value={0}
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel value={1} control={<Radio />} label="Male" />
								<FormControlLabel value={2} control={<Radio />} label="Other" />
							</RadioGroup>
						</FormControl>
						<br />
						
						<FormControl required>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Are you self-employed ?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
								value={values.self_employed}
								onChange={handleChange("self_employed")}
							>
								<FormControlLabel value={1} control={<Radio />} label="Yes" />
								<FormControlLabel value={0} control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
						<br />
						
						<div style={{ width: "100%" }}>
							<Button onClick={check}>Continue</Button>
						</div>
					</form>
				</React.Fragment>
			</div>
		);
	}
}

export default UserDetail;
