import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Components/Preloader';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ResearchAndDevelopment from './pages/ResearchAndDevelopment';
import ClinicalDiagnostics from './pages/ClinicalDiagnostics';
import GenomicAnalysis from './pages/GenomicAnalysis';
import CellAnalysis from './pages/CellAnalysis';
import ResearchSolution from './pages/ResearchSolution';
import GenomicAnalysisSampleDisaggregation from './pages/GenomicAnalysisSampleDisaggregation';
import GenomicAnalysisNucleicAcidIsolation from './pages/GenomicAnalysisNucleicAcidIsolation';
import MultimodeNivo from './pages/MultimodeNivo';
import GenomicAnalysisMicrofluidic from './pages/GenomicAnalysisMicrofluidic';
import GenomicAnalysisLiquidHandlingWorkstations from './pages/GenomicAnalysisLiquidHandlingWorkstations';
import GenomicAnalysisFontus from './pages/GenomicAnalysisFontus';
import GenomicAnalysisJanus from './pages/GenomicAnalysisJanus';
import GenomicAnalysisSciclone from './pages/GenomicAnalysisSciclone';
import GenomicAnalysisBioqule from './pages/GenomicAnalysisBioqule';
import GenomicAnalysisMimix from './pages/GenomicAnalysisMimix';
import CellAnalysisCellHealthViability from './pages/CellAnalysisCellHealthViability';
import CellCounting from './pages/CellCounting';
import CellCountingBrightFieldCounting from './pages/CellCountingBrightFieldCounting';
import CellCountingCellometer2000 from './pages/CellCountingCellometer2000';
import CellCountingCellometerK2 from './pages/CellCountingCellometerK2';
import CellCountingCellometerX2 from './pages/CellCountingCellometerX2';
import CellCountingCellecaMx from './pages/CellCountingCellecaMx';
import CellCountingCellecaPlx from './pages/CellCountingCellecaPlx';
import CellCountingCeligo from './pages/CellCountingCeligo';
import MultimodePlateReader from './pages/MultimodePlateReader';
import MultimodeEnsight from './pages/MultimodeEnsight';
import MultimodeNexus from './pages/MultimodeNexus';
import CellImaging from './pages/CellImaging';
import CellImagingOperattaCls from './pages/CellImagingOperattaCls';
import CellImagingPhenixPlus from './pages/CellImagingPhenixPlus';
import CellImagingSoftware from './pages/CellImagingSoftware';
import Invivo from './pages/Invivo';
import InvivoSpectrum from './pages/InvivoSpectrum';
import InvivoLuminaX5 from './pages/InvivoLuminaX5';
import InvivoLuminaS5 from './pages/InvivoLuminaS5';
import InvivoLumina from './pages/InvivoLumina';
import InvivoLuminaBioluminescent from './pages/InvivoLuminaBioluminescent';
import InvivoLuminaContrast from './pages/InvivoLuminaContrast';
import InvivoLuminaFluorescent from './pages/InvivoLuminaFluorescent';
import InvivoLuminaRadionuclides from './pages/InvivoLuminaRadionuclides';
import InvivoQuantum from './pages/InvivoQuantum';
import InvivoVega from './pages/InvivoVega';
// import CellGeneTheraphy from './pages/CellGeneTheraphy';
import Organoids from './pages/Organoids';
import DrugDevelopment from './pages/DrugDevelopment';
import DrugDevelopmentSelection from './pages/DrugDevelopmentSelection';
import ClinicalDiagnosticsBiochemicalPrenatalTesting from './pages/ClinicalDiagnosticsBiochemicalPrenatalTesting';
import ClinicalDiagnosticsNipt from './pages/ClinicalDiagnosticsNipt';
import ClinicalDiagnosticsPreeclampsiaTesting from './pages/ClinicalDiagnosticsPreeclampsiaTesting';
import ClinicalDiagnosticsDemo from './pages/NewbornScrrening';
import ClinicalDiagnosticsNewbornSampleCollection from './pages/ClinicalDiagnosticsNewbornSampleCollection';
import Punching from './pages/Punching';
import Platform from './pages/Platform';
import BiochemicalInstrumentsVictor from './pages/BiochemicalInstrumentsVictor';
import BiochemicalInstrumentsDelfiaXpress from './pages/BiochemicalInstrumentsDelfiaXpress';
import BiochemicalPrenatalTestingDelfiaAssays from './pages/BiochemicalPrenatalTestingDelfiaAssays';
import BiochemicalPrenatalTestingInstruments from './pages/BiochemicalPrenatalTestingInstruments';
import BiochemicalInstrumentsAutodelfia from './pages/BiochemicalInstrumentsAutodelfia';
// Pagees 3 Components Imports Srart
import CellGeneTheraphy from './Pages3/CellGeneTheraphy';
import DrugDevelopmentUnderstandingBiology from './Pages3/DrugDevelopmentUnderstandingBiology';
import CellGeneTheraphyDiscoveryIdentification from './Pages3/CellGeneTheraphyDiscoveryIdentification';
import CellGeneTheraphySamplePreparationSolution from './Pages3/CellGeneTheraphySamplePreparationSolution';
import CellGeneTheraphySamplePreparationSolutionChemagic360 from './Pages3/CellGeneTheraphySamplePreparationSolutionChemagic360';
import CellGeneTheraphySamplePreparationSolutionChemagicPrime from './Pages3/CellGeneTheraphySamplePreparationSolutionChemagicPrime';
import CellGeneTheraphySamplePreparationSolutionChemagicPrimeJunior from './Pages3/CellGeneTheraphySamplePreparationSolutionChemagicPrimeJunior';
import CellGeneTheraphyNsgLibraryPrepartion from './Pages3/CellGeneTheraphyNsgLibraryPrepartion';
import CellGeneTheraphyNsgLibraryPrepartionDampleDisaggregation from './Pages3/CellGeneTheraphyNsgLibraryPrepartionDampleDisaggregation';
import CellGeneTheraphyNsgLibraryPrepartionNucleicAcidIsolation from './Pages3/CellGeneTheraphyNsgLibraryPrepartionNucleicAcidIsolation';
import CellGeneTheraphyNsgLibraryPrepartionMicrofluidic from './Pages3/CellGeneTheraphyNsgLibraryPrepartionMicrofluidic';
import CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstations from './Pages3/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstations';
import CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsFontus from './Pages3/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsFontus';
import CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsJanus from './Pages3/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsJanus';
import CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsSciclone from './Pages3/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsSciclone';
import CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsBioqule from './Pages3/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsBioqule';
import CellGeneTheraphyDiscoveryIdentificationMimixPanel from './Pages3/CellGeneTheraphyDiscoveryIdentificationMimixPanel';
import CellGeneTheraphyDiscoveryIdentificationCellLineEngineering from './Pages3/CellGeneTheraphyDiscoveryIdentificationCellLineEngineering';
import CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader from './Pages3/CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader';
import CellGeneTheraphyDiscoveryIdentificationMultimodeNivo from './Pages3/CellGeneTheraphyDiscoveryIdentificationMultimodeNivo';
import CellGeneTheraphyDiscoveryIdentificationMultimodeEnsight from './Pages3/CellGeneTheraphyDiscoveryIdentificationMultimodeEnsight';
import CellGeneTheraphyDiscoverIidentificationMultimodeNexus from './Pages3/CellGeneTheraphyDiscoverIidentificationMultimodeNexus';
import CellGeneTheraphyDiscoveryIdentificationImaging from './Pages3/CellGeneTheraphyDiscoveryIdentificationImaging';
import CellGeneTheraphyDiscoveryIdentificationDualplexAssays from './Pages3/CellGeneTheraphyDiscoveryIdentificationDualplexAssays';
import CellGeneTheraphyDiscoveryIdentificationGeneEditing from './Pages3/CellGeneTheraphyDiscoveryIdentificationGeneEditing';



