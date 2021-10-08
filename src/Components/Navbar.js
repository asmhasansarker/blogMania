import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { selectSignedIn, selectUserData, setInput, setSignedIn, setUserData } from '../features/userSlice'

import "../styling/navbar.css"

const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) =>{
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }


    const handleClick = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        dispatch(setInput(inputValue))
    }

    return (    
        <div className="navbar">
            <h1 className="navbar__header">BlogMania 💬</h1>

            {isSignedIn && (<div className="blog__search">
                <input className="search" placeholder="Search for a blog " value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />

                <button className="submit" onClick={handleClick} >
                    Search 
                </button>
            </div>
            
            )}

            {isSignedIn ? (<div className="navbar_user_data">
                
                <Avatar className="user" src={userData?.imageUrl} alt={userData?.name}/>

                <h1 className="signedIn" > {userData?.name}</h1>
                <GoogleLogout clientId="931120640125-ssov2mvpf9hl74n5hsf95mplaftv8r1m.apps.googleusercontent.com"
                render={(renderProps) =>(
                    <button 
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="logout__button"
                    >
                        Logout 🙁
                    </button>
                    
                )}
                
                onLogoutSuccess={logout}
                />
            </div>) : (
                <h1 className="notSignedIn"> User not available 😥 </h1>
            )}
        </div>
    )
}

export default Navbar
