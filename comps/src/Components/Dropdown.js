import { useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        //close dropdown
        setIsOpen(false);

        //what option user click on
        //console.log(option);
        onChange(option);
    }

    const renderOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    let content = "Select...";
    if (value) content = value.label;

    return (
        <div className='w-48 relative'>
            <Panel
                className="justify-between items-center cursor-pointer " onClick={handleClick}>{content}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full ">{renderOptions}
            </Panel>}
        </div>
    );
}
export default Dropdown;