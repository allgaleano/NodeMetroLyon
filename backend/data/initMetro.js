const Graph = require('../models/Graph');
const Station = require('../models/Station');
const Connection = require('../models/Connection');

const metro = new Graph();

const vaulx_en_velin = new Station("Vaulx-en-Velin La Soie", 45.761124560997, 4.922221370456345)
const laurent_bonnevay = new Station("Laurent Bonnevay",45.76501875199019,4.908850195593299)
const cusset = new Station("Cusset",45.76573806795028,4.900279597442746)
const flachet = new Station("Flachet",45.76782353715553,4.889840837922116)
const gratte_ciel = new Station("Gratte Ciel", 45.76920514933934,4.882478368607292)
const republique_villeurbanne = new Station("République - Villeurbanne",45.77079709254615, 4.8736592711643665)
const charpennes_charles_hernu = new Station("Charpennes Charles Hernu",45.770644975669406,4.863087628128049)
const massena = new Station("Masséna",45.76942732597907,4.85303708210038)
const foch = new Station("Foch", 45.76883360225932,4.844126037922232)
const hote_de_ville = new Station("Hôtel de Ville L. Pradel",45.767482296615775,4.83632072627848)
const cordeliers = new Station("Cordeliers",45.763345772122676,4.835713910935756)
const bellecour = new Station("Bellecour",45.75801630649413,4.833588037921758)
const ampere_victor_hugo = new Station("Ampère - Victor Hugo",45.753087123024336,4.829139268606585)
const perrache = new Station("Perrache",45.74874974429806,4.825743010935111)
const garre_dOullins = new Station("Gare d'Oullins",45.71697050553781,4.814602019140676)
const stade_de_gerland = new Station("Stade de Gerland - Le Lou",45.727140576364334,4.8310003532619294)
const debourg = new Station("Debourg",45.731289626149554,4.8344342312780935)
const place_jean_jaures = new Station("Place Jean Jaurès",45.73819047297242,4.8375534704553536)
const jean_mace = new Station("Jean Macé",45.745923796261984,4.842322692115496)
const saxe_gambetta = new Station("Saxe Gambetta",45.753871722835314,4.8469861756322965)
const place_guichard_bourse_du_travail = new Station("Place Guichard Bourse du Travail",45.759486149295675,4.847622095593051)
const gare_partdieu_vmerle = new Station("Gare Part-Dieu V.Merle",45.761719457310384,4.857755626986203)
const brotteaux = new Station("Brotteaux",45.766972171109224,4.859352912785328)
const cuire = new Station("Cuire",45.78604340414825,4.833372955114947)
const henon = new Station("Hénon",45.77921972773108,4.827396993476692)
const croix_rousse = new Station("Croix-Rousse",45.774423201007664,4.831913833338751)
const croix_paquet = new Station("Croix Paquet",45.771152945435986,4.8362911985368)
const gare_de_vaise = new Station("Gare de Vaise",45.78059809486491,4.805047971093982)
const valmy = new Station("Valmy",45.77473908803626,4.805509311043264)
const gorge_de_loup = new Station("George de Loup",45.76619266397072,4.805047971072226)
const vieux_lyon = new Station("Vieux Lyon",45.760159986169164,4.825722438126594)
const fourviere = new Station("Fourvière",45.76258789646761,4.8215764757643775)
const minime_theatres_romains = new Station("Minimes Théatres Romains",45.75858001925061,4.821243626278051)
const st_just = new Station("St Just",45.758520489969875,4.816433943469994)
const guillotiere = new Station("Guillotière Gabriel Péri",45.75552461362028,4.842213392212922)
const garibaldi = new Station("Garibaldi",45.75166932520962,4.854015111809338)
const sans_souci = new Station("Sans Souci",45.748090780347745,4.86451864230611)
const monplaisir_lumiere = new Station("Monplaisir - Lumière",45.74566502532433,4.871267080176486)
const grange_blanche = new Station("Grange Blanche",45.74305197992176,4.878755807748202)
const laennec = new Station("Laënnec",45.73843003964004,4.886373471517267)
const mermoz_pinel = new Station("Mermoz Pinel",45.73097895157334,4.887221049658965)
const parilly = new Station("Parilly",45.7196244276459,4.887521457049011)
const gare_de_venissieux = new Station("Gare de Vénissieux",45.70585429585398,4.887714840222332)

