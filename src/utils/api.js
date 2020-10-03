import React from "react";
import { Alert, AsyncStorage, Platform } from "react-native";
import * as globals from "../utils/globals";

const timeoutObj = {
  success: "fail",
  message: 'We are unable to fetch data at this time. Kindly check back shortly'
};

const internetErrorObj = {
  success: "fail",
  message: 'Please check your internet connectivity'
};

export const API = {
  DriverRegister: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.DriverRegister, buildHeaderNormal());
  },
  otpVerify: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.otpVerify, buildHeaderNormal());
  },
  Driverlogin: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.Driverlogin, buildHeaderNormal());
  },
  forgotPassword: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.forgotPassword, buildHeaderNormal());
  },
  Resetpassword: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.Resetpassword, buildHeaderNormal());
  },
  Getprofile: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.Getprofile, buildHeaderNormal());
  },
  updateProfille: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.updateProfile, buildHeaderNormal());
  },
  UploadDocument: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.UploadDocument, buildHeaderNormal());
  },
  GetDocument: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.GetDocument, buildHeaderNormal());
  },
  GetLicense: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.GetLicense, buildHeaderNormal());
  },
  CheckApprovalDocument: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.CheckApprovalDocument, buildHeaderNormal());
  },

  getDriverOrders: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.getDriverOrders, buildHeaderNormal());
  },
  UpdateOrderStatus: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.UpdateOrderStatus, buildHeaderNormal());
  },
  CurrentOrder: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.CurrentOrder, buildHeaderNormal());
  },

  Userlist: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.Userlist, buildHeaderNormal());
  },
  AddEditBankDetail: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.AddEditBankDetail, buildHeaderNormal());
  },
  GetBankDetail: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.GetBankDetail, buildHeaderNormal());
  },
  Wallet: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.Wallet, buildHeaderNormal());
  },
  WithdrawAmount: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.WithdrawAmount, buildHeaderNormal());
  },
  //   userMobileNo: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.mobileNoUser, buildHeaderNormal());
  //   },

  getCategoryData: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.getCategoryData, buildHeader());
  },
  homeSilderImages: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.homeSilderImages, buildHeader());
  },

  productListData: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.productListData, buildHeader());
  },
  catAllProductsData: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.catAllProducts, buildHeader());
  },
  SubCatallproducts: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.SubCatallproducts, buildHeader());
  },
  FilterDetails: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.filterDetails, buildHeader());
  },

  SearchProduct: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.SearchProduct, buildHeader());
  },

  getAddToCart: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.AddToCart, buildHeader());
  },
  getCartDetails: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.getCartDetails, buildHeader());
  },
  Productcount: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.Productcount, buildHeader());
  },


  addUserAddress: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.addUserAddress, buildHeader());
  },

  getUserAddress: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.getUserAddress, buildHeader());
  },
  userUpdateAddress: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.userUpdateAddress, buildHeader());
  },

  deleteUserAddress: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.deleteUserAddress, buildHeader());
  },

  updateUserDefaultAddress: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.updateUserDefaultAddress, buildHeader());
  },
  getUserDefaultAddress: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.getUserDefaultAddress, buildHeader());
  },

  userAddOrder: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.userAddOrder, buildHeader());
  },
  getUserOrders: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.getUserOrders, buildHeader());
  },

  CancelOrder: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.CancelOrder, buildHeader());
  },

  Trackorder: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.Trackorder, buildHeader());
  },

  OfferProductlist: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.OfferProductlist, buildHeader());
  },
  //   addAddress: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.addAddress, buildHeader());
  //   },
  //   getAddress: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.getAddress, buildHeader());
  //   },
  //   updateAddress: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.updateAddress, buildHeader());
  //   },
  //   deleteAddress: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.deleteAddress, buildHeader());
  //   },
  //   addToCart: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.addToCart, buildHeader());
  //   },
  //   getCart: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.getCart, buildHeader());
  //   },
  //   updateCart: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.updateCart, buildHeader());
  //   },
  //   removeCart: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.removeCart, buildHeader());
  //   },
  //   addToFavorite: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.addToFavorite, buildHeader());
  //   },
  //   getFavorite: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.getFavorite, buildHeader());
  //   },
  //   removeFromFavorite: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.removeFromFavorite, buildHeader());
  //   },
  //   addToCheckout: (onResponse, data, isHeaderRequired) => {
  //     request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl+globals.addToCheckout, buildHeaderNormal());
  //   },
};

