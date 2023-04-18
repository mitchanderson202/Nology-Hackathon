import React, { useState, useEffect } from "react";

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
        <div>
            <h1>CodeWars Stats</h1>
            {user && (
                <div key={user.id}>
                    <p>Username: {user.username}</p>
                    <p>Id: {user.id}</p>
                    <p>{user.honor}</p>
                </div>
            )}
        </div>
    );
};

export default CodeWars;
