import "./App.css";
import WorkExperience from "./WorkExperience";
import Certificates from "./Certificates";
import Education from "./Education";
import Expertise from "./Expertise";
import React from "react";
import Proficencies from "./Proficencies";
import ClientDemographics from "./ClientDemographics";
import Languages from "./Languages";
 
import SocialMediaLinks from "./SocialMediaLinks";
import PaymentConfiguration from "./PaymentConfiguration";
import RevenuePotential from "./RevenuePotential";
import LiabilityInsurance from "./LiabilityInsurance";
import Bio from "./Bio";
import ProviderType from "./ProviderType";
import Availability from "./Availability";
function App() {
  return (
    <div className="App">

<Availability/>
      
      <ProviderType />

      <Bio /> 

      <LiabilityInsurance />

      <RevenuePotential />
      
      <PaymentConfiguration />
      <br/>
      <SocialMediaLinks />
      <br/>
      
      <br/>
      <Languages />
      <br />
      <ClientDemographics />
      <br />
      <Proficencies />
      <br />
      <Expertise />

      <WorkExperience />
      <br />
      <br />
      <Certificates />
      <br />
      <br />
      <Education />
    </div>
  );
}

export default App;
