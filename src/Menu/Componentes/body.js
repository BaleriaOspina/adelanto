import React from "react";
//import logodef from "../imagenes/logodef.png";

class body extends React.Component {
  render() {
    return (
      <div>
        <div className="levelOne"></div>
        <div>
          <h1 className="caja"> Verb To-Be</h1>
        </div>
        <div className="container">
          <a className="btn " href="Learn" role="button">
            <svg
              width="15em"
              height="15em"
              viewBox="0 0 16 16"
              className="bi bi-play-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              href=""
            >
              <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </a>

          <a className="btn " href="Learn" role="button">
            <svg
              width="10em"
              height="10em"
              viewBox="0 0 16 16"
              className="bi bi-book-half"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8.5 2.687v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
              />
            </svg>
          </a>

          <a className="btn " href="Learn" role="button">
            <svg
              width="15em"
              height="12em"
              viewBox="0 0 16 16"
              className="bi bi-award-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
            </svg>
          </a>

          <a className="btn " href="Learn" role="button">
            <svg
              width="15em"
              height="13em"
              viewBox="0 0 16 16"
              className="bi bi-person-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          </a>
        </div>

        <footer className="footer"></footer>
      </div>
    );
  }
}

export default body;
