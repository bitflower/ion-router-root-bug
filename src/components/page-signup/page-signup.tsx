import { Component, State, h } from "@stencil/core";

@Component({
  tag: "page-signup",
  styleUrl: "page-signup.css",
})
export class PageSignup {
  @State() submitted = false;

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Signup</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <div class="signup-logo">
          <img src="/assets/img/appicon.svg" alt="Ionic Logo" />
        </div>

        <div class="ion-padding">
          {/* <ion-button onClick={this.goToHome} expand="block">
            Go to sibling via push()
          </ion-button> */}
          <ion-router-link href="/signup/confirm">
            Go to sibling
          </ion-router-link>
        </div>
      </ion-content>,
    ];
  }
}
