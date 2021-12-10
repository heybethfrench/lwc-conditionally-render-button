import { LightningElement, wire, track, api } from 'lwc';
import getAccountList from '@salesforce/apex/DeveloperTestApexController.getAccountList';

export default class Developertest extends LightningElement {
    @api buttonClassName;
    @api flexipageRegionWidth;
    
    @track clicked = false;
    @wire(getAccountList) accList;

    connectedCallback(){
        if(this.flexipageRegionWidth != null && this.flexipageRegionWidth != undefined){
            this.buttonClassName = this.flexipageRegionWidth;
        } else {
            this.buttonClassName = 'COMMUNITY';
        }
    }

    handleClick(){
        if(this.clicked == true){
            this.clicked = false;
        } else if(this.clicked == false){
            this.clicked = true;
        }
    }
}
