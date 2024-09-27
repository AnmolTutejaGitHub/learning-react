import Link from './Link';

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordian', path: '/accordian' },
        { label: 'Buttons', path: '/buttons' }

    ]

    const renderLinks = links.map((link) => {
        return <Link key={link.label} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 birder-blue-500 pl-2">{link.label}</Link>
    })
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderLinks}
        </div>
    );
}
export default Sidebar;