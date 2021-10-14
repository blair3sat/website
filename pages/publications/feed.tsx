import React from 'react';
import { NextPageContext } from 'next';
import { publicationPosts } from '../../utils/publicationPosts';
import { makeRssXml } from '../../data/makeRssXml';

export default class Rss extends React.Component {
  static async getInitialProps({ res }: NextPageContext) {
    if (!res) {
      return;
    }

    res.setHeader('Content-Type', 'text/xml');
    res.write(
      makeRssXml({
        articleType: 'publication',
        title: 'blair3sat Publications',
        description: "View Our Latest Articles and Presentations",
        frontMatters: publicationPosts,
      })
    );
    res.end();
  }
}
