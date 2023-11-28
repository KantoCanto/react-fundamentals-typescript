import { Header } from "./components/Header.tsx";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar.tsx";
import { PostType } from "./components/Post.tsx";

import "./globalStyles.css";
import styles from "./App.module.css";

//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: String

const post: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/kantocanto.png",
      name: "Author Name",
      role: "Author Job",
    },
    content: [
      { type: "paragraph", content: "This is a sentence." },
      { type: "paragraph", content: "Yet another sentence." },
      { type: "paragraph", content: "Last sentence?" },
    ],
    publishedAt: new Date("2023-11-03 20:13"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/kantocanto.png",
      name: "Second Author Name",
      role: "Second Author Job",
    },
    content: [
      { type: "paragraph", content: "This is a sentence." },
      { type: "paragraph", content: "Yet another sentence." },
      { type: "paragraph", content: "Last sentence?" },
    ],
    publishedAt: new Date("2023-07-03 20:13"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/kantocanto.png",
      name: "Third Author Name",
      role: "Third Author Job",
    },
    content: [
      { type: "paragraph", content: "This is a sentence." },
      { type: "paragraph", content: "Yet another sentence." },
      { type: "paragraph", content: "Last sentence?" },
    ],
    publishedAt: new Date("2023-05-03 20:13"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>
            {post.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
