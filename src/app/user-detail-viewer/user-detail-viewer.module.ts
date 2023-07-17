import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { IssuesViewerModule } from '../issues-viewer/issues-viewer.module';
import { FilterBarModule } from '../shared/filter-bar/filter-bar.module';
import { IssuesPrCardModule } from '../shared/issue-pr-card/issue-pr-card.module';
import { SharedModule } from '../shared/shared.module';
import { CommitListComponent } from './commit-list/commit-list.component';
import { DiffstatComponent } from './diffstat/diffstat.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileIconComponent } from './profile-icon/profile-icon.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { DateRangeDialogComponent } from './query-range/query-range.component';
import { UserDetailViewerRoutingModule } from './user-detail-viewer-routing.module';
import { UserDetailViewerComponent } from './user-detail-viewer.component';

@NgModule({
  imports: [
    UserDetailViewerRoutingModule,
    FilterBarModule,
    SharedModule,
    IssuesPrCardModule,
    IssuesViewerModule,
    MarkdownModule.forChild()
  ],
  declarations: [
    UserDetailViewerComponent,
    ProfileIconComponent,
    ProfileDetailsComponent,
    ProfileListComponent,
    DiffstatComponent,
    CommitListComponent,
    DateRangeDialogComponent
  ]
})
export class UserDetailViewerModule {}
