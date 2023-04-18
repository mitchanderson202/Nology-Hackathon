
// import React, { useState, useEffect } from "react";

// const CodeWars = ({ username }) => {
//     const [user, setUser] = useState("");
//     const getCodeWarsAPI = async (user) => {
//         const response = await fetch(
//             `https://www.codewars.com/api/v1/users/${user}`
//         );
//         const data = await response.json();
//         console.log(data, "data");
//         return data;
//     };

//     useEffect(() => {
//         const wrapper = async () => {
//             const data = await getCodeWarsAPI(username);
//             setUser(data);
//         };
//         wrapper();
//     }, [user]);

//     return (
//         <div>
//             <h1>CodeWars Stats</h1>
//             <div>{user.id}</div>
//         </div>
//     );
// };

// export default CodeWars;

import React, { useState, useEffect } from "react";
const CodeWars = () => {
    const [username, setUsername] = useState("");
    const getCodeWarsAPI = async (user) => {
        const response = await fetch(
            `https://www.codewars.com/api/v1/users/${user}`
        );
        const data = await response.json();
        console.log(data, "data");
        return data;
    };
    useEffect(() => {
        const wrapper = async () => {
            const data = await getCodeWarsAPI("Magachute");
            setUsername(data);
        };
        wrapper();
    }, []);
    return (
        <div>
            <h1>CodeWars Stats</h1>
            {username && (
                <div key={username.id}>
                    <p>Username: {username.username}</p>
                    <p>Id: {username.id}</p>
                    <p>
                        Challenges Completed:{" "}
                        {username.codeChallenges.totalCompleted}
                    </p>
                    <p>Rank: {username.ranks.overall.name}</p>
                    <p>Languages: make pie graph</p>
                </div>
            )}
        </div>
    );
};

export default CodeWars;
