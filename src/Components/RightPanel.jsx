export default function RightPanel({ products }) {
    return (
      <div>
        <div className="item-container">
          {products.map((n) => (
            <div style={{ marginBottom: "50px" }}>
              <div>
                <img src={n.image} />
              </div>
              <div className="item-header">{n.name}</div>
              <div className="item-header" style={{ marginTop: "10px" }}>
                Rs.{n.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  