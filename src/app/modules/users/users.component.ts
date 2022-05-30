import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx'; // Install npm i xlsx --save

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  fileName = 'ExcelSheet.xlsx';
  name: string;

  constructor(private profileService: ProfileService, private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    // Get single User Informations
    this.profileService.getAllUsers().subscribe((res: any) => {
      this.users = []
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        item.id = r.payload.doc.id
        this.users.push(item)
      });
    })
  }

  // Expoert Excel
  exportExcel(): void {
    // Pass table id
    let element = document.getElementById('users-table')
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)

    // Generate workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    // Save to file
    XLSX.writeFile(wb, this.fileName)
  }

  // Search users
  search() {
    if (this.name != "") {
      this.users = this.users.filter((res: any) => {
        return res.fullName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    } else if (this.name == "") {
      this.ngOnInit()
    }
  }

  // Sign User Out
  logOut() {
    this.firebaseService.signout()

    // Return to Home page
    this.router.navigate(['/'])
  }

}
