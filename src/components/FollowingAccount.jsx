import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFollowing, setFollowingsData } from '../redux/slices/followingSlice';
export default function FollowingAccount({ username, id }) {
  console.log(id);
  const dispatch = useDispatch();
  const isFollowing = useSelector(selectIsFollowing);
  console.log(isFollowing);

  const onFollow = async () => {
    try {
      if (isFollowing) {
        await axios.post(`http://localhost:9088/api/v1/unfollow?userToId=${id}`);
        dispatch(setIsFollowing(false));
      } else {
        const { data } = await axios.post(`http://localhost:9088/api/v1/follow?userToId=${id}`);
        dispatch(setFollowingsData(data));
        localStorage.setItem('followings', JSON.stringify(data));
      }
    } catch (error) {
      console.warn(error);
      alert('Ошибка при подписке');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pl: '16px', pb: '10px' }}>
      <Stack direction="row" spacing={1}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
          sx={{ width: '35px', height: '35px' }}
        />
      </Stack>
      <Box sx={{ pl: '6px' }}>
        <Typography sx={{ fontWeight: 700 }}>{username}</Typography>
        <Typography variant="body2" color="text.secondary">
          Рекомендации для вас
        </Typography>
      </Box>
      <Typography sx={{ pl: 9, fontWeight: 700, cursor: 'pointer' }} onClick={onFollow}>
        {isFollowing ? 'Отписаться' : 'Подписаться'}
      </Typography>
    </Box>
  );
}
