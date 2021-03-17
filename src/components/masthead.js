/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

export default ({ children, backgroundColor, color }) => (
  <div
    sx={{
      backgroundColor: `${backgroundColor}`,
      color: `${color}`,
      py: 4,
      h1: { mb: 3 },
      h2: { mb: 2 },
    }}
  >
    <Container sx={{ px: 3 }}>{children}</Container>
  </div>
);
