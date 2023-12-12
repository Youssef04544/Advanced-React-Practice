import { useEffect } from "react";
import { useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>fetch data example</h2>
      {users.map((user) => {
        return (
          <article key={user.id}>
            <h3>{user.login}</h3>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <a href={user.url}>{user.login}'s page.</a>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default FetchData;
