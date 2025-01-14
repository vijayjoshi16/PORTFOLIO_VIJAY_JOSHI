import { useState } from "react";
import "./Contact.scss";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2 style={{overflow:"hidden"}}>CONTACT</h2>
        
        <form style={{padding:"5px",width:"100%"}} onSubmit={handleSubmit}>
          <input className="email_input" type="text" placeholder="Email" />
          <textarea className="message_area" placeholder="Message"></textarea>
          <button className="send_btn" type="submit">SEND</button>
          
        </form>
        <p style={{fontSize:"1rem",color:"#0047AB",margin:"10px",
        marginTop:"20px",overflow: "hidden"}}>Feel free to contact me and connect with me: </p>
        <span
        style={{
          width:"70%",
          height:"200px",
          margin:"auto",
          marginTop:"10px",
          paddingTop:"30px",
          textAlign:"center",
          overflow:"hidden",

        }}>
        <a target="_blank" className="contact_link" href="https://in.linkedin.com/in/vijay-joshi-80221a193">
        <img
        src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://www.codechef.com/users/vijay_joshi"><img
        src="https://avatars1.githubusercontent.com/u/11960354?s=460&u=a77c97db3237e61ac0548a9d887f35c74c7e595e&v=4" width="50px"/>
        </a>
        <a target="_blank" className="contact_link" href="https://codeforces.com/profile/vijay_joshi"><img
        src="https://cdn.jsdelivr.net/npm/simple-icons@3.6.1/icons/codeforces.svg" width="50px"/>
        </a> 
        <a target="_blank" className="contact_link" href="https://leetcode.com/vijay_joshi16/"><img
        src="https://leetcode.com/static/images/LeetCode_logo.png" width="50px"/>
        </a>
        <a target="_blank" className="contact_link" href="https://auth.geeksforgeeks.org/user/joshivijay324/practice/"><img
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png" width="50px"/>
        </a>
        <a target="_blank" className="contact_link" href="https://www.instagram.com/vijayjoshi802/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://www.facebook.com/profile.php?id=100007797368212"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://github.com/vijayjoshi16"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://twitter.com/vijay_joshi16"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://www.quora.com/profile/Vijay-Joshi-96"><img
        src="https://static-00.iconduck.com/assets.00/quora-icon-495x512-sp3u96sp.png" width="50px"/>
        </a>
        </span>
      </div>
    </div>
  );
}