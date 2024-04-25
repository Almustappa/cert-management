import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <div>
      <header id="header" className="">
	      <div className="wrap">

	        <h1><Link to="/">Company Logo</Link></h1>

		      <a href="javascript:" className="btn_user" title="회원메뉴"><i className="fa fa-user-o" aria-hidden="true"></i></a>

		      <nav className="user">
			      <ul>
				      <li><a href="https://ehf1116.mycafe24.com/bbs/member_confirm.php?url=https://ehf1116.mycafe24.com/bbs/register_form.php">My page</a></li>
				      <li><a href="https://ehf1116.mycafe24.com/bbs/logout.php">Log Out</a></li>				
				      <li className="admin"><a href="https://ehf1116.mycafe24.com/adm/" target="_blank">Admin</a></li>
			      </ul>
		      </nav>

		      <nav className="sns mobile_no">
			      <ul>
				      <li><a href="javascript:">카카오</a></li>
				      <li><a href="javascript:">인스타</a></li>
				      <li><a href="javascript:">유튜브</a></li>
			      </ul>
		      </nav>

		      <a href="javascript:" className="btn_search" title="검색"><i className="fa fa-search" aria-hidden="true"></i></a>
		      <a href="javascript:" className="btn_gnb mobile_only on" title="모바일 메뉴 열기/닫기"><i className="fa fa-bars" aria-hidden="true"></i></a>

		      <nav className="gnb on">
			      <ul>
				      <li className="depth1 ">
                <Link to="/arc01/0101">미래 건축구조기술사</Link>
					      <i className="fa fa-chevron-down mobile_only" aria-hidden="true"></i>
					      <ul>
                  <li className="depth2"><Link to="/arc01/0101">About 신동환</Link></li>
                  <li className="depth2"><Link to="/arc01/0102">동환's Skill</Link></li>
                  <li className="depth2"><Link to="/arc01/0103">동환's Hobby</Link></li>
						      <li className="depth2"><Link to="/arc01/0104">동환's 작품사진</Link></li>
                  <li className="depth2"><Link to="/arc01/0105">동환's 추억</Link></li>
					      </ul>
				      </li>

				      <li className="depth1 ">
                <Link to="/arc02/0201">건축관련 자격증 소개</Link>
					      <i className="fa fa-chevron-down mobile_only" aria-hidden="true"></i>
					      <ul>
                  <li className="depth2"><Link to="/arc02/0201">시험 소개</Link></li>
                  <li className="depth2"><Link to="/arc02/0202">시험 일정</Link></li>
                  <li className="depth2"><Link to="/arc02/0203">시험 출제기준</Link></li>
						      <li className="depth2"><Link to="/arc02/0204">시험 응시자격</Link></li>
                  <li className="depth2"><Link to="/arc02/0205">종목별 상세정보</Link></li>
                  <li className="depth2"><Link to="/arc02/0206">변천일람표</Link></li>
                  <li className="depth2"><Link to="/arc02/0207">비상대비자원관리 종목</Link></li>
					      </ul>
				      </li>
								
				      <li className="depth1 ">
                <Link to="/arc03/0301">학습실(VOD,PDF)</Link>
					      <i className="fa fa-chevron-down mobile_only" aria-hidden="true"></i>
					      <ul>
                  <li className="depth2"><Link to="/arc03/0301">필기 모의시험</Link></li>
                  <li className="depth2"><Link to="/arc03/0302">실기 모의시험</Link></li>
                  <li className="depth2"><Link to="/arc03/0303">건축구조기술사</Link></li>
                  <li className="depth2"><Link to="/arc03/0304">건축기사, 건축산업기사</Link></li>
                  <li className="depth2"><Link to="/arc03/0305">전산응용건축제도기능사</Link></li>
                  <li className="depth2"><Link to="/arc03/0306">건축사</Link></li>
					      </ul>
				      </li>
								
				      <li className="depth1 ">
                <Link to="/arc04/0401">건축 커뮤니티</Link>
					      <i className="fa fa-chevron-down mobile_only" aria-hidden="true"></i>
					      <ul>
                  <li className="depth2"><Link to="/arc04/0401">종합 게시판</Link></li>
                  <li className="depth2"><Link to="/arc04/0402">FAQ</Link></li>
                  <li className="depth2"><Link to="/arc04/0403">건축구조기술사</Link></li>
                  <li className="depth2"><Link to="/arc04/0404">건축기사</Link></li>
                  <li className="depth2"><Link to="/arc04/0405">건축산업기사</Link></li>
                  <li className="depth2"><Link to="/arc04/0406">전산응용건축제도기능사</Link></li>
                  <li className="depth2"><Link to="/arc04/0407">중직무분야 자료실</Link></li>
                  <li className="depth2"><Link to="/arc04/0408">유사 직무분야 자료실</Link></li>
                  <li className="depth2"><Link to="/arc04/0409">건축사 관련 자료실</Link></li>
                  <li className="depth2"><Link to="/arc04/0410">민간자격 관련 자료실</Link></li>
					      </ul>
				      </li>
								
				      <li className="depth1 ">
                <Link to="/arc05/0501">내 강의실</Link>
					      <i className="fa fa-chevron-down mobile_only" aria-hidden="true"></i>
					      <ul>
                  <li className="depth2"><Link to="/arc05/0501">내 기출문제</Link></li>
                  <li className="depth2"><Link to="/arc05/0502">내 학습자료</Link></li>
                  <li className="depth2"><Link to="/arc05/0503">학습기록 확인</Link></li>
                  <li className="depth2"><Link to="/arc05/0504">모의시험 성적</Link></li>
					      </ul>
				      </li>
			      </ul>

			      <nav className="sns mobile_only">
				      <ul>
					      <li><a href="javascript:">카카오</a></li>
					      <li><a href="javascript:">인스타</a></li>
					      <li><a href="javascript:">유튜브</a></li>
				      </ul>
			      </nav>
		      </nav>

	      </div>
      </header>
    </div>

  )
}

export default Header