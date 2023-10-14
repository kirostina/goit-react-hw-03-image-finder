import { StyledButton } from "./Button.styled"
export const Button = ({ onLoadMore }) => {
    return (
        <StyledButton type='button' onClick={onLoadMore}>
            Load More...
        </StyledButton>
    )
}