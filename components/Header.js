import Link from "next/link";

const Header = () => {
    return ( 
        <nav>
            <div>
                <Link href='/Home'>Home</Link>
                <Link href='/Portfolio'>Portfolio</Link>
                <Link href='Resume'>Resume</Link>
            </div>
        
        </nav>
     );
}
 
export default Header;