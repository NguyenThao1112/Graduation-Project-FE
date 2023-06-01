import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SearchInput from '../../../components/User/SearchInput/SearchInput';
import Styled from './style';
import AuthorCard from '../../../components/User/AuthorCard/AuthorCard';
import httpStatus from 'http-status';
import { useNavigate } from 'react-router-dom';
import ArticleCard from '../../../components/User/ArticleCard/ArticleCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getListArticleWithKeyword } from '../../../api/Article';
import { getListLecturerWithKeyword } from '../../../api/Lecturer';
import { SEARCH_OPTION } from '../../../constants/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [listArticles, setListArticles] = useState([]);
  const [listAuthors, setListAuthors] = useState([]);

  const [currentSearch, setCurrentSearch] = useState<string>(location.state.searchOption.value);

  const [navigate_searchOption, setNavigate_searchOption] = useState(location.state.searchOption);
  const [navigate_searchInput, setNavigate_searchInput] = useState(location.state.searchInput);

  const [openOption, setOpenOption] = useState(false);
  let optionRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      if (navigate_searchOption.label == "Article") {
        const data = {
          searchOption: "articles",
          keyword: navigate_searchInput
        }
        fetchListArticle(data);
        setCurrentSearch("article");
      } else {
        const data = {
          searchOption: "lecturers",
          keyword: navigate_searchInput
        }
        fetchListLectures(data);
        setCurrentSearch("author");
      }
    }
  };

  const fetchListArticle = async (data: any) => {
    console.log(data);
    const res = await getListArticleWithKeyword(data);
    if (res) {
      switch (res.status) {
        case httpStatus.OK: {
          const data = res.data.data;
          setListArticles(data);
          break;
        }
        case httpStatus.UNAUTHORIZED: {
          navigate('/');
          break;
        }
        default:
          break;
      }
    }
  };

  const fetchListLectures = async (data: any) => {
    const res = await getListLecturerWithKeyword(data);
    if (res) {
      switch (res.status) {
        case httpStatus.OK: {
          const data = res.data.data;
          setListAuthors(data);
          break;
        }
        case httpStatus.UNAUTHORIZED: {
          navigate('/');
          break;
        }
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (navigate_searchOption.label == "Article") {
      const data = {
        searchOption: "articles",
        keyword: navigate_searchInput
      }
      fetchListArticle(data);
    } else {
      const data = {
        searchOption: "lecturers",
        keyword: navigate_searchInput
      }
      fetchListLectures(data);
    }
  }, []);

  const handleBackSearch = () => {
    window.location.replace('http://localhost:5000/');
  };

  return (
    <Styled>
      <div className="center">
        <div className="btn-back-search" onClick={handleBackSearch}>
          <ArrowBackIcon /> quay lại trang tìm kiếm{' '}
        </div>
        <div
          style={{
            fontSize: '17px',
            margin: '12px',
            fontFamily: "Montserrat, sans-serif"
          }}>{`${navigate_searchOption.label.toUpperCase()}S SEARCH`}
        </div>

        <div
          style={{
            backgroundColor: '#e6e4e4',
            width: '100%',
            display: 'flex',
            height: "120px",
            justifyContent: 'center'
          }}>

          <div className="searchContainer">
            <input
              type="text"
              className="input_search"
              placeholder="Search by name or keyword"
              value={navigate_searchInput}
              onChange={(e) => setNavigate_searchInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="searchOption">
              <div className="searchOption_title" onClick={() => setOpenOption(!openOption)}>
                <div>{navigate_searchOption.label}</div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              {openOption && (
                <div className="searchOption_option" ref={optionRef}>
                  {SEARCH_OPTION.map((item) => (
                    <div
                      className="searchOption_option_item"
                      onClick={() => {
                        setNavigate_searchOption(item);
                        setOpenOption(false);
                      }}>
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {currentSearch != "article" ? (
        <div className="center">
          <div className="list_article">
            {listAuthors ? listAuthors.map((item) => <AuthorCard data={item} />) : <>
              <div
                style={{
                  fontSize: '14px',
                  marginTop: '10px',
                  fontStyle: 'italic',
                  marginLeft: "-70px"
                }}>
                Không tìm thấy tác giả nào!
              </div>
            </>}
          </div>
        </div>
      ) : (
        <div className="center">
          <div className="content content_article">
            <div className="sort_article">
              <span
                style={{
                  marginRight: '20px',
                  fontSize: '16px',
                  color: '#0056ce',
                  fontWeight: 'bolder'
                }}>
                SORT BY
              </span>
              <button className="btn_sort">Most relevant</button>
              <button className="btn_sort">Most recent</button>
              <button className="btn_sort">Most cited</button>
            </div>
            <div className="list_article">
              {listArticles.length != 0 ? listArticles.map((item) => <ArticleCard data={item} />) : <>
                <div
                  style={{
                    fontSize: '14px',
                    marginTop: '10px',
                    fontStyle: 'italic',
                    marginLeft: "-70px"
                  }}>
                  Không tìm thấy bài báo khoa học nào!
                </div>
              </>}
            </div>
          </div>
        </div>
      )}
    </Styled>
  );
}
