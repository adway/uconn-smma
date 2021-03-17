import React from 'react';
import { Helmet } from 'react-helmet';

export default ({
  title = "CSE 5095: Social Media Mining and Analysis",
  name = "CSE 5095: Social Media Mining and Analysis",
  description = 'Prof. Gokhale\'s class on social media mining and analysis',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta property='og:title' content={name} />
    <meta name='twitter:title' content={name} />
    <meta property='og:type' content='website' />
    <meta property='og:site_name' content={name} />
    <meta name='description' content={description} />
    <meta property='og:description' content={description} />
    <meta name='twitter:description' content={description} />
    <link
      href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      rel='stylesheet'
    />
  </Helmet>
);
