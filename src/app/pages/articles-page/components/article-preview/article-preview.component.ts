import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../../../models/article';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {
  article: IArticle =
    {
      id: '0',
      created: '',
      updated: '',
      title: 'Article 1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      date: new Date('August 22 2001'),
      slug: 'https://www.google.com'
    }

  constructor() {
  }

  ngOnInit(): void {

  }

}
