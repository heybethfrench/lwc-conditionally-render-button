import { LightningElement, wire, track, api } from 'lwc';
import getAccountList from '@salesforce/apex/DeveloperTestApexController.getAccountList';

//Develop a LWC that is accessible via a Lightning App page and Community Page
//Display a Lightning Card with a Lightning Button variant of Brand
//Center the Button (Width) using Lightning Design System
//When the user clicks the button it should return a list of 5 Accounts from the controller DeveloperTestApexController
//Write tests for your Apex Code
    //Test for a Return of Data
    //Test for handling of the Exception
//Display the List of Accounts in the UI using Lightning Layout Items
//Given the context of the component the buttons color should display differently
    //Community - Red
    //Lightning Large Flexipage - Blue
    //Lightning Medium Flexipage - Green
    //Lightning Small Flexipage - Yellow
    
    //Provide 100% code coverage

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
        
        console.log(this.buttonClassName);
    }

    handleClick(){
        if(this.clicked == true){
            this.clicked = false;
        } else if(this.clicked == false){
            this.clicked = true;
        }
    }
}
