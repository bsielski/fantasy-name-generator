const splitterAfter = new Splitter(VOWELS, true, "after")
const splitterBefore = new Splitter(VOWELS, true, "before")
const titleSplitterAfter = new Splitter([" ", "the ", "of ", "for ", "in ", "an ", "and ", "a ", "or ", "from " ], true, "after")
const titleSplitterBefore = new Splitter([" ", " the", " of", " for", " in", " an", " and", " a", " or", " from" ], true, "before")

// Filters are:
//  ConsonantsPatternsFilter
//  VowelsPatternsFilter
//  RepeatedLettersFilter
//  UniquenessFilter
//  NameLengthFilter
//  CapitalizeFilter

const standardFilters = [
    ConsonantsPatternsFilter,
    VowelsPatternsFilter,
    RepeatedLettersFilter,
    UniquenessFilter,
    NameLengthFilter,
    CapitalizeFilter
]

const RealNamesGroups = []

RealNamesGroups.push(
    {
	label: "European names",
	nameSets: [
	    {
		column: "left",
		label: "Celtic male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aed","Ahen","Aidan","Ailin","Alan","Albion","Alpin","Amargein","Anrai","Ardal","Art","Artur","Bairre","Barry","Banning","Beniamin","Benen","Bevan","Blair","Blathmac","Bowie","Bram","Bran","Brendan","Breanainn","Brian","Cahan","Carney","Carrick","Cass","Cathal","Cedric","Chad","Clancy","Cluny","Colin","Conall","Conan","Conchobhar","Conor","Connor","Conn","Conroy","Culley","Daire","Daniel","Daray","Darby","Darren","Derry","Devin","Dolan","Dolyn","Donnan","Donovan","Dow","Ea","Eadoin","Edan","Eoin","Erc","Erin","Evan","Fergal","Ferris","Finn","Finbar","Gaeth","Gordon","Guaire","Guy","Hagan","Ibor","Innis","Ionhar","Irving","Keary","Kearney","Keene","Kevin","Kiernan","Labraid","Labhraidh","Labhrás","Labras","Laurence","Laisrean","Larkin","Lawler","Lennan","Liam","Logan","Lorcan","Lunn","Lynch","Linch","MacDara","Macrea","MaelIosu","Maghnus","Mahon","Máirtín","Martin","Maitias","Mathias","Matthias","Maithias","Mannix","Mathghamhain","Meallan","Melvin","Malvin","Melvyn","Melwynn","Merril","Meryl","Merritt","Monahan","Morgan","Morven","Morvin","Murchadh","Murrough","Murphey","Murchach","Murray","Murry","Naomhan","Nevan","Neal","Neil","Nevin","Niece","Nolan","Oisin","Ossian","Oscar","Owain","Owen","Eoin","Ewen","Owney","Paddy","Padraig","Patraic","Peadar","Peter","Peadair","Piaras","Phelan","Piran","Proinnsias","Quigley","Quinlan","Quinn","Raegan","Rafer","Raghnall","Reginald","Reynald","Reynold","Randal","Randall","Réamonn","Renny","Raighne","Revelin","Rian","Ryan","Ryanne","Rhyan","Riddock","Riocárd","Riordan","Roarke","Rodhlann","Rowland","Rogan","Ruadhagan","Rowe","Rowen","Rowyn","Rowin","Rowan","Roibeárd","Robert","Roibart","Roibhilín","Rovelin","Roibin","Roibeard","Ravelin","Ravelyn","Revelin","Ronat","Rooney","Ruanaidh","Rhodan","Rory","Ruarc","Saoirse","Scanlon","Skanlun","Scully","Séafra","Seán","Seanán","Shannon","Senan","Sinon","Searbhreathach","Sedric","Seoirse","Seosamh","Shanahan","Shea","Sheehan","Siodhacha","Sheridan","Sierra","Sioda","Skelly","Sleibhin","Sloan","Somhairle","Sumerled","Summerled","Sommerly","Strahan","Sullivan","Sweeney","Tadhg","Teagan","Teague","Teagan","Tiernan","Tigernan","Torin","Tormey","Torrance","Treasach","Troy","Uaine","Owen","Owein","Oney","Owney","Hewney","Úistean","Vaughn","Wynne","Winn","Wynn","Arranz","Arthur","Arthyen","Bideven","Blyth","Branwalather","Cadan","Cador","Carantoc","Carrow","Colan","Collen","Conan","Cuilliok","Daveth","Elowen","Gerens","Glastenen","Glewas","Glewyas","Golvan","Gorlas","Gorlois","Gorneves","Hicca","Jacca","Jago","Jory","Jowan","Kitto","Madron","Madern","Margh","Masek","Mawgan","Meryn","Myghal","Nadelek","Nicca","Padern","Pasco","Pascow","Pawly","Peder","Sithny","Trevedic","Wella","Withell","Wyllow","Zethar","Abhainn","Acair","Achaius","Adair","Edgar","Adhamh","Aidan","Adie","Aeneas","Ahearn","Aherin","Hearn","Abeart","Ailean","Ailein","Aillig","Ail","Aindrea","Anndra","Ainsley","Alasdair","Alec","Aluinn","Amhuinn","Anndra","Aodh","Hugh","Artair","Artut","Balfour","Balloch","Balmoral","Banner","Bean","Birk","Blackburn","Blane","Bothan","Boyd","Braden","Braigh","Bret","Brian","Briant","Brion","Bryan","Bryant","Brodie","Busby","Bryce","Buchanan","Camden","Camdin","Camdan","Carey","Carney","Carr","Cathal","Ceard","Ceardach","Chalmers","Clamer","Charles","Chattan","Chait","Clach","Colin","Conan","Connor","Conon","Connell","Craig","Crannog","Cullen","Dabhaidh","Dallas","Darach","Deargh","Derek","Dirk","Derrick","Diarmad","Doire","Dhoire","Donnchadh","Dorrell","Douglas","Drummond","Duer","Duff","Dubh","Dunham","Dunlop","Eanruig","Ear","Edan","Eideard","Eilig","Eoghann","Eosaph","Erskine","Ervin","Evan","Ewan","Feandan","Fearghas","Firth","Frang","Gabhran","Gair","Gavin","Gawain","Gawen","Gaven","Gilchrist","Gilleabart","Gillis","Gleann","Goraidh","Gow","Gowan","Viking","Harailt","Hearn","Ahearn","Hugh","Iain","Ian","Innes","Iomhair","Ivar","Iver","Ivor","Keddy","Keir","Keith","Kendrew","Kentigern","Kincaid","Kinnon","Kirk","Laird","Leith","Leathan","Lennox","Leod","Logan","Lundy","Luthias","Lyall","Maolmuire","Mártainn","Mata","Morgan","Morven","Muir","Murdoch","Muirfinn","Murry","Nairn","Nathair","Naughton","Niall","Neil","Oidhche","Ossian","Peadair","Perth","Paol","Pony","Raghnall","Raibeart","Ranald","RobRoy","RobRuadh","Ronan","Rory","Roslin","Roy","Ryan","Scott","Scrymgeour","Simon","Somairhle","Struan","Sutherland","Tearlach","Todd","Tomas","Tormod","Tremaine","Tyree","Uilleam","Wallace","Wyndham"
		       ]
	    },
	    {
		column: "right",
		label: "Celtic female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aggie", "Aignéis", "Una", "Aggie","Nesta", "Nessa", "Nessie", "Ailean", "Alana", "Aila", "Aileen", "Aili","Allie", "Alison", "Alice", "Akira", "Aline", "Allina", "Andra", "Andreana","Andrina", "Annis", "Artis", "Audrey", "Beathas", "Blair", "Blaire", "Bonnie","Bonny", "Bradana", "Brae", "Brenda", "Bridget", "Cadha", "Cairistiona", "Cameron","Catriona", "Ceit", "Ceidth", "Ceiteag", "Katie", "Claire", "Coleen", "Colina","Cullodena", "Dallas", "Daracha", "Davina", "Davonna", "Dava", "Deirdre", "Diorbhail","Ealasaid", "Eara", "Earie", "Edana", "Effie", "Eilidh", "Eiric", "Eirica","Erica", "Ericka", "Erika", "Erskina", "Fearchara", "Fenella", "Fia", "Fiona","Floraidh", "Gail", "Gara", "Gaira", "Gavina", "Gillian", "Jillian", "Glen","Grizel", "Grisel", "Grizzel", "Gunna", "Heather", "Innes", "Irvette", "Iseabail","Isabel", "Isobelle", "Isabel", "Isabelle", "Bel", "Bell", "Bella", "Belle","Ib", "Ibbie", "Isa", "Tibbie", "Jennifer", "Jinny", "Keita", "Keiti","Kelsi", "Kenna", "Kyla", "Lair", "Lara", "Laria", "Laurie", "Leslie","Lilas", "Maili", "Mairi", "Moire", "Mairead", "Maisie", "Malmuira", "Malvina","Marion", "Mae", "May", "Maureen", "Moira", "Muira", "Muire", "Murron","Muirrean", "Muireann", "Nairne", "Nairna", "Nathaira", "Nessa", "Nighean", "Oighrig","Payton", "Rhona", "Robena", "Robina", "Rowena", "Seasaidh", "Sheila", "Sile","Sileas", "Sima", "Siofra", "Siubhan", "Siusaidh", "Sorcha", "Struana", "Tira","Torra", "Vanora", "Wynda", "Aithne", "Aine", "Aoife", "Bairre", "Bevin","Bedelia", "Blair", "Blaire", "Blaithin", "Breena", "Brenda", "Brenna", "Brit","Cahan", "Caireann", "Cairenn", "Caitriona", "Cait", "Caitrin", "Triona", "Caitlin","Carrie", "Carry", "Dairine", "Dallas", "Damhnait", "Deirdre", "Derry", "Devin","Duana", "Dubhain", "Echna", "Edwina", "Eileen", "Ellen", "Eilis", "Eithne","Elatha", "Ena", "Erin", "Ernine", "Etain", "Fanny", "Feenat", "Finnsech","Grainne", "Gwendolyn", "Gwen", "Hilde", "Ida", "Isleen", "Julianne", "Kacey","Vasey", "Kassidy", "Kathleen", "Kate", "Kathie", "Katharine", "Keara", "Ceara","Keelin", "Keira", "Kerry", "Keriann", "Kelly", "Keva", "Kevina", "Kiara","Kiley", "Kylie", "Kinnat", "Laoise", "Lasair", "Lavena", "Liadan", "Maille","Molly", "Maire", "MaelMuire", "Moira", "Mairin", "Maureen", "Moira", "Maura","Mavelle", "Meara", "Mell", "Mella", "Melvina", "Meriel", "Morgan", "Muireann","Muirin", "Muirne", "Murphey", "Myrna", "Nan", "Nainsi", "Nevina", "Niamh","Nia", "Nya", "Noel", "Nora", "Norah", "Honora", "Orghlaith", "Orla","Orlaith", "Ornice", "Ornora", "Paili", "Pegeen", "Philomena", "Renny", "Rowena","Ryann", "Saraid", "Scathach", "Sean", "Shawn", "Sine", "Sheena", "Shana","Shunta", "Shawnda", "Shona", "Shay", "Seani", "Seara", "Shanley", "Shannon","Sile", "Sinead", "Siobhan", "Siofra", "Slaine", "Sorcha", "Suzanna", "Tara","Tiernan", "Treasa", "Trevina", "Tullia", "Ula", "Ursula", "Vanessa", "Vevina","Vivienne", "Whiltierna", "Faoiltiarna", "Yvon", "Yvonne", "Yvone", "Yvonn"
		       ]
	    },

	    {
		// source: http://www.namenerds.com/irish/trad.html
		column: "left",
		label: "Old Irish male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Maon","Miach","Séighín","Éimhín","Fachtna","Feidhlim","Ailbhe","Beag","Bearach","Cathán","Ceallach","Eirnín","Flann","Gormán","Naoise","Coinneach","Abbán","Aibhne","Ailill","Aimhirghin","Ainbheartach","Ainníleas","Anamcha","Aodh","Aodhán","Aonghus","Bairrfhionn","Baoth","Bardán","Beagán","Breacán","Breasal","Brion","Brocc","Brógán","Buadhach","Cairbre","Cairell","Calbhach","Caoimhín","Cass","Cassair","Cassán","Cathal","Cathaír","Cearbhall","Cian","Ciarán","Cillian","Cináed","Coinneach","Colmán","Comhghall","Conall","Conchobhar","Conlaodh","Conn","Conán","Cormac","Curnán","Cuán","Cúmhaí","Daigh","Daighre","Daimhín","Dallán","Deaglán","Deasmumhnach","Diarmaid","Domhnall","Donnchadh","Dubhaltach","Dubhgall","Dubhghlas","Dáire","Ealadha","Earnán","Eoghan","Faolán","Fearchar","Feardorcha","Fearghal","Fearghus","Fechín","Fiachra","Fial","Finnseach","Finnén","Fionn","Fionnbharr","Fionntán","Garbhán","Gilleagán","Giolla","Chríst","Glaisne","Gobán","Gormghiolla","Iarfhlaith","Iarlugh","Iobhar","Iomchadh","Irial","Labhraidh","Labhrás","Lachtna","Lachtnán","Laisrén","Laoidheach","Laoire","Lasair","Leannán","Lochlann","Lomán","Lonán","Lorcán","Lughaidh","Mac","Nisse","Mac","Táil","Mael","Íosa","Maeleachlainn","Mainchín","Maine","Maolán","Marcán","Meallán","Mel","Mochta","Molaisse","Morann","Muircheartach","Muireadhach","Murchadh","Murchú","Naithí","Naomhán","Neasán","Niall","Niallán","Nuadha","Odhrán","Oilithir","Oilleóg","Oillill","Oillín","Oisín","Olcán","Onchú","Orthanach","Osgar","Osán","Robhartach","Ross","Ruaidhrí","Ruarc","Ríoghán","Ríordán","Rónán","Rúadhán","Samhradhán","Scannal","Scannlán","Scoithín","Scolaí","Scáthach","Seachlann","Seanchán","Seanán","Siollán","Sléibhín","Somhairle","Suibhne","Sárán","Sé","Séadhna","Síoda","Tadhg","Taichleach","Tanaí","Tassach","Teimhnín","Tighearnach","Tighearnán","Tiobraide","Toirdhealbhach","Tomaltach","Torcán","Torna","Treasach","Tuama","Tuathal","Tíreachán","Tóla","Tómmán","Uaithne","Uallachán","Uallgarg","Ultán","Urard","Ádhamhnán","Áinle","Ámhra","Ánrothán","Éamonn","Éanna","Ógán","Ólchobhar"
		       ]
	    },
	    {
		// source: http://www.namenerds.com/irish/trad.html
		column: "right",
		label: "Old Irish female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aillean","Ainnir","Aithche","Ana","Aodhamair","Aodnait","Aoibheann","Aoibhegréine","Aoife","Banbha","Blinne","Bláthnaid","Bláthín","Bríghid","Brónach","Báine","Bébhinn","Caoilfhionn","Caoimhe","Ceara","Ciar","Clíodhna","Dairinn","Damhnait","Dearbhail","Deirbhile","Deirdre","Dunfhlaith","Dáirine","Dáirinn","Eadan","Easnadh","Echna","Eibhear","Eithne","Fainche","Feidhelm","Feme","Fianait","Fionnait","Fionnghuala","Fionúir","Féthnaid","Geiléis","Gobnait","Gormlaith","Grian","Gráinne","Laoise","Lasairfhiona","Liamhain","Life","Luiseach","Líadan","Líobhan","Marga","Meadhbh","Meallá","Moinnine","Moncha","Muadhnait","Muireann","Muirgheal","Muirne","Muirín","Móirne","Mór","Naomh","Neacht","Neamhain","Neasa","Niamh","Nuala","Nárbhflaith","Osnait","Rathnait","Ríofach","Ríona","Róinseach","Róisín","Rónnad","Rós","Rúadhnait","Sadhbh","Saorla","Saraid","Scoithniamh","Scoth","Scothnait","Searc","Sláine","Sorcha","Suaibhseach","Suanach","Sárnait","Séanait","Síomha","Taillte","Teafa","Teamhair","Treasa","Tuamnait","Tuathla","Tuileach","Tuilelaith","Téide","Uaine","Uaine","Uainionn","Uallach","Uasal","Áine","Áinfean","Álmhath","Éibhleann","Éile","Éirne","Émer","Étaín","Íde","Íonait","Órlaith","Órnait","Úna","Maon","Miach","Séighín","Éimhín","Fachtna","Feidhlim","Ailbhe","Beag","Bearach","Cathán","Ceallach","Eirnín","Flann","Gormán","Naoise","Coinneach"
		       ]
	    },
	    {
		// source: http://www.namenerds.com/welsh/trad2.html
		column: "left",
		label: "Old Welsh male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Adda","Addaon","Adeon","Aedd","Aeddan","Aelhearn","Aelwyn","Aeron","Afagddu","Afallon","Afan","Alan","Alaw","Alawn","Alban","Aldith","Aldryd","Alec","Aled","Alun","Alwyn","Amaethon","Amlodd","Anarawd","Andreas","Aneirin","Angwyn","Anhun","Arawn","Arial","Arianwyn","Arnallt","Arofan","Aron","Arthen","Arthfael","Arthgen","Arthur","Arwel","Arwyn","Asaff","Aurfryn","Auryn","Awen","Awsten","Baeddan","Baglan","Barri","Barti","Bedaws","Bedwyn","Bedivere","Bedwyn","Bedwyr","Berddig","Bergam","Berwyn","Bevan","Beuno","Beynon","Bleddyn","Bledig","Bledri","Blwchfardd","Boreugwyn","Brân","Branwaladr","Breichiawl","Brice","Brioc","Brochfael","Brychan","Bryn","Brynllyn","Brynmor","Bryngwyn","Brython","Cadell","Cadfael","Cadog","Cadwaladr","Cadwallon","Cadwgan","Caerwyn","Caradog","Carwyn","Caswallon","Cawrdaf","Cecil","Cedrych","Cei","Ceinfryn","Ceiriog","Celyn","Celynen","Cennydd","Ceredig","Ceri","Cewydd","Cian","Cledwyn","Clwyd","Clydai","Clydno","Coel","Collen","Colwyn","Conan","Conwy","Cospatrick","Craigfryn","Cranog","Crwys","Culhwch","Cunedda","Curig","Cyfeiliog","Cyffin","Cymro","Cynan","Cynddelw","Cyndeyrn","Cynddylan","Cynedda","Cynfab","Cynfarch","Cynfael","Cynfrig","Cynog","Cynon","Dafydd","Dai","Dedwydd","Deian","Deiniol","Delwyn","Derfel","Deri","Dewi","Dogmael","Dwyryd","Dyfri","Dylan","Ednyfed","Einion","Eirian","Eirwyn","Elffin","Elidir","Elis","Elwyn","Elystan","Emlyn","Emrys","Emyr","Evan","Fflamddwyn","Ffransis","Fychan","Gareth","Gawain","Geraint","Gerallt","Gethin","Gildas","Gilfaethwy","Glanmor","Glyn","Goronwy","Grigor","Gruffydd","Gwaednerth","Gwalchgwyn","Gwalchmai","Gwatcyn","Gwaun","Gwenlyn","Gwili","Gwilym","Gwion","Gwydderig","Gwyddno","Gwydion","Gwyn","Gwynfor","Gwythyr","Hafgan","Heddwyn","Heilyn","Heini","Hergest","Heulfryn","Heulyn","Huw","Hywel","Iago","Ianto","Idris","Idwal","Iestin","Ieuan","Ifan","Ifor","Illtyd","Ioan","Iolo","Iorweth","Lewys","Llew","Lloyd","Llyr","Llywarch","Llywelyn","Mabon","Macsen","Madog","Mael","Maelgwyn","Maelgwn","Maelmadog","Math","Mathonwy","Medrawd","Meical","Meilyr","Meirion","Meredudd","Merfyn","Meurig","Mihangel","Moelwyn","Morgan","Morien","Myrddin","Nudd","Owain","Pawl","Pedr","Peredur","Powel","Pryderi","Pwyll","Rhein","Rheinallt","Rhisiart","Rhodri","Rhun","Rhydderch","Rhydian","Rhydwyn","Rhys","Robat","Seiriol","Selwyn","Siarl","Siencyn","Simwnt","Sion","Sionyn","Sior","Steffan","Sulien","Sulwyn","Taliesin","Tegwyn","Teilo","Tewdwr","Tomos","Trefor","Trystan","Wyn","Ynyr"
		       ]
	    },
	    {
		// source: http://www.namenerds.com/welsh/trad1.html
		column: "right",
		label: "Old Welsh female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Addfwyn","Aderyn","Adlais","Adwen","Aelwen","Aerfen","Aeron","Aeronwen","Aeronwy","Afryl","Alaw","Aldyth","Alwen","Alys","Amranwen","Aneira","Anest","Angharad","Ann","Anna","Anwen","Annwr","Annwyl","Arddun","Arianell","Arianrhod","Arianwen","Arwen","Aurddolen","Auron","Awela","Awena","Banwen","Beca","Berwen","Bethan","Beti","Betrys","Blodeuedd","Blodwedd","Blodwen","Branwen","Brengwain","Briallen","Brisen","Bronmai","Bronwen","Brythonwen","Buddug","Cadi","Cain","Calan","Canaid","Caron","Caronwen","Carwen","Caryl","Carys","Catrin","Ceindeg","Ceindrych","Ceinfryn","Ceinwen","Ceirios","Ceri","Ceridwen","Cerys","Collwen","Creuddylad","Crisiant","Crystyn","Cyffin","Daron","Deilwen","Del","Delun","Delwen","Delyn","Delyth","Deris","Derwena","Deryn","Deryth","Dilwen","Dilys","Drudwen","Drysi","Dwyfor","Dwynwen","Dwyryd","Dwysan","Dyddanwy","Dyddgu","Dyfi","Ebrill","Edwy","Efa","Eigra","Eilir","Eilonwy","Eilwen","Eira","Eirian","Eirianwen","Eirianedd","Eiriol","Eirlys","Eirwen","Eirys","Elan","Elain","Elen","Elenid","Eleri","Elinor","Elisabeth","Elli","Elliw","Eluned","Enfys","Enid","Eos","Erin","Eryl","Esyllt","Ethni","Eurfron","Euron","Eurddolyn","Eurwen","Ewig","Faleiry","Fanw","Ffion","Fflur","Ffraid","Ffreuer","Fioled","Gaenor","Geinor","Generys","Glenda","Glenys","Glesni","Glynis","Goleubryd","Goleudydd","Grug","Gwawr","Gwawrddydd","Gwawrwen","Gwen","Gwenda","Gwenddydd","Gwendolen","Gwener","Gwenfair","Gwenfor","Gwenfrewi","Gwenfron","Gwenhwyfar","Gwenith","Gwenllian","Gwenlyn","Gwennan","Gwennant","Gwennol","Gwenol","Gwenydd","Gwenynan","Gwerful","Gwernen","Gwernfyl","Gwlithen","Gwyddelan","Gwyddfid","Gwladys","Gwylan","Gwylfai","Gwyneth","Gwynonwen","Haf","Hafgan","Hafren","Hafwen","Heddwen","Hedydd","Heini","Heledd","Heulwen","Heulyn","Hydref","Hywela","Iarlles","Idanwen","Ifanna","Ifanwy","Ilar","Iona","Ionor","Iorwen","Iseult","Ithela","Leri","Lili","Lilwen","Liwsi","Lleucu","Llian","Llinos","Llio","Lluan","Lodes","Lowri","Luned","Lyneth","Lynfa","Lynwen","Mabli","Madlen","Maelona","Maelorwen","Mai","Mair","Mallt","Manon","Marged","Medeni","Medi","Medwen","Mefin","Megan","Meinwen","Meirionwen","Melangell","Meleri","Meudwen","Modron","Modwen","Moelwen","Mold","Mona","Morforwyn","Morfudd","Morwen","Mwyndeg","Mwynen","Myfanwy","Nan","Nans","Nant","Nefyn","Nerys","Nest","Nia","Non","Olwen","Owena","Perl","Rebeca","Rhagnell","Rhedyn","Rhiain","Rhiangar","Rhiannon","Rhianwen","Rhianydd","Rhondda","Rhonwen","Rhosan","Rhoslyn","Rhunedd","Rosentyl","Rowena","Sara","Seirial","Seirian","Seren","Siân","Sidan","Sioned","Siriol","Siwan","Siwsan","Sulian","Sulwen","Surwen","Tafwys","Tangwen","Tangwystl","Tanwen","Taryn","Tegan","Tegeirian","Tegfedd","Tegwedd","Tegwen","Tegyd","Teiddwen","Teifi","Telaid","Teleri","Telyn","Tesni","Tirion","Tonwen","Tudful","Undeg","Wena","Wenhaf","Ynyra"
		       ]
	    },
	]
    },

    {
	label: "Angels and Demons",
	nameSets: [
	    {
		// source: https://en.wikipedia.org/wiki/List_of_angels_in_theology
		column: "left",
		label: "Angels in Judaism and Christianity",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Abaddon","Adriel","Archangel","Ariel","Azazel","Azrael","Barachiel","Camael","Cassiel","Cherubiel","Cherubim","Daniel","Dumah","Eremiel","Gabriel","Gadreel","Hadraniel","Hahasiah","Haniel","Hashmal","Helel","Hesediel","Imamiah","Jegudiel","Jehoel","Jequn","Jerahmeel","Jophiel","Kamael","Kemuel","Khamael","Kushiel","Leliel","Lucifer","Mebahiah","Metatron","Michael","Muriel","Nanael","Netzach","Nithael","Ofaniel","Ophaniel","Pahaliah","Penemue","Poyel","Puriel","Qaphsiel","Raguel","Raphael","Raziel","Remiel","Rikbiel","Sachiel","Samael","Sandalphon","Sariel","Selaphiel","Seraphiel","Seraphim","Shamsiel","Simiel","Temeluchus","Tzadkiel","Tzaphkiel","Tzaphqiel","Tzaphqiel","Uriel","Uzziel","Vasiariah","Vehuel","Zachariel","Zadkiel","Zaphkiel","Zophiel"
		       ]
	    },
	    {
		// sosurce: https://en.wikipedia.org/wiki/List_of_angels_in_theology
		column: "right",
		label: "Angels in Islam",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Atid","Azazil","Azrael","Azrail","Dardail","Hafaza","Hamalat","Herut","Israfil","Jabril","Jibrail","Jibril","Jundullah","Malik","Marut","Mikail","Muaqqibat","Munkar","Nakir","Raqibun","Raqib","Ridwan","Zabaniah"
		       ]
	    }
	]
    },

    {
	label: "Testing for rotfl",
	nameSets: [
	    {
		column: "left",
		label: "Polish children male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Antek", "Kubuś", "Jasio", "Kacperek", "Wojtuś", "Adaś", "Staś", "Alan", "Franek", "Marcelek"
		       ]
	    },

	    {
		column: "right",
		label: "Polish children female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Ala", "Ola", "Ela", "Ula", "Lena", "Pola", "Liliana", "Zuzia", "Hania", "Zosia"
		       ]
	    },
	    {
		column: "left",
		label: "Polish animals male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Alamo","Aluś","Amazy","Azis","Bafi","Bakir","Bambo","Bazyl","Bobi","Borys","Bambi","Brunon","Brutus","Bryś","Burek", "Ares", "Maks", "Azor", "Hektor", "Cezar", "Reksio", "Nero"
		       ]
	    },
	    
	    {
		column: "right",
		label: "Polish animals female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Akima","Asaja","Bajka","Czika","Fifi","Fiona","Funia","Gabcia","Harisa","Kiara","Kora","Larisa","Luna","Lula","Maja","Mika","Mila","Misia","Mela","Nala","Nika","Nesti","Nesi","Psota","Punia","Pusia","Roxi","Tonia","Tosia","Zonia","Sonia", "Diana", "Nuka", "Roksi", "Saba", "Sara", "Tina"
		       ]
	    }
	    	    {
		column: "left",
		label: "Old Polish male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Barnim", "Bądzsław", "Bąsław", "Bdzigost", "Bedgost","Będzieciech", "Będzimir", "Będziemir", "Będziemirz", "Będomir", "Będzimysł", "Biecsław", "Biecław", "Biezdar", "Biezdziad","Biezpraw", "Brzezpraw", "Biezprzem", "Biezprzym", "Bezprym", "Biezstryj", "Biestryj", "Biezstryk", "Brzezstryk", "Brzestryk","Biezuj", "Biezwuj", "Biezrząd", "Blizbor", "Blizborz", "Bodzepor", "Bogdał", "Bogdaj", "Bogodał", "Bogdasz","Bogudan", "Bogodan", "Bogdan", "Bohdan", "Bodan", "Bogodar", "Bogudar", "Boguchwał", "Boguchał", "Bogufał","Bogofał", "Bogfał", "Bogchwał", "Bochwał", "Bofał", "Bogumił", "Bogomił", "Bogmił", "Bogomieł", "Bogumieł","Bogmieł", "Bogumysław", "Bogurad", "Bogured", "Bogusąd", "Bogusław", "Bogosław", "Bohusław", "Bogsław", "Bogwiedz","Bogwidza", "Bogowid", "Bolebor", "Boleczaj", "Boleczest", "Bolelut", "Bolemir", "Bolemysł", "Bolesław", "Bosław","Borzuj", "Borzywuj", "Borzygniew", "Borzgniew", "Borzymir", "Borzysław", "Borzywoj", "Borzuj", "Bożebor", "Bożeciech","Bożciech", "Bożydar", "Bożdar", "Bożysław", "Bracsław", "Bratomir", "Bratumił", "Bratomił", "Bratmił", "Bretomił","Bretmił", "Braturad", "Brodzisław", "Brocsław", "Barcsław", "Barcław", "Bronimir", "Bromir", "Bronisąd", "Bronisław","Bronsław", "Barnisław", "Brunisław", "Brosław", "Brzezdob", "Brzezdoma", "Budziboj", "Bojan", "Budzigniew", "Budzimir","Budzisław", "Budzsław", "Budziwoj", "Budźwoj", "Budziwuj", "Bygost", "Bytomir", "Chociebąd", "Chociebor", "Chociemir","Chocimier", "Chocimir", "Chocimirz", "Chociesław", "Chocsław", "Choroman", "Chwalibog", "Chwalimir", "Chalimir", "Chwalisław","Chalisław", "Ciechomir", "Ciechosław", "Ciecierad", "Ciecirad", "Cieciered", "Cieciurad", "Ciećrad", "Ciecimiar", "Cierpisław","Ciesław", "Cieszybor", "Cieszbor", "Cieszygor", "Cieszymir", "Cieszymiar", "Cieszymier", "Cieszmir", "Cieszmiar", "Cieszmier","Cieszymysł", "Cieszyrad", "Cieszysław", "Cirzpibog", "Czabor", "Czcirad", "Czcisław", "Cisław", "Czedrog", "Czesław","Czasław", "Czębor", "Częstobor", "Częsbor", "Częstogoj", "Częstomir", "Częstowoj", "Czścibor", "Czcibor", "Cibor","Czesbor", "Dadzbog", "Dalebor", "Dalibor", "Dalbor", "Daleborz", "Dalegor", "Dalemir", "Dalimir", "Dalemiar","Dalimiar", "Dalestryj", "Dalewin", "Dalwin", "Dargorad", "Derwan", "Długomił", "Dobiegniew", "Dobielut", "Dobiemiest","Dobiemir", "Dobiemiar", "Dobiemier", "Dobimir", "Dobiesław", "Dobosław", "Dobrobąd", "Dobrociech", "Dobrogost", "Dobrogoszcz","Dobromił", "Dobromir", "Dobromier", "Dobromysł", "Dobromysław", "Dobronieg", "Dobrosiodł", "Dobrosław", "Dobrowit", "Dobrowoj","Dobrutro", "Dobrzegniew", "Domaborz", "Domabor", "Domagniew", "Domamir", "Domiemir", "Domarad", "Domorad", "Domared","Domaradz", "Domasław", "Domosław", "Domastoj", "Domastryj", "Domasuł", "Domawuj", "Domauj", "Domażyr", "Drogodziej","Drogomił", "Dromił", "Drogomir", "Drogmir", "Dragomir", "Drahomir", "Drohomir", "Dargomier", "Drogomysł", "Drogoradz","Drogosław", "Dargosław", "Drogowit", "Drohobysz", "Drahobysz", "Dziebor", "Dzierżykraj", "Dzirżykraj", "Dzierżysław", "Dzirżysław","Dziersław", "Dzirsław", "Dziesław", "Dzisław", "Dzirżyterg", "Dzirżywuj", "Dziwigor", "Dziwisław", "Falibog", "Falibor","Falimir", "Falimirz", "Falisław", "Gardomir", "Gnierat", "Gniewomir", "Gniewomiar", "Gniewomier", "Gniemir", "Gniewosz","Godzimir", "Godzisław", "Godosław", "Godzsław", "Gocław", "Gorazd", "Gorzysław", "Gorsław", "Gosław", "Gostmił","Gostomysł", "Gościmir", "Gościmiar", "Gościrad", "Gościsław", "Gościwid", "Gościwit", "Gościwuj", "Grodzisław", "Grodzsław","Gromisław", "Grzymisław", "Grzymosław", "Grzymsław", "Grzmisław", "Grzysław", "Himisław", "Hodysław", "Hubysław", "Huniemir","Huniesław", "Imisław", "Izasław", "Izbor", "Izbygniew", "Izbylut", "Izbelut", "Jaczemir", "Jaczewoj", "Janisław","Jarogniew", "Jerogniew", "Jaromir", "Jaromiar", "Jeromiar", "Jeromier", "Jaropełk", "Jarosław", "Jerosław", "Jirosław","Jarostryj", "Jimisław", "Juniesław", "Jutrogost", "Jutrowoj", "Jutrowuj", "Kanimir", "Kanimier", "Kajmir", "Kalmir","Kanmił", "Kazimierz", "Kazimir", "Kazimirz", "Kazimiar", "Kazimier", "Kaźmir", "Kociebor", "Kociemir", "Kociemiar","Kociemier", "Kocimiar", "Kocimier", "Kocimir", "Koćmir", "Krzesąd", "Krzesimir", "Krzesisław", "Krzecsław", "Krzesław","Krzysław", "Krzywosąd", "Kwalimir", "Kwalisław", "Laliczaj", "Lasota", "Lech", "Lechosław", "Lederg", "Lelistryj","Lesław", "Leszek", "Lubgost", "Lubodrog", "Lubomir", "Lubomirz", "Lubomysł", "Luboradz", "Lubowid", "Ludomił","Ludmił", "Ludomir", "Ludomer", "Ludmar", "Ludosław", "Ludziwoj", "Lutobor", "Litobor", "Lutogniew", "Lutomir","Lutomiar", "Lutmiar", "Lutomysł", "Lutosław", "Lutsław", "Lucsław", "Łękomir", "Małobąd", "Małogost", "Małomir","Małostryj", "Małostryk", "Małowid", "Małowuj", "Manomir", "Markusław", "Masław", "Mezamir", "Męcimir", "Męcisław","Męcsław", "Męsław", "Miecisław", "Miecsław", "Miesław", "Mieczysław", "Miestwin", "Mieszko", "Miłobąd", "Miłobor","Miłobrat", "Miłochat", "Miłoczat", "Miłodrog", "Miłodziad", "Miłogost", "Miłgost", "Miłorad", "Miłosław", "Miełosław","Miłostryj", "Miłosz", "Miłowit", "Miłwit", "Miłowuj", "Minigniew", "Minogniew", "Mirogod", "Mirogniew", "Mironieg","Mirosław", "Misław", "Modlibog", "Modliboż", "Mojmir", "Mojsław", "Morzysław", "Mroczysław", "Mroczesław", "Mroczsław","Mrocsław", "Mrocław", "Mrosław", "Mszczuj", "Mścibor", "Mścigniew", "Mścisław", "Mściwoj", "Mszczujwoj", "Mściwuj","Mysław", "Myślibor", "Myślidar", "Myślimir", "Naczęmir", "Naczęmiar", "Naczęmier", "Naczęrad", "Naczęsław", "Nacsław","Nacław", "Naczęwoj", "Naczęwuj", "Nadar", "Nadbor", "Nadmir", "Nagod", "Namir", "Namysław", "Nasiębąd","Nasiębud", "Nasiębor", "Nasięgniew", "Nasław", "Nawoj", "Nawuj", "Nażyr", "Niebor", "Niecisław", "Niebylec","Niedabył", "Niedabysz", "Niedalic", "Niedał", "Niedan", "Niedaniec", "Niedoma", "Niedamir", "Niedomysł", "Niegodoma","Niegosław", "Niegowoj", "Niegrod", "Nielubiec", "Niemir", "Niemierz", "Niemironieg", "Niemoj", "Niemst", "Niemsta","Niemszczon", "Nienach", "Niepełka", "Nieprosz", "Nieprasz", "Nieproch", "Nieprzebąd", "Nieprzebud", "Nieprzebysz", "Nierad","Niered", "Nierod", "Niesąd", "Niesiebąd", "Niesiebud", "Niesiebor", "Niesiodł", "Niestek", "Niestoj", "Niesuł","Nietęg", "Nietubył", "Niewsza", "Niezamysł", "Nieznamir", "Nieznawuj", "Ninogniew", "Ninomysł", "Nowosiodł", "Objęsław","Ocięsław", "Odolan", "Okrzesław", "Osiębor", "Osięgniew", "Ostrobod", "Ostrogniew", "Ostrowod", "Pakosław", "Pełczybog","Pęcisław", "Pęcsław", "Pęcław", "Pęsław", "Pękosław", "Pomir", "Pomścibor", "Poznan", "Poznomir", "Prosimir","Przebąd", "Przebor", "Przedabog", "Przedbor", "Przedwor", "Przedmir", "Przezmir", "Przedpełk", "Przedpołk", "Przedsław","Przecsław", "Przecław", "Przesław", "Przedwoj", "Przedwuj", "Przemęt", "Przemił", "Przemieł", "Przemir", "Przemysł","Przemysław", "Przemyślibor", "Przezdoma", "Przezdziad", "Przezpraw", "Przezprzem", "Przyboj", "Przybor", "Przybygniew", "Przybylut","Przybymir", "Przybyrad", "Przybysław", "Przybywoj", "Przybywuj", "Przysnobor", "Przywit", "Racibor", "Raciborz", "Recibor","Racigniew", "Racimir", "Racimiar", "Racisław", "Racsław", "Racław", "Ratsław", "Recsław", "Recław", "Retsław","Resław", "Rasław", "Radociech", "Radogost", "Radomił", "Radomir", "Radomiar", "Radmir", "Radosław", "Redosław","Radsław", "Redsław", "Radosz", "Radost", "Radowit", "Radowuj", "Radsuł", "Radzim", "Rodomił", "Rodomieł","Rodsław", "Rocsław", "Rocław", "Rosław", "Rościgniew", "Rościsław", "Rzędzimir", "Rzędzisław", "Rzędziwoj", "Sambor","Szenbor", "Samogost", "Samosąd", "Sęczygniew", "Sędowin", "Sędzimir", "Sędomir", "Sędzisław", "Sędosław", "Sędziwoj","Sędowoj", "Sędźwoj", "Sudywoj", "Sędziwuj", "Siebąd", "Siebor", "Siabor", "Szabor", "Szebor", "Sieciebor","Sietbor", "Sieciech", "Sieciesław", "Siecsław", "Siecław", "Siesław", "Siedlewit", "Siemidrog", "Siemierz", "Siemił","Siemimił", "Siemmił", "Siemimysł", "Siemomysł", "Siemomysław", "Siemir", "Siemar", "Siemirad", "Siemisław", "Siemosław","Siemoradz", "Siemowit", "Siepraw", "Siestrzemił", "Siestrzewit", "Sięgniew", "Siężyr", "Sężyr", "Sirosław", "Sierosław","Sjęgniew", "Skarbimir", "Skarbimirz", "Skardmir", "Skamir", "Skarbisław", "Skaziczest", "Sławobor", "Sławociech", "Sławciech","Sławomir", "Sławomiar", "Sławosław", "Smysław", "Snowid", "Sobiebor", "Sobiemir", "Sobiemysł", "Sobierad", "Sobiesąd","Sobiesław", "Sobieżyr", "Spycigniew", "Spycimir", "Spyćmier", "Spyćmir", "Spyćmierz", "Spycisław", "Stanibor", "Stanimir","Stanisław", "Stasław", "Stojgniew", "Stoigniew", "Stogniew", "Stojsław", "Stoisław", "Stosław", "Tosław", "Stomir","Strachomir", "Strogobor", "Strogomir", "Stronisław", "Strosław", "Strzebor", "Strzedziwoj", "Strzeżymir", "Strzeżysław", "Strzedzsław", "Strzecsław", "Strzecław", "Strzesław", "Sulibor","Sulibrat", "Sulidziad", "Suligost", "Sulimir", "Sulimiar", "Sulmir", "Sulirad", "Sulisław", "Solisław", "Sulistryj","Suliwuj", "Swojsław", "Swosław", "Ścibor", "Świebąd", "Świebor", "Śwsiebor", "Świeborz", "Śwsieborz", "Świeciech","Świecław", "Świesław", "Świedarg", "Świelub", "Świegniew", "Śwsiegniew", "Świemił", "Świemir", "Świerad", "Świrad","Świętobor", "Świętomir", "Świętopełk", "Świętopałk", "Świętopełek", "Świętosław", "Święcesław", "Święcsław", "Święsław", "Tasław","Tatomir", "Tatomier", "Tatumir", "Tęgomir", "Toligniew", "Tolisław", "Tomił", "Tomir", "Tomisław", "Tosław","Trzebiebor", "Trzebiegost", "Trzebiemir", "Trzebiemiar", "Trzebiemier", "Trzebiemysł", "Trzebomysł", "Trzebiesław", "Trzebisław", "Trzebor", "Trzebowit", "Twardomir", "Twardosław", "Twardostoj","Tworzymir", "Tworzysław", "Ubysław", "Unieboż", "Uniebog", "Uniedrog", "Uniegost", "Uniemir", "Unimir", "Uniemysł","Unierad", "Unirad", "Uniesław", "Unisław", "Uniewit", "Uściwoj", "Wacław", "Warcisław", "Warcsław", "Warsław","Wędziemir", "Wielebor", "Wielebyt", "Wieledrog", "Wielimir", "Wielisław", "Wielesław", "Wielsław", "Wiercisław", "Wiesław","Więcemił", "Więcemir", "Więcemiar", "Więcemier", "Więcmier", "Więcerad", "Więcesław", "Więcsław", "Więcław", "Więsław","Wilkomir", "Wirciżyr", "Wirzchosław", "Wisław", "Witomir", "Witomysł", "Witosław", "Witsław", "Wicsław", "Wicław","Witosz", "Władysław", "Włodzimierz", "Włodzimir", "Włodzisław", "Włocsław", "Włocław", "Włościbor", "Właścibor", "Włościbyt","Włościwoj", "Wojbor", "Wojciech", "Wociech", "Wojemił", "Wojmir", "Wojsław", "Wojesław", "Wojisław", "Wosław","Wolebor", "Wolimir", "Wolemir", "Wolmir", "Wolisław", "Wolrad", "Wrocisław", "Wrocsław", "Wrosław", "Wrociwoj","Wszebąd", "Wszebor", "Wszabor", "Wświebor", "Wszeborz", "Wszeciech", "Wszegniew", "Wszemił", "Wszemir", "Wszemiar","Wszemysł", "Wszerad", "Wszesiodł", "Wszesuł", "Wszetopełk", "Wysław", "Wyszebor", "Wyszabor", "Wyszemir", "Wyszesław","Wyszetrop", "Wyszomir", "Wyszymir", "Zadar", "Zamir", "Zawisza", "Zbigniew", "Zbygniew", "Zbyhniew", "Zbrosław","Zbylut", "Zbelut", "Zbysław", "Zbywoj", "Zdamir", "Zdawuj", "Zdzibor", "Zdziebor", "Zdziczest", "Zdziebąd","Zdziebud", "Zdziegod", "Zdzigod", "Zdziegrod", "Zdzigrod", "Zdziemił", "Zdzierad", "Zdziesuł", "Zdziewit", "Zdziewuj","Zdziwuj", "Zdzimir", "Zdziemir", "Zdzisław", "Zdziesław", "Zdzistryj", "Zdziwoj", "Ziemomysł", "Ziemowit", "Znamir","Zwnisław", "Żegota", "Żelibor", "Żelibrat", "Żeligniew", "Żelimysł", "Żelisław", "Żerosław"
		       ]
	    },
	    {
		column: "right",
		label: "Old Polish female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Bądzsława","Biedziesława","Biecsława","Biecława","Biezdziadka","Bogdała","Bogdana","Bogna", "Boguchwała","Bogufała","Bogudać","Bogudarz","Bogodarzf","Bogumiła","Bogmiła","Bogusława", "Boguwłość","Bogowłość","Boguwola","Bohuwola","Bolemira","Bolesława","Bosława","Bożeciecha", "Bożena","Bratumiła","Bratomiła","Bratmiła","Bronisława","Budzisława","Chwalimira","Chwalisława", "Ciechosława","Ciecirada","Ciesława","Cieszysława","Cirzpisława","Czcibora","Cibora","Czasława", "Czesława","Czębira","Częstobrona","Częstowojna","Dadzboga","Dalebora","Dalewuja","Damroka", "Dąbrówka","Dobiegniewa","Dobiesława","Dobosława","Dobrawa","Dobrogniewa","Dobromiła","Dobromira", "Dobroniega","Dobrosława","Dobrochna","Dobrosułka","Dobrowieść","Dobrowoja","Dobrożyźń","Domaczaja", "Domasława","Drogomira","Drogosława","Dziadumiła","Dziesława","Dzisława","Dzirżysława","Dziersława", "Dzirsława","Falisława","Gniewosądka","Godzimira","Godzisława","Gosława","Gościrada","Gościsława", "Grodzisława","Grzymisława","Grzymsława","Hubysława","Imisława","Izbygniewa","Janczysława","Jarogniewa", "Jaromira","Jarosława","Jerosława","Kazimiera","Krzesisława","Krzesława","Lechosława","Lesława", "Lubomira","Ludomiła","Ludmiła","Ludzimiła","Ludźmiła","Ludomira","Lutosława","Małomira", "Mieczysława","Milena","Miłosława","Miłochna","Mirogniewa","Mironiega","Mirosława","Modliboga", "Mojmira","Morzysława","Mszczuja","Mścigniewa","Mścisława","Myślibora","Naczęsława","Nadzieja", "Nasława","Nawoja","Nawojka","Niedomira","Niedamirz","Niegosława","Nieluba","Niemiła", "Nieradka","Niesiebądka","Niesiebudka","Niestanka","Pakosława","Pęcisława","Pęcsława","Pęcława", "Pęsława","Pękosława","Pężyrka","Przeborka","Przedsława","Przecsława","Przecława","Przesława", "Przemysława","Przezprawa","Przybycześć","Przybysława","Racisława","Racsława","Racława","Ratsława", "Recsława","Recława","Retsława","Rasława","Radomiła","Radosława","Radsława","Redsława", "Radochna","Radzisława","Rosława","Rościsława","Rzepicha","Samboja","Sędzisława","Siabora", "Szabora","Szebora","Sieciesława","Siecsława","Siecława","Siesława","Sięgniewa","Sirosława", "Sjęgniewa","Skarbimira","Sława","Sławobora","Sławomira","Smysława","Sobiesława","Stanisława", "Stojsława","Stoisława","Stronisława","Strzeżysława","Strzesława","Suligniewa","Sulisława","Ścibora", "Świebora","Świętomira","Świętosława","Święcsława","Święsława","Świętożyźń","Tolisława","Tomiła", "Tomira","Tomisława","Tosława","Trzebiesława","Trzebosława","Tworzysława","Ubysława","Uniesława", "Unisława","Wacława","Wielisława","Wieńczysława","Wiesława","Więcesława","Więcsława","Więcława", "Wirzchosława","Wisława","Witosława","Władysława","Włodzimira","Włościsława","Wojciecha","Wociecha", "Wojsława","Wojesława","Wolisława","Wrocisława","Wrocsława","Wszebora","Wszemiła","Wyszeniega", "Wyszesława","Wysława","Zbigniewa","Zbygniewa","Zbysława","Zdzisława","Zdziesława","Zwnisława", "Żelisława","Żyrborka","Żyrosława","Żywia"
		       ]
	    }
	]
    }


    
)
