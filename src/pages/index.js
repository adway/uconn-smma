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
        Would you like to learn cool methods to collect and analyze the content shared on social media platforms to understand people’s opinions, thoughts, and sentiment about contemporary social, political, business or other issues? Would you like to potentially publish in a IEEE Conference, to boost your graduate school application or your job search? This course might just be right for you! 
 
        This course is structured as a seminar/project-based course where students will read, summarize and present papers, and participate in the classroom discussion based on state-of-the-art research in social media mining. Each student team will conduct a significant research project that analyzes real-life, user-generated data sets capturing major events during the past year including vaccine rollout, cancellation of mask mandates, Asian American hate, etc.  These projects may lead to conference/journal publications, with an additional investment of time and effort. Publications resulting from the past two offerings are listed below.

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