export const buildHeader = (headerParams = {}) => {
  console.log(globals.apiToken)
  var header = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    Authorization: globals.apiToken
  };
  Object.assign(header, headerParams);
  return header;
};

export const buildHeaderNormal = (headerParams = {}) => {
  var header = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  };
  Object.assign(header, headerParams);
  return header;
};

async function request(onResponse, data, type, returnType, isHeaderRequired, featureURL, secureRequest) {
  let response = "";
  let responseJSON;
  console.log("featureURL >>> " + featureURL);
  console.log("secureRequest " + JSON.stringify(secureRequest));
  console.log("data >>> " + JSON.stringify(data));
  console.log("returnType " + returnType);
  console.log("isHeaderRequired " + isHeaderRequired);
  console.log("type " + type);
  try {
    if (type === "GET") {
      if (isHeaderRequired) {
        console.log("Request Call get with Header");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,
          headers: secureRequest
        }));
      } else {
        console.log("Request Call get without header");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,

        }));
      }
    } else {
      if (secureRequest["Content-Type"] === "multipart/form-data") {
        console.log("MULTIPART Request Call");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,
          headers: secureRequest,
          body: data
        }));
      } else {
        console.log("Request Call post with header");
        response = await timeout(globals.timeoutDuration, fetch(featureURL, {
          method: type,
          headers: secureRequest,
          body: JSON.stringify(data)
        }));
      }
    }
    // console.log("response " + JSON.stringify(response));
    console.log("response status " + response.status);
    if (returnType === "TEXT") {
      responseJSON = await response.text();
    } else if (returnType === "HTML") {
      responseJSON = await response.html();
    }
    else {
      responseJSON = await response.json();
    }
    console.log("responseJSON " + JSON.stringify(responseJSON));

    if (responseJSON.status == "success") {
      console.log("onResponse success ");
      onResponse.success(responseJSON);
    } else if (response.status == 440) {
      console.log("onResponse 440 ");
      // onResponse.error(responseJSON);
      if (Platform.OS == "ios") {
        const errorMsg = globals.checkObject(responseJSON, "message") ? responseJSON.message : JSON.stringify(responseJSON);
        // AsyncStorage.clear()
        Alert.alert(globals.appName, errorMsg, [{ text: 'OK', onPress: () => RNRestart.Restart() }], { cancelable: false });
      } else {
        const isErrorMsg = globals.checkObject(responseJSON, "message");
        (isErrorMsg) ? Alert.alert(globals.appName, responseJSON.message) : Alert.alert(globals.appName, JSON.stringify(responseJSON));
      }
    } else {
      console.log("onResponse error");
      onResponse.error(responseJSON);
    }
    if (onResponse.complete) {
      console.log("onResponse complete");
      onResponse.complete();
    }
  } catch (error) {
    console.log("onResponse catch error " + error);
    //  let jsonParseError = error.includes('Unrecognized')
    // console.log("jsonParseError--> " + JSON.stringify(response.text()));

    if (!globals.isInternetConnected && onResponse.error) {
      onResponse.error(internetErrorObj);
      console.log("Catch error internal");

    } else if (onResponse.error) {
      onResponse.error(JSON.parse(error));
      console.log("Catch error server");
    } else {
      console.log("Catch error unkonwn");
      onResponse.error(response.status);
    }
    if (onResponse.complete) {
      console.log("onResponse catch complete");
      onResponse.complete();
    }
  }
}

function timeout(ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(JSON.stringify(timeoutObj));
    }, ms);
    promise.then(resolve, reject);
  });
}
