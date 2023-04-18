import React, { useState, useEffect } from "react";
import styles from "./CodeWars.module.scss";

const CodeWars = ({ username }) => {
    const [user, setUser] = useState("");

    const getCodeWarsAPI = async (username) => {
        const response = await fetch(
            `https://www.codewars.com/api/v1/users/${username}`
        );
        const data = await response.json();
        console.log(data, "data");
        return data;
    };

    useEffect(() => {
        const wrapper = async () => {
            const data = await getCodeWarsAPI(username);
            setUser(data);
        };
        wrapper();
    }, [username]);

    return (
        <div className={styles.CodeWars}>
            <h1 className={styles.Heading}>CodeWars Stats</h1>
            {user && (
                <div key={user.id}>
                    <p className={styles.Para}>Username: {user.username}</p>
                    <p className={styles.Para}>
                        Clan: {user.clan ?? "No clan"}
                    </p>
                    <p className={styles.Para}>Id: {user.id}</p>
                    <p className={styles.Para}>Honor: {user.honor}</p>
                    <p className={styles.Para}>
                        Rank: {user?.ranks?.overall?.name ?? "Unknown"}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CodeWars;
