// My Device width :360
//My Device height:738

export const appName = 'E-menu'
export const isInternetConnected = true;
export const fcmToken = '';
// export const mainUrl = 'https://ragingdeveloper.com/api/api.php?apicall='
export const mainUrl = "https://chessmafia.com/php/EducationWebsite/api/"
export const student_Token = "";
export const isUserLoggedIn = "isUserLoggedIn"
export const authToken = "sJ4[pR3=bM5^gJ0]pS6.gI2$hV5*uS"

export const successMessage = ""
export const errorMessage = ""

export const student_Register = 'login/register'
export const student_login = 'login'
export const forgot_password = 'login/forgot_password'
export const verify_forgot_password_otp = 'login/verify_forgot_password_otp'
export const reset_password = 'login/reset_password'
export const get_profile = 'student/get_profile'
export const update_profile = 'student//update_profile'

export const category = 'category'
export const sub_category = 'sub_category'
export const course = 'course'
export const course_detail = 'course/course_detail'

export const quiz = 'quiz'
export const quiz_answer = 'student/quiz_answer'
export const final_result = 'student/final_result'

export const course_like = 'student/course_like'
export const add_favorite = 'student/add_favorite'
export const get_favorite = 'student/get_favorite'

export const search = 'search'
export const change_password = 'student/change_password'

export const enroll_course = 'student/enroll_course'
export const get_my_course = 'student/get_my_course'
export const division = 'division'
export const update_division = 'student/update_division'
export const course_chapter = 'course/course_chapter'

export const add_rating = 'student/add_rating'
export const get_review = 'student/get_review'




// export const otpVerify = 'driver/otpVerify'
// export const forgotPassword = 'driver/Forgotpassword'
// export const Resetpassword = 'driver/Resetpassword'
// export const Getprofile = 'driver/Getprofile'
// export const updateProfile = 'driver/Updateprofile'

// export const UploadDocument = 'driver/UploadDocument'
// export const GetDocument = 'driver/GetDocument'
// export const GetLicense = 'driver/GetLicense'
// export const CheckApprovalDocument = 'driver/CheckApprovalDocument'

// export const getDriverOrders = 'driver/getDriverOrders'
// export const UpdateOrderStatus = 'driver/UpdateOrderStatus'
// export const CurrentOrder = 'driver/CurrentOrder'

// export const getDriverOrders = 'driver/getDriverOrders'
// export const UpdateOrderStatus = 'driver/UpdateOrderStatus'
// export const CurrentOrder = 'driver/CurrentOrder'

// export const Userlist = 'driver/Userlist'

// export const AddEditBankDetail = 'driver/AddEditBankDetail'
// export const GetBankDetail = 'driver/GetBankDetail'

// export const Wallet = 'driver/Wallet'
// export const WithdrawAmount = 'driver/WithdrawAmount'

// // export const getDriverOrders = 'driver/getDriverOrders'
// // export const UpdateOrderStatus = 'driver/UpdateOrderStatus'
// // export const CurrentOrder = 'driver/CurrentOrder'


// export const addUserAddress = 'user/addUserAddress'
// export const getUserAddress = 'user/getUserAddress'
// export const userUpdateAddress = 'user/updateUserAddress'
// export const deleteUserAddress = 'user/deleteUserAddress'
// export const updateUserDefaultAddress = 'user/updateUserDefaultAddress'
// export const getUserDefaultAddress = 'user/getUserDefaultAddress'

// export const getCategoryData = 'product/Categorylist'
// export const homeSilderImages = 'product/Homeslider'
// export const productListData = 'product/Productlist'
// export const SubCatallproducts = "home/SubCatallproducts"


// export const catAllProducts = 'home/Catallproducts'
// export const SearchProduct = 'home/SearchProduct'
// export const filterDetails = 'product/Filterdetail'


// export const AddToCart = 'cart/Addcart'
// export const getCartDetails = 'cart/getCartDetails'
// export const Productcount = 'home/Productcount'

// export const userAddOrder = 'userorder/userAddOrder'
// export const getUserOrders = 'userorder/getUserOrders'
// export const CancelOrder = 'userorder/CancelOrder'
// export const Trackorder = 'userorder/Trackorder'

// export const OfferProductlist = 'setting/OfferProductlist'


