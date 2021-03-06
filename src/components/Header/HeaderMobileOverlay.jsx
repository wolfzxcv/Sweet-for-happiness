import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderMobileOverlay = ({ className, menuClose }) => {
  return (
    <header className={className}>
      <div
        className='whole-page'
        onClick={menuClose}
        onKeyDown={menuClose}
        role='button'
        tabIndex='0'
      >
        <div className='link'>
          <Link to='/Sweet-for-happiness/'>
            <div>HOME</div>
          </Link>

          <Link to='/Sweet-for-happiness/product'>
            <div>PRODUCT</div>
          </Link>

          <Link to='/Sweet-for-happiness/login'>
            <div>LOGIN</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

HeaderMobileOverlay.propTypes = {
  className: PropTypes.string.isRequired,
  menuClose: PropTypes.func.isRequired,
};

const StyledHeaderMobileOverlay = styled(HeaderMobileOverlay)`
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 200;
  background-color: ${props => props.theme.colors.white};

  .whole-page {
    width: 100vw;
    height: 100vh;
  }
  .link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 400px;
      height: 100px;
      &:hover {
        background-color: ${props => props.theme.colors.greenWhite};
      }
    }
  }
`;

StyledHeaderMobileOverlay.displayName = 'HeaderMobileOverlay';

export default StyledHeaderMobileOverlay;
