import React, { Component } from 'react';
import AccountTroubleshoot from '../sections/AccountTroubleshoot'
import MechanicalTroubleshoot from '../sections/MechanicalTroubleshoot'
import PrintQualityTroubleshoot from '../sections/PrintQualityTroubleshoot'
import SetupTroubleshoot from '../sections/SetupTroubleshoot'
import ToyboxNavigationHelpers from '../../helpers/ToyboxNavigationHelpers'

class MainTroubleshootPage extends Component {
  render() {
    let component;
    let navSections = this.props ? this.props.navSections : []
    switch(this.props.section){
      case 'mechanical':
        component = <MechanicalTroubleshoot section={this.props.section} expandedQuestion={this.props.expandedQuestion}/>
        break;
      case 'quality':
        component = <PrintQualityTroubleshoot section={this.props.section} expandedQuestion={this.props.expandedQuestion}/>
        break;
      case 'setup':
        component = <SetupTroubleshoot section={this.props.section} expandedQuestion={this.props.expandedQuestion}/>
        break;
      default:
        component = <AccountTroubleshoot section={this.props.section} expandedQuestion={this.props.expandedQuestion}/>
    }
    return (
      <div className="main-troubleshoot">
        <div className="mobile-selector-wrapper">
          <select className="section-selector" onChange={this.props.handleNavigationSectionClick}>
            {navSections.map(function(navsec, i){
              return <option className="section-option"  value={navsec.id} >{navsec.name}</option>
            })}
          </select>
        </div>
        {component}
        <div className="center-div">
          <i className="fa fa-github"></i> This page is open source. Help out the community by contributing <a href={ToyboxNavigationHelpers.getGithubRepoURL()}>here</a>.
        </div>
        <div className="small-divider"></div>
        <div className="center-div">
          Are we missing something? Post an issue <a href={ToyboxNavigationHelpers.getGithubNewIssueURL()}>here</a>.
        </div>

      </div>
    );
  }
}

export default MainTroubleshootPage;