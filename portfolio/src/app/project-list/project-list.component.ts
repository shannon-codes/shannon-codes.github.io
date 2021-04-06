import { Component, OnInit } from '@angular/core';
import { projects, projectsMore } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
projects = projects;
projectsMore = projectsMore;
  constructor() { }

  ngOnInit(): void {
  }

}
