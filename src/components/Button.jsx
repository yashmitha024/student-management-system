
function Button({ text, color, onClick, type, disabled }) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: color || "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px"
      }}
    >
      {text}
    </button>
  );
}

export default Button;
