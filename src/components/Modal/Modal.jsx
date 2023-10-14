import React from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

export class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeByEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeByEsc);
    }

    closeByEsc = e => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    }

    render() {
        const { closeModal, modalImage, tags } = this.props;

        return (
            <StyledOverlay onClick={closeModal}>
                <StyledModal>
                    <img src={modalImage} alt={tags} />
                </StyledModal>
            </StyledOverlay>
        );
    }
}
