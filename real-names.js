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
    {// index: 0
	label: "The First Group",
	nameSets: [
	    {// index: 0
		column: "left",
		label: "Celtic male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aed","Ahen","Aidan","Ailin","Alan","Albion","Alpin","Amargein","Anrai","Ardal","Art","Artur","Bairre","Barry","Banning","Beniamin","Benen","Bevan","Blair","Blathmac","Bowie","Bram","Bran","Brendan","Breanainn","Brian","Cahan","Carney","Carrick","Cass","Cathal","Cedric","Chad","Clancy","Cluny","Colin","Conall","Conan","Conchobhar","Conor","Connor","Conn","Conroy","Culley","Daire","Daniel","Daray","Darby","Darren","Derry","Devin","Dolan","Dolyn","Donnan","Donovan","Dow","Ea","Eadoin","Edan","Eoin","Erc","Erin","Evan","Fergal","Ferris","Finn","Finbar","Gaeth","Gordon","Guaire","Guy","Hagan","Ibor","Innis","Ionhar","Irving","Keary","Kearney","Keene","Kevin","Kiernan","Labraid","Labhraidh","Labhrás","Labras","Laurence","Laisrean","Larkin","Lawler","Lennan","Liam","Logan","Lorcan","Lunn","Lynch","Linch","MacDara","Macrea","MaelIosu","Maghnus","Mahon","Máirtín","Martin","Maitias","Mathias","Matthias","Maithias","Mannix","Mathghamhain","Meallan","Melvin","Malvin","Melvyn","Melwynn","Merril","Meryl","Merritt","Monahan","Morgan","Morven","Morvin","Murchadh","Murrough","Murphey","Murchach","Murray","Murry","Naomhan","Nevan","Neal","Neil","Nevin","Niece","Nolan","Oisin","Ossian","Oscar","Owain","Owen","Eoin","Ewen","Owney","Paddy","Padraig","Patraic","Peadar","Peter","Peadair","Piaras","Phelan","Piran","Proinnsias","Quigley","Quinlan","Quinn","Raegan","Rafer","Raghnall","Reginald","Reynald","Reynold","Randal","Randall","Réamonn","Renny","Raighne","Revelin","Rian","Ryan","Ryanne","Rhyan","Riddock","Riocárd","Riordan","Roarke","Rodhlann","Rowland","Rogan","Ruadhagan","Rowe","Rowen","Rowyn","Rowin","Rowan","Roibeárd","Robert","Roibart","Roibhilín","Rovelin","Roibin","Roibeard","Ravelin","Ravelyn","Revelin","Ronat","Rooney","Ruanaidh","Rhodan","Rory","Ruarc","Saoirse","Scanlon","Skanlun","Scully","Séafra","Seán","Seanán","Shannon","Senan","Sinon","Searbhreathach","Sedric","Seoirse","Seosamh","Shanahan","Shea","Sheehan","Siodhacha","Sheridan","Sierra","Sioda","Skelly","Sleibhin","Sloan","Somhairle","Sumerled","Summerled","Sommerly","Strahan","Sullivan","Sweeney","Tadhg","Teagan","Teague","Teagan","Tiernan","Tigernan","Torin","Tormey","Torrance","Treasach","Troy","Uaine","Owen","Owein","Oney","Owney","Hewney","Úistean","Vaughn","Wynne","Winn","Wynn","Arranz","Arthur","Arthyen","Bideven","Blyth","Branwalather","Cadan","Cador","Carantoc","Carrow","Colan","Collen","Conan","Cuilliok","Daveth","Elowen","Gerens","Glastenen","Glewas","Glewyas","Golvan","Gorlas","Gorlois","Gorneves","Hicca","Jacca","Jago","Jory","Jowan","Kitto","Madron","Madern","Margh","Masek","Mawgan","Meryn","Myghal","Nadelek","Nicca","Padern","Pasco","Pascow","Pawly","Peder","Sithny","Trevedic","Wella","Withell","Wyllow","Zethar","Abhainn","Acair","Achaius","Adair","Edgar","Adhamh","Aidan","Adie","Aeneas","Ahearn","Aherin","Hearn","Abeart","Ailean","Ailein","Aillig","Ail","Aindrea","Anndra","Ainsley","Alasdair","Alec","Aluinn","Amhuinn","Anndra","Aodh","Hugh","Artair","Artut","Balfour","Balloch","Balmoral","Banner","Bean","Birk","Blackburn","Blane","Bothan","Boyd","Braden","Braigh","Bret","Brian","Briant","Brion","Bryan","Bryant","Brodie","Busby","Bryce","Buchanan","Camden","Camdin","Camdan","Carey","Carney","Carr","Cathal","Ceard","Ceardach","Chalmers","Clamer","Charles","Chattan","Chait","Clach","Colin","Conan","Connor","Conon","Connell","Craig","Crannog","Cullen","Dabhaidh","Dallas","Darach","Deargh","Derek","Dirk","Derrick","Diarmad","Doire","Dhoire","Donnchadh","Dorrell","Douglas","Drummond","Duer","Duff","Dubh","Dunham","Dunlop","Eanruig","Ear","Edan","Eideard","Eilig","Eoghann","Eosaph","Erskine","Ervin","Evan","Ewan","Feandan","Fearghas","Firth","Frang","Gabhran","Gair","Gavin","Gawain","Gawen","Gaven","Gilchrist","Gilleabart","Gillis","Gleann","Goraidh","Gow","Gowan","Viking","Harailt","Hearn","Ahearn","Hugh","Iain","Ian","Innes","Iomhair","Ivar","Iver","Ivor","Keddy","Keir","Keith","Kendrew","Kentigern","Kincaid","Kinnon","Kirk","Laird","Leith","Leathan","Lennox","Leod","Logan","Lundy","Luthias","Lyall","Maolmuire","Mártainn","Mata","Morgan","Morven","Muir","Murdoch","Muirfinn","Murry","Nairn","Nathair","Naughton","Niall","Neil","Oidhche","Ossian","Peadair","Perth","Paol","Pony","Raghnall","Raibeart","Ranald","RobRoy","RobRuadh","Ronan","Rory","Roslin","Roy","Ryan","Scott","Scrymgeour","Simon","Somairhle","Struan","Sutherland","Tearlach","Todd","Tomas","Tormod","Tremaine","Tyree","Uilleam","Wallace","Wyndham"
		       ]
	    },
	    {// index: 1
		column: "right",
		label: "Celtic female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aggie", "Aignéis", "Una", "Aggie","Nesta", "Nessa", "Nessie", "Ailean", "Alana", "Aila", "Aileen", "Aili","Allie", "Alison", "Alice", "Akira", "Aline", "Allina", "Andra", "Andreana","Andrina", "Annis", "Artis", "Audrey", "Beathas", "Blair", "Blaire", "Bonnie","Bonny", "Bradana", "Brae", "Brenda", "Bridget", "Cadha", "Cairistiona", "Cameron","Catriona", "Ceit", "Ceidth", "Ceiteag", "Katie", "Claire", "Coleen", "Colina","Cullodena", "Dallas", "Daracha", "Davina", "Davonna", "Dava", "Deirdre", "Diorbhail","Ealasaid", "Eara", "Earie", "Edana", "Effie", "Eilidh", "Eiric", "Eirica","Erica", "Ericka", "Erika", "Erskina", "Fearchara", "Fenella", "Fia", "Fiona","Floraidh", "Gail", "Gara", "Gaira", "Gavina", "Gillian", "Jillian", "Glen","Grizel", "Grisel", "Grizzel", "Gunna", "Heather", "Innes", "Irvette", "Iseabail","Isabel", "Isobelle", "Isabel", "Isabelle", "Bel", "Bell", "Bella", "Belle","Ib", "Ibbie", "Isa", "Tibbie", "Jennifer", "Jinny", "Keita", "Keiti","Kelsi", "Kenna", "Kyla", "Lair", "Lara", "Laria", "Laurie", "Leslie","Lilas", "Maili", "Mairi", "Moire", "Mairead", "Maisie", "Malmuira", "Malvina","Marion", "Mae", "May", "Maureen", "Moira", "Muira", "Muire", "Murron","Muirrean", "Muireann", "Nairne", "Nairna", "Nathaira", "Nessa", "Nighean", "Oighrig","Payton", "Rhona", "Robena", "Robina", "Rowena", "Seasaidh", "Sheila", "Sile","Sileas", "Sima", "Siofra", "Siubhan", "Siusaidh", "Sorcha", "Struana", "Tira","Torra", "Vanora", "Wynda", "Aithne", "Aine", "Aoife", "Bairre", "Bevin","Bedelia", "Blair", "Blaire", "Blaithin", "Breena", "Brenda", "Brenna", "Brit","Cahan", "Caireann", "Cairenn", "Caitriona", "Cait", "Caitrin", "Triona", "Caitlin","Carrie", "Carry", "Dairine", "Dallas", "Damhnait", "Deirdre", "Derry", "Devin","Duana", "Dubhain", "Echna", "Edwina", "Eileen", "Ellen", "Eilis", "Eithne","Elatha", "Ena", "Erin", "Ernine", "Etain", "Fanny", "Feenat", "Finnsech","Grainne", "Gwendolyn", "Gwen", "Hilde", "Ida", "Isleen", "Julianne", "Kacey","Vasey", "Kassidy", "Kathleen", "Kate", "Kathie", "Katharine", "Keara", "Ceara","Keelin", "Keira", "Kerry", "Keriann", "Kelly", "Keva", "Kevina", "Kiara","Kiley", "Kylie", "Kinnat", "Laoise", "Lasair", "Lavena", "Liadan", "Maille","Molly", "Maire", "MaelMuire", "Moira", "Mairin", "Maureen", "Moira", "Maura","Mavelle", "Meara", "Mell", "Mella", "Melvina", "Meriel", "Morgan", "Muireann","Muirin", "Muirne", "Murphey", "Myrna", "Nan", "Nainsi", "Nevina", "Niamh","Nia", "Nya", "Noel", "Nora", "Norah", "Honora", "Orghlaith", "Orla","Orlaith", "Ornice", "Ornora", "Paili", "Pegeen", "Philomena", "Renny", "Rowena","Ryann", "Saraid", "Scathach", "Sean", "Shawn", "Sine", "Sheena", "Shana","Shunta", "Shawnda", "Shona", "Shay", "Seani", "Seara", "Shanley", "Shannon","Sile", "Sinead", "Siobhan", "Siofra", "Slaine", "Sorcha", "Suzanna", "Tara","Tiernan", "Treasa", "Trevina", "Tullia", "Ula", "Ursula", "Vanessa", "Vevina","Vivienne", "Whiltierna", "Faoiltiarna", "Yvon", "Yvonne", "Yvone", "Yvonn"
		       ]
	    },
	    {// index: 2
		column: "left",
		label: "Old Polish male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Barnim", "Bądzsław", "Bąsław", "Bdzigost", "Bedgost","Będzieciech", "Będzimir", "Będziemir", "Będziemirz", "Będomir", "Będzimysł", "Biecsław", "Biecław", "Biezdar", "Biezdziad","Biezpraw", "Brzezpraw", "Biezprzem", "Biezprzym", "Bezprym", "Biezstryj", "Biestryj", "Biezstryk", "Brzezstryk", "Brzestryk","Biezuj", "Biezwuj", "Biezrząd", "Blizbor", "Blizborz", "Bodzepor", "Bogdał", "Bogdaj", "Bogodał", "Bogdasz","Bogudan", "Bogodan", "Bogdan", "Bohdan", "Bodan", "Bogodar", "Bogudar", "Boguchwał", "Boguchał", "Bogufał","Bogofał", "Bogfał", "Bogchwał", "Bochwał", "Bofał", "Bogumił", "Bogomił", "Bogmił", "Bogomieł", "Bogumieł","Bogmieł", "Bogumysław", "Bogurad", "Bogured", "Bogusąd", "Bogusław", "Bogosław", "Bohusław", "Bogsław", "Bogwiedz","Bogwidza", "Bogowid", "Bolebor", "Boleczaj", "Boleczest", "Bolelut", "Bolemir", "Bolemysł", "Bolesław", "Bosław","Borzuj", "Borzywuj", "Borzygniew", "Borzgniew", "Borzymir", "Borzysław", "Borzywoj", "Borzuj", "Bożebor", "Bożeciech","Bożciech", "Bożydar", "Bożdar", "Bożysław", "Bracsław", "Bratomir", "Bratumił", "Bratomił", "Bratmił", "Bretomił","Bretmił", "Braturad", "Brodzisław", "Brocsław", "Barcsław", "Barcław", "Bronimir", "Bromir", "Bronisąd", "Bronisław","Bronsław", "Barnisław", "Brunisław", "Brosław", "Brzezdob", "Brzezdoma", "Budziboj", "Bojan", "Budzigniew", "Budzimir","Budzisław", "Budzsław", "Budziwoj", "Budźwoj", "Budziwuj", "Bygost", "Bytomir", "Chociebąd", "Chociebor", "Chociemir","Chocimier", "Chocimir", "Chocimirz", "Chociesław", "Chocsław", "Choroman", "Chwalibog", "Chwalimir", "Chalimir", "Chwalisław","Chalisław", "Ciechomir", "Ciechosław", "Ciecierad", "Ciecirad", "Cieciered", "Cieciurad", "Ciećrad", "Ciecimiar", "Cierpisław","Ciesław", "Cieszybor", "Cieszbor", "Cieszygor", "Cieszymir", "Cieszymiar", "Cieszymier", "Cieszmir", "Cieszmiar", "Cieszmier","Cieszymysł", "Cieszyrad", "Cieszysław", "Cirzpibog", "Czabor", "Czcirad", "Czcisław", "Cisław", "Czedrog", "Czesław","Czasław", "Czębor", "Częstobor", "Częsbor", "Częstogoj", "Częstomir", "Częstowoj", "Czścibor", "Czcibor", "Cibor","Czesbor", "Dadzbog", "Dalebor", "Dalibor", "Dalbor", "Daleborz", "Dalegor", "Dalemir", "Dalimir", "Dalemiar","Dalimiar", "Dalestryj", "Dalewin", "Dalwin", "Dargorad", "Derwan", "Długomił", "Dobiegniew", "Dobielut", "Dobiemiest","Dobiemir", "Dobiemiar", "Dobiemier", "Dobimir", "Dobiesław", "Dobosław", "Dobrobąd", "Dobrociech", "Dobrogost", "Dobrogoszcz","Dobromił", "Dobromir", "Dobromier", "Dobromysł", "Dobromysław", "Dobronieg", "Dobrosiodł", "Dobrosław", "Dobrowit", "Dobrowoj","Dobrutro", "Dobrzegniew", "Domaborz", "Domabor", "Domagniew", "Domamir", "Domiemir", "Domarad", "Domorad", "Domared","Domaradz", "Domasław", "Domosław", "Domastoj", "Domastryj", "Domasuł", "Domawuj", "Domauj", "Domażyr", "Drogodziej","Drogomił", "Dromił", "Drogomir", "Drogmir", "Dragomir", "Drahomir", "Drohomir", "Dargomier", "Drogomysł", "Drogoradz","Drogosław", "Dargosław", "Drogowit", "Drohobysz", "Drahobysz", "Dziebor", "Dzierżykraj", "Dzirżykraj", "Dzierżysław", "Dzirżysław","Dziersław", "Dzirsław", "Dziesław", "Dzisław", "Dzirżyterg", "Dzirżywuj", "Dziwigor", "Dziwisław", "Falibog", "Falibor","Falimir", "Falimirz", "Falisław", "Gardomir", "Gnierat", "Gniewomir", "Gniewomiar", "Gniewomier", "Gniemir", "Gniewosz","Godzimir", "Godzisław", "Godosław", "Godzsław", "Gocław", "Gorazd", "Gorzysław", "Gorsław", "Gosław", "Gostmił","Gostomysł", "Gościmir", "Gościmiar", "Gościrad", "Gościsław", "Gościwid", "Gościwit", "Gościwuj", "Grodzisław", "Grodzsław","Gromisław", "Grzymisław", "Grzymosław", "Grzymsław", "Grzmisław", "Grzysław", "Himisław", "Hodysław", "Hubysław", "Huniemir","Huniesław", "Imisław", "Izasław", "Izbor", "Izbygniew", "Izbylut", "Izbelut", "Jaczemir", "Jaczewoj", "Janisław","Jarogniew", "Jerogniew", "Jaromir", "Jaromiar", "Jeromiar", "Jeromier", "Jaropełk", "Jarosław", "Jerosław", "Jirosław","Jarostryj", "Jimisław", "Juniesław", "Jutrogost", "Jutrowoj", "Jutrowuj", "Kanimir", "Kanimier", "Kajmir", "Kalmir","Kanmił", "Kazimierz", "Kazimir", "Kazimirz", "Kazimiar", "Kazimier", "Kaźmir", "Kociebor", "Kociemir", "Kociemiar","Kociemier", "Kocimiar", "Kocimier", "Kocimir", "Koćmir", "Krzesąd", "Krzesimir", "Krzesisław", "Krzecsław", "Krzesław","Krzysław", "Krzywosąd", "Kwalimir", "Kwalisław", "Laliczaj", "Lasota", "Lech", "Lechosław", "Lederg", "Lelistryj","Lesław", "Leszek", "Lubgost", "Lubodrog", "Lubomir", "Lubomirz", "Lubomysł", "Luboradz", "Lubowid", "Ludomił","Ludmił", "Ludomir", "Ludomer", "Ludmar", "Ludosław", "Ludziwoj", "Lutobor", "Litobor", "Lutogniew", "Lutomir","Lutomiar", "Lutmiar", "Lutomysł", "Lutosław", "Lutsław", "Lucsław", "Łękomir", "Małobąd", "Małogost", "Małomir","Małostryj", "Małostryk", "Małowid", "Małowuj", "Manomir", "Markusław", "Masław", "Mezamir", "Męcimir", "Męcisław","Męcsław", "Męsław", "Miecisław", "Miecsław", "Miesław", "Mieczysław", "Miestwin", "Mieszko", "Miłobąd", "Miłobor","Miłobrat", "Miłochat", "Miłoczat", "Miłodrog", "Miłodziad", "Miłogost", "Miłgost", "Miłorad", "Miłosław", "Miełosław","Miłostryj", "Miłosz", "Miłowit", "Miłwit", "Miłowuj", "Minigniew", "Minogniew", "Mirogod", "Mirogniew", "Mironieg","Mirosław", "Misław", "Modlibog", "Modliboż", "Mojmir", "Mojsław", "Morzysław", "Mroczysław", "Mroczesław", "Mroczsław","Mrocsław", "Mrocław", "Mrosław", "Mszczuj", "Mścibor", "Mścigniew", "Mścisław", "Mściwoj", "Mszczujwoj", "Mściwuj","Mysław", "Myślibor", "Myślidar", "Myślimir", "Naczęmir", "Naczęmiar", "Naczęmier", "Naczęrad", "Naczęsław", "Nacsław","Nacław", "Naczęwoj", "Naczęwuj", "Nadar", "Nadbor", "Nadmir", "Nagod", "Namir", "Namysław", "Nasiębąd","Nasiębud", "Nasiębor", "Nasięgniew", "Nasław", "Nawoj", "Nawuj", "Nażyr", "Niebor", "Niecisław", "Niebylec","Niedabył", "Niedabysz", "Niedalic", "Niedał", "Niedan", "Niedaniec", "Niedoma", "Niedamir", "Niedomysł", "Niegodoma","Niegosław", "Niegowoj", "Niegrod", "Nielubiec", "Niemir", "Niemierz", "Niemironieg", "Niemoj", "Niemst", "Niemsta","Niemszczon", "Nienach", "Niepełka", "Nieprosz", "Nieprasz", "Nieproch", "Nieprzebąd", "Nieprzebud", "Nieprzebysz", "Nierad","Niered", "Nierod", "Niesąd", "Niesiebąd", "Niesiebud", "Niesiebor", "Niesiodł", "Niestek", "Niestoj", "Niesuł","Nietęg", "Nietubył", "Niewsza", "Niezamysł", "Nieznamir", "Nieznawuj", "Ninogniew", "Ninomysł", "Nowosiodł", "Objęsław","Ocięsław", "Odolan", "Okrzesław", "Osiębor", "Osięgniew", "Ostrobod", "Ostrogniew", "Ostrowod", "Pakosław", "Pełczybog","Pęcisław", "Pęcsław", "Pęcław", "Pęsław", "Pękosław", "Pomir", "Pomścibor", "Poznan", "Poznomir", "Prosimir","Przebąd", "Przebor", "Przedabog", "Przedbor", "Przedwor", "Przedmir", "Przezmir", "Przedpełk", "Przedpołk", "Przedsław","Przecsław", "Przecław", "Przesław", "Przedwoj", "Przedwuj", "Przemęt", "Przemił", "Przemieł", "Przemir", "Przemysł","Przemysław", "Przemyślibor", "Przezdoma", "Przezdziad", "Przezpraw", "Przezprzem", "Przyboj", "Przybor", "Przybygniew", "Przybylut","Przybymir", "Przybyrad", "Przybysław", "Przybywoj", "Przybywuj", "Przysnobor", "Przywit", "Racibor", "Raciborz", "Recibor","Racigniew", "Racimir", "Racimiar", "Racisław", "Racsław", "Racław", "Ratsław", "Recsław", "Recław", "Retsław","Resław", "Rasław", "Radociech", "Radogost", "Radomił", "Radomir", "Radomiar", "Radmir", "Radosław", "Redosław","Radsław", "Redsław", "Radosz", "Radost", "Radowit", "Radowuj", "Radsuł", "Radzim", "Rodomił", "Rodomieł","Rodsław", "Rocsław", "Rocław", "Rosław", "Rościgniew", "Rościsław", "Rzędzimir", "Rzędzisław", "Rzędziwoj", "Sambor","Szenbor", "Samogost", "Samosąd", "Sęczygniew", "Sędowin", "Sędzimir", "Sędomir", "Sędzisław", "Sędosław", "Sędziwoj","Sędowoj", "Sędźwoj", "Sudywoj", "Sędziwuj", "Siebąd", "Siebor", "Siabor", "Szabor", "Szebor", "Sieciebor","Sietbor", "Sieciech", "Sieciesław", "Siecsław", "Siecław", "Siesław", "Siedlewit", "Siemidrog", "Siemierz", "Siemił","Siemimił", "Siemmił", "Siemimysł", "Siemomysł", "Siemomysław", "Siemir", "Siemar", "Siemirad", "Siemisław", "Siemosław","Siemoradz", "Siemowit", "Siepraw", "Siestrzemił", "Siestrzewit", "Sięgniew", "Siężyr", "Sężyr", "Sirosław", "Sierosław","Sjęgniew", "Skarbimir", "Skarbimirz", "Skardmir", "Skamir", "Skarbisław", "Skaziczest", "Sławobor", "Sławociech", "Sławciech","Sławomir", "Sławomiar", "Sławosław", "Smysław", "Snowid", "Sobiebor", "Sobiemir", "Sobiemysł", "Sobierad", "Sobiesąd","Sobiesław", "Sobieżyr", "Spycigniew", "Spycimir", "Spyćmier", "Spyćmir", "Spyćmierz", "Spycisław", "Stanibor", "Stanimir","Stanisław", "Stasław", "Stojgniew", "Stoigniew", "Stogniew", "Stojsław", "Stoisław", "Stosław", "Tosław", "Stomir","Strachomir", "Strogobor", "Strogomir", "Stronisław", "Strosław", "Strzebor", "Strzedziwoj", "Strzeżymir", "Strzeżysław", "Strzedzsław", "Strzecsław", "Strzecław", "Strzesław", "Sulibor","Sulibrat", "Sulidziad", "Suligost", "Sulimir", "Sulimiar", "Sulmir", "Sulirad", "Sulisław", "Solisław", "Sulistryj","Suliwuj", "Swojsław", "Swosław", "Ścibor", "Świebąd", "Świebor", "Śwsiebor", "Świeborz", "Śwsieborz", "Świeciech","Świecław", "Świesław", "Świedarg", "Świelub", "Świegniew", "Śwsiegniew", "Świemił", "Świemir", "Świerad", "Świrad","Świętobor", "Świętomir", "Świętopełk", "Świętopałk", "Świętopełek", "Świętosław", "Święcesław", "Święcsław", "Święsław", "Tasław","Tatomir", "Tatomier", "Tatumir", "Tęgomir", "Toligniew", "Tolisław", "Tomił", "Tomir", "Tomisław", "Tosław","Trzebiebor", "Trzebiegost", "Trzebiemir", "Trzebiemiar", "Trzebiemier", "Trzebiemysł", "Trzebomysł", "Trzebiesław", "Trzebisław", "Trzebor", "Trzebowit", "Twardomir", "Twardosław", "Twardostoj","Tworzymir", "Tworzysław", "Ubysław", "Unieboż", "Uniebog", "Uniedrog", "Uniegost", "Uniemir", "Unimir", "Uniemysł","Unierad", "Unirad", "Uniesław", "Unisław", "Uniewit", "Uściwoj", "Wacław", "Warcisław", "Warcsław", "Warsław","Wędziemir", "Wielebor", "Wielebyt", "Wieledrog", "Wielimir", "Wielisław", "Wielesław", "Wielsław", "Wiercisław", "Wiesław","Więcemił", "Więcemir", "Więcemiar", "Więcemier", "Więcmier", "Więcerad", "Więcesław", "Więcsław", "Więcław", "Więsław","Wilkomir", "Wirciżyr", "Wirzchosław", "Wisław", "Witomir", "Witomysł", "Witosław", "Witsław", "Wicsław", "Wicław","Witosz", "Władysław", "Włodzimierz", "Włodzimir", "Włodzisław", "Włocsław", "Włocław", "Włościbor", "Właścibor", "Włościbyt","Włościwoj", "Wojbor", "Wojciech", "Wociech", "Wojemił", "Wojmir", "Wojsław", "Wojesław", "Wojisław", "Wosław","Wolebor", "Wolimir", "Wolemir", "Wolmir", "Wolisław", "Wolrad", "Wrocisław", "Wrocsław", "Wrosław", "Wrociwoj","Wszebąd", "Wszebor", "Wszabor", "Wświebor", "Wszeborz", "Wszeciech", "Wszegniew", "Wszemił", "Wszemir", "Wszemiar","Wszemysł", "Wszerad", "Wszesiodł", "Wszesuł", "Wszetopełk", "Wysław", "Wyszebor", "Wyszabor", "Wyszemir", "Wyszesław","Wyszetrop", "Wyszomir", "Wyszymir", "Zadar", "Zamir", "Zawisza", "Zbigniew", "Zbygniew", "Zbyhniew", "Zbrosław","Zbylut", "Zbelut", "Zbysław", "Zbywoj", "Zdamir", "Zdawuj", "Zdzibor", "Zdziebor", "Zdziczest", "Zdziebąd","Zdziebud", "Zdziegod", "Zdzigod", "Zdziegrod", "Zdzigrod", "Zdziemił", "Zdzierad", "Zdziesuł", "Zdziewit", "Zdziewuj","Zdziwuj", "Zdzimir", "Zdziemir", "Zdzisław", "Zdziesław", "Zdzistryj", "Zdziwoj", "Ziemomysł", "Ziemowit", "Znamir","Zwnisław", "Żegota", "Żelibor", "Żelibrat", "Żeligniew", "Żelimysł", "Żelisław", "Żerosław"
		       ]
	    },
	    {// index: 3
		column: "right",
		label: "Old Polish female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Bądzsława","Biedziesława","Biecsława","Biecława","Biezdziadka","Bogdała","Bogdana","Bogna", "Boguchwała","Bogufała","Bogudać","Bogudarz","Bogodarzf","Bogumiła","Bogmiła","Bogusława", "Boguwłość","Bogowłość","Boguwola","Bohuwola","Bolemira","Bolesława","Bosława","Bożeciecha", "Bożena","Bratumiła","Bratomiła","Bratmiła","Bronisława","Budzisława","Chwalimira","Chwalisława", "Ciechosława","Ciecirada","Ciesława","Cieszysława","Cirzpisława","Czcibora","Cibora","Czasława", "Czesława","Czębira","Częstobrona","Częstowojna","Dadzboga","Dalebora","Dalewuja","Damroka", "Dąbrówka","Dobiegniewa","Dobiesława","Dobosława","Dobrawa","Dobrogniewa","Dobromiła","Dobromira", "Dobroniega","Dobrosława","Dobrochna","Dobrosułka","Dobrowieść","Dobrowoja","Dobrożyźń","Domaczaja", "Domasława","Drogomira","Drogosława","Dziadumiła","Dziesława","Dzisława","Dzirżysława","Dziersława", "Dzirsława","Falisława","Gniewosądka","Godzimira","Godzisława","Gosława","Gościrada","Gościsława", "Grodzisława","Grzymisława","Grzymsława","Hubysława","Imisława","Izbygniewa","Janczysława","Jarogniewa", "Jaromira","Jarosława","Jerosława","Kazimiera","Krzesisława","Krzesława","Lechosława","Lesława", "Lubomira","Ludomiła","Ludmiła","Ludzimiła","Ludźmiła","Ludomira","Lutosława","Małomira", "Mieczysława","Milena","Miłosława","Miłochna","Mirogniewa","Mironiega","Mirosława","Modliboga", "Mojmira","Morzysława","Mszczuja","Mścigniewa","Mścisława","Myślibora","Naczęsława","Nadzieja", "Nasława","Nawoja","Nawojka","Niedomira","Niedamirz","Niegosława","Nieluba","Niemiła", "Nieradka","Niesiebądka","Niesiebudka","Niestanka","Pakosława","Pęcisława","Pęcsława","Pęcława", "Pęsława","Pękosława","Pężyrka","Przeborka","Przedsława","Przecsława","Przecława","Przesława", "Przemysława","Przezprawa","Przybycześć","Przybysława","Racisława","Racsława","Racława","Ratsława", "Recsława","Recława","Retsława","Rasława","Radomiła","Radosława","Radsława","Redsława", "Radochna","Radzisława","Rosława","Rościsława","Rzepicha","Samboja","Sędzisława","Siabora", "Szabora","Szebora","Sieciesława","Siecsława","Siecława","Siesława","Sięgniewa","Sirosława", "Sjęgniewa","Skarbimira","Sława","Sławobora","Sławomira","Smysława","Sobiesława","Stanisława", "Stojsława","Stoisława","Stronisława","Strzeżysława","Strzesława","Suligniewa","Sulisława","Ścibora", "Świebora","Świętomira","Świętosława","Święcsława","Święsława","Świętożyźń","Tolisława","Tomiła", "Tomira","Tomisława","Tosława","Trzebiesława","Trzebosława","Tworzysława","Ubysława","Uniesława", "Unisława","Wacława","Wielisława","Wieńczysława","Wiesława","Więcesława","Więcsława","Więcława", "Wirzchosława","Wisława","Witosława","Władysława","Włodzimira","Włościsława","Wojciecha","Wociecha", "Wojsława","Wojesława","Wolisława","Wrocisława","Wrocsława","Wszebora","Wszemiła","Wyszeniega", "Wyszesława","Wysława","Zbigniewa","Zbygniewa","Zbysława","Zdzisława","Zdziesława","Zwnisława", "Żelisława","Żyrborka","Żyrosława","Żywia"
		       ]
	    }
	]
    },

    {// index: 1
	label: "The Second Group",
	nameSets: [
	    {// index: 0
		column: "left",
		label: "Angels",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Agrat","Arariel","Ariel","Azazel","Camael","Cassiel","Dumah","Eisheth", "Elioud","Ezekiel","Gabriel","Hadraniel","Haniel","Hashmal","Jehoel","Jerahmeel", "Jophiel","Lailah","Michael","Naamah","Nuriel","Ouza","Pravuil","Raphael", "Raziel","Sachiel","Samael","Sandalphon","Sariel","Seraph","Tzaphqiel","Uriel", "Yahoel","Aamon","Asmodeus","Astaroth","Azazel","Baal","Bagdana","Belial", "Eisheth","Lilin","Lilith","Mastema","Moloch","Naamah","Samael","Shedim", "Tannin","Azrael","Dardail","Gabriel","Hafaza","Harut","Marut","Israfil", "Kiraman","Katibin","Maalik","Munkar","Raphael","Ridwan","Abaddon","Abathar", "Muzania","Adriel","Ahriman","Ambriel","Amesha","Spenta","Arariel","Azazel", "Azrael","Barachiel","Bene","Elohim","Balthazar","Cassiel","Camael","Daniel", "Eremiel","Gabriel","Gadreel","Gagiel","Hadraniel","Haniel","Harut","Hashmal", "Hesediel","Zadkiel","Hamalat","Israfil","Israfel","Raphael","Jegudiel","Jehoel", "Jequn","Jerahmeel","Jophiel","Kasdeja","Kerubiel","Kiraman","Katibin","Kushiel", "Leliel","Lucifer","Maalik","Malik ","Marut ","Metatron","Michael","Mikhail ", "Moroni","Munkar ","Muaqqibat ","Muriel ","Maleeha","Nakir ","Nuriel","Ophan", "Ophanim","Orifiel","Pahaliah ","Paul ","Penemue","Puriel","Peter","Qaphsiel", "Raguel","Azraiel","Raphael","Israfel","Raqib","Raziel","Remiel","Sachiel", "Samael","Sandalphon","Sariel","Selaphiel ","Seraph","Seraphim","Seraphiel","Simiel ", "Shamsiel","Tzaphqiel","Temeluchus","Uriel","Uzziel","Virtues","Zabaniyah","Zachariel", "Zadkiel","Zephon","Zaphkiel","Zophiel"
		       ]
	    }
	]
    },

    {// index: 2
	label: "The Third Group",
	nameSets: [
	    {// index: 0
		column: "left",
		label: "Polish children male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Antek", "Kubuś", "Jasio", "Kacperek", "Wojtuś", "Adaś", "Staś", "Alan", "Franek", "Marcelek"
		       ]
	    },

	    {// index: 1
		column: "right",
		label: "Polish children female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Ala", "Ola", "Ela", "Ula", "Lena", "Pola", "Liliana", "Zuzia", "Hania", "Zosia"
		       ]
	    }

	]
    },

    {// index: 3
	label: "The Forth Group",
	nameSets: [
	    {// index: 0
		column: "left",
		label: "Polish animals male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Burek", "Ares", "Maks", "Azor", "Hektor", "Cezar", "Reksio", "Nero"
		       ]
	    },

	    {// index: 1
		column: "right",
		label: "Polish animals female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Sonia", "Diana", "Nuka", "Roksi", "Saba", "Sara", "Tina"
		       ]
	    }

	]
    },
    
)
