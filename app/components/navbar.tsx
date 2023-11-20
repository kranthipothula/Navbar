import Link from "next/link";

export default function Navbar(){
 return (
   <div className="navbar">
    <Link href="/about" className="nav-link">About</Link>
    <Link href="/about/us" className="nav-link">About Us</Link>
    <Link href="/about/someone" className="nav-link">About Someone</Link>
    <Link href="/list" className="nav-link">posts</Link>
   </div>
 );
}