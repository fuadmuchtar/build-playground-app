export default function Navbar() {
  return (
    <nav style={{backgroundColor: 'red'}}>
      <ul className="flex space-x-4 text-white ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
      </ul>
    </nav>
  );
}