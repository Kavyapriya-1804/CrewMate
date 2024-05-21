
const Image = ({src, alt, classNames}) => (
    <img src={src} alt={alt} className={`w-100 ${classNames}`} />
);

export default Image;
