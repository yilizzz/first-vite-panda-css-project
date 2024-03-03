import { Switch } from "@ark-ui/react";
import { css } from "../../styled-system/css";
import { useModeData } from "../context/modeContext.jsx";

export const ThemeControl = () => {
  const { modeData, setModeData } = useModeData();
  // using the css function
  const rootStyle = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "50px",
  });
  const controlStyle = css({
    backgroundColor: "gray",
    borderRadius: "50px",
    width: "50px",
    height: "20px",
    border: "none",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
  });

  const thumbStyle = css({
    position: "absolute",
    top: "0",
    // left: "0",
    left: modeData === "dark" ? "60%" : "0", // Move to the right when checked
    width: " 20px",
    height: "20px",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
  });

  const labelStyle = css({
    marginLeft: "10px",
  });

  return (
    <Switch.Root
      className={rootStyle}
      onCheckedChange={(e) => {
        e.checked ? setModeData("dark") : setModeData("light");
      }}
    >
      {/* {(api) => ( */}
      <>
        <Switch.Control className={controlStyle}>
          <Switch.Thumb className={thumbStyle} />
        </Switch.Control>
        <Switch.Label className={labelStyle}>
          {/* {api.isChecked ? "true" : "false"} */}
          {modeData === "dark" ? "Dark" : "Light"}
        </Switch.Label>
      </>
      {/* )} */}
    </Switch.Root>
  );
};
