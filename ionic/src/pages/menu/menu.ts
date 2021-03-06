import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodItemsProvider } from '../../providers/food-items-provider';
import { foodItem } from '../foodItem';
import { Service } from "../../services/service";

/*
 Generated class for the Menu page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
    providers: [ FoodItemsProvider ]
})

export class MenuPage {

    private title: string;
            content: foodItem[];
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
        let content      = this.jsonContent[ 'Application' ][ 'pages' ][ 2 ][ 'menu' ];
        this.title       = content[ 'title' ];
        this.content     = content[ 'content' ];
    }


}
