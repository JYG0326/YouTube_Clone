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
            <input class="searchinput" type="CardText" placeholder="검색" />
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
          <S.cartegory>
            <S.Card><img class="home" src="home.png" /><S.CardText>홈</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>탐색</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>Shorts</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>구독</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <S.Card><img class="home" src="home.png" /><S.CardText>보관함</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>시청기록</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>내 동영상</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>나중에 볼 동영상</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>좋아요 표시한 동영상</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>재생목록</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <S.CG_font>구독</S.CG_font>
            <S.Card><img class="home" src="home.png" /><S.CardText>유튜버</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>유튜버</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>유튜버</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>유튜버</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>유튜버</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <S.CG_font>YOUTUBE 더보기</S.CG_font>
            <S.Card><img class="home" src="home.png" /><S.CardText>YouTube Premium</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>영화</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>게임</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>실시간</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>학습</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>스포츠</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <S.Card><img class="home" src="home.png" /><S.CardText>설정</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>신고기록</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>고객센터</S.CardText></S.Card>
            <S.Card><img class="home" src="home.png" /><S.CardText>의견 보내기</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <p>기타등등</p>
          </S.cartegory>
        </div>
      </aside>
    </div>
  );
}

export default App;
