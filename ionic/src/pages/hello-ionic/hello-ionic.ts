import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { AboutUsPage } from '../about-us/about-us';
import { FeedbackPage } from '../feedback/feedback';
import { Service } from "../../services/service";


@Component({
    templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
    content: Array<{title: string, component: any}>;
    private title: string;
    private jsonContent: Object;

    constructor( private navCtrl: NavController, private _service: Service ) {

        this.jsonContent = this._service.getJson().subscribe(
            ( data ) => {this.jsonContent = data;},
            ( err ) => {console.log(err);},
            () => {
                this._service.setJsonContent(this.jsonContent);
                this.setJsonLocally();
            }
        );
    }

    private setJsonLocally() {
        this.jsonContent = JSON.parse(this._service.getJsonContent());
        this.title   = this.jsonContent[ 'Application' ][ 'pages' ][ 0 ][ 'hello-ionic' ][ 'title' ];
        this.content = [
            {
                title: this.jsonContent[ 'Application' ][ 'pages' ][ 0 ][ 'hello-ionic' ][ 'content' ][ 0 ][ 'title' ],
                component: MenuPage
            },
            {
                title: this.jsonContent[ 'Application' ][ 'pages' ][ 0 ][ 'hello-ionic' ][ 'content' ][ 1 ][ 'title' ],
                component: AboutUsPage
            },
            {
                title: this.jsonContent[ 'Application' ][ 'pages' ][ 0 ][ 'hello-ionic' ][ 'content' ][ 2 ][ 'title' ],
                component: FeedbackPage
            }
        ]

    }

    private getLocalContent() {
        return this.jsonContent;
    }

    goToPage( page ) {
        this.navCtrl.push(page.component);
    }
}
