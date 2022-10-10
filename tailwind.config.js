/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "overlay":'rgba(0,0,0,.7)'
      },
      backgroundImage:{
        "loginBg":"url(https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/383fc36a-aa04-4dfd-95a0-a4b71bc21eed/IN-en-20221003-popsignuptwoweeks-perspective_alpha_website_medium.jpg)",
        "introBg":"url(https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/4f46d201-48d4-40a7-9bfb-8e260d680912/IN-en-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg)"
      }
    },
  },
  plugins: [],
}
