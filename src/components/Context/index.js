import React, { Component } from 'react';

const BbrandContext = React.createContext();

export class Provider extends Component {

  state = {
    items: [
      {
        pic:"https://i.ibb.co/D85Jw5w/white-frill-dress.jpg",
        name: "White Frill Dress" ,
        type: "dresses",
        price: 30,
        id:1
      },
      {
        pic:"https://i.ibb.co/cJtFFGv/colorblock-sneaks.jpg",
        name:"Colorblock Sneakers",
        type: "accessories",
        price: 50,
        id: 2
      },
      {
        pic:"https://i.ibb.co/Hds8RQS/rose-dress.jpg",
        name: "Rambling Rose Dress",
        type: "dresses",
        price: 75,
        id: 3
      },
      {
        pic:"https://i.ibb.co/pjg6xMh/purple-skirt.jpg",
        name: "Claret Pleated Skirt",
        type: "dresses",
        price: 30,
        id: 4
      },
      {
        pic:"https://i.ibb.co/6DTh89N/pink-brogues.jpg",
        name:"Rose Brogues",
        type: "accessories",
        price: 60,
        id: 5
      },
      {
        pic:"https://i.ibb.co/xj7c8X0/peacock-heels.jpg",
        name:"Peacock Heels",
        type: "accessories",
        price: 55,
        id: 6
      }
    ]
  }

  render() {
    return (
      <BbrandContext.Provider value= {{
        items: this.state.items
      }}>
        {this.props.children}
      </BbrandContext.Provider>
    );
  }
}
export const Consumer = BbrandContext.Consumer;

