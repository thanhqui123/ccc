import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  total = () => {
    return this.props.listCart.reduce((sum, item) => {
      return (sum += item.soLuong);
    }, 0);
  };

  render() {
 
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.total()})
          </button>
        </div>
        <DanhSachSanPham />
        <Modal />
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src={this.props.detailProduct.hinhAnh} alt="" />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.props.detailProduct.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.props.detailProduct.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.props.detailProduct.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.props.detailProduct.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.props.detailProduct.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.props.detailProduct.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //key userList nó sẽ là props tại component Users
    listProduct: state.cartReducer.listProduct,
    keyword: state.cartReducer.keyword,
    detailProduct: state.cartReducer.detailProduct,
    listCart: state.cartReducer.listCart,
  };
};
export default connect(mapStateToProps, null)(ShoppingCart);
