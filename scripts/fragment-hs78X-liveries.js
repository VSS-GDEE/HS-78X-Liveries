const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            baseDir: './hs-78X-liveries/out/horizonsim-aircraft-787-10-livery-package',
            outDir: './hs-78X-liveries/out/build-modules',
            modules: [{
                name: 'Air_Canada',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ACA'
            }, {
                name: 'Air_Canada_2',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ACA2'
            }, {
                name: 'Air_Canada_3',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ACA3'
            }, {
                name: 'Air_Europa',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_AEA'
            }, {
                name: 'Air_France',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_AFR'
            }, {
                name: 'All_Nippon_Airways',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ANA'
            }, {
                name: 'All_Nippon_Airways_Star_Wars',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ANA2'
            }, {
                name: 'Air_New_Zealand',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ANZ'
            }, {
                name: 'Air_New_Zealand_2',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ANZ2'
            }, {
                name: 'British_Airways',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_BAW'
            }, {
                name: 'TUI_fly_Nordic',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_BLX'
            }, {
                name: 'Air_China',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_CCA'
            }, {
                name: 'China_Eastern_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_CES'
            }, {
                name: 'Hainan_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_CHH'
            }, {
                name: 'Shanghai_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_CSH'
            }, {
                name: 'China_Southern_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_CSN'
            }, {
                name: 'Xiamen_Air',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_CXA'
            }, {
                name: 'Xiamen_Air_2',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_CXA2'
            }, {
                name: 'Juneyao_Air',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_DKH'
            }, {
                name: 'Lufthansa',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_DLH'
            }, {
                name: 'El_Al',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ELY'
            }, {
                name: 'El_Al_2',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ELY2'
            }, {
                name: 'Etihad',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_ETD'
            }, {
                name: 'Japan_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_JAL'
            }, {
                name: 'Korean_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_KAL'
            }, {
                name: 'KLM_Royal_Dutch_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_KLM'
            }, {
                name: 'LOT_Polish_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_LOT'
            }, {
                name: 'Egyptair',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_MSR'
            }, {
                name: 'Norse_Atlantic_Airways',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_NBT'
            }, {
                name: 'Qantas',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_QFA'
            }, {
                name: 'Saudia',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_SVA'
            }, {
                name: 'Scoot',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_TGW'
            }, {
                name: 'Thai_Airways_International',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_THA'
            }, {
                name: 'TUI_Airways',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_TOM'
            }, {
                name: 'United_Airlines',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_UAL'
            }, {
                name: 'Norse_Atlantic_UK',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_UBT'
            }, {
                name: 'Virgin_Atlantic',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_VIR'
            }, {
                name: 'Vistara',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_VTI'
            }, {
                name: 'Westjet',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_10_WJA'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./hs-78X-liveries/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();
