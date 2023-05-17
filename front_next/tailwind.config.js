/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      red: "#FF0101",
      black: "#000000",
      white: "#FFFFFF",
      orange: "#ed8936",
      blue: "#4299e1",
      c1: "#FBFBFB",
    },
    fontSize: {
      "1xl": [
        "clamp(5px, calc((48 / 1440) * 100vw), 48px)",
        {
          lineHeight: "clamp(5px, calc((24 / 1440) * 100vw), 24px)",
          letterSpacing: "0.01em",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "clamp(5px, calc((26 / 1440) * 100vw), 26px)",
        {
          lineHeight: "clamp(5px, calc((24 / 1440) * 100vw), 26px)",
          letterSpacing: "0.01em",
          fontWeight: "700",
        },
      ],
      "3xl": [
        "clamp(5px, calc((24 / 1440) * 100vw), 24px)",
        {
          lineHeight: "clamp(5px, calc((24 / 1440) * 100vw), 24px)",
          letterSpacing: "0.01em",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "clamp(5px, calc((20 / 1440) * 100vw), 20px)",
        {
          lineHeight: "clamp(5px, calc((24 / 1440) * 100vw), 24px)",
          letterSpacing: "0.01em",
          fontWeight: "700",
        },
      ],
      "5xl": [
        "clamp(5px, calc((18 / 1440) * 100vw), 18px)",
        {
          lineHeight: "clamp(5px, calc((24 / 1440) * 100vw), 24px)",
          letterSpacing: "0.01em",
          fontWeight: "400",
        },
      ],
      "6xl": [
        "clamp(5px, calc((14 / 1440) * 100vw), 14px)",
        {
          lineHeight: "clamp(5px, calc((24 / 1440) * 100vw), 24px)",
          letterSpacing: "0.01em",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "clamp(5px, calc((12 / 1440) * 100vw), 12px)",
        {
          lineHeight: "clamp(5px, calc((24 / 1440) * 100vw), 24px)",
          letterSpacing: "0.01em",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        full: "clamp(300px, calc((1440 / 1440) * 100vw), 1440px)",
        logo: "clamp(50px, calc((178 / 1440) * 100vw), 178px)",
        nav: "clamp(40px, calc((117 / 1440) * 100vw), 117px)",
        main: "clamp(40px, calc((1323 / 1440) * 100vw), 1323px)",
        copy: "clamp(40px, calc((150 / 1440) * 100vw), 150px)",
        icon: "clamp(10px, calc((64 / 1440) * 100vw), 64px)",
        icon2: "clamp(10px, calc((60 / 1440) * 100vw), 60px)",
        button: "clamp(10px, calc((220 / 1440) * 100vw), 220px)",
        sec2: "clamp(200px, calc((835 / 1440) * 100vw), 835px)",
        sec3: "clamp(200px, calc((320 / 1440) * 100vw), 320px)",
        aside: "clamp(200px, calc((258 / 1440) * 100vw), 258px)",
        boxdiet: "clamp(200px, calc((258 / 1440) * 100vw), 258px)",
      },
      height: {
        logo: "clamp(20px, calc((61 / 1440) * 100vw), 61px)",
        icon: "clamp(10px, calc((64 / 1440) * 100vw), 64px)",
        icon2: "clamp(10px, calc((60 / 1440) * 100vw), 60px)",
        full: "clamp(20px, calc((933 / 1440) * 100vw), 933px)",
        button: "clamp(10px, calc((80 / 1440) * 100vw), 80px)",
        sec2: "clamp(50px, calc((320 / 1440) * 100vw), 320px)",
        sec3: "clamp(50px, calc((263 / 1440) * 100vw), 263px)",
        aside: "clamp(200px, calc((6130 / 1440) * 100vw), 613px)",
        boxdiet: "clamp(50px, calc((124 / 1440) * 100vw), 124px)",
      },
      margin: {
        nav: "clamp(20px, calc((240 / 1440) * 100vw), 240px)",
        copy: "clamp(40px, calc((122 / 1440) * 100vw), 122px)",
        s1: "clamp(10px, calc((41 / 1440) * 100vw), 41px)",
        sec2: "clamp(10px, calc((77 / 1440) * 100vw), 77px)",
        sec3: "clamp(10px, calc((30 / 1440) * 100vw), 30px)",
        aside: "clamp(10px, calc((31 / 1440) * 100vw), 31px)",
        boxdiet: "clamp(50px, calc((32 / 1440) * 100vw), 32px)",
        
      },
      padding: {
        nav: "clamp(2px, calc((18 / 1440) * 100vw), 18px) clamp(2px, calc((87 / 1440) * 100vw), 87px) clamp(2px, calc((12 / 1440) * 100vw), 12px) clamp(2px, calc((28 / 1440) * 100vw), 28px)",
        main: "clamp(2px, calc((68 / 1440) * 100vw), 68px) clamp(2px, calc((90 / 1440) * 100vw), 90px) clamp(2px, calc((86 / 1440) * 100vw), 86px) clamp(2px, calc((107 / 1440) * 100vw), 107px)",
        zero: "0",
      },
      gap: {
        nav: "clamp(1px, calc((20 / 1440) * 100vw), 20px)",
        boxdiet: 'clamp(2px, calc((24 / 1440) * 100vw), 24px)',
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [],
};
