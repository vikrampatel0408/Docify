import Img1 from "../assets/Google-Docs-logo.png" ;
import LogoutButton from "./LogoutButton";

export const Topbar = () => {
    return(
        <nav className="Topbar flex justify-between items-center p-4 bg-gray-200 shadow-md">
  <div className="logodiv flex items-center">
    <img src={Img1} alt="Logo" className="h-8 w-8 mr-2" />
    <span className="text-lg font-semibold">Docs</span>
  </div>
  <LogoutButton />
</nav>
    )
}