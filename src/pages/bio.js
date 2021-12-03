import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

class BioPage extends React.Component {
  render() {
    const metaDesc = `Digital media consultant, specializing in video and web design/development`

    return (
      <Layout>
        <main role="main">
          <Helmet title={`Bio`}>
            <meta name="description" content={metaDesc} />
            <meta property="og:description" content={metaDesc} />
            <meta name="twitter:description" content={metaDesc} />
            <meta property="og:url" content="https://rdela.com/bio/" />
          </Helmet>
          <h1>
            Bio{` `}
            <span role="img" aria-label="link symbol page facing up">
              &#x1f4dd; {/* 📝 */}
            </span>
          </h1>

          <section className="bio">
            <article>
              <p>
                Ricky de Laveaga was born an artist, started making movies in
                high school, and never looked back. He majored in film at UT
                Austin, concentrating on documentary editing and ethnographic
                film. Between shooting and editing commercials, television, and
                feature films, he collaborated with ad agencies producing and
                documenting audiovisual experiences and installations. For the
                past decade, he has been working as a digital media consultant,
                specializing in video and web design/development, as he
                continues to pursue cinematic projects, lately focusing on
                animated shorts under the banner of his up-and-coming
                studio,&nbsp;
                <a href="https://famebot.com">Famebot</a>.
              </p>
            </article>
          </section>
        </main>
      </Layout>
    )
  }
}

export default BioPage
