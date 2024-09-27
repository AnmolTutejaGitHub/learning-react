import { Fragment } from "react";

// function Echo({ children }) {
//     { children }
// }
function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            //return column.header();
            //return <Echo key={column.header()}></Echo> //solved key error // column.header returns a 'th' prob  is can't wrop in div so created this Echo //react already has a component for this Fragment
            return <Fragment key={column.label}>{column.header()}</Fragment>

        }
        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
        })
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;