metro.addStation(vaulx_en_velin)
metro.addStation(laurent_bonnevay)
metro.addStation(cusset)
metro.addStation(flachet)
metro.addStation(gratte_ciel)
metro.addStation(republique_villeurbanne)
metro.addStation(charpennes_charles_hernu)
metro.addStation(massena)
metro.addStation(foch)
metro.addStation(hote_de_ville)
metro.addStation(cordeliers)
metro.addStation(bellecour)
metro.addStation(ampere_victor_hugo)
metro.addStation(perrache)
metro.addStation(garre_dOullins)
metro.addStation(stade_de_gerland)
metro.addStation(debourg)
metro.addStation(place_jean_jaures)
metro.addStation(jean_mace)
metro.addStation(saxe_gambetta)
metro.addStation(place_guichard_bourse_du_travail)
metro.addStation(gare_partdieu_vmerle)
metro.addStation(brotteaux)
metro.addStation(cuire)
metro.addStation(henon)
metro.addStation(croix_rousse)
metro.addStation(croix_paquet)
metro.addStation(gare_de_vaise)
metro.addStation(valmy)
metro.addStation(gorge_de_loup)
metro.addStation(vieux_lyon)
metro.addStation(fourviere)
metro.addStation(minime_theatres_romains)
metro.addStation(st_just)
metro.addStation(guillotiere)
metro.addStation(garibaldi)
metro.addStation(sans_souci)
metro.addStation(monplaisir_lumiere)
metro.addStation(grange_blanche)
metro.addStation(laennec)
metro.addStation(mermoz_pinel)
metro.addStation(parilly)
metro.addStation(gare_de_venissieux)

metro.addConnection(vaulx_en_velin, laurent_bonnevay, 1, 'A');

metro.addConnection(laurent_bonnevay, vaulx_en_velin, 2, 'A');
metro.addConnection(laurent_bonnevay, cusset, 2, 'A');

metro.addConnection(cusset, laurent_bonnevay, 1, 'A');
metro.addConnection(cusset, flachet, 1, 'A');

metro.addConnection(flachet, cusset, 2, 'A');
metro.addConnection(flachet, gratte_ciel, 2, 'A');

metro.addConnection(gratte_ciel, flachet, 2, 'A');
metro.addConnection(gratte_ciel, republique_villeurbanne, 1, 'A');

metro.addConnection(republique_villeurbanne, gratte_ciel, 1, 'A');
metro.addConnection(republique_villeurbanne, charpennes_charles_hernu, 2, 'A');

metro.addConnection(charpennes_charles_hernu, republique_villeurbanne, 2, 'A');
metro.addConnection(charpennes_charles_hernu, massena, 1, 'A');

metro.addConnection(massena, charpennes_charles_hernu, 1, 'A');
metro.addConnection(massena, foch, 2, 'A');

metro.addConnection(foch, massena, 2, 'A');
metro.addConnection(foch, hote_de_ville, 2, 'A');

metro.addConnection(hote_de_ville, foch, 2, 'A');
metro.addConnection(hote_de_ville, cordeliers, 1, 'A');

metro.addConnection(cordeliers, hote_de_ville, 2, 'A');
metro.addConnection(cordeliers, bellecour, 1, 'A');

metro.addConnection(bellecour, cordeliers, 1, 'A');
metro.addConnection(bellecour, ampere_victor_hugo, 2, 'A');

metro.addConnection(ampere_victor_hugo, bellecour, 1, 'A');
metro.addConnection(ampere_victor_hugo, perrache, 1, 'A');

metro.addConnection(perrache, ampere_victor_hugo, 1, 'A');

metro.addConnection(garre_dOullins, stade_de_gerland, 2, 'B');

metro.addConnection(stade_de_gerland, garre_dOullins, 3, 'B');
metro.addConnection(stade_de_gerland, debourg, 2, 'B');

metro.addConnection(debourg, stade_de_gerland, 3, 'B');
metro.addConnection(debourg, place_jean_jaures, 2, 'B');

metro.addConnection(place_jean_jaures, debourg, 1, 'B');
metro.addConnection(place_jean_jaures, jean_mace, 2, 'B');

