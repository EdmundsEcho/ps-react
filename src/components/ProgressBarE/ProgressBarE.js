import React from 'react';

class ProgressBarE extends React.Component {

  // a component with a render statement that depends on
  // two functions...

  getColor = (percent) => {
    switch ( true ) {
      case ( this.props.percent === 100 ) : return 'green';
      case ( this.props.percent > 50 )    : return 'lightgreen';
      default                             : return 'red'
    }
  }

  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10);
  }

  render() {
    const {percent, width, height} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray', width: width}}>
        <div style={{
          width: this.getWidthAsPercentOfTotalWidth(),
          height,
          backgroundColor: this.getColor(percent)
        }} />
      </div>
    );
  }
}

export default ProgressBarE;
