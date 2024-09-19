function Accordion({ items }) {
    const renderItems = items.map((item) => {
        <div key={item.id}>
            <div>{item.label}</div>
            <div>{item.content}</div>
        </div>
    });
    return <div>{renderItems}</div>
}

export default Accordion;