import PropTypes from 'prop-types';
import css from './friendListItem.module.css';
import { styled } from 'styled-components';

const StatusColor = styled('span')(({ isOnline }) => {
  return {
    backgroundColor: isOnline ? '#55ac57' : '#ff5153',
    marginLeft: '15px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  };
});

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <StatusColor isOnline={isOnline} />
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
