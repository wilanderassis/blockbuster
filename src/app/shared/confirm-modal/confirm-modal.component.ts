import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string
  @Input() msg: string
  @Input() cancelTxt = 'Cancelar'
  @Input() okTxt = 'Sim'

  confirmResult: Subject<boolean>

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.confirmResult = new Subject()
  }

  onConfirm() {
    this.confirmResult.next(true)
    this.bsModalRef.hide()
  }

  onClose() {
    this.confirmResult.next(false)
    this.bsModalRef.hide()
  }


}
