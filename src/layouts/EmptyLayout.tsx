import { FC } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Todos', path: '/todos' },
];

const EmptyLayout: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
              {pages.map((page) => (
                <Button
                  key={page.path}
                  onClick={() => {
                    navigate(page.path);
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default EmptyLayout;
