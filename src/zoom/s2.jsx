import './s2.css';
import { Link } from 'react-router-dom';
function Screen2(){
    return(
        <>
        <div className='s2'>
        <div className="main">
            <Link to='/settings'><img src="https://img.icons8.com/m_outlined/200/FFFFFF/settings.png" alt=""/></Link>
            <h1 className="t1">zoom</h1>
            <h1 className="t2">Workplace</h1>
            <div className="main1">
                <h3>Welcome</h3>
                <p>Get started with your account</p>
                <Link to='/join'><button className="mb1"><h3>Join a meeting</h3></button></Link><br/>
                <Link to='/signup'><button className="mb2"><h3>Sign up</h3></button></Link><br/>
                <Link to='/signin'><button className="mb2"><h3>Sign in</h3></button></Link>
            </div>
        </div>
        </div>
        </>
    );
}
export default Screen2