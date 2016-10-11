import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FoodItemsProvider } from '../../providers/food-items-provider';
import { DataChanger } from '../../providers/data-changer';

import { foodItem } from '../foodItem';

/*
 Generated class for the Menu page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */


@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
    providers: [ FoodItemsProvider, DataChanger ]
})

export class MenuPage {

    title: string = "MAMENUMOFO";
    foodItems: foodItem[];


   getTitle(){
     return this.title;
   }

   setTitle(newTitle){
     this.title = newTitle;
   }

    constructor( private navCtrl: NavController ) {
        this.foodItems = [
            { name: "Lasagne", image: "../../assets/images/lasagne.jpg", description: "Italian Pasta." },
            { name: "kebab", image: "../../assets/images/kebab.jpg", description: "Turkish grilled meat." },
            { name: "humus", image: "../../assets/images/humus.jpg", description: "Lebanese cold starter." }
        ]
    }


}