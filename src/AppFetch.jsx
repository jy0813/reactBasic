import React from 'react';
import useFetch from "./hooks/use-fetch";

const baseUrl = 'https://jsonplaceholder.typicode.com'
function AppFetch(props) {
  const { data, fetchUrl } = useFetch(baseUrl,'users')
  const { data: userData } = useFetch(baseUrl,'users')
  const { data: postDate } = useFetch(baseUrl,'posts')
  const { data: todoData } = useFetch(baseUrl,'todos')

  return (
      <div>
        <h1>useFetch</h1>
        <h1>User</h1>
        <button onClick={() => fetchUrl('users')}>users</button>
        <pre>{JSON.stringify(data, null, 2 )}</pre>
        {userData &&  <pre>{JSON.stringify(userData[0], null, 2 )}</pre>}
        {postDate &&  <pre>{JSON.stringify(postDate[0], null, 2 )}</pre>}
        {todoData &&  <pre>{JSON.stringify(todoData[0], null, 2 )}</pre>}
      </div>
  );
}

export default AppFetch;