import React, { useState, useEffect } from 'react';
import Styled from './style';
import { useNavigate } from 'react-router-dom';

const MyArticleCard = (props: any) => {
  const { data } = props;
  const navigate = useNavigate();
  const [authorList, setAuthorList] = useState<string[]>([]);

  const getAuthorList = (data: any) => {
    let nameList: string[] = [];
    // eslint-disable-next-line array-callback-return
    data?.authors.map((item: any) => {
      if (item.lecturer_name !== undefined && item.lecturer_name !== null) {
        nameList.push(item.lecturer_name);
      }
      if (item.lastName && item.firstName) {
        let name = `${item.lastName} ${item.firstName}`;
        nameList.push(name);
      }
    });

    setAuthorList(nameList);
  };

  useEffect(() => {
    getAuthorList(data);
  }, [data]);

  console.log(authorList);

  const handleGoToDetail = (id: any) => {
    navigate(`/article-detail/${id}`);
  };

  return (
    <Styled>
      <div className="card_article">
        <div className="card-top-part">
          <div className="left-part">
            <div className="user-name">
              <div className="link_title" onClick={() => handleGoToDetail(data.id)}>
                <p className="name">{data?.name}</p>
              </div>
            </div>
            <div className="user-field">{data?.journal ? data?.journal : data?.conference}</div>
            <div>
              <div style={{ display: 'inline' }}>
                <div className="article-author_list2">
                  {authorList
                    .map((item) => {
                      return item;
                    })
                    .join(', ')}
                </div>
              </div>
            </div>
            <div className="user-position">{data?.abstract}</div>
          </div>
          <div className="right-part">
            <div className="citationContainer">
              <div className="right-part__num">{data?.citationCount ? data?.citationCount : 0}</div>
              <div>Trích dẫn</div>
            </div>
            <div>
              {data?.rank && data?.rank !== 'Unranked' ? (
                <div className="citationContainer">
                  <div className="right-part__num">{data?.rank}</div>
                  <div>Ranking</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default MyArticleCard;
