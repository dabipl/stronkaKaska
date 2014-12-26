(function() {
  var app = angular.module('gemStore', ['ngRoute']);

  app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "StoreController"})        
    //derma
    .when("/UrodaTwarzy", {templateUrl: "partials/UrodaTwarzy.html", controller: "StoreController"})
    .when("/UrodaCiala", {templateUrl: "partials/UrodaCiala.html", controller: "StoreController"})
    .when("/PeelingiMedyczne", {templateUrl: "partials/PeelingiMedyczne.html", controller: "StoreController"})
    .when("/MedycynaEstetyczna", {templateUrl: "partials/MedycynaEstetyczna.html", controller: "MedEstController"})
    .when("/Cennik", {templateUrl: "partials/Cennik.html", controller: "StoreController"})
	.when("/test", {templateUrl: "partials/test.html", controller: "test"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})	
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "StoreController"});
}]);

  app.controller('StoreController', function() {
    $('.carousel').carousel({
      interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
      selector: "a[data-toggle=tooltip]"
    })
  });

  app.controller('MedEstController', function($scope,$http) {
    //usunac komentarze jutro
    this.treatments = treatmentsCollection2;			
	
    $('.carousel').carousel({
      interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
      selector: "a[data-toggle=tooltip]"
    });
	
  });
  
  app.factory('myService', function($http) {
	  var promise;
	  var myService = {
		async: function() {
		  if ( !promise ) {
			// $http returns a promise, which has a then function, which also returns a promise
			promise = $http.get('/data/MedEst.json').then(function (response) {
			  // The then function here is an opportunity to modify the response
			  console.log(response);
			  // The return value gets picked up by the then in the controller.
			  return response.data;
			});
		  }
		  // Return the promise to the controller
		  return promise;
		}
	  };
	  return myService;
	});	
		

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var treatmentsCollection = [
    {
      name: 'Mezoterapia Mikroigłowa',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: "Lifting bez skalpela. Jest to połączenie technologii medycznej i kosmetycznej dla tego możemy zaproponowań Państwu innowacyjny zabieg pozwalający na niezwykle skuteczną walkę z efektami starzenia się skóry. Mezoterapia mikroigłowa Power Lift to nie tylko zwykła pielęgnacja, lecz dogłębne poprawienie jakości skóry. Zaletą tych rozwiązań jest natychmiastowa efektywność idąca w parze z brakiem przeciwwskazań oraz bardzo szybkim powrotem pacjenta po zabiegu do aktywnego życia. Zabieg jest bezbolesny, nie wymaga znieczulenia miejscowego naskórka. Można się pokusić o stwierdzenie, iż efekty systematycznego korzystania z zabiegów są porównywalne do „ liftingu”, ale bez operacji.",
      effects: [
        "Redukcja zmarszczek mimicznych i statycznych",
        "Poprawa owalu twarzy",
        "Polepszenie jędrności i elastyczności skóry",
        "Stymulacja produkcji kolagenu i elastyny",
        "Poprawa kolorytu skóry",
        "Regeneracja skóry własnym podziałem komórkowym",
        "Intensywna, ale ściśle kontrolowana stymulacja naskórka",
        "Natychmiastowy i optymalny transport składników aktywnych",
        "Reaktywacja wszystkich funkcji skóry",
      ],
      injuctions: [
        "Trądzik",
        "Zmarszczki mimiczne i statyczne",
        "Skóra gruba, pokryta bliznami",
        "Słaba tkanka łączna",
        "Skóra zniszczona nadmiernym opalaniem",
        "Skóra cienka, mało elastyczna"
      ],
      contraindications: [
        "brodawki",
        "występowanie opryszczki",
        "aktywny zapalny trądzik",
        "ciąża"
      ],
      types:[
        {
          name:"Zabieg podstawowy",
          steps:[
            {
              name:"Demakijaż",
              step:"twarzy, szyi i dekoltu"
              },
            {
              name:"Power Peel",
              step:"rozpuszczenie zewnętrznej partii naskórka 10% stężeniem kwasów"
              },
            {
              name:"Stymulacja mikroigłami",
              step:"660 tys. Kanalików w 10 minutowym cyklu pracy"
              },
            {
              name:"Power Hialuron",
              step:"manualne wprowadzenie hialuronu natychmiastowo absorbowanego w głębokie warstwy skóry, który dostarcza i wiąże wilgoć w skórze, dzięki funkcjom wypełniającym spłyca linię zmarszczek i napina skórę"
              },
          ]
        },
        {
          name:"Zabieg Lux intensywny",
          steps:[
            {
              name:"Demakijaż",
              step:"twarzy, szyi i dekoltu"
              },
            {
              name:"Power Peel",
              step:"rozpuszczenie zewnętrznej partii naskórka 10% stężeniem kwasów"
              },
            {
              name:"Stymulacja mikroigłami",
              step:"660 tys. Kanalików w 10 minutowym cyklu pracy"
              },
            {
              name:"Power Hialuron",
              step:"manualne wprowadzenie hialuronu natychmiastowo absorbowanego w głębokie warstwy skóry, który dostarcza i wiąże wilgoć w skórze, dzięki funkcjom wypełniającym spłyca linię zmarszczek i napina skórę"
              },
            {
              name:"Power lift",
              step:"nakłucie linowe zmarszczek i wypełnienie Argireliną, który wypłyca linię zmarszczek"
              },
            {
              name:"Power lift",
              step:"nakłucie linowe zmarszczek i wypełnienie Argireliną, który wypłyca linię zmarszczek"
              }
          ]
        }
      ],
      afterTreatments:[
      "maska hydrożelowa- na bazie hialuronu i wyciągu z alg z kompleksem odbudowy tkanki",
      "maska stretch – na bazie witamin i minerałów z wyciągiem hialuronu"
      ],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Mezoterapia Bezigłowa',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: "Bezigłowa Mezoterapia to nowoczesna metoda ułatwiająca wchłanianie kosmetyków przez skórę. Aparat emituje fale radiowe, czyli specjalny rodzaj fali elektromagnetycznej. Impuls taki powoduje zmianę przepuszczalności bariery ochronnej naskórka, a także samej błony komórkowej otaczającej komórki skóry i tkanki podskórnej. Jest to reakcja odwracalna, przejściowa, ale dzięki niej poprawia się wchłanianie zarówno do wnętrza skóry jak i do samego wnętrza komórek, co w wielu sytuacjach ma podstawowe znaczenie.",
      effects: [
        "Regeneracja skóry oraz poprawa jej struktury",
        "Poprawa jędrności i kolorytu skóry",
        "Redukcja drobnych zmarszczek,",
        "Podniesienie owalu twarzy",
        "Doskonałe nawilżenie i rewitalizacja skóry"
      ],
      injuctions: [],
      contraindications: [
        "uczulenie i nadwrażliwość na prąd galwaniczny",
        "nowotwory",
        "ciąża",
        "gorączka",
        "infekcje skórne w obrębie wykonywanego zabiegu,",
        "dermatozy",
        "epilepsja",
        "świeża ekstrakcja zęba",
        "stany ropne okołozębowe",
        "zapalenie migdałów",
        "trądzik różowaty",
        "trądzik pospolity w fazie aktywnej",
        "rany",
        "świeża opalenizna"
      ],
      types:[
        {
          name:"okolice oczu",
          steps:[]
        },
        {
          name:"recital 20+",
          steps:[]
        },
        {
          name:"recital 30+",
          steps:[]
        },
        {
          name:"odmłodzenie 40+",
          steps:[]
        },
        {
          name:"lifting 45+",
          steps:[]
        },
        {
          name:"trądzik",
          steps:[]
        },
        {
          name:"ujędrnienie",
          steps:[]
        },
        {
          name:"cellulit",
          steps:[]
        },
        {
          name:"wyszczuplenie",
          steps:[]
        },
        {
          name:"na bóle mięśni",
          steps:[]
        },
        {
          name:"na skórę głowy",
          steps:[]
        },
        {
          name:"redukcja naczynek",
          steps:[]
        },
      ],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Lifting falami RF',
      treatRepeatTimes: "W serii wykonuje się od 5 do 10 zabiegów. Dla zwiększenia efektu można łączyć z masażem bańką chińską.",
      treatTimeHour: 2,
      description: "Fale radiowe uwalniają energię elektryczną i zmieniają ją w energię cieplną, która przenika przez naskórek głęboko do skóry właściwej, podnosi temperaturę, stymuluje regenerację włókien kolagenowych, co powoduje redukcję zmarszczek, ujędrnienie skóry. Zabiegi są nieinwazyjne, bezpieczne i nie pozostawiają blizn ani oparzeń, dzięki czemu od razu po sesji można wrócić do codziennego życia. Terapia RF jest nieoperacyjną leczniczą metodą poprawiania stanu skóry przy krótkim nakładzie czasu, oraz z długim efektem leczniczym. Zabieg świetnie nadaje się między innymi do modelowania sylwetki brzucha, pośladków, nóg, liftingu skóry, piersi, poprawy stanu skóry, odchudzanie, ujędrnianie, redukcja zmarszczek, poprawa stanu skóry zwiotczałej.",
      effects: [],
      injuctions: [],
      contraindications: [
        "kobiety w ciąży lub karmiące piersią",
        "miesiączka (w przypadku gdy zabieg jest wykonywany na podbrzuszu)",
        "choroby związane z krzepnięciem krwi, serca, pękaniem naczyń, zapaleniem",
        "skóry, chorobami skóry, padaczka",
        "anemia, białaczką, krwotoki",
        "zbyt wysokie ciśnienie, choroby onkologiczne, astma, zakrzepica żył",
        "cukrzyca",
        "niewydolność serca",
        "implanty",
        "elementy metalowe w ciele (należy zdjąć przed zabiegiem, lub nie wykonywać w tym miejscu zabiegu"
      ],
      types:[],
      afterTreatments:[
      "nie używać kosmetyków leczniczych w ciągu trwania serii zabiegów (można oczyścić skórę i nałożyć oliwkę w celu wykonania masażu)",
      "zaleca się używanie kremu utrzymujących wilgotność w skórze (np. z aloesem)",
      "należy unikać jedzenia ostrych potraw oraz owoców morza w ciągu kilku pierwszych dni po zabiegu",
      "zaleca się spożywanie dużej ilości warzyw i owoców",
      "pić duże ilości wody",
      "oczyszczać skórę zimną wodą w ciągu 3 do 7 dni po zabiegu, unikać wysokiej temperatury oraz wysokiej wilgotności",
      ],
      beforTreatments:["Zabieg nie wymaga specjalnych przygotowań, z wyjątkiem wykluczenia przeciwwskazań."],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Fotoodmładzanie',
      treatRepeatTimes: "Zabiegi należy powtarzać co 3 do 5 tygodni",
      treatTimeHour: 2,
      description: "Wraz z upływem czasu pojawiają się na naszej skórze widoczne oznaki starzenia. Pod wpływem działania wiatru, mrozu a przede wszystkim słońca powstają nowe piegi, plamy barwnikowe, rozszerzone/popękane naczynia. Pojawia się rumień i drobne zmarszczki, skóra traci swoja naturalną sprężystość. Fotoodmładzanie jest jedynym zabiegiem, który w sposób kompleksowy w znacznym stopniu redukuje lub całkowicie usuwa te problemy. W naszym gabinecie zabieg fotoodmładzania wykonujemy za pomocą najnowocześniejszego systemu IPL. Intensywne światło IPL bez uszkadzania skóry, przenika przez nią i jest absorbowane przez hemoglobinę (rozszerzone naczynia, rumień) lub melaninę (przebarwienia). Światło IPL pobudza komórki wskutek czego skóra rozpoczyna swój naturalny proces leczenia. Zabiegi skracają i przebudowują włókna kolagenowe, dzięki czemu skóra jest jędrniejsza, bardziej elastyczna, zmniejszają się rozszerzone pory i wygładzają drobne zmarszczki. Zabiegi nie są długie i męczące, można po nich powrócić do normalnego trybu życia.",
      effects: [],
      injuctions: [
        "teleangiektazje",
        "trądzik różowaty",
        "rumień",
        "posłoneczne zmiany pigmentowe",
        "piegi",
        "przebarwienia potrądzikowe",
        "płytkie zmarszczki",
        "zmiany sprężystości skóry",
        "rozszerzone pory",
        "niejednorodny koloryt skóry"
      ],
      contraindications: [
        "ciąża",
        "opalenizna (min. miesiąc przed zabiegiem)",
        "samoopalacze",
        "kremy z retinolem",
        "leki i zioła światłouczulające",
        "B-karoten",
        "cukrzyca, bielactwo",
        "aktywna infekcja w miejscu wykonywania zabiegu",
        "skłonności do bliznowacenia",
        "aspiryna (1 tydzień przed zabiegiem)"
      ],
      types:[],
      afterTreatments:[
      "nie używać kosmetyków leczniczych w ciągu trwania serii zabiegów (można oczyścić skórę i nałożyć oliwkę w celu wykonania masażu)",
      "zaleca się używanie kremu utrzymujących wilgotność w skórze (np. z aloesem)",
      "należy unikać jedzenia ostrych potraw oraz owoców morza w ciągu kilku pierwszych dni po zabiegu",
      "zaleca się spożywanie dużej ilości warzyw i owoców",
      "pić duże ilości wody",
      "oczyszczać skórę zimną wodą w ciągu 3 do 7 dni po zabiegu, unikać wysokiej temperatury oraz wysokiej wilgotności",
      ],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Mikrodermabrazja diamentowa',
      treatRepeatTimes: "Zazwyczaj należy przeprowadzić serię ok. 6 zabiegów. Pierwsze trzy co tydzień, następnie trzy zabiegi co dwa tygodnie. Kolejne miesiące to zwykle jeden zabieg przypominający. Już po pierwszym zabiegu wygląd i kolor skóry wyraźnie poprawia się, w dotyku staje się ona gładsza, efekt ten zwiększa się po kolejnych zabiegach.",
      treatTimeHour: 2,
      description: "Mikrodermabrazja jest nowoczesną metodą mechanicznego złuszczania warstwy rogowej naskórka. Dzięki natychmiast widocznym rezultatom należy do najczęściej wybieranych przez klientów zabiegów. Podczas mikrodermabrazji diamentowej efekt eksfoliacji uzyskuje się poprzez działanie ścierające głowic pokrytych warstwą diamentu oraz pompy zasysającej martwy zrogowaciały naskórek. Usunięcie powierzchniowych warstw pobudza również produkcję kolagenu i elastyny, stymuluje naturalny wzrost nowej tkanki. W wyniku usunięcia wierzchnich warstw naskórka skóra staje się gładsza, jaśniejsza, świeższa i bardziej elastyczna już po pierwszym zabiegu. Głębsza mikrodermabrazja spłyca blizny i rozstępy, redukuje lub całkowicie eliminuje drobne zmarszczki, zmniejsza rozszerzone pory i przebarwienia. Zmiany histologiczne dotyczą nie tylko naskórka, ale również skóry właściwej (stymuluje mikrokrążenie i przepływ limfy, przyspiesza usuwanie toksyn z głębszych warstw skóry). Niewątpliwą zaletą zabiegu jest to, że jest on bezbolesny, prosty, trwa krótko i po jego wykonaniu pacjent nie jest wyłączony z życia codziennego. Poza mikrodermabrazją twarzy, szyi i dekoltu w naszym gabinecie istnieje możliwość przeprowadzenia zabiegu na pośladkach, udach, plecach itd.",
      effects: [],
      injuctions: [
        "peeling twarzy i ciała",
        "blizny potrądzikowe",
        "zaskórniki i prosaki",
        "rozszerzone pory",
        "łojotok i suchość skóry",
        "blizny i bliznowce",
        "przebarwienia i odbarwienia",
        "uszkodzenia posłoneczne skóry (twarz, ręce, szyja)",
        "plamy starcze",
        "rozstępy",
        "wiotkość skóry",
        "drobne zmarszczki",
        "szorstki/nierówny/zrogowaciały naskórek",
      ],
      contraindications: [
        "zakażenia wirusowe (brodawki, opryszczka, mięczak zakaźny)",
        "zakażenia bakteryjne (liszajec zakaźny, figówka gronkowcowa)",
        "zakażenia grzybicze, trądzik krostkowy, ropowiczy, trądzik różowaty",
        "przeczosy, nadżerki (uszkodzenia ciągłości skóry)",
        "nowotwory skóry i znamiona",
        "terapia przeciwtrądzikowa Roaccutanem – pochodna wit. A (wskazana co najmniej 3 miesięczna przerwa)",
        "cukrzyca, bielactwo",
        "aktywna infekcja w miejscu wykonywania zabiegu",
        "skłonność do keloidów (bliznowców)",
        "zabiegi chirurgiczne w obrębie twarzy (do 2 miesięcy)"
      ],
      types:[
      {
        name:"poprawa kolorytu i struktury skóry",
        step:""
      },
      {
        name:"zwężenie rozszerzonych porów",
        step:""
      },
      {
        name:"zmniejszenie ilości zaskórników",
        step:""
      },
      {
        name:"spłycenie powierzchownych zmarszczek",
        step:""
      },
      {
        name:"rozjaśnienie przebarwień i plam starczych",
        step:""
      },
      {
        name:"zmniejszenie łojotoku",
        step:""
      },
      {
        name:"spłycenie i wygładzenie blizn",
        step:""
      }
      ],
      afterTreatments:[
      "nie używać kosmetyków leczniczych w ciągu trwania serii zabiegów (można oczyścić skórę i nałożyć oliwkę w celu wykonania masażu)",
      "zaleca się używanie kremu utrzymujących wilgotność w skórze (np. z aloesem)",
      "należy unikać jedzenia ostrych potraw oraz owoców morza w ciągu kilku pierwszych dni po zabiegu",
      "zaleca się spożywanie dużej ilości warzyw i owoców",
      "pić duże ilości wody",
      "oczyszczać skórę zimną wodą w ciągu 3 do 7 dni po zabiegu, unikać wysokiej temperatury oraz wysokiej wilgotności",
      ],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Laserowe leczenie trądziku',
      treatRepeatTimes: "Zalecana jest seria 3-5 zabiegów, w odstępach 7 dniowych.",
      treatTimeHour: 2,
      description: "Światło IPL niszczy szybko namnażające się bakterie odpowiedzialne za zmiany zapalne w trądziku. Działanie jest podobne do antybiotyków, które stosowane miejscowo lub ogólnie mogą jednak wywoływać szereg objawów niepożądanych niszcząc wątrobę i żołądek. Badania przeprowadzone w wielu ośrodkach na świecie wykazały osiągnięcie trzy razy szybszych efektów leczenia systemem IPL, niż w przypadku tradycyjnych metod. Bardzo spektakularne efekty uzyskuje się w leczeniu tą metodą trądziku ze zmianami ropnymi. ",
      effects: [],
      injuctions: [],
      contraindications: [
        "ciąża, karmienie piersią",
        "choroby skóry (np. bielactwo, łuszczyca)",
        "opryszczka",
        "nadwrażliwość skóry na światło",
        "nowotwory skóry, cukrzyca, epilepsja",
        "implanty wewnątrz ciała",
        "leczenie retinoidami (należy odstawić 6 miesięcy przed zabiegiem)",
        "stosowanie steroidów lub kosmetyków zawierających hormony w okresie ostatnich 3 miesięcy",
        "aspiryna (nie zażywać tydzień przed)",
        "leki przeciwbólowe (nie stosować w dniu zabiegu)"
      ],
      types:[],
      afterTreatments:[
      "należy chronić skórę przed promieniami słonecznymi, zakrywając poddane zabiegowi części ciała lub używać kremów do opalania z wysokim filtrem (od 30SPV) przez okres 4 tygodni od wykonania zabiegu",
      "nie zażywać środków fotouczulających (dziurawiec, nagietek, bratek, niektóre leki)",
      ],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Redukcja rozstępów',
      treatRepeatTimes: "Zalecana jest seria 6-10 zabiegów, w odstępach co 2-tygodnie.",
      treatTimeHour: 2,
      description: "Rozstępy to problem, z którym zmagają się głównie kobiety jednak często i mężczyźni mają z nimi problemy. Pojawiają się one zazwyczaj w okresie dojrzewania lub ciąży. Obecność rozstępów sprawia, że skóra traci estetyczny i atrakcyjny wygląd więc dla większości kobiet walka z nimi jest kwestią niezwykle ważną. Dla tego proponujemy Tobie nowoczesny bardzo skuteczny zabieg lekarski leczniczo-regenerujący i odmładzający skórę, wykonywany za pomocą specjalnego urządzenia. Zabieg składa się z dwóch etapów: I etap: Regeneruje i uelastycznia skórę, pobudza krążenie, pobudza produkcję kolagenu i elastyny. Zabieg jest bezpieczny i bezbolesny, polega na mechanicznym złuszczaniu warstw naskórka specjalnym aparatem, który ściera i wysysa starte komórki. Zabieg nie wymaga rekonwalescencji. II etap:Wstrzykiwanie do uszkodzonych tkanek specjalnie opracowanych koktajli z różnych substancji w celu indukowania odpowiedzi fibroblastycznej w skórze właściwej z regeneracją kolagenu. Warto pamiętać, że mamy dwie fazy rozstępów. Najlepsze efekty osiągniemy jeśli zabierzemy się za usuwanie rozstępów jeszcze w fazie zapalnej (czerwone rozstępy), jeśli zaniedbamy czerwone rozstępy w fazie zapalnej, dość szybko przejdą one fazę bliznowacenia i zmienią się w rozstępy białe, które znacznie trudniej jest usunąć.",
      effects: [],
      injuctions: [],
      contraindications: [
        "Ciąża",
        "Stany nowotworowe",
        "Skłonność do keloidów (bliznowców)",
        "Zabiegi chirurgiczne (do 2 miesięcy)"
      ],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Liposukcja ultradźwiękowa',
      treatRepeatTimes: "Zalecana jest seria 6-10 zabiegów, w odstępach co 2-tygodnie.",
      treatTimeHour: 2,
      description: "Rozstępy to problem, z którym zmagają się głównie kobiety jednak często i mężczyźni mają z nimi problemy. Pojawiają się one zazwyczaj w okresie dojrzewania lub ciąży. Obecność rozstępów sprawia, że skóra traci estetyczny i atrakcyjny wygląd więc dla większości kobiet walka z nimi jest kwestią niezwykle ważną. Dla tego proponujemy Tobie nowoczesny bardzo skuteczny zabieg lekarski leczniczo-regenerujący i odmładzający skórę, wykonywany za pomocą specjalnego urządzenia. Zabieg składa się z dwóch etapów: I etap: Regeneruje i uelastycznia skórę, pobudza krążenie, pobudza produkcję kolagenu i elastyny. Zabieg jest bezpieczny i bezbolesny, polega na mechanicznym złuszczaniu warstw naskórka specjalnym aparatem, który ściera i wysysa starte komórki. Zabieg nie wymaga rekonwalescencji. II etap:Wstrzykiwanie do uszkodzonych tkanek specjalnie opracowanych koktajli z różnych substancji w celu indukowania odpowiedzi fibroblastycznej w skórze właściwej z regeneracją kolagenu. Warto pamiętać, że mamy dwie fazy rozstępów. Najlepsze efekty osiągniemy jeśli zabierzemy się za usuwanie rozstępów jeszcze w fazie zapalnej (czerwone rozstępy), jeśli zaniedbamy czerwone rozstępy w fazie zapalnej, dość szybko przejdą one fazę bliznowacenia i zmienią się w rozstępy białe, które znacznie trudniej jest usunąć.",
      effects: [],
      injuctions: [],
      contraindications: [
        "Ciąża",
        "Stany nowotworowe",
        "Skłonność do keloidów (bliznowców)",
        "Zabiegi chirurgiczne (do 2 miesięcy)"
      ],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Dermomasager',
      treatRepeatTimes: "Zaleca się wykonanie serii od 10-15 zabiegów co 2-3 dzień. Świetne efekty daje połączenie dermomasagera z liposukcją ultradźwiękową bądź liftingiem falami RF.",
      treatTimeHour: 2,
      description: "Dermomassager to urządzenie do wykonywania masażu podciśnieniowego, którego głównym działaniem jest rozpad \"zrazików\" tłuszczowych i przywrócenie prawidłowego funkcjonowania naczyń włosowatych i limfatycznych w skórze.",
      effects: [
        "modelowanie ciała – redukcja tkanki tłuszczowej",
        "zmniejszenie cellulitu",
        "ujędrnienie ciała",
        "wspomaganie drenażu limfatycznego",
        "poprawa ukrwienia i odżywienia skóry",
        "spłycenie blizn",
        "niwelacja rozstępów",
        "eliminacja toksyn",
        "zwiększenie produkcji kolagenu i elastyny"
      ],
      injuctions: [],
      contraindications: [
        "ciąża",
        "stany zapalne skóry",
        "uszkodzenia mechaniczne skóy popękane naczynka",
        "niewydolność krążenia",
        "gorączka",
        "osłabienie i wyniszczenie organizmu",
        "zaawansowane nadciśnienei tętnicze",
        "skłonność do krwawień i powstania wybroczyn (siniaków)"
      ],
      types:[],
      afterTreatments:[
      "odpowiednio zbilansowaną dietę",
      "aktywność ruchową",
      "spożywanie ok. 2 litrów wody dziennie"
      ],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Usuwanie przebarwień',
      treatRepeatTimes: "Najlepsze efekty uzyskuje po serii od 2 do 5 zabiegów w odstępach co 3-6 tygodni. Przebarwienia mogą pojawić się ponownie, ponieważ zabieg nie eliminuje tendencji do hiperpigmentacji a jedynie usuwa jej skutki. Dlatego niezwykle ważnym punktem terapii i zapobieganiem powstawania przebarwień jest profilaktyka oparta na unikaniu ekspozycji na promienie UV (stosowanie skutecznej ochrony).",
      treatTimeHour: 2,
      description: "Zabieg usuwania przebarwień przeprowadzamy za pomącą najnowszej generacji urządzenia IPL. W trakcie wykonywania zabiegu światło wybiórczo pochłaniane jest przez melaninę, podgrzewa komórki zawierające barwnik powodując ich zniszczenie. Po zabiegu zmiana barwnikowa ulega ściemnieniu a następnie stopniowemu złuszczeniu i zanikowi.",
      effects: [],
      injuctions: [
        "piegi",
        "plamy posłoneczne",
        "plamy soczewicowe (starcze)",
        "przebarwienia pozapalne, potrądzikowe"
      ],
      contraindications: [
        "ciąża, karmienie piersią",
        "choroby skóry (np. bielactwo, łuszczyca)",
        "opryszczka",
        "nadwrażliwość skóry na światło",
        "nowotwory skóry, cukrzyca, epilepsja",
        "implanty wewnątrz ciała",
        "leczenie retinoidami (należy odstawić 6 miesięcy przed zabiegiem)",
        "stosowanie steroidów lub kosmetyków zawierających hormony w okresie ostatnich 3 miesięcy",
        "samoopalacze (przestać stosować 2 tygodnie przed zabiegiem)",
        "aspiryna (nie zażywać tydzień przed)",
        "leki przeciwbólowe (nie stosować w dniu zabiegu)",
        "aktywna infekcja w miejscu wykonywania zabiegu"
      ],
      types:[],
      afterTreatments:[
      "kilka razy dziennie zalecamy używanie kremu alantan, panthenol",
      "nie zażywać środków fotouczulających (dziurawiec, nagietek, bratek, niektóre leki)",
      "należy chronić skórę przed promieniami słonecznymi, zakrywając poddane zabiegowi części ciała lub używać kremów do opalania z wysokim filtrem (od 30SPV) przez okres 4 tygodni od wykonania zabiegu"
      ],
      beforTreatments:[
        "nie opalać się na słońcu albo w solarium przed zabiegiem, w przypadku mocnej opalenizny do 28 dni przed zabiegiem (opalona skóra absorbuje zbyt dużą ilość energii świetlnej)",
        "w przypadku stosowania kremów z retinolem, witaminą C lub kwasami owocowymi, należy je odstawić na miesiąc przed zabiegiem",
        "tydzień przed zabiegiem nie przyjmować leków i ziół fotouczulających (np. dziurawiec, nagietek, bratek, skrzyp) oraz soków z beta karotenem",
        "bezpośrednio przed zabiegiem skóra powinna być umyta i niczym nie smarowana (bez makijażu)"
      ],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Zamykanie naczynek',
      treatRepeatTimes: "Aby zamknąć popękane naczynia krwionośne z reguły potrzeba od 2 do 5 zabiegów wykonywanych w ciągu kilku miesięcy, zależy to od ilości, średnicy i koloru naczyń oraz głębokości ich położenia. Jeśli naczynko było duże lub zabiegowi poddana została duża powierzchnia, po zabiegu może pojawić się siniak, obrzęk albo rumień, który schodzi w ciągu kilku godzin lub dni.",
      treatTimeHour: 2,
      description: "W trakcie wykonywania zabiegu urządzenie kieruje wiązkę światła o precyzyjnie określonych parametrach. Pozwala to na dokonanie zmian w obrębie danej tkanki. Energia świetlna emitowana z IPL jest pochłaniana przez czerwony barwnik (hemoglobinę), krew ulega koagulacji (ścina się) lub odparowuje, na skutek tego naczynie krwionośne zostaje zniszczone od wewnątrz. Proces ten nazywany jest fototermolizą selektywną (kontrolowane oparzenie). Po pewnym czasie naczynie jest samoczynnie usuwane z organizmu.",
      effects: [],
      injuctions: [
        "telangiektazje na twarzy",
        "telangiektazje na ciele",
        "hemangioma (naczyniaki)",
        "drobne żylaki"
      ],
      contraindications: [
        "ciąża",
        "opalenizna (min. miesiąc przed zabiegiem)",
        "samoopalacze",
        "kremy z retinolem",
        "leki i zioła światłouczulające (dziurawiec, nagietek)",
        "B-karoten",
        "cukrzyca, bielactwo",
        "aktywna infekcje w miejscu wykonywania zabiegu",
        "skłonności do bliznowacenia i problemy z krzepliwością",
        "aspiryna, leki przeciwzakrzepowe"
      ],
      types:[],
      afterTreatments:[
      "Nie eksponować skóry na słońcu (solarium) min. jeden miesiąc po zabiegu. Należy również zabezpieczać skórę wysokimi filtrami ponieważ promienie ultrafioletowe mogą spowodować przebarwienia",
      "Przez kilka dni po zabiegu nie stosować na skórę środków drażniących i wysuszających",
      "Zalecamy używanie kremu przyspieszającego gojenie",
      "Unikać przegrzewania skóry poddanej zabiegowi (np. sauna, gorące kąpiele)",
      "Unikać zbędnego wysiłku zwiększającego ciśnienie krwi (np. ćwiczeń fizycznych) oraz sytuacji w których skóra jest narażona na urazy",
      "Odpowiednio codziennie pielęgnować skórę naczynkową. Stosowanie odpowiednich  kosmetyków/kosmeceutyków do skóry naczyniowej, które pomagają obkurczyć i wzmocnić naczynia krwionośne. Uzupełnienie niedoborów witaminowych głównie B2, PP i C. Ochrona skóry przed zimnem i wilgocią - stosowanie ochronnych kremów w okresie jesienno-zimowym.",
      ],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
    {
      name: 'Lifting falami RF',
      treatRepeatTimes:"",
      treatTimeHour: 2,
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      effects: [],
      injuctions: [],
      contraindications: [],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x152",
        "http://placehold.it/150x153"
      ]
    }
  ]
  
  var treatmentsCollection2 = [
    {
      name: 'Manicure',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: "Piękne dłonie i paznokcie to nie  przypadek, są wizytówką każdej kobiety i  jednym z najbardziej widocznych atrybutów urody. Wygląd dłoni jest jak  otwarta księga, która dostarcza informacji o naszym temperamencie, osobowości i stylu życia. Skóra rąk charakteryzuje się szczególną delikatnością,    ponieważ nie posiada tkanki tłuszczowej, dlatego też    mając codzienny kontakt z czynnikami zewnętrznymi    podlega nadmiernemu wysuszeniu i czyni ręce szorstkimi. Często starzeje się w bardziej widoczny sposób niż twarz i ciało. Kobiety marzą o pięknych dłoniach, długich i zdrowych paznokciach, które są zwierciadłem stanu zdrowia organizmu, lecz ich wygląd jest często uwarunkowany genetycznie. Możemy poprawiać ich kondycję zdrową dietą, preparatami - witaminami jak również przeróżnymi zabiegami pielęgnacyjnymi, jednak nic nie zastąpi prawidłowo wykonanego manicure, który nada naszym dłoniom elegancji i smukłości.",
      effects: [],
      injuctions: [],
      contraindications: [],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
	{
      name: 'Satynowe rękawiczki',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: "Satynowe rękawiczki - zabieg na ręce wygładzająco-regenrujący Zabieg przeznaczony do specjalistycznej regeneracji skóry dłoni do wykonywania w trakcie kosmetyki twarzy w gabinetach odnowy biologicznej, a także jako element luksusowego manicure.Aktywne substancje wykorzystane w tym zabiegu hamują procesy starzenia się skóry, poprawiają krążenie oraz intensywnie ją odżywiają i nawilżają. Wyjątkowa maska wykorzystuje wszystkie odżywcze zmiękczające właściwości kwiatu lotosu, miodu akacjowego, masła karite, oleju z pestek winogron oraz wodne roztwory malwy by nadać rękom wspaniały wygląd a słodki peeling usunie wszelkie martwe komórki skóry. Pamiętajmy, że skóra na rękach narażona jest na najszybsze starzenie się. Jego objawy są bardzo widoczne i nie ma sposobu, by je zamaskować. Mówi się, że na dłoniach wypisana jest metryka i jest to prawdziwa wizytówka kobiety. Dlatego pielęgnacja skóry dłoni powinna, dla dobra naszych klientów, zawsze towarzyszyć zabiegom kosmetycznym, w jego prostej wersji – nawet gratisowo. Polecamy wykonywanie tego zabiegu podczas innych zabiegów pielęgnacyjnych lub jako osobny zabieg dla poprawienia kondycji skóry rąk i paznokci.",
      effects: [
        "Skóra dłoni wygląda na zadbaną i młodszą",
        "Skóra dłoni jest wygładzona i miękka",
		"Skóra dłoni jest jędrniejsza i odżywiona",
		"Skóra dłoni jest rozjaśniona"
      ],
      injuctions: [],
      contraindications: [],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
	{
      name: 'Pedicure',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: "Jedwabne buciki – zabieg na stopy wygładzająco- regenerujący- nawilżający Zabieg na stopy jest kilkuetapowym seansem pielęgnacyjnym, znacznie poprawiającym stan nóg, do wykonywania w trakcie kosmetyki twarzy w gabinetach, a także jako element luksusowego pedicure. Po zabiegu skóra staje się miękka i aksamitnie gładka. Ponadto poprawia się stan paznokci, a wszelkie uporczywe przebarwienia zostają skutecznie rozjaśnione. Zabieg rozpoczyna się oczyszczającym peelingiem zawierającym drobną sól, który wysubtelnia wygląd skóry,złuszcza martwe warstwy naskórka oraz tonizuje naskórek. Następnie wykonywany jest masaż na stymulujący punkty witalne na obszarze stóp. Pobudzane zostają strefy, odpowiadające konkretnym organom wewnętrznym, przywracając równowagę całego organizmu. Ponadto poprzez stymulację odpowiednich punktów, następuje pobudzenie krążenia krwi, wzmocnienie układu odpornościowego, oraz rozluźnienie mięśni i zniwelowanie wszelkich bólów. Następnie zostaje nałożona maska na stopy i paznokcie, która w swoim składzie zawiera olej z oliwek, masło karite i liscie baobabu: koktajl ultra odżywczych substancji czynnych, który dostarcza skórze stóp to wszystko czego potrzebuje w celu jej natychmiastowego upiększenia. Dlatego pielęgnacja skóry stóp powinna, dla dobra naszych klientów, zawsze towarzyszyć zabiegom kosmetycznym, w jego prostej wersji – nawet gratisowo. Polecamy wykonywanie tego zabiegu podczas innych zabiegów pielęgnacyjnych lub jako osobny zabieg dla poprawienia kondycji skóry stóp i paznokci.",
      effects: [
        "Skóra stóp wygląda na zadbaną i młodszą",
        "Skóra stóp jest wygładzona i miękka",
		"Skóra stóp jest jędrniejsza i odżywiona",
		"Skóra stóp jest rozjaśniona"
      ],
      injuctions: [],
      contraindications: [],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
	{
      name: 'Masaż',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: " Masaż ciała jest stosowaną od kilku tysięcy lat formą terapii, a nawet metodą leczenia organizmu. Polega na oddziaływaniu bodźcami mechanicznymi na tkanki ustroju w celu wywołania w nich pozytywnych reakcji. Usuwa zmęczenie oraz pomaga w utrzymaniu zdrowia i urody. Stosowany regularnie, najlepiej co 2 tygodnie, jest prawdziwym dobrodziejstwem dla każdego niezależnie od wieku. W zależności od techniki, formy, intensywności i siły masażu możemy zwiększać lub zmniejszać tonus tkanek. Przy masażu całkowitym ciało relaksuje się, poprawia się ukrwienie skóry oraz tkankowa przemiana materii. Zmniejsza się także nadmierne napięcie mięśni spowodowane przewlekłym stresem. Dotyczy to szczególnie mięśni karku i obręczy barkowej. Regularne masaże powodują znaczne zmniejszenie cellulitu, stymulują mikrokrążenie w tkankach oraz usuwają toksyny z organizmu, co ma szczególne znaczenie podczas odchudzania się. Przeciwdziałają starzeniu się i wiotczeniu skóry oraz ujędrniają mięśnie. Wykonujemy masaż klasyczny, odmładzająco-relaksacyjny Infrared, relaksujacy, limfatyczny podciśnieniowy, dłoni oraz stóp.",
      effects: [
        "Wzmożenie krążenia krwi i limfy",
        "Przyspieszenie przemiany materii"
      ],
      injuctions: [
        "Przy zmęczeniu i napiętych mięśniach",
        "Gdy masz zbyt mało ruchu",
        "Jeśli żyjesz w stresie i pośpiechu",
        "Chcesz wyrzeźbić i uelastycznić ciało",
        "Wspomagająco podczas odchudzania",
        "Profilaktycznie, żeby opóźnić procesy starzenia",
		"Aby zrelaksować ciało i duszę"
      ],
      contraindications: [],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
	{
      name: 'Masaż bańką chińską',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: "Podciśnienie, które wytwarza się w bańce przez usunięcie z niej powietrza, powoduje zassanie skóry i tkanek leżących pod bańką, wpływając na intensywne ich przekrwienie oraz wyraźną poprawę stanu mało elastycznej skóry. Bańka chińska pobudza krążenie krwi i płynów ustrojowych, pomaga pozbyć się zbędnych produktów przemiany materii oraz toksyn z organizmu. W wyniku przyspieszenia przemiany materii następuje redukcja tkanki tłuszczowej. Ma nieocenioną moc w zastosowaniu w kuracji antycellulitowej lub jako drenaż limfatyczny. Poza wyżej wymienionymi właściwościami masaż bańką doskonale relaksuje i uspokaja. Jest dobry dla osób zestresowanych, przemęczonych, prowadzących siedzący tryb życia oraz po wyczerpującym wysiłku fizycznym.",
      effects: [],
      injuctions: [
        "Nowotwory",
        "Gruźlica",
        "Podwyższona temperatura ciała",
        "Menstruacja",
        "Ciąża",
        "Zaburzenia krzepliwości krwi",
		"Żylaki"
      ],
      contraindications: [
        "Cellulit",
        "Obrzęki limfatyczne",
        "Napięte i obolałe mięśnie"        
      ],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
	{
      name: 'Mezoterapia Mikroigłowa',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: "Zdrowe, wypielęgnowane stopy są ważnym elementem urody oraz podstawą dobrego samopoczucia. Delikatna, gładka skóra oraz kształtne paznokcie dodają powabu i lekkości. Dlatego warto otoczyć stopy szczególną troską i wykonać profesjonalny pedicure, który jest nie tylko zabiegiem upiększającym, ale również leczniczym. Podstawową częścią pedicure jest usunięcie zrogowaciałego naskórka ze spodu stóp, likwidacja odcisków, modzeli oraz prawidłowe ukształtowanie paznokcia.",
      effects: [],
      injuctions: [],
      contraindications: [],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
	{
      name: 'Depilacja woskiem',
      treatRepeatTimes: "",
      treatTimeHour: 2,
      description: "Nie ulega wątpliwości, że usuwanie zbędnego owłosienia - depilacja - stało się powszechnie stosowanym zabiegiem pielęgnacyjnym, a zabieg depilacji traktowany jest dzisiaj przez kobiety, i coraz częściej przez mężczyzn, jako obowiązek. Polega na nakładaniu na skórę ciepłego półpłynnego lub płynnego wosku, który odrywa się szybkim ruchem w stronę przeciwną do kierunku wzrostu włosów. Warunkiem skuteczności tej metody jest odpowiednia długość włosów - powinny mieć minimum 0,5 mm długości. Ten rodzaj depilacji pozwala na wyrwanie włosa wraz z cebulką, po zabiegu włosy odrastają wolniej i są słabsze. Nie należy przez 1-2 dni poddawać wydepilowaną część ciała na słońce czy solarium. Efekt utrzymuje się od 3 do 6 tygodni",
      effects: [],
      injuctions: [],
      contraindications: [],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    },
	{
      name: 'Koc sauna Infrared',
      treatRepeatTimes: "Seria zabiegów 5-15",
      treatTimeHour: 2,
      description: " A może by tak schudnąć leżąc nic nie robiąc ? Sauna Koc Infrared Ciepło promieniowania podczerwonego wnika głęboko w ciało i dzięki zwiększonemu przepływowi krwi rozprzestrzenia się szybko na cały organizm. Temperatura ciała podnosi się do 70 stopni, czego następstwem jest naturalny odruch - pocenie się - i to już przy stosunkowo niskiej temperaturze. Regularna terapia wygrzewania i pocenia się w tej saunie przynosi korzyści dla zdrowia. Podczas zabiegu w saunie IR zwiększa się krążenie krwi, serce bije intensywniej, krew płynie szybciej, nie podnosząc jednak ciśnienia tętniczego. Tlen jest lepiej doprowadzany do komórek ciała. To powoduje odprężenie, redukuje bóle mięśniowe i przyspiesza procesy leczenia. Terapia podczerwienią wzmacnia system immunologiczny i skutecznie wspomaga walkę z przeziębieniami i zakażeniami grzybopodobnymi w początkowych ich stadiach. Pocenie w trakcie sesji działa na organizm oczyszczająco. Powoduje pozbywanie się niepotrzebnych związków sodu, alkoholu, nikotyny, obniża stężenie cholesterolu oraz przyczynia się do pozbycia nadmiaru wody. Eliminuje również metale rakotwórcze, takie jak kadm, ołów  czy cynk. Dzięki polepszaniu procesów metabolicznych terapia pomaga w odchudzaniu. SUCHA KOC INFRARED WSPOMAGA ODCHUDZANIE, PRZYSPIESZA PRZEMIANĘ MATERII I SPALANIE KALORII. Seans w podczerwieni bez obciążania stawów i intensywnych ćwiczeń przyspiesza przemianę materii o około 40%. W ciągu 30 minut spalić można od 900 do 2400 kilokalorii. Zabieg zastępuje intensywny 10-kilometrowy bieg. Promienie podczerwone eliminują nadmiar soli i tłuszczu podskórnego, ogrzewają ciało do 4 cm w głąb, powodując intensywne pocenie się. Reakcja fali podczerwonej na organizm sprawia, że nie tylko wydalana jest woda /ok. 70% utraty masy ciała/, ale także tłuszcz /15-20%/, cholesterol, metale ciężkie, kwasy i związki toksyczne /10-15%/. KOC ODCHUDZA BEZ WYSIŁKU. Likwiduje nadwyżki tkanki tłuszczowej, redukuje cellulit, przywraca skórze młodzieńczą jędrność. Do zaiegu można dokupić ampułkę wyszczuplająco-antycellulitową bądź skorzystać z body wrapping na jedną partię ciała",
      effects: [
		"Wzmacnia system odpornościowy",
		"Przynosi ulge w bólu ",
		"Oczyszcza skórę z toksyn i obumarłego naskórka",
		"Poprawia kondycję układu sercowo-naczyniowego",
		"Redukuje napięcia stresowe poprawiając samopoczucie"	 
	  ],
      injuctions: [],
      contraindications: [],
      types:[],
      afterTreatments:[],
      beforTreatments:[],
      images: [
        "http://placehold.it/250x253",
        "http://placehold.it/150x154",
        "http://placehold.it/150x155"
      ]
    }
	]
    
})();
