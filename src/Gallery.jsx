import React from "react";
import Posting from "./Posting";
const craigPost = require('./postings')

let postList = craigPost.postings.map((data, i) => {
    return <Posting data={data} key={i} />;
});

export default function Gallery() {
    return (
        <>
            <h1>Gallery!</h1>
            <div>{postList}</div>
        </>
    );
};
