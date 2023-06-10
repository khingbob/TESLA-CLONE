import css from "./Model.module.css";
export default () => {
  return (
    <>
      <div id={css.modelName}>Roadster</div>
      <div id={css.footerBox}>
        <div id={css.footer}>
          <div id={css.order}>Custom Order</div>
          <div id={css.learn}>Learn More</div>
        </div>
        <div id={css.ncap}>SPEED</div>
      </div>
    </>
  );
};
