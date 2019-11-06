import React from 'react';
import './app.css';

function Footer() {
  return (
    <footer>
      <p>
        Made with ❤️ by{' '}
        <a href="https://github.com/vinibpereira/" target="_blank">
          Vinícius Barenho Pereira
        </a>
      </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <h1>Happy Hacking</h1>
      <p>
        {`${new Date()}`}
        <br />
        This is a create react app with:
      </p>{' '}
      <br />
      <ol>
        <li> lslint hooks config</li>
        <li>.editorconfig</li>
        <li>easy gh-pages deploy</li>
      </ol>{' '}
      <br />
      <Footer />
    </>
  );
}

export default App;
