import React, { useState, useContext } from "react";
import { UserLoginContext } from "../../contexts/UserLoginProvider";
import { useNavigate } from "react-router";

const HomePage = () => {
	const defaultValues = {
		codewars: "",
		github: "",
		hacker: "",
	};
	const [formValues, setFormValues] = useState(defaultValues);

	const { codeWarsUsername, setCodeWarsUsername, hackerRankUsername, setHackerRankUsername, githubUsername, setGithubUsername } =
		useContext(UserLoginContext);

	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setCodeWarsUsername(formValues.codewars);
		setGithubUsername(formValues.github);
		setHackerRankUsername(formValues.hacker);
		navigate("/dashboard");
	};

	return (
		<div>
			<h1>Welcome to My Learning Dashboard!</h1>
			<p>To get started, enter the usernames for any accounts you have below.</p>
			<form>
				<div>
					<label>Codewars:</label>
					<input type="text" name="codewars" onChange={handleChange} value={formValues.codewars} />
				</div>
				<div>
					<label>Github:</label>
					<input type="text" name="github" onChange={handleChange} value={formValues.github} />
				</div>
				<div>
					<label>Hacker Rank:</label>
					<input type="text" name="hacker" onChange={handleChange} value={formValues.hacker} />
				</div>
				<button onClick={handleSubmit}>Get Started!</button>
			</form>
		</div>
	);
};

export default HomePage;
