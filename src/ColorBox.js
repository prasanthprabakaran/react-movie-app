export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "30px",
    width: "250px",
    marginTop: "10px",
  };

  return <div style={styles}></div>;
}
