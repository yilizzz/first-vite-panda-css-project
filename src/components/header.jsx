import { css } from "../../styled-system/css";
import { center } from "../../styled-system/patterns";
import { ThemeControl } from "./themeControl";

function Header({ modeData }) {
  const styles = css({
    backgroundColor: modeData === "dark" ? "gray" : "azure",
    color: modeData === "dark" ? "azure" : "darkslategray",

    width: "100%",
    fontSize: "2xl",
    fontWeight: "bold",
    textAlign: "center",

    borderRadius: "15px",
    padding: "10px 15px",
    margin: "20px",
  });
  return (
    <div className={center({ width: "100vw" })}>
      <span className={styles}>Food Found 🍗</span>
      <ThemeControl />
    </div>
  );
}

export default Header;
