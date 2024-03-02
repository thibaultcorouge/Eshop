import backgroundImage from "../assets/arrosage-banniere-services-3.jpg"
import Collapse from "../components/collapse/collapse";
function About() {

    const paragraphs = [
        {
            key : "section1",
            title:"Bien étudié",
            content:"A partir de vues aériennes, de photos, d’un relevé sur le terrain, nous étudions la faisabilité de votre projet en fonction de vos besoins et de vos souhaits."
        },   
        {
            key : "section2",
            title:"Bien installé",
            content:"L’utilisation du matériel et des techniques les mieux adaptés, permettent d’optimiser votre installation. La diversité des solutions proposées pour l’arrosage automatique et l’irrigation agricole permet de répondre aux différents besoins."
        },
        {
            key : "section3",
            title:"Bien arrosé",
            content:"Ainsi, vous obtiendrez la solution la plus rationnelle pour apporter à vos végétaux le juste besoin en eau."
        },
    ]

    return(
        <section>
            <div className="object-cover bg-cover bg-center h-auto w-auto p-20 rounded-b-md" style={{ backgroundImage : `url(${backgroundImage})`}} >
                <h1 className="font-bold p-10 text-white text-3xl text-center md:text-left" >Nos Services</h1>
            </div>
            <div className="m-20">
                <div className="m-10">
                    <h2 className="m-50 mb-5 text-center text-teal-500 text-xl font-bold md:text-left">ARROSAGE 2.0 vous propose des solutions personnalisées et évolutives</h2>

                    <p className="text-center text-gray-800 mb-3 md:text-left md:mb-2">Basée à proximité de Bastia, la société ARROSAGE 2.0 propose ses services dans le secteur de l’arrosage automatique, de l’irrigation agricole et du pompage.</p>
                    <p className="text-center text-gray-800 mb-3 md:text-left md:mb-2">Depuis l’étude jusqu’á la réalisation,  nous intervenons également pour l’entretien et la maintenance de votre installation.</p>
                    <p className=" text-center text-gray-800 mb-3 md:text-left md:mb-3">La société ARROSAGE 2.0 s’adresse à la fois aux particuliers, aux entreprises et aux collectivités.</p>
                </div>
                <div className="m-10">
                    <Collapse paragraphs={paragraphs}/>
                </div>
            </div>
        </section>
        
    )
};

export default About;