metro.addConnection(jean_mace, place_jean_jaures, 2, 'B');
metro.addConnection(jean_mace, saxe_gambetta, 2, 'B');

metro.addConnection(saxe_gambetta, jean_mace, 2, 'B');
metro.addConnection(saxe_gambetta, place_guichard_bourse_du_travail, 2, 'B');

metro.addConnection(place_guichard_bourse_du_travail, saxe_gambetta, 2, 'B');
metro.addConnection(place_guichard_bourse_du_travail, gare_partdieu_vmerle, 2, 'B');

metro.addConnection(gare_partdieu_vmerle, place_guichard_bourse_du_travail, 2, 'B');
metro.addConnection(gare_partdieu_vmerle, brotteaux, 1, 'B');

metro.addConnection(brotteaux, gare_partdieu_vmerle, 2, 'B');
metro.addConnection(brotteaux, charpennes_charles_hernu, 2, 'B');

metro.addConnection(charpennes_charles_hernu, brotteaux, 1, 'B');
 
metro.addConnection(cuire, henon, 2, 'C');

metro.addConnection(henon, cuire, 2, 'C');
metro.addConnection(henon, croix_rousse, 3, 'C');

metro.addConnection(croix_rousse, henon, 2, 'C');
metro.addConnection(croix_rousse, croix_paquet, 2, 'C');

metro.addConnection(croix_paquet, croix_rousse, 2, 'C');
metro.addConnection(croix_paquet, hote_de_ville, 2, 'C');

metro.addConnection(hote_de_ville, croix_paquet, 2, 'C');

metro.addConnection(gare_de_vaise, valmy, 1, 'D');

metro.addConnection(valmy, gare_de_vaise, 1, 'D');
metro.addConnection(valmy, gorge_de_loup, 2, 'D');

metro.addConnection(gorge_de_loup, valmy, 1, 'D');
metro.addConnection(gorge_de_loup, vieux_lyon, 3, 'D');

metro.addConnection(vieux_lyon, gorge_de_loup, 3, 'D');
metro.addConnection(vieux_lyon, fourviere, 3, 'D');
metro.addConnection(fourviere, vieux_lyon, 3, 'D');
metro.addConnection(vieux_lyon, minime_theatres_romains, 2, 'D');
metro.addConnection(minime_theatres_romains, vieux_lyon, 2, 'D');
metro.addConnection(minime_theatres_romains, st_just, 2, 'D');
metro.addConnection(vieux_lyon, bellecour, 2, 'D');

metro.addConnection(bellecour, vieux_lyon, 1, 'D');
metro.addConnection(bellecour, guillotiere, 2, 'D');

metro.addConnection(guillotiere, bellecour, 1, 'D');
metro.addConnection(guillotiere, saxe_gambetta, 1, 'D');

metro.addConnection(saxe_gambetta, guillotiere, 1, 'D');
metro.addConnection(saxe_gambetta, garibaldi, 1, 'D');

metro.addConnection(garibaldi, saxe_gambetta, 1, 'D');    
metro.addConnection(garibaldi, sans_souci, 2, 'D');    

metro.addConnection(sans_souci, garibaldi, 1, 'D');
metro.addConnection(sans_souci, monplaisir_lumiere, 1, 'D');

metro.addConnection(monplaisir_lumiere, sans_souci, 1, 'D');
metro.addConnection(monplaisir_lumiere, grange_blanche, 1, 'D'); 

metro.addConnection(grange_blanche, monplaisir_lumiere, 1, 'D');
metro.addConnection(grange_blanche, laennec, 2, 'D');

metro.addConnection(laennec, grange_blanche, 1, 'D');
metro.addConnection(laennec, mermoz_pinel, 1, 'D');

metro.addConnection(mermoz_pinel, laennec, 1, 'D');
metro.addConnection(mermoz_pinel, parilly, 2, 'D');

metro.addConnection(parilly, mermoz_pinel, 2, 'D');
metro.addConnection(parilly, gare_de_venissieux, 2, 'D');

metro.addConnection(gare_de_venissieux, parilly, 3, 'D');

// Exportar el grafo para poder usarlo en otras partes de la aplicación
module.exports = metro;