import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../../../models/article';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {
  articles: IArticle[] = [
    {
      id: '0',
      created: '',
      updated: '',
      title: 'Article 1',
      content: 'This is a lot of words',
      date: new Date('August 22 2001'),
      slug: 'https://www.google.com'
    },
    {
      id: '1',
      created: '',
      updated: '',
      title: 'Article 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra risus in ligula ullamcorper, nec posuere justo fringilla. Ut lacinia non lectus eu iaculis. Quisque felis sem, cursus eu massa in, eleifend viverra turpis. Proin eleifend pulvinar auctor. Nullam vitae sollicitudin leo, nec sollicitudin turpis. Cras et posuere eros. In gravida neque metus. Aenean condimentum, felis a sollicitudin tincidunt, tortor massa elementum urna, quis ultricies lorem nulla id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra, orci eget bibendum fringilla, lectus arcu volutpat urna, sed vulputate tortor mi eu nulla. Nullam fringilla erat id blandit pretium.',
      date: new Date('August 22 2001'),
      slug: 'https://www.google.com'
    },
    {
      id: '2',
      created: '',
      updated: '',
      title: 'Article 3',
      content: 'This is a lot of words',
      date: new Date('August 22 2001'),
      slug: 'https://www.google.com'
    },
    {
      id: '3',
      created: '',
      updated: '',
      title: 'Article 4',
      content: 'This is a lot of words',
      date: new Date('August 22 2001'),
      slug: 'https://www.google.com'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
