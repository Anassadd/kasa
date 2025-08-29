import "./banner.css";

function Banner({ image, title, className }) {
  return (
    <div
      className={`banner ${className || ""}`} 
      style={{ backgroundImage: `url(${image})` }}
    >
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
}

export default Banner;

