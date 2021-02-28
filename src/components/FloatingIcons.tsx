import { ReactNode } from "react";
import { StyledFLoatingIconsContainer, Image, CustomItem } from "./styles";

type Item = {
  /**
   * Identifier. Must be unique.
   */
  id: string;
  /**
   * 'alt' value for <img /> HTML tag.
   */
  altText?: string;
  /**
   * ClassName for the image or any custom html passed.
   */
  className?: string;
  /**
   * Custom HTML instead of image.
   */
  content?: string | ReactNode;
  /**
   * If you want to pass a custom HTML set this prop to true.
   */
  isNotImage?: boolean;
  /**
   * Source of the image passed.
   */
  src?: string;
  /**
   * click handler. Not recommended given the items are not static.
   */
  onClick?: () => unknown;
  /**
   * Position of the item.
   */
  position: {
    x: string;
    y: string;
  };
  /**
   * Custom size of the item. Usefull to resize big images.
   */
  size?: { width: string; height: string };
  /**
   * Custom animation duration. 3 seconds by default.
   */
  animationDuration?: string;
};

export interface IFloatingIconsProps {
  /**
   * List of floating items. They can be images or text or any custom html
   */
  items: Item[];
  /**
   * Background where the items will be floating on (optional). It can be an image or transparent if not passed.
   */
  backgroundContent?: { imagePath?: string; color?: string };
  /**
   * How large should the whole container be? Default to: { width: 100%, height: 100%; }
   */
  sizeWrapper?: { width: string; height: string };
}

export const FloatingIcons = (props: IFloatingIconsProps) => {
  const { items, sizeWrapper, backgroundContent } = props;

  return (
    <StyledFLoatingIconsContainer {...sizeWrapper} {...backgroundContent}>
      <div>
        {Array.isArray(items) &&
          items.map((item) => {
            if (item.isNotImage) {
              return (
                (
                  <CustomItem
                    key={item.id}
                    className={item.className}
                    top={item.position.y}
                    left={item.position.x}
                  >
                    {item.content}
                  </CustomItem>
                ) ?? <div>This item is empty</div>
              );
            }

            return (
              <Image
                key={item.id}
                src={item.src}
                top={item.position.y}
                left={item.position.x}
                className={item.className}
                alt={item.altText}
                animationDuration={item.animationDuration}
                {...item.size}
              />
            );
          })}
      </div>
    </StyledFLoatingIconsContainer>
  );
};

FloatingIcons.defaultProps = {
  backgroundContent: { imagePath: undefined, color: "transparent" },
  sizeWrapper: undefined,
};
