import React from 'react';
const AddPatient = () => {
  return (
    <React.Fragment>
      <div className="bg-primary top-card-title">
        <span className="indexTitle pl-3 pt-2">Add new Patient</span>        
      </div>
      <div className="container">
        {patientInfo()}
        {purposeOfTest()}
        {symptomatic()}
        {symptoms()}
        {history()}
        {healthConditions()}
        {labConfirmation()}
        {laboratoryUserOnly()}
        {/*button*/}
        </div>
      </React.Fragment>
  );
}


const patientInfo = () => {
  return (
    <React.Fragment>
      <div className="row pb-3" style={{borderBottom: "1px solid"}}>
          <h5 className="pt-2">Patient's Information</h5>
            <div className="col-md-12">
              <form>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="surname">Surname</label>
                        <input type="text" className="form-control" id="surname" name="surname"/>
                    </div>
              </div>
              
              <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="nin">NIN / Passport No.</label>
                        <input type="text" className="form-control" id="nin" name="nin"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="dob">DOB</label>
                        <input type="date" className="form-control" id="dob" name="dob"/>
                </div>
                <div className="col-md-4 mb-3">
                        <label for="age">Age</label>
                        <input type="number" className="form-control" id="age" name="age"/>
                    </div>
              </div>
              
              <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="address">Address</label>
                        <input type="text" className="form-control" id="address" name="address"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="nationality">Nationality</label>
                        <input type="text" className="form-control" id="nationality" name="nationality"/>
                    </div>
              </div>
              <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="parcelNumber">Parcel Number</label>
                        <input type="text" className="form-control" id="parcelNumber" name="parcelNumber"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="phone">Phone / WhatsApp number</label>
                        <input type="text" className="form-control" id="phone" name="phone"/>
                    </div>
              </div>
              <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="districtAddress">District Address</label>
                        <input type="text" className="form-control" id="districtAddress" name="districtAddress"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="travelAuthRef">Travel Autorotation reference</label>
                        <input type="text" className="form-control" id="travelAuthRef" name="travelAuthRef"/>
                    </div>
              </div>
                  {/*<button className="btn btn-primary" type="submit">Submit form</button>*/}
              </form>
            </div>
        </div>    
    </React.Fragment>
   );
}


const purposeOfTest = () => {
  return (
    <React.Fragment>
        <div className="row pb-3" style={{borderBottom: "1px solid"}}>
          <h5 className="pt-2">Purpose of test</h5>
            <div className="col-md-12">
              <form>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="puiScreening" />
                          <label class="custom-control-label" for="puiScreening">PUI screening</label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="baselineContact" />
                          <label class="custom-control-label" for="baselineContact">Baseline testing of contacts</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="entryScreening" />
                          <label class="custom-control-label" for="entryScreening">Entry screening</label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="outbreakInvestigation" />
                          <label class="custom-control-label" for="outbreakInvestigation">Outbreak Investigation</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="exitScreening" />
                          <label class="custom-control-label" for="exitScreening">Exit screening</label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="exitQuarantine" />
                          <label class="custom-control-label" for="exitQuarantine">Exit quarantine</label>
                        </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="day5Screening" />
                          <label class="custom-control-label" for="day5Screening">Day 5 screening</label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="exitIsolation" />
                          <label class="custom-control-label" for="exitIsolation">Exit Isolation</label>
                        </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="healthCareWorkersScreening" />
                          <label class="custom-control-label" for="healthCareWorkersScreening">Health Care Worker's screening</label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="positiveCaseFollowup" />
                          <label class="custom-control-label" for="positiveCaseFollowup">Positive Case Follow up</label>
                        </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="otherPurpose">Other Purpose</label>
                        <input type="text" className="form-control" id="otherPurpose" name="otherPurpose"/>
                    </div>
                    <div className="col-md-4 mb-3">                        
                  </div>
                </div> 
                <button className="btn btn-primary" type="submit">Submit form</button>
              </form>
            </div>
        </div>      
    </React.Fragment>
   );
}
 

const symptomatic = () => {
  return (
    <React.Fragment>
        <div className="row pb-3" style={{borderBottom: "1px solid"}}>
          <h5 className="pt-2">Symptomatic</h5>
            <div className="col-md-12">
              <form>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="puiScreening" />
                          <label class="custom-control-label" for="puiScreening">YES</label>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="baselineContact" />
                          <label class="custom-control-label" for="baselineContact">NO</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                      <div className="col-md-4 mb-3">
                          <label for="dateOfOnsetInauguralSymptoms">Date of onset of inaugural symptoms</label>
                          <input type="date" className="form-control" id="dateOfOnsetInauguralSymptoms" name="dateOfOnsetInauguralSymptoms"/>
                      </div>
                      <div className="col-md-4 mb-3">
                          <label for="dateOfOnsetFever">Date of onset of fever</label>
                          <input type="date" className="form-control" id="dateOfOnsetFever" name="dateOfOnsetFever"/>
                      </div>
                  </div>
              </form>
            </div>
        </div>      
    </React.Fragment>
   );
}


