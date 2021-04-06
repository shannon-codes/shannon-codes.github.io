import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';
import { DialogData } from '../projects';

@Component({
  selector: 'app-project-grid-item',
  templateUrl: './project-grid-item.component.html',
  styleUrls: ['./project-grid-item.component.scss']
})
export class ProjectGridItemComponent implements OnInit {
  @Input() projectMore: any;
  constructor(public dialog: MatDialog) { }

  openDialog(projectData: DialogData){
    this.dialog.open(DialogDetailComponent, {
      data: projectData
    });
 }

  ngOnInit(): void {
  }

}
