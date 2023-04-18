import React, { createContext, useState } from "react";

export const UserLoginContext = createContext();

export const UserLoginProvider = ({ children }) => {
	const [codeWarsUsername, setCodeWarsUsername] = useState("");
	const [hackerRankUsername, setHackerRankUsername] = useState("");
	const [githubUsername, setGithubUsername] = useState("");

	const toPass = { codeWarsUsername, setCodeWarsUsername, hackerRankUsername, setHackerRankUsername, githubUsername, setGithubUsername };
	return <UserLoginContext.Provider value={toPass}>{children}</UserLoginContext.Provider>;
};

export default UserLoginProvider;
