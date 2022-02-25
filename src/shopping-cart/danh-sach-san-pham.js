import React, { Component } from "react";
import SanPham from "./san-pham";
import { connect } from "react-redux";

class DanhSachSanPham extends Component {
  renderListProduct = () => {
    //Duyệt mảng và render lần lượt ra các SanPham tương ứng
    return this.props.listProduct.map((product) => {
      return (
        <SanPham
          key={product.maSP}
          product={product}
        //   getDetailProduct={this.props.getDetailProduct}
        //   getProductAddCart={this.props.getProductAddCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //key userList nó sẽ là props tại component Users
    listProduct: state.cartReducer.listProduct,
    keyword: state.cartReducer.keyword,
  };
};

export default connect(mapStateToProps, null)(DanhSachSanPham);
