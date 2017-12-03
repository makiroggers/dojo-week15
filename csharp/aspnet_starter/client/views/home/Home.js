import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';

const title = 'Maki Roggers Portfolio';
const link = 'https://makiroggers.com';

class Home extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <h1 className="mdl-typography--title">Welcome to {title}!</h1>
        <p className="mdl-typography--body-1">
          For more information visit <a href={link}>{link}</a>
        </p>
        <h4 className="mdl-typography--title">Articles</h4>
        <ul>
          {this.props.articles.map((article, i) =>
            <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
          )}
        </ul>
      </Layout>
    );
  }
}

export default Home;
