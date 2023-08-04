import React from "react";

export default function Posting({ data }) {
    return (
        <>
            <h1>{data.title}</h1>
            <div>{data.description}</div>
            <div>{data.price}</div>
            <div>{data.imageURL}</div>
        </>

    )
}
