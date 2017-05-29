/**
 * Created by sumon on 5/29/17.
 */
var React = require('react');

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
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return(
      <div>
        <ul className='languages'>
        {
          languages.map(function (lang) {
            return(
              <li
                key={lang}
                style={this.state.selectedLanguage === lang ? {color: '#d0021b'} : null }
                onClick={this.updateLanguage.bind(null, lang)}>
                {lang}
              </li>
          );
          }, this)
        }
        </ul>
    </div>
    );
  }
}

module.exports = Popular;
