export default function SideBar(props) {
    // eslint-disable-next-line react/prop-types
    const { handleToggleModal, data } = props;
    return (
        <div className="sidebar">
            <div className="bgOverlay" onClick={() => {
                handleToggleModal();
            }}></div>
            <div className="sidebarContents">
                <h2>{data.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data.date}</p>
                    <p>{data.explanation}</p>
                </div>
                <button onClick={() => {
                    handleToggleModal();
                }}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
}