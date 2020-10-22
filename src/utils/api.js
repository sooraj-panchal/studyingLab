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
  student_Register: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.student_Register, buildHeaderFormData());
  },
  student_login: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.student_login, buildHeaderFormData());
  },
  forgot_password: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.forgot_password, buildHeaderFormData());
  },
  verify_Otp: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.verify_forgot_password_otp, buildHeaderFormData());
  },
  reset_password: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.reset_password, buildHeaderFormData());
  },
  get_profile: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.get_profile, buildHeaderFormData());
  },
  update_profile: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.update_profile, buildHeaderFormData());
  },
  course_list: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.course_list, buildHeaderFormData());
  },

  sub_category: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.sub_category, buildHeaderFormData());
  },

  course: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.course, buildHeaderFormData());
  },
  course_detail: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.course_detail, buildHeaderFormData());
  },
  quiz: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.quiz, buildHeaderFormData());
  },
  quiz_answer: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.quiz_answer, buildHeaderFormData());
  },
  final_result: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.final_result, buildHeaderFormData());
  },
  course_like: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.course_like, buildHeaderFormData());
  },
  add_favorite: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.add_favorite, buildHeaderFormData());
  },
  get_favorite: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.get_favorite, buildHeaderFormData());
  },
  search: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.search, buildHeaderFormData());
  },
  change_password: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.change_password, buildHeaderFormData());
  },
  enroll_course: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.enroll_course, buildHeaderFormData());
  },
  get_my_course: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.get_my_course, buildHeaderFormData());
  },
  division: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.division, buildHeaderFormData());
  },
  update_division: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.update_division, buildHeaderFormData());
  },
  course_chapter: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.course_chapter, buildHeaderFormData());
  },
  add_rating: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.add_rating, buildHeaderFormData());
  },
  get_review: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.get_review, buildHeaderFormData());
  },
  filter_data: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.filter_data, buildHeaderFormData());
  },
  add_message: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.add_message, buildHeaderFormData());
  },
  chat: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.chat, buildHeaderFormData());
  },
  add_request_form: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.add_request_form, buildHeaderFormData());
  },
  popular_course: (onResponse, data, isHeaderRequired) => {
    request(onResponse, data, "POST", "JSON", isHeaderRequired, globals.mainUrl + globals.popular_course, buildHeaderFormData());
  }


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

export const buildHeaderFormData = (headerParams = {}) => {
  var header = {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data",
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
