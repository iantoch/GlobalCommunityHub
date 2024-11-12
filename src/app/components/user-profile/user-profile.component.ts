import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: `./user-profile.component.html`,
})
export class UserProfileComponent implements OnChanges {
  @Input() user: any;
  posts: any[] = [];

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && changes['user'].currentValue) {
      this.getUserPosts();
    }
  }

  getUserPosts() {
    if (this.user) {
      this.userService
        .getUserPosts(this.user.id)
        .subscribe((data) => (this.posts = data));
    }
  }
}
