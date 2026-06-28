    export default function SkeletonCard() {
  return (
    <div style={{
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      background: "#f5f5f5",
      height: "120px",
      animation: "pulse 1.5s infinite"
    }}>
      <div style={{ height: "20px", background: "#ddd", marginBottom: "10px" }} />
      <div style={{ height: "15px", background: "#e0e0e0", marginBottom: "8px" }} />
      <div style={{ height: "15px", background: "#e0e0e0" }} />
    </div>
  );
}