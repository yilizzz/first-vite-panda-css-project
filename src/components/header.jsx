import { css } from "../../styled-system/css";
import { center } from "../../styled-system/patterns";
function Header() {
  const styles = css({
    color: "darkgreen",
    width: "80%",
    fontSize: "2xl",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "gainsboro",
    borderRadius: "9999px",
    padding: "10px 15px",
    margin: "20px",
  });
  return (
    <div className={center({ width: "100vw" })}>
      <span className={styles}>Food Found 🍗</span>
    </div>
  );
}

export default Header;
