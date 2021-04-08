// Structure name[list][key][list][key]

// Serial @Param
// x xx xx - volume, type, number
// Case report - 01
// Original article - 02
// Example - 10101 - Volume 1, Case Report, Number 1 
const type_list = ["report", "original"];
const title_type = ["CASE REPORT", "ORIGINAL ARTICLE"]

const article_lib = [
    {
    report: [
        {
            title: "A rare case of benign struma ovarii with peritoneal strumosis mimicking malignant ovarian tumour",
            author: "VIDHYAH SIVAKUMAR,  ERIC CHUNG, ANUSHYA VIJAYANANTHAN",
            serial: "101",
            content: 'issue/vol_0/case_0'
        },
        {
            title: "Consideration for peripheral inserted central catheter insertion in patients with situs ambiguus",
            author: "TAN MING CHING, ERIC CHUNG, NG WEI LIN",
            serial: "102",
            content: 'issue/vol_0/case_1'
        },
        {
            title: "Acinar lung adenocarcinoma presented as miliary opacities on chest radiograph",
            author: "KARTINI RAHMAT, ERIC CHUNG, NG WEI LIN",
            serial: "103",
            content: 'issue/vol_0/case_2'
        },
        {
            title: "Cystic Neuroblastoma: A rare entity that should be considered for a predominantly cystic abdominal mass in infants",
            author: "FARHANA BINTI, FADZLI KARTINI RAHMAT, ERIC CHUNG, NG WEI LIN",
            serial: "104",
            content: 'issue/vol_0/case_3'
        }
    ],
    original: [
        {
            title: "Comparing Catheter related bloostream infectin(CRBSI) rate between cuffed tunneled and non-cuffed tunneled PICC",
            author: "Teoh Sze Yong, Anushya A/P Vijayanathan, Eric Chung, Wei Lin Ng, Nur Adura Yaakup, Norshazriman Sulaiman",
            serial: "201",
            content: 'issue/vol_0/ori_0'
        }
    ]
}
]

function returnVolumeLength(){
    var volume = article_lib.length;
    console.log("There are " + volume + " volume in the library");
}

function selectVolume(number){
    if(article_lib[number]){
        // console.log(article_lib[number]);
        return article_lib[number];
    } else {
        console.log("There is no such volume");
    }
}

function decodeSerial(serial){
    let volume =  Math.floor(serial / 10000);
    console.log("This serial belong to volume " + volume + "!");
    let type_of_article = Math.floor((serial % 10000)/100) -1;
    console.log("The type of article is " + title_type[type_of_article] + "!");
    let article_number = (serial % 10);
    console.log("This is article number " + article_number + " in volume " + volume +"!");
    console.log("The title of this article is " + article_lib[volume][type_list[type_of_article]][article_number-1].title);
    return article_lib[volume][type_list[type_of_article]][article_number-1].content;
}

function selectArticle(serial){
    let article =  Math.floor(serial / 10000);
    let type_of_article = Math.floor((serial % 10000)/100) -1;
    let article_number = (serial % 10);
    return article_lib[article][type_list[type_of_article]][article_number-1];
}

function returnCaseType(serial){
    let type_of_article = Math.floor((serial % 10000)/100) -1;
    return title_type[type_of_article];
}

function returnWholeVolume(serial){
    let the_volume = Math.floor(serial / 10000);
    let selected_volume = selectVolume(the_volume);
    let whole_volume = [];
    for (let j = 0; j < type_list.length; j++){
        for (let i = 0; i < selected_volume[type_list[j]].length; i++) {
           whole_volume.push(selected_volume[type_list[j]][i]);
        }
    }
    return whole_volume;
}

