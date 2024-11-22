import axios from "axios"
import { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setUserInput(value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
          }


// post request 
    }
    return (
        <main>
            <h1>
                Create An Account
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        username="username"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        placeholder="Enter A Username" 
                    />
                </label>
                <label>
                    <input
                        type="text"
                        username="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="Enter Your Email" 
                    />
                </label>
                <label>
                    <input
                        type="text"
                        username="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Enter A Password" 
                    />
                </label>

                <button>
                    register
                </button>

            </form>
        </main>
    )
}

export default Register