import logo from "../../assets/arrosage-logo-blanc-4.png"

export default function Footer() {
    return (
        <footer className=" bg-black py-10">
            <div className="mx-auto flex flex-wrap items-center justify-around text-white">
                <div className="table ">
                    <h3 className="font-bold text-lg underline">Navigation</h3>
                    <ul className="">
                        <li className="hover:font-bold transition-all duration-150 ease-in-out"><a href="/">Accueil</a></li>
                        <li className="hover:font-bold transition-all duration-150 ease-in-out"><a href="#">Nos Services</a></li>
                        <li className="hover:font-bold transition-all duration-150 ease-in-out"><a href="/contact">Nous Contacter</a></li>
                        <li className="hover:font-bold transition-all duration-150 ease-in-out"><a href="#">Mentions légales</a></li>
                        <li className="hover:font-bold transition-all duration-150 ease-in-out"><a href="#">Confidentialité</a></li>
                        <li className="hover:font-bold transition-all duration-150 ease-in-out"><a href="#">Plan du site</a></li>
                    </ul>
                </div>
                <div className="">
                    <a href="#"><img src={logo} alt="Logo arrosage2.0" /></a>
                </div>
                <div className="table ">
                    <h3 className="font-bold text-lg underline ">Nous Trouver</h3>
                    <p>Adresse...</p>
                    <p>numero de tel</p>
                </div>
            </div>
        </footer>
    )
}