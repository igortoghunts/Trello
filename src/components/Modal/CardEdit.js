import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top         : '50%',
        left        : '50%',
        right       : 'auto',
        bottom      : 'auto',
        width       : '768px',
        marginRight : '-50%',
        transform   : 'translate(-50%, -50%)',
        position    : 'fixed',
        backgroundColor: 'rgba(0,0,0,.64)',
        justifyContent: 'center',
        overflowY: 'auto',
        zIndex: '20'
    }
};

class CardEdit extends React.Component {

    render() {
        return (
            <Modal
                isOpen="true"
                onRequestClose={this.props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="new-comment js-new-comment mod-card-back">
                    <form>
                        <input />
                    </form>
                </div>
            </Modal>
        );
    }
}

export default CardEdit;