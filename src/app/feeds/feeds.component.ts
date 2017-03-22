import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PostsQuery } from '../../graphql/Feeds';
import { Posts, Post } from '../../graphql/schema';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
})
export class FeedsComponent implements OnInit {
  public filterControl = new FormControl();
  public filter = new BehaviorSubject<string>('');


  public feeds: ApolloQueryObservable<Posts>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.feeds = this.apollo.watchQuery<Posts>({
      query: PostsQuery,
      variables: {
        filter: this.filter,
      }
    })
    .map(result => result.data.allPosts) as any;

    this.filterControl.valueChanges.debounceTime(300)
    .subscribe(filter => {
      this.filter.next(filter);
    });
  }

}
