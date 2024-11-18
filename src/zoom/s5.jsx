import './s5.css';
import { Link } from 'react-router-dom';
function Screen5(){
    
    return(
        <>
        <header>
        <Link to='/'><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/arrow-1521462-1289083.png?f=webp&w=256" alt=""/></Link>
        <h3>Sign up</h3>
        <p>Verify your age</p>
        <div>
            <input type="number" placeholder="Birth year"/>
        </div>
        <p>Please confirm your birth year. This data will not be stored</p>
        <button>Continue</button>
        </header>
        </>
    );
}
export default Screen5;
