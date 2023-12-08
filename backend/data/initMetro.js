const Graph = require('../models/Graph');
const Station = require('../models/Station');
const Connection = require('../models/Connection');

const metro = new Graph();

const vaulx_en_velin_A = new Station("Vaulx-en-Velin La Soie", 'A', 45.761124560997, 4.922221370456345)
const laurent_bonnevay_A = new Station("Laurent Bonnevay", 'A', 45.76501875199019, 4.908850195593299)
const cusset_A = new Station("Cusset", 'A', 45.76573806795028, 4.900279597442746)
const flachet_A = new Station("Flachet", 'A', 45.76782353715553, 4.889840837922116)
const gratte_ciel_A = new Station("Gratte Ciel", 'A', 45.76920514933934, 4.882478368607292)
const republique_villeurbanne_A = new Station("République - Villeurbanne", 'A', 45.77079709254615, 4.8736592711643665)
const charpennes_charles_hernu_A = new Station("Charpennes Charles Hernu", 'A', 45.770644975669406, 4.863087628128049)
const massena_A = new Station("Masséna", 'A', 45.76942732597907, 4.85303708210038)
const foch_A = new Station("Foch", 'A', 45.76883360225932, 4.844126037922232)
const hote_de_ville_A = new Station("Hôtel de Ville L. Pradel", 'A', 45.767482296615775, 4.83632072627848)
const cordeliers_A = new Station("Cordeliers", 'A', 45.763345772122676, 4.835713910935756)
const bellecour_A = new Station("Bellecour", 'A', 45.75801630649413, 4.833588037921758)
const ampere_victor_hugo_A = new Station("Ampère - Victor Hugo", 'A', 45.753087123024336, 4.829139268606585)
const perrache_A = new Station("Perrache", 'A', 45.74874974429806, 4.825743010935111)
const garre_dOullins_B = new Station("Gare d'Oullins", 'B', 45.71697050553781, 4.814602019140676)
const stade_de_gerland_B = new Station("Stade de Gerland - Le Lou", 'B', 45.727140576364334, 4.8310003532619294)
const debourg_B = new Station("Debourg", 'B', 45.731289626149554, 4.8344342312780935)
const place_jean_jaures_B = new Station("Place Jean Jaurès", 'B', 45.73819047297242, 4.8375534704553536)
const jean_mace_B = new Station("Jean Macé", 'B', 45.745923796261984, 4.842322692115496)
const saxe_gambetta_B = new Station("Saxe Gambetta", 'B', 45.753871722835314, 4.8469861756322965)
const place_guichard_bourse_du_travail_B = new Station("Place Guichard Bourse du Travail", 'B', 45.759486149295675, 4.847622095593051)
const gare_partdieu_vmerle_B = new Station("Gare Part-Dieu V.Merle", 'B', 45.761719457310384, 4.857755626986203)
const brotteaux_B = new Station("Brotteaux", 'B', 45.766972171109224, 4.859352912785328)
const charpennes_charles_hernu_B = new Station("Charpennes Charles Hernu", 'B', 45.770644975669406, 4.863087628128049)
const cuire_C = new Station("Cuire", 'C', 45.78604340414825, 4.833372955114947)
const henon_C = new Station("Hénon", 'C', 45.77921972773108, 4.827396993476692)
const croix_rousse_C = new Station("Croix-Rousse", 'C', 45.774423201007664, 4.831913833338751)
const croix_paquet_C = new Station("Croix Paquet", 'C', 45.771152945435986, 4.8362911985368)
const hote_de_ville_C = new Station("Hôtel de Ville L. Pradel", 'C', 45.767482296615775, 4.83632072627848)
const gare_de_vaise_D = new Station("Gare de Vaise", 'D', 45.78059809486491, 4.805047971093982)
const valmy_D = new Station("Valmy", 'D', 45.77473908803626, 4.805509311043264)
const gorge_de_loup_D = new Station("George de Loup", 'D', 45.76619266397072, 4.805047971072226)
const vieux_lyon_D = new Station("Vieux Lyon", 'D', 45.760159986169164, 4.825722438126594)
const fourviere_D = new Station("Fourvière", 'D', 45.76258789646761, 4.8215764757643775)
const minime_theatres_romains_D = new Station("Minimes Théatres Romains", 'D', 45.75858001925061, 4.821243626278051)
const st_just_D = new Station("St Just", 'D', 45.758520489969875, 4.816433943469994)
const bellecour_D = new Station("Bellecour", 'D', 45.75801630649413, 4.833588037921758)
const guillotiere_D = new Station("Guillotière Gabriel Péri", 'D', 45.75552461362028, 4.842213392212922)
const saxe_gambetta_D = new Station("Saxe Gambetta", 'D', 45.753871722835314, 4.8469861756322965)
const garibaldi_D = new Station("Garibaldi", 'D', 45.75166932520962, 4.854015111809338)
const sans_souci_D = new Station("Sans Souci", 'D', 45.748090780347745, 4.86451864230611)
const monplaisir_lumiere_D = new Station("Monplaisir - Lumière", 'D', 45.74566502532433, 4.871267080176486)
const grange_blanche_D = new Station("Grange Blanche", 'D', 45.74305197992176, 4.878755807748202)
const laennec_D = new Station("Laënnec", 'D', 45.73843003964004, 4.886373471517267)
const mermoz_pinel_D = new Station("Mermoz Pinel", 'D', 45.73097895157334, 4.887221049658965)
const parilly_D = new Station("Parilly", 'D', 45.7196244276459, 4.887521457049011)
const gare_de_venissieux_D = new Station("Gare de Vénissieux", 'D', 45.70585429585398, 4.887714840222332)

