@isTest
public without sharing class DeveloperTestApexController_Test {
    
    @isTest testGreenFlow() {

        Test.startTest();


        Test.stopTest();

        System.assertEquals(5, result.size(), 'Given many accounts, when getAccountList is called, it should only return 5');

    }


    @isTest testException() {

        Boolean exceptionCaught = false;

        try {

           

        } catch(Exception err) {

            exceptionCaught = true;
        }

        System.assert(exceptionCaught, 'Given getAccountList throws an exception, then the exception is handled');


    }


}
