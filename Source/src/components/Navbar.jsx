import {Link} from "react-router-dom";
const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header

    <div>

    {links.map((e)=>(
      <div style={{display:'inline-block',margin:"50px",marginTop:"10px"}}>
      <Link to={e.link}>
        <h2>{e.title}</h2>
      </Link>
      </div>
    ))}
    </div>
  );
};
