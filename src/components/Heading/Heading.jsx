import { HeadingStyled } from './Heading.styled'
import PropTypes from 'prop-types';

export const Heading = ({ text }) => {
    return <HeadingStyled>{ text }</HeadingStyled>
}
Heading.propTypes = {
    text: PropTypes.string.isRequired,
}