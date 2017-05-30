/**
 * Created by sumon on 5/29/17.
 */
var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python', 'C#'];

  return(
    <div>
      <ul className='languages'>
      {
        languages.map(function (lang) {
          return(
            <li
              key={lang}
              style={props.onSelect === lang ? {color: '#d0021b'} : null }
              onClick={props.updateLanguage.bind(null, lang)}>
              {lang}
            </li>
        );
        })
      }
      </ul>
  </div>
  );
}

PropTypes.selectLanguage = {
  onSelect: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
}

class Popular extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedLanguage: 'All',
    };
    // hard binding
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang){
    console.log('new set language is ' + lang);
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    })
  }

  render(){
    return(
      <SelectLanguage onSelect={this.state.selectedLanguage}
        updateLanguage={this.updateLanguage} />
    );
  }
}

module.exports = Popular;
