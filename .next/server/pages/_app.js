/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCa-dQ1oNPSZgQj3RWnxLRhl8n2d14hh5k\",\n    authDomain: \"netflix-clone-gh-2022.firebaseapp.com\",\n    projectId: \"netflix-clone-gh-2022\",\n    storageBucket: \"netflix-clone-gh-2022.appspot.com\",\n    messagingSenderId: \"1044575312216\",\n    appId: \"1:1044575312216:web:f2acd991eb52f647a32d2d\",\n    measurementId: \"G-BZ1RSTWT5Z\"\n};\n// Initialize Firebase\n// const app = initializeApp(firebaseConfig);\n// const analytics = getAnalytics(app);\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDTztBQUNkO0FBRVg7QUFDckMsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1LLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUVBLHNCQUFzQjtBQUN0Qiw2Q0FBNkM7QUFDN0MsdUNBQXVDO0FBRXZDLE1BQU1DLE1BQU0sQ0FBQ1oscURBQU9BLEdBQUdhLE1BQU0sR0FBQ1osMkRBQWFBLENBQUNHLGtCQUFrQkwsb0RBQU1BLEVBQUU7QUFDdEUsTUFBTWUsS0FBS1osZ0VBQVlBO0FBQ3ZCLE1BQU1hLE9BQU9aLHNEQUFPQTtBQUVwQixpRUFBZVMsR0FBR0EsRUFBQTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UudHM/OTJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBnZXRBcHAsIGdldEFwcHMsIGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgIHtnZXRGaXJlc3RvcmV9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcbmltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcbmltcG9ydCB7Z2V0QXV0aH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDYS1kUTFvTlBTWmdRajNSV254TFJobDhuMmQxNGhoNWtcIixcbiAgYXV0aERvbWFpbjogXCJuZXRmbGl4LWNsb25lLWdoLTIwMjIuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJuZXRmbGl4LWNsb25lLWdoLTIwMjJcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJuZXRmbGl4LWNsb25lLWdoLTIwMjIuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA0NDU3NTMxMjIxNlwiLFxuICBhcHBJZDogXCIxOjEwNDQ1NzUzMTIyMTY6d2ViOmYyYWNkOTkxZWI1MmY2NDdhMzJkMmRcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUJaMVJTVFdUNVpcIlxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuLy8gY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4vLyBjb25zdCBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoYXBwKTtcblxuY29uc3QgYXBwID0gIWdldEFwcHMoKS5sZW5ndGg/aW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKClcbmNvbnN0IGF1dGggPSBnZXRBdXRoKClcblxuZXhwb3J0IGRlZmF1bHQgYXBwXG5leHBvcnQge2F1dGgsZGJ9Il0sIm5hbWVzIjpbImdldEFwcCIsImdldEFwcHMiLCJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImxlbmd0aCIsImRiIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [initialLoading, setInitialLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        }), [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n        }).catch((error)=>alert(error.message)).finally(()=>setLoading(false));\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user,\n            signUp,\n            signIn,\n            error,\n            loading,\n            logout\n        }), [\n        user,\n        loading,\n        error\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"/Users/mazza/Desktop/Builds/netflix-clone/hooks/useAuth.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined);\n};\n// Let's only export the `useAuth` hook instead of the context.\n// We only want to use the hook directly and never the context comopnent.\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUEsQ0FBQ0s7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hvb2tzL3VzZUF1dGgudHN4P2ZiYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduT3V0LFxuICBVc2VyLFxufSBmcm9tICdmaXJlYmFzZS9hdXRoJztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSc7XG5cbmludGVyZmFjZSBJQXV0aCB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBzaWduVXA6IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBzaWduSW46IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUF1dGg+KHtcbiAgdXNlcjogbnVsbCxcbiAgc2lnblVwOiBhc3luYyAoKSA9PiB7fSxcbiAgc2lnbkluOiBhc3luYyAoKSA9PiB7fSxcbiAgbG9nb3V0OiBhc3luYyAoKSA9PiB7fSxcbiAgZXJyb3I6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxufSk7XG5cbmludGVyZmFjZSBBdXRoUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW5pdGlhbExvYWRpbmcsIHNldEluaXRpYWxMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+XG4gICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAvLyBMb2dnZWQgaW4uLi5cbiAgICAgICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vdCBsb2dnZWQgaW4uLi5cbiAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0SW5pdGlhbExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSksXG4gICAgW2F1dGhdXG4gICk7XG5cbiAgY29uc3Qgc2lnblVwID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpO1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcbiAgfTtcblxuICBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XG4gICAgICAgIHNldFVzZXIodXNlckNyZWRlbnRpYWwudXNlcik7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgc2lnbk91dChhdXRoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xuICB9O1xuXG4gIGNvbnN0IG1lbW9lZFZhbHVlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoeyB1c2VyLCBzaWduVXAsIHNpZ25JbiwgZXJyb3IsIGxvYWRpbmcsIGxvZ291dCB9KSxcbiAgICBbdXNlciwgbG9hZGluZywgZXJyb3JdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21lbW9lZFZhbHVlfT5cbiAgICAgIHshaW5pdGlhbExvYWRpbmcgJiYgY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbi8vIExldCdzIG9ubHkgZXhwb3J0IHRoZSBgdXNlQXV0aGAgaG9vayBpbnN0ZWFkIG9mIHRoZSBjb250ZXh0LlxuLy8gV2Ugb25seSB3YW50IHRvIHVzZSB0aGUgaG9vayBkaXJlY3RseSBhbmQgbmV2ZXIgdGhlIGNvbnRleHQgY29tb3BuZW50LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsInVzZVJvdXRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiYXV0aCIsIkF1dGhDb250ZXh0IiwidXNlciIsInNpZ25VcCIsInNpZ25JbiIsImxvZ291dCIsImVycm9yIiwibG9hZGluZyIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwicm91dGVyIiwic2V0VXNlciIsInNldEVycm9yIiwiaW5pdGlhbExvYWRpbmciLCJzZXRJbml0aWFsTG9hZGluZyIsInNldExvYWRpbmciLCJwdXNoIiwiZW1haWwiLCJwYXNzd29yZCIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsImNhdGNoIiwiYWxlcnQiLCJtZXNzYWdlIiwiZmluYWxseSIsIm1lbW9lZFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/mazza/Desktop/Builds/netflix-clone/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mazza/Desktop/Builds/netflix-clone/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mazza/Desktop/Builds/netflix-clone/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRWlCO0FBQ1o7QUFFcEMsU0FBU0UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSCw4Q0FBVUE7a0JBQ1QsNEVBQUNELHdEQUFZQTtzQkFDWCw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlQXV0aCc7XG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxSZWNvaWxSb290PlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC9SZWNvaWxSb290PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJSZWNvaWxSb290IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();