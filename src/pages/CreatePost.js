import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, { title, postText });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Kreiraj Objavu</h1>
        <div className="inputGp">
          <label> Naslov:</label>
          <input
            placeholder="Naslov objave"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Tekst:</label>
          <textarea
            placeholder="Sadrzaj objave"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit</button>
      </div>
    </div>
  );
};

export default CreatePost;
