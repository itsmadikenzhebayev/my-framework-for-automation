const MineSettings = require('../tests/MineSettings');

describe('Testing mine creation', function(){
    it('mine', function(){

        MineSettings.get('');

        MineSettings.enterLogin("");

        MineSettings.enterPassword("");

        MineSettings.clickSubmit();

        MineSettings.followAdmin_link();

        MineSettings.followMines_link();

        MineSettings.createMine();

        MineSettings.mineName("");

        MineSettings.latitudeValue("47");

        MineSettings.longtitudeValue("-107");

        MineSettings.minZoom("12");

        MineSettings.maxZoom("20");

        MineSettings.addMine();
    });
    

});
