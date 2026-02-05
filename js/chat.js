import { auth, db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const messagesDiv = document.getElementById("messages");

const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, snapshot => {
  messagesDiv.innerHTML = "";

  snapshot.forEach(doc => {
    const msg = doc.data();
    const isMe = msg.user === auth.currentUser.phoneNumber;

    const div = document.createElement("div");
    div.className = `message ${isMe ? "me" : "other"}`;
    div.innerHTML = `
      <small>${msg.user}</small>
      ${msg.text}
    `;

    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  });
});


window.sendMessage = async function () {
  const input = document.getElementById("messageInput");

  if (!input.value) return;

  await addDoc(collection(db, "messages"), {
    text: input.value,
    user: auth.currentUser.email,
    time: serverTimestamp()
  });

  input.value = "";
};
