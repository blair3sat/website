import React from 'react';
import { NextPageContext } from 'next';
import { blogPosts } from '../../utils/blogPosts';
import { makeRssXml } from '../../data/makeRssXml';

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext) {
    if (!res) {
      return;
    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(
      makeRssXml({
        articleType: 'blog',
        title: 'Blair3sat Blog',
        description: 'Recent articles from the Blair3sat Blog',
        frontMatters: blogPosts,
      })
    );
    res.end();
  }
}
