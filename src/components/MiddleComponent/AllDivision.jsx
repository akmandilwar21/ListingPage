export default function AllDivision({England,Scotland,Ireland}){
    //console.log(England,Scotland,Ireland);
    return (
        <div>
           <div style={{display:"grid", gridTemplateColumns:"25% 25% 25% 25%"}}>
               <div></div> 
               <div><h3>England And Whales</h3></div>
               <div></div>
            </div>
              <div className='header-table'>
                  <div>Title</div>
                  <div>Date</div>
                  <div>Note</div>
              </div>
             {England.map(n=>(
                 <div className='content-table'>
                     <div>{n.title}</div>
                     <div>{n.date}</div>
                     <div>{n.notes}</div>
                 </div>
             ))}
              <div style={{display:"grid", gridTemplateColumns:"25% 25% 25% 25%"}}>
               <div></div> 
               <div><h3>Scotland</h3></div>
               <div></div>
            </div>
             {Scotland.map(n=>(
                 <div className='content-table'>
                     <div>{n.title}</div>
                     <div>{n.date}</div>
                     <div>{n.notes}</div>
                 </div>
             ))}
                 <div style={{display:"grid", gridTemplateColumns:"25% 25% 25% 25%"}}>
               <div></div> 
               <div><h3>Ireland</h3></div>
               <div></div>
            </div>
             {Ireland.map(n=>(
                 <div className='content-table'>
                     <div>{n.title}</div>
                     <div>{n.date}</div>
                     <div>{n.notes}</div>
                 </div>
             ))}   
        </div>);
}