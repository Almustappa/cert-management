import React from 'react'

const Footer = () => {
  	return (
      	<footer id="footer" class="main">
			<div class="wrap">
				<h1><a href="/"></a></h1>

				<nav class="gnb">
					<ul>
						<li><a href="https://ehf1116.mycafe24.com/bbs/content.php?co_id=privacy"><strong>개인정보처리방침</strong></a></li>
						<li><a href="https://ehf1116.mycafe24.com/bbs/content.php?co_id=provision">서비스이용약관</a></li>
					</ul>			
				</nav>

				<div class="f_left">
					<div>
						<dt>회사명</dt>
						<dd>Company</dd>
						<dt>대표</dt>
						<dd>대표자명</dd>
						<dt>주소</dt>
						<dd>(00000) OO도 OO시 OO구 OO동 123-45</dd>
						<dt>사업자등록번호</dt>
						<dd>000-00-00000</dd>
						<dt>전화</dt>
						<dd>00-000-0000</dd>
						<dt>팩스</dt>
						<dd>00-000-0000</dd>
					</div>
      			</div>

	  			<div>
					<p class="copyright">Copyright © <strong>Company.</strong> All rights reserved.</p>
				</div>
			</div>

    		<a href="javascript:" id="top_btn"><i class="fa fa-angle-up" aria-hidden="true">
				</i><span class="sound_only">상단으로</span>
			</a>

		</footer>
  	)
}

export default Footer