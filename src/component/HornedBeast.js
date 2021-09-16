import HornedBeast from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfbeat: 0
        }
    }

    
    increaseNumberOfbeat = () => {
        this.setState({
            numOfbeat: this.state.numOfbeat + 1
        })
    }

  render() {
    return (
      <>
        <h2>Main {this.props.title}</h2>
        <img>Main {this.props.Img} </img>
        <p>Main {this.props.des} </p>
        
        <Card style={{ width: '18rem' }}>
                    <Card.Img className='cardCat' variant="top" src={this.props.Img} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Number of beats {this.state.numOfbeat}
                        </Card.Text>
                        <Button onClick={this.increaseNumberOfbeat} variant="primary">Go </Button>
                    </Card.Body>
                </Card>
       



        
      </>
    )
  }
}

export default HornedBeast;