import CellGeneTheraphyTherapeuticPayloadDelivery from './Pages3/CellGeneTheraphyTherapeuticPayloadDelivery';
import GellGeneTheraphyTherapeuticPayloadDeliveryPayload from './Pages3/GellGeneTheraphyTherapeuticPayloadDeliveryPayload';
import CellGeneTheraphyTherapeuticPayloadDeliveryDelivery from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryDelivery';
import CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryAdenoAssociatedViruses from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryAdenoAssociatedViruses';
import CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryDirectedEvolution from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryDirectedEvolution';
import CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryNanobodyTargeting from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryNanobodyTargeting';
import CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions';
import CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMojosort from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMojosort';
import CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCounters from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCounters';
import CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaPlx from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaPlx';
import CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaMx from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaMx';
import CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCeligo from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCeligo';
import CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsHomogeneousImmunoassays from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsHomogeneousImmunoassays';
import CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMultiplexPanels from './Pages3/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMultiplexPanels';import PlatformQsight from './pages/PlatformQsight';
import PlatformGSP from './pages/PlatformGsp';
import MigeleInstrument from './pages/PlatformMigele';
import Victor2DInstrument from './pages/PlatformVictor2';
import AutoDELFIA from './pages/BiochemicalInstrumentsDelfiatrio';
import EonisSystem from './pages/PlatformEonis';
import DBSPuncher from './pages/PunchingDbsPuncher';
import DBS_Panthera from './pages/PunchingQuater';

