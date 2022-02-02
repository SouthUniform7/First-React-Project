import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd}) => {

    const location = useLocation()

  return <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
      <Button 
      color={showAdd ? '#125254' : '#a6dab4'}
      textColor={showAdd ? '#a6dab4' : '#125254'}
      text={showAdd ? 'This is where the fun begins' : 'Hello There'} 
      onClick={onAdd} />
      )}
      
  </header>;
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes= {
    title: PropTypes.string.isRequired,

}
//CSS in JS
/* const headingStyle = {
    color: '#a6dab4', 
    backgroundColor: '#125254'
} */

export default Header;
