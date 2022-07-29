import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://bejamas.io/cdn-cgi/image/width=890,height=890,quality=90,format=avif/static/307afb5ef6aa65c404519acfc44a0d4e/7aa18/Gatsby-plugins.png"
      />
    </Layout>
  )
}

export default AboutPage