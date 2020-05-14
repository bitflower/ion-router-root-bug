import { Build, Component, State, h } from "@stencil/core";

import { toastController } from "@ionic/core";

@Component({
  tag: "page-support",
  styleUrl: "page-support.css",
})
export class PageSupport {
  @State() supportQuestion = {
    valid: false,
    value: null,
  };
  @State() submitted = false;

  async componentDidLoad() {
    if (Build.isBrowser) {
      const toast = await toastController.create({
        message: "This does not actually send a support request.",
        duration: 3000,
      });
      toast.present();
    }
  }

  private goToHome = () => {
    console.log("goToHome");
    const router: HTMLIonRouterElement = window.document.querySelector(
      "ion-router"
    );
    router.back();
    // router.push("signup");
  };

  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  ionViewCanLeave() {
    // If the support message is empty we should just navigate
    if (
      !this.supportQuestion.value ||
      this.supportQuestion.value.trim().length === 0
    ) {
      return true;
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Support</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <div class="support-logo">
          <img src="/assets/img/appicon.svg" alt="Ionic Logo" />
        </div>

        <div class="ion-padding">
          <ion-button onClick={this.goToHome} expand="block">
            Back to home (breaks 2nd time)
          </ion-button>
        </div>
      </ion-content>,
    ];
  }
}
