import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 

    interface IProps {
        paragraphs: {
            key: string;
            title: string;
            content: string;
        }[];
    }

    const Collapsible: React.FC<IProps> = ({paragraphs}) => {
        const [isOpen, setIsOpen] = useState<{[key: string]: boolean}>({});


        const handleFilterOpening = (key: string) => {
            setIsOpen((prev) => ({...prev, [key]: !prev[key]}))
        };



        return(
            <div>
                {paragraphs.map(({key, title, content}) => (
                        <div className="md:mb-5 mb-3 md:mt-5 p-2 border-2 border-light-grey rounded-lg border-" key={key}>
                            <button 
                            className="flex items-center focus:outline-none" 
                            type="button" 
                            onClick={() => handleFilterOpening(key)}>
                                <FontAwesomeIcon icon={isOpen[key] ? faChevronDown : faChevronRight}
                                className="text-teal-500 transform transition-transform duration-500 ease-in-out mr-2" />
                                <h2 className="text-lg text-teal-500 font-semibold">{title}</h2> 
                            </button>
                            <div className={`${isOpen[key] ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-500 ease-in-out`}>
                                <div className="py-3">
                                    <p className="text-gray-800">
                                        {content}
                                    </p> 
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        );
    };

   export default Collapsible;