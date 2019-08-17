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
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  renderComments(dish) {
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
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
        <div className="col-12 col-md-5 m-1">{this.renderComments(dish)}</div>
      </div>
    );
  }
}

export default DishDetail;
