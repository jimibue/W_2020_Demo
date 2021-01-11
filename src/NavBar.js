export default () => {
  return (
    <div style={styles.navBar}>
      <p style={styles.navLink}>Home</p>
      <p style={styles.navLink}>Settings</p>
    </div>
  );
};

const styles = {
  navBar: {
    background: "black",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    height: "50px",
  },
  navLink: {
    color: "white",
    cursor: "pointer",
    marginLeft: "20px",
  },
};
