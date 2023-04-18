import React, { useContext } from "react";
import Github from "../../components/Github/Github";
import { UserLoginContext } from "../../contexts/UserLoginProvider";
import CodeWars from "../../components/CodeWars/CodeWars";

const Dashboard = () => {
	const { codeWarsUsername, hackerRankUsername, githubUsername } = useContext(UserLoginContext);
	return (
		<div>
			<CodeWars username={codeWarsUsername} />
			<Github username={githubUsername} />
		</div>
	);
};

export default Dashboard;
