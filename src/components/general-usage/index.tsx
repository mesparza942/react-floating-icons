const ImageOne = require("../assets/colors.svg");
const ImageTwo = require("../assets/code-brackets.svg");
const ImageThree = require("../assets/comments.svg");
const ComputerBg = require("../assets/transfer-icon.svg");

export const WithBackgroundTemplate = {
  backgroundContent: {
    imagePath: ComputerBg.default,
  },
  items: [
    {
      id: "img1",
      src: ImageOne.default,
      position: { x: "70px", y: "40px" },
      altText: "Image One",
    },
    {
      id: "img2",
      src: ImageTwo.default,
      position: { x: "360px", y: "120px" },
      altText: "Image Two",
    },
    {
      id: "img3",
      src: ImageThree.default,
      position: { x: "150px", y: "100px" },
      altText: "Image Three",
    },
  ],
};

export const WithoutBackgroundTemplate = {
  items: [
    {
      id: "img1",
      src: ImageOne.default,
      position: { x: "200px", y: "200px" },
      altText: "Image One",
    },
    {
      id: "img2",
      src: ImageTwo.default,
      position: { x: "280px", y: "200px" },
      altText: "Image Two",
    },
    {
      id: "img3",
      src: ImageThree.default,
      position: { x: "360px", y: "200px" },
      altText: "Image Three",
    },
  ],
};

export const SolidBackgroundTemplate = {
  backgroundContent: {
    color: "black",
  },
  items: [
    {
      id: "img1",
      src: ImageOne.default,
      position: { x: "200px", y: "200px" },
      altText: "Image One",
    },
    {
      id: "img2",
      src: ImageTwo.default,
      position: { x: "280px", y: "200px" },
      altText: "Image Two",
    },
    {
      id: "img3",
      src: ImageThree.default,
      position: { x: "360px", y: "200px" },
      altText: "Image Three",
    },
  ],
};

export const CustomItemTemplate = {
  backgroundContent: {
    color: "black",
  },
  items: [
    {
      id: "img1",
      src: ImageOne.default,
      position: { x: "200px", y: "200px" },
      altText: "Image One",
    },
    {
      id: "img2",
      isNotImage: true,
      content: (
        <div>
          Custom
          <br /> Item
        </div>
      ),
      className: "white-text floating",
      position: { x: "280px", y: "200px" },
      altText: "Test Text",
    },
    {
      id: "img3",
      src: ImageThree.default,
      position: { x: "360px", y: "200px" },
      altText: "Image Three",
    },
  ],
};
