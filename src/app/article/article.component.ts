import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  // By using the @HostBinding decorator, we’re able to configure our host element from within the component.
  @HostBinding('attr.class') cssClass = '';
  @Input() article!: Article;

  constructor() {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  // ngOnInit(): void {
  // }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
