import css from "./Content.module.css";
import Model from "./Model";
import allModels from "../allModels";
export default () => {
  return (
    <>
      <Model />
      {allModels.map((model) => (
        <div id={model.name} key={model.name}>
          <picture className={css.imageContainer}>
            <source srcSet={model.src} media="(min-width: 500px)" />
            <source srcSet={model.srcV} media="(max-width: 499px)" />
            <img
              id={model.name + "Img"}
              alt="Didn't work"
              className={css.contentImage}
            />
          </picture>
        </div>
      ))}
    </>
  );
};
{
  /* <img
  className={css.contentImage}
  src={props.narrow ? model.srcV : model.src}
/>; */
}
