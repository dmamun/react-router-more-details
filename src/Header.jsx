import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl">Amajhon</h1>
      </div>
      <nav>
        <ul className="flex gap-5">
        <li>
          <NavLink to="/">Home</NavLink>
          
        </li>
        <li>
          <NavLink to="/products">products</NavLink>
          
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
          
        </li>

        </ul>
       
       
      </nav>
      
    </div>
  );
};

export default Header;