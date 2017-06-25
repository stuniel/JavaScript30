// The array is taken from wikipedia with the following code:
// https://pl.wiktionary.org/wiki/Indeks:Polski_-_Imiona
// const namesLists = Array.from(document.querySelectorAll('ul'));
// for (i=3; i <28; i++) {
//   girlsNames.push(namesLists[i])
// };
// const girlLists = girlsNames.map(name => Array.from(name.querySelectorAll('li')));
// const names = [];
// girlLists.forEach(name => { name.forEach(text => names.push(text.innerText))});

const girlList = ["Abigail","Ada – Ada, Ausia","Adamina","Adela – Adelka","Adelajda – Ada, Adela, Adelka","Adriana – Ada, Adusia","Adrianna – Ada, Adusia","Agata – Aga, Agatka, Ata, Agusia, Ageta","Agnieszka – Aga, Jagna, Jagienka, Agusia, Agniesia","Agrypina","Afra","Aida","Aisza","Ajna","Alberta","Albertyna","Albina","Aldona","Aleksa – Ola","Aleksandra – Ola, Olka","Aleksja","Alfreda","Alicja – Ala","Alida","Alina – Alinka, Ala","Alojza","Amalia","Amanda – Amandzia","Amber","Amelia – Amelka, Amelcia","Amina","Amira","Ana","Anastazja – Nastka","Andrea – Andzia, Rea","Andrzeja – Andzia","Andżelika","Aneta – Anetka","Angela – Angelka","Angelika – Angela, Andzia","Angelina – Angelinka","Aniela – Anielka","Anita – Anitka, Anicia","Anna – Ania, Anka, Andzia, Anusia, Aneczka","Antonina – Antosia, Tonia, Tosia, Tośka","Anzelma","Apollona – Pola","Apollina – Pola","Apolonia – Pola","Arabella","Ariadna","Arleta – Arletka","Arnolda","Astryda","Atena","Augusta","Augustyna","Aurelia – Aurela, Rela, Relka","Aurora","Babeta","Balbina – Balbinka","Barbara – Basia, Barbarka, Baśka","Bartłomieja","Beata – Beatka, Beti","Beatrycja – Betrysia, Tysia","Beatrycze – Betrysia, Tysia","Beatryksa – Betrysia, Tysia","Benedykta","Beniamina – Benia, Benka","Berenika – Berenisia, Nika","Bernarda","Bernadeta","Berta","Betina – Beta, Beti, Betinka","Bianka","Bibiana","Blanka – Blaneczka","Błażena","Bogdana","Bogna – Bodzia, Bogusia","Boguchwała","Bogumiła – Bogusia, Miłka","Bogusława – Bogusia, Boguśka, Gusia","Bojana","Bolesława","Bona","Bożena – Bożenka","Bromira","Bronisława – Bronia, Bronka, Broneczka","Brunhilda","Brygida – Brygidka","Cecylia – Cecylka, Cyla, Cesia","Celestyna","Celina – Celinka, Cesia, Ceśka","Cezaria","Cezaryna","Chociemira","Chwalisława","Ciechosława","Ciesława","Cinosława","Cina","Czesława – Czesia, Cześka","Dajmira","Dagna – Daga, Dagusia","Dagmara – Daga, Dagusia","Dalia","Dalila","Dalmira","Damroka","Dana – Danka, Dancia, Danusia","Daniela – Dana","Danisława – Dana, Sława, Sławka","Danuta – Danka, Danusia","Dargomira","Dargosława","Daria – Darka, Darusia, Darunia, Dana","Dąbrówka","Delfina","Delia","Diana","Dilara","Dobiesława","Domasława","Dominika – Dominisia, Dominiczka, Domi, Domisia, Nika, Doma","Donata – Dona, Donka","Dorosława","Dorota – Dorotka, Dorocia","Dyzma","Dżanan","Dżamila","Dżesika – Dżesi","Edeltrauda, Edeltruda","Edyta – Edytka, Edzia, Edysia, Dita, Ditka","Eleonora – Ela, Norka","Eliza – Elizka","Elwira – Elwircia, Elwirka","Elżbieta – Ela, Elka, Elżbietka, Elżunia, Elza","Elmira – Elmirka, Ela, Mira, Mirka","Emanuela","Emilia – Emilka, Emilcia, Milka, Milcia, Miluńka, Emi, Emiś, Emila, Emili, Emileczka, Emilunia, Emiluńka, Emilusia, Emiluśka, Mila, Miluś, Milusia, Milunia, Miluśka","Emina","Emma","Ernesta","Ernestyna","Eryka – Eryczka","Estera","Eugenia – Genia, Gienia","Ewa – Ewka, Ewcia, Ewunia","Ewelina – Ewelinka, Ewka, Ewcia, Ewunia, Ewelka","Fabia","Fabiana","Fabiola – Fabiolka, Fabia","Farida","Fatima","Fatma","Faustyna – Faustynka","Felicja","Felicjana","Felicyta","Feliksa","Ferdynanda","Filipa","Filipina","Flora","Florentyna","Floriana","Franciszka – Frania, Franusia","Fryderyka","Gabriela – Gabrysia, Gaba, Gabunia, Gabusia, Gabcia, Gabi","Gaja","Genowefa – Genia, Genka, Genusia","Gerarda","Gertruda – Gerda, Gerta, Truda, Trudka, Trudla, Trudzia","Gizela – Giza, Gizelka","Gloria","Gniewomira","Gracja – Gracjanka, Grasia","Gracjana – Gracjanka, Grasia","Grażyna – Grażynka, Graża, Grażka","Greta – Gretka, Gretusia","Gryzelda","Grzymisława","Gustawa – Gusta, Gucia","Gwidona","Hadriana","Halina – Hala, Halka, Halinka, Halusia, Hasia","Halszka – Hala, Halka, Hasia, Hasieńka","Hanna – Hania, Hanka, Hanusia, Haniusia, Haneczka, Haniura","Hedwiga – Hedzia, Hedwisia","Helena – Helenka, Hela, Helcia","Helga","Henrieta","Henryka – Henrysia, Henia","Herma","Hermana","Hermenegilda","Hermina","Hestia","Hiacynta","Hilaria – Hila, Hilka","Hildegarda","Hipolita","Honorata, Honia","Hortensja","Huberta – Berta, Bercia","Husaria","Ida – Idusia, Idka","Idosława – Idka, Sławka","Idzia – Idźka, Idzieńka","Idalia- Ida, Idka, Idusia","Idzisława – Idzia, Idźka, Sławka","Iga","Ildefonsa – Ildusia, Fonsia, Fonśka","Ilia","Iliana","Ilona – Ilonka, Ila","Ilza – Ilka, Ilzeczka","Inga","Ingeborga","Ingryda","Irena – Irenka, Irka, Ircia","Iryda","Iwa – Iwunia, Iwcia","Iwona – Iwonka, Iwa, Iwka, Iwcia","Izabela – Iza, Izunia, Bela, Belka, Belunia","Izolda","Izydora","Jadwiga – Jadzia, Jadwisia, Wiga, Wisia","Jagoda – Jagódka","Jana – Janka, Janeczka, Jasia, Jaśka","Janina – Janka, Janeczka, Nina, Nineczka","Jarmiła – Jarka, Jareczka, Miłka","Jaromiła – Jarka, Jareczka, Miłka","Jaromira – Jarka, Jareczka, Mirka","Jarosława – Jarka, Jareczka, Sławka","Jasława – Jarka, Jareczka, Sławka","Jaśmina – Jasia, Jaśka, Minka","Joachima","Joanna – Asia, Aśka, Joasia, Joaśka","Jolanta – Jolka, Jola, Jolasia","Jowita – Jowitka","Józefa – Józia, Ziuta","Józefina – Józefinka, Józia, Józka","Judyta – Judytka, Judysia","Julia – Julka, Julcia, Jula","Julianna","Julisława","Julita – Julitka","Justyna – Justynka, Justysia, Justa","Juta – Jutka, Jusia","Kaja – Kajka","Kalina – Kalinka","Kamila – Kamilka, Kama","Karima","Karina – Karinka, Karin","Karola – Karolka, Karolcia, Lola","Karolina – Karolinka, Karolka, Karolcia, Lola, Karla","Karyna – Karynka, Karyn","Katarzyna – Kasia, Kaśka, Katarzynka, Kasieńka, Kasiunia","Kasandra – Kasia, Kasa","Kazimiera – Kazia","Kiara","Kiliana","Kinga – Kinia, Kingusia","Kira","Klara – Klarusia, Klarcia","Klarysa","Klaudia – Klaudusia, Duśka, Dusia","Klaudyna","Klementyna – Klementynka","Kleopatra","Klotylda – Klotka, Klocia","Konstancja","Kordula","Kornelia – Nela, Nelka, Kora","Koryna","Krystiana – Krysia, Kryśka","Krystyna – Krystynka, Krysia, Kryśka","Krzysztofa - Krzysia, Krzysztofka, Krysia Krzysztofinka","Ksawera","Ksenia – Ksenka, Oksana","Kunegunda – Kinia, Kunda, Kundzia, Gunda","Kwiatosława","Kwietosława","Laila","Lajla","Lana","Larisa","Larysa","Latifa","Laura","Laurenjca","Lea","Lejla","Lena – Lenka","Leokadia – Lodzia, Lodka","Leona","Leonarda","Leoncja","Leonora","Leopolda","Lidia – Lidka, Lidzia, Lideczka","Ligia","Lilia – Lilka, Lila","Liliana – Lilka, Lilianka, Lila","Linda – Lindzia","Liwia","Lora","Luborada","Lucjana","Lucjola","Lucyna – Lucia, Lucynka","Ludmiła – Ludka, Miłka","Ludolfa","Ludwika – Ludka, Ludzia","Ludwina","Luiza – Luzia","Luna – Lunka, Lunia, Luneczka","Lilianna","Ładana","Ładysława","Łagoda","Łucja – Łusia, Łucka, Lusia, Luśka","Macieja","Magda","Magdalena – Magda, Madzia, Magdalenka, Magdusia","Maja – Majka, Majeczka, Majunia, Majusia","Maksa","Maksyma","Malina – Malinka, Malka","Malwina – Malwinka, Malwa","Małgorzata – Gosia, Gośka, Małgosia, Małgośka","Manuela","Marcela","Marcelina","Marcjana","Marcjanna","Maria – Marysia, Marynia, Maryś, Marysieńka","Mariam","Marianna – Mańka, Mania, Marianka, Marysieńka","Marietta – Marietka, Maria, Marysia","Marika","Mariola – Mariolka, Marysieńka","Marlena – Marlenka","Marta – Martunia, Martusia","Martyna – Martynka, Martysia, Tyna, Tynka","Maryja","Maryla – Marylka","Maryna – Marynka, Marynia","Marzena – Marzenka","Matylda – Tyla, Tylda","Melania – Mela, Melka","Michalina – Misia, Michasia","Mieczysława","Milena – Mila","Milomira","Miłosława","Miłowita","Minerwa","Mina","Mira","Mirabela","Miranda","Mirela","Miriam","Mirka","Miroda","Mirołada","Mirosława – Mira, Mirka","Mojmira","Monika – Monia, Mona, Moniczka, Moniusia","Morzana","Morzena","Nadia – Nadi","Nadzieja – Nadziejka, Nadia","Najmiła","Najsława","Narcyza","Natalia – Natalka, Natka, Nati, Natalinka, Natusia, Nacia, Nataleczka, Natalusia, Natalcia, Natuśka,","Natasza – Nastka, Nati, Tasza","Nela","Nika","Nikodema – Nika, Niki","Nikola – Nika, Niki","Nikita","Nikoleta","Nina – Ninka","Noemi","Nora","Norberta","Norma","Oda","Odeta – Odetka, Oda, Odet","Odyla","Ofelia","Oksana","Oktawia","Ola","Olga – Olgusia, Ola","Olimpia","Oliwia – Oliwka, Ola","Oriana","Ota","Otylia – Otylka, Oti, Tola","Ożanna","Olena","Pabiana","Pamela – Pamelka, Pama, Pam","Patrycja – Pati, Patka","Paula – Paulinka","Paulina – Paula, Paulinka","Pelagia – Pela, Pegi","Petra","Petronela","Petronia","Placyda","Pola","Polmira","Przemysława","Przybysława","Rachela","Ramona – Rama","Radmiła – Radka, Miłka","Radomiła – Radka, Miłka","Radomira – Radka, Mirka","Radosława – Radka, Sławka","Rafaela","Rajmunda – Mundka, Mundzia","Rajna","Raszyda","Rebeka","Regina – Reginka, Rena","Remigia","Renata – Rena, Renia, Natka, Renatka","Rita","Roberta","Rodzisława","Roksana – Roksanka, Ksana","Roma","Romana","Romualda","Rozalia – Rózia, Rozalka","Rozalinda","Rozamunda","Rozetta","Rozwita","Róża – Rózia, Różyczka","Rudolfina","Ruta – Rucia, Rut","Ryszarda","Safira","Salma","Saloma","Salomea – Salusia","Samanta – Samka, Sam","Sandra – Sandrusia, Sandrynka, Sandrucha","Sara – Sarcia, Sarusia","Sebastiana","Selena – Selenka, Sela, Selusia, Selunia","Selma","Serafina","Seweryna","Sędomira","Sędzisława","Sława","Sławina","Sławomira","Sobiesława","Sonia","Stamira – Mirka","Stanisława – Stasia","Stefania – Stefcia","Stela","Stoisława","Stella","Sydney","Strzeżymira","Subisława","Sulima","Sulisława","Sybilla","Sylwana","Sylwia – Sylwunia, Sylwusia, Sylwka, Sylwcia, Sylwana, Sylwina","Szarlota – Szarlotka, Lotka","Szarlin","Szarlina","Szejma","Szymona","Świetlana – Świtka, Lana","Świętomira – Świętka, Świętosia","Świętosława – Świętka, Świętosia, Tosia, Sława","Tabita","Tacjana","Tadea","Tamara – Tamarka, Tam, Tama","Tatiana – Tatianka, Tania","Tekla","Telimena","Teodora – Dorcia","Teodozja","Teresa – Tereska","Tęgomira","Tina","Tolisława – Tolka, Tolusia","Tomiła","Tomisława","Tulimira","Tessa","Ulana – Ula, Ulka, Usia","Ulryka – Ulrysia, Ulka, Rika, Ryśka","Uma – Uminka","Una","Unima","Urszula – Ula, Ulka, Usia","Uta","Wacława","Walentyna","Waleria","Wanda – Wandzia","Wanessa – Waneska, Wania","Wera","Weronika – Wera, Werka, Nika","Wesna","Wiara","Wielina – Wiela, Wielka","Wiera","Wierada","Wiesława – Wiesia, Wieśka","Wiktoria – Wika, Wiki","Wilhelmina – Wilka, Wila","Wilma","Wincentyna","Wioleta – Wiola, Wioletka","Wirgilia","Wirginia – Wiga, Wirgin","Wisława – Wisia","Witosława","Władysława, Władzia, Dziunia","Włodzimiera","Wolimira","Wrocisława","Zaida","Zaira","Zdzisława – Zdzisia, Zdzicha","Zefiryna","Zenobia – Zenia","Zenona","Zofia – Zosia, Zośka, Zosieńka","Zuzanna – Zuzia, Zuzanka, Zuza, Zuzka","Zwinisława","Zygfryda – Zyga, Fryda, Frydzia","Zyta – Zytka","Żaklina – Żaklinka","Żaneta – Żanetka, Żanet","Żanna","Żelisława","Żużanna","Żywia – Żywka, Żywa","Żywisława"];


const splitNames1 = [];
const splitNames2 = [];
const splitNames3 = [];
const girls = [];

for (i=0; i<girlList.length; i++) {
  splitNames1.push(girlList[i].split(" – "));
  for (elm=0; elm<splitNames1[i].length; elm++)
    splitNames2.push(splitNames1[i][elm]);
};

for (i=0; i<splitNames2.length; i++) {
  splitNames3.push(splitNames2[i].split(", "));
  for (elm=0; elm<splitNames3[i].length; elm++)
    girls.push(splitNames3[i][elm]);
};