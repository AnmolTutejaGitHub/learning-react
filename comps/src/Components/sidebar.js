import Link from './Link';

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordian', path: '/accordian' },
        { label: 'Buttons', path: '/buttons' }

    ]

    const renderLinks = links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col ">
            {renderLinks}
        </div>
    );
}
export default Sidebar;