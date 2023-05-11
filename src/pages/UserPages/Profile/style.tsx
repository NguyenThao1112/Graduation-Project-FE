import styled from 'styled-components';

const Styled = styled.div`
  .header_topbar {
    margin-top: 10px;
    width: 100%;
    height: 35px;
    background-color: #f7f7f7;
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
  };

  .btn-back-search {
    width: 200px;
    margin-right: 300px;
    margin-left: 50px;
    cursor: pointer;
    font-family: proxima-nova, sans-serif;
    font-size: 12px;
    color: #959595;
  }

  .text-area {
    width: 100%;
    margin: 59px;
    padding: 15px;
    outline: none;
    resize: none;
    font-size: 16px;
    border-radius: 5px;
    border-color: #bfbfbf;
    height: 430px;
    margin-left: -10px;
    margin-top: 5px;
    background-color: #efeeee;
  }

  .text-area:focus {
    border-radius: 5px;
    padding: 14px;
    border-color: black;
  }

  .text-area::-webkit-scrollbar {
    width: 0px;
  }

  .btn-save-profile {
    width: 70px;
    height: 40px;
    font-size: 13px;
    border-radius: 5px;
  }

  .btn-save-profile:hover {
    background-color: black;
    color: white;
  }

  .main-field {
    display: flex;
    align-content: center;
  }

  .main-field button {
    border: none;
    font-size: 12px;
    color: #666666;
    font-style: italic;
  }


  .btn-back-search:hover {
    text-decoration: underline;
    color: black;
  }

  .header_tab {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: space-between;
  }

  .content_tab {
    margin-left: 50px;
    font-size: 16px;
    cursor: pointer;
    border: #959595;
  }

  .content_tab:hover {
    color: #3f51b5;
  }

  .content_tab:hover::after {
    width: 100%;
  }

  .content_tab_name {
    color: #959595;
    position: relative;
    font-size: 14px;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
  }

  .content_tab_name:hover{
    color: black;
  }

  .content_tab_name::after {
    content: '';
    background-color: black;
    width: 0;
    display: block;
    height: 2px;
    position: absolute;
    transition: all 0.3s;
  }

  .container {
    display: flex;
    max-width: 1356px;
    margin: 0 200px 0 200px;
  }

  .profile {
    background-color: #323232;
    //height: 100vh;
    border-radius: 20px;
    box-shadow: 0 0 20px hsla(0,0%,51%,.16);
    font-size: 14px;
    font-weight: 300;
    letter-spacing: .28px;
    line-height: 17px;
    padding: 0 14px 12px;
    width: 256px;
    display: flex;
    flex-direction: column;
    color: #f7f7f7;
  }

  .tab-selected {
    font-weight: bold;
    color: black;
  }

  .content-profile {
    background-color: #efeeee;
    width: 840px;
    height: 100vh;
    margin-left: 20px;
    border-radius: 20px;
    padding: 15px;
    height: auto;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 30px;
  }

  .img-avatar {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 30px;
  }

  .name-profile {
    font-family: proxima-nova, sans-serif;
    font-size: 23px;
    line-height: 26px;
    color: #ffffff;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 10px;
  }

  .line {
    /* background-image: linear-gradient(90deg,hsla(0,0%,100%,.55) 1px,transparent 0);
    background-repeat: repeat-x;
    background-size: 6px 1px; */
    flex: none;
    height: 0.1px;
    font-weight: 400;
    color: white;
    letter-spacing: 15px;
    font-size: 7px;
    justify-content: center;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .field-profile {
    margin-top: 30px;
    height: 45px;
    width: auto;
    padding: 10px;
    border: 2px solid white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .field-profile-info {
    font-size: 14px;
    margin-bottom: 7px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bolder;
  }

  .field-profile-info a:hover {
    text-decoration: underline;
  }

  .title_content {
    font-size: 15px;
    font-weight: bold;
    line-height: 24px;
  }
  .main_content {
    text-align: left;
  }

  .main_content h4 {
    font-weight: bolder;
    margin-left: 5px;
    margin-bottom: -5px;
  }

  .data_content {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: .3px;
    text-align: left;
    white-space: pre-wrap;
    font-weight: 350;
    margin-left: 13px;
  }

  .edit-profile {
    margin: 0 auto;
    margin-top: 65px;
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #474747;
    border-radius: 20px;
    height: 60px;
    width: auto;
    cursor: pointer;
  }

  .edit-profile:hover {
    background-color: #666666;
  }

  .btn-edit-profile {
    padding: 0.9rem 1.8rem;
    font-size: 16px;
    color: white;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
  }

  .btn-add-profile {
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid #323232;
    border-radius: 20px;
    height: 45px;
    width: auto;
    margin-bottom: 10px;
  }
  .btn-add-profile:hover {
    background-color: #323232;
    color: white;
  }
  .scopus-profile a {
    color: #212529;
    text-decoration: none;
  }
  .scopus-profile a:hover {
    text-decoration: underline;
  }
  .scopus-profile.link {
    display: flex;
    align-items: center;
  }
  .scopus-profile.link h3 {
    margin: 0;
    margin-right: 10px;
  }

  .footer {
    height: 100px;
  }


  /*  
    temp
  */

  .card_article {
    box-sizing: border-box;
    width: 790px;
    height: auto;
    background: #ffffff;
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.5s;
    user-select: none;
    font-weight: bolder;

    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;

    border-radius: 5px;

    padding-top: 20px;
    padding-bottom: 20px;

    margin-bottom: 20px;
  }

  .icon_more {
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-top-part {
    width: 100%;
    height: 70%;
    padding: 15px;
    display: flex;
  }

  .left-part {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .right-part {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    font-weight: 300;

    &_group {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
    }

    &__num {
      display: inline-block;
      font-size: 18px;
      margin: auto;
    }

    &__title {
      font-size: 13px;
      margin-right: auto;
    }
  }

  .user-name {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .name {
    font-size: 20px;
    font-weight: 600;
  }

  .user-field {
    font-size: 15px;
    font-weight: 400;
    font-style: italic;
    margin: 5px 0;
  }

  .name:hover {
    text-decoration: underline;
  }

  .role {
    font-size: 10px;
    color: lightcyan;
    font-weight: bold;
    text-transform: lowercase;
    background-color: lightskyblue;
    padding: 4px 10px;
    border-radius: 15px;
  }

  .position {
    color: grey;
    font-size: 13px;
  }

  .card-bottom-part {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding: 15px;
    border: none;

    &__group {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #206edb;
    }

    &__item {
      cursor: pointer;
      font-size: 14px;
      font-weight: 400;
    }

    &__item:hover {
      text-decoration: underline;
      color: #0145a4;
    }
  }

  .detail_article {
    position: fixed;

    top: 100px;
    right: -100%;

    border-radius: 10px;

    width: 380px;
    min-height: 100vh;

    padding: 20px 0px 20px 30px;

    background: #fff;

    box-shadow: -2px 0 4px hsl(0 4% 15% / 10%);
    box-shadow: rgba(0, 0, 0, 0.12) -8px 0px 12px 0px;

    transition: 0.6s;
  }

  .detail_article_active {
    top: 100px;
    right: 0;
  }

  .nav-tabs .nav-item .nav-link {
    font-size: 16px;
    font-weight: 300;
    padding: 5px 20px;
    border: none !important;
  }

  .nav-tabs .nav-link.active {
    border: none !important;
    font-weight: 500;
    color: #0056ce !important;
    border-bottom: 2px solid #0056ce !important;
  }

  .detail_header {
    display: block;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title_detail {
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
  }

  .detail_title {
    font-size: 14px;
    color: rgb(115, 115, 115);
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;
  }

  .detail_content {
    font-size: 14px;
  }
  .popup_container {
    height: 100vh;
    overflow: scroll;
    padding-right: 20px;
  }

  .popup_container ::-webkit-scrollbar {
    display: none;
  }

  .popup_container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .mini {
    &_card_article {
      cursor: pointer;
      transition: all 0.5s;
      font-weight: bolder;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 20px;
    }

    &_card_article:hover {
      background-color: rgb(225, 238, 255);
    }

    &_name {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .card_article:hover {
    background-color: rgb(225, 238, 255);
  }
  img {
    width: 100%;
  }

  .search-radio {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: -20px;
    width: 380px;
    margin-left: -130px;
  }
  .search-radio p {
    margin-bottom: 0;
    margin-right: 50px;
  }
  .search-form-check {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .form-check-input {
    cursor: pointer;
  }
  .form-check-input:hover, .form-check-input:focus, .form-check-input:checked {
    box-shadow: 0 0 0 .125rem rgba(13, 110, 253, .25);
  }
  .header_article input::placeholder {
    font-style: italic;
  }
`;

export default Styled;
