// Рути од Скопје (SKP). Типови: f = директен лет, c = со прекачување, b = автобус. Цените се индикативни (демо).
const ROWS=`Istanbul|Истанбул|Türkiye|istanbul|f|IST|TK|1234567|75
Izmir|Измир|Türkiye||f|ADB|PC|1357|85
Antalya|Анталија|Türkiye||f|AYT|PC|2467|95
Vienna|Виена|Austria||f|VIE|OS|1234567|90
Athens|Атина|Greece||f|ATH|A3|1234567|75
Zagreb|Загреб|Croatia||f|ZAG|OU|1357|95
Belgrade|Белград|Serbia|belgrade|f|BEG|JU|2456|85
Zurich|Цирих|Switzerland||f|ZRH|LX|1234567|115
Basel|Базел|Switzerland||f|BSL|W6|1357|55
Geneva|Женева|Switzerland||f|GVA|U2|1467|85
Frankfurt|Франкфурт|Germany||f|FRA|LH|1234567|90
Berlin|Берлин|Germany||f|BER|W6|2467|55
Hamburg|Хамбург|Germany||f|HAM|W6|35|55
Dortmund|Дортмунд|Germany||f|DTM|W6|1357|50
Cologne|Келн|Germany||f|CGN|W6|246|55
Nuremberg|Нирнберг|Germany||f|NUE|W6|37|50
Stuttgart|Штутгарт|Germany||f|STR|W6|25|60
Memmingen|Мемингем|Germany||f|FMM|W6|146|50
Rome|Рим|Italy|rome|f|FCO|W6|1234567|60
Milan|Милано|Italy||f|MXP|W6|1357|55
Venice|Венеција|Italy||f|VCE|W6|246|50
Bologna|Болоња|Italy||f|BLQ|W6|37|55
Bari|Бари|Italy||f|BRI|W6|25|55
Barcelona|Барселона|Spain||f|BCN|W6|1357|75
Madrid|Мадрид|Spain||f|MAD|W6|2467|85
Paris|Париз|France||f|ORY|U2|36|75
Lyon|Лион|France||f|LYS|W6|47|70
London|Лондон|UK||f|LTN|W6|1357|60
Brussels|Брисел|Belgium||f|CRL|W6|246|60
Eindhoven|Ајндховен|Netherlands||f|EIN|W6|25|55
Warsaw|Варшава|Poland||f|WAW|LO|1234567|75
Prague|Прага|Czechia|prague|f|PRG|W6|36|75
Bratislava|Братислава|Slovakia|bratislava|f|BTS|W6|147|55
Ljubljana|Љубљана|Slovenia||f|LJU|W6|25|60
Malta|Малта|Malta||f|MLA|W6|36|70
Larnaca|Ларнака|Cyprus||f|LCA|W6|47|95
Stockholm|Стокхолм|Sweden||f|ARN|W6|2567|75
Gothenburg|Гетеборг|Sweden||f|GOT|W6|36|65
Malmö|Малме|Sweden||f|MMX|W6|147|60
Santorini|Санторини|Greece|santorini|c|JTR|||140|Athens
Mykonos|Миконос|Greece||c|JMK|||150|Athens
Corfu|Крф|Greece||c|CFU|||150|Athens
Dubrovnik|Дубровник|Croatia||c|DBV|||140|Zagreb
Split|Сплит|Croatia||c|SPU|||140|Zagreb
Budapest|Будимпешта|Hungary|budapest|c|BUD|||125|Vienna
Munich|Минхен|Germany||c|MUC|||120|Vienna
Amsterdam|Амстердам|Netherlands||c|AMS|||135|Vienna
Lisbon|Лисабон|Portugal||c|LIS|||160|Madrid
Florence|Фиренца|Italy||c|FLR|||110|Rome
Nice|Ница|France||c|NCE|||140|Paris
Dubai|Дубаи|UAE||c|DXB|||290|Istanbul
Cairo|Каиро|Egypt||c|CAI|||230|Istanbul
Bucharest|Букурешт|Romania||c|OTP|||130|Vienna
Sarajevo|Сараево|Bosnia||c|SJJ|||120|Belgrade
Ohrid|Охрид|North Macedonia|ohrid|b||||12|
Bitola|Битола|North Macedonia||b||||10|
Thessaloniki|Солун|Greece||b||||25|
Sofia|Софија|Bulgaria||b||||22|
Tirana|Тирана|Albania||b||||30|`;
const CITIES=ROWS.split("\n").map(r=>{const a=r.split("|");return{en:a[0],mk:a[1],c:a[2],k:a[3],t:a[4],code:a[5],air:a[6],days:a[7]||"1234567",p:+a[8],via:a[9]}});
const AL={TK:"Turkish Airlines",PC:"Pegasus",OS:"Austrian",A3:"Aegean",OU:"Croatia Airlines",JU:"Air Serbia",LX:"Swiss",W6:"Wizz Air",U2:"easyJet",LH:"Lufthansa",LO:"LOT"};
const HT={Switzerland:150,UK:120,France:110,Netherlands:110,Sweden:105,Austria:95,Italy:90,Spain:85,Germany:85,Belgium:85,Greece:80,UAE:110,Egypt:45,"Türkiye":55,Croatia:80,Czechia:70,Poland:65,Slovakia:60,Slovenia:75,Malta:90,Cyprus:85,Portugal:85,Hungary:65,Romania:50,Bosnia:45,Serbia:55,Bulgaria:45,Albania:45,"North Macedonia":40};
const MF=[.85,.85,.95,1.05,1.05,1.2,1.4,1.4,1.1,1,.9,1.3];
