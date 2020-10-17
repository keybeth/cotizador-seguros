import PropTypes from 'prop-types';

const Hideable  = ({hide, children}) => (hide) ? null : ( children );

Hideable.propTypes = {
    hide: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
 
export default Hideable ;