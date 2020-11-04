import React, { Component } from 'react';

// Import Athlete Creation Screen (includes form and model of "athlete")
import AthleteCreateScreen from './athleteCreateForm';

/** Home Screen */
import AthleteHomeScreen from './athleteHomeScreen';

/** Treat Screen */
import AthleteTreatScreen from './athleteTreatScreen';

/** Treatment Screen */
import AthleteTreatmentScreen from './athleteTreatmentScreen';

/** HOPRS screens */
import AthleteHistory from './hoprs/athleteHistory';
import AthleteObservation from './hoprs/athleteObservation';
import AthletePalpation from './hoprs/athletePalpation';
import AthleteROM from './hoprs/athleteROM';
import AthleteSpecialTests from './hoprs/athleteSpecialTest';

/** HOPRS screens */
import AthleteTeamScreen from './athleteTeamScreen';

/** Error screen (if a screen cannot load for some reason) */
import Error from './errorPage';


class AthleteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /** Edit this to change screens */
            mode: 'athHome'
        }

        this.skipToHomeScreen = this.skipToHomeScreen.bind(this);

        // this.handleNewAthlete = this.handleNewAthlete.bind(this);

        this.handleTreatButton = this.handleTreatButton.bind(this);
        this.handleTreatmentButton = this.handleTreatmentButton.bind(this);

        this.handleTeamButton = this.handleTeamButton.bind(this);
        this.handleRefButton = this.handleRefButton.bind(this);
        this.handleSetButton = this.handleSetButton.bind(this);

        this.handleHistory = this.handleHistory.bind(this);
        this.handleObservation = this.handleObservation.bind(this);
        this.handlePalpation = this.handlePalpation.bind(this);
        this.handleROM = this.handleROM.bind(this);
        this.handleST = this.handleST.bind(this);


    }
    skipToHomeScreen() { this.setState({ mode: 'athHome' }); }

    // handleNewAthlete() { this.setState({ mode: 'athNew' }); }

    handleTreatButton() { this.setState({ mode: 'athTreat' }); }
    handleTreatmentButton() { this.setState({ mode: 'athTreatment' }); }

    handleTeamButton() { this.setState({ mode: 'athTeam' }); }
    handleRefButton() { this.setState({ mode: 'athRef' }); }
    handleSetButton() { this.setState({ mode: 'athSetting' }); }

    handleHistory() { this.setState({ mode: 'athHistory' }); }
    handleObservation() { this.setState({ mode: 'athObservation' }); }
    handlePalpation() { this.setState({ mode: 'athPalpation' }); }
    handleROM() { this.setState({ mode: 'athROM' }); }
    handleST() { this.setState({ mode: 'athST' }); }


    render() {

        const renderStatus = () => {
            let com = '';
            switch (this.state.mode) {
                /** Begin Welcome Screens. New users start here */
                case 'snot':
                    com = <button id="createNewAthlete" type="button" className="btn btn-primary btn-lg" onClick={this.handleNewAthlete}>Create New Athlete</button>
                    break;
                // Athlete Create Screen
                case 'athNew':
                    com = <AthleteCreateScreen />
                    break;


                /** Begin main game screens. Returning users start here */
                // Athlete Home Screen
                case 'athHome':
                    com =
                        <div className="container">
                            <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left">Treat</button>
                            <button onClick={this.handleTeamButton} id="teamButton" type="button" className="btn btn-success btn-lg float-right">Team</button>
                            <div>
                                <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid" alt="Athlete"></img>
                            </div>
                            <button onClick={this.handleRefButton} id="referenceButton" type="button" className="btn btn-dark btn-lg float-left">References</button>
                            <button onClick={this.handleSetButton} id="settingsButton" type="button" className="btn btn-secondary btn-lg float-right">Settings</button>
                        </div>
                    break;
                case 'athTeam':
                    com = 
                        <div className="container">
                            <div className="row">
                                <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Teams</div>
                            </div>
                            <AthleteTeamScreen />
                            <button onClick={this.handleRefButton} id="referenceButton" type="button" className="btn btn-dark btn-lg float-left">References</button>
                            <button onClick={this.handleSetButton} id="settingsButton" type="button" className="btn btn-secondary btn-lg float-right">Settings</button>
                        </div>
                    break;

                case 'athRef': // TODO: put in external file later
                    com = 
                    <div className="container">
                        <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left">Back</button>
                        <h1>This is the references screen</h1>  
                    </div>
                    break;
                case 'athSetting': // TODO: put in external file later
                    com = 
                        <div className="container">
                            <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left">Back</button>
                            <h1>This is the settings screen</h1>
                        </div>
                    break;
                // Treat screen
                case 'athTreat':
                    com = 
                        <div className="container">
                            <div className="row">
                                <button onClick={this.skipToHomeScreen} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                            </div>
                            <div className="row">
                                <div className="col">
                                        <div className="form-group">
                                            {/* History */}
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="History" aria-label="History" aria-describedby="basic-addon2"></input>
                                                <div class="input-group-append">
                                                    <button onClick={this.handleHistory} class="btn btn-outline-secondary" type="button" id="button-addon2">-</button>
                                                </div>
                                            </div>

                                            {/* Observation */}
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Observation" aria-label="Observation" aria-describedby="basic-addon2"></input>
                                                <div class="input-group-append">
                                                    <button onClick={this.handleObservation} class="btn btn-outline-danger" type="button" id="button-addon2">+</button>
                                                </div>
                                            </div>

                                            {/* Palpations */}
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Palpations" aria-label="Palpations" aria-describedby="basic-addon2"></input>
                                                <div class="input-group-append">
                                                    <button onClick={this.handlePalpation} class="btn btn-outline-success" type="button" id="button-addon2">O</button>
                                                </div>
                                            </div>

                                            {/* Range of Motion (ROM)*/}
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Range of Motion" aria-label="Range of Motion" aria-describedby="basic-addon2"></input>
                                                <div class="input-group-append">
                                                    <button onClick={this.handleROM} class="btn btn-outline-success" type="button" id="button-addon2">O</button>
                                                </div>
                                            </div>

                                            {/* Special Tests */}
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Special Tests" aria-label="Special Tests" aria-describedby="basic-addon2"></input>
                                                <div class="input-group-append">
                                                    <button onClick={this.handleST} class="btn btn-outline-success" type="button" id="button-addon2">O</button>
                                                </div>
                                            </div>

                                            
                                            {/* Treatments Button */}
                                            <button onClick={this.handleTreatmentButton} type="button" className="btn btn-secondary float-left my-3">Treatment</button>
                                            {/* Submit Button */}
                                            <button type="submit" className="btn btn-primary float-left mt-3">Submit</button>
                                        </div>
                                </div>
                            
                                <div className="col">
                                    <img src="https://cdn0.iconfinder.com/data/icons/sport-people-1/512/sport_-_sportsman_-_people_-_athlete-08-512.png" className="img-fluid h-100" alt="Athlete"></img>
                                </div>
                            </div>
                        </div>
                    break;
                // Treatment screen, located inside the treat screen
                case 'athTreatment':
                    com = 
                        <div className="container">
                            <div className="row">
                                <button onClick={this.handleTreatButton} id="treatButton" type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                                <div className="p-3 w-auto my-2 bg-secondary text-white">Treatment</div>
                            </div>
                            <AthleteTreatmentScreen />
                            <div className="row">
                                <button id="referenceButton" type="button" className="btn btn-dark btn-lg">References</button>
                            </div>
                        </div>
                    break;
                /** Begin HOPRS screens */
                // History screen
                case 'athHistory':
                    com = 
                    <div class="container">
                        <div className="row">
                            <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                            <div className="p-3 w-auto my-2 bg-secondary text-white">History</div>
                        </div>
                        <AthleteHistory />
                        <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                    </div>
                    break;
                // Observation screen
                case 'athObservation':
                    com = 
                    <div class="container">
                        <div className="row">
                            <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                            <div className="p-3 w-auto my-2 bg-secondary text-white">Observation</div>
                        </div>
                        <AthleteObservation />
                        <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                    </div>
                    break;
                // Palpation screen
                case 'athPalpation':
                    com = 
                    <div class="container">
                        <div className="row">
                            <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                            <div className="p-3 w-auto my-2 bg-secondary text-white">Palpation</div>
                        </div>
                        <AthletePalpation />
                        <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                    </div>
                    break;
                // Range of Motion screen
                case 'athROM':
                    com = 
                    <div class="container">
                        <div className="row">
                            <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                            <div className="p-3 w-auto my-2 bg-secondary text-white">Range of Motion</div>
                        </div>
                    <AthleteROM />
                    <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                    </div>
                    break;
                // Special Tests screen
                case 'athST':
                    com = 
                    <div class="container">
                        <div className="row">
                            <button onClick={this.handleTreatButton} type="button" className="btn btn-danger btn-lg float-left m-2">Back</button>
                            <div className="p-3 w-auto my-2 bg-secondary text-white">Special Tests</div>
                        </div>
                    <AthleteSpecialTests />
                    <button id="referenceButton" type="button" className="btn btn-dark btn-lg float-left mt-3">References</button>
                    </div>
                    break;
                default:
                    com = <Error />
                    break;
            }
            return com;
        }
        return (
            <div className="container text-center h-auto position-relative">
                {renderStatus()}
            </div>);
    }
}

export default AthleteScreen;
