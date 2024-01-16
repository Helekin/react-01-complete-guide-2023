import React from "react";

import { useRouter } from "next/router";

function Detail() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>{newsId}</h1>;
}

export default Detail;
