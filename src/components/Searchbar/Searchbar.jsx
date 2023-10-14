import React, { Component } from 'react';
import { StyleHeader, StyledForm } from './Searchbar.styled';
export class Searchbar extends Component { 
    state = {
        query: '',
        page:1,
    }

    getPicture = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;
    onSubmit(query);
}


    handleSearchKey = e => {
        if (e.keyCode === 'ENTER') {
            this.handleSubmit();
        }
    }
    render() {
        const { query} = this.props;
        return (
            <StyleHeader>
                <StyledForm onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>
                    <input
                        onChange={this.getPicture} onKeyDown={this.handleSearchKey} value={query}
                        type="text" autoComplete='off' autoFocus placeholder='Search images and photos' />
                </StyledForm>
            </StyleHeader>
        )
    }
}