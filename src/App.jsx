import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="Danilo Paravani"
            content="Primeiro post"
          />
          <Post
            author="Milton Neto"
            content="Segundo post"
          /> 
        </main>
      </div>
    </div>
  )
}