metro.addStation(vaulx_en_velin_A)
metro.addStation(laurent_bonnevay_A)
metro.addStation(cusset_A)
metro.addStation(flachet_A)
metro.addStation(gratte_ciel_A)
metro.addStation(republique_villeurbanne_A)
metro.addStation(charpennes_charles_hernu_A)
metro.addStation(massena_A)
metro.addStation(foch_A)
metro.addStation(hote_de_ville_A)
metro.addStation(cordeliers_A)
metro.addStation(bellecour_A)
metro.addStation(ampere_victor_hugo_A)
metro.addStation(perrache_A)
metro.addStation(garre_dOullins_B)
metro.addStation(stade_de_gerland_B)
metro.addStation(debourg_B)
metro.addStation(place_jean_jaures_B)
metro.addStation(jean_mace_B)
metro.addStation(saxe_gambetta_B)
metro.addStation(place_guichard_bourse_du_travail_B)
metro.addStation(gare_partdieu_vmerle_B)
metro.addStation(brotteaux_B)
metro.addStation(charpennes_charles_hernu_B)
metro.addStation(cuire_C)
metro.addStation(henon_C)
metro.addStation(croix_rousse_C)
metro.addStation(croix_paquet_C)
metro.addStation(hote_de_ville_C)
metro.addStation(gare_de_vaise_D)
metro.addStation(valmy_D)
metro.addStation(gorge_de_loup_D)
metro.addStation(vieux_lyon_D)
metro.addStation(fourviere_D)
metro.addStation(minime_theatres_romains_D)
metro.addStation(st_just_D)
metro.addStation(bellecour_D)
metro.addStation(guillotiere_D)
metro.addStation(saxe_gambetta_D)
metro.addStation(garibaldi_D)
metro.addStation(sans_souci_D)
metro.addStation(monplaisir_lumiere_D)
metro.addStation(grange_blanche_D)
metro.addStation(laennec_D)
metro.addStation(mermoz_pinel_D)
metro.addStation(parilly_D)
metro.addStation(gare_de_venissieux_D)

metro.addConnection(vaulx_en_velin_A, laurent_bonnevay_A, 1);

metro.addConnection(laurent_bonnevay_A, vaulx_en_velin_A, 2);
metro.addConnection(laurent_bonnevay_A, cusset_A, 2);

metro.addConnection(cusset_A, laurent_bonnevay_A, 1);
metro.addConnection(cusset_A, flachet_A, 1);

metro.addConnection(flachet_A, cusset_A, 2);
metro.addConnection(flachet_A, gratte_ciel_A, 2);

metro.addConnection(gratte_ciel_A, flachet_A, 2);
metro.addConnection(gratte_ciel_A, republique_villeurbanne_A, 1);

metro.addConnection(republique_villeurbanne_A, gratte_ciel_A, 1);
metro.addConnection(republique_villeurbanne_A, charpennes_charles_hernu_A, 2);

metro.addConnection(charpennes_charles_hernu_A, republique_villeurbanne_A, 2);
metro.addConnection(charpennes_charles_hernu_A, charpennes_charles_hernu_B, 5);
metro.addConnection(charpennes_charles_hernu_A, massena_A, 1);

metro.addConnection(massena_A, charpennes_charles_hernu_A, 1);
metro.addConnection(massena_A, foch_A, 2);

metro.addConnection(foch_A, massena_A, 2);
metro.addConnection(foch_A, hote_de_ville_A, 2);

metro.addConnection(hote_de_ville_A, foch_A, 2);
metro.addConnection(hote_de_ville_A, hote_de_ville_C, 5);
metro.addConnection(hote_de_ville_A, cordeliers_A, 1);

metro.addConnection(cordeliers_A, hote_de_ville_A, 2);
metro.addConnection(cordeliers_A, bellecour_A, 1);

metro.addConnection(bellecour_A, cordeliers_A, 1);
metro.addConnection(bellecour_A, bellecour_D, 5);
metro.addConnection(bellecour_A, ampere_victor_hugo_A, 2);

metro.addConnection(ampere_victor_hugo_A, bellecour_A, 1);
metro.addConnection(ampere_victor_hugo_A, perrache_A, 1);

metro.addConnection(perrache_A, ampere_victor_hugo_A, 1);

metro.addConnection(garre_dOullins_B, stade_de_gerland_B, 2);

