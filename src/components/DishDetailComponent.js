import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5-md col-12-sm">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  renderComment(dish) {
    if (dish != null) {
      const dishComments = dish.comments.map(commentDish => {
        return (
          <div>
            <ul className="list-unstyled">
              <li>{commentDish.comment}</li>
              <li>
                --{commentDish.author}, &nbsp;{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }).format(new Date(commentDish.date))}
              </li>
            </ul>
          </div>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          {dishComments}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const dish = this.props.dish;
    if (dish != null) return this.renderDish(dish);
    else return <div />;
  }
}

export default DishDetail;
