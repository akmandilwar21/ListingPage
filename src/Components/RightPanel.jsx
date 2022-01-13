import InfiniteScroll from "react-infinite-scroll-component";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function RightPanel({ products,fetchMoreData}) {
    return (
      <div>
       <div>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}        > 
           <div className="item-container">
           {products.map((n) => (
            <div style={{ marginBottom: "50px" }}>
              <div className="slide-box">
              <div className="icon"><i class="far fa-heart"></i></div>
                <img src={n.image} />
              </div>
              <div className="item-header">{n.name}</div>
              <div className="item-header" style={{ marginTop: "10px" }}>
                Rs.{n.price}
              </div>
            </div>
          ))}
          </div>
        </InfiniteScroll>
         </div>
      </div>
    );
  }
  