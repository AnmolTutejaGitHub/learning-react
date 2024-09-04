//function ProfileCard(props) {
function ProfileCard({ title, handle, imageSrc }) { //destructing in argumemntx
    // const title = props.title;
    // const handle = props.handle;

    // const { title, handle } = props;
    console.log(title, handle);
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={imageSrc} />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="title is-6">{handle}</p>
                </div>
            </div>

        </div>
    );
}
export default ProfileCard;