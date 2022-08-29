import './App.css';
import './styled.ts'
import * as S from './styled.ts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <S.main_ui>
          <S.list src="list.png" />
          <S.logo src="YT_logo.png" />
          <S.searchbox>
            <S.searchinput type="CardText" placeholder="검색" />
            <S.searchbtn src="search.jpg" />
          </S.searchbox>
          <S.usermenu>
            <S.make src="make.png" />
            <S.menu src="menu.png" />
            <S.alarm src="alarm.png" />
            <S.icon src="icon.jpg" />
          </S.usermenu>
        </S.main_ui>
        <S.sub_ui>
          <S.filterbtn>전체</S.filterbtn>
          <S.filterbtn>믹스</S.filterbtn>
          <S.filterbtn>음악</S.filterbtn>
          <S.filterbtn>게임</S.filterbtn>
          <S.filterbtn>만화 영화</S.filterbtn>
          <S.filterbtn>실시간</S.filterbtn>
          <S.filterbtn>요리 프로그램</S.filterbtn>
          <S.filterbtn>액션 어드벤쳐 게임</S.filterbtn>
          <S.filterbtn>요리</S.filterbtn>
          <S.filterbtn>최근에 업로드된 동영상</S.filterbtn>
          <S.filterbtn>감상한 동영상</S.filterbtn>
          <S.filterbtn>새로운 맞춤 동영상</S.filterbtn>
        </S.sub_ui>
      </header>
      <aside>
        <S.side_ui>
          <S.cartegory>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>홈</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>탐색</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>Shorts</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>구독</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>보관함</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>시청기록</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>내 동영상</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>나중에 볼 동영상</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>좋아요 표시한 동영상</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>재생목록</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <S.CG_font>구독</S.CG_font>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>유튜버</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>유튜버</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>유튜버</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>유튜버</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>유튜버</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <S.CG_font>YOUTUBE 더보기</S.CG_font>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>YouTube Premium</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>영화</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>게임</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>실시간</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>학습</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>스포츠</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>설정</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>신고기록</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>고객센터</S.CardText></S.Card>
            <S.Card><S.H_img src="home.png" alt="Icon_Home" /><S.CardText>의견 보내기</S.CardText></S.Card>
          </S.cartegory>
          <S.cartegory>
            <p>기타등등</p>
          </S.cartegory>
        </S.side_ui>
      </aside>
    </div>
  );
}

export default App;
