
const LargeGalleryImage = ( {imagePath, alt}) => {
  return (
    <img src={imagePath} alt={alt} className="rounded-lg w-full md:w-[395px] xl:w-[635px] h-[368px] xl:h-[592px]"/>
  )
}

export default LargeGalleryImage