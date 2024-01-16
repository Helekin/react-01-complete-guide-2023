import React, { Fragment } from "react";
import Link from "next/link";

function News() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS is awesome</Link>
        </li>
        <li>
          <Link href="/news/smt">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default News;
