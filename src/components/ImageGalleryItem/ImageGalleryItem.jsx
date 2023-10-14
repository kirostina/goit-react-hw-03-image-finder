import React, { Component } from 'react';
import { StyledGalleryItem } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    toggleModal = e => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    };

    render() {
        const { isModalOpen } = this.state;
        const { webformatURL, largeImageURL, tags } = this.props;
        const { toggleModal } = this;

        return (
            <StyledGalleryItem>
                <img src={webformatURL} alt={tags} onClick={this.toggleModal} width="400" height="200" loading="lazy"/>
                {isModalOpen && (
                    <Modal modalImage={largeImageURL} tags={tags} closeModal={toggleModal} />
                )}
            </StyledGalleryItem>
        );
    }
}