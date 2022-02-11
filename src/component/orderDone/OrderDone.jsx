import React from 'react'
import { Button } from "@mui/material";
import orderPlaced from '../../assets/orderPlaced.jpeg'
import HeadBar from '../headbar/HeadBar';
import '../orderDone/OrderDone.scss'
function OrderDone() {
  return (
    <>
    <div>
        <HeadBar />
      <div className="mainContent">
        <img className="image" src={orderPlaced} />
        <div>
          <p className="message">
            Hurray!!! Your order is confirmed! The order id is ( #123456 ).
            Save the order id for further communication.
          </p>
        </div>
        <div className="table">
          <table className="order-table">
            <tr>
              <th className="email">Email Us</th>
              <th>Contact Us</th>
              <th>Address</th>
            </tr>
            <tr>
              <td className="email">priyachouhan1019@gmail.com@gmail.com</td>
              <td>+916268771855</td>
              <td>
            Bijalpur(Indore) , treasure vihar(treasure township) ,VC12.
              </td>
            </tr>
          </table>
        </div>
        <Button
          style={{
            marginTop: "50px",
            padding: "10px 60px",
            marginBottom: "50px",
          }}
        //   onClick={contShopp}
          variant="contained"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  </>
  )
}

export default OrderDone