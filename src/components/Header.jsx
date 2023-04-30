import * as React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Container } from '@mui/material';
import { selectIsAuth } from '../redux/slices/authSlice';

export default function Header() {
  const storedUsername = window.localStorage.getItem('username');
  const username = useSelector((state) => state.auth.data?.username) || storedUsername;
  console.log(username);

  const isAuth = useSelector(selectIsAuth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: 'white', height: '80px', paddingTop: '10px' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ ml: 10, mr: 10 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontWeight={700}
              color={'black'}
              fontSize={32}
              sx={{ display: { xs: 'none', sm: 'block' } }}>
              GoalMate
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon sx={{ color: 'black' }} />
                </Badge>
              </IconButton>
              <IconButton size="large" edge="end" color="black">
                {isAuth ? (
                  <Stack direction="row" spacing={1}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                  </Stack>
                ) : (
                  <AccountCircle />
                )}

                <Typography sx={{ ml: '10px', fontWeight: 600, color: '#000' }}>
                  {username}
                </Typography>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
