import data from "../shopping-cart/data.json";
let initialState = {
  listProduct: data,
  keyword: "",
  cartEdit: null,
  listCart: [],
  detailProduct: data[0],
  total: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      let listCart = [...state.listCart];
      const index = listCart.findIndex(
        (item) => item.maSP === action.payload.maSP
      );

      if (index !== -1) {
        listCart[index].soLuong += 1;
      } else {
        const productCart = {
          maSP: action.payload.maSP,
          tenSP: action.payload.tenSP,
          hinhAnh: action.payload.hinhAnh,
          soLuong: 1,
          dongGia: action.payload.giaBan,
        };

        listCart = [...state.listCart, productCart];
      }

      state.listCart = listCart;
      return { ...state };
    }
    case "GET": {
      state.detailProduct = action.payload;
      return { ...state };
    }
    case "DELETE": {
      let listCart = [...state.listCart];
      const index = listCart.findIndex(
        (item) => item.maSP === action.payload.maSP
      );

      if (index !== -1) {
        listCart.splice(index, 1);
      }
      state.listCart = listCart;
      return { ...state };
    }
    case "UPDATE": {
      let listCart = [...state.listCart];
      const index = listCart.findIndex(
        (item) => item.maSP === action.payload.maSP
      );

      if (index !== -1) {
        if (action.status) {
          listCart[index].soLuong += 1;
        } else {
          if (listCart[index].soLuong > 1) {
            listCart[index].soLuong -= 1;
          }
        }
      }
      state.listCart = listCart;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default cartReducer;