// Pages4 Imports ^^^^^^^^^^^^^^^ 
import CellGeneTheraphyPreclinicalDevelopment from './Pages4/CellGeneTheraphyPreclinicalDevelopment';
import CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization from './Pages4/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization';
import CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationCellecaMx from './Pages4/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationCellecaMx';
import CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays from './Pages4/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays';
import CellGeneTheraphyPreclinicalDevelopmentCellountingCharacterizationFunctionalAssaysUltraleaf from './Pages4/CellGeneTheraphyPreclinicalDevelopmentCellountingCharacterizationFunctionalAssaysUltraleaf';
import CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysGoinvivo from './Pages4/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysGoinvivo';
import CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysRecombinant from './Pages4/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysRecombinant';
import CellGeneTherapyOrganoidDevelopment from './Pages4/CellGeneTherapyOrganoidDevelopment';
import CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentCultureMedium from './Pages4/CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentCultureMedium';
import CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentSerumSubstitute from './Pages4/CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentSerumSubstitute';
import CellGeneTherapyCellImaging from './Pages4/CellGeneTherapyCellImaging';
import CellGeneTherapyInvivo from './Pages4/CellGeneTherapyInvivo';
import CellGeneTherapyLabchipAav from './Pages4/CellGeneTherapyLabchipAav';
import CellGeneTheraphyAqQc from './Pages4/CellGeneTheraphyAqQc';
import CellGeneTheraphyAqQcNucleicAcidIsolation from './Pages4/CellGeneTheraphyAqQcNucleicAcidIsolation';
import CellGeneTheraphyAqQcChemagic360 from './Pages4/CellGeneTheraphyAqQcChemagic360';
import CellGeneTheraphyAqQcChemagicPrime from './Pages4/CellGeneTheraphyAqQcChemagicPrime';
import CellGeneTheraphyAqQcChemagicPrepitoInstrument from './Pages4/CellGeneTheraphyAqQcChemagicPrepitoInstrument';
import CellGeneTheraphyAqQcCapsidDetectionKits from './Pages4/CellGeneTheraphyAqQcCapsidDetectionKits';
import CellGeneTheraphyAqQcLabchipAav from './Pages4/CellGeneTheraphyAqQcLabchipAav';
import CellGeneTheraphyManufacturingScaleup from './Pages4/CellGeneTheraphyManufacturingScaleup';
import CellGeneTheraphyManufacturingScaleupIntegratedAutomationSystems from './Pages4/CellGeneTheraphyManufacturingScaleupIntegratedAutomationSystems';
import CellGeneTheraphyManufacturingAdenoAssociatedVirusVectors from './Pages4/CellGeneTheraphyManufacturingAdenoAssociatedVirusVectors';
import CellGeneTheraphyManufacturingLabchipAav from './Pages4/CellGeneTheraphyManufacturingLabchipAav';
import CellGeneTheraphyManufacturingScaleupLentiviralVector from './Pages4/CellGeneTheraphyManufacturingScaleupLentiviralVector';
import CellGeneTheraphyManufacturingLentiboostTransductionEnhancer from './Pages4/CellGeneTheraphyManufacturingLentiboostTransductionEnhancer';
import CellGeneTheraphyManufacturingBiolegendsGrade from './Pages4/CellGeneTheraphyManufacturingBiolegendsGrade';

