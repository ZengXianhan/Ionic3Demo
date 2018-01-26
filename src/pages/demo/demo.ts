import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Platform, ActionSheetController } from 'ionic-angular'; //Action Sheet
import { ToastController } from 'ionic-angular'; //Toast
import { AlertController } from 'ionic-angular'; //Alert Box

@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})
export class DemoPage {

  constructor
    (public navCtrl: NavController,
    public actionsheetCtrl: ActionSheetController,
    public platform: Platform,
    public toastController: ToastController,
    public alertController: AlertController
    ) { }


  openMenu() {   //Open ActionSheet From Below
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Operations',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            //Show Toast
            let toastDelete = this.toastController.create({
              message: 'Delete clicked',
              duration: 2000
            });
            toastDelete.present();
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            //Show Toast
            let toastShare = this.toastController.create({
              message: 'Share clicked',
              duration: 2000
            });
            toastShare.present();
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            //Show Toast
            let toastPlay = this.toastController.create({
              message: 'Play clicked',
              duration: 2000
            });
            toastPlay.present();
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            //Show Toast
            let toastFavorite = this.toastController.create({
              message: 'Favorite clicked',
              duration: 2000
            });
            toastFavorite.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            //console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openAlertBox() {
    let alert = this.alertController.create({
      title: 'My Alert!',
      subTitle: 'This is a demo alert box!',
      buttons: ['OK']
    });
    alert.present();
  }

  openPromptBox() {
    let prompt = this.alertController.create({
      title: 'Prompt Box',
      message: "Enter any content you want:",
      inputs: [
        {
          name: 'content',
          placeholder: 'Content'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            //console.log('Saved clicked');
            let toastSaveInput = this.toastController.create({
              message: 'Your information is ' + data.content,
              duration: 2000
            });
            toastSaveInput.present();
          }
        }
      ]
    });
    prompt.present();
  }

  openConfirmBox() {
    let confirm = this.alertController.create({
      title: 'Is this demo good?',
      message: 'Do you think this demo is good?',
      buttons: [
        {
          text: 'NO',
          handler: () => {
            //console.log('Disagree clicked');
            let toastNo = this.toastController.create({
                message: "Sorry to bother you!",
                duration: 4000,
                showCloseButton: true,
                closeButtonText: "够了"
            });
            toastNo.present();
          }
        },
        {
          text: 'Agree',
          handler: () => {
            let toastYes = this.toastController.create({
              message: "Thank you very much!",
              duration: 4000,
              showCloseButton: true,
              closeButtonText: "不客气"
          });
          toastYes.present();
          }
        }
      ]
    });
    confirm.present();
  }

  openRadioBox() {
    let alert = this.alertController.create();
    alert.setTitle('Which animal do you like?');

    alert.addInput({
      type: 'radio',
      name:　'1',
      label: 'Dog',
      value: 'Dog',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      name:　'2',
      label: 'Cat',
      value: 'Cat',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      name:　'3',
      label: 'Rabbit',
      value: 'Rabbit',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        let toastRadioResult = this.toastController.create({
          message: '你最喜欢的动物是： ' + data,
          duration:　1500
        });
        toastRadioResult.present();
      }
    });
    alert.present();
  }

  openCheckbox() {
    let alert = this.alertController.create();
    alert.setTitle('Which contries have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'China',
      value: 'China',
      checked: false
    });

    alert.addInput({
      type: 'checkbox',
      label: 'America',
      value: 'America'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Japan',
      value: 'Japan'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'South Korea',
      value: 'South Korea'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        //console.log('Checkbox data:', data);
        let toastCheckBoxResult = this.toastController.create({
          message: '你去过'+ data,
          duration: 3000,
          showCloseButton: true,
          closeButtonText: '是的'
        });
        toastCheckBoxResult.present();
      }
    });
    alert.present();
  }
}