const symptoms = () => {
  return (
    <React.Fragment>
        <div className="row pb-3" style={{borderBottom: "1px solid"}}>
          <h5 className="pt-2">Symptoms</h5>
            <div className="col-md-12">
              <form>
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="fever" />
                          <label class="custom-control-label" for="fever">Fever</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="severe" />
                          <label class="custom-control-label" for="severe">Severe</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="abdominalPain" />
                          <label class="custom-control-label" for="abdominalPain">Abdominal pain</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="swollenTenderGlands" />
                          <label class="custom-control-label" for="swollenTenderGlands">Swollen tender glands</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="sweatsChills" />
                          <label class="custom-control-label" for="sweatsChills">Sweats/chills/rigor</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="painBehindEyes" />
                          <label class="custom-control-label" for="painBehindEyes">Pain behind eyes</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="difficultBreathing" />
                          <label class="custom-control-label" for="difficultBreathing">Difficult breathing</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="soreThroat" />
                          <label class="custom-control-label" for="soreThroat">Sore throat</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="WeaknessLethargy" />
                          <label class="custom-control-label" for="WeaknessLethargy">Weakness/lethargy </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="diarrhoeal" />
                          <label class="custom-control-label" for="diarrhoeal">Diarrhoeal</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="bleedingGum" />
                          <label class="custom-control-label" for="bleedingGum">Bleeding gum</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="muscleJointPain" />
                          <label class="custom-control-label" for="muscleJointPain">Muscle / joint pain</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="shortnessOfBreath" />
                          <label class="custom-control-label" for="shortnessOfBreath">Shortness of breath </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="restlessness" />
                          <label class="custom-control-label" for="restlessness">Restlessness</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="bleedingElsewhere" />
                          <label class="custom-control-label" for="bleedingElsewhere">Bleeding elsewhere</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="nausea" />
                          <label class="custom-control-label" for="nausea">Nausea/Vomiting</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="chestPain" />
                          <label class="custom-control-label" for="chestPain">Chest pain</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="fatigue" />
                          <label class="custom-control-label" for="fatigue">Fatigue/Malaise</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="shock" />
                          <label class="custom-control-label" for="shock">Shock</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="confusion" />
                          <label class="custom-control-label" for="confusion">Confusion/delirium</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="cough" />
                          <label class="custom-control-label" for="cough">Cough</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="bloodySputum" />
                          <label class="custom-control-label" for="bloodySputum">Bloody sputum</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="rash" />
                          <label class="custom-control-label" for="rash">Rash</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="otherSymptoms">Other Symptoms</label>
                        <input type="text" className="form-control" id="otherSymptoms" name="otherSymptoms"/>
                    </div>
                    <div className="col-md-4 mb-3">                        
                    </div>
                  </div> 
              </form>
            </div>
        </div>      
    </React.Fragment>
   );
}

const history = () => {
  return (
    <React.Fragment>
      <div className="row pb-3" style={{ borderBottom: "1px solid" }}>
          <div>
            <h5 className="pt-2">History of travel in 14 days prior to onset of symptoms: Yes/No</h5>
          </div>
            <div className="col-md-12">
              <div>If Yes, where and from when till when?(Latest on top)</div>
              <form>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="otherSymptoms">Other Symptoms</label>
                        <input type="text" className="form-control" id="otherSymptoms" name="otherSymptoms"/>
                    </div>
                    <div className="col-md-4 mb-3">    
                      <label for="historyFromWhen">From when</label>
                      <input type="date" className="form-control" id="historyFromWhen" name="historyFromWhen"/>
                    </div>
                    <div className="col-md-4 mb-3">    
                      <label for="tillWhen">Till when</label>
                      <input type="date" className="form-control" id="tillWhen" name="tillWhen"/>
                    </div>
                  </div> 
                  <div className="form-row">
                    <div className="col-md-4 mb-3">    
                      <label for="dateOfArrival">Date of Arrival</label>
                      <input type="date" className="form-control" id="dateOfArrival" name="dateOfArrival"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="flightVessel">Flight/Vessel</label>
                        <input type="text" className="form-control" id="flightVessel" name="flightVessel"/>
                    </div>
                  </div> 
              </form>
            </div>
        </div>      
    </React.Fragment>
   );
}

