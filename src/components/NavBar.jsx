import { useNavigate } from "react-router-dom";

import homeIcon from './../assets/home-icon.png'

const NavBar = () => {
  const navigate = useNavigate();
  
  const handleShowHomePage = () => {
    navigate('/');
  };

  const handleShowProducts = () => {
    navigate('/products');
  };

  return (
    <>
        <div id="pageHeader" className="row header centerV no-marginL flex-nowrap">
            <nav id="logoContainer" className="col-auto transparent centerV no-padL navbar-expand-lg navbar-light bg-light">
                <a id="headerLogo" onClick={handleShowHomePage} className="col-9"><img id='navLogo' className="text-center no-pad" src={homeIcon} /></a>
            </nav>

            <div id="navBtnContainer" className="center col-auto d-flex align-items-center">
                <a id="btn" onClick={handleShowHomePage} name="Home" className="btn btn-primary">Home</a>
                <a id="btn" onClick={handleShowProducts} name="Products" className="btn btn-primary">Products</a>
            </div>
        </div>
    </>
  );
};

export default NavBar;