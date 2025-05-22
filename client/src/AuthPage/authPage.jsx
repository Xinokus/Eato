import axios from 'axios'
import classes from './authPage.module.scss'
import { useEffect, useState } from "react"

export default function AuthPage(){
    const [data, setData] = useState([])
    const [pageState, setPageState] = useState(0)

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(()=>{
        axios({
            method: 'GET',
            url: 'http://localhost:5000/users',
            headers: {'Content-Type': "application/json"}
        })
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])

    function login(){
        let token
        let body = new FormData()
        body.append('email', email)
        // body.append('username', username)
        body.append('password', password)

        axios({
            method: "post",
            url: "http://localhost:5000/users/login",
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
            token = response.data
            console.log(token)
            localStorage.setItem('token', token)
        })
        .catch(function (response) {
            console.log(response);
            alert('error')
        });
    }

    function register(){
        let token
        let body = new FormData()
        body.append('email', email)
        body.append('username', username)
        body.append('password', password)

        axios({
            method: "post",
            url: "http://localhost:5000/users/registration",
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
            token = response.data
            console.log(token)
            localStorage.setItem('token', token)
        })
        .catch(function (response) {
            console.log(response);
            alert('error')
        });
    }

    function exit(){
        localStorage.setItem('token', 'undefined')
    }

    if(pageState == 0){ // login
        return(
            <>
                <section className={classes.sect_one}>
                    <form onSubmit={(e)=>[e.preventDefault(), login()]} className={classes.con}>
                        <p>Login</p>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <button type="submit">login</button>
                        <button type="button" onClick={exit}>exit</button>
                    </form>
                    <br />
                    <button type="button" onClick={()=>setPageState(1)}>register</button>
                </section>
            </>
        )
    }
    if(pageState == 1){ // registration
        return(
            <>
                <section className={classes.sect_one}>
                    <form onSubmit={(e)=>[e.preventDefault(), register()]} className={classes.con}>
                        <p>Registration</p>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                        </div>
                        <button type="submit">register</button>
                    </form>
                    <br />
                    <button type="button" onClick={()=>setPageState(0)}>login</button>
                </section>
            </>
        )
    }
}