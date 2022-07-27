import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dish: null
        }
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null)
            return (
                <div><h4>Comments</h4>
                    <ul class="list-unstyled">
                        {comments.map((obj) => {
                            return (
                                <div>
                                    <li>{obj.comment}</li>
                                    <li>-- {obj.author} , {obj.date}</li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    {this.renderDish(this.props.dish)}
                </div>
            );
          } else {
            return <div></div>;
          }
    }
}

export default DishDetail;