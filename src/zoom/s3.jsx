import './s3.css';
import { Link } from 'react-router-dom';
function Screen3(){
    return(
        <>
        <div>
        <header>
        <Link to='/'><img className='img' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/arrow-1521462-1289083.png?f=webp&w=256" alt=""/></Link>
        <h2>More</h2><hr/>
    </header>
    <main>
        <h2>Settings</h2><hr/>
        <ul className="sl">
            <li>
                <i className='i1' class="fa-solid fa-video"></i>
                <span className='s1'>Meetings</span>
                <i class="fa-regular fa-circle-right"></i>
            </li>
            <li>
                <i className='i1' class="fa-solid fa-gear"></i>
                <span className='s2'>General</span>
                <i class="fa-regular fa-circle-right"></i>
                
            </li>
            <li>
                <i className='i1' class="fa-solid fa-person"></i>
                <span className='s3'>Accessibility</span>
                <i class="fa-regular fa-circle-right"></i>
            </li>
            <li>
                <i className='i1' class="fa-solid fa-door-open"></i>
                <span className='s4'>Activation code login</span>
                <i class="fa-regular fa-circle-right"></i>
            </li><hr/>
            <li>
                <span>Version</span>
                <span className='s5'>6.2.3 (24672)</span>
                <i class="fa-regular fa-circle-right"></i>
            </li><hr/>
            <li>
                <span>Tell others about Zoom</span>
                <i class="fa-regular fa-circle-right"></i>
            </li><hr/>
            <li>
                <span>Rate Zoom Workplace in the Google Play Store</span>
                <i class="fa-regular fa-circle-right"></i>
            </li><hr/>
            <li>
                <span>Privacy Policy</span>
                <i class="fa-regular fa-circle-right"></i>
            </li><hr/>
            <li>
                <span>Terms of Service</span>
                <i class="fa-regular fa-circle-right"></i>
            </li><hr/>
            <li>
                <span>Community standards</span>
                <i class="fa-regular fa-circle-right"></i>
            </li><hr/>
            <li>
                <span>Grievance Officer - India</span>
                <i class="fa-regular fa-circle-right"></i>
            </li><hr/>
            <li>
                <span className='bp12'>Open source software</span>
                
            </li><hr/>
            
        </ul>
    </main>
    <footer>
        <p>Copyrights @2012-2024 Zoom Video <br/> Communications, Inc. All rights reserved.</p>
    </footer>
        </div>
        </>
    );
}
export default Screen3