import React from 'react';
import api from '../utils/api';
import propTypes from 'prop-types';

function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'css', 'python']

  return (
        <ul className="languages">
          {
            languages.map(function(lang) {
              return (
                <li style={ lang === props.selectedLanguage ? {color: '#d0021b'} : null}
                    key={lang} 
                    onClick={props.onSelect.bind(null, lang)}> {lang} 
                </li>
                )
            }, this)
          }
        </ul>
    )
}

SelectLanguage.propTypes={
  selectedLanguage: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired
}

export default class Navigation extends React.Component {

  constructor(props) {
  	super(props);

  	this.state = {
      selectedLanguage: 'All',
      repos: ''
  	};

  	this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
  	console.log(lang);
  	this.setState( function() {
  		return {
  			selectedLanguage: lang,
  			repos: ''
  		}
  	});

  	api.fetchPopularApi(lang)
  	.then( function(response){
  		console.log(response);
  		this.setState( function(){
        return {
		      //selectedLanguage: lang,
		      repos: response
        }
  		})
  	}.bind(this))
  }

  componentDidMount() {
   this.updateLanguage(this.state.selectedLanguage)
  }



	render() {
    return (
      <div> 
        <SelectLanguage 
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}/>

        { !this.state.repos ? 
          <p> Loading ..</p> :
        <RepoGrid repos={this.state.repos}/>
        }
      </div>
			)
	}
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map( function( repo, index ){
         return (
           <li key={repo.name} className="popular-item">
             <div className="popular-rank"> #{index+1}</div>
             <ul className="space-list-items">
               <li>
                 <img
                   className="avatar"
                   src={repo.owner.avatar_url}
                   alt={'Avatar'+ repo.owner.login}/>
               </li>
               <li>
                 <a href={repo.html_url}>{repo.name}</a>
                </li>
             </ul>
           </li>
         	)
      })}
    </ul>
  	)

}