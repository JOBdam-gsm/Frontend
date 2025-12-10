'use client'
import { useState } from 'react'

interface Post {
  id: number
  title: string
  view: number
  like: number
}

export default function BoardPage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: '첫 번째 글', view: 0, like: 0 },
    { id: 2, title: 'React + Next 연습', view: 0, like: 0 },
  ])
  const [newPostTitle, setNewPostTitle] = useState('')
  const [view, setView] = useState(0)
  const [like, setLike] = useState(0)

  const Click = () => {
    if (!newPostTitle.trim()) return
    const newPost: Post = {
      id: posts.length + 1,
      title: newPostTitle,
      view: view,
      like: like,
    }
    setPosts([...posts, newPost])
    setNewPostTitle('')
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">게시판</h1>

      <div className="flex justify-end mb-4">
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="새 글 제목"
          className="border rounded-lg px-3 py-2 mr-2 w-64"
        />
        <button
          onClick={Click}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          추가
        </button>
      </div>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="border rounded-lg p-4 hover:bg-gray-50" onClick={() => {
            post.view += 1
            setView(post.view)
          }}>
            {post.title}
            <br />
            {"조회수 " + post.view + "회"}
            <button className="flex flex-row" onClick={(e) => { 
              post.like += 1
              setLike(post.like)
              e.stopPropagation() }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -4 24 24"><path fill="currentColor" d="M3.636 7.208L10 13.572l6.364-6.364a3 3 0 1 0-4.243-4.243L10 5.086l-2.121-2.12a3 3 0 0 0-4.243 4.242M9.293 1.55l.707.707l.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0l-7.071-7.07a5 5 0 1 1 7.07-7.071z" /></svg>
              {post.like}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
