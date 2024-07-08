import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <footer>
            <p>Copyright Nikhil Patil &copy; July 2024</p>
            <Link to='/about'>About</Link>
        </footer>
     );
}
 
export default Footer;