import React, { useState } from 'react';
import './SupportPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('notice');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
    <div className="header">
        <h1  className="header-title">SUPPORT</h1>
        <div id="header-menu">
          <div className="header-menu" onClick={() => window.location.href = 'http://www.playground20.com/'}>
            <i className="fa-solid fa-house"></i>
            <br />
            <span style={{ paddingRight:'10px' }} >홈</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Nav */}
        <ul className="nav nav-pill" role="tablist">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'notice' ? 'active' : ''}`}
              onClick={() => handleTabClick('notice')}
              href="#notice"
            >
              공지사항
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'menu1' ? 'active' : ''}`}
              onClick={() => handleTabClick('menu1')}
              href="#menu1"
            >
              사용방법
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'menu2' ? 'active' : ''}`}
              onClick={() => handleTabClick('menu2')}
              href="#menu2"
            >
              계정문의
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'menu3' ? 'active' : ''}`}
              onClick={() => handleTabClick('menu3')}
              href="#menu3"
            >
              이용문의
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {/* 공지사항 */}
          <div id="notice" className={`container tab-pane ${activeTab === 'notice' ? 'active' : 'fade'}`}>
              <div className='menuinfo'>
                <a href='www.playground20.com' className='playground'>홈</a>
                <strong> &gt;</strong>
                <span>공지사항</span>
              </div>
            <hr />
            <a href="#notice1" data-toggle="collapse">시스템 업데이트 안내</a>
            <hr />
            <div id="notice1" className="collapse">
              <div className="notice-box">
                <div className='date'>2024-11-13 20:00 </div>
                <span>   <p>안녕하세요,    <img src="/playground.png" alt="Playground 이미지" />입니다.</p>
                  <p>고객 여러분께 보다 나은 서비스를 제공하기 위해, <strong>2024년 11월 16일 00:00부터 02:00까지</strong> 시스템 업데이트를 진행합니다. </p>
                  <p>이번 업데이트는 다음과 같은 개선 사항을 포함하고 있습니다:</p>
                  <ul>
                    <li><strong>사용자 인터페이스 개선</strong><p> 메인 페이지와 상품 페이지의 레이아웃을 보다 직관적으로 변경하여 사용자 경험을 향상시켰습니다.</p></li>
                    <li><strong>결제 시스템 강화</strong>: 최신 버전의 결제 시스템을 도입하여 더 안전하고 빠른 결제가 가능하도록 했습니다.</li>
                    <li><strong>신규 게임 추가</strong>: 다양한 최신 게임 타이틀이 추가되었습니다. 추가된 게임 목록과 할인 이벤트에 많은 관심 부탁드립니다.</li>
                    <li><strong>FAQ 업데이트</strong>:<p> 고객님의 소중한 의견을 반영하여 FAQ와 고객 지원 페이지를 새롭게 업데이트했습니다.</p></li>
                  </ul>
                  <p><span className='error'>업데이트 기간 동안 일부 기능이 제한될 수 있는 점 양해 부탁드립니다.</span> 업데이트 후, 더욱 향상된 서비스를 제공할 수 있도록 최선을 다하겠습니다.</p>
                  <p>감사합니다.</p>
                  <p><span className='playground'>Playground</span> 고객 지원 팀</p>
                </span>
              </div>
              <hr />
            </div>


            <a href="#notice2" data-toggle="collapse">연말 이벤트</a>
            <hr />
            <div id="notice2" className="collapse">
              <div className="notice-box">
                <div className='date'>2024-10-30 9:00 </div>
                <span>
                  <p>안녕하세요, <img src="/playground.png" alt="Playground 이미지" />입니다.</p>
                  <p>올 한 해 동안 저희 <span className='playground'>Playground</span>를 이용해 주신 고객님들께 감사의 마음을 전하고자, <strong>연말 행사</strong>를 개최합니다!</p><p> 이번 행사는 <strong>2024년 12월 1일부터 12월 31일까지</strong> 진행되며, 최고의 리뷰와 가장 인기 있는 게임을 선정하여 특별한 상품을 제공할 예정입니다.</p>
                  <p>이벤트 참여 방법은 다음과 같습니다:</p>
                  <ul>
                    <li><strong>최고의 리뷰</strong>: 2024년 동안 남긴 리뷰 중 가장 유익하고 독창적인 리뷰를 선정하여, 선정된 고객에게 <span className='info'>최신 게임 타이틀</span>을 선물합니다.</li>
                    <li><strong>가장 인기 있는 게임</strong><p>고객님들의 구매 데이터를 바탕으로 가장 많이 판매된 게임을 선정하여, 해당 게임을 구매한 고객에게 <span className='info'>Playground 기프트 카드 5만원</span>을 드립니다.</p> </li>
                  </ul>
                  <p>여러분의 소중한 의견을 통해 최고의 게임과 리뷰를 선정하는 이번 행사에 많은 참여와 관심 부탁드립니다!</p>
                  <p><span className='playground'>Playground</span> 고객 지원 팀</p>
                </span>
              </div>
              <hr />
            </div>
            <a href="#notice3" data-toggle="collapse">포인트 적립 이벤트 안내</a>
            <hr />
            <div id="notice3" className="collapse">
              <div className="notice-box">
                <div className='date'>2024-11-12 14:00</div>
                <span>
                  <p>안녕하세요, <img src="/playground.png" alt="Playground 이미지" />입니다.</p>
                  <p>기쁜 소식을 전해드립니다! 이제 저희 <span className='playground'>Playground</span>에서는 <span className='info'>포인트 적립 기능</span>이 새롭게 추가되었습니다.</p> <p>모든 구매에 대해 기본적으로 <span className='info'>1%</span>의 포인트가 적립됩니다.</p>
                  <p>적립된 포인트는 향후 구매 시 현금처럼 사용 가능하니, 기회를 놓치지 마시고 많은 이용 부탁드립니다!</p>
                  <p><span className='playground'>Playground</span> 고객 지원 팀</p>
                </span>
              </div>
              <hr />
            </div>

            <a href="#notice4" data-toggle="collapse">게임 신작 출시 안내</a>
            <hr />
            <div id="notice4" className="collapse">
              <div className="notice-box">
                <div className='date'>2024-11-20 11:00</div>
                <span>
                  <p>안녕하세요, <img src="/playground.png" alt="Playground 이미지" />입니다.</p>
                  <p>고객 여러분께 흥미로운 소식을 전합니다. 저희 <span className='playground'>Playground</span>에서 <strong>2024년 11월 25일</strong>에 새로운 게임 타이틀을 출시합니다.</p><p> 이 게임은 매력적인 스토리와 혁신적인 게임플레이로 많은 기대를 모으고 있으며, 출시 당일에는 특별 할인 이벤트도 예정되어 있습니다.</p>
                  <p>신작에 대한 자세한 정보는 저희 웹사이트에서 확인하실 수 있으며, 출시일을 놓치지 마시고 미리 준비해 주시기 바랍니다!</p>
                  <p><span className='playground'>Playground</span> 고객 지원 팀</p>
                </span>
              </div>
              <hr />
            </div>

            <a href="#notice5" data-toggle="collapse">Playground 공식 오픈 안내</a>
            <hr />
            <div id="notice5" className="collapse">
              <div className="notice-box">
                <div className='date'>2024-10-20 14:00</div>
                <span>
                  <p>안녕하세요, <img src="/playground.png" alt="Playground 이미지" />입니다.</p>
                  <p>드디어 저희 게임 쇼핑몰 <span className='playground'>Playground</span>가 공식 오픈하게 되었음을 알려드립니다. </p><p>고객님들께 부담 없이 다양한 게임을 즐길 수 있는 공간을 제공하기 위해 최선을 다하고 있습니다.</p>
                  <p>Playground에서는 모든 고객님들께 최고의 게임 구매 경험을 제공하고자 하며, 앞으로도 다양한 이벤트와 프로모션을 통해 고객님들의 기대에 부응할 것입니다.</p><p> 저희 쇼핑몰을 통해 최신 게임과 혜택을 놓치지 마시고, 즐거운 쇼핑을 경험하시기 바랍니다.</p>
                  <p>여러분의 많은 사랑과 관심을 부탁드립니다. 감사합니다.</p>
                  <p><span className='playground'>Playground</span> 고객 지원 팀</p>
                </span>
              </div>
              <hr />
            </div>

          </div>
          {/* 사용방법 */}
          <div id="menu1" className={`container tab-pane ${activeTab === 'menu1' ? 'active' : 'fade'}`}>
            <div className='menuinfo'>
                <a href='www.playground20.com' className='playground'>홈</a>
                <strong> &gt;</strong>
                <span>사용방법</span>
            </div>
            <h3>사용방법</h3>
            <div className='howdo'>
              <img src="/1.png" alt="사용방법1" />
              <img src="/2.png" alt="사용방법2" />
              <img src="/3.png" alt="사용방법3" />
              <img src="/4.png" alt="사용방법4" />
            </div>
          </div>

          {/* 계정문의 */}
          <div id="menu2" className={`container tab-pane ${activeTab === 'menu2' ? 'active' : 'fade'}`}>
          <div className='menuinfo'>
                <a href='www.playground20.com' className='playground'>홈</a>
                <strong> &gt;</strong>
                <span>계정문의</span>
            </div>
            <h3>FAQ | 계정</h3>
            <div className="list-group">
              <div className="list-group-item list-group-item-action" data-toggle="collapse" href="#faqa1">
                <i className="fa-solid fa-q"></i> 아이디를 잃어버렸어요
              </div>
              <div id="faqa1" className="collapse list-group-item">
                <span><i className="fa-regular fa-l"></i> 아이디 찾기는 '홈  &gt; 회원가입' 하단에 '<span className="info">아이디 찾기</span>'를 통해 찾으실 수 있습니다.</span>
              </div>

              <div className="list-group-item list-group-item-action" data-toggle="collapse" href="#faqa2">
                <i className="fa-solid fa-q"></i> 비밀번호를 잃어버렸어요
              </div>
              <div id="faqa2" className="collapse list-group-item">
                <span><i className="fa-regular fa-l"></i> 비밀번호는 '홈  &gt; 회원가입' 하단에 '<span className="info">비밀번호 찾기</span>'를 통해 찾으실 수 있습니다. (단, 기존 이메일이 필요합니다)</span>
              </div>

              <div className="list-group-item list-group-item-action" data-toggle="collapse" href="#faqa3">
                <i className="fa-solid fa-q"></i> 이메일/아이디를 바꾸고 싶어요
              </div>
              <div id="faqa3" className="collapse list-group-item">
                <span><i className="fa-regular fa-l"></i> 사용자의 이름 또는 이메일 주소는 <span className="error">변경할 수 없습니다</span>.</span>
              </div>

              <div className="list-group-item list-group-item-action" data-toggle="collapse" href="#faqa4">
                <i className="fa-solid fa-q"></i> 비밀번호를 바꾸고 싶어요
              </div>
              <div id="faqa4" className="collapse list-group-item">
                <span><i className="fa-regular fa-l"></i> 비밀번호 변경은 '<span className="info">마이페이지  &gt; 회원정보 수정</span>'에서 가능합니다.</span>
              </div>

              <div className="list-group-item list-group-item-action" data-toggle="collapse" href="#faqa5">
                <i className="fa-solid fa-q"></i> 회원정보를 변경하고 싶어요
              </div>
              <div id="faqa5" className="collapse list-group-item">
                <span><i className="fa-regular fa-l"></i> 이름 및 이메일을 제외한 회원정보(비밀번호, 주소, 번호 등)는 '<span className="info">마이페이지 &gt; 회원정보 수정</span>'에서 가능합니다.</span>
              </div>

            </div>
          </div>

          {/* 이용문의 */}
          <div id="menu3" className={`container tab-pane ${activeTab === 'menu3' ? 'active' : 'fade'}`}>
          <div className='menuinfo'>
                <a href='www.playground20.com' className='playground'>홈</a>
                <strong> &gt;</strong>
                <span>이용문의</span>
            </div>
            <h3>FAQ | 이용</h3>
            <div className="list-group">
              <div className="list-group-item list-group-item-action" data-toggle="collapse" href="#faqu1">
                <i className="fa-solid fa-q"></i> 구매방법은 어떻게 되나요?
              </div>
              <div id="faqu1" className="collapse list-group-item">
                <span><i className="fa-regular fa-l"></i> 원하는 상품을 <span className="info">결제하기</span>를 통해 구매할 수 있습니다. 결제 시스템은 카카오페이와 이니시스를 통해 진행됩니다.</span>
              </div>

              <div className="list-group-item list-group-item-action" data-toggle="collapse" href="#faqu2">
                <i className="fa-solid fa-q"></i> 구매했는데 다운로드 창이 안 떠요
              </div>
              <div id="faqu2" className="collapse list-group-item">
                <span><i className="fa-regular fa-l"></i> 안정적이고 정확한 서비스를 위해 상품은 <span className="info">이메일 코드 전송</span>을 통해 제공합니다. 회원가입된 이메일을 확인해주시기 바랍니다.</span>
              </div>

              <div className="list-group-item list-group-item-action" data-toggle="collapse" href="#faqu3">
                <i className="fa-solid fa-q"></i> 결제가 안 됩니다
              </div>
              <div id="faqu3" className="collapse list-group-item">
                <span><i className="fa-regular fa-l"></i> 계좌이체 점검시간 '<span className="error">23:40~00:20</span>'에는 결제가 진행되지 않습니다. 이외에 결제에 문제가 있다면 문의 바랍니다.</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
