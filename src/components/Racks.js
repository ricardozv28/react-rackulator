import React from 'react'

class Racks extends React.Component {
  render() {
    let racks = this.props.racks.map( (rack) => {
      return (<li>{rack}</li>)
    });

    return (
      <div className="col offset-m3 offset-l3 m6 s12 l6">
        <ul style={{ listStyle: 'none'}}>
          {racks}
        </ul>
      </div>
    )
  }
}

export default Racks;
