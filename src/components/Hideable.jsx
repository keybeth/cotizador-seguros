import PropTypes from 'prop-types';

const Hideable  = ({hide, children}) => {
    if(hide) {
        return null;
    }
    return ( children );
}

Hideable.propTypes = {
    hide: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
 
export default Hideable ;