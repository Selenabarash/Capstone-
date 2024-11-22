import axios from "axios"
import { useEffect, useState } from "react"


function Feed(){
    const [users, setUsers] = useState([])
    useEffect(() => {
    const fetchUser = async () => {
        const user = await axios.get('http://localhost:4000/api/user')
        console.log(user.data)
        setUsers(user.data)
    } 
    fetchUser()
    }, [])
    return(
        <main>
            <h1>
                Feed Page
            </h1>
            <div>
                {users.map(user => (
                    <div>
                        <h3>
                            {user.username}
                        </h3>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Feed