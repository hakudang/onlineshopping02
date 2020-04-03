import React, { Component } from 'react';
import PopUpSmartphone from '../Components/popUpSmartphone';
import swal from 'sweetalert';

class Smartphone extends Component {
  constructor(props) {
    super(props)
    this.handleCart = this.handleCart.bind(this);
    this.state = {}
  }
  handleCart = () => {
    swal({
      title: "Thanh toán và mua?",
      text: "Ok, bạn sẽ thanh toán và mua đơn hàng đơn hàng đã chọn!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Ok! Đã thanh toán mua đơn hàng thành công !", {
            icon: "success",
          });
        } else {
          swal("Cancel, Đã huỷ và dừng việc thanh toán mua đơn hàng!");
        }
      });
  }
  render() {
    return (
      // <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" >
        <div className="container" >
          <div className="card bg-light" style={{ height: '500px' }}>
            <img className="card-img-top mx-auto" src={this.props.imgUrl} alt="Card" style={{ height: '250px', margin: '15px' }} />
            <div className="card-body text-center">
              <h5 className="card-title text-center">{this.props.name}</h5>
              <h6 className="card-title text-center">{this.props.price}</h6>

              <div style={{ height: '50px' }}>
                <p className="card-text text-left text-truncate" >{this.props.desc}</p>
              </div>

              <a className="btn btn-primary" style={{ width: '100px', height: '40px' }} data-toggle="modal" data-target={`#${this.props.id}`} >Detail</a>
              <a className="btn btn-danger" style={{ width: '100px', height: '40px', margin: '5px' }} onClick={this.handleCart}>Cart</a>
            </div>
          </div>
        </div>
        {/* </div> */}

        <PopUpSmartphone
          key={this.props.index}
          id={this.props.id}
          name={this.props.name}
          price={this.props.price}
          desc={this.props.desc}
          imgUrl={this.props.imgUrl}
          screen={this.props.screen}
          backCamera={this.props.backCamera}
          frontCamera={this.props.frontCamera}
        />
      </div>
    );
  }
}

export default Smartphone;