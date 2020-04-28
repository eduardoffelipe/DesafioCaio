import * as TYPES from "./types";
export const mutations = {
  [TYPES.PUSH_PRODUCT_TO_CART]: (state, item) => {
    try {
      if (state.cartItems.length != 0) {
        const productIndex = state.cartItems.findIndex(
          (p) => p.item.id == item.id
        );
        if (productIndex != -1) {
          state.cartItems[productIndex].quantidade += 1;
          state.cartItems[productIndex].priceTotal = (
            state.cartItems[productIndex].quantidade *
            parseFloat(state.cartItems[productIndex].item.price)
          ).toFixed(2);
          return;
        }

        state.cartItems.push({
          item,
          quantidade: 1,
          priceTotal: parseFloat(item.price).toFixed(2),
        });
      } else {
        state.cartItems.push({
          item,
          quantidade: 1,
          priceTotal: parseFloat(item.price).toFixed(2),
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  [TYPES.REMOVE_ITEM_CART_BY_ID]: (state, item) => {
    try {
      const productIndex = state.cartItems.findIndex(
        (product) => product.item.id == item.id
      );
      console.log(productIndex);
      state.cartItems.splice(productIndex, 1);
    } catch (error) {
      console.log(error);
    }
  },

  [TYPES.SUBSTRACT_CART_BY_ID]: (state, item) => {
    try {
      const productIndex = state.cartItems.findIndex(
        (product) => product.item.id == item.id
      );
      if (state.cartItems[productIndex].quantidade <= 1) return;
      state.cartItems[productIndex].quantidade -= 1;
      state.cartItems[productIndex].priceTotal = (
        state.cartItems[productIndex].quantidade *
        parseFloat(state.cartItems[productIndex].item.price)
      ).toFixed(2);
    } catch (error) {
      console.log(error);
    }
  },

  [TYPES.ADD_PRODUCT]: (state, item) => {
    try {
      const { items } = state.items;
      const newData = {
        ...items,
        ...item,
      };

      state.items.push(newData);
      console.log(state.items);
    } catch (error) {
      console.log(error);
    }
  },
};
