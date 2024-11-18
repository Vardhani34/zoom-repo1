import './s6.css';
import { Link } from 'react-router-dom';
function Screen6() {
  return (
    <div>
       <header>
       <Link to='/'><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/arrow-1521462-1289083.png?f=webp&w=256" alt=""/></Link>
       <h2>Join</h2>
      </header>
   <main>
       <form>
          <div>
            <input type="number" placeholder="Meeting ID"/>
          </div>
          <p>Join with a personal link name</p>
          <div>
            <input type="text" placeholder='Device Name'/>
          </div>
          <p>By clicking "Join",you agree to our <a href="">Terms of Service</a> and <a href="">Privacy Statement</a></p>
          <button><h3>Join</h3></button>
          <p>If you received an invitation link, tap on the link to join the meeting</p>
          <div>
           <p>Join options</p>
           <button class="mb">Don't connect to audio</button><br/>
           <button class="mb">Turn off my video</button>
           
          </div>
       </form>
   </main>
    </div>
  )
}

export default Screen6
