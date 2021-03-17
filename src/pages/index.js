/** @jsx jsx */
import { jsx, Container, Heading, Text, Button } from 'theme-ui';
import Masthead from '../components/masthead';
import { ChevronsRight } from 'react-feather';

export default () => {
  return (
    <div>
      <Masthead backgroundColor='uconn' color='white'>
        <Heading as="h1" sx={{  mb: 3 }}>
          CSE 5095: Social Media Mining and Analysis
        </Heading>
        <Text sx={{ fontSize: 2 }}>
          Prof. Swapna S. Gokhale
        </Text>
      </Masthead>
      <Container sx={{ px: 3, py: 4 }}>
        <Heading as='h2'>
          Class Description
        </Heading>
        <Text>
          {/* Description of course goes here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim erat, euismod at ullamcorper ut, finibus nec orci. Integer tempus ut ex vitae lobortis. Proin sagittis vitae orci a consectetur. Morbi posuere consectetur nibh ut vehicula. Aliquam suscipit rhoncus diam sit amet mattis. Nulla viverra at sem et sollicitudin. Suspendisse orci sapien, malesuada et ligula id, ultrices pulvinar neque. In volutpat, justo non egestas rutrum, libero ex lobortis felis, ac tincidunt enim orci id sem. Mauris sagittis nisi non ex sollicitudin, eget faucibus enim hendrerit. Mauris tempor mauris vel lectus gravida, quis porta tortor porta. Nulla consequat, sem et dignissim cursus, enim dui luctus tortor, in egestas justo lectus ut orci. Proin at dolor luctus, blandit velit non, volutpat nisl. Mauris auctor urna sem, sed imperdiet elit posuere nec. Fusce varius scelerisque augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu.
        </Text>
      </Container>
      <Masthead backgroundColor='rgb(238,236,224)' color='text'>
        {/* Publications go here */}
        <Heading>
          Publications
        </Heading>
        <Heading as="h3">
          Fall 2020:
        </Heading>
        <ol>
          <li>A. Student, B. Student, C. Student, and S.S. Gokhale, "Doing cool things with twitter," <i>Proc. of Very Prestigious Conference,</i> 2020.</li>
          <li>A. Student, B. Student, C. Student, and S.S. Gokhale, "Doing cool things with twitter," <i>Proc. of Very Prestigious Conference,</i> 2020.</li>
          <li>A. Student, B. Student, C. Student, and S.S. Gokhale, "Doing cool things with twitter," <i>Proc. of Very Prestigious Conference,</i> 2020.</li>
        </ol>
        <Heading as="h3">
          Fall 2019:
        </Heading>
        <ol>
          <li>A. Student, B. Student, C. Student, and S.S. Gokhale, "Doing cool things with twitter," <i>Proc. of Very Prestigious Conference,</i> 2020.</li>
          <li>A. Student, B. Student, C. Student, and S.S. Gokhale, "Doing cool things with twitter," <i>Proc. of Very Prestigious Conference,</i> 2020.</li>
          <li>A. Student, B. Student, C. Student, and S.S. Gokhale, "Doing cool things with twitter," <i>Proc. of Very Prestigious Conference,</i> 2020.</li>
        </ol>
      </Masthead>
      <Container sx={{ px: 3, py: 4 }}>
        {/* Testimonials go here */}
        <Heading as='h2'>
          Student Testimonials
        </Heading>
        
        <ol>
          <li>"This class was amazing!!!" - <i>A. Student</i></li>
          <li>"Gained much real-world experience" - <i>B. Student</i></li>
          <li>"Prof. Gokhale is an excellent instructor!!!" - <i>C. Student</i></li>
        </ol>
      
      </Container>
    </div>
  );
};
