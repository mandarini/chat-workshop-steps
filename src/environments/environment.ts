// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyAzslTXiTqUQrS-bnL-V_cRYPU-azcCKM0",
      authDomain: "fbw-app.firebaseapp.com",
      databaseURL: "https://fbw-app.firebaseio.com",
      projectId: "fbw-app",
      storageBucket: "fbw-app.appspot.com",
      messagingSenderId: "737539879063"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
