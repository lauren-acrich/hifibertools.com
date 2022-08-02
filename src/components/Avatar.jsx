import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";


const Avatar = (props) => {
    return (
        <div className="avatarContainer">
            <img
                src={props.image}
                alt="avatars" 
            />
            <p>{props.name}</p>
            <div className="avatarIcons" >
                <a href={props.github}>
                    {<GoMarkGithub style={{ color: "whitesmoke" }} />}
                </a>
                <a href={props.linkedin}>
                    {<BsLinkedin style={{ color: "whitesmoke" }} />}
                </a>
            </div>
        </div>
    )
}


export default Avatar;
