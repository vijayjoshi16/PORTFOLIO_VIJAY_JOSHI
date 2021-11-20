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
        <p style={{fontSize:"1rem",color:"black",margin:"10px",
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
        src="https://camo.githubusercontent.com/45e6bebceba49c2cf76b1b3770b1adbe24e6c454/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667" width="50px" />
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
        <a target="_blank" className="contact_link" href="https://www.instagram.com/vijayjoshi802/"><img src="https://camo.githubusercontent.com/68ff38b86f01b428567dcc406116e23728245f4e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://www.facebook.com/profile.php?id=100007797368212"><img src="https://camo.githubusercontent.com/e6d2040c65e8c6f4da10db72436cf9a1196e43ae/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f66616365626f6f6b2e737667" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://github.com/vijayjoshi16"><img src="https://camo.githubusercontent.com/d0518022b7a02d405ad5112a0c8aa455cbfe952e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://twitter.com/vijay_joshi16"><img src="https://camo.githubusercontent.com/9bbddae7e626bda73c943e06b4568a7a02e193b4/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f747769747465722e737667" width="50px" />
        </a>
        <a target="_blank" className="contact_link" href="https://www.quora.com/profile/Vijay-Joshi-96"><img
        src="https://banner2.cleanpng.com/20180320/iee/kisspng-area-text-symbol-brand-computer-wallpaper-quora-5ab0b982e2b621.3292421215215312669286.jpg" width="50px"/>
        </a>
        </span>
      </div>
    </div>
  );
}