const healthConditions = () => {
  return (
    <React.Fragment>
        <div className="row pb-3" style={{borderBottom: "1px solid"}}>
          <h5 className="pt-2">Health Condition(s) notified (Tick where appropriate)</h5>
            <div className="col-md-12">
              <form>
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="acuteFlaccidParalysis" />
                          <label class="custom-control-label" for="acuteFlaccidParalysis">Acute flaccid paralysis </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="acuteHemorrhagicFever" />
                          <label class="custom-control-label" for="acuteHemorrhagicFever">Acute Hemorrhagic Fever </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="acuteViralEncephalitis" />
                          <label class="custom-control-label" for="acuteViralEncephalitis">Acute Viral Encephalitis </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="anthrax" />
                          <label class="custom-control-label" for="anthrax">AnthraX</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="chikungunya" />
                          <label class="custom-control-label" for="chikungunya">Chikungunya</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="cholera" />
                          <label class="custom-control-label" for="cholera">Cholera</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="covid19" />
                          <label class="custom-control-label" for="covid19">COVID-19 </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="dengueDengueLikeSyndrome" />
                          <label class="custom-control-label" for="dengueDengueLikeSyndrome">Dengue/ Dengue like-syndrome </label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="dysentery" />
                          <label class="custom-control-label" for="dysentery">Dysentery </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="foodPoisoning" />
                          <label class="custom-control-label" for="foodPoisoning">Food Poisoning </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="measles" />
                          <label class="custom-control-label" for="measles">Measles</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="meningococcalMeningitis" />
                          <label class="custom-control-label" for="meningococcalMeningitis">Meningococcal Meningitis </label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="neonatalTetanus" />
                          <label class="custom-control-label" for="neonatalTetanus">Neonatal Tetanus </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="pertussis" />
                          <label class="custom-control-label" for="pertussis">Pertussis</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="plague" />
                          <label class="custom-control-label" for="plague">Plague</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="rubella" />
                          <label class="custom-control-label" for="rubella">Rubella</label>
                        </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="severeAcuteRespiratorySyndrom" />
                          <label class="custom-control-label" for="severeAcuteRespiratorySyndrom">Severe Acute Respiratory Syndrom </label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="typhoid" />
                          <label class="custom-control-label" for="typhoid">Typhoid</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                    <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="yellowFever" />
                          <label class="custom-control-label" for="yellowFever">Yellow Fever</label>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="zika" />
                          <label class="custom-control-label" for="zika">Zika</label>
                        </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="otherSymptoms">Other Symptoms</label>
                        <input type="text" className="form-control" id="otherSymptoms" name="otherSymptoms"/>
                    </div>
                    <div className="col-md-4 mb-3">                        
                    </div>
                  </div> 
              </form>
            </div>
        </div>      
    </React.Fragment>
   );
}

const labConfirmation = () => {
  return (
    <React.Fragment>
      <div className="row pb-3" style={{ borderBottom: "1px solid" }}>
          <div>
            <h5 className="pt-2">Lab Confirmation (Circle where appropriate)</h5>
          </div>
            <div className="col-md-12">
              <div><b>Lab Sample Taken: Yes/No</b></div>
              <form>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">    
                      <label for="dateOfSpecimenCollection">Date of specimen collection</label>
                      <input type="date" className="form-control" id="dateOfSpecimenCollection" name="dateOfSpecimenCollection"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="typeOfSpecimen">Type of specimen</label>
                        <input type="text" className="form-control" id="typeOfSpecimen" name="typeOfSpecimen"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="typeOfTestReq">Type of test requested</label>
                        <input type="text" className="form-control" id="typeOfTestReq" name="typeOfTestReq"/>
                    </div>
                  </div> 
              </form>
            </div>
        </div>      
    </React.Fragment>
   );
}

const laboratoryUserOnly = () => {
  return (
    <React.Fragment>
      <div className="row pb-3" style={{ borderBottom: "1px solid" }}>
          <div>
            <h5 className="pt-2">Laboratory User Only</h5>
          </div>
            <div className="col-md-12">
              <form>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">    
                      <label for="dateSpecimenResByLab">Date specimen received by lab</label>
                      <input type="date" className="form-control" id="dateSpecimenResByLab" name="dateSpecimenResByLab"/>
                    </div>
                  </div> 
                  
                  <div className="form-row">
                      <div className="col-md-3 mb-3">
                          <div>Specimen condition:</div>
                      </div>
                      <div className="col-md-3 mb-3">                      
                              <input type="checkbox" class="custom-control-input" id="adequate" />
                              <label class="custom-control-label" for="adequate">Adequate</label>
                      </div>
                      <div className="col-md-3 mb-3">                        
                              <input type="checkbox" class="custom-control-input pl-5" id="inadequate" />
                              <label class="custom-control-label" for="inadequate">Inadequate</label>
                      </div>
                  </div>
                   
                  <div className="form-row">
                    <div className="col-md-4 mb-3">    
                      <label for="typeOfSpecimen">Type of Specimen</label>
                      <input type="text" className="form-control" id="typeOfSpecimen" name="typeOfSpecimen"/>
                    </div>
                    <div className="col-md-4 mb-3">    
                      <label for="typeOfTestPerformed">Type of test performed</label>
                      <input type="text" className="form-control" id="typeOfTestPerformed" name="typeOfTestPerformed"/>
                    </div>
                  </div>                  
                  
              </form>
            </div>
        </div>      
    </React.Fragment>
   );
}
export default AddPatient;