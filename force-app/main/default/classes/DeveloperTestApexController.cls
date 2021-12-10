public without sharing class DeveloperTestApexController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Name, Phone
                FROM Account
                LIMIT 5];
    }   
}
