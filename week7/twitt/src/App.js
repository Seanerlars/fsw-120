import React from 'react'
import './App.css';
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiHomeCircle, BiHash, BiBell} from 'react-icons/bi'
import {MdMailOutline, MdBookmarkBorder} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
import {BsCardText} from 'react-icons/bs'


function App() {
  return (
    <div className="App">
     
      <div className="Main">


      <div className="Sidebar_Area">

      <div className="Twitter">
<AiOutlineTwitter color="#1DA1F2" fontSize="2.3rem"/>
      </div>
      <div className="Icons">
        <BiHomeCircle color="#1DA1F2" fontSize="2rem"/>
        <div>Home</div>
      </div>

      <div className="Icons">
        <BiHash color="#1DA1F2" fontSize="2rem"/>
        <div>Explore</div>
      </div>

      <div className="Icons">
        <BiBell color="#1DA1F2" fontSize="2rem"/>
        <div>Alerts</div>
      </div>

      <div className="Icons">
        <MdMailOutline color="#1DA1F2" fontSize="2rem"/>
        <div>Message</div>
      </div>


      <div className="Icons">
        <MdBookmarkBorder color="#1DA1F2" fontSize="2rem"/>
        <div>Bookmarks</div>
      </div>

      <div className="Icons">
        <BsCardText color="#1DA1F2" fontSize="2rem"/>
        <div>Lists</div>
      </div>

      <div className="Icons">
        <FaUserCircle color="#1DA1F2" fontSize="2rem"/>
        <div>Profiles</div>
      </div>

      <div className="Icons">
        <MdBookmarkBorder color="#1DA1F2" fontSize="2rem"/>
        <div>More</div>
      </div>

      
      </div>
      
      <div className="Main_Area">
      <form id="post-new-todo">
  <label>Blog Title</label>
  <input type="text" id="titleInput"></input>

  <label>Description</label>
  <input type="text" id="descriptionInput"></input>

  

  
  <button type="Submit"> Post</button>
  <div class="tContainer"></div>
</form>
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
