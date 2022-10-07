import { Title } from './Title.styled'
import PropTypes from 'prop-types';

export const TitlePage = ({ text }) => {
    return <Title>{text}</Title>
}

TitlePage.propTypes = {
    text: PropTypes.string.isRequired,
}