import React, { useState, useContext } from "react";
import { UserLoginContext } from "../../contexts/UserLoginProvider";
import { useNavigate } from "react-router";
import styles from "./HomePage.module.scss";

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
		<div className={styles.HomePage}>
			<h1 className={styles.Heading}>Welcome to My Learning Dashboard!</h1>
			<p className={styles.Para}>To get started, enter the usernames for any accounts you have below.</p>
			<form className={styles.Form}>
				<div className={styles.Field}>
					<label className={styles.Label}>Codewars:</label>
					<input
						className={styles.Input}
						type="text"
						name="codewars"
						onChange={handleChange}
						value={formValues.codewars}
						required
					/>
				</div>
				<div className={styles.Field}>
					<label className={styles.Label}>Github:</label>
					<input
						className={styles.Input}
						type="text"
						name="github"
						onChange={handleChange}
						value={formValues.github}
						required
					/>
				</div>
				<div className={styles.Field}>
					<label className={styles.Label}>Hacker Rank:</label>
					<input className={styles.Input} type="text" name="hacker" onChange={handleChange} value={formValues.hacker} />
				</div>
				<button className={styles.Button} onClick={handleSubmit}>
					Get Started!
				</button>
			</form>
		</div>
	);
};

export default HomePage;
