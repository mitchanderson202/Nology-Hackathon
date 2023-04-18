import "./Github.scss";
import { useState, useEffect } from "react";


const Github = ({ username }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);

  const formatTime = (time) => {
    return new Date(time).toLocaleString("en-AU", {
      timeZone: "Australia/Sydney",
    });
  };

  return (

    <div className="Github-Grid">
      {info.map((info) => (
        <div key={info.id} className="Github">
          <h2>{info.full_name}</h2>
          <p>
            Name: <strong>{info.name}</strong>
          </p>
          <p>
            Url: <strong>{info.html_url}</strong>
          </p>
          <p>
            Created at: <strong>{formatTime(info.created_at)}</strong>
          </p>
          <p>
            Pushed at: <strong>{formatTime(info.pushed_at)}</strong>
          </p>
          <p>
            Updates at: <strong>{formatTime(info.updated_at)}</strong>
          </p>
          <p>
            Language: <strong>{info.language}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Github;
