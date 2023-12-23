const SmallGalleryImage = ({ imagePath, alt }) => {
  return (
    <img src={imagePath} alt={alt} className="w-full md:w-[274px] xl:w-[445px] h-[174px] xl:h-[280px] rounded-lg " />
  );
};

export default SmallGalleryImage;
