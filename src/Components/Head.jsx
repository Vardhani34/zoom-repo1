import './Head.css';
import Login from './log';


function Header(){

    return(
<>
<div className="ab">
    <h1>Blog - Explore World</h1>

    <ul className='abc'>
        <li><a href="./log.jsx">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
    </ul>

    <ul className='abd'>
        <li><a href="">log in</a></li>
        <li><a href="">sign in</a></li>
    </ul>
    
</div>
</>
    )
}
export default  Header;

