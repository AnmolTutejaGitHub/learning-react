import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        if (expandedIndex === index) setExpandedIndex(-1);
        else setExpandedIndex(index);
    }


    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const content = isExpanded && <div className='border-b p-5'>{item.content}</div>
        // if isExpanded will be false it will be assigned undefined and
        // react does not print booleans , nulls , undefiend 

        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

        return (
            <div key={item.id}>
                <div className="flex  justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {content}
            </div>);
    });
    return <div className="border-x border-t rounded">{renderItems}</div>
}

export default Accordion;