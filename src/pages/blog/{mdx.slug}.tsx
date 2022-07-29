import * as React from 'react';
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        date: string;
        title: string;
        hero_image_alt: string;
        hero_image_credit_link: string;
        hero_image_credit_text: string;
        hero_image: {
          childImageSharp: {
            gatsbyImageData: string;
          }
        };
      },
      body: string;
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image as any)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && <GatsbyImage alt={data.mdx.frontmatter.hero_image_alt} image={image} />}
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
  }
}`

export default BlogPost