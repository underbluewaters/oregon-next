/*
This module was automatically generated using tiny-geoprocessing-recipes.
To update it with newer data, simply re-run with the same arguments:

npx tiny-geoprocessing-recipes \
  'data/src/BIO_Species_Present_Oregon_sites_MARINe_2018.fgb' \
  'src/data/researchSpecies.ts' \
  --includeProperties species
*/



import Flatbush from 'flatbush';
import booleanIntersects from "@turf/boolean-intersects";
import bboxPolygon from "@turf/bbox-polygon";
import createBBox from "@turf/bbox";
import { Feature, MultiPolygon, Polygon } from '@seasketch/geoprocessing';

export interface BIO_Species_Present_Oregon_sites_MARINe_2018 {
  species: string;
}


const featureData: BIO_Species_Present_Oregon_sites_MARINe_2018[] = [
  {
    "species": "tegula funebralis"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "tonicella spp"
  },
  {
    "species": "tonicella lineata; tonicella lokii"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "spirorbis spp"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "scytosiphon spp; melanosiphon spp"
  },
  {
    "species": "schizymenia spp; halymenia spp"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "pyropia spp"
  },
  {
    "species": "pterosiphonia dendroidea; pterosiphonia pennata"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "plocamium violaceum"
  },
  {
    "species": "plocamium pacificum"
  },
  {
    "species": "pista spp"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "phyllospadix torreyi"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "petrospongium rugosum"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "pagurus hirsutiusculus"
  },
  {
    "species": "pagurus granosimanus"
  },
  {
    "species": "osmundea spectabilis"
  },
  {
    "species": "onchidella borealis"
  },
  {
    "species": "odonthalia washingtoniensis"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "nienburgia andersoniana"
  },
  {
    "species": "neorhodomela oregona"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "neoptilota spp; ptilota spp"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mopalia spp"
  },
  {
    "species": "microcladia coulteri"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mazzaella oregona"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "lottia scutum"
  },
  {
    "species": "lottia scabra; lottia conus"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "lirabuccinum dirum"
  },
  {
    "species": "lacuna spp"
  },
  {
    "species": "katharina tunicata"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "henricia spp"
  },
  {
    "species": "halosaccion glandiforme"
  },
  {
    "species": "haliclona spp"
  },
  {
    "species": "halichondria spp"
  },
  {
    "species": "gelidium coulteri"
  },
  {
    "species": "erythrophyllum delesserioides"
  },
  {
    "species": "epitonium tinctum"
  },
  {
    "species": "epiactis prolifera"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "endarachne spp; petalonia spp; phaeostrophion spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "dilsea californica"
  },
  {
    "species": "diatoms"
  },
  {
    "species": "cumagloia andersonii"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "cryptopleura spp; hymenena spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "costaria costata"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "constantinea simplex"
  },
  {
    "species": "cladophora spp"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "centroceras spp; ceramium spp; corallophila spp"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "calliarthron spp"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "balanus spp"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "analipus japonicus"
  },
  {
    "species": "alaria marginata"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "velutina spp"
  },
  {
    "species": "urticina coriacea"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "tonicella lineata; tonicella lokii"
  },
  {
    "species": "tetraclita rubescens"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "symplectoscyphus turgidus"
  },
  {
    "species": "styela montereyensis"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "small balanus spp; semibalanus spp"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "sculpins"
  },
  {
    "species": "schizymenia spp; halymenia spp"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "ritterella spp"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "pyropia spp"
  },
  {
    "species": "pugettia producta"
  },
  {
    "species": "pterosiphonia spp"
  },
  {
    "species": "pterosiphonia dendroidea; pterosiphonia pennata"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "prionitis sternbergii"
  },
  {
    "species": "prionitis lanceolata"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "polyneura latissima"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "plocamium violaceum"
  },
  {
    "species": "plocamium pacificum"
  },
  {
    "species": "plocamium oregonum"
  },
  {
    "species": "pista spp"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "phyllospadix torreyi"
  },
  {
    "species": "halichondria spp"
  },
  {
    "species": "gunnel"
  },
  {
    "species": "gelidium spp"
  },
  {
    "species": "gelidium coulteri"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "flustrellidra corniculata"
  },
  {
    "species": "farlowia spp; pikea spp"
  },
  {
    "species": "erythrophyllum delesserioides"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "endarachne spp; petalonia spp; phaeostrophion spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "dodecaceria spp"
  },
  {
    "species": "dilsea californica"
  },
  {
    "species": "diatoms"
  },
  {
    "species": "derbesia marina"
  },
  {
    "species": "cyanoplax spp"
  },
  {
    "species": "cucumaria spp; pseudocnus spp"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "cryptopleura spp; hymenena spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "costaria costata"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "constantinea simplex"
  },
  {
    "species": "colpomenia spp; leathesia spp"
  },
  {
    "species": "haliclona spp"
  },
  {
    "species": "colonial tunicate"
  },
  {
    "species": "colonial diatom"
  },
  {
    "species": "codium setchellii"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "chondracanthus canaliculatus"
  },
  {
    "species": "chaetomorpha spp"
  },
  {
    "species": "chaetomorpha spiralis"
  },
  {
    "species": "ceratostoma foliatum"
  },
  {
    "species": "centroceras spp; ceramium spp; polysiphonia spp"
  },
  {
    "species": "centroceras spp; ceramium spp; corallophila spp"
  },
  {
    "species": "cancer productus"
  },
  {
    "species": "cancer oregonensis"
  },
  {
    "species": "cancer magister"
  },
  {
    "species": "calliostoma ligatum"
  },
  {
    "species": "calliarthron spp"
  },
  {
    "species": "bugula spp"
  },
  {
    "species": "bryopsis spp"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "balanus nubilus"
  },
  {
    "species": "balanus glandula; semibalanus cariosus"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "balanus crenatus"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "anthopleura sola"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "anthopleura artemisia"
  },
  {
    "species": "analipus japonicus"
  },
  {
    "species": "amphissa columbiana"
  },
  {
    "species": "alia spp"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "phragmatopoma spp; sabellaria spp"
  },
  {
    "species": "petrolisthes spp"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "pagurus samuelis"
  },
  {
    "species": "pagurus hirsutiusculus"
  },
  {
    "species": "pagurus granosimanus"
  },
  {
    "species": "pachygrapsus crassipes"
  },
  {
    "species": "osmundea spectabilis"
  },
  {
    "species": "osmundea sinicola"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "ocinebrina lurida"
  },
  {
    "species": "nucella lamellosa"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "neorhodomela oregona"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "neoptilota spp; ptilota spp"
  },
  {
    "species": "mytilus trossulus; galloprovincialis; edulis"
  },
  {
    "species": "mytilus spp"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mopalia spp"
  },
  {
    "species": "microcladia coulteri"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mazzaella spp"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "lottia scutum"
  },
  {
    "species": "lottia scabra; lottia conus"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "littorina spp"
  },
  {
    "species": "littorina sitkana; littorina subrotundata"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "littorina keenae"
  },
  {
    "species": "lirularia spp; margarites spp"
  },
  {
    "species": "lessoniopsis littoralis"
  },
  {
    "species": "leptasterias spp"
  },
  {
    "species": "lepidozona spp"
  },
  {
    "species": "laminaria sinclairii"
  },
  {
    "species": "laminaria setchellii"
  },
  {
    "species": "lacuna spp"
  },
  {
    "species": "katharina tunicata"
  },
  {
    "species": "idotea spp"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "henricia spp"
  },
  {
    "species": "halosaccion glandiforme"
  },
  {
    "species": "abietinaria spp"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "aglaophenia spp"
  },
  {
    "species": "ahnfeltia fastigiata"
  },
  {
    "species": "ahnfeltiopsis leptophylla"
  },
  {
    "species": "ahnfeltiopsis linearis"
  },
  {
    "species": "alaria marginata"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "tonicella lineata; tonicella lokii"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "schizymenia spp; halymenia spp"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "prionitis sternbergii"
  },
  {
    "species": "prionitis lanceolata"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "phragmatopoma spp; sabellaria spp"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "onchidella borealis"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "neorhodomela oregona"
  },
  {
    "species": "mytilus trossulus; galloprovincialis; edulis"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mopalia spp"
  },
  {
    "species": "microcladia coulteri"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mesophyllum spp; clathromorphum spp"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "ligia spp"
  },
  {
    "species": "laminaria sinclairii"
  },
  {
    "species": "katharina tunicata"
  },
  {
    "species": "idotea spp"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "haliclona spp"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "fucaceae"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "dilsea californica"
  },
  {
    "species": "diatoms"
  },
  {
    "species": "cyanoplax spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "balanus nubilus"
  },
  {
    "species": "balanus glandula; semibalanus cariosus"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "alaria marginata"
  },
  {
    "species": "leptasterias spp"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "tricellaria spp"
  },
  {
    "species": "tonicella lineata; tonicella lokii"
  },
  {
    "species": "tiffaniella snyderiae"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "smallmytilusspp"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "aglaophenia spp"
  },
  {
    "species": "ahnfeltia fastigiata"
  },
  {
    "species": "ahnfeltiopsis linearis"
  },
  {
    "species": "ahnfeltiopsis spp; ahnfeltia spp"
  },
  {
    "species": "alaria marginata"
  },
  {
    "species": "amphissa columbiana"
  },
  {
    "species": "anthopleura artemisia"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "anthopleura sola"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "antithamnionella spp"
  },
  {
    "species": "aplidium arenatum; aplidium propinquum"
  },
  {
    "species": "aplidium californicum; aplidium solidum"
  },
  {
    "species": "aplidium spp"
  },
  {
    "species": "balanus crenatus"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "boringclam"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "bugula spp"
  },
  {
    "species": "calliarthron spp"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "cancer antennarius"
  },
  {
    "species": "cancer magister"
  },
  {
    "species": "centroceras spp; ceramium spp; corallophila spp"
  },
  {
    "species": "centroceras spp; ceramium spp; polysiphonia spp"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "colonial diatom"
  },
  {
    "species": "colpomenia spp; leathesia spp"
  },
  {
    "species": "constantinea simplex"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "cryptopleura spp; hymenena spp"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "derbesia marina"
  },
  {
    "species": "desmarestia ligulata"
  },
  {
    "species": "dilsea californica"
  },
  {
    "species": "dodecaceria spp"
  },
  {
    "species": "endarachne spp; petalonia spp; phaeostrophion spp"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "erythrophyllum delesserioides"
  },
  {
    "species": "farlowia spp; pikea spp"
  },
  {
    "species": "flustrellidra corniculata"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "gelidium coulteri"
  },
  {
    "species": "grateloupia californica"
  },
  {
    "species": "halichondria spp"
  },
  {
    "species": "hemigrapsus nudus"
  },
  {
    "species": "silvetia compressa"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "scytosiphon spp; melanosiphon spp"
  },
  {
    "species": "sculpins"
  },
  {
    "species": "schizymenia spp; halymenia spp"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "pyropia spp"
  },
  {
    "species": "pugettia producta"
  },
  {
    "species": "pugettia gracilis; pugettia richii"
  },
  {
    "species": "pterosiphonia dendroidea; pterosiphonia pennata"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "prionitis sternbergii"
  },
  {
    "species": "prionitis spp"
  },
  {
    "species": "prionitis linearis"
  },
  {
    "species": "prionitis lanceolata"
  },
  {
    "species": "potamilla occelata"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "plocamium violaceum"
  },
  {
    "species": "plocamium pacificum"
  },
  {
    "species": "plocamium oregonum"
  },
  {
    "species": "pista spp"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "phyllospadix torreyi"
  },
  {
    "species": "phyllospadix serrulatus"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "pagurus samuelis"
  },
  {
    "species": "pagurus hirsutiusculus"
  },
  {
    "species": "pagurus granosimanus"
  },
  {
    "species": "osmundea spectabilis"
  },
  {
    "species": "ophlitaspongia pennata"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "ocenebra circumtexta"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "neorhodomela oregona"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "neoptilota spp; ptilota spp"
  },
  {
    "species": "mytilus trossulus; galloprovincialis; edulis"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mazzaella spp"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "lottia scutum"
  },
  {
    "species": "lottia scabra; lottia conus"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "lirabuccinum dirum"
  },
  {
    "species": "laminaria sinclairii"
  },
  {
    "species": "laminaria setchellii"
  },
  {
    "species": "lacuna spp"
  },
  {
    "species": "idotea spp"
  },
  {
    "species": "hydroid"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "hermissenda crassicornis"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "alaria marginata"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "flustrellidra corniculata"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "laminaria sinclairii"
  },
  {
    "species": "leptasterias spp"
  },
  {
    "species": "ligia spp"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "lottia scabra; lottia conus"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mopalia spp"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mytilus trossulus; galloprovincialis; edulis"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "neorhodomela oregona"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "onchidella borealis"
  },
  {
    "species": "pachygrapsus crassipes"
  },
  {
    "species": "pagurus hirsutiusculus"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pista spp"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "balanus glandula; semibalanus cariosus"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "centroceras spp; ceramium spp; corallophila spp"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "cryptopleura spp; hymenena spp"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "cyanoplax spp"
  },
  {
    "species": "diatoms"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "idotea spp"
  },
  {
    "species": "katharina tunicata"
  },
  {
    "species": "leptasterias spp"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mytilus spp"
  },
  {
    "species": "mytilus trossulus; galloprovincialis; edulis"
  },
  {
    "species": "neorhodomela oregona"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "pachygrapsus crassipes"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "phyllospadix torreyi"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "pyropia spp"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "acrosiphonia spp; cladophora spp"
  },
  {
    "species": "ahnfeltiopsis gigartinoides"
  },
  {
    "species": "ahnfeltiopsis leptophylla"
  },
  {
    "species": "ahnfeltiopsis spp; ahnfeltia spp"
  },
  {
    "species": "alaria marginata"
  },
  {
    "species": "alia spp"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "anthopleura sola"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "balanus crenatus"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "balanus glandula; semibalanus cariosus"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "centroceras spp; ceramium spp; corallophila spp"
  },
  {
    "species": "centroceras spp; ceramium spp; polysiphonia spp"
  },
  {
    "species": "chaetomorpha spp"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "codium setchellii"
  },
  {
    "species": "colpomenia spp; leathesia spp"
  },
  {
    "species": "constantinea simplex"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "crangon spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "cryptopleura spp; hymenena spp"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "diatoms"
  },
  {
    "species": "dilsea californica"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "endarachne spp; petalonia spp; phaeostrophion spp"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "farlowia spp; pikea spp"
  },
  {
    "species": "flustrellidra corniculata"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "gelidium spp"
  },
  {
    "species": "halichondria spp"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "hydroid"
  },
  {
    "species": "idotea spp"
  },
  {
    "species": "katharina tunicata"
  },
  {
    "species": "lacuna spp"
  },
  {
    "species": "laminaria sinclairii"
  },
  {
    "species": "lepidozona spp"
  },
  {
    "species": "leptasterias spp"
  },
  {
    "species": "littorina keenae"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "lottia fenestrata"
  },
  {
    "species": "lottia limatula"
  },
  {
    "species": "lottia ochracea"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "lottia scutum"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mopalia spp"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mytilus spp"
  },
  {
    "species": "mytilus trossulus; galloprovincialis; edulis"
  },
  {
    "species": "neoptilota spp; ptilota spp"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "neorhodomela oregona"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "ocenebra circumtexta"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "pachygrapsus crassipes"
  },
  {
    "species": "pagurus hirsutiusculus"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "petrospongium rugosum"
  },
  {
    "species": "phragmatopoma spp; sabellaria spp"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "phyllospadix torreyi"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pista spp"
  },
  {
    "species": "plocamium violaceum"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "potamilla occelata"
  },
  {
    "species": "prionitis filiformis"
  },
  {
    "species": "prionitis lanceolata"
  },
  {
    "species": "prionitis sternbergii"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "pterosiphonia dendroidea; pterosiphonia pennata"
  },
  {
    "species": "pugettia producta"
  },
  {
    "species": "pyropia spp"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "schizymenia spp; halymenia spp"
  },
  {
    "species": "scytosiphon spp; melanosiphon spp"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "small balanus spp; semibalanus spp"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "smallmytilusspp"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "tonicella lineata; tonicella lokii"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "acmaea mitra"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "alia spp"
  },
  {
    "species": "amphissa columbiana"
  },
  {
    "species": "analipus japonicus"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "anthopleura sola"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "balanus crenatus"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "calliarthron spp"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "centroceras spp; ceramium spp; corallophila spp"
  },
  {
    "species": "centroceras spp; ceramium spp; polysiphonia spp"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "cladophora graminea"
  },
  {
    "species": "collinsiella tuberculata"
  },
  {
    "species": "colonial diatom"
  },
  {
    "species": "colpomenia spp; leathesia spp"
  },
  {
    "species": "constantinea simplex"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "cryptopleura spp; hymenena spp"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "cyanoplax spp"
  },
  {
    "species": "derbesia marina"
  },
  {
    "species": "diatoms"
  },
  {
    "species": "dilsea californica"
  },
  {
    "species": "dodecaceria spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "erythrophyllum delesserioides"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "gelidium coulteri"
  },
  {
    "species": "gloiopeltis furcata"
  },
  {
    "species": "haliclona spp"
  },
  {
    "species": "halosaccion glandiforme"
  },
  {
    "species": "hemigrapsus nudus"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "idotea spp"
  },
  {
    "species": "katharina tunicata"
  },
  {
    "species": "lacuna spp"
  },
  {
    "species": "laminaria setchellii"
  },
  {
    "species": "laminaria sinclairii"
  },
  {
    "species": "leptasterias spp"
  },
  {
    "species": "lessoniopsis littoralis"
  },
  {
    "species": "limacia cockerelli"
  },
  {
    "species": "littorina keenae"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "littorina sitkana; littorina subrotundata"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "lottia ochracea"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "lottia scabra; lottia conus"
  },
  {
    "species": "lottia scutum"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mazzaella oregona"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "mesophyllum spp; clathromorphum spp"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mytilisepta bifurcata; brachidontes adamsianus"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mytilus trossulus; galloprovincialis; edulis"
  },
  {
    "species": "neoptilota spp; ptilota spp"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "odonthalia washingtoniensis"
  },
  {
    "species": "onchidella borealis"
  },
  {
    "species": "osmundea spectabilis"
  },
  {
    "species": "pagurus hirsutiusculus"
  },
  {
    "species": "paradialychone ecaudata"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "petrolisthes spp"
  },
  {
    "species": "phragmatopoma spp; sabellaria spp"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "plocamium oregonum"
  },
  {
    "species": "plocamium pacificum"
  },
  {
    "species": "plocamium violaceum"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "prionitis lanceolata"
  },
  {
    "species": "prionitis sternbergii"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "pterosiphonia dendroidea; pterosiphonia pennata"
  },
  {
    "species": "pugettia gracilis; pugettia richii"
  },
  {
    "species": "pyropia spp"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "schizymenia spp; halymenia spp"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "serpula vermicularis"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "smallmytilusspp"
  },
  {
    "species": "spirorbis spp"
  },
  {
    "species": "stephanocystis osmundacea"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "tiffaniella snyderiae"
  },
  {
    "species": "tonicella lineata; tonicella lokii"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "ahnfeltiopsis linearis"
  },
  {
    "species": "alaria marginata"
  },
  {
    "species": "analipus japonicus"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "anthopleura sola"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "balanus glandula; semibalanus cariosus"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "centroceras spp; ceramium spp; corallophila spp"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "codium setchellii"
  },
  {
    "species": "collinsiella tuberculata"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "cryptopleura spp; hymenena spp"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "cucumaria spp; pseudocnus spp"
  },
  {
    "species": "cyanoplax spp"
  },
  {
    "species": "diatoms"
  },
  {
    "species": "dilsea californica"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "endarachne spp; petalonia spp; phaeostrophion spp"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "flustrellidra corniculata"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "haliclona spp"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "idotea spp"
  },
  {
    "species": "katharina tunicata"
  },
  {
    "species": "lacuna spp"
  },
  {
    "species": "leptasterias spp"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "mazzaella affinis"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mopalia spp"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "neoptilota spp; ptilota spp"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "nereocystis luetkeana"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "onchidella borealis"
  },
  {
    "species": "pachygrapsus crassipes"
  },
  {
    "species": "pagurus hirsutiusculus"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "pyropia spp"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "sabellidae"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  },
  {
    "species": "verrucaria maura"
  },
  {
    "species": "abietinaria spp"
  },
  {
    "species": "acrosiphonia spp"
  },
  {
    "species": "amphissa columbiana"
  },
  {
    "species": "amphissa spp"
  },
  {
    "species": "analipus japonicus"
  },
  {
    "species": "anthopleura elegantissima"
  },
  {
    "species": "anthopleura sola"
  },
  {
    "species": "anthopleura xanthogrammica"
  },
  {
    "species": "balanus crenatus"
  },
  {
    "species": "balanus glandula"
  },
  {
    "species": "balanus nubilus"
  },
  {
    "species": "blue green algae; callothrix"
  },
  {
    "species": "boringclam"
  },
  {
    "species": "bossiella spp"
  },
  {
    "species": "calliarthron spp"
  },
  {
    "species": "callithamnion pikeanum"
  },
  {
    "species": "centroceras spp; ceramium spp; corallophila spp"
  },
  {
    "species": "chone minuta"
  },
  {
    "species": "chthamalus dalli; chthamalus fissus"
  },
  {
    "species": "cladophora columbiana"
  },
  {
    "species": "colonial diatom"
  },
  {
    "species": "colpomenia spp; leathesia spp"
  },
  {
    "species": "constantinea simplex"
  },
  {
    "species": "corallina spp"
  },
  {
    "species": "costaria costata"
  },
  {
    "species": "crustose corallines"
  },
  {
    "species": "cryptopleura spp; hymenena spp"
  },
  {
    "species": "cryptosiphonia woodii"
  },
  {
    "species": "cyanoplax hartwegii"
  },
  {
    "species": "cyanoplax spp"
  },
  {
    "species": "derbesia marina"
  },
  {
    "species": "diatoms"
  },
  {
    "species": "dilsea californica"
  },
  {
    "species": "dodecaceria spp"
  },
  {
    "species": "egregia menziesii"
  },
  {
    "species": "endarachne spp; petalonia spp; phaeostrophion spp"
  },
  {
    "species": "endocladia muricata"
  },
  {
    "species": "erythrophyllum delesserioides"
  },
  {
    "species": "eupentacta quinquesemita; eupentacta pseudoquinquesemita"
  },
  {
    "species": "farlowia spp; pikea spp"
  },
  {
    "species": "flustrellidra corniculata"
  },
  {
    "species": "fucus spp"
  },
  {
    "species": "gelidium coulteri"
  },
  {
    "species": "gloiopeltis furcata"
  },
  {
    "species": "grateloupia californica"
  },
  {
    "species": "halichondria spp"
  },
  {
    "species": "haliclona spp"
  },
  {
    "species": "halosaccion glandiforme"
  },
  {
    "species": "hildenbrandia spp; peyssonnelia spp"
  },
  {
    "species": "homalopoma spp"
  },
  {
    "species": "katharina tunicata"
  },
  {
    "species": "lacuna spp"
  },
  {
    "species": "laminaria setchellii"
  },
  {
    "species": "laminaria sinclairii"
  },
  {
    "species": "lepidozona spp"
  },
  {
    "species": "leptasterias spp"
  },
  {
    "species": "lessoniopsis littoralis"
  },
  {
    "species": "ligia spp"
  },
  {
    "species": "lirabuccinum dirum"
  },
  {
    "species": "littorina plena; littorina scutulata"
  },
  {
    "species": "lottia austrodigitalis; lottia digitalis"
  },
  {
    "species": "lottia limatula"
  },
  {
    "species": "lottia ochracea"
  },
  {
    "species": "lottia paradigitalis; lottia strigatella"
  },
  {
    "species": "lottia pelta"
  },
  {
    "species": "lottia scabra; lottia conus"
  },
  {
    "species": "lottia scutum"
  },
  {
    "species": "mastocarpus spp"
  },
  {
    "species": "mazzaella affinis"
  },
  {
    "species": "mazzaella cordata; mazzaella splendens"
  },
  {
    "species": "mazzaella linearis"
  },
  {
    "species": "mazzaella parksii"
  },
  {
    "species": "microcladia borealis"
  },
  {
    "species": "mopalia spp"
  },
  {
    "species": "mytilus californianus"
  },
  {
    "species": "mytilus trossulus; galloprovincialis; edulis"
  },
  {
    "species": "neoptilota spp; ptilota spp"
  },
  {
    "species": "neorhodomela larix"
  },
  {
    "species": "neorhodomela oregona"
  },
  {
    "species": "nucella canaliculata"
  },
  {
    "species": "nucella emarginata; nucella ostrina"
  },
  {
    "species": "ocinebrina lurida"
  },
  {
    "species": "odonthalia floccosa"
  },
  {
    "species": "odonthalia washingtoniensis"
  },
  {
    "species": "onchidella borealis"
  },
  {
    "species": "ophlitaspongia pennata"
  },
  {
    "species": "osmundea spectabilis"
  },
  {
    "species": "pachygrapsus crassipes"
  },
  {
    "species": "pagurus hirsutiusculus"
  },
  {
    "species": "pagurus samuelis"
  },
  {
    "species": "pelvetiopsis spp"
  },
  {
    "species": "petrocelis"
  },
  {
    "species": "petrolisthes spp"
  },
  {
    "species": "phragmatopoma spp; sabellaria spp"
  },
  {
    "species": "phycodrys setchellii"
  },
  {
    "species": "phyllospadix scouleri"
  },
  {
    "species": "phyllospadix torreyi"
  },
  {
    "species": "pisaster ochraceus"
  },
  {
    "species": "pista spp"
  },
  {
    "species": "plocamium pacificum"
  },
  {
    "species": "plocamium violaceum"
  },
  {
    "species": "pollicipes polymerus"
  },
  {
    "species": "polysiphonia spp"
  },
  {
    "species": "prionitis lanceolata"
  },
  {
    "species": "prionitis sternbergii"
  },
  {
    "species": "pterosiphonia bipinnata"
  },
  {
    "species": "pugettia gracilis; pugettia richii"
  },
  {
    "species": "pyropia spp"
  },
  {
    "species": "ralfsiaceae"
  },
  {
    "species": "rhodymenia pacifica"
  },
  {
    "species": "sabellidae"
  },
  {
    "species": "saccharina sessilis"
  },
  {
    "species": "schizymenia spp; halymenia spp"
  },
  {
    "species": "scytosiphon spp; melanosiphon spp"
  },
  {
    "species": "semibalanus cariosus"
  },
  {
    "species": "small balanus spp; semibalanus spp"
  },
  {
    "species": "smalllimpet"
  },
  {
    "species": "smallmytilusspp"
  },
  {
    "species": "spirorbis spp"
  },
  {
    "species": "stephanocystis osmundacea"
  },
  {
    "species": "strongylocentrotus purpuratus"
  },
  {
    "species": "tegula funebralis"
  },
  {
    "species": "tonicella lineata; tonicella lokii"
  },
  {
    "species": "ulva spp; kornmannia spp; monostroma spp"
  }
];

