@isTest
public without sharing class DeveloperTestApexController_Test {

    @TestSetup
    public static void makeData(){
        List<Account> testAccounts = new List<Account>();
        for(Integer i = 0; i < 100; i++){
            Account acc = new Account();
            acc.Name = 'Test Account ' + i;
            testAccounts.add(acc);
        }
        insert testAccounts;
    }
    
    @isTest 
    public static void testGreenFlow() {
        
        Test.startTest();

        makeData();
        List<Account> result = DeveloperTestApexController.getAccountList();

        Test.stopTest();

        System.assertEquals(5, result.size(), 'Given many accounts, when getAccountList is called, it should only return 5');

    }


    @isTest 
    public static void testException() {

        Boolean exceptionCaught = false;

        try {
        
        List<Account> result = DeveloperTestApexController.getAccountList();
        result[5].Name = 'updating a name for a nonexisting account';
        update result; 

        } catch(Exception err) {

            exceptionCaught = true;
            System.debug(err);
        }

        System.assert(exceptionCaught, 'Given getAccountList throws an exception, then the exception is handled');
    }
}
