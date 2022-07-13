import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-confirm-submit',
  templateUrl: './confirm-submit.component.html',
  styleUrls: ['./confirm-submit.component.css']
})
export class ConfirmSubmitComponent implements OnInit {

  @Output() submitModal: EventEmitter<any> = new EventEmitter();

  userId: any;
  users: any;
  user: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        item.id = r.payload.doc.id
        this.user = item
      });
    })
  }

  closeSubmitModal() {
    this.submitModal.emit()
  }


}