function App() {
  

  return (
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ResearchAndDevelopment" element={<ResearchAndDevelopment />} />
        <Route path="/ClinicalDiagnostics" element={<ClinicalDiagnostics />} />
        <Route path="/GenomicAnalysis" element={<GenomicAnalysis />} />
        <Route path="/CellAnalysis" element={<CellAnalysis />} />
        <Route path="/ResearchSolution" element={<ResearchSolution />} />
{/* rishikesh new */}
<Route path="/GenomicAnalysisSampleDisaggregation" element={<GenomicAnalysisSampleDisaggregation />} />
        <Route path="/GenomicAnalysisNucleicAcidIsolation" element={<GenomicAnalysisNucleicAcidIsolation />} />
        <Route path="/MultimodeNivo" element={<MultimodeNivo />} />
        <Route path="/GenomicAnalysisMicrofluidic" element={<GenomicAnalysisMicrofluidic />} />
        <Route path="/GenomicAnalysisLiquidHandlingWorkstations" element={<GenomicAnalysisLiquidHandlingWorkstations />} />
        <Route path="/GenomicAnalysisFontus" element={<GenomicAnalysisFontus/>} />
        <Route path="/GenomicAnalysisJanus" element={<GenomicAnalysisJanus/>} />
        <Route path="/GenomicAnalysisSciclone" element={<GenomicAnalysisSciclone/>} />
        <Route path="/GenomicAnalysisBioqule" element={<GenomicAnalysisBioqule />} />
        <Route path="/GenomicAnalysisMimix" element={<GenomicAnalysisMimix />} />
        <Route path="/CellAnalysisCellHealthViability" element={<CellAnalysisCellHealthViability />} />
        <Route path="/CellCounting" element={<CellCounting />} />
        <Route path="/CellCountingBrightFieldCounting" element={<CellCountingBrightFieldCounting />} />
        <Route path="/CellCountingCellometer2000" element={<CellCountingCellometer2000 />} />
        <Route path="/CellCountingCellometerK2" element={<CellCountingCellometerK2 />} />
        <Route path="/CellCountingCellometerX2" element={<CellCountingCellometerX2 />} />
        <Route path="/CellCountingCellecaMx" element={<CellCountingCellecaMx />} />
        <Route path="/CellCountingCellecaPlx" element={<CellCountingCellecaPlx />} />
        <Route path="/CellCountingCeligo" element={<CellCountingCeligo/>} />
        <Route path="/MultimodePlateReader" element={<MultimodePlateReader/>} />
        <Route path="/MultimodeEnsight" element={<MultimodeEnsight/>} />
        <Route path="/MultimodeNexus" element={<MultimodeNexus/>} />
        <Route path="/CellImaging" element={<CellImaging/>} />
        <Route path="/CellImagingOperattaCls" element={<CellImagingOperattaCls/>} />
        <Route path="/CellImagingPhenixPlus" element={<CellImagingPhenixPlus/>} />
        <Route path="/CellImagingSoftware" element={<CellImagingSoftware/>} />
        <Route path="/invivo" element={<Invivo/>} />
        <Route path="/InvivoSpectrum" element={<InvivoSpectrum/>} />
        <Route path="/InvivoLuminaX5" element={<InvivoLuminaX5/>} />
        <Route path="/InvivoLuminaS5" element={<InvivoLuminaS5/>} />
        <Route path="/InvivoLumina" element={<InvivoLumina/>} />
        <Route path="/InvivoLuminaBioluminescent" element={<InvivoLuminaBioluminescent/>} />
        <Route path="/InvivoLuminaContrast" element={<InvivoLuminaContrast/>} />
        <Route path="/InvivoLuminaFluorescent" element={<InvivoLuminaFluorescent/>} />
        <Route path="/InvivoLuminaRadionuclides" element={<InvivoLuminaRadionuclides/>} />
        <Route path="/InvivoQuantum" element={<InvivoQuantum/>} />
        <Route path="/InvivoVega" element={<InvivoVega/>} />
        <Route path="/Organoids" element={<Organoids/>} />

        <Route path="/DrugDevelopment" element={<DrugDevelopment/>} />
        <Route path="/DrugDevelopmentSelection" element={<DrugDevelopmentSelection/>} />

        <Route path="/CellGeneTheraphy" element={<CellGeneTheraphy/>} />

        {/* reisheskes's new end here */}
        <Route path="/clinical-diagnostics-biochemical-prenatal-testing" element={<ClinicalDiagnosticsBiochemicalPrenatalTesting />} />
        <Route path="/clinical-diagnostics-nipt" element={<ClinicalDiagnosticsNipt/>} />
        <Route path="/clinical-diagnostics-preeclampsia-testing" element={<ClinicalDiagnosticsPreeclampsiaTesting/>} />
        <Route path="/clinical-diagnostics-newborn" element={<ClinicalDiagnosticsDemo/>} />
        <Route path="/clinical-diagnostics-newborn-sample-collection" element={<ClinicalDiagnosticsNewbornSampleCollection/>} />
        <Route path="/punching" element={<Punching/>} />
        <Route path="/platform" element={<Platform/>} />
        <Route path="2" element={<BiochemicalInstrumentsVictor/>} />
        <Route path="/biochemical-instruments-delfia-xpress" element={<BiochemicalInstrumentsDelfiaXpress/>} />
        <Route path="/biochemical-prenatal-testing-delfia-assays" element={<BiochemicalPrenatalTestingDelfiaAssays/>} />
        <Route path="/biochemical-prenatal-testing-instruments" element={<BiochemicalPrenatalTestingInstruments/>} />
        <Route path="/biochemical-instruments-autodelfia" element={<BiochemicalInstrumentsAutodelfia/>} />

          {/* Pages2 Components Start */}
          <Route path="/DrugDevelopmentUnderstandingBiology" element={<DrugDevelopmentUnderstandingBiology/>} />
        <Route path="/CellGeneTheraphy" element={<CellGeneTheraphy/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentification" element={<CellGeneTheraphyDiscoveryIdentification/>} />
        <Route path="/CellGeneTheraphySamplePreparationSolution" element={<CellGeneTheraphySamplePreparationSolution/>} />
        <Route path="/CellGeneTheraphySamplePreparationSolutionChemagic360" element={<CellGeneTheraphySamplePreparationSolutionChemagic360/>} />
        <Route path="/CellGeneTheraphySamplePreparationSolutionChemagicPrime" element={<CellGeneTheraphySamplePreparationSolutionChemagicPrime/>} />
        <Route path="/CellGeneTheraphySamplePreparationSolutionChemagicPrimeJunior" element={<CellGeneTheraphySamplePreparationSolutionChemagicPrimeJunior/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartion" element={<CellGeneTheraphyNsgLibraryPrepartion/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartionDampleDisaggregation" element={<CellGeneTheraphyNsgLibraryPrepartionDampleDisaggregation/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartionNucleicAcidIsolation" element={<CellGeneTheraphyNsgLibraryPrepartionNucleicAcidIsolation/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartionMicrofluidic" element={<CellGeneTheraphyNsgLibraryPrepartionMicrofluidic/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstations" element={<CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstations/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsFontus" element={<CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsFontus/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsJanus" element={<CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsJanus/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsSciclone" element={<CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsSciclone/>} />
        <Route path="/CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsBioqule" element={<CellGeneTheraphyNsgLibraryPrepartionLiquidHandlingWorkstationsBioqule/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentificationMimixPanel" element={<CellGeneTheraphyDiscoveryIdentificationMimixPanel/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentificationCellLineEngineering" element={<CellGeneTheraphyDiscoveryIdentificationCellLineEngineering/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader" element={<CellGeneTheraphyDiscoveryIdentificationMultimodePlateReader/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentificationMultimodeNivo" element={<CellGeneTheraphyDiscoveryIdentificationMultimodeNivo/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentificationMultimodeEnsight" element={<CellGeneTheraphyDiscoveryIdentificationMultimodeEnsight/>} />
        <Route path="/CellGeneTheraphyDiscoverIidentificationMultimodeNexus" element={<CellGeneTheraphyDiscoverIidentificationMultimodeNexus/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentificationImaging" element={<CellGeneTheraphyDiscoveryIdentificationImaging/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentificationDualplexAssays" element={<CellGeneTheraphyDiscoveryIdentificationDualplexAssays/>} />
        <Route path="/CellGeneTheraphyDiscoveryIdentificationGeneEditing" element={<CellGeneTheraphyDiscoveryIdentificationGeneEditing/>} />
       

        <Route path="/CellGeneTheraphyTherapeuticPayloadDelivery" element={<CellGeneTheraphyTherapeuticPayloadDelivery/>} />
        <Route path="/GellGeneTheraphyTherapeuticPayloadDeliveryPayload" element={<GellGeneTheraphyTherapeuticPayloadDeliveryPayload/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryDelivery" element={<CellGeneTheraphyTherapeuticPayloadDeliveryDelivery/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryAdenoAssociatedViruses" element={<CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryAdenoAssociatedViruses/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryDirectedEvolution" element={<CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryDirectedEvolution/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryNanobodyTargeting" element={<CellGeneTheraphyTherapeuticPayloadDeliveryDeliveryNanobodyTargeting/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions" element={<CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutions/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMojosort" element={<CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMojosort/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCounters" element={<CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCounters/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaPlx" element={<CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaPlx/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaMx" element={<CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCellecaMx/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCeligo" element={<CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsCellCountingCeligo/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsHomogeneousImmunoassays" element={<CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsHomogeneousImmunoassays/>} />
        <Route path="/CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMultiplexPanels" element={<CellGeneTheraphyTherapeuticPayloadDeliveryTherapySolutionsMultiplexPanels/>} />
        {/* Pages2 Components End */}
        {/* last day changes aman */}
        <Route path="/platform-qsight" element={<PlatformQsight/>} />
        <Route path="/platform-gsp" element={<PlatformGSP/>} />
        <Route path="/platform-migele" element={<MigeleInstrument/>} />
        <Route path="/platform-victor2" element={<Victor2DInstrument/>} />
        <Route path="/biochemical-instruments-delfiatrio" element={<AutoDELFIA/>} />
        <Route path="/platform-eonis" element={<EonisSystem/>} />
        <Route path="/Punching-dbs-puncher" element={<DBSPuncher/>} />
        <Route path="/punching-dbs-panthera" element={<DBS_Panthera/>} />



        <Route path="/CellGeneTheraphyPreclinicalDevelopment" element={<CellGeneTheraphyPreclinicalDevelopment/>} />
        <Route path="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization" element={<CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterization/>} />
        <Route path="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationCellecaMx" element={<CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationCellecaMx/>} />
        <Route path="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays" element={<CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssays/>} />
        <Route path="/CellGeneTheraphyPreclinicalDevelopmentCellountingCharacterizationFunctionalAssaysUltraleaf" element={<CellGeneTheraphyPreclinicalDevelopmentCellountingCharacterizationFunctionalAssaysUltraleaf/>} />
        <Route path="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysGoinvivo" element={<CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysGoinvivo/>} />
        <Route path="/CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysRecombinant" element={<CellGeneTheraphyPreclinicalDevelopmentCellcountingCharacterizationFunctionalAssaysRecombinant/>} />
        <Route path="/CellGeneTherapyOrganoidDevelopment" element={<CellGeneTherapyOrganoidDevelopment/>} />
        <Route path="/CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentCultureMedium" element={<CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentCultureMedium/>} />
        <Route path="/CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentSerumSubstitute" element={<CellGeneTheraphyPreclinicalDevelopmentOrganoidDevelopmentSerumSubstitute/>} />
        <Route path="/CellGeneTherapyCellImaging" element={<CellGeneTherapyCellImaging/>} />
        <Route path="/CellGeneTherapyInvivo" element={<CellGeneTherapyInvivo/>} />
        <Route path="/CellGeneTherapyLabchipAav" element={<CellGeneTherapyLabchipAav/>} />
        <Route path="/CellGeneTheraphyAqQc" element={<CellGeneTheraphyAqQc/>} />
        <Route path="/CellGeneTheraphyAqQcNucleicAcidIsolation" element={<CellGeneTheraphyAqQcNucleicAcidIsolation/>} />
        <Route path="/CellGeneTheraphyAqQcChemagic360" element={<CellGeneTheraphyAqQcChemagic360/>} />
        <Route path="/CellGeneTheraphyAqQcChemagicPrime" element={<CellGeneTheraphyAqQcChemagicPrime/>} />
        <Route path="/CellGeneTheraphyAqQcChemagicPrepitoInstrument" element={<CellGeneTheraphyAqQcChemagicPrepitoInstrument/>} />
        <Route path="/CellGeneTheraphyAqQcCapsidDetectionKits" element={<CellGeneTheraphyAqQcCapsidDetectionKits/>} />
        <Route path="/CellGeneTheraphyAqQcLabchipAav" element={<CellGeneTheraphyAqQcLabchipAav/>} />
        <Route path="/CellGeneTheraphyManufacturingScaleup" element={<CellGeneTheraphyManufacturingScaleup/>} />
        <Route path="/CellGeneTheraphyManufacturingScaleupIntegratedAutomationSystems" element={<CellGeneTheraphyManufacturingScaleupIntegratedAutomationSystems/>} />
        <Route path="/CellGeneTheraphyManufacturingAdenoAssociatedVirusVectors" element={<CellGeneTheraphyManufacturingAdenoAssociatedVirusVectors/>} />
        <Route path="/CellGeneTheraphyManufacturingLabchipAav" element={<CellGeneTheraphyManufacturingLabchipAav/>} />
        <Route path="/CellGeneTheraphyManufacturingScaleupLentiviralVector" element={<CellGeneTheraphyManufacturingScaleupLentiviralVector/>} />
        <Route path="/CellGeneTheraphyManufacturingLentiboostTransductionEnhancer" element={<CellGeneTheraphyManufacturingLentiboostTransductionEnhancer/>} />
        <Route path="/CellGeneTheraphyManufacturingBiolegendsGrade" element={<CellGeneTheraphyManufacturingBiolegendsGrade/>} />

      </Routes>
      </BrowserRouter>  
  );
}

export default App;
