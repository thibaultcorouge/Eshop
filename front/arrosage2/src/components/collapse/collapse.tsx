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
                        <div className="m-5 " key={key}>
                            <button className="flex items-center " type="button" onClick={() => handleFilterOpening(key)}>
                                {isOpen[key] ? (<FontAwesomeIcon icon={faChevronDown} className="m-1"/>):(<FontAwesomeIcon icon={faChevronRight} className="m-1" />) }<h2 className="pl-2">{title}</h2> 
                            </button>
                            {isOpen[key] && <div className="m-2">{content}</div>}
                        </div>
                ))}
            </div>
        );
    };

   export default Collapsible;