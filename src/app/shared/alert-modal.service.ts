import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {


  private showAlert(message: string, type: string, dismissTimeOut?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message

    if (dismissTimeOut) {
      setTimeout(() => bsModalRef.hide(), dismissTimeOut)
    }
  }

  constructor(
    private modalService: BsModalService
  ) { }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 3000)
  }

  /* MODAL DE CONFIRMAÇÃO GENÊRICO */
  showConfirm(title: string, msg: string, okText?: string, cancelText?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent)
    bsModalRef.content.title = title
    bsModalRef.content.msg = msg

    if (okText) {
      bsModalRef.content.okText = okText
    }

    if (cancelText) {
      bsModalRef.content.cancelText = cancelText
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult

  }

}
