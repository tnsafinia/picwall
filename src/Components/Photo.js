import React from 'react'

function Photo(props) {

    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >

            {props.items.map((i) =>
                <figure key={i.id} style={{ paddingLeft: "0.6%", paddingRight: "0.6%" }}>
                    <img src={"https://live.staticflickr.com/" + i.server + "/" + i.id + "_" + i.secret + ".jpg"} style={{ borderRadius: "5%" }} />
                </figure>
            )}
         </div> 
        
    )
}
export default Photo