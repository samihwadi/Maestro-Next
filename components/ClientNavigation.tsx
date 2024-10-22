"use client"; 
import useResize from "@/app/useResize"; 
import Navbar from "./NavBar";
import NavMobile from "./NavMobile";

const ClientNavigation = () => {
  const isMobile = useResize(425); 

  return (
    <div className="navigation">
      {isMobile ? <NavMobile /> : <Navbar />}
    </div>
  );
};

export default ClientNavigation;
