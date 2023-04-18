import React, { useContext } from "react";
import Github from "../../components/Github/Github";
import { UserLoginContext } from "../../contexts/UserLoginProvider";
import CodeWars from "../../components/CodeWars/CodeWars";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	const { codeWarsUsername, hackerRankUsername, githubUsername } = useContext(UserLoginContext);
	return (
		<div className={styles.Dashboard}>
			<h1 className={styles.Header}>My Learning Dashboard</h1>
			<div className={styles.WildStuff}>
				<div className={styles.CodeWars}>
					<CodeWars username={codeWarsUsername} />
				</div>
				<div className={styles.Github}>
					<Github username={githubUsername} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
