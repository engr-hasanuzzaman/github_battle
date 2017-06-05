var React = require('react');
var PropTypes = require('prop-types');

class PlayerInput extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('handl submint' + this.state.username);
    this.props.onSubmit(this.props.id, this.state.username);
  }

  handleChange(event){
    var value = event.target.value;

    this.setState(function() {
      return { username: value };
    });
  }

    render(){
        return(
          <form className='column' onSubmit={this.handleSubmit}>
            <label> {this.props.label}</label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              placeholder='input github username'
              type='text'
            />
            <button onSubmit={this.handleSubmit}>
              Submit
            </button>
          </form>
        );
    }
}

PlayerInput.PropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

class Battle extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      first_name: '',
      first_pic: '',
      second_name: '',
      second_pic: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, name){
    this.setState(function() {
      var newState = {};
      newState[id + '_name'] = name;
      newState[id + '_pic'] = 'https://github.com/' + name + '.png?size=200'
      return newState;
    });
  }

  render(){
    return(
      <div>
        {!this.state.first_name && <PlayerInput label='Input first username' id='first' onSubmit={this.handleSubmit}/>}
        {!this.state.second_name && <PlayerInput label='Input second username' id='second' onSubmit={this.handleSubmit}/> }
      </div>
    );
  }
}

module.exports = Battle;
