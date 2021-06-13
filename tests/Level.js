const LevelSettings = require('../tests/LevelSettings');

describe('Testing level creation', function(){
    it('level', function(){

        LevelSettings.get('');

        LevelSettings.enterLogin("");

        LevelSettings.enterPassword("");

        LevelSettings.clickSubmit();

        LevelSettings.followAdmin_link();

        LevelSettings.followLevel_link();

        LevelSettings.createLevel();

        LevelSettings.enterLevel("");

        LevelSettings.mineList();

        LevelSettings.mineConfirm("");

        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        LevelSettings.addLevel();
    });
    

});
