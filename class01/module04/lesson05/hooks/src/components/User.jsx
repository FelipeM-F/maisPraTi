import { useEffect, useState } from "react";

function UserProfile({userId}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"+userId
      );
      const userData = await response.json();
      setUser(userData);
    };
    fetchUserData();

    return () => setUser(null);

  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
