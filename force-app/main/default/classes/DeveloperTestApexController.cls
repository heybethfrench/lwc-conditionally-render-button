public without sharing class DeveloperTestApexController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Name, Phone, Type
                FROM Account
                LIMIT 5];
    }
    
}
