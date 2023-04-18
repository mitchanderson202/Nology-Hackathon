import "./Github.scss";
import { useState, useEffect } from "react";

const Github = () => {
  const [info, setInfo] = useState([]);

  const username = "mitchanderson202";

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
    <div className="Github">
      {info.map((info) => (
        <div key={info.id}>
          <h2>{info.full_name}</h2>
          <p>Name: {info.name}</p>
          <p>Url: {info.html_url}</p>
          <p>Created at: {formatTime(info.created_at)}</p>
          <p>Pushed at: {formatTime(info.pushed_at)}</p>
          <p>Updates at: {formatTime(info.updated_at)}</p>
          <p>Language: {info.language}</p>
        </div>
      ))}
    </div>
  );
};

export default Github;
