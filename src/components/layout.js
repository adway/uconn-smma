/** @jsx jsx */
import { jsx, Container, Box, } from 'theme-ui';
import Meta from './meta';

export default (props) => {
  return (
    <div
      sx={{
        variant: 'styles.root',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Meta />
      <main
        sx={{
          width: '100%',
          mx: 'auto',
          flex: '1 1 auto',
          mt: 0,
          pt: 0,
        }}
      >
        <div>{props.children}</div>
      </main>
      <Box as='footer' sx={{ textAlign: 'center', px: 3, py: 2 }}>
        <Container
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text',
            a: { color: 'text' },
            fontSize: 0,
          }}
        >
          Copyright {new Date().getFullYear()} &copy; Swapna S. Gokhale 
        </Container>
      </Box>
    </div>
  );
};
