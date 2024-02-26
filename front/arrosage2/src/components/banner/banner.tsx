import logo from "../../assets/logo-arrosage-1.png"

function Banner() {
return (
    <div className="flex flex-row justify-between mt-5 mb-10 mx-5">
        <div className="flex ">
            <a href="#">
                <img className="object-scale-down h-20 w-60" src={logo} alt="logo arrosage2.0"></img>
            </a>
        </div>
        <div>
            <ul className="flex flex-row ">
                <li className="m-2"><a href="">Connexion</a></li>
                <li className="m-2 hidden"><a href="">Déconnexion</a></li>
                <li className="m-2"><a href="">Panier</a></li>
            </ul>
        </div>
    </div>
);    
}

export default Banner;