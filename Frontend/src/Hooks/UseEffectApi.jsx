import {useEffect,useState} from 'react'

const UseEffectApi = () => {
  const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => console.log(data));
    },[])
  return (
    <div>
      <ul>
        {users.map((user,index) => (
          <li key={index}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffectApi