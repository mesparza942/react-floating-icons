# React Floating Icons

> A React component that allows you to add N floating items to a container. It is Full configurable. Container, items, floating effect, etc. Find out props below.

<div align="center">
  <img src="https://github.com/mesparza942/react-floating-icons/blob/main/src/assets/react-floating-icons-luigui-mansion.gif"/>
</div>

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Props](#props)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)

## Getting started

Install `react-floating-icons`. Coming soon.

## Usage

```tsx
import { useState } from "react";
import FloatingIcons, { IFloatingIconsProps } from "react-floating-icons";

const FloatingIconsWrapper: IFloatingIconsProps = () => {
  const backgroundContent = {
    imagePath: "<img_url>",
  };

  const items = [
    {
      id: "<unique_id_1>",
      src: "<img_url>",
      altText: "Some text that describes image 1",
      position: { x: "120px", y: "100px" },
      animationDuration: "1s",
    },
    {
      id: "<unique_id_2>",
      src: "<img_url>",
      altText: "Some text that describes image 2",
      position: { x: "180px", y: "100px" },
      animationDuration: "1s",
    },
    {
      id: "<unique_id_3>",
      src: "<img_url>",
      altText: "Some text that describes image 3",
      size: { width: "40px", height: "40px" },
      position: { x: "250px", y: "100px" },
      animationDuration: "1s",
    },
  ];

  return <FloatingIcons backgroundContent={backgroundContent} items={items} />;
};
```

## Props

| Prop                               |   Type   | <div style="width: 400px;">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--------------------------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| items<br/>_(required)_             | object[] | Icons/Items with the following keys: <div>`id: string` - Unique identifier for the item.</div><div>`position: { x: string, y: string }` - Position of the item.</div><div>`size?: { width: string; height: string }` - Custom size of the item. Usefull to resize big images.</div><div>`animationDuration?: string` - Custom animation duration. 3 seconds by default.</div><div>`className?: string` - ClassName for the image or any custom html passed.</div><div>`src?: string` - Source/url of the image passed.</div><div>`isNotImage?: boolean` - If you want to pass a custom HTML set this prop to true. Defaults to false.</div><div>`altText?: string` - Description of the image (**alt** attribute for **img** HTML tag).</div><div>`content?: string or ReactNode` - Custom string or HTML instead of image (**src**).</div> |
| backgroundContent<br/>_(optional)_ |  object  | The background of the container with the following keys: <div>`imagePath?: string` - If you want an image as background, send the url.</div><div>`color?: string` - If you want some color send it as you would apply to the css **background-color**.</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| sizeWrapper<br/>_(optional)_       |  object  | The size of the container with the following keys: <div>`width: string` - width of the container. Defaults to 100%</div><div>`height: string` - height of the container. Defaults to 400px</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Browser Compatibility

Coming soon.

## Contributing

- Pull requests are very welcome :)
- If something is not working properly, please create an issue.
