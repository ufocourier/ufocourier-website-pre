import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React from 'react';

export default function Survey(): JSX.Element {
  return (
    <Layout>
      <Head>
        <meta property="og:url" content="https://ufocourier.com/survey" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UfoCourier | Опитування" />
        <meta
          property="og:description"
          content="UfoCourier - це команда, яка хоче впровадити платформу для бронювання міжнародних перевезень - для посилок і пасажирів.

За допомогою нашої платформи ми хочемо спростити процес пошуку та бронювання як для вантажовідправників, так і для експедиторів.

Перш за все, ми хотіли б запитати, які аспекти роботи перевізника ми могли б полегшити за допомогою нашої платформи."
        />
        <meta property="og:image" content="https://ufocourier.com/img/ufocourier_survey_ua.jpg" />
        <meta property="lang" content="uk" />
      </Head>
      <main>
        <object
          type="text/html"
          data="https://us12.list-manage.com/survey?u=68dd166f70b27de4d248f4e38&id=f94172bb33&attribution=false"
          style={{ width: '100%', minHeight: 2400 }}
        ></object>
      </main>
    </Layout>
  );
}
