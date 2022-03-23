import './App.css';
import './styled.ts'
import * as S from './styled.ts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="main_ui">
          <img class="list" src="list.png" />
          <img class="logo" src="YT_logo.png" />
          <div class="searchbox">
            <input class="searchinput" type="text" placeholder="검색" />
            <img class="searchbtn" src="search.jpg" />
          </div>
          <div class="usermenu">
            <img class="make" src="make.png" />
            <img class="menu" src="menu.png" />
            <img class="alarm" src="alarm.png" />
            <img class="icon" src="icon.jpg" />
          </div>
        </div>
        <div class="sub_ui">
          <button class="filterbtn">전체</button>
          <button class="filterbtn">믹스</button>
          <button class="filterbtn">음악</button>
          <button class="filterbtn">게임</button>
          <button class="filterbtn">만화 영화</button>
          <button class="filterbtn">실시간</button>
          <button class="filterbtn">요리 프로그램</button>
          <button class="filterbtn">액션 어드벤쳐 게임</button>
          <button class="filterbtn">요리</button>
          <button class="filterbtn">최근에 업로드된 동영상</button>
          <button class="filterbtn">감상한 동영상</button>
          <button class="filterbtn">새로운 맞춤 동영상</button>
        </div>
      </header>
      <aside>
        <div class="side_ui">
          <div class="cartegory">
            <S.Test><img class="home" src="home.png" /><S.Text>홈</S.Text></S.Test>
            <S.Test><img class="home" src="home.png" /><S.Text>탐색</S.Text></S.Test>
            <S.Test><img class="home" src="home.png" /><S.Text>Shorts</S.Text></S.Test>
            <S.Test><img class="home" src="home.png" /><S.Text>구독</S.Text></S.Test>
          </div>
          <div class="cartegory">
            <S.Test><img class="home" src="home.png" /><S.Text>보관함</S.Text></S.Test>
            <S.Test><img class="home" src="home.png" /><S.Text>시청기록</S.Text></S.Test>
            <S.Test><img class="home" src="home.png" /><S.Text>내 동영상</S.Text></S.Test>
            <S.Test><img class="home" src="home.png" /><S.Text>나중에 볼 동영상</S.Text></S.Test>
            <S.Test><img class="home" src="home.png" /><S.Text>좋아요 표시한 동영상</S.Text></S.Test>
            <S.Test><img class="home" src="home.png" /><S.Text>재생목록</S.Text></S.Test>
          </div>
          <div class="cartegory">
            <p class="subscribe">구독</p>
            <div class="card"><img class="home" src="home.png" /><p>쫀득</p></div>
            <div class="card"><img class="home" src="home.png" /><p>흑마술사</p></div>
            <div class="card"><img class="home" src="home.png" /><p>백마법사</p></div>
            <div class="card"><img class="home" src="home.png" /><p>호_루</p></div>
            <div class="card"><img class="home" src="home.png" /><p>자간</p></div>
            <div class="card"><img class="home" src="home.png" /><p>용상민</p></div>
            <div class="card"><img class="home" src="home.png" /><p>컴마왕</p></div>
          </div>
          <div class="cartegory">
            <p class="subscribe">YOUTUBE 더보기</p>
            <div class="card"><img class="home" src="home.png" /><p>YouTube Premium</p></div>
            <div class="card"><img class="home" src="home.png" /><p>영화</p></div>
            <div class="card"><img class="home" src="home.png" /><p>게임</p></div>
            <div class="card"><img class="home" src="home.png" /><p>실시간</p></div>
            <div class="card"><img class="home" src="home.png" /><p>학습</p></div>
            <div class="card"><img class="home" src="home.png" /><p>스포츠</p></div>
          </div>
          <div class="cartegory">
            <div class="card"><img class="home" src="home.png" /><p>설정</p></div>
            <div class="card"><img class="home" src="home.png" /><p>신고기록</p></div>
            <div class="card"><img class="home" src="home.png" /><p>고객센터</p></div>
            <div class="card"><img class="home" src="home.png" /><p>의견 보내기</p></div>
          </div>
          <div class="cartegory">
            <p> 대충 쓸모없는 글자들</p>
            <p> 대충 쓸모없는 글자들</p>
            <p> 대충 쓸모없는 글자들</p>
            <p> 대충 쓸모없는 글자들</p>
            <p> © 2022 Google LLC</p>
            <p> CEO: 선다 피차이</p>
            <p> 주소: 1600 Amphitheatre Parkway,</p>
            <p> Mountain View, CA 94043, USA.</p>
            <p> 전화: 080-822-1450(무료)</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