const boundingBoxes: [number, number, number, number][] = [
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.066033,
    44.7527,
    -124.066033,
    44.7527
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -124.057761,
    44.837069,
    -124.057761,
    44.837069
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.972023,
    45.471774,
    -123.972023,
    45.471774
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -123.980496,
    45.918089,
    -123.980496,
    45.918089
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.012629,
    45.02573,
    -124.012629,
    45.02573
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.084344,
    44.499925,
    -124.084344,
    44.499925
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.114274,
    44.24463,
    -124.114274,
    44.24463
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.400504,
    43.308912,
    -124.400504,
    43.308912
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.438481,
    43.114717,
    -124.438481,
    43.114717
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ],
  [
    -124.387983,
    42.228191,
    -124.387983,
    42.228191
  ]
];

export const index = new Flatbush(featureData.length);

for (const box of boundingBoxes) {
  index.add(...box);
}

index.finish();

/**
 * Perform an indexed bounding box search
 * @param minX 
 * @param minY 
 * @param maxX 
 * @param maxY 
* @returns BIO_Species_Present_Oregon_sites_MARINe_2018[]
 */
function search(minX: number, minY: number, maxX: number, maxY: number): BIO_Species_Present_Oregon_sites_MARINe_2018[] {
  const ids = index.search(minX, minY, maxX, maxY);
  return ids.map(id => featureData[id]);
}

/**
 * Perform a nearest neighbor search
 * @param x Longitude
 * @param y Latitude
 * @param maxResults 
 * @param maxDistance 
* @returns BIO_Species_Present_Oregon_sites_MARINe_2018[]
 */
function neighbors(x: number,y: number, maxResults?: number, maxDistance?: number): BIO_Species_Present_Oregon_sites_MARINe_2018[] {
  const neighbors = index.neighbors(x, y, maxResults, maxDistance);
  return neighbors.map(id => featureData[id]);
}

/**
 * Perform an intersection search
 * @param feature
 * @returns BIO_Species_Present_Oregon_sites_MARINe_2018[]
 */ 
function intersects(feature: Feature<Polygon | MultiPolygon>): BIO_Species_Present_Oregon_sites_MARINe_2018[] {
  const bbox = (feature.bbox || createBBox(feature)) as [number, number, number, number];
  let ids = index.search(...bbox);
  ids.filter((id) => {
    const candidate = bboxPolygon(boundingBoxes[id]);
    return booleanIntersects(feature, candidate);
  });
  return ids.map(id => featureData[id]);
}

export default {
  search,
  neighbors,
  intersects,
  boundingBoxes
};
