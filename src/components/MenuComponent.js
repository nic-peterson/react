import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
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
    const menu = this.props.dishes.map(dish => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <DishDetail dish={this.state.selectedDish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComment(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
