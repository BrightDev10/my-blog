import Link from 'next/link'
const Header = () => {
    return (  
        <>
            <header>
                <Link legacyBehavior href="/">
                    <a>Share_iT</a>
                </Link>
            </header>
            <ul>
                <li>
                    <Link legacyBehavior href="/">
                        <a>Design</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/">
                        <a>Technology</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/">
                        <a>Environment</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
 
export default Header;