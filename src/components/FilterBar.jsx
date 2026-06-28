const tags = ["all", "tech", "workshop", "networking", "freefood"];

export default function FilterBar({ active, setActive }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setActive(tag)}
          style={{
            padding: "6px 10px",
            borderRadius: "20px",
            border: "1px solid gray",
            background: active === tag ? "black" : "white",
            color: active === tag ? "white" : "black"
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}