metro.addConnection(stade_de_gerland_B, garre_dOullins_B, 3);
metro.addConnection(stade_de_gerland_B, debourg_B, 2);

metro.addConnection(debourg_B, stade_de_gerland_B, 3);
metro.addConnection(debourg_B, place_jean_jaures_B, 2);

metro.addConnection(place_jean_jaures_B, debourg_B, 1);
metro.addConnection(place_jean_jaures_B, jean_mace_B, 2);

metro.addConnection(jean_mace_B, place_jean_jaures_B, 2);
metro.addConnection(jean_mace_B, saxe_gambetta_B, 2);

metro.addConnection(saxe_gambetta_B, jean_mace_B, 2);
metro.addConnection(saxe_gambetta_B, saxe_gambetta_D, 3);
metro.addConnection(saxe_gambetta_B, place_guichard_bourse_du_travail_B, 2);

metro.addConnection(place_guichard_bourse_du_travail_B, saxe_gambetta_B, 2);
metro.addConnection(place_guichard_bourse_du_travail_B, gare_partdieu_vmerle_B, 2);

metro.addConnection(gare_partdieu_vmerle_B, place_guichard_bourse_du_travail_B, 2);
metro.addConnection(gare_partdieu_vmerle_B, brotteaux_B, 1);

metro.addConnection(brotteaux_B, gare_partdieu_vmerle_B, 2);
metro.addConnection(brotteaux_B, charpennes_charles_hernu_B, 2);

metro.addConnection(charpennes_charles_hernu_B, charpennes_charles_hernu_A, 5);
metro.addConnection(charpennes_charles_hernu_B, brotteaux_B, 1);

metro.addConnection(cuire_C, henon_C, 2);

metro.addConnection(henon_C, cuire_C, 2);
metro.addConnection(henon_C, croix_rousse_C, 3);

metro.addConnection(croix_rousse_C, henon_C, 2);
metro.addConnection(croix_rousse_C, croix_paquet_C, 2);

metro.addConnection(croix_paquet_C, croix_rousse_C, 2);
metro.addConnection(croix_paquet_C, hote_de_ville_C, 2);

metro.addConnection(hote_de_ville_C, croix_paquet_C, 2);
metro.addConnection(hote_de_ville_C, hote_de_ville_A, 8);

metro.addConnection(gare_de_vaise_D, valmy_D, 1);

metro.addConnection(valmy_D, gare_de_vaise_D, 1);
metro.addConnection(valmy_D, gorge_de_loup_D, 2);

metro.addConnection(gorge_de_loup_D, valmy_D, 1);
metro.addConnection(gorge_de_loup_D, vieux_lyon_D, 3);

metro.addConnection(vieux_lyon_D, gorge_de_loup_D, 3);
metro.addConnection(vieux_lyon_D, fourviere_D, 3);
metro.addConnection(fourviere_D, vieux_lyon_D, 3);
metro.addConnection(vieux_lyon_D, minime_theatres_romains_D, 2);
metro.addConnection(minime_theatres_romains_D, vieux_lyon_D, 2);
metro.addConnection(minime_theatres_romains_D, st_just_D, 2);
metro.addConnection(vieux_lyon_D, bellecour_D, 2);

metro.addConnection(bellecour_D, vieux_lyon_D, 1);
metro.addConnection(bellecour_D, bellecour_A, 3);
metro.addConnection(bellecour_D, guillotiere_D, 2);

metro.addConnection(guillotiere_D, bellecour_D, 1);
metro.addConnection(guillotiere_D, saxe_gambetta_D, 1);

metro.addConnection(saxe_gambetta_D, guillotiere_D, 1);
metro.addConnection(saxe_gambetta_D, saxe_gambetta_B, 3);
metro.addConnection(saxe_gambetta_D, garibaldi_D, 1);

metro.addConnection(garibaldi_D, saxe_gambetta_D, 1);
metro.addConnection(garibaldi_D, sans_souci_D, 2);

metro.addConnection(sans_souci_D, garibaldi_D, 1);
metro.addConnection(sans_souci_D, monplaisir_lumiere_D, 1);

metro.addConnection(monplaisir_lumiere_D, sans_souci_D, 1);
metro.addConnection(monplaisir_lumiere_D, grange_blanche_D, 1);

metro.addConnection(grange_blanche_D, monplaisir_lumiere_D, 1);
metro.addConnection(grange_blanche_D, laennec_D, 2);

metro.addConnection(laennec_D, grange_blanche_D, 1);
metro.addConnection(laennec_D, mermoz_pinel_D, 1);

metro.addConnection(mermoz_pinel_D, laennec_D, 1);
metro.addConnection(mermoz_pinel_D, parilly_D, 2);

metro.addConnection(parilly_D, mermoz_pinel_D, 2);
metro.addConnection(parilly_D, gare_de_venissieux_D, 2);

metro.addConnection(gare_de_venissieux_D, parilly_D, 3);

// Exportar el grafo para poder usarlo en otras partes de la aplicación
module.exports = metro;
