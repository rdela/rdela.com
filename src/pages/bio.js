import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

class BioPage extends React.Component {
  render() {
    return (
      <Layout>
        <main role="main">
          <Helmet title={`Bio`}>
            <meta name="description" content="Digital media consultant, specializing in video and web design/development" />
          </Helmet>
          <h1>
            Bio{' '}
            <span role="img" aria-label="link symbol page facing up">
              📝
            </span>
          </h1>

          <section className="bio">
            <article>
              <p>I started out drawing and painting in grade school, and by{' '}
              high school I had expanded into photography and video. I{' '}
              majored in film at UT Austin, concentrating on documentary{' '}
              editing and ethnographic film. Between shooting and editing{' '}
              commercials, TV, and feature films, I worked with ad agencies{' '}
              producing and documenting audiovisual experiences and{' '}
              installations. For the past decade I have been working as a{' '}
              digital media consultant, specializing in video and web{' '}
              design/development. I continue to pursue cinematic projects,{' '}
              lately focusing on animated shorts under the banner of my{' '}
              up-and-coming{' '}
              studio,&nbsp;<a href="https://famebot.com">Famebot</a>.</p>
            </article>
          </section>
        </main>
      </Layout>
    )
  }
}

export default BioPage
