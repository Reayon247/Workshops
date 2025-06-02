import MyImageComponent from "./Image";

function MyGalleryComponent() {
  return (
    <div>
      <MyImageComponent imageUrl="https://picsum.photos/200/300" altText="" />
      <MyImageComponent imageUrl="https://picsum.photos/200/500" altText="" />
      <MyImageComponent imageUrl="https://picsum.photos/200/700" altText="" />
    </div>
  );
}

export default MyGalleryComponent;
