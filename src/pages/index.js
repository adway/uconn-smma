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
        <p>
          Would you like to learn interesting methods to collect and analyze the content shared on social media platforms to understand people’s opinions, thoughts, and sentiment about contemporary social, political, business, or other issues? Would you like to potentially publish in an IEEE Conference to boost your graduate school application or your job search? This course might just be right for you! 
        </p>
        <p>
         This class is structured as a seminar/project-based course where students will read, summarize and present papers, and participate in the classroom discussion based on state-of-the-art research in social media mining. After learning core machine learning and natural language processing techniques, each student team will conduct a significant research project that analyzes real-life, user-generated data sets capturing major events during the past year including vaccine rollout, cancellation of mask mandates, Asian American hate, etc.  These projects may lead to conference/journal publications, with an additional investment of time and effort. Publications resulting from the past two offerings are listed below.
        </p>
      </Container>
      <Masthead backgroundColor='rgb(238,236,224)' color='text'>
        {/* Publications go here */}
        <Heading>
          Publications
        </Heading>
        <Heading as="h3">
          Non COVID-19 Topics:
        </Heading>
        <ol>
          <li> M. Voong, K. Gunda, Predicting the Political Polarity of Tweets Using Supervised Machine Learning, <i> Proc. of 2020 IEEE 44th Annual Computers, Software, and Applications Conference </i>, pp. 1707-1712, July 2020 </li>
          <li> A. Mondal, S. Gokhale, Mining Emotions on Plutchik's Wheel, <i> Proc. of 2020 Seventh International Conference on Social Networks Analysis, Management and Security </i>, December 2020. </li>
          <li> H. Khan, F. Yu, A. Sinha, S. Gokhale, <i> A Practical and Parsimonious Approach to Detecting Offensive Speech, Proc. of Intl. Conf. on Computing, Communications, and Intelligent Systems </i>, February 2021.</li>
          <li> A. Mondal, S. Gokhale, Multi-Label Classification of Parrott’s Emotions, <i> Proc. of Intl. Conf. on Software Engineering and Knowledge Engineering </i> (under review) </li>
          <li> J. Furuness, A. Mendonca, Identifying Myers-Briggs Personality Type by Analyzing Tweets, (in preparation) </li>
        </ol>
        <Heading as="h3">
          COVID-19 Topics:
        </Heading>
        <ol>
          <li> N. Paul, S. Gokhale, Analysis and Classification of Vaccine Dialogue in the Coronavirus Era, <i> Proc. of IEEE Big Data Workshop on Smart and Connected Health</i>, December 2020</li>
          <li> S. Gokhale, Monitoring the Perception of Covid-19 Vaccine using Topic Models, <i> Proc. of 13th IEEE International Symposium on Social Computing and Networking </i>, December 2020</li>
          <li> L. Cerbin, J. DeJesus, J. Warnken, Unmasking the Mask Debate on Social Media, <i> Proc. of 2020 IEEE 44th Annual Computers, Software, and Applications Conference </i> (under review).</li>
          <li> H. Nguyen, J. Moon, B. Pines, S. Gokhale, Detecting Offensive Content on Social Media During Anti-Lockdown Protests in Michigan, <i> Proc. of 2020 IEEE 44th Annual Computers, Software, and Applications Conference </i> (under review).</li>
          <li> J. Moon, H. Nguyen, B. Pines, S. Gokhale, Identifying Anti-Government Sentiment on Twitter During Michigan Protests, <i> Proc. of Intl. Conf. on Software Engineering and Knowledge Engineering </i> (under review). </li>
          <li> J. Moon, H. Nguyen, B. Pines, S. Gokhale, Sarcasm Detection in Politically Motivated Protests, (in preparation) </li> 
          <li> M. Fahim, S. Ilohm, S. Gokhale, Predicting the Polarity and Nature of Tweets: A Case Study on Proud Boys, (in preparation) </li>
          <li> A. Skawinski, J. Oviedo, S. Gokhale, Multi-Level Sentiment Analysis of Football Fans in the United Kingdom,” (in preparation) </li>
        </ol>
      </Masthead>
      <Container sx={{ px: 3, py: 4 }}>
        {/* Testimonials go here */}
        <Heading as='h2'>
          Student Testimonials
        </Heading>
        
        <ol>
          <li>"She allowed us to learn by doing the paper presentations and the projects rather than just lectures so we could get hands on experience"<i> Fall 2019 </i></li>
          <li>"I think this is really cool course with great opportunity to learn about data mining and scientific papers"<i> Fall 2020 (DL) </i></li>
          <li>"This course is a great for exercising skills in sentiment analysis, natural language processing, and machine learning. It was a lot of hard work, but I'm glad that I took this course."<i> Fall 2020 (DL) </i></li>
          <li>"Balancing the freedom of groups to approach the Machine Learning project how they wanted to while also providing enough structure/checkpoints to reach that made it much easier to approach and think about the problems in an efficient way."<i> Fall 2020 (DL) </i></li>
        </ol>
      
      </Container>
    </div>
  );
};
