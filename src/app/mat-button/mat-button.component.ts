import { Component, OnInit } from "@angular/core";
import { MatSnackBar, MatDialog } from "@angular/material";
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';

@Component({
  selector: "app-mat-button",
  templateUrl: "./mat-button.component.html",
  styleUrls: ["./mat-button.component.scss"],
})
export class MatButtonComponent implements OnInit {
  constructor(private snackBar: MatSnackBar,
              public dialog: MatDialog) {}

  ngOnInit() {}

  openSnackBra(message, action) {
    const snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log("snackbar dismissed");
    });

    snackBarRef.onAction().subscribe(() => {
      console.log("snackbar action triggered!");
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDemoComponent, {data: {name: 'Ayaz'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Result:', result);

    })
  }
}
