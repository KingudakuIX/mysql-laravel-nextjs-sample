import { axios } from "@/lib/axios";
import { useEffect, useMemo, useState } from "react"

interface IArticle {
  attributes: {
    slug: string;
    title: string;
  }
}

export const useArticles = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  useEffect(() => {
    axios.get("/api/v1/articles")
      .then(res => {
        console.log("res", res);
        setArticles(res.data.data)
      })
  }, [])
  return articles;
}