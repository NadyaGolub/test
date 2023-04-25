import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { UsersList } from '../../components/UsersList/UsersList';
import data from '../../services/data/user.json';
import { GalleryContainer, ButtonGoBack } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem('users')) ?? data
  );

  const location = useLocation();
  const navigate = useNavigate();

  const goBack = location.state?.from ?? '/';

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleGoBack = () => {
    navigate(goBack);
  };

  const handleButton = id => {
    setUsers(prevUsers =>
      prevUsers.map(user => {
        if (user.id === id) {
          return {
            ...user,
            isFollowing: user.isFollowing ? false : true,
            followers: user.isFollowing
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      })
    );
  };

  return (
    <GalleryContainer>
      <ButtonGoBack type="button" onClick={handleGoBack}>
        <AiOutlineArrowLeft size="1rem" />
      </ButtonGoBack>
      <UsersList users={users} onClick={handleButton} />
    </GalleryContainer>
  );
};

export default Tweets;
