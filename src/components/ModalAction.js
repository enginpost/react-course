function ModalAction(props) {
    return (
        <div className="modal-wrapper">
            <div className="modal-action-form">
                <div>You are trying to delete "{props.title}"</div>
                <div>Are you sure?</div>
                <div className="modal-actions">
                    <button className="btn btn--alt"
                        type="button">Cancel</button>
                    <button className="btn">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default ModalAction;