// // export const  addVehicle = 'save_vehicle'
// export const getFoodCategoryData = 'category/cat_list'
// export const getFoodSubCategoryData = 'subcategory/listsubcat'
// export const updateProfile = 'user/updateprofile'
// export const addAddress = 'user/addressstore'
// export const getAddress='user/getAddress'
// export const updateAddress='user/addressupdate'
// export const deleteAddress='user/address_delete'
// export const addToCart='order/addtocart'
// export const getCart='order/get-cart'
// export const updateCart='order/updatetocart'
// export const removeCart='order/remover-cart'
// export const addToFavorite='order/addfavorite'
// export const getFavorite='order/getFavorite'
// export const removeFromFavorite='order/removeFavorite'
// export const addToCheckout='bank/checkout'

export const timeoutDuration = 30000;
export const WINDOW = Dimensions.get("window");
import React, { Component } from 'react';
import { Dimensions, Platform, TouchableOpacity, Text, View, AsyncStorage } from "react-native";
//import * as color from '../assets/styles/color';
//import * as globleStyles from '../assets/styles/globleStyles';

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const mpw5 = screenWidth * 0.0139  // margin width of 5
export const mph5 = screenHeight * 0.0068  // margin height of 5

export const iPhoneX =
  Platform.OS === "ios" &&
  Dimensions.get("window").height === 812 &&
  Dimensions.get("window").width === 375;
// --------------------------------- FontSizes For Whole App -------------------------------------


// More big new
export const font_8 =
  Platform.OS == "ios" ? screenWidth * 0.025 : screenWidth * 0.0225; // 8
export const font_9 =
  Platform.OS == "ios" ? screenWidth * 0.0275 : screenWidth * 0.025; // 9
export const font_10 =
  Platform.OS == "ios" ? screenWidth * 0.03 : screenWidth * 0.0275; // 10
export const font_11 =
  Platform.OS == "ios" ? screenWidth * 0.0325 : screenWidth * 0.03; // 11
export const font_12 = screenWidth * 0.032; // 12
export const font_13 = screenWidth * 0.0346; // 13
export const font_14 =
  Platform.OS == "ios" ? screenWidth * 0.04 : screenWidth * 0.0375; // 14
export const font_15 = screenWidth * 0.04; //15
export const font_16 =
  Platform.OS == "ios" ? screenWidth * 0.0475 : screenWidth * 0.0444; // 16
export const font_17 =
  Platform.OS == "ios" ? screenWidth * 0.05 : screenWidth * 0.045; // 17
export const font_18 =
  Platform.OS == "ios" ? screenWidth * 0.048 : screenWidth * 0.0475; // 18
export const font_19 = screenWidth * 0.0475; // 19
export const font_20 = screenWidth * 0.0556; // 20
export const font_22 = screenWidth * 0.055; // 22
export const font_24 = screenWidth * 0.064; // 24
export const font_26 = screenWidth * 0.0693; // 26
export const font_28 = screenWidth * 0.07; // 28
export const font_29 = screenWidth * 0.075; // 28
export const font_32 = screenWidth * 0.08; // 32
export const font_36 = screenWidth * 0.09; // 36
export const font_40 = screenWidth * 0.106; // 40
export const font_53 = screenWidth * 0.14; // 53

// --------------------------------- Later spacing For Whole App -------------------------------------


export const ltr_sp_013 = screenWidth * 0.000346; // 0.13 pt
export const ltr_sp_014 = screenWidth * 0.000373; // 0.14 pt
export const ltr_sp_015 = screenWidth * 0.0004; // 0.15 pt
export const ltr_sp_016 = screenWidth * 0.000426; // 0.16 pt
export const ltr_sp_024 = screenWidth * 0.00064; // 0.24 pt
export const ltr_sp_044 = screenWidth * 0.00117; // 0.44pt

export const drawerButton = (navigation, title) => (
  <View style={globleStyles.styles.headerContainer}>
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={globleStyles.styles.headerBack}
    >
      <Icon name="navicon" size={30} color={color.white} />
    </TouchableOpacity>
    <View style={globleStyles.styles.headerLabel}>
      <Text style={globleStyles.styles.headerLabelStyle}>
        {title}
      </Text>
    </View>
  </View>
);
